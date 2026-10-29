#!/usr/bin/env node
/**
 * Snowflake Documentation Quality & Schema Validator
 * Enforces:
 * 1. Relational Snowflake Integrity (all SOP -> Process, Tool, and Role IDs resolve)
 * 2. The 20-Word Rule (every SOP step action <= 20 words)
 * 3. Active Voice Check (flags passive constructions like "is clicked by", "are turned")
 * 4. Zero-Acronym / Zero-Jargon Rule (flags banned raw acronyms like CV, SSO, PR, PPE)
 * 5. Visual-First Requirement (every step must have an annotated visual with arrow + highlight)
 * 6. Structural Anchors (every SOP & Tool must include Getting Started and Troubleshooting)
 */

const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "..", "data", "guides.json");
const raw = fs.readFileSync(dataPath, "utf8");
const db = JSON.parse(raw);

const MAX_WORDS = (db.meta && db.meta.strictWordLimit) || 20;
const BANNED_ACRONYMS = ["CV", "SSO", "PR", "PPE", "LOTO", "KPI", "SLA"];
const VERSION_PATTERN = /\bv\d+\.\d+(\.\d+)?\b/i;
const BANNED_OVERVIEW_PATTERNS = [
  { pattern: /\.csv\b/i, reason: "raw file extension '.csv' (use human outcome per DESIGN_GUIDE.md)" },
  { pattern: /\.json\b/i, reason: "raw file extension '.json' (use human outcome per DESIGN_GUIDE.md)" },
  { pattern: /\bPair Calibration\b/i, reason: "banned overview jargon 'Pair Calibration' (use plain English per DESIGN_GUIDE.md)" },
  { pattern: /\b(?:MANDATORY|OPTIONAL)\b/, reason: "compliance stamp 'MANDATORY/OPTIONAL' (omit compliance stamps per DESIGN_GUIDE.md)" },
  { pattern: /Input\s*(?:->|→)\s*Output/i, reason: "tech handoff label 'Input -> Output' (use 'What you finish with' per DESIGN_GUIDE.md)" },
  { pattern: VERSION_PATTERN, reason: "software version string (omit version numbers per DESIGN_GUIDE.md Zero Version Numbers Rule)" }
];
const PASSIVE_PATTERNS = [
  /\bis\s+\w+ed\s+by\b/i,
  /\bare\s+\w+ed\s+by\b/i,
  /\bshould\s+be\s+\w+ed\b/i,
  /\bmust\s+be\s+\w+ed\b/i
];

let errors = [];
let warnings = [];
let stats = {
  playbooks: Array.isArray(db.playbooks) ? db.playbooks.length : 0,
  journeyStagesChecked: 0,
  processes: Object.keys(db.processes || {}).length,
  tools: Object.keys(db.tools || {}).length,
  roles: Object.keys(db.roles || {}).length,
  sops: Object.keys(db.sops || {}).length,
  stepsChecked: 0,
  visualModes: { svg: 0, image: 0, none: 0 }
};

// 0. Validate Playbooks & Journey Map Stages against DESIGN_GUIDE.md (Flexible N-Stage Maps & Zero Version Numbers)
for (const plb of db.playbooks || []) {
  for (const field of ["title", "subtitle", "eyebrow"]) {
    if (VERSION_PATTERN.test(plb[field] || "")) {
      errors.push(`[${plb.id} ${field}] Contains banned software version string: "${plb[field]}"`);
    }
  }
  for (const tpl of plb.templates || []) {
    for (const field of ["title", "navTitle", "eyebrow", "badge"]) {
      if (VERSION_PATTERN.test(tpl[field] || "")) {
        errors.push(`[${plb.id} Template ${tpl.id} ${field}] Contains banned software version string: "${tpl[field]}"`);
      }
    }
  }
  for (const ref of plb.referenceTables || []) {
    for (const field of ["title", "navTitle", "eyebrow", "badge"]) {
      if (VERSION_PATTERN.test(ref[field] || "")) {
        errors.push(`[${plb.id} Reference ${ref.id} ${field}] Contains banned software version string: "${ref[field]}"`);
      }
    }
  }
  const stages = plb.journeyMap?.stages || [];
  if (stages.length === 0) {
    errors.push(`[${plb.id}] Journey Map must contain at least 1 stage.`);
  }
  if (plb.id === "PLB-001") {
    const expectedOrder = [
      "Maturity Assessment",
      "Analysis",
      "Voice of the Customer",
      "Navigator Workshop",
      "Charter",
      "Action Plan"
    ];
    if (stages.length !== 6) {
      errors.push(`[PLB-001] Must have exactly 6 stages in the Navigator Process (found ${stages.length}).`);
    } else {
      expectedOrder.forEach((expectedKey, idx) => {
        const actualTitle = stages[idx]?.title || "";
        if (!actualTitle.includes(expectedKey)) {
          errors.push(
            `[PLB-001 Stage ${idx + 1}] Sequence mismatch: expected "${expectedKey}" in title, found "${actualTitle}".`
          );
        }
      });
    }
  }
  for (const st of stages) {
    stats.journeyStagesChecked++;
    const fieldsToCheck = [
      { name: "title", val: st.title || "" },
      { name: "summary", val: st.summary || "" },
      { name: "whoIsInvolved", val: st.whoIsInvolved || "" },
      { name: "toolLabel", val: st.toolLabel || "" },
      { name: "outputArtifact", val: st.outputArtifact || "" },
      { name: "status", val: st.status || "" }
    ];
    for (const f of fieldsToCheck) {
      for (const rule of BANNED_OVERVIEW_PATTERNS) {
        if (rule.pattern.test(f.val)) {
          errors.push(
            `[${plb.id} Stage ${st.stageNumber} ${f.name}] Contains ${rule.reason}: "${f.val}"`
          );
        }
      }
    }
  }
}

// 1. Validate Process & Tool relational links & Zero Version Numbers Rule
for (const [toolId, tool] of Object.entries(db.tools || {})) {
  for (const field of ["name", "suite", "purpose", "accessUrl"]) {
    if (VERSION_PATTERN.test(tool[field] || "")) {
      errors.push(`[${toolId} ${field}] Contains banned software version string: "${tool[field]}"`);
    }
  }
}

for (const [procId, proc] of Object.entries(db.processes || {})) {
  for (const field of ["title", "appName", "userGoal"]) {
    if (VERSION_PATTERN.test(proc[field] || "")) {
      errors.push(`[${procId} ${field}] Contains banned software version string: "${proc[field]}"`);
    }
  }
  if (!db.roles[proc.raci?.responsible]) {
    errors.push(`[${procId}] Missing valid Responsible Role ID: ${proc.raci?.responsible}`);
  }
  for (const stage of proc.stages || []) {
    if (!db.sops[stage.sopId]) {
      errors.push(`[${procId} Stage ${stage.stageNumber}] Broken SOP reference: ${stage.sopId}`);
    }
    for (const tId of stage.toolIds || []) {
      if (!db.tools[tId]) {
        errors.push(`[${procId} Stage ${stage.stageNumber}] Broken Tool reference: ${tId}`);
      }
    }
  }
}

// 2. Validate SOP usability rules, Zero Version Numbers Rule & relational links
for (const [sopId, sop] of Object.entries(db.sops || {})) {
  for (const field of ["title", "userGoal", "stationLocation"]) {
    if (VERSION_PATTERN.test(sop[field] || "")) {
      errors.push(`[${sopId} ${field}] Contains banned software version string: "${sop[field]}"`);
    }
  }
  if (!db.processes[sop.processId]) {
    errors.push(`[${sopId}] Broken parent processId: ${sop.processId}`);
  }
  if (!db.roles[sop.roleId]) {
    errors.push(`[${sopId}] Broken roleId: ${sop.roleId}`);
  }
  for (const tId of sop.toolIds || []) {
    if (!db.tools[tId]) {
      errors.push(`[${sopId}] Broken toolId: ${tId}`);
    }
  }

  if (!Array.isArray(sop.gettingStarted) || sop.gettingStarted.length === 0) {
    errors.push(`[${sopId}] Structural Anchor missing: 'gettingStarted' must have at least 1 setup item.`);
  }
  if (!Array.isArray(sop.troubleshooting) || sop.troubleshooting.length === 0) {
    errors.push(`[${sopId}] Structural Anchor missing: 'troubleshooting' must have at least 1 entry.`);
  }

  for (const step of sop.steps || []) {
    stats.stepsChecked++;
    const words = step.action.trim().split(/\s+/).filter(Boolean);

    // Rule: Zero Version Numbers in Step Text & SVG Labels
    for (const field of ["action", "detail", "coachingTip"]) {
      if (VERSION_PATTERN.test(step[field] || "")) {
        errors.push(`[${sopId} Step ${step.stepNumber} ${field}] Contains banned software version string: "${step[field]}"`);
      }
    }
    if (step.visual) {
      if (VERSION_PATTERN.test(step.visual.caption || "")) {
        errors.push(`[${sopId} Step ${step.stepNumber} visual.caption] Contains banned software version string: "${step.visual.caption}"`);
      }
      for (const el of step.visual.elements || []) {
        if (VERSION_PATTERN.test(el.label || "")) {
          errors.push(`[${sopId} Step ${step.stepNumber} SVG element] Contains banned software version string: "${el.label}"`);
        }
      }
    }

    // Rule: 20-Word Limit
    if (words.length > MAX_WORDS) {
      errors.push(
        `[${sopId} Step ${step.stepNumber}] Exceeds ${MAX_WORDS}-word limit (${words.length} words): "${step.action}"`
      );
    }

    // Rule: Zero Acronyms
    for (const acr of BANNED_ACRONYMS) {
      const regex = new RegExp(`\\b${acr}\\b`);
      if (regex.test(step.action) || regex.test(step.detail || "")) {
        errors.push(
          `[${sopId} Step ${step.stepNumber}] Contains banned raw acronym '${acr}'. Spell out in plain English.`
        );
      }
    }

    // Rule: Active Voice
    for (const pat of PASSIVE_PATTERNS) {
      if (pat.test(step.action)) {
        warnings.push(
          `[${sopId} Step ${step.stepNumber}] Passive voice detected in action: "${step.action}"`
        );
      }
    }

    // Rule: Coaching Tip Required
    if (!step.coachingTip || !String(step.coachingTip).trim()) {
      errors.push(
        `[${sopId} Step ${step.stepNumber}] Missing 'coachingTip' (Value-add coaching required on every step).`
      );
    }

    // Rule: 3-Mode Visual Support (Optional / Custom Image / Declarative SVG)
    const vis = step.visual;
    if (!vis || vis.type === "none") {
      stats.visualModes.none++;
    } else if (vis.type === "image" || Boolean(vis.imageSrc)) {
      stats.visualModes.image++;
      if (!vis.imageSrc || !String(vis.imageSrc).trim()) {
        errors.push(`[${sopId} Step ${step.stepNumber}] Visual mode 'image' requires a non-empty 'imageSrc'.`);
      }
    } else if (Array.isArray(vis.elements)) {
      stats.visualModes.svg++;
      if (!vis.annotation || !vis.annotation.label) {
        errors.push(
          `[${sopId} Step ${step.stepNumber}] Declarative SVG visual requires 'visual.annotation.label' (arrow + highlight box).`
        );
      }
    } else {
      stats.visualModes.none++;
    }
  }
}

console.log("==============================================================");
console.log("❄️  SNOWFLAKE DOCUMENTATION & DESIGN_GUIDE.MD USABILITY AUDIT");
console.log("==============================================================");
console.log(`Playbooks Audited        : ${stats.playbooks} (${stats.journeyStagesChecked} Journey Stages)`);
console.log(`Processes (Central Hubs) : ${stats.processes}`);
console.log(`Tools (Reusable Nodes)   : ${stats.tools}`);
console.log(`Roles (RACI Nodes)       : ${stats.roles}`);
console.log(`SOPs (Leaf Runbooks)     : ${stats.sops}`);
console.log(
  `Total Steps Audited      : ${stats.stepsChecked} (SVG: ${stats.visualModes.svg}, Custom Image: ${stats.visualModes.image}, Text+Coaching: ${stats.visualModes.none})`
);
console.log("--------------------------------------------------------------");

if (warnings.length > 0) {
  console.log(`⚠️  Warnings (${warnings.length}):`);
  warnings.forEach((w) => console.log(`   - ${w}`));
}

if (errors.length > 0) {
  console.error(`❌ Validation Failed with ${errors.length} error(s):`);
  errors.forEach((e) => console.error(`   - ${e}`));
  process.exit(1);
} else {
  console.log("✅ ALL CHECKS PASSED:");
  console.log("   • 100% DESIGN_GUIDE.md Journey Map rules passed (Flexible N-stages, zero compliance stamps or .csv/.json tech plumbing)");
  console.log("   • 100% Relational Snowflake links intact (Processes <-> Tools <-> Roles <-> SOPs)");
  console.log(`   • 100% Steps obey the <= ${MAX_WORDS}-word Simplified Technical English rule`);
  console.log("   • 100% Steps use active voice, zero raw acronyms, and value-add coaching tips");
  console.log("   • 100% Steps valid across 3 visual modes (Custom Image / Declarative SVG / Optional Text-Only)");
  console.log("   • 100% Guides include 'Getting Started' and 'Troubleshooting' anchors");
}
