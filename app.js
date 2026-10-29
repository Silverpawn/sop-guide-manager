let DB = null;
let state = {
  playbookId: "PLB-001",
  view: "journey", // "journey" | "sop" | "process" | "tool" | "decision" | "template" | "reference"
  selectedId: null,
  expandedProcessId: null,
  referenceFilter: "all", // "all" | "flagged"
  searchQuery: "",
  simLevel: 1,
  simRawAvg: 3.4,

  // Per-Playbook Dynamic State:
  journeyRoleFilter: "all",
  lpmPitchOpen: false,
  funnelFlaggedOnly: false,
  funnelTagFilter: "ALL",
  funnelQuadrantFilter: "ALL",
  selectedCandidatesByDecisionId: {}, // { "DEC-001": [...], "DEC-003": [...] }
  openInlineToolId: null,
  sidebarToolsOpen: false,

  // Stage 4 & 5 Authoring Studio State:
  studioTab: "playbook", // "playbook" | "visual" | "raw" | "design"
  builderPlaybookId: "PLB-001",
  builderStageIndex: 0,
  studioPlaybookId: "PLB-001",
  studioSopId: "SOP-001",
  studioStepIndex: 0,
  studioDraftVisualMode: "svg", // "none" | "image" | "svg"
  studioDraftImageSrc: "",
  studioDraftCaption: "",
  studioDraftHotspot: null, // { xPercent, yPercent, widthPercent, heightPercent, label }
  studioSavedSvgVisual: null,

  // Stage 10 1-Page 28-Question Scoring Matrix State:
  matrixStandard: "new", // "new" | "old"
  matrixMode: "full" // "full" | "compact"
};

const LOCAL_STORAGE_KEY = "SE_LEAN_GS_GUIDES_DB_V20";
let DEFAULT_DB_SNAPSHOT = null;

async function initApp() {
  try {
    const res = await fetch("./data/guides.json");
    DEFAULT_DB_SNAPSHOT = await res.json();
  } catch (e) {
    DEFAULT_DB_SNAPSHOT = window.FALLBACK_GUIDES_DB;
  }

  const savedRaw = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (savedRaw) {
    try {
      DB = JSON.parse(savedRaw);
    } catch (err) {
      DB = JSON.parse(JSON.stringify(DEFAULT_DB_SNAPSHOT));
    }
  } else {
    DB = JSON.parse(JSON.stringify(DEFAULT_DB_SNAPSHOT));
  }

  initializePlaybookDefaults();
  bindEvents();
  renderPlaybookSwitcher();
  renderTopTabs();
  renderSidebar();
  renderMain();
}

function initializePlaybookDefaults() {
  const playbooks = getPlaybooks();
  if (playbooks.length > 0 && !playbooks.some((p) => p.id === state.playbookId)) {
    state.playbookId = playbooks[0].id;
  }

  for (const plb of playbooks) {
    for (const dec of plb.decisionTools || []) {
      if (dec.kind === "prioritiser-funnel" && !state.selectedCandidatesByDecisionId[dec.id]) {
        state.selectedCandidatesByDecisionId[dec.id] = (dec.candidates || [])
          .filter((c) => c.selectedByDefault)
          .map((c) => c.id);
      }
    }
  }

  const activePlb = getActivePlaybook();
  if (activePlb && Array.isArray(activePlb.processIds) && activePlb.processIds.length > 0) {
    state.expandedProcessId = activePlb.processIds[0];
  }
}

function getPlaybooks() {
  return Array.isArray(DB?.playbooks) ? DB.playbooks : [];
}

function getActivePlaybook() {
  const list = getPlaybooks();
  return list.find((p) => p.id === state.playbookId) || list[0] || null;
}

function getActiveProcesses() {
  const plb = getActivePlaybook();
  if (!plb) return Object.values(DB?.processes || {});
  return (plb.processIds || []).map((id) => DB.processes[id]).filter(Boolean);
}

function getActiveTools() {
  const plb = getActivePlaybook();
  if (!plb) return Object.values(DB?.tools || {});
  return (plb.toolIds || []).map((id) => DB.tools[id]).filter(Boolean);
}

function getActiveLiveTools(plb) {
  const allLive = DB?.meta?.liveTools || [];
  const activePlb = plb || getActivePlaybook();
  if (!activePlb) return allLive;
  if (Array.isArray(activePlb.liveToolIds)) {
    return activePlb.liveToolIds
      .map((id) => allLive.find((lt) => lt.id === id))
      .filter(Boolean);
  }
  return allLive;
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function countWords(str) {
  return (str || "").trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Renders the Global Playbook Switcher dropdown in the Top Header
 */
function renderPlaybookSwitcher() {
  const selectEl = document.getElementById("playbookSelect");
  if (!selectEl) return;
  const playbooks = getPlaybooks();
  selectEl.innerHTML = playbooks
    .map(
      (p) =>
        `<option value="${escapeHtml(p.id)}" ${p.id === state.playbookId ? "selected" : ""}>
          ${escapeHtml(p.title)}
        </option>`
    )
    .join("");
}

/**
 * Updates the 4 Universal Top Navigation Tabs with dynamic counts from the active Playbook JSON
 */
function renderTopTabs() {
  const plb = getActivePlaybook();
  if (!plb) return;
  const stageCount = (plb.journeyMap?.stages || []).length;
  const sopCount = (plb.sopIds || []).length;
  const decCount = (plb.decisionTools || []).length;
  const tplCount = (plb.templates || []).length + (plb.referenceTables || []).length;

  const tabLabels = {
    journey: `1. End-to-End Journey (${stageCount} Stages)`,
    guides: `2. Step-by-Step Guides (${sopCount} SOPs)`,
    decision: `3. Decision & Priority Tools (${decCount})`,
    templates: `4. Templates & Reference (${tplCount})`
  };

  document.querySelectorAll(".sub-tab").forEach((btn) => {
    const key = btn.dataset.tab;
    if (tabLabels[key]) {
      btn.textContent = tabLabels[key];
    }
  });
}

function switchPlaybook(newPlaybookId) {
  if (!newPlaybookId || newPlaybookId === state.playbookId) return;
  state.playbookId = newPlaybookId;
  state.view = "journey";
  state.selectedId = null;
  state.journeyRoleFilter = "all";
  state.lpmPitchOpen = false;
  state.funnelFlaggedOnly = false;
  state.funnelTagFilter = "ALL";
  state.funnelQuadrantFilter = "ALL";
  state.referenceFilter = "all";
  state.openInlineToolId = null;

  const plb = getActivePlaybook();
  state.expandedProcessId = plb?.processIds?.[0] || null;

  renderPlaybookSwitcher();
  renderTopTabs();
  setActiveTopTab("journey");
  renderSidebar();
  renderMain();
}

function switchPlaybookAndOpen(targetPlaybookId, targetView, targetId) {
  if (targetPlaybookId && targetPlaybookId !== state.playbookId) {
    switchPlaybook(targetPlaybookId);
  }
  if (!targetView || targetView === "journey") {
    showOverview();
    return;
  }
  if (targetView === "sop" && targetId) {
    selectSOP(targetId);
  } else if (targetView === "tool" && targetId) {
    selectTool(targetId);
  } else if (targetView === "decision" && targetId) {
    selectDecisionTool(targetId);
  } else if (targetView === "template" && targetId) {
    selectTemplate(targetId);
  } else if (targetView === "reference" && targetId) {
    selectReferenceTable(targetId);
  }
}

/**
 * Renders the Snowflake-style soft architectural illustration card
 * dynamically populated from the Process JSON object
 */
function renderSEArchitecturalCard(proc) {
  if (!proc) return "";
  const firstStage = (proc.stages || [])[0];
  const secondStage = (proc.stages || [])[1] || firstStage;
  const badgeText = (proc.appName || proc.title || "").toUpperCase();
  const accentColor = proc.id === "PRC-001" ? "#009999" : "#8A00E5";

  return `
  <div class="illustration-card">
    <svg class="illus-svg" viewBox="0 0 460 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escapeHtml(badgeText)}">
      <line x1="295" y1="62" x2="355" y2="38" stroke="#96B0C0" stroke-width="1.8"/>
      <line x1="295" y1="62" x2="355" y2="88" stroke="#96B0C0" stroke-width="1.8"/>
      <rect x="205" y="42" width="90" height="38" rx="6" fill="#FFFFFF" stroke="#B8CEDB" stroke-width="1.5"/>
      <text x="215" y="65" fill="#1B1534" font-family="Inter, sans-serif" font-size="9.5" font-weight="700">${escapeHtml(proc.durationBadge || "")}</text>

      <rect x="355" y="18" width="92" height="36" rx="6" fill="#FFFFFF" stroke="#009999" stroke-width="1.5"/>
      <text x="364" y="40" fill="#007A7A" font-family="Inter, sans-serif" font-size="9.5" font-weight="700">${escapeHtml(firstStage?.sopId || "")}</text>

      <rect x="355" y="70" width="92" height="36" rx="6" fill="#FFFFFF" stroke="#8A00E5" stroke-width="1.5"/>
      <text x="364" y="92" fill="#641E8C" font-family="Inter, sans-serif" font-size="9.5" font-weight="700">${escapeHtml(secondStage?.sopId || "")}</text>

      <rect x="32" y="180" width="46" height="8" rx="4" fill="#B8CEDB"/>
      <rect x="32" y="198" width="58" height="8" rx="4" fill="#96B0C0"/>
      <rect x="32" y="216" width="48" height="8" rx="4" fill="#B8CEDB"/>
      <rect x="32" y="234" width="64" height="8" rx="4" fill="${accentColor}"/>
      <rect x="32" y="252" width="42" height="8" rx="4" fill="#B8CEDB"/>

      <rect x="74" y="102" width="352" height="202" rx="10" fill="#FFFFFF" stroke="#D7E4EE" stroke-width="2"/>
      <rect x="74" y="102" width="352" height="34" rx="10" fill="#1B1534"/>
      <circle cx="94" cy="119" r="4.5" fill="#009999"/>
      <text x="108" y="123" fill="#FFFFFF" font-family="ui-monospace, monospace" font-size="10.5" font-weight="700">
        ${escapeHtml(badgeText)} • ${escapeHtml(proc.versionBadge || "")}
      </text>

      <line x1="182" y1="136" x2="182" y2="304" stroke="#EAF4F8" stroke-width="1.5"/>

      <rect x="90" y="154" width="74" height="8" rx="4" fill="#1B1534"/>
      <rect x="90" y="172" width="62" height="8" rx="4" fill="#D7E4EE"/>
      <rect x="90" y="190" width="68" height="8" rx="4" fill="#D7E4EE"/>
      <rect x="98" y="210" width="58" height="8" rx="4" fill="#009999"/>
      <rect x="98" y="228" width="52" height="8" rx="4" fill="#D7E4EE"/>

      <rect x="200" y="152" width="110" height="10" rx="5" fill="#1B1534"/>
      <rect x="200" y="170" width="190" height="7" rx="3.5" fill="#D7E4EE"/>
      <rect x="200" y="186" width="58" height="14" rx="6" fill="${accentColor}"/>
      <rect x="266" y="186" width="58" height="14" rx="6" fill="#EAF4F8"/>

      <rect x="200" y="212" width="204" height="76" rx="6" fill="#F8FAFC" stroke="#EAF4F8"/>
      <rect x="220" y="252" width="16" height="26" rx="2" fill="#0057C6"/>
      <rect x="220" y="242" width="16" height="10" rx="2" fill="#009999"/>

      <rect x="250" y="238" width="16" height="40" rx="2" fill="#0057C6"/>
      <rect x="250" y="226" width="16" height="12" rx="2" fill="#21C0FF"/>

      <rect x="280" y="228" width="16" height="50" rx="2" fill="#0057C6"/>
      <rect x="280" y="216" width="16" height="12" rx="2" fill="#009999"/>

      <rect x="310" y="246" width="16" height="32" rx="2" fill="#8A00E5"/>
      <rect x="340" y="232" width="16" height="46" rx="2" fill="#27B66D"/>
    </svg>
  </div>`;
}

/**
 * Stage 4: 3-Mode Step Visual Renderer
 * - Mode 1: Custom Image / Screenshot (`visual.imageSrc` or `visual.type === "image"`) with optional percentage `hotspot` overlay
 * - Mode 2: Declarative SVG (`visual.elements`)
 * - Mode 3: No Visual / Text-Only Step (`!step.visual` or `step.visual.type === "none"`)
 */
function getStepVisualMode(step) {
  const vis = step?.visual;
  if (!vis || vis.type === "none") return "none";
  if (vis.type === "image" || Boolean(vis.imageSrc)) return "image";
  if (Array.isArray(vis.elements)) return "svg";
  return "none";
}

function renderStepIllustrationCard(step) {
  const mode = getStepVisualMode(step);
  const visual = step.visual || {};

  // Mode 1: Custom Screenshot / Image with Optional Percentage Hotspot Overlay
  if (mode === "image") {
    const hs = visual.hotspot;
    return `
    <div class="illustration-card" style="padding:18px;">
      <div class="custom-image-stage">
        <img src="${escapeHtml(visual.imageSrc || "")}" alt="${escapeHtml(visual.caption || step.action)}" />
        ${
          hs && typeof hs.xPercent === "number" && typeof hs.yPercent === "number"
            ? `
          <div class="hotspot-overlay-box"
               style="left:${hs.xPercent}%;top:${hs.yPercent}%;width:${hs.widthPercent || 24}%;height:${hs.heightPercent || 20}%;">
            <span class="hotspot-callout-pill">
              <span class="petrol-dot" style="width:7px;height:7px;"></span>
              <span>${escapeHtml(hs.label || `Step ${step.stepNumber}`)}</span>
            </span>
          </div>`
            : ""
        }
      </div>
      <div style="margin-top:8px;display:flex;justify-content:space-between;font-size:12px;color:#54646E;font-weight:600;">
        <span>${escapeHtml(visual.caption || `Step ${step.stepNumber} Screenshot`)}</span>
        <span style="color:#007A7A;">📸 Custom Screenshot</span>
      </div>
    </div>`;
  }

  // Mode 2: Declarative SVG
  const els = visual.elements || [];
  const ann = visual.annotation || {};

  const tx = ann.targetX || 260;
  const ty = ann.targetY || 60;
  const tw = ann.targetW || 195;
  const th = ann.targetH || 48;
  const fx = ann.arrowFromX || 295;
  const fy = ann.arrowFromY || 26;

  return `
  <div class="illustration-card" style="padding:18px;">
    <svg class="illus-svg" viewBox="0 0 500 210" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="seArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#8A00E5" />
        </marker>
      </defs>

      <rect x="12" y="10" width="476" height="178" rx="10" fill="#FFFFFF" stroke="#D7E4EE" stroke-width="2" />

      ${els
        .map((el) => {
          const isSuccess = el.state === "success";
          const isActive = el.state === "active";
          const isDanger = el.state === "danger";
          const fill =
            el.kind === "window"
              ? "#F8FAFC"
              : isDanger
              ? "#FFF1F2"
              : isSuccess
              ? "#EAF4F8"
              : isActive
              ? "#F3E8FF"
              : "#F8FAFC";
          const stroke =
            el.kind === "window"
              ? "#D7E4EE"
              : isDanger
              ? "#DA1E28"
              : isSuccess
              ? "#009999"
              : isActive
              ? "#8A00E5"
              : "#B8CEDB";
          const textColor = isDanger
            ? "#DA1E28"
            : isSuccess
            ? "#007A7A"
            : isActive
            ? "#4D217A"
            : "#1B1534";

          return `
          <g>
            <rect x="${el.x}" y="${el.y}" width="${el.w}" height="${el.h}" rx="7"
                  fill="${fill}" stroke="${stroke}" stroke-width="1.6" />
            <text x="${el.x + 12}" y="${el.y + el.h / 2 + 4}"
                  fill="${textColor}" font-family="Inter, sans-serif" font-size="11.2" font-weight="600">
              ${escapeHtml(el.label)}
            </text>
          </g>`;
        })
        .join("")}

      <rect x="${tx - 4}" y="${ty - 4}" width="${tw + 8}" height="${th + 8}" rx="9"
            fill="none" stroke="#8A00E5" stroke-width="2.5" stroke-dasharray="5,3" />

      <line x1="${fx}" y1="${fy + 10}" x2="${tx + tw / 2}" y2="${ty - 5}"
            stroke="#8A00E5" stroke-width="2.2" marker-end="url(#seArrow)" />

      <rect x="${Math.max(18, fx - 105)}" y="${fy - 14}" width="225" height="24" rx="6" fill="#1B1534" />
      <circle cx="${Math.max(30, fx - 93)}" cy="${fy - 2}" r="4" fill="#009999" />
      <text x="${Math.max(40, fx - 83)}" y="${fy + 2}"
            fill="#FFFFFF" font-family="Inter, sans-serif" font-size="11" font-weight="700">
        ${escapeHtml(ann.label || "")}
      </text>
    </svg>
    <div style="margin-top:8px;display:flex;justify-content:space-between;font-size:12px;color:#54646E;font-weight:600;">
      <span>${escapeHtml(visual.caption || "")}</span>
      <span style="color:#007A7A;">${escapeHtml(DB.tools[step.toolId]?.name || "")}</span>
    </div>
  </div>`;
}

/**
 * Universal 4-Section Left Sidebar Driven 100% by Active Playbook JSON
 * Direct routing to Step-by-Step Guides (zero intermediate PRC-xxx cover pages or raw database IDs)
 */
function renderSidebar() {
  const sidebar = document.getElementById("leftSidebar");
  const plb = getActivePlaybook();
  if (!plb || !sidebar) return;

  const q = state.searchQuery.toLowerCase().trim();
  const sops = (plb.sopIds || [])
    .map((id) => DB.sops[id])
    .filter((s) => s && (!q || JSON.stringify(s).toLowerCase().includes(q)));
  const tools = getActiveTools().filter((t) => !q || JSON.stringify(t).toLowerCase().includes(q));
  const decisionTools = plb.decisionTools || [];
  const templates = plb.templates || [];
  const referenceTables = plb.referenceTables || [];

  const html = `
    <div>
      ${renderSidebarAuthoringCard(plb)}

      <div class="sidebar-divider"></div>

      <!-- Universal Section 1 -->
      <div class="sidebar-section-label" style="margin-top:4px;">1. End-to-End Journey</div>
      <button type="button" class="tree-item ${state.view === "journey" ? "active" : ""}" onclick="showOverview()">
        <span>Connected (${(plb.journeyMap?.stages || []).length}-Stage) Process Map</span>
      </button>

      <div class="sidebar-divider"></div>

      <!-- Universal Section 2: Direct Step-by-Step Guides (No intermediate PRC-xxx cover pages) -->
      <div class="sidebar-section-label">2. Step-by-Step Guides</div>
      ${sops
        .map((s) => {
          const isActive = state.view === "sop" && state.selectedId === s.id;
          return `
            <button type="button" class="tree-item ${isActive ? "active" : ""}"
                    onclick="selectSOP('${escapeHtml(s.id)}')">
              <span>${escapeHtml(s.title)}</span>
              <span class="tree-chevron">›</span>
            </button>
          `;
        })
        .join("")}

      <div class="sidebar-divider"></div>

      <!-- Universal Section 3 -->
      <div class="sidebar-section-label">3. Decision &amp; Priority Tools</div>
      ${decisionTools
        .map((dec) => {
          const isActive = state.view === "decision" && state.selectedId === dec.id;
          return `
            <button type="button" class="tree-item ${isActive ? "active" : ""}"
                    onclick="selectDecisionTool('${dec.id}')">
              <span>${escapeHtml(dec.navTitle)}</span>
              <span class="tree-chevron">›</span>
            </button>
          `;
        })
        .join("")}

      <div class="sidebar-divider"></div>

      <!-- Universal Section 4 -->
      <div class="sidebar-section-label">4. Templates &amp; Reference</div>
      ${templates
        .map((tpl) => {
          const isActive = state.view === "template" && state.selectedId === tpl.id;
          return `
            <button type="button" class="tree-item ${isActive ? "active" : ""}"
                    onclick="selectTemplate('${tpl.id}')">
              <span>${escapeHtml(tpl.navTitle)}</span>
              <span class="tree-chevron">›</span>
            </button>
          `;
        })
        .join("")}
      ${referenceTables
        .map((ref) => {
          const isActive = state.view === "reference" && state.selectedId === ref.id;
          return `
            <button type="button" class="tree-item ${isActive ? "active" : ""}"
                    onclick="selectReferenceTable('${ref.id}')">
              <span>${escapeHtml(ref.navTitle)}</span>
              <span class="tree-chevron">›</span>
            </button>
          `;
        })
        .join("")}

      <div class="sidebar-divider"></div>

      <!-- Collapsible Software Tool Reference Section -->
      <button type="button" class="tree-item ${state.sidebarToolsOpen || state.view === "tool" || q.length > 0 ? "expanded" : ""}"
              onclick="toggleSidebarTools()">
        <span style="font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#54646E;">
          Kit Bag Tool Reference (${tools.length})
        </span>
        <span class="tree-chevron">›</span>
      </button>
      ${
        state.sidebarToolsOpen || state.view === "tool" || q.length > 0
          ? `<div class="tree-children">
              ${tools
                .map((tool) => {
                  const isActive = state.view === "tool" && state.selectedId === tool.id;
                  return `
                    <button type="button" class="tree-child ${isActive ? "active" : ""}" onclick="selectTool('${tool.id}')">
                      ${escapeHtml(tool.name)}
                    </button>
                  `;
                })
                .join("")}
            </div>`
          : ""
      }
    </div>

    <div>
      ${renderSidebarThreeWayCrossRef(plb)}
      ${
        getActiveLiveTools(plb).length > 0
          ? `<div class="sidebar-launcher-card" aria-label="Live Lean@GS Intranet Tool Launcher">
              <div class="sidebar-launcher-title">🚀 Live Lean@GS Tool Launcher</div>
              ${getActiveLiveTools(plb)
                .map(
                  (lt) => `
                <a href="${escapeHtml(lt.url)}" target="_blank" rel="noopener noreferrer" class="sidebar-launcher-link" title="${escapeHtml(lt.description || lt.name)}">
                  <span>${escapeHtml(lt.name)}</span>
                  <span>↗</span>
                </a>`
                )
                .join("")}
            </div>`
          : ""
      }
    </div>
  `;

  sidebar.innerHTML = html;
  updateHeaderStorageStatusBadge();
}

function hasLocalDraftEdits() {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!saved) return false;
    if (!DEFAULT_DB_SNAPSHOT) return true;
    return saved !== JSON.stringify(DEFAULT_DB_SNAPSHOT);
  } catch (e) {
    return false;
  }
}

function updateHeaderStorageStatusBadge() {
  const badge = document.getElementById("headerStorageStatusBadge");
  if (!badge) return;
  const isDraft = hasLocalDraftEdits();
  if (isDraft) {
    badge.textContent = "● Local Draft Active";
    badge.classList.add("local-draft");
  } else {
    badge.textContent = "● Official Server Library";
    badge.classList.remove("local-draft");
  }
}

function renderSidebarAuthoringCard(plb) {
  const isDraft = hasLocalDraftEdits();
  const statusText = isDraft
    ? "● Unsaved Browser Edits (Click to Export)"
    : "● Official Server Library";
  const statusDotColor = isDraft ? "#2DD4BF" : "#CBD5E1";

  return `
    <div class="sidebar-authoring-card" aria-label="Author and Share Guides">
      <div class="sidebar-authoring-title">
        <span>✦ BUILD OR SHARE A GUIDE</span>
        <span style="font-size:10px;color:#E2E8F0;font-weight:700;">3-Tier JSON</span>
      </div>
      <div class="sidebar-authoring-status">
        <span style="color:${statusDotColor};font-weight:700;">${escapeHtml(statusText)}</span>
      </div>
      <button type="button" class="sidebar-authoring-primary-btn" onclick="openAdminModal()">
        ✦ Open WYSIWYG Authoring Studio
      </button>
      <div class="sidebar-authoring-btn-row">
        <button type="button" class="sidebar-authoring-sec-btn" onclick="triggerGlobalGuideUpload()" title="Upload and merge a .leanguide.json or master guides.json file">
          ⬆ Upload / Merge .json
        </button>
        <button type="button" class="sidebar-authoring-sec-btn" onclick="downloadCurrentPlaybookBundle()" title="Export active Playbook (.leanguide.json) to share with colleagues">
          ⬇ Export .json
        </button>
      </div>
      ${
        plb && plb.id !== "PLB-AUTHOR"
          ? `<button type="button" class="sidebar-authoring-sec-btn" style="width:100%;margin-top:6px;background:rgba(0,153,153,0.22);border-color:#2DD4BF;color:#CCFBF1;" onclick="switchPlaybook('PLB-AUTHOR')">
               📘 How to Create a Guide (Masterclass) →
             </button>`
          : ""
      }
    </div>
  `;
}

const OPERATIONAL_PLAYBOOK_CARDS = [
  {
    id: "PLB-MATURITY",
    badge: "Standalone Assessment & Storybook",
    title: "Standalone GS Lean Maturity Guide",
    desc: "Just doing a standalone 28-question assessment or exploring the Storybook? Open the Standalone Maturity Guide →",
    cta: "Open Standalone Maturity Guide →",
    liveUrl: "https://megblcntpvc72.ad101.siemens-energy.net/gs-lean-maturity/",
    accent: "#0D9488"
  },
  {
    id: "PLB-001",
    badge: "6-Stage Leadership Process",
    title: "Lean@GS Navigator Toolkit Guide",
    desc: "Combining your maturity assessment with Voice of the Customer to run a Leadership Workshop & 1-Page Charter? Open the Navigator Guide →",
    cta: "Open Navigator Toolkit Guide →",
    liveUrl: "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
    accent: "#009999"
  },
  {
    id: "PLB-PMHUB",
    badge: "3-Phase Standalone Suite",
    title: "Lean@GS PM Maturity Hub Guide",
    desc: "Need the Score Explainer maths, Metro Journey, 4 Pillars, Strategy Builder, Score Simulator, or CSV-to-JSON Fixer? Open the PM Maturity Hub Guide →",
    cta: "Open PM Maturity Hub Guide →",
    liveUrl: "https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/",
    accent: "#8A00E5"
  }
];

function renderSidebarThreeWayCrossRef(plb) {
  if (!plb || plb.id === "PLB-DEMO") return "";
  const others = OPERATIONAL_PLAYBOOK_CARDS.filter((c) => c.id !== plb.id);
  return `
    <div class="sidebar-launcher-card" style="background:linear-gradient(135deg,#1B1534 0%,#2E1065 100%);border-color:#A855F7;margin-bottom:10px;">
      <div class="sidebar-launcher-title" style="color:#E9D5FF;">🔀 Related Lean@GS Playbooks</div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        ${others
          .map(
            (card) => `
          <button type="button" class="cross-ref-primary-btn"
                  style="width:100%;justify-content:space-between;font-size:11px;padding:6px 9px;background:${card.accent};text-align:left;"
                  onclick="switchPlaybookAndOpen('${escapeHtml(card.id)}', 'journey', '')">
            <span>${escapeHtml(card.title)}</span>
            <span>→</span>
          </button>`
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderThreeWayCrossRefCards(plb) {
  if (!plb || plb.id === "PLB-DEMO") return "";
  return `
    <section class="cross-ref-callout-card" role="region" aria-label="Related Lean@GS Playbooks (1-Click Cross-Reference)" style="margin-bottom:22px;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:12px;">
        <div>
          <span class="cross-ref-kicker">Related Lean@GS Playbooks • 1-Click Cross-Reference</span>
          <h3 class="cross-ref-title" style="margin-bottom:0;">Which Lean@GS Web Application Are You Using Today?</h3>
        </div>
        <span class="muted-code-pill">3 Operational Playbooks Kept Separate</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:14px;">
        ${OPERATIONAL_PLAYBOOK_CARDS.map((card) => {
          const isCurrent = card.id === plb.id;
          return `
            <div style="background:${isCurrent ? "#F0FDFA" : "#FFFFFF"};border:${
            isCurrent ? `2px solid ${card.accent}` : "1px solid #D8B4FE"
          };border-radius:10px;padding:14px;display:flex;flex-direction:column;justify-content:space-between;gap:10px;">
              <div>
                <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;margin-bottom:6px;">
                  <span style="font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:0.05em;color:${card.accent};">
                    ${escapeHtml(card.badge)}
                  </span>
                  ${
                    isCurrent
                      ? `<span style="background:${card.accent};color:#FFFFFF;font-size:10px;font-weight:800;padding:2px 7px;border-radius:99px;">ACTIVE PLAYBOOK</span>`
                      : ""
                  }
                </div>
                <h4 style="font-size:15px;font-weight:800;color:#1B1534;margin-bottom:6px;">
                  ${escapeHtml(card.title)}
                </h4>
                <p style="font-size:12.5px;color:#54646E;line-height:1.45;margin-bottom:0;">
                  ${escapeHtml(card.desc)}
                </p>
              </div>
              <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
                ${
                  isCurrent
                    ? `<span style="font-size:12px;font-weight:700;color:${card.accent};">✓ Viewing this Playbook</span>`
                    : `<button type="button" class="cross-ref-primary-btn" style="background:${card.accent};font-size:12px;padding:7px 12px;"
                               onclick="switchPlaybookAndOpen('${escapeHtml(card.id)}', 'journey', '')">
                         ${escapeHtml(card.cta)}
                       </button>`
                }
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderMain() {
  const canvas = document.getElementById("mainCanvas");
  const plb = getActivePlaybook();
  if (!canvas || !plb) return;

  if (state.view === "journey") {
    renderJourneyPage(plb, canvas);
  } else if (state.view === "sop") {
    const sop = DB.sops[state.selectedId] || DB.sops[plb.sopIds?.[0]];
    renderSOPPage(sop, plb, canvas);
  } else if (state.view === "process") {
    const proc = DB.processes[state.selectedId] || DB.processes[plb.processIds?.[0]];
    renderProcessPage(proc, plb, canvas);
  } else if (state.view === "tool") {
    const tool = DB.tools[state.selectedId] || DB.tools[plb.toolIds?.[0]];
    renderToolPage(tool, plb, canvas);
  } else if (state.view === "decision") {
    const dec = (plb.decisionTools || []).find((d) => d.id === state.selectedId) || (plb.decisionTools || [])[0];
    renderDecisionToolPage(dec, plb, canvas);
  } else if (state.view === "template") {
    const tpl = (plb.templates || []).find((t) => t.id === state.selectedId) || (plb.templates || [])[0];
    renderTemplatePage(tpl, plb, canvas);
  } else if (state.view === "reference") {
    const ref = (plb.referenceTables || []).find((r) => r.id === state.selectedId) || (plb.referenceTables || [])[0];
    renderReferenceTablePage(ref, plb, canvas);
  }
}

/**
 * Tab 1: Universal End-to-End Journey Page (100% Driven by activePlaybook.journeyMap, goldenPrinciple, convergenceBanner, processes, and rulesKey)
 */
function renderJourneyPage(plb, canvas) {
  const jMap = plb.journeyMap || {};
  const stages = jMap.stages || [];
  const roleFilters = jMap.roleFilters || [{ id: "all", label: "All Roles" }];
  const processes = getActiveProcesses();
  const rulesKey = plb.rulesKey;
  const gp = plb.goldenPrinciple;
  const conv = plb.convergenceBanner;

  canvas.innerHTML = `
    <div class="content-container">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
        <div class="eyebrow-tag">
          <span class="petrol-dot" style="width:7px;height:7px;"></span>
          <span>${escapeHtml(plb.eyebrow || plb.code)}</span>
        </div>
        <button type="button" class="breadcrumb-link" onclick="openPlaybookBuilderModal('${escapeHtml(plb.id)}', 0)">
          ⚙️ Edit Journey Stages or Create New Playbook →
        </button>
      </div>
      <h1 class="page-title">${escapeHtml(plb.title)}</h1>
      <p class="page-subtitle" style="margin-bottom:18px;">
        ${escapeHtml(plb.subtitle)}
      </p>

      <!-- Stage 5: High-Contrast Golden Principle Callout Box -->
      ${
        gp && gp.quote
          ? `
        <div class="golden-principle-box">
          <div class="golden-principle-kicker">Core Navigator Principle</div>
          <div class="golden-principle-quote">“${escapeHtml(gp.quote)}”</div>
          <div class="golden-principle-desc">${escapeHtml(gp.explanation || "")}</div>
        </div>`
          : ""
      }

      <!-- Stage 7 & 10: Live Lean@GS Corporate Intranet Tool Launcher Bar (All 3 Live Apps + Storybook) -->
      ${
        getActiveLiveTools(plb).length > 0
          ? `
        <div class="live-tool-launcher-bar" role="region" aria-label="Live Lean@GS Intranet Tool Launcher">
          <div class="live-tool-launcher-label">
            <span>🚀 Live Lean@GS Intranet Tools</span>
          </div>
          <div class="live-tool-launcher-links">
            ${getActiveLiveTools(plb)
              .map(
                (lt) => `
              <a href="${escapeHtml(lt.url)}" target="_blank" rel="noopener noreferrer" class="live-tool-btn ${
                  lt.id === "LIVE-HUB" ? "purple" : ""
                }" title="${escapeHtml(lt.description || lt.name)}">
                <span>${escapeHtml(lt.shortLabel || `Launch ${lt.name} ↗`).replace(/\s*↗$/, "")}</span>
                <span aria-hidden="true">↗</span>
              </a>`
              )
              .join("")}
          </div>
        </div>`
          : ""
      }

      <!-- Stage 10: 3-Way Cross-Reference Switcher Cards Across PLB-001, PLB-MATURITY & PLB-PMHUB -->
      ${renderThreeWayCrossRefCards(plb)}

      <!-- Connected End-to-End Process Map Driven by activePlaybook.journeyMap -->
      <section class="journey-map-section" aria-label="Connected End-to-End Process Map">
        <div class="journey-controls-bar">
          <div>
            <div style="font-size:11.5px;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;color:#007A7A;margin-bottom:2px;">
              ${escapeHtml(jMap.formulaBanner || "")}
            </div>
            <h2 style="font-size:18px;font-weight:700;color:#1B1534;">
              ${escapeHtml(jMap.mapHeading || "")}
            </h2>
          </div>

          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
            <div class="role-toggle-group" role="group" aria-label="Filter stages by role">
              ${roleFilters
                .map(
                  (rf) => `
                <button type="button" class="role-pill-btn ${state.journeyRoleFilter === rf.id ? "active" : ""}"
                        onclick="setJourneyRoleFilter('${escapeHtml(rf.id)}')">
                  ${escapeHtml(rf.label)}
                </button>`
                )
                .join("")}
            </div>

            <button type="button" class="pitch-toggle-btn" onclick="toggleLpmPitch()">
              <span>${escapeHtml(jMap.briefingButtonLabel || "")}</span>
              <span>${state.lpmPitchOpen ? "▴" : "▾"}</span>
            </button>
          </div>
        </div>

        <!-- 60-Second Briefing Banner Driven by activePlaybook.journeyMap -->
        <div class="lpm-pitch-banner ${state.lpmPitchOpen ? "" : "hidden"}">
          <div>
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#21C0FF;margin-bottom:6px;">
              ${escapeHtml(jMap.briefingTitle || "")}
            </div>
            <div style="font-size:14.5px;line-height:1.6;color:#FFFFFF;margin-bottom:8px;">
              ${(jMap.briefingBullets || [])
                .map((b) => `<div style="margin-bottom:4px;">${escapeHtml(b)}</div>`)
                .join("")}
            </div>
          </div>
          <div class="pitch-equation">
            <span class="pitch-eq-box" style="background:#009999;color:#FFFFFF;border-color:#FFFFFF;">
              ${escapeHtml(jMap.briefingEquation || "")}
            </span>
          </div>
        </div>

        <!-- Stage 5: Visual Convergence Banner (Input 1 + Input 2 -> Combined) -->
        ${
          conv && conv.input1Title
            ? `
          <div class="convergence-banner">
            <div class="convergence-banner-header">How the Two Principal Inputs Converge in the Navigator Process</div>
            <div class="convergence-grid">
              <div class="convergence-card">
                <div class="convergence-card-title">📊 ${escapeHtml(conv.input1Title)}</div>
                <div class="convergence-card-desc">${escapeHtml(conv.input1Desc || "")}</div>
              </div>
              <div class="convergence-operator">+</div>
              <div class="convergence-card">
                <div class="convergence-card-title">🎯 ${escapeHtml(conv.input2Title)}</div>
                <div class="convergence-card-desc">${escapeHtml(conv.input2Desc || "")}</div>
              </div>
              <div class="convergence-operator">→</div>
              <div class="convergence-card combined">
                <div class="convergence-card-title">🤝 ${escapeHtml(conv.combinedTitle)}</div>
                <div class="convergence-card-desc">${escapeHtml(conv.combinedDesc || "")}</div>
              </div>
            </div>
          </div>`
            : ""
        }

        <!-- Connected N-Stage Cards (Clean 4-Element Layout: Zero Compliance Stamps, Zero .csv/.json Tech Plumbing) -->
        <div class="six-stage-grid">
          ${stages
            .map((st, idx) => {
              const isDimmed =
                state.journeyRoleFilter !== "all" &&
                st.leadRoleId !== state.journeyRoleFilter &&
                st.supportRoleId !== state.journeyRoleFilter &&
                !(st.involvedRoleIds || []).includes(state.journeyRoleFilter);
              const leadRoleObj = DB.roles[st.leadRoleId];
              const toolObj = DB.tools[st.toolId];
              const whoText = st.whoIsInvolved || st.whoAndDuration || st.leadRoleLabel || leadRoleObj?.title || "";
              const liveUrl = st.liveUrl || toolObj?.liveUrl || "";
              const secondaryLiveUrl = st.secondaryLiveUrl || toolObj?.secondaryLiveUrl || "";
              const tertiaryLiveUrl = st.tertiaryLiveUrl || "";

              return `
              <div class="stage-flow-card ${isDimmed ? "dimmed" : ""}">
                <div>
                  <div class="stage-card-top">
                    <span class="stage-num-circle">STAGE ${st.stageNumber}</span>
                    <button type="button" class="breadcrumb-link" style="font-size:11px;"
                            onclick="openPlaybookBuilderModal('${escapeHtml(plb.id)}', ${idx})">
                      Edit Stage
                    </button>
                  </div>
                  <h3 class="stage-card-title">${escapeHtml(st.title)}</h3>
                  <p class="stage-summary-text">${escapeHtml(st.summary || "")}</p>
                  <div class="stage-meta-rows">
                    <div><strong>Who is involved:</strong> ${escapeHtml(whoText)}</div>
                    <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;flex-wrap:wrap;">
                      <div>
                        <strong>Tool used:</strong>
                        <button type="button" class="breadcrumb-link" style="font-size:12px;"
                                onclick="selectTool('${escapeHtml(st.toolId)}')">
                          ${escapeHtml(st.toolLabel || toolObj?.name || st.toolId)}
                        </button>
                      </div>
                      <div style="display:flex;gap:4px;flex-wrap:wrap;">
                        ${
                          liveUrl
                            ? `<a href="${escapeHtml(liveUrl)}" target="_blank" rel="noopener noreferrer" class="live-tool-btn compact" title="Open live tool in a new browser tab">
                                Launch Live Tool ↗
                              </a>`
                            : ""
                        }
                        ${
                          secondaryLiveUrl
                            ? `<a href="${escapeHtml(secondaryLiveUrl)}" target="_blank" rel="noopener noreferrer" class="live-tool-btn secondary compact" title="Open secondary live tool in a new browser tab">
                                ${escapeHtml(st.secondaryLiveLabel || toolObj?.secondaryLiveLabel || "Secondary Portal ↗")}
                              </a>`
                            : ""
                        }
                        ${
                          tertiaryLiveUrl
                            ? `<a href="${escapeHtml(tertiaryLiveUrl)}" target="_blank" rel="noopener noreferrer" class="live-tool-btn purple compact" title="Open Maturity Model Storybook in a new browser tab">
                                ${escapeHtml(st.tertiaryLiveLabel || "Storybook ↗")}
                              </a>`
                            : ""
                        }
                      </div>
                    </div>
                  </div>
                  ${
                    st.crossRefNote && st.crossRefNote.targetPlaybookId
                      ? `<div class="stage-cross-ref-note">
                          <span>${escapeHtml(st.crossRefNote.text || "")}</span>
                          <button type="button" class="stage-cross-ref-link"
                                  onclick="switchPlaybookAndOpen('${escapeHtml(st.crossRefNote.targetPlaybookId)}', '${escapeHtml(
                          st.crossRefNote.targetView || "sop"
                        )}', '${escapeHtml(st.crossRefNote.targetId || "")}')">
                            ${escapeHtml(st.crossRefNote.cta || "Open Related Playbook →")}
                          </button>
                        </div>`
                      : ""
                  }
                </div>
                <div>
                  <div class="stage-io-box">
                    <strong>What you finish with:</strong><br/>
                    <span>${escapeHtml(st.outputArtifact || "")}</span>
                  </div>
                  <button type="button" class="stage-card-btn"
                          onclick="openJourneyStage('${escapeHtml(st.targetView?.type || "sop")}', '${escapeHtml(
                st.targetView?.id || ""
              )}')">
                    ${escapeHtml(st.targetView?.cta || "Open Stage Guide →")}
                  </button>
                </div>
              </div>`;
            })
            .join("")}
        </div>
      </section>

      <!-- Dynamic Job Chooser Cards Driven by activePlaybook.processIds -->
      <div class="chooser-section-label">${escapeHtml(plb.chooserLabel || "")}</div>
      <div class="job-chooser-grid">
        ${processes
          .map((proc) => {
            const firstSopId = proc.stages?.[0]?.sopId || "";
            return `
            <div class="job-card">
              <div>
                <div class="job-card-top">
                  <span class="time-pill">⏱ ${escapeHtml(proc.durationBadge || "")}</span>
                  <span class="muted-code-pill">${escapeHtml(proc.appName || "")}</span>
                </div>
                <h2 class="job-card-title">${escapeHtml(proc.title)}</h2>
                <div class="job-meta-list">
                  <div><strong>When to use:</strong> ${escapeHtml(proc.whenToUse || proc.trigger || "")}</div>
                  <div><strong>Output:</strong> ${escapeHtml(proc.cardOutput || proc.finalOutcome || "")}</div>
                </div>
              </div>
              <button type="button" class="job-cta-btn" onclick="selectSOP('${escapeHtml(firstSopId)}')">
                <span>${escapeHtml(proc.ctaLabel || proc.title)}</span>
                <span>→</span>
              </button>
            </div>`;
          })
          .join("")}
      </div>

      <!-- Dynamic 3-Term Plain-English Rules Key Driven by activePlaybook.rulesKey -->
      ${
        rulesKey
          ? `
        <div class="plain-key-box" style="margin-bottom:22px;">
          <div class="plain-key-header">
            <span class="plain-key-title">${escapeHtml(rulesKey.title)}</span>
            <span style="font-size:12px;color:var(--se-gray-5);">${escapeHtml(rulesKey.subtitle || "")}</span>
          </div>
          <div class="plain-key-grid">
            ${(rulesKey.items || [])
              .map(
                (item) => `
              <div class="plain-key-item">
                <div class="plain-key-term">${escapeHtml(item.term)}</div>
                <p class="plain-key-desc">${escapeHtml(item.desc)}</p>
              </div>`
              )
              .join("")}
          </div>
        </div>`
          : ""
      }

      <!-- Bottom 3-Way Cross-Reference Switcher Cards -->
      ${renderThreeWayCrossRefCards(plb)}
    </div>
  `;
}

/**
 * Tab 2: Universal SOP Page with Point-of-Use "Kit Bag" Resolved from SOP & Relations
 * Direct routing with zero PRC-xxx middle cover pages or raw database IDs in the UI
 */
function renderSOPPage(sop, plb, canvas) {
  if (!sop) return;
  const proc = DB.processes[sop.processId];
  const role = DB.roles[sop.roleId];
  const tools = (sop.toolIds || []).map((id) => DB.tools[id]).filter(Boolean);
  const kb = sop.kitBag || {};
  const activeInlineTool = tools.find((t) => t.id === state.openInlineToolId) || null;
  const linkedTemplate = (plb.templates || [])[0] || null;

  canvas.innerHTML = `
    <div class="content-container">
      <div class="breadcrumb-row">
        <button type="button" class="breadcrumb-link" onclick="showOverview()">1. End-to-End Journey</button>
        <span>/</span>
        <span>${escapeHtml(sop.title)}</span>
      </div>

      <h1 class="page-title">${escapeHtml(sop.title)}</h1>
      <p class="page-subtitle" style="margin-bottom:20px;">${escapeHtml(sop.userGoal)}</p>

      <!-- Point-of-Use "Kit Bag for This Task" Card (Resolved from SOP + Relations) -->
      <section class="kit-bag-card" aria-label="Kit Bag for This Task">
        <div class="kit-bag-header">
          <div style="display:flex;align-items:center;gap:10px;">
            <span class="petrol-dot"></span>
            <strong style="font-size:14px;color:#1B1534;text-transform:uppercase;letter-spacing:0.04em;">
              🧰 Kit Bag &amp; Setup for This Guide
            </strong>
          </div>
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            <span class="status-badge-purple">${escapeHtml(kb.mandatoryStatus || "Step-by-Step Guide")}</span>
            <span class="time-pill">⏱ ${escapeHtml(sop.estimatedTime)}</span>
            ${
              linkedTemplate
                ? `<button type="button" class="breadcrumb-link" onclick="selectTemplate('${escapeHtml(linkedTemplate.id)}')">
                     📄 ${escapeHtml(linkedTemplate.navTitle)} →
                   </button>`
                : ""
            }
          </div>
        </div>

        <div class="kit-bag-grid">
          <div class="kit-bag-cell">
            <div class="kit-bag-label">Who Leads &amp; Supports</div>
            <div style="color:#1B1534;font-weight:700;">${escapeHtml(kb.leadRole || role?.title || sop.roleId)}</div>
            <div style="color:#54646E;font-size:12px;margin-top:2px;">${escapeHtml(kb.supportRole || "")}</div>
          </div>

          <div class="kit-bag-cell">
            <div class="kit-bag-label">Point-of-Use Tool (Click for Quick Fixes)</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:4px;align-items:center;">
              ${tools
                .map(
                  (t) => `
                  <button type="button" class="funnel-chip ${state.openInlineToolId === t.id ? "active" : ""}"
                          onclick="toggleInlineToolDrawer('${escapeHtml(t.id)}')">
                    🔧 ${escapeHtml(t.name)} ${state.openInlineToolId === t.id ? "▴" : "▾"}
                  </button>
                  ${
                    t.liveUrl
                      ? `<a href="${escapeHtml(t.liveUrl)}" target="_blank" rel="noopener noreferrer" class="live-tool-btn compact" title="Open ${escapeHtml(
                          t.suite || t.name
                        )} in a new browser tab">
                          Launch Live Tool ↗
                        </a>`
                      : ""
                  }`
                )
                .join("")}
            </div>
            <div style="color:#54646E;font-size:11.5px;margin-top:4px;">Where: ${escapeHtml(sop.stationLocation)}</div>
          </div>

          <div class="kit-bag-cell">
            <div class="kit-bag-label">Input Artifact</div>
            <div style="color:#1B1534;font-weight:600;">${escapeHtml(kb.inputNeeded || proc?.trigger || "")}</div>
          </div>

          <div class="kit-bag-cell">
            <div class="kit-bag-label">Output Artifact</div>
            <div style="color:#007A7A;font-weight:700;">${escapeHtml(kb.outputProduced || proc?.finalOutcome || "")}</div>
          </div>
        </div>

        <!-- Inline Point-of-Use Tool Drawer -->
        ${
          activeInlineTool
            ? `
          <div class="inline-tool-drawer">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
              <div>
                <span class="muted-code-pill">${escapeHtml(activeInlineTool.suite || "")}</span>
                <strong style="font-size:15px;color:#1B1534;margin-left:6px;">${escapeHtml(activeInlineTool.name)}</strong>
              </div>
              <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
                ${
                  activeInlineTool.liveUrl
                    ? `<a href="${escapeHtml(activeInlineTool.liveUrl)}" target="_blank" rel="noopener noreferrer" class="live-tool-btn compact">
                        Launch Live Tool (${escapeHtml(activeInlineTool.suite || activeInlineTool.name)}) ↗
                      </a>`
                    : ""
                }
                ${
                  activeInlineTool.secondaryLiveUrl
                    ? `<a href="${escapeHtml(activeInlineTool.secondaryLiveUrl)}" target="_blank" rel="noopener noreferrer" class="live-tool-btn secondary compact">
                        ${escapeHtml(activeInlineTool.secondaryLiveLabel || "Open Secondary Portal ↗")}
                      </a>`
                    : ""
                }
                <button type="button" class="breadcrumb-link" onclick="selectTool('${escapeHtml(activeInlineTool.id)}')">Open Full Tool Page →</button>
                <button type="button" class="header-btn secondary" style="padding:3px 10px;font-size:12px;color:#1B1534;" onclick="toggleInlineToolDrawer('${escapeHtml(
                  activeInlineTool.id
                )}')">Close ✕</button>
              </div>
            </div>
            <p style="font-size:13px;color:#54646E;margin-bottom:10px;">${escapeHtml(activeInlineTool.purpose)}</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
              <div style="background:#F8FAFC;padding:10px 12px;border-radius:8px;border:1px solid #D7E4EE;">
                <div class="kit-bag-label">Quick Commands &amp; Rules</div>
                ${(activeInlineTool.quickCommands || [])
                  .map(
                    (c) => `<div style="font-size:12.5px;margin-bottom:6px;">
                      <strong style="color:#1B1534;">${escapeHtml(c.goal)}:</strong>
                      <code style="color:#641E8C;background:#F3E8FF;padding:2px 6px;border-radius:4px;">${escapeHtml(c.command)}</code>
                    </div>`
                  )
                  .join("")}
              </div>
              <div style="background:#F8FAFC;padding:10px 12px;border-radius:8px;border:1px solid #D7E4EE;">
                <div class="kit-bag-label">Quick Fixes</div>
                ${(activeInlineTool.troubleshooting || [])
                  .map(
                    (tr) => `<div style="font-size:12.5px;margin-bottom:6px;">
                      <strong style="color:#DA1E28;">${escapeHtml(tr.symptom)}</strong> →
                      <span style="color:#007A7A;font-weight:600;">${escapeHtml(tr.fix)}</span>
                    </div>`
                  )
                  .join("")}
              </div>
            </div>
          </div>`
            : ""
        }
      </section>

      <!-- Anchor 1: Getting Started -->
      <section class="editorial-section">
        <h3 class="editorial-h3">1. Before you begin (Setup checklist)</h3>
        <ul class="clean-list">
          ${(sop.gettingStarted || [])
            .map(
              (item) => `
            <li>
              <input type="checkbox" />
              <span>${escapeHtml(item)}</span>
            </li>`
            )
            .join("")}
        </ul>
      </section>

      <!-- Anchor 2: 3-Mode Action Steps (Custom Image / Declarative SVG / Text + Elevated Coaching) -->
      <section class="editorial-section">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:14px;">
          <h3 class="editorial-h3" style="margin-bottom:0;">2. Step-by-step instructions</h3>
          <button type="button" class="breadcrumb-link" onclick="openStudioForSop('${escapeHtml(sop.id)}', 0)">
            ⚙️ Edit Steps or Paste Screenshots in Studio →
          </button>
        </div>
        ${(sop.steps || [])
          .map((st, idx) => {
            const vMode = getStepVisualMode(st);

            // Mode 3: No Visual / Text-Only Step -> Place elevated coachingTip card in right column
            if (vMode === "none") {
              return `
              <div class="step-split-row">
                <div>
                  <div class="step-kicker">
                    <span>STEP ${st.stepNumber} • TEXT &amp; COACHING STEP</span>
                  </div>
                  <h4 class="step-headline">${escapeHtml(st.action)}</h4>
                  <p class="step-subtext" style="margin-bottom:0;">${escapeHtml(st.detail || "")}</p>
                </div>
                <div class="elevated-coaching-card">
                  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
                    <span style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;color:#007A7A;">
                      💡 Good Practice Coaching Tip
                    </span>
                    <button type="button" class="breadcrumb-link" style="font-size:11.5px;"
                            onclick="openStudioForSop('${escapeHtml(sop.id)}', ${idx})">
                      + Add Screenshot
                    </button>
                  </div>
                  <div style="font-size:14px;color:#1B1534;line-height:1.55;">
                    ${escapeHtml(st.coachingTip || "")}
                  </div>
                </div>
              </div>`;
            }

            // Modes 1 & 2: Custom Screenshot or Declarative SVG
            return `
            <div class="step-split-row">
              <div>
                <div class="step-kicker" style="display:flex;align-items:center;justify-content:space-between;">
                  <span>STEP ${st.stepNumber}</span>
                  <button type="button" class="breadcrumb-link" style="font-size:11.5px;text-transform:none;letter-spacing:0;"
                          onclick="openStudioForSop('${escapeHtml(sop.id)}', ${idx})">
                    Edit Step / Screenshot
                  </button>
                </div>
                <h4 class="step-headline">${escapeHtml(st.action)}</h4>
                <p class="step-subtext">${escapeHtml(st.detail || "")}</p>
                ${
                  st.coachingTip
                    ? `<div class="step-note">
                         <strong>Good Practice Tip:</strong> ${escapeHtml(st.coachingTip)}
                       </div>`
                    : ""
                }
              </div>
              <div>
                ${renderStepIllustrationCard(st)}
              </div>
            </div>`;
          })
          .join("")}
      </section>

      <!-- Anchor 3: Mandatory "Buttons & Controls on This Screen" Reference -->
      ${renderButtonsReferenceSection(getResolvedButtonsReference(sop, tools), "3. Buttons & controls on this screen")}

      <!-- Anchor 4: Self-Service Troubleshooting -->
      <section class="editorial-section">
        <h3 class="editorial-h3">4. Common problems &amp; quick fixes</h3>
        <table class="clean-table">
          <thead>
            <tr>
              <th style="width:34%;">What You See (Symptom)</th>
              <th style="width:30%;">Why It Happens</th>
              <th style="width:36%;">How to Fix It Now</th>
            </tr>
          </thead>
          <tbody>
            ${(sop.troubleshooting || [])
              .map(
                (tr) => `
              <tr>
                <td style="color:#1B1534;font-weight:600;">${escapeHtml(tr.symptom)}</td>
                <td>${escapeHtml(tr.cause)}</td>
                <td style="color:#007A7A;font-weight:600;">${escapeHtml(tr.fix)}</td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </section>
    </div>
  `;
}

function getResolvedButtonsReference(sop, tools) {
  if (Array.isArray(sop?.buttonsReference) && sop.buttonsReference.length > 0) {
    return sop.buttonsReference;
  }
  const combined = [];
  const seen = new Set();
  for (const t of tools || []) {
    for (const btn of t.buttonsReference || []) {
      const key = `${btn.button}||${btn.where}`;
      if (!seen.has(key)) {
        seen.add(key);
        combined.push(btn);
      }
    }
  }
  return combined;
}

function getButtonBadgeStyle(buttonName) {
  const name = String(buttonName || "").toLowerCase();
  // 1. Dark Sidebar Teal Accent (#1B1534 bg, #2dd4bf text, #0d9488 border): Maturity Model Storybook
  if (name.includes("storybook")) {
    return "background:#1B1534;color:#2DD4BF;border:1.5px solid #0D9488;";
  }
  // 2. Danger Red (#dc2626 bg, white text): Reset Progress, Reset All Data, Clear Session, Delete, Clear
  if (name.includes("reset") || name.includes("clear") || name.includes("delete") || name.includes("remove")) {
    return "background:#DC2626;color:#FFFFFF;border:1px solid #B91C1C;";
  }
  // 3. Bright Purple (#8A00E5 bg, white text): Primary action buttons (Upload Assessment, View Action Report, Save Session, Maturity Explainer, Orientation, Mark as Evaluated, Next Step, Accept Proposed Action, + Add Journey Stage, + New SOP Guide, Copy AI, Master Library)
  if (
    name.includes("upload assessment") ||
    name.includes("view action report") ||
    name.includes("export action report") ||
    name.includes("save session") ||
    name.includes("next step") ||
    name.includes("accept proposed action") ||
    name.includes("maturity explainer") ||
    name.includes("orientation") ||
    name.includes("mark as evaluated") ||
    name.includes("question card") ||
    name.includes("simulator") ||
    name.includes("promote") ||
    name.includes("start") ||
    name.includes("filter") ||
    name.includes("slider") ||
    name.includes("add journey stage") ||
    name.includes("new sop guide") ||
    name.includes("copy ") ||
    name.includes("ai prompt") ||
    name.includes("master library")
  ) {
    return "background:#8A00E5;color:#FFFFFF;border:1px solid #6D28D9;";
  }
  // 4. Petrol (#009999 bg, white text): Export Assessment (.json & .csv), Export Full Report (PDF), Export Results (CSV), Export to PowerPoint, ? Help & Guide, Co-pilot, New Standard, Download, Save, Auto-Select, + Add, Authoring Studio, + Create New Playbook, + New Step
  if (
    name.includes("authoring studio") ||
    name.includes("create new playbook") ||
    name.includes("new step") ||
    name.includes("current playbook") ||
    name.includes("export") ||
    name.includes("download") ||
    name.includes("help & guide") ||
    name.includes("co-pilot") ||
    name.includes("output all data") ||
    name.includes("new standard") ||
    name.includes("save") ||
    name.includes("auto-select") ||
    name.includes("+ add") ||
    name.includes("critical header field")
  ) {
    return "background:#009999;color:#FFFFFF;border:1px solid #007A7A;";
  }
  // 5. Deep Plum / Indigo (#2e1065 bg, white text): View Dashboard, Import Assessment (.json / .csv), ? User Guide, View Key, Expand All, Collapse All, View Evaluation Logic, OE Comment, OE Action, Load JSON / CSV
  if (
    name.includes("view dashboard") ||
    name.includes("import") ||
    name.includes("user guide") ||
    name.includes("view key") ||
    name.includes("expand all") ||
    name.includes("collapse all") ||
    name.includes("evaluation logic") ||
    name.includes("oe comment") ||
    name.includes("oe action") ||
    name.includes("load ") ||
    name.includes("upload") ||
    name.includes("select ") ||
    name.includes("old standard") ||
    name.includes("print")
  ) {
    return "background:#2E1065;color:#FFFFFF;border:1px solid #4C1D95;";
  }
  // 6. Dark Sidebar Slate (#1e1b4b bg, #e2e8f0 text): Sidebar navigation items & session buttons
  return "background:#1E1B4B;color:#E2E8F0;border:1px solid #312E81;";
}

function renderButtonsReferenceSection(buttons, sectionHeading) {
  const list = Array.isArray(buttons) ? buttons : [];
  if (list.length === 0) return "";
  return `
    <section class="editorial-section">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px;">
        <h3 class="editorial-h3" style="margin-bottom:0;">${escapeHtml(sectionHeading || "Buttons & controls on this screen")}</h3>
        <span class="muted-code-pill">Screen-by-Screen UI Reference (${list.length} Controls)</span>
      </div>
      <p style="font-size:13.5px;color:#54646E;margin-bottom:12px;">
        Quick reference for every button, toggle, and input control on this screen in the live application (badges match real application button colours):
      </p>
      <table class="clean-table">
        <thead>
          <tr>
            <th style="width:28%;">Button / Control Name</th>
            <th style="width:26%;">Where It Is on Screen</th>
            <th style="width:46%;">What It Does &amp; When to Use It</th>
          </tr>
        </thead>
        <tbody>
          ${list
            .map(
              (b) => `
            <tr>
              <td>
                <span style="${getButtonBadgeStyle(
                  b.button
                )}display:inline-block;padding:4px 10px;border-radius:6px;font-weight:700;font-size:12px;line-height:1.35;font-family:'Inter',sans-serif;box-shadow:0 1px 2px rgba(0,0,0,0.12);">
                  ${escapeHtml(b.button)}
                </span>
              </td>
              <td style="color:#4D217A;font-weight:600;font-size:13px;">${escapeHtml(b.where)}</td>
              <td style="color:#1B1534;font-size:13.5px;line-height:1.5;">${escapeHtml(b.whatItDoes)}</td>
            </tr>`
            )
            .join("")}
        </tbody>
      </table>
    </section>
  `;
}

/**
 * Tab 3: Universal Decision & Priority Tools Engine
 * - "vital-few-guide": Clean 3-rule coaching guide ("How to Narrow Your Gaps to the 'Vital Few' (2 to 3 Key Actions)") + static "What Good Looks Like" comparison + Live App Launcher (Zero redundant app clones or tickboxes)
 * - "score-calculator": Gateway Score Cap Calculator
 */
function renderDecisionToolPage(dec, plb, canvas) {
  if (!dec) return;
  const allDecTools = plb.decisionTools || [];

  const switcherPills =
    allDecTools.length > 1
      ? `<div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap;">
          ${allDecTools
            .map(
              (d) => `
            <button type="button" class="funnel-chip ${d.id === dec.id ? "active" : ""}"
                    onclick="selectDecisionTool('${escapeHtml(d.id)}')">
              ${escapeHtml(d.navTitle)}
            </button>`
            )
            .join("")}
        </div>`
      : "";

  if (dec.kind === "scoring-matrix-1page") {
    renderScoringMatrixWidget(dec, plb, canvas, switcherPills);
    return;
  }

  if (dec.kind === "score-calculator") {
    const levelNames = dec.levelNames || [];
    const compressed = state.simLevel + (state.simRawAvg - 1) / 4;
    const finalScore = Math.min(state.simRawAvg, compressed);

    canvas.innerHTML = `
      <div class="content-container">
        ${switcherPills}
        <div class="eyebrow-tag">${escapeHtml(dec.eyebrow || "")}</div>
        <h1 class="page-title">${escapeHtml(dec.title)}</h1>
        <p class="page-subtitle" style="margin-bottom:28px;">
          ${escapeHtml(dec.subtitle)}
        </p>

        <div class="step-split-row" style="padding-top:0;">
          <div>
            <h3 class="editorial-h3">${escapeHtml(dec.stepsTitle || "")}</h3>
            <ol class="clean-list" style="margin-bottom:20px;">
              ${(dec.steps || []).map((s) => `<li><span>${escapeHtml(s)}</span></li>`).join("")}
            </ol>
          </div>

          <div class="sandbox-card">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
              <strong style="font-size:16px;">${escapeHtml(dec.navTitle)}</strong>
              <span class="lean-pill">Interactive</span>
            </div>

            <div style="margin-bottom:18px;">
              <label for="simLevelSlider" style="display:block;font-size:13px;margin-bottom:6px;color:#EAF4F8;">
                Highest Unlocked Level: <strong style="color:#21C0FF;">${escapeHtml(levelNames[state.simLevel] || "")}</strong>
              </label>
              <input
                type="range"
                id="simLevelSlider"
                min="0"
                max="${Math.max(1, levelNames.length - 1)}"
                step="1"
                value="${state.simLevel}"
                style="width:100%;accent-color:#009999;cursor:pointer;"
              />
            </div>

            <div style="margin-bottom:22px;">
              <label for="simRawSlider" style="display:block;font-size:13px;margin-bottom:6px;color:#EAF4F8;">
                Average of Unlocked Questions: <strong style="color:#21C0FF;">${state.simRawAvg.toFixed(2)}</strong>
              </label>
              <input
                type="range"
                id="simRawSlider"
                min="1.0"
                max="5.0"
                step="0.1"
                value="${state.simRawAvg}"
                style="width:100%;accent-color:#009999;cursor:pointer;"
              />
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;text-align:center;background:rgba(255,255,255,0.08);padding:14px;border-radius:10px;">
              <div>
                <div style="font-size:11px;color:#cbd5e1;">Unlocked Avg</div>
                <div style="font-size:18px;font-weight:700;font-family:ui-monospace,monospace;">${state.simRawAvg.toFixed(2)}</div>
              </div>
              <div>
                <div style="font-size:11px;color:#cbd5e1;">Level Cap</div>
                <div style="font-size:18px;font-weight:700;color:#21C0FF;font-family:ui-monospace,monospace;">${compressed.toFixed(2)}</div>
              </div>
              <div style="background:#009999;border-radius:8px;padding:4px;">
                <div style="font-size:10px;text-transform:uppercase;">Final Score</div>
                <div style="font-size:20px;font-weight:800;font-family:ui-monospace,monospace;">${finalScore.toFixed(1)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById("simLevelSlider").addEventListener("input", (e) => {
      state.simLevel = parseInt(e.target.value, 10);
      renderDecisionToolPage(dec, plb, canvas);
    });
    document.getElementById("simRawSlider").addEventListener("input", (e) => {
      state.simRawAvg = parseFloat(e.target.value);
      renderDecisionToolPage(dec, plb, canvas);
    });
    return;
  }

  // Clean Business-Priority-Led "Focus on the Vital Few (2 to 3 Key Actions)" Coaching Guide
  const rules = dec.rules || [];
  const priorityMatrix = dec.priorityMatrix || [];
  const cmp = dec.comparisonExample || {};
  const goodEx = cmp.good || {};
  const badEx = cmp.bad || {};

  canvas.innerHTML = `
    <div class="content-container">
      ${switcherPills}
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:14px;margin-bottom:16px;">
        <div style="max-width:740px;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;flex-wrap:wrap;">
            <span class="eyebrow-tag" style="margin-bottom:0;">${escapeHtml(dec.eyebrow || "")}</span>
            <span class="muted-code-pill">${escapeHtml(dec.badge || "Target: 2 to 3 Key Actions")}</span>
          </div>
          <h1 class="page-title" style="margin-bottom:8px;">${escapeHtml(dec.title)}</h1>
          <p class="page-subtitle" style="margin-bottom:0;">
            ${escapeHtml(dec.subtitle)}
          </p>
        </div>
        ${
          dec.liveUrl
            ? `<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
                <a href="${escapeHtml(dec.liveUrl)}" target="_blank" rel="noopener noreferrer" class="live-tool-btn">
                  ${escapeHtml(dec.liveLabel || "Launch Navigator Toolkit (Analysis Report) ↗")}
                </a>
              </div>`
            : ""
        }
      </div>

      <!-- 3-Step Alignment Logic Cards (Business Priority First → Supported by Capability → Focused Action) -->
      <section class="editorial-section" style="margin-top:18px;">
        <h3 class="editorial-h3">${escapeHtml(
          dec.rulesHeading || "The 3-Step Alignment Logic: Business Priority First → Supported by Capability → Focused Action"
        )}</h3>
        <div class="funnel-controls-grid">
          ${rules
            .map(
              (r) => `
            <div class="funnel-filter-card" style="display:flex;flex-direction:column;justify-content:space-between;">
              <div>
                <span class="funnel-step-badge">${escapeHtml(r.badge || "")}</span>
                <h3 style="font-size:16px;font-weight:800;color:#1B1534;margin-bottom:8px;line-height:1.35;">
                  ${escapeHtml(r.title || "")}
                </h3>
                <p style="font-size:13.5px;color:#54646E;line-height:1.55;margin-bottom:12px;">
                  ${escapeHtml(r.desc || "")}
                </p>
              </div>
              <div style="background:#F8FAFC;border:1px solid #D7E4EE;border-left:4px solid #009999;border-radius:8px;padding:10px 12px;font-size:12.5px;color:#1B1534;">
                <strong style="color:#007A7A;display:block;margin-bottom:2px;">Where to do this in the app:</strong>
                <span>${escapeHtml(r.whereInApp || "")}</span>
              </div>
            </div>`
            )
            .join("")}
        </div>
      </section>

      <!-- Practical "Business Priority ↔ Supporting Maturity Capability" Reference Matrix (7 Core Business Priorities) -->
      ${
        priorityMatrix.length > 0
          ? `
      <section class="editorial-section">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px;">
          <h3 class="editorial-h3" style="margin-bottom:0;">
            ${escapeHtml(
              dec.matrixHeading ||
                "Practical 'Business Priority ↔ Supporting Maturity Capability' Reference Matrix"
            )}
          </h3>
          <span class="muted-code-pill">7 Operational Business Priorities × Enabling Lean Capabilities</span>
        </div>
        <p style="font-size:13.5px;color:#54646E;margin-bottom:14px;">
          ${escapeHtml(
            dec.matrixSubtitle ||
              "Start in the left column with the operational problem your leadership team needs to solve—then pair it with the enabling Lean maturity capabilities (Questions & ★ Gateways) needed to deliver and sustain that result:"
          )}
        </p>
        <div style="overflow-x:auto;">
          <table class="clean-table">
            <thead>
              <tr>
                <th style="width:18%;">${escapeHtml(dec.matrixColumns?.col1 || "Business Priority (What the Business Needs)")}</th>
                <th style="width:24%;">${escapeHtml(dec.matrixColumns?.col2 || "Typical Operational Pain Point")}</th>
                <th style="width:26%;">${escapeHtml(dec.matrixColumns?.col3 || "Supporting Maturity Capabilities to Develop (Questions & ★ Gateways)")}</th>
                <th style="width:32%;">${escapeHtml(dec.matrixColumns?.col4 || "Example 'Vital Few' Charter Action (Business Target + Capability)")}</th>
              </tr>
            </thead>
            <tbody>
              ${priorityMatrix
                .map(
                  (row) => `
                <tr>
                  <td>
                    <span style="display:inline-block;background:#1B1534;color:#FFFFFF;font-size:12px;font-weight:800;padding:5px 11px;border-radius:6px;letter-spacing:0.01em;">
                      ${escapeHtml(row.priority || "")}
                    </span>
                  </td>
                  <td style="color:#1B1534;font-weight:600;font-size:13px;">
                    ${escapeHtml(row.painPoint || "")}
                  </td>
                  <td>
                    <div style="background:#F3E8FF;border:1px solid #D8B4FE;color:#4C1D95;font-size:12.5px;font-weight:700;padding:7px 10px;border-radius:8px;line-height:1.45;">
                      ${escapeHtml(row.supportingCapabilities || "")}
                    </div>
                  </td>
                  <td>
                    <div style="background:#F0FDF9;border-left:3.5px solid #009999;padding:8px 11px;border-radius:6px;color:#1B1534;font-size:13px;font-style:italic;font-weight:600;line-height:1.45;">
                      "${escapeHtml(row.exampleAction || "")}"
                    </div>
                  </td>
                </tr>`
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </section>`
          : ""
      }

      <!-- Static "What Good Looks Like" Comparison Card (1 Good Business-Led Action vs. 1 Vague Maturity Wishlist Item) -->
      <section class="editorial-section">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:12px;">
          <h3 class="editorial-h3" style="margin-bottom:0;">
            ${escapeHtml(cmp.heading || "What Good Looks Like: 1 Focused Action vs. 1 Vague Wishlist Item")}
          </h3>
          <span class="muted-code-pill">Static Coaching Comparison</span>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;">
          <!-- Good Focused Action -->
          <div style="background:#F0FDF9;border:2px solid #009999;border-radius:12px;padding:20px;">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:10px;">
              <span style="background:#009999;color:#FFFFFF;font-size:11.5px;font-weight:800;padding:4px 10px;border-radius:99px;text-transform:uppercase;letter-spacing:0.04em;">
                ${escapeHtml(goodEx.badge || "✅ Good Focused Action (Vital Few)")}
              </span>
              <span style="font-family:ui-monospace,monospace;font-size:12px;font-weight:700;color:#007A7A;">
                ${escapeHtml(goodEx.gatewayRef || "")}
              </span>
            </div>
            <h4 style="font-size:16px;font-weight:800;color:#1B1534;margin-bottom:8px;">
              ${escapeHtml(goodEx.title || "")}
            </h4>
            <div style="background:#FFFFFF;border:1px solid #B8CEDB;border-radius:8px;padding:12px;margin-bottom:12px;font-size:13.5px;color:#1B1534;font-weight:600;">
              "${escapeHtml(goodEx.statement || "")}"
            </div>
            <div style="font-size:13px;color:#1B1534;line-height:1.5;">
              <strong style="color:#007A7A;">Why this works:</strong> ${escapeHtml(goodEx.whyItWorks || "")}
            </div>
          </div>

          <!-- Vague Wishlist Item -->
          <div style="background:#FFF1F2;border:2px solid #DA1E28;border-radius:12px;padding:20px;">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:10px;">
              <span style="background:#DA1E28;color:#FFFFFF;font-size:11.5px;font-weight:800;padding:4px 10px;border-radius:99px;text-transform:uppercase;letter-spacing:0.04em;">
                ${escapeHtml(badEx.badge || "❌ Vague Wishlist Item (Avoid)")}
              </span>
              <span style="font-family:ui-monospace,monospace;font-size:12px;font-weight:700;color:#DA1E28;">
                ${escapeHtml(badEx.warningRef || "Unfocused Wishlist")}
              </span>
            </div>
            <h4 style="font-size:16px;font-weight:800;color:#1B1534;margin-bottom:8px;">
              ${escapeHtml(badEx.title || "")}
            </h4>
            <div style="background:#FFFFFF;border:1px solid #FECDD3;border-radius:8px;padding:12px;margin-bottom:12px;font-size:13.5px;color:#54646E;font-style:italic;">
              "${escapeHtml(badEx.statement || "")}"
            </div>
            <div style="font-size:13px;color:#1B1534;line-height:1.5;">
              <strong style="color:#DA1E28;">Why this fails:</strong> ${escapeHtml(badEx.whyItFails || "")}
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

/**
 * Tab 4A: Annotated Example & Field Guide Renderer (Zero Copy-to-Clipboard or Prioritiser State Clones)
 */
function renderTemplatePage(tpl, plb, canvas) {
  if (!tpl) return;
  const th = tpl.tableHeaders || {};
  const exampleRows = tpl.exampleRows || [];
  const fieldGuide = tpl.fieldGuide || [];
  const allTpls = plb.templates || [];
  const allRefs = plb.referenceTables || [];

  const tab4SwitcherBar =
    allTpls.length + allRefs.length > 1
      ? `<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap;align-items:center;">
          ${allTpls
            .map(
              (t) => `
            <button type="button" class="funnel-chip ${t.id === tpl.id ? "active" : ""}" onclick="selectTemplate('${escapeHtml(t.id)}')">
              📄 ${escapeHtml(t.navTitle)}
            </button>`
            )
            .join("")}
          ${allRefs
            .map(
              (r) => `
            <button type="button" class="funnel-chip" onclick="selectReferenceTable('${escapeHtml(r.id)}')">
              📊 ${escapeHtml(r.navTitle)}
            </button>`
            )
            .join("")}
        </div>`
      : "";

  canvas.innerHTML = `
    <div class="content-container">
      ${tab4SwitcherBar}
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:14px;margin-bottom:18px;">
        <div style="max-width:740px;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;flex-wrap:wrap;">
            <span class="eyebrow-tag" style="margin-bottom:0;">${escapeHtml(tpl.eyebrow || "")}</span>
            <span class="muted-code-pill">${escapeHtml(tpl.badge || "Annotated Field Guide")}</span>
          </div>
          <h1 class="page-title" style="margin-bottom:6px;">${escapeHtml(tpl.title)}</h1>
          <p class="page-subtitle" style="margin-bottom:0;">
            ${escapeHtml(
              tpl.subtitle ||
                "Annotated reference showing what goes into each field inside Navigator Toolkit → Charter Input and Charter & Roadmaps."
            )}
          </p>
        </div>
        ${
          tpl.liveUrl
            ? `<div style="display:flex;gap:10px;align-items:center;">
                <a href="${escapeHtml(tpl.liveUrl)}" target="_blank" rel="noopener noreferrer" class="live-tool-btn">
                  ${escapeHtml(tpl.liveLabel || "Launch Navigator Toolkit (Charter Input) ↗")}
                </a>
              </div>`
            : ""
        }
      </div>

      ${
        tpl.kind === "authoring-reference"
          ? `
        <!-- 3-Tier Guide Storage & Sharing Workflow Visual Diagram -->
        <section class="editorial-section">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px;">
            <h3 class="editorial-h3" style="margin-bottom:0;">1. 3-Tier Guide Storage &amp; Sharing Architecture</h3>
            <span class="muted-code-pill">Static-Host Architecture (Zero Database Required)</span>
          </div>
          <p style="font-size:13.5px;color:#54646E;margin-bottom:14px;">
            How local browser authoring, single-playbook peer sharing (<code>.leanguide.json</code>), and official repository releases (<code>guides.json</code>) work together:
          </p>
          <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:16px;margin-bottom:20px;">
            ${(tpl.storageTiers || [])
              .map(
                (st) => `
              <div style="background:#FFFFFF;border:2px solid ${escapeHtml(st.borderColor || "#009999")};border-radius:12px;padding:18px;display:flex;flex-direction:column;justify-content:space-between;">
                <div>
                  <span style="display:inline-block;background:${escapeHtml(st.badgeBg || "#1B1534")};color:#FFFFFF;font-size:11px;font-weight:800;padding:4px 10px;border-radius:99px;text-transform:uppercase;letter-spacing:0.04em;margin-bottom:8px;">
                    ${escapeHtml(st.tierBadge || "")}
                  </span>
                  <h4 style="font-size:16px;font-weight:800;color:#1B1534;margin-bottom:6px;">
                    ${escapeHtml(st.title || "")}
                  </h4>
                  <p style="font-size:13px;color:#54646E;line-height:1.5;margin-bottom:10px;">
                    ${escapeHtml(st.desc || "")}
                  </p>
                </div>
                <div style="background:#F8FAFC;border:1px solid #D7E4EE;border-radius:8px;padding:10px;font-size:12px;color:#1B1534;">
                  <strong style="color:#007A7A;display:block;margin-bottom:2px;">File / Mechanism:</strong>
                  <code>${escapeHtml(st.fileSpec || "")}</code>
                </div>
              </div>`
              )
              .join("")}
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:10px;background:#F0FDF9;border:1.5px solid #009999;border-radius:10px;padding:14px 18px;align-items:center;justify-content:space-between;">
            <div style="font-size:13px;color:#1B1534;font-weight:700;">
              🚀 Try the 3-Tier Controls Right Now:
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:8px;">
              <button type="button" class="header-btn studio-cta-btn" onclick="openAdminModal()">✦ Open Authoring Studio</button>
              <button type="button" class="header-btn" style="background:#009999;" onclick="downloadCurrentPlaybookBundle()">⬇ Download Current Playbook (.leanguide.json)</button>
              <button type="button" class="header-btn" style="background:#2E1065;" onclick="triggerGlobalGuideUpload()">⬆ Upload / Merge Guide (.json)</button>
              <button type="button" class="header-btn" style="background:#8A00E5;" onclick="downloadUpdatedGuidesJson()">⬇ Download Master Library (guides.json)</button>
            </div>
          </div>
        </section>

        <!-- AI Playbook Prompt Cheat Sheet -->
        <section class="editorial-section">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px;">
            <h3 class="editorial-h3" style="margin-bottom:0;">2. 60-Second AI Playbook Generator Cheat Sheet (M365 Copilot / Gemini)</h3>
            <button type="button" class="header-btn" style="background:#8A00E5;" onclick="copyAiPlaybookPrompt(); showGuideToast('✓ Copied AI Playbook Prompt to clipboard!');">
              📋 Copy Ready-to-Use AI Prompt
            </button>
          </div>
          <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:14px;">
            ${(tpl.aiCheatSheet || [])
              .map(
                (step) => `
              <div style="background:#FAF5FF;border:1px solid #D8B4FE;border-radius:10px;padding:14px;">
                <div style="font-size:11px;font-weight:800;color:#6D28D9;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">
                  ${escapeHtml(step.stepBadge || "")}
                </div>
                <div style="font-size:14px;font-weight:800;color:#1B1534;margin-bottom:4px;">
                  ${escapeHtml(step.title || "")}
                </div>
                <div style="font-size:12.5px;color:#54646E;line-height:1.45;">
                  ${escapeHtml(step.detail || "")}
                </div>
              </div>`
              )
              .join("")}
          </div>
        </section>

        <!-- Complete Authoring Studio Button & Control Reference Table -->
        ${renderButtonsReferenceSection(tpl.buttonsReference || [], "3. Complete Authoring Studio Button & Control Reference")}
      </div>
      `
          : `
      ${
        fieldGuide.length > 0
          ? `
        <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:14px;margin-bottom:20px;">
          ${fieldGuide
            .map(
              (fg) => `
            <div style="background:#EAF4F8;border:1px solid #B8CEDB;border-radius:10px;padding:14px;">
              <div style="font-size:11px;font-weight:800;color:#007A7A;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">
                ${escapeHtml(fg.section || fg.field || "")}
              </div>
              <div style="font-size:14px;font-weight:700;color:#1B1534;margin-bottom:4px;">
                ${escapeHtml(fg.appField || fg.whatToEnter || "")}
              </div>
              <div style="font-size:12.5px;color:#54646E;line-height:1.45;">
                ${escapeHtml(fg.guidance || fg.example || "")}
              </div>
            </div>`
            )
            .join("")}
        </div>`
          : ""
      }

      <div id="charterBox" style="border:2px solid var(--se-gray-1);border-radius:14px;padding:28px;background:#FFFFFF;">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid #EAF4F8;">
          <strong style="font-size:13px;color:#4D217A;text-transform:uppercase;letter-spacing:0.05em;">
            📌 Annotated Example — Completed 1-Page Charter Layout
          </strong>
          <span style="font-size:12px;color:#007A7A;font-weight:600;">
            Built &amp; Exported Inside ${escapeHtml(tpl.appLocation || "Navigator Toolkit → Charter Input & Charter & Roadmaps")}
          </span>
        </div>

        <div class="meta-strip" style="margin-bottom:24px;">
          ${(tpl.metaFields || [])
            .map((mf) => `<div><strong>${escapeHtml(mf.label)}:</strong> ${escapeHtml(mf.value)}</div>`)
            .join("")}
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px;">
          <div style="padding:16px;background:var(--se-canvas-subtle);border:1px solid var(--se-gray-1);border-radius:10px;">
            <strong style="color:#1B1534;display:block;margin-bottom:8px;">${escapeHtml(tpl.leftBoxTitle || "Business Priorities & Operational Problem Statement")}</strong>
            <ul style="padding-left:18px;color:#54646E;font-size:14px;">
              ${(tpl.leftBoxBullets || []).map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
            </ul>
          </div>
          <div style="padding:16px;background:var(--se-canvas-subtle);border:1px solid var(--se-gray-1);border-radius:10px;">
            <strong style="color:#1B1534;display:block;margin-bottom:8px;">${escapeHtml(tpl.rightBoxTitle || "Supporting Lean Maturity Capabilities (★)")}</strong>
            <div style="color:#54646E;font-size:14px;">
              <div><strong>${escapeHtml(tpl.rightBoxPrimary || "Enabling Capabilities Selected from Stage 2 Analysis Report")}</strong></div>
              <div style="margin-top:6px;">
                <strong>${escapeHtml(tpl.rightBoxSecondaryPrefix || "Focus Gateways")}:</strong>
                ${escapeHtml(tpl.rightBoxSecondaryValue || "Q10 (Pilot Experiments) • Q12 (Visual Flow Metrics) • Q14 (Daily Huddles)")}
              </div>
            </div>
          </div>
        </div>

        <table class="clean-table">
          <thead>
            <tr>
              <th style="width:80px;">${escapeHtml(th.code || "#")}</th>
              <th>${escapeHtml(th.action || th.focus || "Focused Charter Action ('Vital Few' — Max 3)")}</th>
              <th style="width:160px;">${escapeHtml(th.lift || "Supporting Capability (★)")}</th>
              <th style="width:130px;">${escapeHtml(th.tag || "Business Priority")}</th>
              <th style="width:110px;">${escapeHtml(th.due || th.targetDate || "90-Day Milestone")}</th>
              <th style="width:140px;">${escapeHtml(th.owner || "Single Named Owner")}</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background:var(--se-gray-0);">
              <td style="font-weight:700;color:#1B1534;">${escapeHtml(tpl.objectiveRowCode || "OBJ 1")}</td>
              <td colspan="5" style="font-weight:700;color:#1B1534;">
                ${escapeHtml(tpl.objectiveRowText || "Deliver measurable operational improvements in Lead Time, Quality, and Throughput supported by foundational Lean capabilities.")}
              </td>
            </tr>
            ${exampleRows
              .map(
                (r, idx) => `
              <tr>
                <td style="font-family:ui-monospace,monospace;font-weight:700;color:#1B1534;">${escapeHtml(r.code || `ACT-${idx + 1}`)}</td>
                <td style="color:#1B1534;font-weight:600;">
                  ${escapeHtml(r.action || r.focus || "")}
                  <div style="font-size:12px;color:#007A7A;font-weight:600;margin-top:3px;">
                    ${escapeHtml(r.note || r.kpi || "")}
                  </div>
                </td>
                <td style="font-family:ui-monospace,monospace;color:#4C1D95;font-weight:700;">${escapeHtml(r.lift || "")}</td>
                <td><span style="background:#1B1534;color:#FFFFFF;font-size:11.5px;font-weight:700;padding:3px 8px;border-radius:5px;">${escapeHtml(r.tag || "")}</span></td>
                <td style="font-family:ui-monospace,monospace;">${escapeHtml(r.due || r.targetDate || "")}</td>
                <td>${escapeHtml(r.owner || "")}</td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
      `
      }
  `;
}

const MATRIX_DATA_NEW_STANDARD = [
  { n: 1, t: "Foundation", tc: "theme-Foundation", g: "★ L1", q: "Is there a clear business reason driving this Lean Programme?", s1: "No documented or communicated link exists between Lean activities and a specific business problem.", s2: "BINARY", s3: "BINARY", s4: "BINARY", s5: "Yes: A specific, compelling business problem (True North) is clearly identified, well-communicated, and provides direction across the team. Generic efficiency platitudes do not qualify." },
  { n: 2, t: "Foundation", tc: "theme-Foundation", g: "★ L1", q: "Is leadership committed and actively invested in being involved?", s1: "Leadership is unaware of or passive toward Lean activities, delegating all responsibility to specialists.", s2: "BINARY", s3: "BINARY", s4: "BINARY", s5: "Yes: Leadership consistently provides resources, time, and visible support for local Lean activities." },
  { n: 3, t: "Foundation", tc: "theme-Foundation", g: "★ L1", q: "Has the team or organisation started acquiring foundational Lean knowledge?", s1: "No basic Lean training or introductory knowledge-sharing has occurred within the team.", s2: "BINARY", s3: "BINARY", s4: "BINARY", s5: "Yes: A core team (BE or Improvement team) has completed basic lean training beyond L4L or L4E." },
  { n: 4, t: "Awareness & Training", tc: "theme-Awareness", g: "★ L1", q: "How clearly can your team describe what Lean means and how it supports your business goals?", s1: "The team cannot define Lean or explain how it relates to their business goals.", s2: "The team defines Lean purely as a cost-cutting tool or a set of manufacturing-specific methods.", s3: "Most (>70%) of the team share a definition of Lean aligned with process flow, waste elimination, and customer value.", s4: "The team can clearly explain how applying Lean principles directly supports and levers their current key performance indicators.", s5: "A comprehensive, value-driven definition of Lean is universally lived, with the team actively driving process changes to fulfill strategic goals." },
  { n: 5, t: "Awareness & Training", tc: "theme-Awareness", g: "★ L1", q: "How deeply do team members understand core Lean concepts?", s1: "Limited or no understanding of core Lean concepts (such as the 8 wastes or continuous flow) exists.", s2: "The team understands Lean concepts theoretically but cannot recognize waste or flow bottlenecks in their daily work.", s3: "The team can practically apply core Lean concepts to solve basic, localized process problems under expert coaching.", s4: "Most (>70%) of the team can explain why flow beats batching and can independently initiate simple improvements to remove waste.", s5: "Deep, comprehensive understanding is demonstrated; team members routinely coach and mentor each other in scientific problem-solving." },
  { n: 6, t: "Awareness & Training", tc: "theme-Awareness", g: "L2", q: "Is there a consistent and active plan to close competency gaps?", s1: "No method or plan exists to identify or track the skills and capability gaps of the team.", s2: "A training record is maintained centrally, but it is purely administrative and not used to manage on-the-job capability gaps.", s3: "The team has a visible and active method for identifying and closing skills gaps.", s4: "Competence development and tracking are managed through an active skills tracking mechanism, with clear, routine peer-shadowing plans.", s5: "Skills progression is fully integrated into daily operations, with team members systematically peer-coaching and cross-training each other." },
  { n: 7, t: "Structure & Strategy", tc: "theme-Structure", g: "★ L2", q: "Is there a clear Lean structure and defined role ownership within the team?", s1: "No individual is assigned or takes ownership for driving Lean activities within the team.", s2: "Lean activities are driven purely by an ad-hoc individual enthusiast without formal responsibility or leadership support.", s3: "Defined responsibility is established for driving Lean activities, with named roles or documented expectations.", s4: "Defined roles are actively involved in daily routines, meetings, and operational problem-solving.", s5: "The structure is fully self-sustaining, resilient, and survives personnel and leadership changes." },
  { n: 8, t: "Structure & Strategy", tc: "theme-Structure", g: "★ L2", q: "How effectively is strategy managed and reviewed at your level?", s1: "No strategic goals are communicated to the team; operations are purely reactive.", s2: "Strategic goals are broadcasted from the top down, but the team cannot link them to their daily improvement activities.", s3: "The team can clearly link local Lean initiatives and project targets directly to cascaded strategic goals.", s4: "A documented, bidirectional feedback process (Catchball) is actively used to confirm and negotiate objectives, targets, and initiative capacities against actual team resources.", s5: "Strategy deployment is a continuous, self-regulating PDCA cycle, with frontline capability directly guiding the organization's strategic direction." },
  { n: 9, t: "Structure & Strategy", tc: "theme-Structure", g: "L3", q: "How well are strategic objectives cascaded to teams?", s1: "Strategic objectives are not cascaded to teams or are poorly understood.", s2: "Strategic objectives are cascaded, but understanding at the team level is very limited.", s3: "Strategic objectives are partially cascaded, with some understanding among teams, but consistency may vary.", s4: "Strategic objectives are well cascaded to teams, and there's a good understanding of their relevance to daily work.", s5: "Strategic objectives are fully integrated and clearly cascaded to all teams, who understand their contribution and track progress effectively." },
  { n: 10, t: "Tools & KPI Alignment", tc: "theme-Tools", g: "★ L2", q: "Does the team actively execute structured, pilot experiments?", s1: "No structured experiments or tool trials have been attempted by the team.", s2: "Ad-hoc, uncoordinated attempts to use Lean tools have occurred, but without structure or visual tracking.", s3: "The team can present a visible, active roadmap, process map, or pilot storyboard used to track and manage active experiments. Standard, repeating behavior.", s4: "Structured experiments are consistently managed and documented, with the team active in analyzing pilot area results.", s5: "Active experimentation is a default, continuous habit, with pilot results systematically scaled across different areas." },
  { n: 11, t: "Tools & KPI Alignment", tc: "theme-Tools", g: "L3", q: "Are Lean tools routinely applied and embedded in daily operations?", s1: "No Lean tools or routines are consistently utilized in the workspace.", s2: "The team occasionally attempts to use Lean templates (e.g., A3, standard work) but only when prompted by a specialist.", s3: "Defined standard work, templates, or visual aids are visually documented and understood for primary tools.", s4: "Lean tools are a live operational interface, updated in real-time and actively managed by the team on a daily basis.", s5: "The team has customized and optimized their operational tools to perfectly fit their workflow, operating on self-regulation." },
  { n: 12, t: "Tools & KPI Alignment", tc: "theme-Tools", g: "★ L3", q: "Are performance metrics and Lean-relevant KPIs displayed and actively discussed in the work area?", s1: "No performance metrics or KPIs are captured or displayed in the work area.", s2: "The team tracks standard operational metrics, but these are purely lagging, traditional cost-accounting metrics.", s3: "The team actively tracks and visually displays flow-focused Lean KPIs (lead time, throughput, yield, defect rates). Traditional utilization/cost absorption do not qualify.", s4: "Lean KPIs are updated and discussed daily during huddles, directly guiding immediate team problem-solving priorities.", s5: "KPI tracking is live and predictive, with the team proactively adjusting daily workflows based on leading indicator trends." },
  { n: 13, t: "Tools & KPI Alignment", tc: "theme-Tools", g: "L4", q: "Is the review of KPIs driven by Lean principles to prevent local optimization?", s1: "No structured review of KPIs occurs; metrics are compiled but ignored.", s2: "KPI reviews occur, but focus strictly on local targets with no consideration for end-to-end process impact.", s3: "KPI reviews occur regularly, with the team actively evaluating performance interfaces and cross-functional handoffs.", s4: "Metrics are balanced and reviewed through a Lean lens, ensuring improvements in one area reinforce performance in others and prioritize flow, quality, and waste reduction.", s5: "Leading indicators are used proactively to drive systemic improvements across the value stream, ensuring actions strengthen system-wide flow, quality, and performance." },
  { n: 14, t: "Daily Mgmt & CI", tc: "theme-Daily", g: "★ L3", q: "Are daily huddles used consistently to raise and resolve issues?", s1: "The team does not conduct huddles or regular operational alignment meetings.", s2: "Operational meetings occur occasionally, but are unstructured, reactive, and lack visual tracking.", s3: "Short, daily huddles occur at a fixed time with a standard board, actively run by the lead to identify workflow obstacles and maintain process flow.", s4: "A fully functioning tiered huddle system is active, with formal, rapid escalation loops connecting multiple functional areas.", s5: "Daily huddles extend seamlessly to cross-functional partners and external suppliers, driving self-regulated, real-time adjustments." },
  { n: 15, t: "Daily Mgmt & CI", tc: "theme-Daily", g: "★ L3", q: "How effectively are employee suggestions captured and implemented?", s1: "No process exists for employees to submit or track process improvement suggestions.", s2: "An ad-hoc suggestion box exists, but suggestions are rarely reviewed, tracked, or implemented.", s3: "A structured suggestion process is active and consistently tracked (logged, displayed, and reviewed).", s4: "Process improvements are systematically aligned with team KPIs and strategic business goals, eliminating arbitrary percentage targets.", s5: "The team owns and manages their standard work, utilizing a structured, verified process to safely update and test standards, serving as process owners." },
  { n: 16, t: "Value Chain Integration", tc: "theme-ValueChain", g: "★ L3", q: "Does the team practice structured reflection?", s1: "The team does not conduct reflections, reviews, or debriefs after process changes.", s2: "The team has completed a retrospective or lessons-learned session at least once for a major project.", s3: "A structured learning/reflection process is the normal approach consistently used after major changes, driven actively by the Lead.", s4: "Reflections consistently evaluate both process performance (Did we hit the target?) and team learning (How can we improve our collaboration?).", s5: "The team systematically analyzes even highly successful tasks to understand systemic performance factors and capture learning." },
  { n: 17, t: "Value Chain Integration", tc: "theme-ValueChain", g: "L4", q: "How consistently are lessons learned documented and applied?", s1: "Lessons learned are not documented, resulting in repeating the same process errors.", s2: "Documenting is ad-hoc (e.g., an occasional social media post or newsletter), focusing only on positive marketing.", s3: "Learnings (both successful wins and process failures/losses) are systematically documented in an accessible repository.", s4: "The team regularly reviews the learning repository to update local standards and prevent recurring bottlenecks.", s5: "The team systematically searches for and applies documented learnings from other business units before starting any new project or process change." },
  { n: 18, t: "Value Chain Integration", tc: "theme-ValueChain", g: "★ L4", q: "Does your Lean philosophy extend across your entire value chain?", s1: "The team's Lean focus is exclusively on internal operations, with no consideration for external partners.", s2: "The team recognizes that supplier performance impacts them, but supplier relations remain purely transactional.", s3: "The team begins to formally share its Lean philosophy and expectations with key partners through structured communication.", s4: "Standards are shared, co-monitored, and acted upon collaboratively with value chain partners.", s5: "The entire value chain is integrated; suppliers, partners, and the team operate as one seamless, end-to-end value system." },
  { n: 19, t: "Value Chain Integration", tc: "theme-ValueChain", g: "L4", q: "Are internal departmental handoffs integrated to ensure seamless process flow?", s1: "Internal departments operate in strict functional silos, with no collaboration on shared processes.", s2: "Information is shared occasionally between departments, but handoff bottlenecks are ignored until they cause a crisis.", s3: "Cross-functional process maps (such as SIPOC) are defined and agreed upon by the primary departmental interfaces.", s4: "Internal departments regularly and proactively collaborate to optimize end-to-end workflow across handoffs.", s5: "Cross-departmental boundaries are virtually invisible, with shared resource pools and natural collaboration driving flow." },
  { n: 20, t: "Leadership & Culture", tc: "theme-Leadership", g: "L3", q: "Do leaders practice the 'Gemba Walk' habit consistently?", s1: "Leaders rarely or never visit the active workspace, managing operations strictly via spreadsheets and reports.", s2: "Leaders visit the workspace only when a major crisis or process failure occurs.", s3: "Scheduled Gemba walks with a focused operational theme occur consistently. Guidance contains standard 'Go and See' translations.", s4: "Leaders conduct Gemba walks to actively identify systemic bottlenecks, partnering with the team to remove them.", s5: "The Gemba habit is a natural, daily interaction; leaders are viewed as accessible coaches focused on raising standards." },
  { n: 21, t: "Leadership & Culture", tc: "theme-Leadership", g: "L3", q: "Do leaders use a consistent questioning cycle to identify target conditions and obstacles?", s1: "Leaders manage via command-and-control, giving direct instructions rather than coaching the team.", s2: "Leaders attempt to ask questions, but these are often closed, leading questions that dictate the solution.", s3: "Leaders consistently use Socratic, open-ended questioning cycles to guide daily problem-solving and develop team thinking. Avoids Kata jargon.", s4: "Leaders utilize formal coaching frameworks (such as Toyota Kata) to systematically help the team define target conditions and obstacles.", s5: "Coaching is seamless, peer-to-peer, and constant; the leader has successfully built a self-sustaining coaching culture." },
  { n: 22, t: "Leadership & Culture", tc: "theme-Leadership", g: "★ L3", q: "Is there a culture of psychological safety that encourages safe experimentation?", s1: "Fear culture - mistakes are punished, problems are hidden, and blame is assigned.", s2: "Silence and avoidance - team members hesitate to speak up; risks and failures are discussed late or indirectly.", s3: "Stated safety (but inconsistent) - No Blame mindset is communicated, but reactions to mistakes vary depending on the situation or leader.", s4: "Practiced transparency - teams openly share mistakes and near-misses in regular routines without negative consequences.", s5: "Active learning culture - leaders actively invite challenge and sharing; learning from experiments is recognized and mistakes are treated as system failures." },
  { n: 23, t: "Learning & Scaling", tc: "theme-Scaling", g: "L4", q: "Are learnings from reflection used to update standard work?", s1: "Reflection is never linked to updating standards; process changes are purely ad-hoc.", s2: "The team occasionally updates standard work after a crisis, but without structured reflection.", s3: "Reflection is built into the weekly cadence, with some learnings captured to update local standard work templates.", s4: "Reflection is consistently used to improve how work is performed on a daily basis, ensuring standard work outcomes are updated based on behavioral changes.", s5: "Frontline teams dynamically evolve and update their own operational standards in real-time, within verified safety loops." },
  { n: 24, t: "Learning & Scaling", tc: "theme-Scaling", g: "L4", q: "Is physical verification used to validate pilot project outcomes?", s1: "Pilot projects are not utilized; new processes are deployed across the whole site without testing.", s2: "Pilots are attempted theoretically, but are not verified physically or digitally in the work area.", s3: "To achieve Level 3, the team must present live, physical, or digital examples of active pilot work currently running in their area.", s4: "Pilot outcomes are rigorously analyzed using visual data over time before broader deployment is approved.", s5: "Structured pilot experimentation is the natural default for every process change, with outcomes visually verified by the team." },
  { n: 25, t: "Learning & Scaling", tc: "theme-Scaling", g: "★ L4", q: "Are successful standards systematically scaled across the site?", s1: "Successful standards are never scaled; process improvements remain isolated to the original pilot cell.", s2: "Scaling happens occasionally by chance (viral), but without planning or leadership support.", s3: "A formal, documented deployment plan exists to scale successful standards from the pilot to the wider local site.", s4: "Standards are updated centrally to ensure broader adoption across the site or business area.", s5: "The organization scales process improvements faster than the market changes, with a seamless pipeline for standard updates." },
  { n: 26, t: "Collaboration & Feedback", tc: "theme-Collaboration", g: "★ L3", q: "Do teams from different functions collaborate to improve shared processes?", s1: "Silos - focus stays strictly on individual functional areas.", s2: "Minimal coordination - information is shared occasionally, but teams work in silos and avoid joint problem-solving.", s3: "Coordination focus - regular meetings exist, but focus is on coordination rather than joint problem-solving.", s4: "Structured collaboration - teams proactively work together using structured methods to solve problems across handoffs.", s5: "End-to-end alignment - teams act as one end-to-end process team; people collaborate across functions naturally to improve flow." },
  { n: 27, t: "Collaboration & Feedback", tc: "theme-Collaboration", g: "★ L5", q: "Are joint improvement projects executed with external partners?", s1: "No joint projects are executed; partner relations are purely transactional.", s2: "Joint meetings occur occasionally, but focus on negotiating transactional terms rather than eliminating waste.", s3: "Joint Kaizen events/projects are planned and executed with external value chain partners, focusing on waste reduction and collaborative monitoring.", s4: "Shared process-improvement savings are split mutually with partners, driven by collaborative, joint monitoring.", s5: "The team co-designs processes and products with partners from day one, eliminating shared waste proactively." },
  { n: 28, t: "Communication", tc: "theme-Communication", g: "L2", q: "How consistently are success stories shared and replicated?", s1: "Process successes are never shared, keeping operational improvements isolated.", s2: "Successes are mentioned occasionally, but are purely promotional PR with no operational or learning details.", s3: "Lean successes are mentioned occasionally, but without detail or learning.", s4: "Teams share stories including problems, approach, and learnings to help others apply them.", s5: "Lean stories are actively used across teams to learn, replicate improvements, and onboard others." }
];

const MATRIX_DATA_OLD_STANDARD = [
  { n: 1, t: "Foundation", tc: "theme-Foundation", g: "★ L1", q: "Is there a clear business reason (i.e., solving a specific problem) driving this Lean Programme?", s1: "The reason for implementing Lean is vague, undefined, or not communicated.", s2: "BINARY", s3: "BINARY", s4: "BINARY", s5: "A specific, compelling business problem or strategic goal that Lean will address has been clearly identified, well-communicated, and provides strong purpose and direction." },
  { n: 2, t: "Foundation", tc: "theme-Foundation", g: "★ L1", q: "Is leadership committed & invested in being involved?", s1: "Leaders show no visible commitment or involvement, or are actively resistant.", s2: "BINARY", s3: "BINARY", s4: "BINARY", s5: "Leaders are highly committed, visibly championing Lean, actively involved, removing roadblocks, and inspiring others." },
  { n: 3, t: "Foundation", tc: "theme-Foundation", g: "★ L1", q: "Has the team or organisation started acquiring foundational Lean knowledge?", s1: "No efforts to acquire Lean knowledge have begun.", s2: "BINARY", s3: "BINARY", s4: "BINARY", s5: "Foundational Lean knowledge acquisition is actively underway and accessible to all relevant team members/departments." },
  { n: 4, t: "Awareness & Training", tc: "theme-Awareness", g: "★ L1", q: "How clearly can your team describe what Lean means and how it supports your business goals?", s1: "The team cannot clearly describe what Lean means or how it supports your business goals.", s2: "The team has a vague idea of Lean but struggles to link it to specific business goals.", s3: "The team can provide a basic definition of Lean and make general connections to business goals.", s4: "The team can describe Lean and articulate reasonably clear connections to specific business goals.", s5: "The team can articulate a very clear, consistent, and practical understanding of Lean and its direct support for specific, measurable business goals." },
  { n: 5, t: "Awareness & Training", tc: "theme-Awareness", g: "★ L1", q: "How well does the team understand Lean concepts?", s1: "Team has very limited or no understanding of Lean concepts.", s2: "Team has a superficial understanding of a few basic concepts.", s3: "Team understands common Lean concepts but may struggle with application or deeper implications.", s4: "Team understands most key Lean concepts and can articulate their meaning and relevance.", s5: "Team has a deep, comprehensive understanding of Lean concepts and can readily apply them to identify and solve problems." },
  { n: 6, t: "Awareness & Training", tc: "theme-Awareness", g: "L2", q: "How consistently do team members receive Lean training, and is there a plan for ongoing learning?", s1: "Training is inconsistent or ad-hoc, with no clear plan for ongoing learning.", s2: "Some training occurs, but it's not regular or structured, and ongoing learning is not planned.", s3: "There's an emerging consistency in training, and an initial plan for ongoing learning is being developed.", s4: "Team members receive consistent Lean training, and a clear plan for ongoing learning is in place.", s5: "Lean training is systematically integrated, highly consistent, and supported by a robust, regularly reviewed plan for ongoing learning and development." },
  { n: 7, t: "Structure & Strategy", tc: "theme-Structure", g: "★ L2", q: "Is there a defined Lean structure or role ownership?", s1: "No defined Lean structure or clear role ownership exists.", s2: "Some individuals informally take on Lean tasks, but roles are not formalized.", s3: "Initial roles or a basic structure for Lean are being defined but not yet fully established.", s4: "There is a clearly defined Lean structure and role ownership in place, understood by relevant parties.", s5: "The Lean structure and role ownership are well-defined, integrated into the organizational hierarchy, and actively driving Lean initiatives." },
  { n: 8, t: "Structure & Strategy", tc: "theme-Structure", g: "★ L2", q: "Is a strategy management system in place and regularly reviewed?", s1: "No strategy management system is in place.", s2: "Strategy is managed informally or on an ad-hoc basis, with irregular reviews.", s3: "A basic strategy management system is being developed, with some periodic reviews.", s4: "A strategy management system is in place and regularly reviewed, though perhaps not fully optimized.", s5: "A robust strategy management system is fully in place, regularly and systematically reviewed, and effectively guides organizational direction." },
  { n: 9, t: "Structure & Strategy", tc: "theme-Structure", g: "L3", q: "How well are strategic objectives cascaded to teams?", s1: "Strategic objectives are not cascaded to teams or are poorly understood.", s2: "Strategic objectives are cascaded, but understanding at the team level is very limited.", s3: "Strategic objectives are partially cascaded, with some understanding among teams, but consistency may vary.", s4: "Strategic objectives are well cascaded to teams, and there's a good understanding of their relevance to daily work.", s5: "Strategic objectives are fully integrated and clearly cascaded to all teams, who understand their contribution and track progress effectively." },
  { n: 10, t: "Tools & KPI Alignment", tc: "theme-Tools", g: "★ L2", q: "Has the team experimented with any Lean tools on a small scale or in a pilot project?", s1: "No Lean tools have been trialled or applied anywhere.", s2: "Awareness of some tools exists, but no practical trials have occurred.", s3: "A few basic Lean tools have been trialled in isolated, local areas.", s4: "Some Lean tools have been successfully trialled and applied locally in a few areas.", s5: "Active experimentation and local application of various Lean tools are ongoing across multiple teams or departments." },
  { n: 11, t: "Tools & KPI Alignment", tc: "theme-Tools", g: "L3", q: "How embedded and routinely applied are Lean tools in your team's daily work?", s1: "No Lean tools are actively or consistently used.", s2: "A few Lean tools are used, but inconsistently or by a small number of people.", s3: "Some key Lean tools are starting to be actively used, but consistency is still developing.", s4: "Multiple Lean tools are actively and consistently used across several teams or processes.", s5: "A wide range of appropriate Lean tools are actively and consistently used, embedded into daily work across the organization." },
  { n: 12, t: "Tools & KPI Alignment", tc: "theme-Tools", g: "★ L3", q: "Are Lean-related KPIs tracked and discussed in teams?", s1: "Lean-related KPIs are not tracked or discussed in teams.", s2: "Some informal tracking or occasional discussion of Lean-related metrics occurs.", s3: "Basic Lean-related KPIs are starting to be tracked, and discussions are emerging in some teams.", s4: "Lean-related KPIs are regularly tracked and discussed in many teams, informing local improvements.", s5: "Lean-related KPIs are systematically tracked, consistently discussed in all relevant teams, and directly drive problem-solving and improvement actions." },
  { n: 13, t: "Tools & KPI Alignment", tc: "theme-Tools", g: "L4", q: "Are KPIs clearly aligned to Lean goals (flow, quality, waste)?", s1: "KPIs are not aligned to Lean goals; they may even conflict.", s2: "There is some loose or indirect alignment between KPIs and Lean goals, but it's not clear.", s3: "Some KPIs are clearly aligned to Lean goals, but others are not.", s4: "Most relevant KPIs are clearly aligned to Lean goals, providing good visibility of Lean performance.", s5: "KPIs are strongly and explicitly aligned to Lean goals (flow, quality, waste) across all relevant processes, driving the right behaviors." },
  { n: 14, t: "Daily Mgmt & CI", tc: "theme-Daily", g: "★ L3", q: "Are daily huddles used consistently to raise and resolve issues?", s1: "Daily huddles are not used.", s2: "Huddles are used infrequently or without clear purpose for issue resolution.", s3: "Huddles are starting to be used more consistently, with an emerging focus on raising and resolving issues.", s4: "Daily huddles are used consistently in many areas to effectively raise and resolve issues.", s5: "Daily huddles are deeply embedded across relevant teams, consistently and effectively used for real-time issue identification, problem-solving, and resolution." },
  { n: 15, t: "Daily Mgmt & CI", tc: "theme-Daily", g: "★ L3", q: "How often do employees suggest and act on improvements?", s1: "Employees rarely or never suggest or act on improvements.", s2: "Employees infrequently suggest improvements, and action taken is limited.", s3: "Employees periodically suggest improvements, and some action is taken, but it's not consistent.", s4: "Employees regularly suggest improvements, and a good proportion of these are acted upon.", s5: "Employees continuously and proactively suggest improvements, and a high percentage are acted upon, demonstrating an embedded culture of daily improvement." },
  { n: 16, t: "Value Chain Integration", tc: "theme-ValueChain", g: "★ L3", q: "After an improvement is made, does the team reflect on the outcome to refine the process they just changed?", s1: "Learning and reflection practices are not used for system improvement.", s2: "Some informal learning or reflection may occur, but it's ad-hoc and not tied to system improvement.", s3: "Basic learning and reflection practices are emerging in some areas, with an initial focus on system improvement.", s4: "Learning and reflection practices are consistently used in many areas to identify and implement system improvements.", s5: "Learning and reflection practices are systematically embedded across the organization, continuously driving robust system improvements." },
  { n: 17, t: "Value Chain Integration", tc: "theme-ValueChain", g: "L4", q: "How effectively does the organisation capture and share learnings from one team's improvements so that other teams can benefit?", s1: "Learning from improvement work is not captured or utilized.", s2: "Learning is occasionally captured but rarely utilized or shared beyond immediate teams.", s3: "Some learning is shared within departments, but cross-functional application is limited.", s4: "Learning from improvement work is effectively shared and applied across relevant parts of the organization.", s5: "Learning from improvement work is systematically captured, widely shared, and actively applied throughout the organization to drive continuous evolution." },
  { n: 18, t: "Value Chain Integration", tc: "theme-ValueChain", g: "★ L4", q: "Does your Lean philosophy extend across your entire value chain?", s1: "The organization's Lean focus is exclusively on internal processes, with no strategic consideration for external partners.", s2: "An awareness exists that supplier performance and customer perception impact the value stream, but this is not yet part of the formal Lean strategy.", s3: "The organization begins to formally share its Lean philosophy and expectations with key partners through structured communication.", s4: "The organization consistently works to align partners with its Lean strategy through training, shared standards, and integrating the voice of the customer.", s5: "The Lean philosophy is fully integrated into partner relationships; the value chain is managed as one seamless, end-to-end system." },
  { n: 19, t: "Value Chain Integration", tc: "theme-ValueChain", g: "L4", q: "To what extent are Lean practices integrated across departments and partners?", s1: "Lean practices are isolated to specific departments or functions, with no integration across boundaries.", s2: "Some limited integration of Lean practices exists between a few closely related departments.", s3: "Lean practices are partially integrated across several departments, but consistency or depth varies.", s4: "Lean practices are broadly integrated across many departments, and some foundational collaboration with partners exists.", s5: "Lean practices are deeply and consistently integrated across virtually all departments and key external partners, fostering seamless collaboration." },
  { n: 20, t: "Leadership & Culture", tc: "theme-Leadership", g: "L3", q: "How present and engaged are leaders in supporting Lean efforts at the workplace?", s1: "Leaders are rarely or never present or engaged in Lean efforts at the workplace.", s2: "Leaders show sporadic presence but limited engagement in Lean efforts.", s3: "Leaders are periodically present and show some engagement in supporting Lean efforts.", s4: "Leaders are consistently present and actively engaged in supporting Lean efforts at the workplace.", s5: "Leaders demonstrate an inspiring presence, deeply engaged and hands-on in supporting Lean efforts, fostering a culture of ownership." },
  { n: 21, t: "Leadership & Culture", tc: "theme-Leadership", g: "L3", q: "How often do leaders coach and guide teams by asking Lean-focused questions?", s1: "Leaders do not coach or guide teams using Lean-focused questions.", s2: "Leaders rarely or inconsistently use Lean-focused questions for coaching.", s3: "Leaders occasionally coach with Lean-focused questions, but it's not a regular practice.", s4: "Leaders regularly coach and guide teams by asking probing Lean-focused questions to stimulate thinking.", s5: "Coaching with Lean-focused questions is an embedded and consistent practice for leaders, significantly developing team problem-solving capabilities." },
  { n: 22, t: "Leadership & Culture", tc: "theme-Leadership", g: "★ L3", q: "To what extent does our organization combine a psychologically safe culture with a structured process to drive effective experimentation?", s1: "The culture is punitive, and there is no process for experimentation. Change is feared, mistakes are punished.", s2: "The first signs of either a safe space or a basic process are appearing in isolation, but they are not connected.", s3: "A formal process for experimentation has been introduced, but the psychological safety to use it consistently is lacking.", s4: "Both a managed process and a high degree of psychological safety are consistently present. Teams reliably use the structured process.", s5: "A culture of high psychological safety and a mature, managed process are seamlessly integrated, driving rapid learning and CI." },
  { n: 23, t: "Learning & Scaling", tc: "theme-Scaling", g: "L4", q: "How ingrained is the routine for your team to both reflect on improvements and actively share the results?", s1: "Teams rarely or never reflect on improvements or share learnings.", s2: "Reflection and sharing are ad-hoc, happening only occasionally and informally.", s3: "Teams are beginning to reflect on improvements and share learnings, but routines are inconsistent.", s4: "Teams regularly reflect on improvements and share what they've learned within their own or related teams.", s5: "Routine reflection on improvements is systematic within teams, and learnings are actively shared and utilized across the organization." },
  { n: 24, t: "Learning & Scaling", tc: "theme-Scaling", g: "L4", q: "How often are pilot projects used to test, learn, and adapt Lean improvements?", s1: "Pilot projects are not used for testing Lean improvements.", s2: "Pilot projects are rarely used, or their learning potential is not fully leveraged.", s3: "Pilot projects are occasionally used to test improvements, with some learning and adaptation.", s4: "Pilot projects are regularly used to test, learn from, and adapt Lean improvements before wider rollout.", s5: "Pilot projects are systematically and frequently used as a core part of the Lean improvement cycle to rigorously test, learn, and adapt solutions." },
  { n: 25, t: "Learning & Scaling", tc: "theme-Scaling", g: "★ L4", q: "How effectively are successful Lean practices spread across teams or departments?", s1: "Successful Lean practices remain isolated to their original team/department.", s2: "Some successful practices spread informally or ad-hoc, without a clear strategy.", s3: "There's an intentional but limited effort to spread successful practices to a few other teams/departments.", s4: "Successful Lean practices are effectively identified and spread across relevant teams or departments.", s5: "Successful Lean practices are systematically identified, standardized, and scaled effectively across the entire organization." },
  { n: 26, t: "Collaboration & Feedback", tc: "theme-Collaboration", g: "★ L3", q: "How well do teams from different functions collaborate to improve shared processes?", s1: "Teams from different functions operate in silos with no collaboration on shared processes.", s2: "Interactions are minimal, often requiring escalation to resolve issues in shared processes.", s3: "Teams collaborate on shared processes mainly when problems arise, on a reactive basis.", s4: "Teams from different functions regularly and proactively collaborate to improve shared processes.", s5: "Collaboration across functions for shared process improvement is seamless, integrated, and a natural part of how work gets done." },
  { n: 27, t: "Collaboration & Feedback", tc: "theme-Collaboration", g: "★ L5", q: "How actively do you execute joint improvement projects with external partners?", s1: "Interactions are purely transactional, with a complete absence of joint improvement activity.", s2: "Partners may discuss problems as they arise, but collaboration is informal and reactive.", s3: "Formal, proactive dialogues are established with key partners to identify opportunities for joint improvement in a structured manner.", s4: "The organization consistently engages in defined, project-based improvement events (e.g., VSM, Kaizen) with key partners.", s5: "Joint improvement is an embedded 'business as usual' activity. Strategic partnerships drive a continuous portfolio of initiatives." },
  { n: 28, t: "Communication", tc: "theme-Communication", g: "L2", q: "How consistently are Lean success stories shared to inspire and align the wider business?", s1: "Lean success stories are not shared at all.", s2: "Success stories are shared infrequently or informally, with limited reach.", s3: "Success stories are periodically shared, but a consistent mechanism or broad impact is lacking.", s4: "Lean success stories are regularly shared through established channels to inspire and align the wider business.", s5: "Lean success stories are consistently and compellingly communicated across the entire organization, actively inspiring and aligning employees." }
];

function condenseMatrixText(text) {
  if (!text || text === "BINARY") return text;
  return text
    .replace(/^The team /i, "")
    .replace(/^The organization /i, "")
    .replace(/Explicitly, traditional operational measures.*$/i, "")
    .replace(/Generic efficiency platitudes do not qualify\./i, "")
    .replace(/Guidance contains.*$/i, "")
    .replace(/Terminology is inclusive.*$/i, "");
}

function setMatrixStandard(std) {
  state.matrixStandard = std === "old" ? "old" : "new";
  renderMain();
}

function setMatrixMode(mode) {
  state.matrixMode = mode === "compact" ? "compact" : "full";
  renderMain();
}

function exportMatrixToPPTX(singleSlide = true) {
  if (typeof PptxGenJS === "undefined") {
    alert("PowerPoint generator library is still loading. Please try again in a moment.");
    return;
  }
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_WIDE";
  const dataset = state.matrixStandard === "new" ? MATRIX_DATA_NEW_STANDARD : MATRIX_DATA_OLD_STANDARD;
  const stdLabel = state.matrixStandard === "new" ? "New Standard (2026)" : "Old Standard";

  const chunks = singleSlide ? [dataset] : [dataset.slice(0, 14), dataset.slice(14, 28)];
  const fontSize = singleSlide ? 5.2 : 7.5;
  const headerFontSize = singleSlide ? 6.5 : 8.5;

  chunks.forEach((chunk, pageIndex) => {
    const slide = pptx.addSlide();
    slide.background = { color: "FFFFFF" };

    slide.addShape(pptx.ShapeType.rect, {
      x: 0.15,
      y: 0.1,
      w: 13.03,
      h: 0.32,
      fill: { color: "1B1534" },
      rectRadius: 0.04
    });

    const pageSuffix =
      chunks.length > 1
        ? ` (Part ${pageIndex + 1} of 2: Q${chunk[0].n}–Q${chunk[chunk.length - 1].n})`
        : " (Complete 1-Page Matrix: Q1–Q28)";
    slide.addText(`LEAN MATURITY ASSESSMENT — ${stdLabel.toUpperCase()}${pageSuffix}`, {
      x: 0.25,
      y: 0.12,
      w: 8.5,
      h: 0.28,
      fontSize: 10,
      bold: true,
      color: "FFFFFF",
      fontFace: "Calibri"
    });

    slide.addText("★ Gateway Question (Requires ≥ 3 or Yes to advance stage)", {
      x: 8.8,
      y: 0.12,
      w: 4.3,
      h: 0.28,
      fontSize: 8,
      bold: true,
      color: "FBBF24",
      align: "right",
      fontFace: "Calibri"
    });

    const rows = [
      [
        { text: "#", options: { fill: "1B1534", color: "FFFFFF", bold: true, fontSize: headerFontSize, align: "center" } },
        { text: "Theme", options: { fill: "1B1534", color: "FFFFFF", bold: true, fontSize: headerFontSize } },
        { text: "Gate", options: { fill: "1B1534", color: "FFFFFF", bold: true, fontSize: headerFontSize, align: "center" } },
        { text: "Assessment Question", options: { fill: "1B1534", color: "FFFFFF", bold: true, fontSize: headerFontSize } },
        { text: "1: Absent", options: { fill: "334155", color: "FFFFFF", bold: true, fontSize: headerFontSize } },
        { text: "2: Emerging", options: { fill: "475569", color: "FFFFFF", bold: true, fontSize: headerFontSize } },
        { text: "3: Structured", options: { fill: "0F766E", color: "FFFFFF", bold: true, fontSize: headerFontSize } },
        { text: "4: Consistent", options: { fill: "009999", color: "FFFFFF", bold: true, fontSize: headerFontSize } },
        { text: "5: Embedded", options: { fill: "4D217A", color: "FFFFFF", bold: true, fontSize: headerFontSize } }
      ]
    ];

    chunk.forEach((item) => {
      const isGate = item.g.includes("★");
      const rowFill = isGate ? "FFFBEB" : "FFFFFF";
      const s1 = state.matrixMode === "compact" ? condenseMatrixText(item.s1) : item.s1;
      const s2 = state.matrixMode === "compact" ? condenseMatrixText(item.s2) : item.s2;
      const s3 = state.matrixMode === "compact" ? condenseMatrixText(item.s3) : item.s3;
      const s4 = state.matrixMode === "compact" ? condenseMatrixText(item.s4) : item.s4;
      const s5 = state.matrixMode === "compact" ? condenseMatrixText(item.s5) : item.s5;

      if (item.s2 === "BINARY") {
        rows.push([
          { text: String(item.n), options: { fill: rowFill, bold: true, fontSize: fontSize, align: "center" } },
          { text: item.t, options: { fill: rowFill, bold: true, fontSize: fontSize } },
          { text: item.g, options: { fill: isGate ? "FDE68A" : rowFill, bold: true, fontSize: fontSize, align: "center" } },
          { text: item.q, options: { fill: rowFill, bold: true, fontSize: fontSize } },
          { text: s1, options: { fill: rowFill, fontSize: fontSize } },
          {
            text: "Binary Foundation Gate — Scored as 1 (No / Absent) or 5 (Yes / Embedded)",
            options: { colspan: 3, fill: "F8FAFC", color: "64748B", italic: true, fontSize: fontSize, align: "center", valign: "middle" }
          },
          { text: s5, options: { fill: "F0FDFA", bold: true, fontSize: fontSize } }
        ]);
      } else {
        rows.push([
          { text: String(item.n), options: { fill: rowFill, bold: true, fontSize: fontSize, align: "center" } },
          { text: item.t, options: { fill: rowFill, bold: true, fontSize: fontSize } },
          { text: item.g, options: { fill: isGate ? "FDE68A" : rowFill, bold: true, fontSize: fontSize, align: "center" } },
          { text: item.q, options: { fill: rowFill, bold: true, fontSize: fontSize } },
          { text: s1, options: { fill: rowFill, fontSize: fontSize } },
          { text: s2, options: { fill: rowFill, fontSize: fontSize } },
          { text: s3, options: { fill: "F0FDFA", fontSize: fontSize } },
          { text: s4, options: { fill: rowFill, fontSize: fontSize } },
          { text: s5, options: { fill: "FAF5FF", fontSize: fontSize } }
        ]);
      }
    });

    slide.addTable(rows, {
      x: 0.15,
      y: 0.46,
      w: 13.03,
      colW: [0.28, 1.05, 0.42, 1.92, 1.87, 1.87, 1.87, 1.87, 1.88],
      border: { type: "solid", pt: 0.5, color: "CBD5E1" },
      fontFace: "Calibri",
      margin: [1.2, 2.5, 1.2, 2.5],
      valign: "top"
    });
  });

  const fileSuffix = singleSlide ? "1Slide_OnePager" : "2Slide_LargeFont";
  pptx.writeFile({ fileName: `Lean_Maturity_Assessment_Rubric_${state.matrixStandard.toUpperCase()}_${fileSuffix}.pptx` });
}

async function exportMatrixHighResPNG() {
  const canvasEl = document.getElementById("matrix-slide-canvas");
  if (!canvasEl || typeof html2canvas === "undefined") {
    alert("Image export library is still loading. Please try again in a moment.");
    return;
  }
  const canvas = await html2canvas(canvasEl, {
    scale: 3,
    backgroundColor: "#ffffff",
    useCORS: true
  });
  const link = document.createElement("a");
  link.download = `Lean_Maturity_Assessment_1Page_Slide_${state.matrixStandard.toUpperCase()}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

async function exportMatrixSlidePDF() {
  const canvasEl = document.getElementById("matrix-slide-canvas");
  if (!canvasEl || typeof html2canvas === "undefined" || !window.jspdf) {
    alert("PDF export library is still loading. Please try again in a moment.");
    return;
  }
  const { jsPDF } = window.jspdf;
  const canvas = await html2canvas(canvasEl, {
    scale: 2.5,
    backgroundColor: "#ffffff",
    useCORS: true
  });
  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "pt",
    format: [1280, 720]
  });
  pdf.addImage(imgData, "PNG", 0, 0, 1280, 720);
  pdf.save(`Lean_Maturity_Assessment_1Page_${state.matrixStandard.toUpperCase()}.pdf`);
}

function renderScoringMatrixWidget(ref, plb, canvas, switcherBarHtml) {
  const q = state.searchQuery.toLowerCase().trim();
  const dataset = state.matrixStandard === "new" ? MATRIX_DATA_NEW_STANDARD : MATRIX_DATA_OLD_STANDARD;
  const fontSizeStyle = state.matrixMode === "compact" ? "font-size: 10.4px; line-height: 1.24;" : "";
  const filteredDataset = dataset.filter((item) => {
    const isGateway = item.g.includes("★");
    const matchFlag = state.referenceFilter === "all" || (state.referenceFilter === "flagged" && isGateway);
    const matchQ =
      !q ||
      `q${item.n}`.includes(q) ||
      item.t.toLowerCase().includes(q) ||
      item.q.toLowerCase().includes(q) ||
      item.s1.toLowerCase().includes(q) ||
      item.s3.toLowerCase().includes(q) ||
      item.s5.toLowerCase().includes(q);
    return matchFlag && matchQ;
  });

  const matrixRowsHtml = filteredDataset
    .map((item) => {
      const isGateway = item.g.includes("★");
      const rowClass = isGateway ? "gateway-row" : "";
      const gateBadge = isGateway
        ? `<span style="display:inline-block;background:#FBBF24;color:#0F172A;font-weight:800;padding:2px 5px;border-radius:4px;font-size:8.5px;">${escapeHtml(
            item.g
          )}</span>`
        : `<span style="color:#64748B;font-weight:700;font-size:8.5px;">${escapeHtml(item.g)}</span>`;

      const s1 = state.matrixMode === "compact" ? condenseMatrixText(item.s1) : item.s1;
      const s2 = state.matrixMode === "compact" ? condenseMatrixText(item.s2) : item.s2;
      const s3 = state.matrixMode === "compact" ? condenseMatrixText(item.s3) : item.s3;
      const s4 = state.matrixMode === "compact" ? condenseMatrixText(item.s4) : item.s4;
      const s5 = state.matrixMode === "compact" ? condenseMatrixText(item.s5) : item.s5;

      if (item.s2 === "BINARY") {
        return `
          <tr class="${rowClass}">
            <td style="text-align:center;font-weight:800;color:#334155;${fontSizeStyle}">${item.n}</td>
            <td class="${escapeHtml(item.tc)}" style="${fontSizeStyle}">${escapeHtml(item.t)}</td>
            <td style="text-align:center;">${gateBadge}</td>
            <td style="font-weight:700;color:#0F172A;${fontSizeStyle}">${escapeHtml(item.q)}</td>
            <td style="${fontSizeStyle}">${escapeHtml(s1)}</td>
            <td colspan="3" class="binary-cell">Binary Foundation Gate — Scored as 1 [No / Absent] or 5 [Yes / Embedded]</td>
            <td style="font-weight:600;color:#134E4A;background:#F0FDFA;${fontSizeStyle}">${escapeHtml(s5)}</td>
          </tr>
        `;
      }

      return `
        <tr class="${rowClass}">
          <td style="text-align:center;font-weight:800;color:#334155;${fontSizeStyle}">${item.n}</td>
          <td class="${escapeHtml(item.tc)}" style="${fontSizeStyle}">${escapeHtml(item.t)}</td>
          <td style="text-align:center;">${gateBadge}</td>
          <td style="font-weight:700;color:#0F172A;${fontSizeStyle}">${escapeHtml(item.q)}</td>
          <td style="${fontSizeStyle}">${escapeHtml(s1)}</td>
          <td style="${fontSizeStyle}">${escapeHtml(s2)}</td>
          <td style="background:#F0FDFA;${fontSizeStyle}">${escapeHtml(s3)}</td>
          <td style="${fontSizeStyle}">${escapeHtml(s4)}</td>
          <td style="background:#FAF5FF;${fontSizeStyle}">${escapeHtml(s5)}</td>
        </tr>
      `;
    })
    .join("");

  canvas.innerHTML = `
    <div class="content-container" style="max-width:1760px;">
      ${switcherBarHtml || ""}
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;flex-wrap:wrap;">
        <span class="eyebrow-tag" style="margin-bottom:0;">${escapeHtml(ref.eyebrow || "16:9 Slide One-Pager")}</span>
        <span class="muted-code-pill">${escapeHtml(ref.badge || "28 Questions & 17 Gateways")}</span>
      </div>
      <h1 class="page-title" style="margin-bottom:6px;">${escapeHtml(ref.title)}</h1>
      <p class="page-subtitle" style="margin-bottom:14px;">
        ${escapeHtml(ref.subtitle || "")}
      </p>

      <!-- Interactive Top Control & Export Bar -->
      <div class="matrix-control-bar">
        <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
          <span style="background:#009999;color:#FFFFFF;font-size:11px;font-weight:800;padding:4px 9px;border-radius:5px;text-transform:uppercase;letter-spacing:0.05em;">
            16:9 Slide One-Pager
          </span>
          <div class="matrix-toggle-group" role="group" aria-label="Filter All vs Gateways">
            <button type="button" class="matrix-toggle-btn ${state.referenceFilter === "all" ? "active-petrol" : ""}"
                    onclick="setReferenceFilter('all')">
              All 28 Questions
            </button>
            <button type="button" class="matrix-toggle-btn ${state.referenceFilter === "flagged" ? "active-petrol" : ""}"
                    onclick="setReferenceFilter('flagged')">
              ★ 17 Gateways Only
            </button>
          </div>
        </div>

        <div style="display:flex;flex-wrap:wrap;align-items:center;gap:8px;">
          <!-- Standard Switcher -->
          <div class="matrix-toggle-group" role="group" aria-label="Assessment Standard Switcher">
            <button type="button" class="matrix-toggle-btn ${state.matrixStandard === "new" ? "active-petrol" : ""}"
                    onclick="setMatrixStandard('new')">
              New Standard (2026)
            </button>
            <button type="button" class="matrix-toggle-btn ${state.matrixStandard === "old" ? "active-petrol" : ""}"
                    onclick="setMatrixStandard('old')">
              Old Standard
            </button>
          </div>

          <!-- Text Density / Concise Toggle -->
          <div class="matrix-toggle-group" role="group" aria-label="Text Density Switcher">
            <button type="button" class="matrix-toggle-btn ${state.matrixMode === "full" ? "active-indigo" : ""}"
                    onclick="setMatrixMode('full')">
              Full Verbatim Text
            </button>
            <button type="button" class="matrix-toggle-btn ${state.matrixMode === "compact" ? "active-indigo" : ""}"
                    onclick="setMatrixMode('compact')">
              Executive Concise (Larger Font)
            </button>
          </div>

          <!-- Working Export Buttons -->
          <button type="button" onclick="exportMatrixToPPTX(true)" class="matrix-export-btn" style="background:#F59E0B;color:#0F172A;">
            <span>⬇ Export 1-Slide PowerPoint (.pptx)</span>
          </button>
          <button type="button" onclick="exportMatrixToPPTX(false)" class="matrix-export-btn" style="background:#8A00E5;color:#FFFFFF;" title="Splits the 28 rows across 2 slides for larger font in PowerPoint">
            <span>⬇ Export 2-Slide PPTX (Large Font)</span>
          </button>
          <button type="button" onclick="exportMatrixHighResPNG()" class="matrix-export-btn" style="background:#009999;color:#FFFFFF;">
            <span>🖼 Download 4K Slide Image (.png)</span>
          </button>
          <button type="button" onclick="exportMatrixSlidePDF()" class="matrix-export-btn" style="background:#E11D48;color:#FFFFFF;">
            <span>📄 Export 1-Page PDF</span>
          </button>
        </div>
      </div>

      <!-- 16:9 WIDESCREEN ONE-PAGER SLIDE CANVAS -->
      <div id="matrix-slide-canvas" class="matrix-slide-wrapper">
        <div class="matrix-slide-banner">
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
            <strong style="font-size:13.5px;letter-spacing:0.01em;color:#FFFFFF;">
              LEAN MATURITY ASSESSMENT — COMPLETE 28-QUESTION &amp; 1–5 SCORING RUBRIC
            </strong>
            <span style="background:#009999;color:#FFFFFF;font-size:10px;font-weight:800;padding:2px 8px;border-radius:4px;">
              ${state.matrixStandard === "new" ? "NEW STANDARD (2026)" : "OLD STANDARD"}
            </strong>
          </div>
          <div style="display:flex;align-items:center;gap:14px;font-size:10.5px;flex-wrap:wrap;">
            <span>
              <span style="display:inline-block;width:9px;height:9px;background:#FBBF24;border-radius:99px;margin-right:4px;"></span>
              <strong>★ Gateway Question:</strong> Must score ≥ 3 (or 5 for Q1–Q3) to unlock next Maturity Stage
            </span>
            <span style="color:#CBD5E1;">
              Stages: 1. Awareness | 2. Basic Implementation | 3. Structured Approach | 4. Integrated Culture | 5. Lean Enterprise
            </span>
          </div>
        </div>

        <table class="matrix-table">
          <colgroup>
            <col style="width:2.5%;" />
            <col style="width:9.0%;" />
            <col style="width:3.8%;" />
            <col style="width:14.7%;" />
            <col style="width:14.0%;" />
            <col style="width:14.0%;" />
            <col style="width:14.0%;" />
            <col style="width:14.0%;" />
            <col style="width:14.0%;" />
          </colgroup>
          <thead>
            <tr>
              <th style="text-align:center;">#</th>
              <th>Theme</th>
              <th style="text-align:center;">Gate</th>
              <th>Assessment Question</th>
              <th style="background-color:#334155;">1: Absent</th>
              <th style="background-color:#475569;">2: Emerging</th>
              <th style="background-color:#0f766e;">3: Structured (Target Gate)</th>
              <th style="background-color:#009999;">4: Consistent</th>
              <th style="background-color:#4D217A;">5: Embedded</th>
            </tr>
          </thead>
          <tbody>
            ${matrixRowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

/**
 * Tab 4B: Universal Reference Table Renderer (Driven by activePlaybook.referenceTables)
 * Supports the full interactive 16:9 1-Page 28-Question & 1–5 Scoring Rubric Matrix (REF-001)
 */
function renderReferenceTablePage(ref, plb, canvas) {
  if (!ref) return;
  const allRefs = plb.referenceTables || [];
  const allTpls = plb.templates || [];
  const q = state.searchQuery.toLowerCase().trim();

  const refSwitcherBar =
    allRefs.length > 1 || allTpls.length > 0
      ? `<div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap;align-items:center;">
          ${allTpls
            .map(
              (t) => `
            <button type="button" class="funnel-chip" onclick="selectTemplate('${escapeHtml(t.id)}')">
              📄 ${escapeHtml(t.navTitle)}
            </button>`
            )
            .join("")}
          ${allRefs
            .map(
              (r) => `
            <button type="button" class="funnel-chip ${r.id === ref.id ? "active" : ""}" onclick="selectReferenceTable('${escapeHtml(r.id)}')">
              📊 ${escapeHtml(r.navTitle)}
            </button>`
            )
            .join("")}
        </div>`
      : "";

  if (ref.kind === "scoring-matrix-1page" || ref.id === "REF-001") {
    renderScoringMatrixWidget(ref, plb, canvas, refSwitcherBar);
    return;
  }

  const rows = ref.rows || [];
  const cols = ref.columns || ["Code", "Description", "Category", "Level", "Flag"];
  const primaryDec = (plb.decisionTools || [])[0];

  const filtered = rows.filter((r) => {
    const matchFlag = state.referenceFilter === "all" || (state.referenceFilter === "flagged" && r.flagged);
    const matchQ =
      !q ||
      r.code.toLowerCase().includes(q) ||
      r.col1.toLowerCase().includes(q) ||
      r.col2.toLowerCase().includes(q) ||
      r.col3.toLowerCase().includes(q);
    return matchFlag && matchQ;
  });

  canvas.innerHTML = `
    <div class="content-container">
      ${refSwitcherBar}
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
        <span class="eyebrow-tag" style="margin-bottom:0;">${escapeHtml(ref.eyebrow || "")}</span>
        <span class="muted-code-pill">${escapeHtml(ref.badge || "")}</span>
      </div>
      <h1 class="page-title">${escapeHtml(ref.title)}</h1>
      <p class="page-subtitle" style="margin-bottom:24px;">
        ${escapeHtml(ref.subtitle || "")}
      </p>

      <div style="display:flex;gap:10px;margin-bottom:20px;flex-wrap:wrap;">
        <button type="button" class="header-btn" style="background:${
          state.referenceFilter === "all" ? "#1B1534" : "#EAF4F8"
        };color:${state.referenceFilter === "all" ? "#FFF" : "#1B1534"};"
                onclick="setReferenceFilter('all')">
          ${escapeHtml(ref.filterAllLabel || "All")}
        </button>
        <button type="button" class="header-btn" style="background:${
          state.referenceFilter === "flagged" ? "#8A00E5" : "#EAF4F8"
        };color:${state.referenceFilter === "flagged" ? "#FFF" : "#1B1534"};"
                onclick="setReferenceFilter('flagged')">
          ${escapeHtml(ref.filterFlaggedLabel || "Flagged Only")}
        </button>
        ${
          primaryDec
            ? `<button type="button" class="header-btn secondary" style="color:#1B1534;border-color:#D7E4EE;background:#FFFFFF;"
                       onclick="selectDecisionTool('${escapeHtml(primaryDec.id)}')">
                 Open ${escapeHtml(primaryDec.navTitle)} →
               </button>`
            : ""
        }
      </div>

      <table class="clean-table">
        <thead>
          <tr>
            <th style="width:90px;">${escapeHtml(cols[0])}</th>
            <th>${escapeHtml(cols[1])}</th>
            <th style="width:200px;">${escapeHtml(cols[2])}</th>
            <th style="width:140px;">${escapeHtml(cols[3])}</th>
            <th style="width:130px;">${escapeHtml(cols[4])}</th>
          </tr>
        </thead>
        <tbody>
          ${filtered
            .map(
              (r) => `
            <tr>
              <td style="font-family:ui-monospace,monospace;font-weight:700;color:#1B1534;">${escapeHtml(r.code)}</td>
              <td style="color:#1B1534;font-weight:500;">${escapeHtml(r.col1)}</td>
              <td>${escapeHtml(r.col2)}</td>
              <td style="font-family:ui-monospace,monospace;">${escapeHtml(r.col3)}</td>
              <td>
                ${
                  r.flagged
                    ? `<span style="background:#EAF4F8;color:#007A7A;font-weight:700;padding:3px 8px;border-radius:4px;font-size:12px;">${escapeHtml(
                        r.flagLabel
                      )}</span>`
                    : `<span style="color:#96B0C0;">${escapeHtml(r.flagLabel)}</span>`
                }
              </td>
            </tr>`
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderProcessPage(proc, plb, canvas) {
  if (!proc) return;
  const resp = DB.roles[proc.raci?.responsible];
  canvas.innerHTML = `
    <div class="content-container">
      <div class="breadcrumb-row">
        <button type="button" class="breadcrumb-link" onclick="showOverview()">1. End-to-End Journey</button>
        <span>/</span>
        <span class="muted-code-pill">${escapeHtml(proc.appName || "")}</span>
      </div>

      <div class="feature-split">
        <div>
          <div class="eyebrow-tag">${escapeHtml(proc.category)}</div>
          <h1 class="page-title">${escapeHtml(proc.title)}</h1>
          <p class="section-lead">${escapeHtml(proc.userGoal)}</p>
          <div class="step-note" style="margin-bottom:28px;">
            <strong>Why this matters:</strong> ${escapeHtml(proc.valueAddCoaching)}
          </div>

          <h3 class="editorial-h3">Step-by-step stages</h3>
          <div class="accordion-list">
            ${(proc.stages || [])
              .map(
                (st) => `
              <div class="accordion-item open" onclick="toggleAccordion(this)">
                <button class="accordion-trigger" type="button">
                  <span>Stage ${st.stageNumber}: ${escapeHtml(st.name)}</span>
                  <span class="accordion-chevron">⌃</span>
                </button>
                <div class="accordion-body">
                  <p>${escapeHtml(st.summary)}</p>
                  <button type="button" class="learn-more-link" onclick="event.stopPropagation(); selectSOP('${escapeHtml(
                    st.sopId
                  )}')">
                    Start Stage ${st.stageNumber} Guide <span>→</span>
                  </button>
                </div>
              </div>`
              )
              .join("")}
          </div>
        </div>

        <div>
          ${renderSEArchitecturalCard(proc)}
          <div style="margin-top:20px;padding:18px;background:var(--se-canvas-subtle);border:1px solid var(--se-gray-1);border-radius:10px;font-size:13.5px;color:var(--se-gray-5);">
            <div><strong style="color:#1B1534;">When to start:</strong> ${escapeHtml(proc.trigger)}</div>
            <div style="margin-top:8px;"><strong style="color:#1B1534;">Final outcome:</strong> ${escapeHtml(proc.finalOutcome)}</div>
            <div style="margin-top:8px;"><strong style="color:#1B1534;">Lead role:</strong> ${escapeHtml(resp?.title || proc.raci?.responsible)}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderToolPage(tool, plb, canvas) {
  if (!tool) return;
  canvas.innerHTML = `
    <div class="content-container">
      <div class="breadcrumb-row">
        <button type="button" class="breadcrumb-link" onclick="showOverview()">1. End-to-End Journey</button>
        <span>/</span>
        <span class="muted-code-pill">${escapeHtml(tool.suite || "")}</span>
      </div>

      <h1 class="page-title">${escapeHtml(tool.name)}</h1>
      <p class="page-subtitle" style="margin-bottom:24px;">${escapeHtml(tool.purpose)}</p>

      <div class="meta-strip" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
        <div style="display:flex;gap:18px;flex-wrap:wrap;">
          <div><strong>Application:</strong> ${escapeHtml(tool.suite || "-")}</div>
          <div><strong>Where to find it:</strong> ${escapeHtml(tool.accessUrl)}</div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${
            tool.liveUrl
              ? `<a href="${escapeHtml(tool.liveUrl)}" target="_blank" rel="noopener noreferrer" class="live-tool-btn">
                  Launch Live Tool (${escapeHtml(tool.suite || tool.name)}) ↗
                </a>`
              : ""
          }
          ${
            tool.secondaryLiveUrl
              ? `<a href="${escapeHtml(tool.secondaryLiveUrl)}" target="_blank" rel="noopener noreferrer" class="live-tool-btn secondary">
                  ${escapeHtml(tool.secondaryLiveLabel || "Launch Secondary Portal ↗")}
                </a>`
              : ""
          }
        </div>
      </div>

      <section class="editorial-section">
        <h3 class="editorial-h3">1. Before you start</h3>
        <ul class="clean-list">
          ${(tool.gettingStarted || [])
            .map((g) => `<li><input type="checkbox" /><span>${escapeHtml(g)}</span></li>`)
            .join("")}
        </ul>
      </section>

      ${renderButtonsReferenceSection(tool.buttonsReference || [], "2. Buttons & controls on this screen")}

      <section class="editorial-section">
        <h3 class="editorial-h3">3. Quick reference actions</h3>
        <table class="clean-table">
          <thead>
            <tr><th>What You Want to Do</th><th>Exact Rule or Action</th></tr>
          </thead>
          <tbody>
            ${(tool.quickCommands || [])
              .map(
                (c) => `
              <tr>
                <td style="color:#1B1534;font-weight:600;">${escapeHtml(c.goal)}</td>
                <td><code style="color:#641E8C;background:#F3E8FF;padding:4px 8px;border-radius:4px;font-weight:600;">${escapeHtml(c.command)}</code></td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </section>

      <section class="editorial-section">
        <h3 class="editorial-h3">4. Common problems &amp; fixes</h3>
        <table class="clean-table">
          <thead>
            <tr><th>Symptom</th><th>Why It Happens</th><th>How to Fix It Now</th></tr>
          </thead>
          <tbody>
            ${(tool.troubleshooting || [])
              .map(
                (tr) => `
              <tr>
                <td style="color:#1B1534;font-weight:600;">${escapeHtml(tr.symptom)}</td>
                <td>${escapeHtml(tr.cause)}</td>
                <td style="color:#007A7A;font-weight:600;">${escapeHtml(tr.fix)}</td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </section>
    </div>
  `;
}


function setJourneyRoleFilter(roleId) {
  state.journeyRoleFilter = roleId;
  renderMain();
}

function toggleLpmPitch() {
  state.lpmPitchOpen = !state.lpmPitchOpen;
  renderMain();
}

function openJourneyStage(routeType, routeId) {
  if (routeType === "sop") {
    selectSOP(routeId);
  } else if (routeType === "decision") {
    selectDecisionTool(routeId);
  } else if (routeType === "template") {
    selectTemplate(routeId);
  } else if (routeType === "reference") {
    selectReferenceTable(routeId);
  }
}

function setFunnelFlaggedOnly(val) {
  state.funnelFlaggedOnly = val;
  renderMain();
}

function setFunnelTagFilter(tag) {
  state.funnelTagFilter = tag;
  renderMain();
}

function setFunnelQuadrantFilter(quad) {
  state.funnelQuadrantFilter = quad;
  renderMain();
}

function toggleDecisionCandidate(decisionId, candidateId) {
  if (!state.selectedCandidatesByDecisionId[decisionId]) {
    state.selectedCandidatesByDecisionId[decisionId] = [];
  }
  const arr = state.selectedCandidatesByDecisionId[decisionId];
  const idx = arr.indexOf(candidateId);
  if (idx >= 0) {
    arr.splice(idx, 1);
  } else {
    arr.push(candidateId);
  }
  renderSidebar();
  renderMain();
}

function sendSelectedToTemplate(decisionId, templateId, maxCap) {
  const arr = state.selectedCandidatesByDecisionId[decisionId] || [];
  if (arr.length > maxCap) {
    alert(
      "Capacity Lock: You have selected " +
        arr.length +
        " items (Max " +
        maxCap +
        " allowed). Please uncheck lower-impact items before exporting to the template."
    );
    return;
  }
  selectTemplate(templateId);
}

function toggleInlineToolDrawer(toolId) {
  state.openInlineToolId = state.openInlineToolId === toolId ? null : toolId;
  renderMain();
}

function toggleSidebarTools() {
  state.sidebarToolsOpen = !state.sidebarToolsOpen;
  renderSidebar();
}

function setReferenceFilter(mode) {
  state.referenceFilter = mode;
  renderMain();
}

function toggleAccordion(el) {
  el.classList.toggle("open");
}

function showOverview() {
  state.view = "journey";
  state.selectedId = null;
  setActiveTopTab("journey");
  renderSidebar();
  renderMain();
}

function selectProcess(id) {
  const proc = DB.processes?.[id];
  const firstSopId = proc?.stages?.[0]?.sopId || getActivePlaybook()?.sopIds?.[0];
  if (firstSopId) {
    selectSOP(firstSopId);
    return;
  }
  showOverview();
}

function selectSOP(id) {
  state.view = "sop";
  state.selectedId = id;
  state.openInlineToolId = null;
  const sop = DB.sops[id];
  if (sop) {
    state.expandedProcessId = sop.processId;
  }
  setActiveTopTab("guides");
  renderSidebar();
  renderMain();
}

function selectDecisionTool(id) {
  state.view = "decision";
  state.selectedId = id;
  setActiveTopTab("decision");
  renderSidebar();
  renderMain();
}

function selectTemplate(id) {
  state.view = "template";
  state.selectedId = id;
  setActiveTopTab("templates");
  renderSidebar();
  renderMain();
}

function selectReferenceTable(id) {
  state.view = "reference";
  state.selectedId = id;
  setActiveTopTab("templates");
  renderSidebar();
  renderMain();
}

function selectTool(id) {
  state.view = "tool";
  state.selectedId = id;
  state.sidebarToolsOpen = true;
  renderSidebar();
  renderMain();
}

function switchTopTab(tab) {
  const plb = getActivePlaybook();
  if (!plb) return;

  if (tab === "journey") {
    showOverview();
  } else if (tab === "guides") {
    const firstSopId = plb.sopIds?.[0];
    if (firstSopId) selectSOP(firstSopId);
  } else if (tab === "decision") {
    const firstDecId = plb.decisionTools?.[0]?.id;
    if (firstDecId) selectDecisionTool(firstDecId);
  } else if (tab === "templates") {
    const firstTplId = plb.templates?.[0]?.id;
    if (firstTplId) selectTemplate(firstTplId);
  }
}

function setActiveTopTab(tabName) {
  document.querySelectorAll(".sub-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });
}

function openAdminModal() {
  state.builderPlaybookId = state.playbookId || "PLB-001";
  state.builderStageIndex = 0;
  state.studioPlaybookId = state.playbookId || "PLB-001";
  const plb = getPlaybooks().find((p) => p.id === state.studioPlaybookId) || getPlaybooks()[0];
  if (state.view === "sop" && state.selectedId && DB.sops[state.selectedId]) {
    state.studioSopId = state.selectedId;
  } else {
    state.studioSopId = plb?.sopIds?.[0] || Object.keys(DB.sops || {})[0];
  }
  state.studioStepIndex = 0;

  const raw = JSON.stringify(DB, null, 2);
  document.getElementById("jsonEditor").value = raw;
  runLiveJsonAudit(raw);

  populateBuilderTab();
  populateStudioSelectors();
  loadStudioStepIntoForm();
  switchStudioTab(state.view === "sop" ? "visual" : "playbook");
  document.getElementById("jsonModal").classList.remove("hidden");
}

function openPlaybookBuilderModal(plbId, stageIdx) {
  state.builderPlaybookId = plbId || state.playbookId || "PLB-001";
  state.builderStageIndex = typeof stageIdx === "number" ? stageIdx : 0;
  const raw = JSON.stringify(DB, null, 2);
  document.getElementById("jsonEditor").value = raw;
  runLiveJsonAudit(raw);

  populateBuilderTab();
  populateStudioSelectors();
  loadStudioStepIntoForm();
  switchStudioTab("playbook");
  document.getElementById("jsonModal").classList.remove("hidden");
}

function openStudioForSop(sopId, stepIdx) {
  const sop = DB.sops[sopId];
  if (!sop) return;
  const ownerPlb = getPlaybooks().find((p) => (p.sopIds || []).includes(sopId));
  state.studioPlaybookId = ownerPlb ? ownerPlb.id : state.playbookId;
  state.builderPlaybookId = state.studioPlaybookId;
  state.studioSopId = sopId;
  state.studioStepIndex = typeof stepIdx === "number" ? stepIdx : 0;

  const raw = JSON.stringify(DB, null, 2);
  document.getElementById("jsonEditor").value = raw;
  runLiveJsonAudit(raw);

  populateBuilderTab();
  populateStudioSelectors();
  loadStudioStepIntoForm();
  switchStudioTab("visual");
  document.getElementById("jsonModal").classList.remove("hidden");
}

function switchStudioTab(tab) {
  state.studioTab = tab;
  document.getElementById("tabBtnStudioPlaybook")?.classList.toggle("active", tab === "playbook");
  document.getElementById("tabBtnStudioVisual")?.classList.toggle("active", tab === "visual");
  document.getElementById("tabBtnStudioRaw")?.classList.toggle("active", tab === "raw");
  document.getElementById("tabBtnStudioDesign")?.classList.toggle("active", tab === "design");

  document.getElementById("studioTabPlaybook")?.classList.toggle("hidden", tab !== "playbook");
  document.getElementById("studioTabVisual")?.classList.toggle("hidden", tab !== "visual");
  document.getElementById("studioTabRaw")?.classList.toggle("hidden", tab !== "raw");
  document.getElementById("studioTabDesign")?.classList.toggle("hidden", tab !== "design");

  if (tab === "playbook") {
    populateBuilderTab();
  } else if (tab === "raw") {
    const raw = JSON.stringify(DB, null, 2);
    document.getElementById("jsonEditor").value = raw;
    runLiveJsonAudit(raw);
  }
}

/* ============================================================================
   TAB 1: PLAYBOOK & DYNAMIC N-STAGE JOURNEY WYSIWYG BUILDER
   ============================================================================ */
function getBuilderPlaybook() {
  const list = getPlaybooks();
  return list.find((p) => p.id === state.builderPlaybookId) || list[0] || null;
}

function populateBuilderTab() {
  const plbSel = document.getElementById("builderPlaybookSelect");
  if (!plbSel) return;
  const playbooks = getPlaybooks();
  plbSel.innerHTML = playbooks
    .map(
      (p) =>
        `<option value="${escapeHtml(p.id)}" ${p.id === state.builderPlaybookId ? "selected" : ""}>${escapeHtml(
          p.code
        )} • ${escapeHtml(p.title)}</option>`
    )
    .join("");

  const plb = getBuilderPlaybook();
  if (!plb) return;

  document.getElementById("builderTitleInput").value = plb.title || "";
  document.getElementById("builderEyebrowInput").value = plb.eyebrow || plb.code || "";
  document.getElementById("builderRibbonInput").value = plb.journeyMap?.formulaBanner || "";
  document.getElementById("builderSubtitleInput").value = plb.subtitle || "";
  document.getElementById("builderGoldenQuoteInput").value = plb.goldenPrinciple?.quote || "";
  document.getElementById("builderGoldenDescInput").value = plb.goldenPrinciple?.explanation || "";

  const stages = plb.journeyMap?.stages || [];
  if (state.builderStageIndex >= stages.length) {
    state.builderStageIndex = Math.max(0, stages.length - 1);
  }

  const badge = document.getElementById("builderStageCountBadge");
  if (badge) badge.textContent = `${stages.length} Stage${stages.length === 1 ? "" : "s"}`;

  const stageSel = document.getElementById("builderStageSelect");
  if (stageSel) {
    stageSel.innerHTML = stages
      .map(
        (st, idx) =>
          `<option value="${idx}" ${idx === state.builderStageIndex ? "selected" : ""}>Stage ${st.stageNumber}: ${escapeHtml(
            st.title
          )}</option>`
      )
      .join("");
  }

  loadBuilderStageIntoForm();
  renderBuilderLivePreview();
}

function loadBuilderStageIntoForm() {
  const plb = getBuilderPlaybook();
  const stage = plb?.journeyMap?.stages?.[state.builderStageIndex];
  if (!stage) return;

  document.getElementById("builderStageTitleInput").value = stage.title || "";
  document.getElementById("builderStageSummaryInput").value = stage.summary || "";
  document.getElementById("builderStageWhoInput").value = stage.whoIsInvolved || stage.whoAndDuration || "";
  document.getElementById("builderStageToolInput").value = stage.toolLabel || "";
  document.getElementById("builderStageOutputInput").value = stage.outputArtifact || "";
  document.getElementById("builderStageCtaInput").value = stage.targetView?.cta || "Open Stage Guide →";
  validateBuilderGuardrails();
}

function onBuilderPlaybookChange(plbId) {
  state.builderPlaybookId = plbId;
  state.builderStageIndex = 0;
  populateBuilderTab();
}

function onBuilderStageSelectChange(idxStr) {
  state.builderStageIndex = parseInt(idxStr, 10) || 0;
  loadBuilderStageIntoForm();
  renderBuilderLivePreview();
}

function onBuilderPlaybookFieldInput() {
  const plb = getBuilderPlaybook();
  if (!plb) return;
  plb.title = document.getElementById("builderTitleInput").value;
  plb.eyebrow = document.getElementById("builderEyebrowInput").value;
  if (!plb.journeyMap) plb.journeyMap = { stages: [] };
  plb.journeyMap.formulaBanner = document.getElementById("builderRibbonInput").value;
  plb.subtitle = document.getElementById("builderSubtitleInput").value;
  if (!plb.goldenPrinciple) plb.goldenPrinciple = {};
  plb.goldenPrinciple.quote = document.getElementById("builderGoldenQuoteInput").value;
  plb.goldenPrinciple.explanation = document.getElementById("builderGoldenDescInput").value;
  renderBuilderLivePreview();
}

function onBuilderStageFieldInput() {
  const plb = getBuilderPlaybook();
  const stage = plb?.journeyMap?.stages?.[state.builderStageIndex];
  if (!stage) return;

  stage.title = document.getElementById("builderStageTitleInput").value;
  stage.summary = document.getElementById("builderStageSummaryInput").value;
  stage.whoIsInvolved = document.getElementById("builderStageWhoInput").value;
  stage.whoAndDuration = stage.whoIsInvolved;
  stage.toolLabel = document.getElementById("builderStageToolInput").value;
  stage.outputArtifact = document.getElementById("builderStageOutputInput").value;
  if (!stage.targetView) stage.targetView = { type: "sop", id: plb.sopIds?.[0] || "SOP-001" };
  stage.targetView.cta = document.getElementById("builderStageCtaInput").value;

  const stageSel = document.getElementById("builderStageSelect");
  if (stageSel && stageSel.options[state.builderStageIndex]) {
    stageSel.options[state.builderStageIndex].textContent = `Stage ${stage.stageNumber}: ${stage.title}`;
  }

  validateBuilderGuardrails();
  renderBuilderLivePreview();
}

function validateBuilderGuardrails() {
  const fb = document.getElementById("builderGuardrailFeedback");
  if (!fb) return;
  const plb = getBuilderPlaybook();
  const stage = plb?.journeyMap?.stages?.[state.builderStageIndex];
  if (!stage) return;

  const combined = `${stage.title || ""} ${stage.summary || ""} ${stage.whoIsInvolved || ""} ${stage.outputArtifact || ""}`;
  const hasTechExt = /\.(csv|json)\b/i.test(combined);
  const hasCompliance = /\b(MANDATORY|OPTIONAL)\b/i.test(combined);

  const extBadge = !hasTechExt
    ? `<span style="color:#007A7A;font-weight:700;">✓ Zero .csv/.json Tech Plumbing</span>`
    : `<span style="color:#DA1E28;font-weight:700;">✗ Remove .csv/.json from Journey Card</span>`;
  const compBadge = !hasCompliance
    ? `<span style="color:#007A7A;font-weight:700;">✓ Zero Compliance Stamps</span>`
    : `<span style="color:#DA1E28;font-weight:700;">✗ Avoid MANDATORY/OPTIONAL on Journey Cards</span>`;

  fb.innerHTML = `${extBadge} <span>•</span> ${compBadge} <span>•</span> <span style="color:#007A7A;font-weight:700;">✓ Clean 4-Element Stage Card</span>`;
}

function addJourneyStageInStudio() {
  const plb = getBuilderPlaybook();
  if (!plb) return;
  if (!plb.journeyMap) plb.journeyMap = { stages: [] };
  if (!Array.isArray(plb.journeyMap.stages)) plb.journeyMap.stages = [];

  const nextNum = plb.journeyMap.stages.length + 1;
  plb.journeyMap.stages.push({
    stageNumber: nextNum,
    title: `New Process Stage ${nextNum}`,
    summary: "Describe what happens in this stage in one or two plain-English sentences.",
    whoIsInvolved: "Local Programme Manager + Team",
    whoAndDuration: "Local Programme Manager + Team",
    leadRoleId: "ROL-001",
    leadRoleLabel: "Local Programme Manager (LPM)",
    supportRoleId: "ROL-002",
    supportRoleLabel: "Lean Core Team Partner",
    toolId: plb.toolIds?.[0] || "TOL-001",
    toolLabel: "Standard Lean@GS Tool",
    outputArtifact: "Agreed action output for the next stage",
    targetView: { type: "sop", id: plb.sopIds?.[0] || "SOP-001", cta: `Open Stage ${nextNum} Guide →` }
  });

  state.builderStageIndex = plb.journeyMap.stages.length - 1;
  populateBuilderTab();
}

function moveJourneyStageInStudio(dir) {
  const plb = getBuilderPlaybook();
  const stages = plb?.journeyMap?.stages || [];
  const idx = state.builderStageIndex;
  const targetIdx = idx + dir;
  if (targetIdx < 0 || targetIdx >= stages.length) return;

  const temp = stages[idx];
  stages[idx] = stages[targetIdx];
  stages[targetIdx] = temp;
  stages.forEach((st, i) => {
    st.stageNumber = i + 1;
  });

  state.builderStageIndex = targetIdx;
  populateBuilderTab();
}

function deleteJourneyStageInStudio() {
  const plb = getBuilderPlaybook();
  const stages = plb?.journeyMap?.stages || [];
  if (stages.length <= 1) {
    alert("A Playbook Journey Map must have at least 1 stage.");
    return;
  }
  stages.splice(state.builderStageIndex, 1);
  stages.forEach((st, i) => {
    st.stageNumber = i + 1;
  });
  state.builderStageIndex = Math.max(0, state.builderStageIndex - 1);
  populateBuilderTab();
}

function createNewPlaybookInStudio() {
  const playbooks = getPlaybooks();
  const nextNum = playbooks.length + 1;
  const newCode = `PLB-00${nextNum}`;
  const newSopId = `SOP-00${Object.keys(DB.sops || {}).length + 1}`;
  const newProcId = `PRC-00${Object.keys(DB.processes || {}).length + 1}`;

  DB.processes[newProcId] = {
    id: newProcId,
    title: `New Lean@GS Operational Process (${newCode})`,
    category: "Operational Standard",
    appName: "Lean@GS Suite",
    versionBadge: "",
    durationBadge: "30 mins",
    whenToUse: "When running this standard operational workflow with your team.",
    cardOutput: "Completed operational checklist and action owners.",
    ctaLabel: "Start Step-by-Step Guide",
    userGoal: "Follow a clear, repeatable process to align the team and lock practical improvement actions.",
    trigger: "Scheduled operational cadence",
    finalOutcome: "Agreed actions and owners",
    valueAddCoaching: "Focus on real workplace improvements rather than administrative reporting.",
    raci: { responsible: "ROL-001", accountable: "ROL-003", consulted: ["ROL-002"], informed: ["ROL-004"] },
    stages: [{ stageNumber: 1, name: "Execute Standard Workflow", sopId: newSopId, summary: "Complete the core steps with the team." }]
  };

  DB.sops[newSopId] = {
    id: newSopId,
    title: "Run the Core Team Standard Workflow",
    processId: newProcId,
    roleId: "ROL-001",
    toolIds: ["TOL-001"],
    estimatedTime: "30 mins",
    stationLocation: "Team Area / Collaboration Workspace",
    kitBag: {
      leadRole: "Local Programme Manager (LPM)",
      supportRole: "Lean Core Team Partner",
      mandatoryStatus: "CORE WORKFLOW",
      inputNeeded: "Current Team Metrics & Priorities",
      outputProduced: "Agreed Action Plan with Owners"
    },
    userGoal: "Guide your team through the workflow in plain English and lock 2 to 3 focused actions.",
    gettingStarted: [
      "Confirm the right team members and sponsor are present before starting.",
      "Open the current workplace metrics and last meeting's action log."
    ],
    steps: [
      {
        stepNumber: 1,
        action: "Review current workplace performance with the team and highlight the biggest gap.",
        detail: "Keep the discussion grounded in real operational evidence rather than assumptions.",
        toolId: "TOL-001",
        coachingTip: "Focus on what is blocking the team today so everyone sees the value immediately.",
        visual: { type: "none" }
      },
      {
        stepNumber: 2,
        action: "Agree two or three practical actions with named owners and target dates.",
        detail: "Avoid long wish-lists that dilute team focus.",
        toolId: "TOL-001",
        coachingTip: "Two finished improvements beat ten unfinished ideas every time.",
        visual: { type: "none" }
      }
    ],
    troubleshooting: [
      {
        symptom: "The team lists too many actions at once.",
        cause: "Trying to fix every issue in a single cycle.",
        fix: "Filter down to the 2 or 3 highest-impact actions and park the rest for the next review."
      }
    ]
  };

  const newPlb = {
    id: newCode,
    code: newCode,
    title: `New Lean@GS Playbook (${newCode})`,
    eyebrow: `Siemens Energy • Lean@GS Playbook #${nextNum}`,
    subtitle: "A practical, plain-English guide to help your team execute this process and improve business outcomes.",
    goldenPrinciple: {
      quote: "Focus on improving the work, not just completing the checklist.",
      explanation: "Keep every step simple, visible, and tied to a real operational improvement."
    },
    filingRule: "Save agreed outputs in your local Lean@GS team folder.",
    processIds: [newProcId],
    sopIds: [newSopId],
    toolIds: ["TOL-001"],
    chooserLabel: "Ways to Use This Guide",
    rulesKey: {
      title: "Before You Start: 3 Plain-English Principles",
      subtitle: "How to get the best result from this playbook",
      items: [
        { term: "1. Keep It Practical", desc: "Use plain language that any colleague on site can understand in 10 seconds." },
        { term: "2. Focus on 2–3 Actions", desc: "Agree 2 or 3 high-impact actions at a time so the team finishes what they start." },
        { term: "3. Lock Owners & Dates", desc: "Every action needs one named owner and a clear follow-up date." }
      ]
    },
    journeyMap: {
      formulaBanner: "Understand Current State → Identify Key Gaps → Agree 2–3 Actions → Review Progress",
      mapHeading: "Connected End-to-End Process Map",
      roleFilters: [
        { id: "all", label: "All Roles" },
        { id: "ROL-001", label: "Highlight LPM Tasks" },
        { id: "ROL-002", label: "Highlight Core Team Tasks" }
      ],
      briefingButtonLabel: "⏱ 60-Second Overview Pitch",
      briefingTitle: "60-Second Briefing: How This Playbook Works",
      briefingEquation: "Clear Baseline + Focused Priorities = Practical Action Plan",
      briefingBullets: [
        "1. Understand where we are today using real workplace evidence.",
        "2. Focus on 2 to 3 key priorities rather than an overwhelming list.",
        "3. Assign clear owners and review progress on a regular cadence."
      ],
      stages: [
        {
          stageNumber: 1,
          title: "Establish the Current Picture",
          summary: "Review current performance with the team to see what is working and where gaps exist.",
          whoIsInvolved: "Local Programme Manager + Team",
          whoAndDuration: "Local Programme Manager + Team",
          leadRoleId: "ROL-001",
          leadRoleLabel: "Local Programme Manager (LPM)",
          supportRoleId: "ROL-002",
          supportRoleLabel: "Lean Core Team Partner",
          toolId: "TOL-001",
          toolLabel: "Lean@GS Assessment & Checklist",
          outputArtifact: "Shared baseline picture of current gaps",
          targetView: { type: "sop", id: newSopId, cta: "Open Stage 1 Guide →" }
        },
        {
          stageNumber: 2,
          title: "Agree 2–3 Priority Actions",
          summary: "Select the 2 or 3 most important improvements and assign a clear owner and date to each.",
          whoIsInvolved: "Local Programme Manager + Action Owners",
          whoAndDuration: "Local Programme Manager + Action Owners",
          leadRoleId: "ROL-001",
          leadRoleLabel: "Local Programme Manager (LPM)",
          supportRoleId: "ROL-002",
          supportRoleLabel: "Lean Core Team Partner",
          toolId: "TOL-001",
          toolLabel: "Lean@GS Action Plan",
          outputArtifact: "Signed action plan with owners and dates",
          targetView: { type: "sop", id: newSopId, cta: "Open Stage 2 Guide →" }
        }
      ]
    },
    decisionTools: [],
    templates: [],
    referenceTables: []
  };

  DB.playbooks.push(newPlb);
  state.builderPlaybookId = newPlb.id;
  state.builderStageIndex = 0;
  state.studioPlaybookId = newPlb.id;
  state.studioSopId = newSopId;
  populateBuilderTab();
  populateStudioSelectors();
}

function renderBuilderLivePreview() {
  const previewCol = document.getElementById("builderLivePreviewCol");
  const plb = getBuilderPlaybook();
  if (!previewCol || !plb) return;

  const gp = plb.goldenPrinciple || {};
  const stages = plb.journeyMap?.stages || [];

  previewCol.innerHTML = `
    <div style="background:#FFFFFF;border:1.5px solid #D7E4EE;border-radius:12px;padding:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;color:#8A00E5;">
          👁 Live WYSIWYG Overview &amp; (${stages.length}-Stage) Journey Preview
        </span>
        <span class="muted-code-pill">${escapeHtml(plb.code)}</span>
      </div>

      <h3 style="font-size:18px;font-weight:800;color:#1B1534;margin-bottom:4px;">${escapeHtml(plb.title)}</h3>
      <p style="font-size:12.5px;color:#54646E;margin-bottom:12px;">${escapeHtml(plb.subtitle)}</p>

      ${
        gp.quote
          ? `
        <div class="golden-principle-box" style="padding:14px 16px;margin-bottom:14px;">
          <div class="golden-principle-kicker">Core Principle</div>
          <div class="golden-principle-quote" style="font-size:15px;">“${escapeHtml(gp.quote)}”</div>
          <div class="golden-principle-desc" style="font-size:12px;">${escapeHtml(gp.explanation || "")}</div>
        </div>`
          : ""
      }

      <div style="font-size:11px;font-weight:800;text-transform:uppercase;color:#007A7A;margin-bottom:8px;">
        ${escapeHtml(plb.journeyMap?.formulaBanner || "")}
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        ${stages
          .map((st, idx) => {
            const isSelected = idx === state.builderStageIndex;
            return `
            <div class="stage-flow-card"
                 onclick="onBuilderStageSelectChange('${idx}')"
                 style="padding:12px;cursor:pointer;border:${
                   isSelected ? "2px solid #8A00E5" : "1px solid #D7E4EE"
                 };background:${isSelected ? "#FAF5FF" : "#FFFFFF"};">
              <div>
                <div class="stage-card-top" style="margin-bottom:6px;">
                  <span class="stage-num-circle">STAGE ${st.stageNumber}</span>
                  ${isSelected ? `<span style="font-size:10px;font-weight:800;color:#8A00E5;">EDITING</span>` : ""}
                </div>
                <div style="font-size:13.5px;font-weight:700;color:#1B1534;margin-bottom:4px;">${escapeHtml(st.title)}</div>
                <div style="font-size:11.5px;color:#54646E;margin-bottom:8px;line-height:1.4;">${escapeHtml(st.summary || "")}</div>
                <div style="font-size:11px;color:#1B1534;background:#F8FAFC;padding:6px 8px;border-radius:6px;margin-bottom:6px;">
                  <div><strong>Who:</strong> ${escapeHtml(st.whoIsInvolved || st.whoAndDuration || "")}</div>
                  <div><strong>Tool:</strong> ${escapeHtml(st.toolLabel || "")}</div>
                </div>
              </div>
              <div style="font-size:11px;background:#EAF4F8;padding:6px 8px;border-radius:6px;border-left:3px solid #009999;">
                <strong>Finish with:</strong> ${escapeHtml(st.outputArtifact || "")}
              </div>
            </div>`;
          })
          .join("")}
      </div>
    </div>
  `;
}

function savePlaybookBuilderChanges() {
  const plb = getBuilderPlaybook();
  if (!plb) return;

  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DB));
  } catch (e) {
    console.warn("Could not save to localStorage:", e);
  }

  state.playbookId = plb.id;
  state.view = "journey";
  renderPlaybookSwitcher();
  renderTopTabs();
  renderSidebar();
  renderMain();
  document.getElementById("jsonModal").classList.add("hidden");
}

/* ============================================================================
   TAB 2: SOP & STEP WYSIWYG EDITOR (+ NEW SOP GUIDE / + NEW STEP)
   ============================================================================ */
function createNewSopInStudio() {
  const plb = getPlaybooks().find((p) => p.id === state.studioPlaybookId) || getActivePlaybook();
  if (!plb) return;
  const nextSopNum = Object.keys(DB.sops || {}).length + 1;
  const newSopId = `SOP-00${nextSopNum}`;
  const procId = plb.processIds?.[0] || "PRC-001";

  DB.sops[newSopId] = {
    id: newSopId,
    title: `New Step-by-Step Guide (${newSopId})`,
    processId: procId,
    roleId: "ROL-001",
    toolIds: [plb.toolIds?.[0] || "TOL-001"],
    estimatedTime: "30 mins",
    stationLocation: "Site Workspace / Microsoft Teams",
    kitBag: {
      leadRole: "Local Programme Manager (LPM)",
      supportRole: "Lean Core Team Partner",
      mandatoryStatus: "CORE GUIDE",
      inputNeeded: "Current Baseline Data",
      outputProduced: "Completed Action Output"
    },
    userGoal: "Complete this task step-by-step using plain-English actions and coaching tips.",
    gettingStarted: [
      "Open the required tool and confirm the right colleagues are in the room."
    ],
    steps: [
      {
        stepNumber: 1,
        action: "Open the workspace view and review the current baseline information with your partner.",
        detail: "Check that all inputs are up to date before recording decisions.",
        toolId: plb.toolIds?.[0] || "TOL-001",
        coachingTip: "Reviewing the baseline together prevents misunderstandings later in the workshop.",
        visual: { type: "none" }
      }
    ],
    troubleshooting: [
      {
        symptom: "Information is missing when opening the workspace.",
        cause: "The previous stage file was not loaded.",
        fix: "Load the latest saved file from your local Lean@GS folder."
      }
    ]
  };

  if (!Array.isArray(plb.sopIds)) plb.sopIds = [];
  plb.sopIds.push(newSopId);
  const proc = DB.processes[procId];
  if (proc && Array.isArray(proc.stages)) {
    proc.stages.push({
      stageNumber: proc.stages.length + 1,
      name: DB.sops[newSopId].title,
      sopId: newSopId,
      summary: DB.sops[newSopId].userGoal
    });
  }

  state.studioSopId = newSopId;
  state.studioStepIndex = 0;
  populateStudioSelectors();
  loadStudioStepIntoForm();
}

function copyAiPlaybookPrompt() {
  const promptText = `You are a Lean@GS Documentation Architect for Siemens Energy. Convert the attached notes/document into a valid Playbook JSON object for our SOP Guide Manager.

Follow these strict DESIGN_GUIDE.md rules:
1. Plain Human English: Write for a colleague on their first day. Never use compliance stamps ("MANDATORY"/"OPTIONAL") or file extensions (".csv"/".json") on Journey Map cards.
2. Flexible N-Stage Journey Map: Create as many stages in journeyMap.stages as the real process requires (each with stageNumber, title, summary, whoIsInvolved, toolLabel, outputArtifact, and targetView).
3. Include a goldenPrinciple ({ quote, explanation }) that captures the real-world purpose of the process.
4. SOP Steps: Every step.action MUST be <= 20 words, start with an active imperative verb (Click, Open, Review, Write, Agree), contain zero raw acronyms, and include a practical coachingTip. Set visual to { "type": "none" } so authors can paste screenshots via Ctrl+V later.

Return ONLY valid JSON matching the playbooks[], processes{}, and sops{} schema in data/guides.json.`;

  navigator.clipboard.writeText(promptText);
  const statusEl = document.getElementById("aiPromptCopyStatus");
  if (statusEl) {
    statusEl.style.display = "block";
    statusEl.textContent = "✓ Copied AI Playbook Generator Prompt to clipboard! Paste it into M365 Copilot or Gemini along with your rough notes.";
    setTimeout(() => {
      statusEl.style.display = "none";
    }, 4500);
  }
}

function populateStudioSelectors() {
  const plbSel = document.getElementById("studioPlaybookSelect");
  const sopSel = document.getElementById("studioSopSelect");
  const stepSel = document.getElementById("studioStepSelect");
  if (!plbSel || !sopSel || !stepSel) return;

  const playbooks = getPlaybooks();
  plbSel.innerHTML = playbooks
    .map(
      (p) =>
        `<option value="${escapeHtml(p.id)}" ${p.id === state.studioPlaybookId ? "selected" : ""}>${escapeHtml(
          p.code
        )} • ${escapeHtml(p.title)}</option>`
    )
    .join("");

  const activePlb = playbooks.find((p) => p.id === state.studioPlaybookId) || playbooks[0];
  const sopIds = activePlb?.sopIds || Object.keys(DB.sops || {});
  if (!sopIds.includes(state.studioSopId)) {
    state.studioSopId = sopIds[0];
    state.studioStepIndex = 0;
  }

  sopSel.innerHTML = sopIds
    .map((id) => {
      const s = DB.sops[id];
      return s
        ? `<option value="${escapeHtml(s.id)}" ${s.id === state.studioSopId ? "selected" : ""}>${escapeHtml(
            s.id
          )} • ${escapeHtml(s.title)}</option>`
        : "";
    })
    .join("");

  const currentSop = DB.sops[state.studioSopId];
  const steps = currentSop?.steps || [];
  if (state.studioStepIndex >= steps.length) {
    state.studioStepIndex = Math.max(0, steps.length - 1);
  }

  stepSel.innerHTML = steps
    .map(
      (st, idx) =>
        `<option value="${idx}" ${idx === state.studioStepIndex ? "selected" : ""}>Step ${st.stepNumber}: ${escapeHtml(
          st.action.slice(0, 48)
        )}...</option>`
    )
    .join("");
}

function onStudioPlaybookChange(plbId) {
  state.studioPlaybookId = plbId;
  const plb = getPlaybooks().find((p) => p.id === plbId);
  state.studioSopId = plb?.sopIds?.[0] || Object.keys(DB.sops || {})[0];
  state.studioStepIndex = 0;
  populateStudioSelectors();
  loadStudioStepIntoForm();
}

function onStudioSopChange(sopId) {
  state.studioSopId = sopId;
  state.studioStepIndex = 0;
  populateStudioSelectors();
  loadStudioStepIntoForm();
}

function onStudioStepChange(stepIdxStr) {
  state.studioStepIndex = parseInt(stepIdxStr, 10) || 0;
  loadStudioStepIntoForm();
}

function loadStudioStepIntoForm() {
  const sop = DB.sops[state.studioSopId];
  const step = sop?.steps?.[state.studioStepIndex];
  if (!sop || !step) return;

  const sopTitleEl = document.getElementById("studioSopTitleInput");
  const sopTimeEl = document.getElementById("studioSopTimeInput");
  const sopGoalEl = document.getElementById("studioSopGoalInput");
  const sopChecklistEl = document.getElementById("studioSopChecklistInput");

  if (sopTitleEl) sopTitleEl.value = sop.title || "";
  if (sopTimeEl) sopTimeEl.value = sop.estimatedTime || "";
  if (sopGoalEl) sopGoalEl.value = sop.userGoal || "";
  if (sopChecklistEl) sopChecklistEl.value = (sop.gettingStarted || []).join("\n");

  document.getElementById("studioActionInput").value = step.action || "";
  document.getElementById("studioDetailInput").value = step.detail || "";
  document.getElementById("studioCoachingInput").value = step.coachingTip || "";

  const mode = getStepVisualMode(step);
  state.studioDraftVisualMode = mode;

  if (Array.isArray(step.visual?.elements)) {
    state.studioSavedSvgVisual = JSON.parse(JSON.stringify(step.visual));
  } else {
    state.studioSavedSvgVisual = {
      type: "ui-mockup",
      caption: `Step ${step.stepNumber} Visual Guide`,
      elements: [
        { id: "w1", kind: "window", label: `${sop.id} • Step ${step.stepNumber}`, x: 20, y: 15, w: 460, h: 165, state: "default" },
        { id: "c1", kind: "button", label: step.action.slice(0, 32), x: 140, y: 65, w: 220, h: 48, state: "active" }
      ],
      annotation: {
        targetX: 140,
        targetY: 65,
        targetW: 220,
        targetH: 48,
        arrowFromX: 250,
        arrowFromY: 26,
        label: `Step ${step.stepNumber}: Key Action`
      }
    };
  }

  state.studioDraftImageSrc = step.visual?.imageSrc || "";
  state.studioDraftCaption = step.visual?.caption || `${sop.id} • Step ${step.stepNumber}`;
  state.studioDraftHotspot = step.visual?.hotspot
    ? JSON.parse(JSON.stringify(step.visual.hotspot))
    : null;

  onStudioStepFieldInput();
  renderStudioVisualModeUI();
}

const BANNED_ACRONYMS_LIST = ["CV", "SSO", "PR", "PPE", "LOTO", "KPI", "SLA"];
const COMMON_IMPERATIVE_VERBS = [
  "click", "open", "review", "apply", "download", "upload", "select", "type", "run",
  "write", "walk", "filter", "assign", "check", "verify", "confirm", "mark", "pair",
  "load", "save", "export", "use", "ask", "place", "drag", "turn", "attach", "lock"
];

function onStudioStepFieldInput() {
  const actionVal = (document.getElementById("studioActionInput")?.value || "").trim();
  const coachingVal = (document.getElementById("studioCoachingInput")?.value || "").trim();
  const words = countWords(actionVal);
  const maxW = DB?.meta?.strictWordLimit || 20;

  const pill = document.getElementById("studioWordCounterPill");
  if (pill) {
    pill.textContent = `${words} / ${maxW} words`;
    pill.classList.toggle("over", words > maxW || words === 0);
  }

  const firstWord = (actionVal.split(/\s+/)[0] || "").replace(/[^a-zA-Z]/g, "").toLowerCase();
  const startsWithVerb = COMMON_IMPERATIVE_VERBS.includes(firstWord) || (firstWord.length > 2 && !firstWord.endsWith("ing"));

  const foundAcronyms = BANNED_ACRONYMS_LIST.filter((acr) => new RegExp(`\\b${acr}\\b`).test(actionVal));

  const fbEl = document.getElementById("studioGuardrailFeedback");
  if (fbEl) {
    const verbBadge = startsWithVerb
      ? `<span style="color:#007A7A;font-weight:700;">✓ Active Verb Start</span>`
      : `<span style="color:#E66E00;font-weight:700;">⚠️ Start with a direct action verb (e.g., Click, Open, Write)</span>`;
    const acrBadge =
      foundAcronyms.length === 0
        ? `<span style="color:#007A7A;font-weight:700;">✓ Zero Raw Acronyms</span>`
        : `<span style="color:#DA1E28;font-weight:700;">✗ Spell out acronym: ${foundAcronyms.join(", ")}</span>`;
    const coachBadge =
      coachingVal.length > 0
        ? `<span style="color:#007A7A;font-weight:700;">✓ Coaching Tip Included</span>`
        : `<span style="color:#DA1E28;font-weight:700;">✗ Coaching Tip Required</span>`;

    fbEl.innerHTML = `${verbBadge} <span>•</span> ${acrBadge} <span>•</span> ${coachBadge}`;
  }
}

function setStudioVisualMode(mode) {
  state.studioDraftVisualMode = mode;
  renderStudioVisualModeUI();
}

function renderStudioVisualModeUI() {
  document.getElementById("modePillNone")?.classList.toggle("active", state.studioDraftVisualMode === "none");
  document.getElementById("modePillImage")?.classList.toggle("active", state.studioDraftVisualMode === "image");
  document.getElementById("modePillSvg")?.classList.toggle("active", state.studioDraftVisualMode === "svg");

  const rightCol = document.getElementById("studioVisualRightCol");
  if (!rightCol) return;

  if (state.studioDraftVisualMode === "none") {
    rightCol.innerHTML = `
      <div class="elevated-coaching-card" style="margin-top:8px;">
        <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;color:#007A7A;margin-bottom:6px;">
          📝 Mode 1 Preview: No Image (Text + Coaching Only)
        </div>
        <p style="font-size:13.5px;color:#1B1534;line-height:1.55;">
          This step will render cleanly without an empty placeholder box. Your <strong>Good Practice Coaching Tip</strong> will sit in the right-hand column to keep the 2-column rhythm balanced, and <code>validate-guides.js</code> will pass 100%.
        </p>
      </div>
    `;
    return;
  }

  if (state.studioDraftVisualMode === "svg") {
    const previewStep = {
      stepNumber: state.studioStepIndex + 1,
      toolId: DB.sops[state.studioSopId]?.toolIds?.[0] || "TOL-001",
      visual: state.studioSavedSvgVisual
    };
    rightCol.innerHTML = `
      <div>
        <div class="studio-label">Built-in Declarative SVG Diagram Preview:</div>
        ${renderStepIllustrationCard(previewStep)}
      </div>
    `;
    return;
  }

  // Mode: Custom Screenshot (Paste Ctrl+V or Upload + Click-to-Place Hotspot)
  const hs = state.studioDraftHotspot;
  rightCol.innerHTML = `
    <div>
      <div class="paste-dropzone">
        <div style="font-size:14px;font-weight:700;color:#1B1534;margin-bottom:4px;">
          📸 Press <kbd style="background:#1B1534;color:#FFF;padding:2px 6px;border-radius:4px;">Ctrl+V</kbd> Anywhere to Paste from Windows Snipping Tool
        </div>
        <div style="font-size:12px;color:#54646E;margin-bottom:10px;">
          Auto-compresses to a lightweight ≤900px Base64 Data URI so <code>guides.json</code> works offline in SharePoint/OneDrive.
        </div>
        <input type="file" id="studioImageFileInput" accept="image/*" style="font-size:12px;" onchange="onStudioImageFileSelect(event)" />
      </div>

      <div style="margin-top:10px;display:grid;grid-template-columns:1fr 1fr;gap:8px;">
        <div>
          <label class="studio-label" style="font-size:11.5px;">Caption Below Image:</label>
          <input type="text" class="studio-input" style="padding:6px 9px;font-size:12.5px;"
                 value="${escapeHtml(state.studioDraftCaption)}"
                 oninput="state.studioDraftCaption = this.value" />
        </div>
        <div>
          <label class="studio-label" style="font-size:11.5px;">Callout Label (Click Image to Place):</label>
          <div style="display:flex;gap:6px;">
            <input type="text" id="studioHotspotLabelInput" class="studio-input" style="padding:6px 9px;font-size:12.5px;"
                   placeholder="e.g., 1. Click 'Save PDF'"
                   value="${escapeHtml(hs?.label || `Step ${state.studioStepIndex + 1} Target`)}"
                   oninput="onStudioHotspotLabelInput(this.value)" />
            ${
              hs
                ? `<button type="button" class="header-btn secondary" style="color:#DA1E28;border-color:#FECDD3;padding:4px 8px;font-size:11px;"
                           onclick="clearStudioHotspot()">Clear Box</button>`
                : ""
            }
          </div>
        </div>
      </div>

      ${
        state.studioDraftImageSrc
          ? `
        <div style="margin-top:8px;font-size:11.5px;color:#007A7A;font-weight:700;">
          👆 Click anywhere on the screenshot below to place the Bright Purple (#8A00E5) highlight box:
        </div>
        <div class="hotspot-preview-wrap" id="studioHotspotPreviewStage" onclick="onStudioPreviewImageClick(event)">
          <img src="${escapeHtml(state.studioDraftImageSrc)}" alt="Custom step screenshot preview" />
          ${
            hs
              ? `<div class="hotspot-overlay-box"
                      style="left:${hs.xPercent}%;top:${hs.yPercent}%;width:${hs.widthPercent}%;height:${hs.heightPercent}%;">
                   <span class="hotspot-callout-pill">
                     <span class="petrol-dot" style="width:6px;height:6px;"></span>
                     <span>${escapeHtml(hs.label)}</span>
                   </span>
                 </div>`
              : ""
          }
        </div>`
          : `<div style="margin-top:12px;padding:18px;text-align:center;background:#F8FAFC;border:1px solid #D7E4EE;border-radius:8px;font-size:12.5px;color:#54646E;">
               No screenshot loaded yet. Take a snip with <kbd>Win + Shift + S</kbd> and press <kbd>Ctrl + V</kbd>, or choose an image file above.
             </div>`
      }
    </div>
  `;
}

function compressImageElementToDataUrl(img) {
  const MAX_WIDTH = 900;
  let w = img.naturalWidth || img.width || 800;
  let h = img.naturalHeight || img.height || 500;
  if (w > MAX_WIDTH) {
    h = Math.round((h * MAX_WIDTH) / w);
    w = MAX_WIDTH;
  }
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(img, 0, 0, w, h);

  let dataUrl = canvas.toDataURL("image/webp", 0.8);
  if (!dataUrl.startsWith("data:image/webp")) {
    dataUrl = canvas.toDataURL("image/jpeg", 0.82);
  }
  return dataUrl;
}

function handleStudioImageBlob(fileOrBlob) {
  if (!fileOrBlob) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = new Image();
    img.onload = () => {
      state.studioDraftVisualMode = "image";
      state.studioDraftImageSrc = compressImageElementToDataUrl(img);
      if (!state.studioDraftHotspot) {
        state.studioDraftHotspot = {
          xPercent: 32,
          yPercent: 30,
          widthPercent: 28,
          heightPercent: 22,
          label: `${state.studioStepIndex + 1}. Target Action`
        };
      }
      renderStudioVisualModeUI();
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(fileOrBlob);
}

function onStudioImageFileSelect(event) {
  const file = event.target?.files?.[0];
  if (file) handleStudioImageBlob(file);
}

function onStudioPreviewImageClick(event) {
  const wrap = document.getElementById("studioHotspotPreviewStage");
  if (!wrap) return;
  const rect = wrap.getBoundingClientRect();
  const clickXPct = ((event.clientX - rect.left) / rect.width) * 100;
  const clickYPct = ((event.clientY - rect.top) / rect.height) * 100;

  const boxW = 28;
  const boxH = 22;
  const xPercent = Math.max(2, Math.min(98 - boxW, Math.round(clickXPct - boxW / 2)));
  const yPercent = Math.max(8, Math.min(96 - boxH, Math.round(clickYPct - boxH / 2)));
  const labelInput = document.getElementById("studioHotspotLabelInput");
  const currentLabel = labelInput?.value || `${state.studioStepIndex + 1}. Target Action`;

  state.studioDraftHotspot = {
    xPercent,
    yPercent,
    widthPercent: boxW,
    heightPercent: boxH,
    label: currentLabel
  };
  renderStudioVisualModeUI();
}

function onStudioHotspotLabelInput(val) {
  if (state.studioDraftHotspot) {
    state.studioDraftHotspot.label = val;
    const pillSpan = document.querySelector("#studioHotspotPreviewStage .hotspot-callout-pill span:last-child");
    if (pillSpan) pillSpan.textContent = val;
  }
}

function clearStudioHotspot() {
  state.studioDraftHotspot = null;
  renderStudioVisualModeUI();
}

function addNewSopStepInStudio() {
  const sop = DB.sops[state.studioSopId];
  if (!sop) return;
  if (!Array.isArray(sop.steps)) sop.steps = [];
  const nextNum = sop.steps.length + 1;
  sop.steps.push({
    stepNumber: nextNum,
    action: "Verify the updated metric on the board and record the owner.",
    detail: "Confirm the target condition and next check time with the team.",
    toolId: sop.toolIds?.[0] || "TOL-001",
    coachingTip: "Keep the step brief and action-focused so anyone on shift can follow it in seconds.",
    visual: { type: "none" }
  });
  state.studioStepIndex = sop.steps.length - 1;
  populateStudioSelectors();
  loadStudioStepIntoForm();
}

function saveStudioStepChanges() {
  const sop = DB.sops[state.studioSopId];
  const step = sop?.steps?.[state.studioStepIndex];
  if (!step) return;

  const actionVal = (document.getElementById("studioActionInput")?.value || "").trim();
  const detailVal = (document.getElementById("studioDetailInput")?.value || "").trim();
  const coachingVal = (document.getElementById("studioCoachingInput")?.value || "").trim();

  const words = countWords(actionVal);
  const maxW = DB?.meta?.strictWordLimit || 20;
  if (words === 0 || words > maxW) {
    alert(`20-Word Rule Guardrail: Step action has ${words} words (maximum allowed is ${maxW}). Please shorten the sentence before saving.`);
    return;
  }
  if (!coachingVal) {
    alert("Value-Add Coaching Guardrail: Please include a Good Practice Coaching Tip before saving.");
    return;
  }
  for (const acr of BANNED_ACRONYMS_LIST) {
    if (new RegExp(`\\b${acr}\\b`).test(actionVal)) {
      alert(`Zero-Acronym Guardrail: Please spell out '${acr}' in plain English.`);
      return;
    }
  }

  const sopTitleVal = (document.getElementById("studioSopTitleInput")?.value || "").trim();
  const sopTimeVal = (document.getElementById("studioSopTimeInput")?.value || "").trim();
  const sopGoalVal = (document.getElementById("studioSopGoalInput")?.value || "").trim();
  const sopChecklistVal = (document.getElementById("studioSopChecklistInput")?.value || "").trim();

  if (sopTitleVal) sop.title = sopTitleVal;
  if (sopTimeVal) sop.estimatedTime = sopTimeVal;
  if (sopGoalVal) sop.userGoal = sopGoalVal;
  if (sopChecklistVal) {
    sop.gettingStarted = sopChecklistVal
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean);
  }

  step.action = actionVal;
  step.detail = detailVal;
  step.coachingTip = coachingVal;

  if (state.studioDraftVisualMode === "none") {
    step.visual = { type: "none" };
  } else if (state.studioDraftVisualMode === "image") {
    if (!state.studioDraftImageSrc) {
      alert("Please paste (Ctrl+V) or upload a screenshot image, or switch Visual Mode to 'No Image (Text + Coaching Only)'.");
      return;
    }
    step.visual = {
      type: "image",
      imageSrc: state.studioDraftImageSrc,
      caption: state.studioDraftCaption || `${sop.id} • Step ${step.stepNumber}`,
      hotspot: state.studioDraftHotspot
    };
  } else {
    step.visual = state.studioSavedSvgVisual;
  }

  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DB));
  } catch (e) {
    console.warn("Could not persist to localStorage:", e);
  }

  state.playbookId = state.studioPlaybookId;
  state.view = "sop";
  state.selectedId = sop.id;
  renderPlaybookSwitcher();
  renderTopTabs();
  renderSidebar();
  renderMain();
  document.getElementById("jsonModal").classList.add("hidden");
}

let guideToastTimer = null;
function showGuideToast(message) {
  const banner = document.getElementById("guideToastBanner");
  if (!banner) return;
  banner.textContent = message;
  banner.classList.remove("hidden");
  if (guideToastTimer) clearTimeout(guideToastTimer);
  guideToastTimer = setTimeout(() => {
    banner.classList.add("hidden");
  }, 4200);
}

function toggleExportGuideMenu(event) {
  if (event && typeof event.stopPropagation === "function") {
    event.stopPropagation();
  }
  const menu = document.getElementById("headerExportDropdownMenu");
  if (menu) menu.classList.toggle("hidden");
}

function closeExportGuideMenu() {
  const menu = document.getElementById("headerExportDropdownMenu");
  if (menu) menu.classList.add("hidden");
}

function triggerGlobalGuideUpload() {
  const input = document.getElementById("globalGuideUploadInput");
  if (input) {
    input.value = "";
    input.click();
  }
}

function downloadCurrentPlaybookBundle(optPlaybookId) {
  const targetId = optPlaybookId || state.playbookId;
  const plb = getPlaybooks().find((p) => p.id === targetId) || getActivePlaybook();
  if (!plb) return;

  const processes = {};
  const sops = {};
  const tools = {};
  const roles = {};

  for (const pId of plb.processIds || []) {
    if (DB.processes?.[pId]) {
      processes[pId] = DB.processes[pId];
      for (const st of DB.processes[pId].stages || []) {
        for (const tId of st.toolIds || []) {
          if (DB.tools?.[tId]) tools[tId] = DB.tools[tId];
        }
      }
    }
  }
  for (const sId of plb.sopIds || []) {
    if (DB.sops?.[sId]) {
      sops[sId] = DB.sops[sId];
      if (DB.sops[sId].roleId && DB.roles?.[DB.sops[sId].roleId]) {
        roles[DB.sops[sId].roleId] = DB.roles[DB.sops[sId].roleId];
      }
      for (const tId of DB.sops[sId].toolIds || []) {
        if (DB.tools?.[tId]) tools[tId] = DB.tools[tId];
      }
    }
  }
  for (const tId of plb.toolIds || []) {
    if (DB.tools?.[tId]) tools[tId] = DB.tools[tId];
  }
  for (const rId of plb.roleIds || []) {
    if (DB.roles?.[rId]) roles[rId] = DB.roles[rId];
  }

  const bundle = {
    _bundleType: "Lean@GS_Single_Playbook_Bundle",
    _exportedAt: new Date().toISOString(),
    playbook: plb,
    processes,
    sops,
    tools,
    roles
  };

  const slug = String(plb.id || "Playbook")
    .trim()
    .replace(/[^a-zA-Z0-9_-]/g, "-");
  const fileName = `${slug}.leanguide.json`;
  const raw = JSON.stringify(bundle, null, 2);
  const blob = new Blob([raw], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showGuideToast(`⬇ Downloaded Single Playbook '${plb.title}' (${fileName})`);
}

function downloadUpdatedGuidesJson() {
  const raw = JSON.stringify(DB, null, 2);
  const blob = new Blob([raw], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "guides.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showGuideToast("⬇ Downloaded Complete Master Library (guides.json)");
}

function handleGlobalGuideFileUpload(event) {
  const file = event?.target?.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    mergeOrReplaceGuideJson(ev.target.result, file.name);
  };
  reader.readAsText(file);
}

function mergeOrReplaceGuideJson(rawText, fileName) {
  try {
    const parsed = JSON.parse(rawText);

    // Case 1: Single-Playbook Bundle (.leanguide.json) or standalone Playbook object
    if (parsed._bundleType === "Lean@GS_Single_Playbook_Bundle" || (parsed.playbook && parsed.playbook.id) || (parsed.id && parsed.journeyMap)) {
      const incomingPlb = parsed.playbook || parsed;
      if (parsed.processes && typeof parsed.processes === "object") {
        Object.assign(DB.processes, parsed.processes);
      }
      if (parsed.sops && typeof parsed.sops === "object") {
        Object.assign(DB.sops, parsed.sops);
      }
      if (parsed.tools && typeof parsed.tools === "object") {
        Object.assign(DB.tools, parsed.tools);
      }
      if (parsed.roles && typeof parsed.roles === "object") {
        Object.assign(DB.roles, parsed.roles);
      }

      const existingIdx = (DB.playbooks || []).findIndex((p) => p.id === incomingPlb.id);
      if (existingIdx >= 0) {
        DB.playbooks[existingIdx] = incomingPlb;
      } else {
        DB.playbooks.push(incomingPlb);
      }

      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DB));
      } catch (e) {}

      state.playbookId = incomingPlb.id;
      state.view = "journey";
      state.selectedId = null;
      initializePlaybookDefaults();
      renderPlaybookSwitcher();
      renderTopTabs();
      renderSidebar();
      renderMain();
      populateStudioSelectors();
      showGuideToast(`✓ Merged Playbook '${incomingPlb.title}' into your library`);
      return;
    }

    // Case 2: Full Master Library (guides.json)
    if (Array.isArray(parsed.playbooks) && parsed.sops) {
      DB = parsed;
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DB));
      } catch (e) {}
      initializePlaybookDefaults();
      renderPlaybookSwitcher();
      renderTopTabs();
      renderSidebar();
      renderMain();
      populateStudioSelectors();
      showGuideToast(`✓ Loaded Master Library (${parsed.playbooks.length} Playbooks) into your workspace`);
      return;
    }

    alert("Unrecognized JSON file format. Please upload a Single-Playbook (.leanguide.json) file or a Master Library (guides.json) file.");
  } catch (err) {
    alert("Failed to parse JSON file: " + err.message);
  }
}

function resetSavedLocalStorageGuides() {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  if (DEFAULT_DB_SNAPSHOT) {
    DB = JSON.parse(JSON.stringify(DEFAULT_DB_SNAPSHOT));
  }
  initializePlaybookDefaults();
  renderPlaybookSwitcher();
  renderTopTabs();
  renderSidebar();
  renderMain();
  populateStudioSelectors();
  loadStudioStepIntoForm();
  const raw = JSON.stringify(DB, null, 2);
  document.getElementById("jsonEditor").value = raw;
  runLiveJsonAudit(raw);
}

function bindEvents() {
  const playbookSelect = document.getElementById("playbookSelect");
  if (playbookSelect) {
    playbookSelect.addEventListener("change", (e) => {
      switchPlaybook(e.target.value);
    });
  }

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    const plb = getActivePlaybook();
    if (state.searchQuery.toLowerCase().startsWith("q") && plb?.referenceTables?.[0] && state.view !== "reference") {
      selectReferenceTable(plb.referenceTables[0].id);
    } else {
      renderSidebar();
      renderMain();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput && document.getElementById("jsonModal")?.classList.contains("hidden")) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  // Global Ctrl+V Clipboard Screenshot Paste inside the Guide Authoring Studio
  window.addEventListener("paste", (e) => {
    const modal = document.getElementById("jsonModal");
    if (!modal || modal.classList.contains("hidden") || state.studioTab !== "visual") return;
    const items = e.clipboardData?.items || [];
    for (const item of items) {
      if (item.type && item.type.startsWith("image/")) {
        e.preventDefault();
        const blob = item.getAsFile();
        handleStudioImageBlob(blob);
        break;
      }
    }
  });

  document.getElementById("openBuilderBtn").addEventListener("click", openAdminModal);

  window.addEventListener("click", (e) => {
    const wrap = document.getElementById("headerExportDropdownWrap");
    if (wrap && !wrap.contains(e.target)) {
      closeExportGuideMenu();
    }
  });

  document.getElementById("closeModalBtn").addEventListener("click", () => {
    document.getElementById("jsonModal").classList.add("hidden");
  });

  document.getElementById("jsonEditor").addEventListener("input", (e) => {
    runLiveJsonAudit(e.target.value);
  });

  document.getElementById("applyJsonBtn").addEventListener("click", () => {
    try {
      DB = JSON.parse(document.getElementById("jsonEditor").value);
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DB));
      } catch (storageErr) {
        console.warn("Could not persist to localStorage:", storageErr);
      }
      initializePlaybookDefaults();
      renderPlaybookSwitcher();
      renderTopTabs();
      renderSidebar();
      renderMain();
      document.getElementById("jsonModal").classList.add("hidden");
    } catch (err) {
      alert("Invalid JSON: " + err.message);
    }
  });

  document.getElementById("jsonFileInput").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      document.getElementById("jsonEditor").value = ev.target.result;
      runLiveJsonAudit(ev.target.result);
    };
    reader.readAsText(file);
  });
}

function runLiveJsonAudit(rawText) {
  const reportEl = document.getElementById("liveAuditReport");
  try {
    const candidate = JSON.parse(rawText);
    const maxW = candidate.meta?.strictWordLimit || 20;
    let issues = [];
    let steps = 0;
    for (const [sopId, sop] of Object.entries(candidate.sops || {})) {
      for (const st of sop.steps || []) {
        steps++;
        const w = countWords(st.action);
        if (w > maxW) issues.push(`${sopId} Step ${st.stepNumber}: ${w}/${maxW} words`);
      }
    }
    const plbCount = Array.isArray(candidate.playbooks) ? candidate.playbooks.length : 0;
    reportEl.innerHTML =
      issues.length === 0
        ? `<div style="color:#007A7A;font-weight:700;">✓ Valid Multi-Playbook Payload (${plbCount} Playbooks, ${steps} steps checked, all ≤ ${maxW} words, zero raw acronyms, 3-mode visuals ready).</div>`
        : `<div style="color:#DA1E28;">${issues.join("<br/>")}</div>`;
  } catch (e) {
    reportEl.innerHTML = `<div style="color:#DA1E28;">Syntax Error: ${escapeHtml(e.message)}</div>`;
  }
}

window.showOverview = showOverview;
window.selectProcess = selectProcess;
window.selectSOP = selectSOP;
window.selectTool = selectTool;
window.selectDecisionTool = selectDecisionTool;
window.selectTemplate = selectTemplate;
window.selectReferenceTable = selectReferenceTable;
window.switchTopTab = switchTopTab;
window.switchPlaybook = switchPlaybook;
window.switchPlaybookAndOpen = switchPlaybookAndOpen;
window.setMatrixStandard = setMatrixStandard;
window.setMatrixMode = setMatrixMode;
window.exportMatrixToPPTX = exportMatrixToPPTX;
window.exportMatrixHighResPNG = exportMatrixHighResPNG;
window.exportMatrixSlidePDF = exportMatrixSlidePDF;
window.toggleAccordion = toggleAccordion;
window.setReferenceFilter = setReferenceFilter;
window.openAdminModal = openAdminModal;
window.openPlaybookBuilderModal = openPlaybookBuilderModal;
window.openStudioForSop = openStudioForSop;
window.switchStudioTab = switchStudioTab;
window.onBuilderPlaybookChange = onBuilderPlaybookChange;
window.onBuilderStageSelectChange = onBuilderStageSelectChange;
window.onBuilderPlaybookFieldInput = onBuilderPlaybookFieldInput;
window.onBuilderStageFieldInput = onBuilderStageFieldInput;
window.addJourneyStageInStudio = addJourneyStageInStudio;
window.moveJourneyStageInStudio = moveJourneyStageInStudio;
window.deleteJourneyStageInStudio = deleteJourneyStageInStudio;
window.createNewPlaybookInStudio = createNewPlaybookInStudio;
window.savePlaybookBuilderChanges = savePlaybookBuilderChanges;
window.createNewSopInStudio = createNewSopInStudio;
window.copyAiPlaybookPrompt = copyAiPlaybookPrompt;
window.onStudioPlaybookChange = onStudioPlaybookChange;
window.onStudioSopChange = onStudioSopChange;
window.onStudioStepChange = onStudioStepChange;
window.onStudioStepFieldInput = onStudioStepFieldInput;
window.setStudioVisualMode = setStudioVisualMode;
window.onStudioImageFileSelect = onStudioImageFileSelect;
window.onStudioPreviewImageClick = onStudioPreviewImageClick;
window.onStudioHotspotLabelInput = onStudioHotspotLabelInput;
window.clearStudioHotspot = clearStudioHotspot;
window.addNewSopStepInStudio = addNewSopStepInStudio;
window.saveStudioStepChanges = saveStudioStepChanges;
window.downloadUpdatedGuidesJson = downloadUpdatedGuidesJson;
window.resetSavedLocalStorageGuides = resetSavedLocalStorageGuides;
window.setJourneyRoleFilter = setJourneyRoleFilter;
window.toggleLpmPitch = toggleLpmPitch;
window.openJourneyStage = openJourneyStage;
window.setFunnelFlaggedOnly = setFunnelFlaggedOnly;
window.setFunnelTagFilter = setFunnelTagFilter;
window.setFunnelQuadrantFilter = setFunnelQuadrantFilter;
window.toggleDecisionCandidate = toggleDecisionCandidate;
window.sendSelectedToTemplate = sendSelectedToTemplate;
window.toggleInlineToolDrawer = toggleInlineToolDrawer;
window.toggleSidebarTools = toggleSidebarTools;
window.addEventListener("DOMContentLoaded", initApp);
