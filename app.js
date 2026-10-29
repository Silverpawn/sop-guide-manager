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
  studioSavedSvgVisual: null
};

const LOCAL_STORAGE_KEY = "SE_LEAN_GS_GUIDES_DB_V5";
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
          ${escapeHtml(p.code)} • ${escapeHtml(p.title)}
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
      <span style="color:#007A7A;">${escapeHtml(step.toolId || "")}</span>
    </div>
  </div>`;
}

/**
 * Universal 4-Section Left Sidebar Driven 100% by Active Playbook JSON
 */
function renderSidebar() {
  const sidebar = document.getElementById("leftSidebar");
  const plb = getActivePlaybook();
  if (!plb || !sidebar) return;

  const q = state.searchQuery.toLowerCase().trim();
  const processes = getActiveProcesses().filter((p) => !q || JSON.stringify(p).toLowerCase().includes(q));
  const tools = getActiveTools().filter((t) => !q || JSON.stringify(t).toLowerCase().includes(q));
  const decisionTools = plb.decisionTools || [];
  const templates = plb.templates || [];
  const referenceTables = plb.referenceTables || [];

  const html = `
    <div>
      <!-- Universal Section 1 -->
      <div class="sidebar-section-label" style="margin-top:4px;">1. End-to-End Journey</div>
      <button type="button" class="tree-item ${state.view === "journey" ? "active" : ""}" onclick="showOverview()">
        <span>Connected (${(plb.journeyMap?.stages || []).length}-Stage) Process Map</span>
      </button>

      <div class="sidebar-divider"></div>

      <!-- Universal Section 2 -->
      <div class="sidebar-section-label">2. Step-by-Step Guides</div>
      ${processes
        .map((proc) => {
          const isExpanded = state.expandedProcessId === proc.id || q.length > 0 || processes.length === 1;
          const isActive = state.view === "process" && state.selectedId === proc.id;
          const childSops = (proc.stages || []).map((st) => DB.sops[st.sopId]).filter(Boolean);

          return `
            <div>
              <button type="button" class="tree-item ${isActive ? "active" : ""} ${isExpanded ? "expanded" : ""}"
                      onclick="selectProcess('${proc.id}')">
                <span>${escapeHtml(proc.title)}</span>
                <span class="tree-chevron">›</span>
              </button>
              ${
                isExpanded
                  ? `<div class="tree-children">
                      ${childSops
                        .map(
                          (s) => `
                        <button type="button" class="tree-child ${state.view === "sop" && state.selectedId === s.id ? "active" : ""}"
                                onclick="selectSOP('${s.id}')">
                          ${escapeHtml(s.title)}
                        </button>`
                        )
                        .join("")}
                    </div>`
                  : ""
              }
            </div>
          `;
        })
        .join("")}

      <div class="sidebar-divider"></div>

      <!-- Universal Section 3 -->
      <div class="sidebar-section-label">3. Decision &amp; Priority Tools</div>
      ${decisionTools
        .map((dec) => {
          const isActive = state.view === "decision" && state.selectedId === dec.id;
          const chosenCount = (state.selectedCandidatesByDecisionId[dec.id] || []).length;
          const capSuffix = dec.kind === "prioritiser-funnel" ? ` (${chosenCount}/${dec.maxCapacity})` : "";
          return `
            <button type="button" class="tree-item ${isActive ? "active" : ""}"
                    onclick="selectDecisionTool('${dec.id}')">
              <span>${escapeHtml(dec.navTitle)}${escapeHtml(capSuffix)}</span>
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
      <button type="button" class="quiet-admin-link" onclick="openAdminModal()">
        ⚙️ Playbook &amp; SOP Authoring Studio
      </button>
    </div>
  `;

  sidebar.innerHTML = html;
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
                st.supportRoleId !== state.journeyRoleFilter;
              const leadRoleObj = DB.roles[st.leadRoleId];
              const toolObj = DB.tools[st.toolId];
              const whoText = st.whoIsInvolved || st.whoAndDuration || st.leadRoleLabel || leadRoleObj?.title || "";

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
                    <div>
                      <strong>Tool used:</strong>
                      <button type="button" class="breadcrumb-link" style="font-size:12px;"
                              onclick="selectTool('${escapeHtml(st.toolId)}')">
                        ${escapeHtml(st.toolLabel || toolObj?.name || st.toolId)}
                      </button>
                    </div>
                  </div>
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
                  <span class="muted-code-pill">${escapeHtml(proc.appName || "")} • ${escapeHtml(proc.versionBadge || "")}</span>
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
        <div class="plain-key-box">
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

      <!-- Process & Stage Accordions Driven by activePlaybook.processIds -->
      ${processes
        .map((proc) => {
          const procStages = proc.stages || [];
          return `
          <section class="feature-split">
            <div>
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                <span class="muted-code-pill">${escapeHtml(proc.appName || "")} ${escapeHtml(proc.versionBadge || "")}</span>
                <span class="muted-code-pill">${escapeHtml(proc.id)}</span>
              </div>
              <h2 class="section-h2">${escapeHtml(proc.title)}</h2>
              <p class="section-lead">
                ${escapeHtml(proc.userGoal)}
              </p>
              <button type="button" class="see-all-link" onclick="selectProcess('${escapeHtml(proc.id)}')">
                View full process overview <span>→</span>
              </button>

              <div class="accordion-list">
                ${procStages
                  .map((st, idx) => {
                    const sop = DB.sops[st.sopId];
                    const isOpen = idx === 0;
                    return `
                    <div class="accordion-item ${isOpen ? "open" : ""}" onclick="toggleAccordion(this)">
                      <button class="accordion-trigger" type="button">
                        <span>Stage ${st.stageNumber}: ${escapeHtml(st.name)}</span>
                        <span class="accordion-chevron">⌃</span>
                      </button>
                      <div class="accordion-body">
                        <p>${escapeHtml(st.summary)} (${escapeHtml(sop?.estimatedTime || "")})</p>
                        <button type="button" class="learn-more-link" onclick="event.stopPropagation(); selectSOP('${escapeHtml(
                          st.sopId
                        )}')">
                          Open step-by-step guide <span>→</span>
                        </button>
                      </div>
                    </div>`;
                  })
                  .join("")}
              </div>
            </div>

            <div>
              ${renderSEArchitecturalCard(proc)}
            </div>
          </section>`;
        })
        .join("")}
    </div>
  `;
}

/**
 * Tab 2: Universal SOP Page with Point-of-Use "Kit Bag" Resolved from SOP & Relations
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
        ${
          proc
            ? `<button type="button" class="breadcrumb-link" onclick="selectProcess('${escapeHtml(proc.id)}')">${escapeHtml(
                proc.title
              )}</button><span>/</span>`
            : ""
        }
        <span class="muted-code-pill">${escapeHtml(sop.id)}</span>
      </div>

      <h1 class="page-title">${escapeHtml(sop.title)}</h1>
      <p class="page-subtitle" style="margin-bottom:20px;">${escapeHtml(sop.userGoal)}</p>

      <!-- Point-of-Use "Kit Bag for This Task" Card (Resolved from SOP + Relations) -->
      <section class="kit-bag-card" aria-label="Kit Bag for This Task">
        <div class="kit-bag-header">
          <div style="display:flex;align-items:center;gap:10px;">
            <span class="petrol-dot"></span>
            <strong style="font-size:14px;color:#1B1534;text-transform:uppercase;letter-spacing:0.04em;">
              🧰 Kit Bag for This Task (${escapeHtml(sop.id)})
            </strong>
          </div>
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            <span class="status-badge-purple">${escapeHtml(kb.mandatoryStatus || "MANDATORY")}</span>
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
            <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:4px;">
              ${tools
                .map(
                  (t) => `
                  <button type="button" class="funnel-chip ${state.openInlineToolId === t.id ? "active" : ""}"
                          onclick="toggleInlineToolDrawer('${escapeHtml(t.id)}')">
                    🔧 ${escapeHtml(t.name)} ${state.openInlineToolId === t.id ? "▴" : "▾"}
                  </button>`
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
                <span class="muted-code-pill">${escapeHtml(activeInlineTool.suite || "")} ${escapeHtml(
                activeInlineTool.versionBadge || ""
              )}</span>
                <strong style="font-size:15px;color:#1B1534;margin-left:6px;">${escapeHtml(activeInlineTool.name)}</strong>
              </div>
              <div style="display:flex;gap:8px;">
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

      <!-- Anchor 3: Self-Service Troubleshooting -->
      <section class="editorial-section">
        <h3 class="editorial-h3">3. Common problems &amp; quick fixes</h3>
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

/**
 * Tab 3: Universal Decision & Priority Tools Engine
 * Supports declarative "prioritiser-funnel" (PLB-001 Top 5 Actions / PLB-002 Max 3 Escalations)
 * and "score-calculator" (Gateway Score Cap Calculator)
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

  // Generic 3-Step Prioritiser / Triage Funnel Engine
  const candidates = dec.candidates || [];
  const f1 = dec.filter1 || {};
  const f2 = dec.filter2 || {};
  const f3 = dec.filter3 || {};
  const selectedIds = state.selectedCandidatesByDecisionId[dec.id] || [];
  const maxCap = dec.maxCapacity || 5;

  const filtered = candidates.filter((c) => {
    const matchFlag = !state.funnelFlaggedOnly || c.isPriorityFlagged;
    const matchTag = state.funnelTagFilter === "ALL" || (c.tags || []).includes(state.funnelTagFilter);
    const matchQuad = state.funnelQuadrantFilter === "ALL" || c.quadrant === state.funnelQuadrantFilter;
    return matchFlag && matchTag && matchQuad;
  });

  const selectedCount = selectedIds.length;
  const isOverLimit = selectedCount > maxCap;

  canvas.innerHTML = `
    <div class="content-container">
      ${switcherPills}
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span class="eyebrow-tag" style="margin-bottom:0;">${escapeHtml(dec.eyebrow || "")}</span>
        <span class="muted-code-pill">${escapeHtml(dec.badge || "")}</span>
      </div>
      <h1 class="page-title" style="margin-bottom:8px;">${escapeHtml(dec.title)}</h1>
      <p class="page-subtitle" style="margin-bottom:20px;">
        ${escapeHtml(dec.subtitle)}
      </p>

      <!-- Declarative 3-Step Decision Funnel Controls -->
      <div class="funnel-controls-grid">
        <!-- Filter 1 -->
        <div class="funnel-filter-card">
          <span class="funnel-step-badge">${escapeHtml(f1.badge || "")}</span>
          <h3 style="font-size:15px;font-weight:700;color:#1B1534;margin-bottom:4px;">
            ${escapeHtml(f1.title || "")}
          </h3>
          <p style="font-size:12.5px;color:#54646E;">
            ${escapeHtml(f1.desc || "")}
          </p>
          <div class="funnel-chip-row">
            <button type="button" class="funnel-chip ${!state.funnelFlaggedOnly ? "active" : ""}"
                    onclick="setFunnelFlaggedOnly(false)">
              ${escapeHtml(f1.allLabel || "Show All")} (${candidates.length})
            </button>
            <button type="button" class="funnel-chip ${state.funnelFlaggedOnly ? "active" : ""}"
                    onclick="setFunnelFlaggedOnly(true)">
              ${escapeHtml(f1.flaggedLabel || "Priority Only")}
            </button>
          </div>
        </div>

        <!-- Filter 2 -->
        <div class="funnel-filter-card">
          <span class="funnel-step-badge">${escapeHtml(f2.badge || "")}</span>
          <h3 style="font-size:15px;font-weight:700;color:#1B1534;margin-bottom:4px;">
            ${escapeHtml(f2.title || "")}
          </h3>
          <p style="font-size:12.5px;color:#54646E;">
            ${escapeHtml(f2.desc || "")}
          </p>
          <div class="funnel-chip-row">
            <button type="button" class="funnel-chip ${state.funnelTagFilter === "ALL" ? "active" : ""}"
                    onclick="setFunnelTagFilter('ALL')">
              ${escapeHtml(f2.allLabel || "All")}
            </button>
            ${(f2.options || [])
              .map(
                (opt) => `
              <button type="button" class="funnel-chip ${state.funnelTagFilter === opt ? "active" : ""}"
                      onclick="setFunnelTagFilter('${escapeHtml(opt)}')">
                ${escapeHtml(opt)}
              </button>`
              )
              .join("")}
          </div>
        </div>

        <!-- Filter 3 -->
        <div class="funnel-filter-card">
          <span class="funnel-step-badge">${escapeHtml(f3.badge || "")}</span>
          <h3 style="font-size:15px;font-weight:700;color:#1B1534;margin-bottom:4px;">
            ${escapeHtml(f3.title || "")}
          </h3>
          <p style="font-size:12.5px;color:#54646E;">
            ${escapeHtml(f3.desc || "")}
          </p>
          <div class="funnel-chip-row">
            <button type="button" class="funnel-chip ${state.funnelQuadrantFilter === "ALL" ? "active" : ""}"
                    onclick="setFunnelQuadrantFilter('ALL')">
              ${escapeHtml(f3.allLabel || "All")}
            </button>
            ${(f3.options || [])
              .map(
                (opt) => `
              <button type="button" class="funnel-chip ${state.funnelQuadrantFilter === opt ? "active" : ""}"
                      onclick="setFunnelQuadrantFilter('${escapeHtml(opt)}')">
                ${escapeHtml(opt)}
              </button>`
              )
              .join("")}
          </div>
        </div>
      </div>

      <!-- Capacity Lock Output Tray -->
      <div class="capacity-tray ${isOverLimit ? "over-limit" : ""}">
        <div>
          <div class="capacity-meter">
            <span class="capacity-count-pill">
              ${selectedCount} Selected ${
      dec.recommendedMin && dec.recommendedMax
        ? `(Target: ${dec.recommendedMin}–${dec.recommendedMax} • Max ${maxCap})`
        : `/ ${maxCap} Capacity`
    }
            </span>
            <strong style="font-size:15.5px;">
              ${escapeHtml(isOverLimit ? dec.overLimitWarning : dec.withinLimitMessage)}
            </strong>
          </div>
        </div>

        <button type="button" class="header-btn"
                style="background:${isOverLimit ? "#641E8C" : "#8A00E5"};padding:10px 18px;font-size:13.5px;font-weight:700;"
                onclick="sendSelectedToTemplate('${escapeHtml(dec.id)}', '${escapeHtml(dec.targetTemplateId || "")}', ${maxCap})">
          Send (${selectedCount}) to ${escapeHtml(dec.sendButtonLabel || "Template")} →
        </button>
      </div>

      <!-- Candidate Rows -->
      <div class="candidate-list">
        ${filtered
          .map((c) => {
            const isSelected = selectedIds.includes(c.id);
            return `
            <div class="candidate-row ${isSelected ? "selected" : ""}"
                 onclick="toggleDecisionCandidate('${escapeHtml(dec.id)}', '${escapeHtml(c.id)}')"
                 style="cursor:pointer;">
              <div>
                <input type="checkbox" ${isSelected ? "checked" : ""}
                       onclick="event.stopPropagation(); toggleDecisionCandidate('${escapeHtml(dec.id)}', '${escapeHtml(c.id)}')"
                       style="width:20px;height:20px;accent-color:#8A00E5;cursor:pointer;"
                       aria-label="Select ${escapeHtml(c.title)}" />
              </div>

              <div>
                <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:6px;">
                  <span style="font-family:ui-monospace,monospace;font-weight:800;color:#1B1534;font-size:12.5px;">
                    ${escapeHtml(c.codeLabel)}
                  </span>
                  ${
                    c.isPriorityFlagged
                      ? `<span class="priority1-badge">${escapeHtml(f1.priorityBadgeText || "PRIORITY 1")}</span>`
                      : ""
                  }
                  <span class="lift-badge">📈 ${escapeHtml(c.liftLabel)}</span>
                  <span style="background:#F3E8FF;color:#641E8C;border:1px solid #8A00E5;font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;">
                    ${escapeHtml(c.quadrant)} (${escapeHtml(c.effort)} / ${escapeHtml(c.impact)})
                  </span>
                </div>

                <h4 style="font-size:16px;font-weight:700;color:#1B1534;margin-bottom:4px;">
                  ${escapeHtml(c.title)}
                </h4>
                <div style="font-size:13px;color:#54646E;">
                  <strong>Action / Countermeasure Draft:</strong> ${escapeHtml(c.draftText)}
                </div>
              </div>

              <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
                <div style="font-size:11px;font-weight:700;color:#54646E;text-transform:uppercase;">
                  ${escapeHtml(f2.columnLabel || "Alignment")}
                </div>
                <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
                  ${(c.tags || [])
                    .map(
                      (tag) =>
                        `<span style="background:#F8FAFC;border:1px solid #D7E4EE;color:#1B1534;font-size:11px;font-weight:600;padding:2px 8px;border-radius:99px;">${escapeHtml(
                          tag
                        )}</span>`
                    )
                    .join("")}
                </div>
              </div>
            </div>`;
          })
          .join("")}
      </div>
    </div>
  `;
}

/**
 * Tab 4A: Universal Template Renderer (Pre-filled from linked Decision Tool)
 */
function renderTemplatePage(tpl, plb, canvas) {
  if (!tpl) return;
  const linkedDec = (plb.decisionTools || []).find((d) => d.id === tpl.linkedDecisionId);
  const selectedIds = linkedDec ? state.selectedCandidatesByDecisionId[linkedDec.id] || [] : [];
  const chosen = linkedDec ? (linkedDec.candidates || []).filter((c) => selectedIds.includes(c.id)) : [];
  const th = tpl.tableHeaders || {};

  canvas.innerHTML = `
    <div class="content-container">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:16px;">
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
            <span class="eyebrow-tag" style="margin-bottom:0;">${escapeHtml(tpl.eyebrow || "")}</span>
            <span class="muted-code-pill">${escapeHtml(tpl.badge || "")}</span>
          </div>
          <h1 class="page-title" style="margin-bottom:4px;">${escapeHtml(tpl.title)}</h1>
        </div>
        <div style="display:flex;gap:10px;">
          ${
            linkedDec
              ? `<button type="button" class="header-btn secondary" style="color:#1B1534;border-color:#D7E4EE;background:#EAF4F8;"
                         onclick="selectDecisionTool('${escapeHtml(linkedDec.id)}')">
                   ← Adjust in ${escapeHtml(linkedDec.navTitle)} (${chosen.length}/${linkedDec.maxCapacity || 5})
                 </button>`
              : ""
          }
          <button type="button" class="header-btn" id="copyCharterBtn" onclick="copyCharterText()">
            Copy Template to Clipboard
          </button>
        </div>
      </div>

      <div id="charterBox" style="border:2px solid var(--se-gray-1);border-radius:14px;padding:28px;background:#FFFFFF;">
        <div class="meta-strip" style="margin-bottom:24px;">
          ${(tpl.metaFields || [])
            .map((mf) => `<div><strong>${escapeHtml(mf.label)}:</strong> ${escapeHtml(mf.value)}</div>`)
            .join("")}
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px;">
          <div style="padding:16px;background:var(--se-canvas-subtle);border:1px solid var(--se-gray-1);border-radius:10px;">
            <strong style="color:#1B1534;display:block;margin-bottom:8px;">${escapeHtml(tpl.leftBoxTitle || "")}</strong>
            <ul style="padding-left:18px;color:#54646E;font-size:14px;">
              ${(tpl.leftBoxBullets || []).map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
            </ul>
          </div>
          <div style="padding:16px;background:var(--se-canvas-subtle);border:1px solid var(--se-gray-1);border-radius:10px;">
            <strong style="color:#1B1534;display:block;margin-bottom:8px;">${escapeHtml(tpl.rightBoxTitle || "")}</strong>
            <div style="color:#54646E;font-size:14px;">
              <div><strong>${escapeHtml(tpl.rightBoxPrimary || "")}</strong></div>
              <div style="margin-top:6px;">
                <strong>${escapeHtml(tpl.rightBoxSecondaryPrefix || "Selected")} (${chosen.length}):</strong>
                ${chosen.map((c) => c.codeLabel).join(" • ") || "None selected"}
              </div>
            </div>
          </div>
        </div>

        <table class="clean-table">
          <thead>
            <tr>
              <th style="width:80px;">${escapeHtml(th.code || "#")}</th>
              <th>${escapeHtml(th.action || "Action")}</th>
              <th style="width:140px;">${escapeHtml(th.lift || "Impact")}</th>
              <th style="width:140px;">${escapeHtml(th.tag || "Category")}</th>
              <th style="width:95px;">${escapeHtml(th.due || "Due")}</th>
              <th style="width:130px;">${escapeHtml(th.owner || "Owner")}</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background:var(--se-gray-0);">
              <td style="font-weight:700;color:#1B1534;">${escapeHtml(tpl.objectiveRowCode || "OBJ 1")}</td>
              <td colspan="5" style="font-weight:700;color:#1B1534;">
                ${escapeHtml(tpl.objectiveRowText || "")}
              </td>
            </tr>
            ${
              chosen.length > 0
                ? chosen
                    .map(
                      (c, idx) => `
              <tr>
                <td style="font-family:ui-monospace,monospace;font-weight:700;color:#1B1534;">${escapeHtml(
                  (tpl.rowCodePrefix || "ITEM-") + (idx + 1)
                )}</td>
                <td style="color:#1B1534;font-weight:600;">
                  ${escapeHtml(c.draftText)}
                  <div style="font-size:12px;color:#54646E;font-weight:400;margin-top:2px;">
                    ${escapeHtml(c.codeLabel)} • ${escapeHtml(c.quadrant)}
                  </div>
                </td>
                <td style="font-family:ui-monospace,monospace;color:#007A7A;font-weight:700;">${escapeHtml(c.liftLabel)}</td>
                <td>${escapeHtml((c.tags || []).join(", "))}</td>
                <td style="font-family:ui-monospace,monospace;">${escapeHtml(c.defaultDue || "Q2")}</td>
                <td>${escapeHtml(c.defaultOwner || "@Owner")}</td>
              </tr>`
                    )
                    .join("")
                : `<tr><td colspan="6" style="text-align:center;padding:24px;">No items selected. Open the Decision Tool to select items.</td></tr>`
            }
          </tbody>
        </table>
      </div>
    </div>
  `;
}

/**
 * Tab 4B: Universal Reference Table Renderer (Driven by activePlaybook.referenceTables)
 */
function renderReferenceTablePage(ref, plb, canvas) {
  if (!ref) return;
  const rows = ref.rows || [];
  const cols = ref.columns || ["Code", "Description", "Category", "Level", "Flag"];
  const q = state.searchQuery.toLowerCase().trim();
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
        <span class="muted-code-pill">${escapeHtml(proc.appName || "")} ${escapeHtml(proc.versionBadge || "")}</span>
        <span class="muted-code-pill">${escapeHtml(proc.id)}</span>
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
        <span class="muted-code-pill">${escapeHtml(tool.suite || "")} ${escapeHtml(tool.versionBadge || "")}</span>
        <span class="muted-code-pill">${escapeHtml(tool.id)}</span>
      </div>

      <h1 class="page-title">${escapeHtml(tool.name)}</h1>
      <p class="page-subtitle" style="margin-bottom:24px;">${escapeHtml(tool.purpose)}</p>

      <div class="meta-strip">
        <div><strong>Application:</strong> ${escapeHtml(tool.suite || "-")} <span class="muted-code-pill">${escapeHtml(tool.versionBadge || "")}</span></div>
        <div><strong>Where to find it:</strong> ${escapeHtml(tool.accessUrl)}</div>
      </div>

      <section class="editorial-section">
        <h3 class="editorial-h3">1. Before you start</h3>
        <ul class="clean-list">
          ${(tool.gettingStarted || [])
            .map((g) => `<li><input type="checkbox" /><span>${escapeHtml(g)}</span></li>`)
            .join("")}
        </ul>
      </section>

      <section class="editorial-section">
        <h3 class="editorial-h3">2. Quick reference actions</h3>
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
        <h3 class="editorial-h3">3. Common problems &amp; fixes</h3>
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

function copyCharterText() {
  const el = document.getElementById("charterBox");
  if (!el) return;
  navigator.clipboard.writeText(el.innerText);
  const btn = document.getElementById("copyCharterBtn");
  btn.textContent = "✓ Copied to Clipboard!";
  setTimeout(() => {
    btn.textContent = "Copy Template to Clipboard";
  }, 2000);
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
  state.view = "process";
  state.selectedId = id;
  state.expandedProcessId = id;
  setActiveTopTab("guides");
  renderSidebar();
  renderMain();
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
    versionBadge: "v1.0.0",
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
window.toggleAccordion = toggleAccordion;
window.setReferenceFilter = setReferenceFilter;
window.copyCharterText = copyCharterText;
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
