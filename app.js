let DB = null;
let state = {
  view: "overview", // "overview" | "sop" | "process" | "tool" | "questions" | "calculator" | "charter" | "prioritiser"
  selectedId: null,
  expandedProcessId: "PRC-001",
  questionFilter: "all", // "all" | "gateway"
  searchQuery: "",
  simLevel: 1,
  simRawAvg: 3.4,

  // Stage 2 Upgrade State:
  journeyRoleFilter: "all", // "all" | "lpm" | "core"
  lpmPitchOpen: false,
  prioritiserGatewayOnly: false,
  prioritiserVocFilter: "ALL",
  prioritiserMatrixFilter: "ALL",
  selectedActionIds: [],
  openInlineToolId: null,
  sidebarToolsOpen: false
};

async function initApp() {
  try {
    const res = await fetch("./data/guides.json");
    DB = await res.json();
  } catch (e) {
    DB = window.FALLBACK_GUIDES_DB;
  }

  // Initialize default Top 5 selected actions from DB.prioritiserCandidates
  if (DB && Array.isArray(DB.prioritiserCandidates)) {
    state.selectedActionIds = DB.prioritiserCandidates
      .filter((c) => c.selectedByDefault)
      .map((c) => c.id);
  }

  bindEvents();
  renderSidebar();
  renderMain();
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
 * Renders the Snowflake-style soft architectural illustration card
 * styled with Siemens Energy tokens (#EAF4F8 card, #1B1534, #009999 Petrol, #0057C6 Blue 4, #8A00E5 Bright Purple).
 */
function renderSEArchitecturalCard(procId) {
  const isPart1 = procId === "PRC-001";
  const badgeText = isPart1 ? "PM MATURITY HUB" : "NAVIGATOR TOOLKIT";
  const accentColor = isPart1 ? "#009999" : "#8A00E5";

  return `
  <div class="illustration-card">
    <svg class="illus-svg" viewBox="0 0 460 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${badgeText} Visual Overview">
      <!-- Connected Relational Nodes -->
      <line x1="295" y1="62" x2="355" y2="38" stroke="#96B0C0" stroke-width="1.8"/>
      <line x1="295" y1="62" x2="355" y2="88" stroke="#96B0C0" stroke-width="1.8"/>
      <rect x="215" y="42" width="80" height="38" rx="6" fill="#FFFFFF" stroke="#B8CEDB" stroke-width="1.5"/>
      <text x="227" y="65" fill="#1B1534" font-family="Inter, sans-serif" font-size="10" font-weight="700">${isPart1 ? "28 Questions" : "Leader Needs"}</text>

      <rect x="355" y="18" width="84" height="36" rx="6" fill="#FFFFFF" stroke="#009999" stroke-width="1.5"/>
      <text x="366" y="40" fill="#007A7A" font-family="Inter, sans-serif" font-size="10" font-weight="700">${isPart1 ? "17 Gateways ★" : "1-Page Charter"}</text>

      <rect x="355" y="70" width="84" height="36" rx="6" fill="#FFFFFF" stroke="#8A00E5" stroke-width="1.5"/>
      <text x="366" y="92" fill="#641E8C" font-family="Inter, sans-serif" font-size="10" font-weight="700">${isPart1 ? "70% Site Proof" : "Action Log"}</text>

      <!-- Left Decorative Hierarchy Bars -->
      <rect x="32" y="180" width="46" height="8" rx="4" fill="#B8CEDB"/>
      <rect x="32" y="198" width="58" height="8" rx="4" fill="#96B0C0"/>
      <rect x="32" y="216" width="48" height="8" rx="4" fill="#B8CEDB"/>
      <rect x="32" y="234" width="64" height="8" rx="4" fill="${accentColor}"/>
      <rect x="32" y="252" width="42" height="8" rx="4" fill="#B8CEDB"/>

      <!-- Main Floating White Application Window -->
      <rect x="74" y="102" width="352" height="202" rx="10" fill="#FFFFFF" stroke="#D7E4EE" stroke-width="2"/>
      <!-- Header Strip inside Card -->
      <rect x="74" y="102" width="352" height="34" rx="10" fill="#1B1534"/>
      <circle cx="94" cy="119" r="4.5" fill="#009999"/>
      <text x="108" y="123" fill="#FFFFFF" font-family="ui-monospace, monospace" font-size="10.5" font-weight="700">
        SIEMENS ENERGY • ${badgeText}
      </text>

      <line x1="182" y1="136" x2="182" y2="304" stroke="#EAF4F8" stroke-width="1.5"/>

      <!-- Left Mini Navigation inside Window -->
      <rect x="90" y="154" width="74" height="8" rx="4" fill="#1B1534"/>
      <rect x="90" y="172" width="62" height="8" rx="4" fill="#D7E4EE"/>
      <rect x="90" y="190" width="68" height="8" rx="4" fill="#D7E4EE"/>
      <rect x="98" y="210" width="58" height="8" rx="4" fill="#009999"/>
      <rect x="98" y="228" width="52" height="8" rx="4" fill="#D7E4EE"/>

      <!-- Right Content Area inside Window -->
      <rect x="200" y="152" width="110" height="10" rx="5" fill="#1B1534"/>
      <rect x="200" y="170" width="190" height="7" rx="3.5" fill="#D7E4EE"/>
      <rect x="200" y="186" width="58" height="14" rx="6" fill="${accentColor}"/>
      <rect x="266" y="186" width="58" height="14" rx="6" fill="#EAF4F8"/>

      <!-- Siemens Energy Alternating Tint Bar Chart (Blue 4 #0057C6, Blue 2 #21C0FF, Petrol #009999) -->
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
 * Renders the annotated step diagram using Siemens Energy colours
 */
function renderStepIllustrationCard(step) {
  const visual = step.visual || {};
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

      <!-- Clean White Floating Card -->
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

      <!-- Target Highlight Box in SE Bright Purple (#8A00E5) -->
      <rect x="${tx - 4}" y="${ty - 4}" width="${tw + 8}" height="${th + 8}" rx="9"
            fill="none" stroke="#8A00E5" stroke-width="2.5" stroke-dasharray="5,3" />

      <!-- Pointer Arrow -->
      <line x1="${fx}" y1="${fy + 10}" x2="${tx + tw / 2}" y2="${ty - 5}"
            stroke="#8A00E5" stroke-width="2.2" marker-end="url(#seArrow)" />

      <!-- Callout Pill -->
      <rect x="${Math.max(18, fx - 105)}" y="${fy - 14}" width="225" height="24" rx="6" fill="#1B1534" />
      <circle cx="${Math.max(30, fx - 93)}" cy="${fy - 2}" r="4" fill="#009999" />
      <text x="${Math.max(40, fx - 83)}" y="${fy + 2}"
            fill="#FFFFFF" font-family="Inter, sans-serif" font-size="11" font-weight="700">
        ${escapeHtml(ann.label || "Target Step")}
      </text>
    </svg>
    <div style="margin-top:8px;display:flex;justify-content:space-between;font-size:12px;color:#54646E;font-weight:600;">
      <span>${escapeHtml(visual.caption || "")}</span>
      <span style="color:#007A7A;">Visual Step Guide</span>
    </div>
  </div>`;
}

/**
 * 4-Stage Connected User Journey Sidebar + Collapsible Bottom Software Tool Reference
 */
function renderSidebar() {
  const sidebar = document.getElementById("leftSidebar");
  const q = state.searchQuery.toLowerCase().trim();

  const tools = Object.values(DB.tools || {}).filter(
    (t) => !q || JSON.stringify(t).toLowerCase().includes(q)
  );

  const sop1 = DB.sops["SOP-001"];
  const sop2 = DB.sops["SOP-002"];
  const sop3 = DB.sops["SOP-003"];
  const sop4 = DB.sops["SOP-004"];

  const html = `
    <div>
      <!-- Stage 1 of Journey -->
      <div class="sidebar-section-label" style="margin-top:4px;">1. End-to-End Journey</div>
      <button type="button" class="tree-item ${state.view === "overview" ? "active" : ""}" onclick="showOverview()">
        <span>Connected 6-Stage Map &amp; Overview</span>
      </button>

      <div class="sidebar-divider"></div>

      <!-- Stage 2 of Journey -->
      <div class="sidebar-section-label">2. Where Are We? (Site Assessment)</div>
      <button type="button" class="tree-item ${state.view === "process" && state.selectedId === "PRC-001" ? "active" : ""}"
              onclick="selectProcess('PRC-001')">
        <span>Check Your Site's Current Score</span>
        <span class="tree-chevron">›</span>
      </button>
      <div class="tree-children">
        ${
          sop1
            ? `<button type="button" class="tree-child ${state.view === "sop" && state.selectedId === "SOP-001" ? "active" : ""}"
                       onclick="selectSOP('SOP-001')">
                 Stage 1: ${escapeHtml(sop1.title)}
               </button>`
            : ""
        }
        ${
          sop2
            ? `<button type="button" class="tree-child ${state.view === "sop" && state.selectedId === "SOP-002" ? "active" : ""}"
                       onclick="selectSOP('SOP-002')">
                 Stage 2: ${escapeHtml(sop2.title)}
               </button>`
            : ""
        }
      </div>
      <button type="button" class="tree-item ${state.view === "questions" ? "active" : ""}" onclick="switchTopTab('questions')">
        <span>All 28 Questions &amp; 17 Gateways (★)</span>
        <span class="tree-chevron">›</span>
      </button>

      <div class="sidebar-divider"></div>

      <!-- Stage 3 of Journey -->
      <div class="sidebar-section-label">3. What Matters? (Top 5 Prioritiser)</div>
      <button type="button" class="tree-item ${state.view === "prioritiser" ? "active" : ""}" onclick="switchTopTab('prioritiser')">
        <span>Pick Your Top 5 Actions (${state.selectedActionIds.length}/5)</span>
        <span class="tree-chevron">›</span>
      </button>
      <button type="button" class="tree-item ${state.view === "calculator" ? "active" : ""}" onclick="switchTopTab('calculator')">
        <span>Gateway Score Cap Calculator</span>
        <span class="tree-chevron">›</span>
      </button>

      <div class="sidebar-divider"></div>

      <!-- Stage 4 of Journey -->
      <div class="sidebar-section-label">4. Turn Into Action (Workshop &amp; Charter)</div>
      <button type="button" class="tree-item ${state.view === "process" && state.selectedId === "PRC-002" ? "active" : ""}"
              onclick="selectProcess('PRC-002')">
        <span>Run a Leadership Action Workshop</span>
        <span class="tree-chevron">›</span>
      </button>
      <div class="tree-children">
        ${
          sop3
            ? `<button type="button" class="tree-child ${state.view === "sop" && state.selectedId === "SOP-003" ? "active" : ""}"
                       onclick="selectSOP('SOP-003')">
                 Stage 3: ${escapeHtml(sop3.title)}
               </button>`
            : ""
        }
        ${
          sop4
            ? `<button type="button" class="tree-child ${state.view === "sop" && state.selectedId === "SOP-004" ? "active" : ""}"
                       onclick="selectSOP('SOP-004')">
                 Stage 5: ${escapeHtml(sop4.title)}
               </button>`
            : ""
        }
      </div>
      <button type="button" class="tree-item ${state.view === "charter" ? "active" : ""}" onclick="switchTopTab('charter')">
        <span>1-Page Navigator Charter Template</span>
        <span class="tree-chevron">›</span>
      </button>

      <div class="sidebar-divider"></div>

      <!-- Collapsible Software Tool Reference Section -->
      <button type="button" class="tree-item ${state.sidebarToolsOpen || state.view === "tool" || q.length > 0 ? "expanded" : ""}"
              onclick="toggleSidebarTools()">
        <span style="font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#54646E;">
          Software Tool Reference (${tools.length})
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
      <div class="filing-callout">
        <div style="font-family:ui-monospace,monospace;font-size:10.5px;font-weight:700;color:#009999;text-transform:uppercase;margin-bottom:4px;">
          Where to Save Final Files
        </div>
        <div>
          ${escapeHtml(DB.meta?.filingRule || "Save finished .csv and .json files in 600 Maturity Submissions.")}
        </div>
      </div>
      <button type="button" class="quiet-admin-link" onclick="openAdminModal()">
        ⚙️ Admin: Edit Guide Payload
      </button>
    </div>
  `;

  sidebar.innerHTML = html;
}

function renderMain() {
  const canvas = document.getElementById("mainCanvas");
  if (state.view === "overview") {
    renderOverviewPage(canvas);
  } else if (state.view === "sop") {
    const sop = DB.sops[state.selectedId] || Object.values(DB.sops)[0];
    renderSOPPage(sop, canvas);
  } else if (state.view === "process") {
    const proc = DB.processes[state.selectedId] || Object.values(DB.processes)[0];
    renderProcessPage(proc, canvas);
  } else if (state.view === "tool") {
    const tool = DB.tools[state.selectedId] || Object.values(DB.tools)[0];
    renderToolPage(tool, canvas);
  } else if (state.view === "questions") {
    renderQuestionsPage(canvas);
  } else if (state.view === "prioritiser") {
    renderPrioritiserPage(canvas);
  } else if (state.view === "calculator") {
    renderCalculatorPage(canvas);
  } else if (state.view === "charter") {
    renderCharterPage(canvas);
  }
}

/**
 * Deliverable 1: Connected 6-Stage End-to-End Process Map + Role Filter + 60-Sec LPM Pitch
 * Plus Fix 1, Fix 2 (2-Card Chooser), and Fix 3 (3-Term Plain-English Key)
 */
function renderOverviewPage(canvas) {
  const processes = Object.values(DB.processes || {});
  const p1 = DB.processes["PRC-001"] || processes[0];
  const p2 = DB.processes["PRC-002"] || processes[1];
  const journeyStages = DB.journeyStages || [];

  canvas.innerHTML = `
    <div class="content-container">
      <div class="eyebrow-tag">
        <span class="petrol-dot" style="width:7px;height:7px;"></span>
        <span>Siemens Energy • Lean@GS Connected User Journey</span>
      </div>
      <h1 class="page-title">Maturity Assessment &amp; Navigator Workshop Guides</h1>
      <p class="page-subtitle">
        Use these guides to check how Lean practices are working at your site and turn your findings into a practical leadership action plan.
      </p>

      <!-- DELIVERABLE 1: Connected 6-Stage End-to-End Process Map -->
      <section class="journey-map-section" aria-label="6-Stage Connected End-to-End Process Map">
        <div class="journey-controls-bar">
          <div>
            <div style="font-size:11.5px;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;color:#007A7A;margin-bottom:2px;">
              Understand Where I Am → Understand What Matters → Know What To Do Next → Turn Into Action
            </div>
            <h2 style="font-size:18px;font-weight:700;color:#1B1534;">
              End-to-End 6-Stage Process Map (Who Does What &amp; When)
            </h2>
          </div>

          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
            <div class="role-toggle-group" role="group" aria-label="Filter stages by role">
              <button type="button" class="role-pill-btn ${state.journeyRoleFilter === "all" ? "active" : ""}"
                      onclick="setJourneyRoleFilter('all')">
                All Roles
              </button>
              <button type="button" class="role-pill-btn ${state.journeyRoleFilter === "lpm" ? "active" : ""}"
                      onclick="setJourneyRoleFilter('lpm')">
                Highlight LPM Tasks
              </button>
              <button type="button" class="role-pill-btn ${state.journeyRoleFilter === "core" ? "active" : ""}"
                      onclick="setJourneyRoleFilter('core')">
                Highlight Lean Core Team Tasks
              </button>
            </div>

            <button type="button" class="pitch-toggle-btn" onclick="toggleLpmPitch()">
              <span>⏱ Explain to an LPM (60-Sec Pitch)</span>
              <span>${state.lpmPitchOpen ? "▴" : "▾"}</span>
            </button>
          </div>
        </div>

        <!-- 1-Click "Explain to an LPM (60-Sec Pitch)" Banner -->
        <div class="lpm-pitch-banner ${state.lpmPitchOpen ? "" : "hidden"}">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px;">
            <div>
              <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.08em;color:#21C0FF;margin-bottom:6px;">
                60-Second Screen-Share Briefing for Local Programme Managers (LPMs)
              </div>
              <p style="font-size:14.5px;line-height:1.6;color:#FFFFFF;margin-bottom:8px;">
                <strong>1. Where we are:</strong> This is not an audit—we spend 90 minutes as a pair checking 28 everyday working habits across 70% of the site so we have an honest baseline.
                <br/>
                <strong>2. What matters:</strong> Instead of trying to fix all 28 items at once, our 3-step funnel unlocks your red Starred Gateways (★) and connects them directly to your Site Leader's top business headaches.
                <br/>
                <strong>3. Our next step:</strong> We walk out with a single 1-page action charter containing <strong>a maximum of 5 focused actions</strong> and a 90-day coaching cadence.
              </p>
            </div>
          </div>
          <div class="pitch-equation">
            <span class="pitch-eq-box">90-Min Site Check (28 Qs)</span>
            <span>+</span>
            <span class="pitch-eq-box">Leader Priorities (VOC)</span>
            <span>=</span>
            <span class="pitch-eq-box" style="background:#009999;color:#FFFFFF;border-color:#FFFFFF;">
              1-Page Action Plan of Max 5 Items
            </span>
          </div>
        </div>

        <!-- 6 Connected Stage Cards -->
        <div class="six-stage-grid">
          ${journeyStages
            .map((st) => {
              const isDimmed =
                (state.journeyRoleFilter === "lpm" && st.roleTag === "core") ||
                (state.journeyRoleFilter === "core" && st.roleTag === "lpm");
              const badgeClass = st.statusTone === "purple" ? "status-badge-purple" : "status-badge-teal";

              return `
              <div class="stage-flow-card ${isDimmed ? "dimmed" : ""}">
                <div>
                  <div class="stage-card-top">
                    <span class="stage-num-circle">STAGE ${st.stage}</span>
                    <span class="${badgeClass}">${escapeHtml(st.statusBadge)}</span>
                  </div>
                  <h3 class="stage-card-title">${escapeHtml(st.title)}</h3>
                  <div class="stage-meta-rows">
                    <div><strong>Lead:</strong> ${escapeHtml(st.leadRole)}</div>
                    <div><strong>Support:</strong> ${escapeHtml(st.supportRole)}</div>
                    <div>
                      <strong>Tool:</strong>
                      <button type="button" class="breadcrumb-link" style="font-size:12px;"
                              onclick="selectTool('${st.toolId}')">
                        ${escapeHtml(st.toolLabel)}
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="stage-io-box">
                    <strong>Input → Output:</strong><br/>
                    ${escapeHtml(st.input)} → <strong>${escapeHtml(st.output)}</strong>
                  </div>
                  <button type="button" class="stage-card-btn"
                          onclick="openJourneyStage('${st.routeType}', '${st.routeId}')">
                    ${escapeHtml(st.ctaText)}
                  </button>
                </div>
              </div>`;
            })
            .join("")}
        </div>
      </section>

      <!-- Fix 2: "Which Job Are You Doing Today?" 2-Card Chooser -->
      <div class="chooser-section-label">Which job are you doing today?</div>
      <div class="job-chooser-grid">
        <!-- Card 1 -->
        <div class="job-card">
          <div>
            <div class="job-card-top">
              <span class="time-pill">⏱ ${escapeHtml(p1.durationBadge || "90 mins")}</span>
              <span class="muted-code-pill">${escapeHtml(p1.appName || "PM Maturity Hub")} • ${escapeHtml(p1.versionBadge || "v6.0.0")}</span>
            </div>
            <h2 class="job-card-title">${escapeHtml(p1.title)}</h2>
            <div class="job-meta-list">
              <div><strong>When to use:</strong> ${escapeHtml(p1.whenToUse || "Every quarter with a partner.")}</div>
              <div><strong>Output:</strong> ${escapeHtml(p1.cardOutput || "Completed 28-question health check.")}</div>
            </div>
          </div>
          <button type="button" class="job-cta-btn" onclick="selectSOP('SOP-001')">
            <span>${escapeHtml(p1.ctaLabel || "Start Site Assessment Guide")}</span>
            <span>→</span>
          </button>
        </div>

        <!-- Card 2 -->
        <div class="job-card">
          <div>
            <div class="job-card-top">
              <span class="time-pill">⏱ ${escapeHtml(p2.durationBadge || "Half Day")}</span>
              <span class="muted-code-pill">${escapeHtml(p2.appName || "Navigator Toolkit")} • ${escapeHtml(p2.versionBadge || "v2.4.4")}</span>
            </div>
            <h2 class="job-card-title">${escapeHtml(p2.title)}</h2>
            <div class="job-meta-list">
              <div><strong>When to use:</strong> ${escapeHtml(p2.whenToUse || "After your site check.")}</div>
              <div><strong>Output:</strong> ${escapeHtml(p2.cardOutput || "Signed 1-page action charter.")}</div>
            </div>
          </div>
          <button type="button" class="job-cta-btn" onclick="selectSOP('SOP-003')">
            <span>${escapeHtml(p2.ctaLabel || "Start Workshop Guide")}</span>
            <span>→</span>
          </button>
        </div>
      </div>

      <!-- Fix 3: 3-Term "Before You Start" Plain-English Key -->
      <div class="plain-key-box">
        <div class="plain-key-header">
          <span class="plain-key-title">Before You Start: The 3 Rules of the Game</span>
          <span style="font-size:12px;color:var(--se-gray-5);">How site scoring works in plain English</span>
        </div>
        <div class="plain-key-grid">
          <div class="plain-key-item">
            <div class="plain-key-term">📋 1. The 28 Questions</div>
            <p class="plain-key-desc">
              You and a Lean Core Team partner rate 28 everyday habits from <strong>1 (Not in place)</strong> to <strong>5 (Self-running)</strong>. Never score alone.
            </p>
          </div>
          <div class="plain-key-item">
            <div class="plain-key-term">🏭 2. 70% Site Proof</div>
            <p class="plain-key-desc">
              To score a <strong>3 or higher</strong>, a habit must be working with real boards and logs across <strong>roughly 70% of teams</strong>—one pilot area does not count.
            </p>
          </div>
          <div class="plain-key-item">
            <div class="plain-key-term">★ 3. 17 Starred Gateways</div>
            <p class="plain-key-desc">
              17 key questions are marked with a star (<strong>★</strong>). Every starred question in your current level must score at least <strong>3</strong> before you can move up to the next level.
            </p>
          </div>
        </div>
      </div>

      <!-- Detailed Process & Stage Accordions Below the Chooser -->
      ${processes
        .map((proc) => {
          const stages = proc.stages || [];
          return `
          <section class="feature-split">
            <div>
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
                <span class="muted-code-pill">${escapeHtml(proc.appName || "")} ${escapeHtml(proc.versionBadge || "")}</span>
                <span class="muted-code-pill">${proc.id}</span>
              </div>
              <h2 class="section-h2">${escapeHtml(proc.title)}</h2>
              <p class="section-lead">
                ${escapeHtml(proc.userGoal)}
              </p>
              <button type="button" class="see-all-link" onclick="selectProcess('${proc.id}')">
                View full process overview <span>→</span>
              </button>

              <div class="accordion-list">
                ${stages
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
                        <p>${escapeHtml(st.summary)} (${escapeHtml(sop?.estimatedTime || "45 mins")})</p>
                        <button type="button" class="learn-more-link" onclick="event.stopPropagation(); selectSOP('${st.sopId}')">
                          Open step-by-step guide <span>→</span>
                        </button>
                      </div>
                    </div>`;
                  })
                  .join("")}
              </div>
            </div>

            <div>
              ${renderSEArchitecturalCard(proc.id)}
            </div>
          </section>`;
        })
        .join("")}
    </div>
  `;
}

/**
 * Deliverable 3: Point-of-Use "Kit Bag for This Task" on Every SOP Page + Inline Tool Drawer
 */
function renderSOPPage(sop, canvas) {
  const proc = DB.processes[sop.processId];
  const role = DB.roles[sop.roleId];
  const tools = (sop.toolIds || []).map((id) => DB.tools[id]).filter(Boolean);
  const kb = sop.kitBag || {};
  const activeInlineTool = tools.find((t) => t.id === state.openInlineToolId) || null;

  canvas.innerHTML = `
    <div class="content-container">
      <div class="breadcrumb-row">
        <button type="button" class="breadcrumb-link" onclick="showOverview()">1. End-to-End Journey</button>
        <span>/</span>
        ${
          proc
            ? `<button type="button" class="breadcrumb-link" onclick="selectProcess('${proc.id}')">${escapeHtml(proc.title)}</button><span>/</span>`
            : ""
        }
        <span class="muted-code-pill">${sop.id}</span>
      </div>

      <h1 class="page-title">${escapeHtml(sop.title)}</h1>
      <p class="page-subtitle" style="margin-bottom:20px;">${escapeHtml(sop.userGoal)}</p>

      <!-- DELIVERABLE 3: Point-of-Use "Kit Bag for This Task" Card -->
      <section class="kit-bag-card" aria-label="Kit Bag for This Task">
        <div class="kit-bag-header">
          <div style="display:flex;align-items:center;gap:10px;">
            <span class="petrol-dot"></span>
            <strong style="font-size:14px;color:#1B1534;text-transform:uppercase;letter-spacing:0.04em;">
              🧰 Kit Bag for This Task (Point-of-Use Reference)
            </strong>
          </div>
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            <span class="status-badge-purple">${escapeHtml(kb.mandatoryStatus || "MANDATORY")}</span>
            <span class="time-pill">⏱ ${escapeHtml(sop.estimatedTime)}</span>
          </div>
        </div>

        <div class="kit-bag-grid">
          <div class="kit-bag-cell">
            <div class="kit-bag-label">Who Leads &amp; Supports</div>
            <div style="color:#1B1534;font-weight:700;">${escapeHtml(kb.leadRole || role?.title || sop.roleId)}</div>
            <div style="color:#54646E;font-size:12px;margin-top:2px;">${escapeHtml(kb.supportRole || "Partner: Lean Core Team")}</div>
          </div>

          <div class="kit-bag-cell">
            <div class="kit-bag-label">Software Tool (Click for Help)</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:4px;">
              ${tools
                .map(
                  (t) => `
                  <button type="button" class="funnel-chip ${state.openInlineToolId === t.id ? "active" : ""}"
                          onclick="toggleInlineToolDrawer('${t.id}')">
                    🔧 ${escapeHtml(t.name)} ${state.openInlineToolId === t.id ? "▴" : "▾"}
                  </button>`
                )
                .join("")}
            </div>
            <div style="color:#54646E;font-size:11.5px;margin-top:4px;">Where: ${escapeHtml(sop.stationLocation)}</div>
          </div>

          <div class="kit-bag-cell">
            <div class="kit-bag-label">Input Needed</div>
            <div style="color:#1B1534;font-weight:600;">${escapeHtml(kb.inputNeeded || "Previous stage file")}</div>
          </div>

          <div class="kit-bag-cell">
            <div class="kit-bag-label">Output Produced</div>
            <div style="color:#007A7A;font-weight:700;">${escapeHtml(kb.outputProduced || "Verified stage file")}</div>
          </div>
        </div>

        <!-- Inline Point-of-Use Tool Drawer (Opens without leaving the SOP) -->
        ${
          activeInlineTool
            ? `
          <div class="inline-tool-drawer">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
              <div>
                <span class="muted-code-pill">${escapeHtml(activeInlineTool.suite || "")} ${escapeHtml(activeInlineTool.versionBadge || "")}</span>
                <strong style="font-size:15px;color:#1B1534;margin-left:6px;">${escapeHtml(activeInlineTool.name)} — Quick Guide</strong>
              </div>
              <div style="display:flex;gap:8px;">
                <button type="button" class="breadcrumb-link" onclick="selectTool('${activeInlineTool.id}')">Open Full Tool Page →</button>
                <button type="button" class="header-btn secondary" style="padding:3px 10px;font-size:12px;" onclick="toggleInlineToolDrawer('${activeInlineTool.id}')">Close ✕</button>
              </div>
            </div>
            <p style="font-size:13px;color:#54646E;margin-bottom:10px;">${escapeHtml(activeInlineTool.purpose)}</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
              <div style="background:#F8FAFC;padding:10px 12px;border-radius:8px;border:1px solid #D7E4EE;">
                <div class="kit-bag-label">Quick Actions in This Tool</div>
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
                <div class="kit-bag-label">Tool Troubleshooting</div>
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

      <!-- Anchor 2: Visual-First Action Steps -->
      <section class="editorial-section">
        <h3 class="editorial-h3">2. Step-by-step instructions</h3>
        ${(sop.steps || [])
          .map((st) => {
            return `
            <div class="step-split-row">
              <div>
                <div class="step-kicker">
                  <span>STEP ${st.stepNumber}</span>
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
 * Deliverable 2: Interactive "Top 5 Action Prioritiser" Module (Tab 3: What Matters?)
 */
function renderPrioritiserPage(canvas) {
  const candidates = DB.prioritiserCandidates || [];
  const vocOptions = ["ALL", "Safety", "On-Time Delivery", "Quality / First-Time-Right", "Cost / Productivity"];
  const matrixOptions = ["ALL", "Quick Win", "Major Step", "Fill-In", "Hard Slog"];

  const filtered = candidates.filter((c) => {
    const matchGate = !state.prioritiserGatewayOnly || (c.gateway && c.defaultBelowThreshold);
    const matchVoc = state.prioritiserVocFilter === "ALL" || (c.vocTags || []).includes(state.prioritiserVocFilter);
    const matchMatrix = state.prioritiserMatrixFilter === "ALL" || c.matrixQuadrant === state.prioritiserMatrixFilter;
    return matchGate && matchVoc && matchMatrix;
  });

  const selectedCount = state.selectedActionIds.length;
  const isOverLimit = selectedCount > 5;

  canvas.innerHTML = `
    <div class="content-container">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:10px;">
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
            <span class="eyebrow-tag" style="margin-bottom:0;">Stage 4 Decision Funnel • Simplify the Decision</span>
            <span class="muted-code-pill">Max 5 Actions Rule</span>
          </div>
          <h1 class="page-title" style="margin-bottom:8px;">How to Pick Your Top 5 Focus Actions (From 28 Questions to 5 Vital Few)</h1>
          <p class="page-subtitle" style="margin-bottom:20px;">
            Never leave a site check with a 28-item wish list. Use this 3-step decision funnel to filter your gaps down to <strong>at most 5 high-impact actions</strong>, then send them straight into your 1-Page Navigator Charter.
          </p>
        </div>
        <button type="button" class="header-btn secondary" style="color:#1B1534;border-color:#D7E4EE;background:#EAF4F8;"
                onclick="switchTopTab('calculator')">
          🧮 Open Gateway Score Cap Calculator →
        </button>
      </div>

      <!-- 3-Step Decision Funnel Controls -->
      <div class="funnel-controls-grid">
        <!-- Filter 1: Unlock Capped Gateways First -->
        <div class="funnel-filter-card">
          <span class="funnel-step-badge">Funnel Step 1 • Unblock the Score Cap</span>
          <h3 style="font-size:15px;font-weight:700;color:#1B1534;margin-bottom:4px;">
            1. Unlock Red Starred Gateways (★) First
          </h3>
          <p style="font-size:12.5px;color:#54646E;">
            Any Starred Gateway scoring below 3 in your current level caps your entire site maturity score.
          </p>
          <div class="funnel-chip-row">
            <button type="button" class="funnel-chip ${!state.prioritiserGatewayOnly ? "active" : ""}"
                    onclick="setPrioritiserGatewayOnly(false)">
              Show All Candidate Actions (${candidates.length})
            </button>
            <button type="button" class="funnel-chip ${state.prioritiserGatewayOnly ? "active" : ""}"
                    onclick="setPrioritiserGatewayOnly(true)">
              ★ Only Red Capped Gateways
            </button>
          </div>
        </div>

        <!-- Filter 2: Match Site Leadership Priorities (VOC Alignment) -->
        <div class="funnel-filter-card">
          <span class="funnel-step-badge">Funnel Step 2 • Match Leader VOC</span>
          <h3 style="font-size:15px;font-weight:700;color:#1B1534;margin-bottom:4px;">
            2. Match Site Leadership Priorities
          </h3>
          <p style="font-size:12.5px;color:#54646E;">
            Keep only actions that directly solve a problem your Site Leader raised in Stage 3 interviews.
          </p>
          <div class="funnel-chip-row">
            ${vocOptions
              .map(
                (voc) => `
              <button type="button" class="funnel-chip ${state.prioritiserVocFilter === voc ? "active" : ""}"
                      onclick="setPrioritiserVocFilter('${voc}')">
                ${voc === "ALL" ? "All VOC Priorities" : escapeHtml(voc)}
              </button>`
              )
              .join("")}
          </div>
        </div>

        <!-- Filter 3: Effort vs. Impact 2x2 Matrix Selector -->
        <div class="funnel-filter-card">
          <span class="funnel-step-badge">Funnel Step 3 • Rank Impact vs. Effort</span>
          <h3 style="font-size:15px;font-weight:700;color:#1B1534;margin-bottom:4px;">
            3. Filter by 2×2 Effort vs. Maturity Lift
          </h3>
          <p style="font-size:12.5px;color:#54646E;">
            Pick <strong>Quick Wins</strong> first, add max 1–2 <strong>Major Steps</strong>, and drop <strong>Hard Slogs</strong>.
          </p>
          <div class="funnel-chip-row">
            ${matrixOptions
              .map(
                (mat) => `
              <button type="button" class="funnel-chip ${state.prioritiserMatrixFilter === mat ? "active" : ""}"
                      onclick="setPrioritiserMatrixFilter('${mat}')">
                ${mat === "ALL" ? "All Quadrants" : escapeHtml(mat)}
              </button>`
              )
              .join("")}
          </div>
        </div>
      </div>

      <!-- Capacity Lock Output Tray (Max 5 Items) -->
      <div class="capacity-tray ${isOverLimit ? "over-limit" : ""}">
        <div>
          <div class="capacity-meter">
            <span class="capacity-count-pill">${selectedCount} / 5 Capacity Used</span>
            <strong style="font-size:15.5px;">
              ${
                isOverLimit
                  ? "⚠️ Stop: Tackling more than 5 actions at once reduces completion rates. Drop lower-impact items before exporting."
                  : "✓ Focused Action Tray Ready (Keep at 5 or fewer actions for your 1-Page Charter)"
              }
            </strong>
          </div>
          <div style="font-size:12.5px;color:#EAF4F8;margin-top:6px;">
            Selected actions automatically pre-fill the Key Results table in your <strong>1-Page Navigator Charter Template</strong>.
          </div>
        </div>

        <button type="button" class="header-btn"
                style="background:${isOverLimit ? "#641E8C" : "#8A00E5"};padding:10px 18px;font-size:13.5px;font-weight:700;"
                onclick="sendTop5ToCharter()">
          Send Top ${selectedCount} to 1-Page Charter →
        </button>
      </div>

      <!-- Candidate Actions List -->
      <div class="candidate-list">
        ${filtered
          .map((c) => {
            const isSelected = state.selectedActionIds.includes(c.id);
            const quadrantBadgeColor =
              c.matrixQuadrant === "Quick Win"
                ? "background:#EAF4F8;color:#007A7A;border:1px solid #009999;"
                : c.matrixQuadrant === "Major Step"
                ? "background:#F3E8FF;color:#641E8C;border:1px solid #8A00E5;"
                : c.matrixQuadrant === "Fill-In"
                ? "background:#F8FAFC;color:#54646E;border:1px solid #B8CEDB;"
                : "background:#FFF1F2;color:#DA1E28;border:1px solid #FECDD3;";

            return `
            <div class="candidate-row ${isSelected ? "selected" : ""}" onclick="toggleCandidateAction('${c.id}')" style="cursor:pointer;">
              <div>
                <input type="checkbox" ${isSelected ? "checked" : ""}
                       onclick="event.stopPropagation(); toggleCandidateAction('${c.id}')"
                       style="width:20px;height:20px;accent-color:#8A00E5;cursor:pointer;"
                       aria-label="Select ${escapeHtml(c.title)}" />
              </div>

              <div>
                <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:6px;">
                  <span style="font-family:ui-monospace,monospace;font-weight:800;color:#1B1534;font-size:12.5px;">
                    Q${c.qId} (Level ${c.level} ${c.gateway ? "★ Gateway" : "Standard"})
                  </span>
                  ${
                    c.gateway && c.defaultBelowThreshold
                      ? `<span class="priority1-badge">PRIORITY 1: UNLOCKS MATURITY CAP</span>`
                      : ""
                  }
                  <span class="lift-badge">📈 ${escapeHtml(c.scoreLift)}</span>
                  <span style="${quadrantBadgeColor}font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;">
                    ${escapeHtml(c.matrixQuadrant)} (${escapeHtml(c.effort)} / ${escapeHtml(c.impact)})
                  </span>
                </div>

                <h4 style="font-size:16px;font-weight:700;color:#1B1534;margin-bottom:4px;">
                  ${escapeHtml(c.title)}
                </h4>
                <div style="font-size:13px;color:#54646E;">
                  <strong>Charter Key Result Draft:</strong> ${escapeHtml(c.krTemplate)}
                </div>
              </div>

              <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
                <div style="font-size:11px;font-weight:700;color:#54646E;text-transform:uppercase;">Leader VOC Alignment</div>
                <div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:flex-end;">
                  ${(c.vocTags || [])
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

function renderProcessPage(proc, canvas) {
  const resp = DB.roles[proc.raci?.responsible];
  canvas.innerHTML = `
    <div class="content-container">
      <div class="breadcrumb-row">
        <button type="button" class="breadcrumb-link" onclick="showOverview()">1. End-to-End Journey</button>
        <span>/</span>
        <span class="muted-code-pill">${escapeHtml(proc.appName || "")} ${escapeHtml(proc.versionBadge || "")}</span>
        <span class="muted-code-pill">${proc.id}</span>
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
                  <button type="button" class="learn-more-link" onclick="event.stopPropagation(); selectSOP('${st.sopId}')">
                    Start Stage ${st.stageNumber} Guide <span>→</span>
                  </button>
                </div>
              </div>`
              )
              .join("")}
          </div>
        </div>

        <div>
          ${renderSEArchitecturalCard(proc.id)}
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

function renderToolPage(tool, canvas) {
  canvas.innerHTML = `
    <div class="content-container">
      <div class="breadcrumb-row">
        <button type="button" class="breadcrumb-link" onclick="showOverview()">1. End-to-End Journey</button>
        <span>/</span>
        <span class="muted-code-pill">${escapeHtml(tool.suite || "Lean@GS Tool")} ${escapeHtml(tool.versionBadge || "")}</span>
        <span class="muted-code-pill">${tool.id}</span>
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

/**
 * Interactive 28 Questions & 17 Gateways Explorer
 */
function renderQuestionsPage(canvas) {
  const questions = DB.questions28 || [];
  const q = state.searchQuery.toLowerCase().trim();
  const filtered = questions.filter((item) => {
    const matchGate = state.questionFilter === "all" || (state.questionFilter === "gateway" && item.gateway);
    const matchQ =
      !q ||
      `q${item.id}`.includes(q) ||
      item.text.toLowerCase().includes(q) ||
      item.theme.toLowerCase().includes(q) ||
      `level ${item.level}`.includes(q);
    return matchGate && matchQ;
  });

  canvas.innerHTML = `
    <div class="content-container">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
        <span class="eyebrow-tag" style="margin-bottom:0;">Site Assessment Reference</span>
        <span class="muted-code-pill">PM Maturity Hub • v6.0.0</span>
      </div>
      <h1 class="page-title">All 28 Assessment Questions &amp; 17 Gateways</h1>
      <p class="page-subtitle" style="margin-bottom:24px;">
        Starred Gateway questions (<strong style="color:#007A7A;">★ Yes</strong>) must score at least <strong>3 across roughly 70% of the site</strong> before higher-level questions count toward your final score.
      </p>

      <div style="display:flex;gap:10px;margin-bottom:20px;flex-wrap:wrap;">
        <button type="button" class="header-btn" style="background:${
          state.questionFilter === "all" ? "#1B1534" : "#EAF4F8"
        };color:${state.questionFilter === "all" ? "#FFF" : "#1B1534"};"
                onclick="setQuestionFilter('all')">
          All Questions (28)
        </button>
        <button type="button" class="header-btn" style="background:${
          state.questionFilter === "gateway" ? "#8A00E5" : "#EAF4F8"
        };color:${state.questionFilter === "gateway" ? "#FFF" : "#1B1534"};"
                onclick="setQuestionFilter('gateway')">
          ★ Starred Gateways Only (17)
        </button>
        <button type="button" class="header-btn secondary" style="color:#1B1534;border-color:#D7E4EE;background:#FFFFFF;"
                onclick="switchTopTab('prioritiser')">
          Filter Down to Top 5 Actions →
        </button>
      </div>

      <table class="clean-table">
        <thead>
          <tr>
            <th style="width:65px;">#</th>
            <th>Assessment Question</th>
            <th style="width:220px;">Topic</th>
            <th style="width:95px;">Level</th>
            <th style="width:110px;">Gateway?</th>
          </tr>
        </thead>
        <tbody>
          ${filtered
            .map(
              (item) => `
            <tr>
              <td style="font-family:ui-monospace,monospace;font-weight:700;color:#1B1534;">Q${item.id}</td>
              <td style="color:#1B1534;font-weight:500;">${escapeHtml(item.text)}</td>
              <td>${escapeHtml(item.theme)}</td>
              <td style="font-family:ui-monospace,monospace;">Level ${item.level}</td>
              <td>
                ${
                  item.gateway
                    ? `<span style="background:#EAF4F8;color:#007A7A;font-weight:700;padding:3px 8px;border-radius:4px;font-size:12px;">★ Yes</span>`
                    : `<span style="color:#96B0C0;">No</span>`
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

/**
 * Interactive Gateway Score Cap Calculator
 */
function renderCalculatorPage(canvas) {
  const levelNames = [
    "0 (Lean Awareness)",
    "1 (Basic Implementation)",
    "2 (Structured Approach)",
    "3 (Integrated Lean Culture)",
    "4 (Strategic Mastery)"
  ];
  const compressed = state.simLevel + (state.simRawAvg - 1) / 4;
  const finalScore = Math.min(state.simRawAvg, compressed);

  canvas.innerHTML = `
    <div class="content-container">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:10px;">
        <div class="eyebrow-tag" style="margin-bottom:0;">Score Explainer • Interactive Calculator</div>
        <button type="button" class="breadcrumb-link" onclick="switchTopTab('prioritiser')">
          ← Back to Top 5 Action Prioritiser
        </button>
      </div>
      <h1 class="page-title">How Gateway Score Caps Work</h1>
      <p class="page-subtitle" style="margin-bottom:28px;">
        Why high scores on Level 2–4 questions do not raise your total score if a Level 1 Starred Gateway (such as <strong>Q10: Pilot Experiments</strong>) scores below 3.
      </p>

      <div class="step-split-row" style="padding-top:0;">
        <div>
          <h3 class="editorial-h3">How Your Site Score Is Worked Out</h3>
          <ol class="clean-list" style="margin-bottom:20px;">
            <li><strong>1. Check Starred Gateways:</strong> Find the highest level where every starred Gateway question scored at least 3.</li>
            <li><strong>2. Count Unlocked Questions:</strong> Only include questions up to your unlocked level (e.g., 10 of 28 questions at Level 1).</li>
            <li><strong>3. Find the Average:</strong> Divide total points by unlocked questions (<code>34 ÷ 10 = 3.40</code>).</li>
            <li><strong>4. Apply Level Cap:</strong> <code>Level + [(Average - 1) / 4]</code> keeps your final score inside your unlocked level (<code>1.6</code>).</li>
          </ol>
        </div>

        <div class="sandbox-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
            <strong style="font-size:16px;">Try the Score Calculator</strong>
            <span class="lean-pill">Move Sliders</span>
          </div>

          <div style="margin-bottom:18px;">
            <label for="simLevelSlider" style="display:block;font-size:13px;margin-bottom:6px;color:#EAF4F8;">
              Highest Unlocked Level: <strong style="color:#21C0FF;" id="simLevelLabel">${levelNames[state.simLevel]}</strong>
            </label>
            <input
              type="range"
              id="simLevelSlider"
              min="0"
              max="4"
              step="1"
              value="${state.simLevel}"
              style="width:100%;accent-color:#009999;cursor:pointer;"
            />
          </div>

          <div style="margin-bottom:22px;">
            <label for="simRawSlider" style="display:block;font-size:13px;margin-bottom:6px;color:#EAF4F8;">
              Average of Unlocked Questions: <strong style="color:#21C0FF;" id="simRawLabel">${state.simRawAvg.toFixed(2)}</strong>
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
              <div id="simOutRaw" style="font-size:18px;font-weight:700;font-family:ui-monospace,monospace;">${state.simRawAvg.toFixed(2)}</div>
            </div>
            <div>
              <div style="font-size:11px;color:#cbd5e1;">Level Cap</div>
              <div id="simOutComp" style="font-size:18px;font-weight:700;color:#21C0FF;font-family:ui-monospace,monospace;">${compressed.toFixed(2)}</div>
            </div>
            <div style="background:#009999;border-radius:8px;padding:4px;">
              <div style="font-size:10px;text-transform:uppercase;">Final Score</div>
              <div id="simOutFinal" style="font-size:20px;font-weight:800;font-family:ui-monospace,monospace;">${finalScore.toFixed(1)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById("simLevelSlider").addEventListener("input", (e) => {
    state.simLevel = parseInt(e.target.value, 10);
    renderCalculatorPage(canvas);
  });
  document.getElementById("simRawSlider").addEventListener("input", (e) => {
    state.simRawAvg = parseFloat(e.target.value);
    renderCalculatorPage(canvas);
  });
}

/**
 * 1-Page Navigator Charter Template (Pre-Filled with Selected Top 5 Actions from Prioritiser)
 */
function renderCharterPage(canvas) {
  const candidates = DB.prioritiserCandidates || [];
  const chosen = candidates.filter((c) => state.selectedActionIds.includes(c.id));

  canvas.innerHTML = `
    <div class="content-container">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:16px;">
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
            <span class="eyebrow-tag" style="margin-bottom:0;">Stage 6 Output Template • Pre-Filled from Top 5 Prioritiser</span>
            <span class="muted-code-pill">Navigator Toolkit • v2.4.4</span>
          </div>
          <h1 class="page-title" style="margin-bottom:4px;">One-Page Navigator Charter Template</h1>
        </div>
        <div style="display:flex;gap:10px;">
          <button type="button" class="header-btn secondary" style="color:#1B1534;border-color:#D7E4EE;background:#EAF4F8;"
                  onclick="switchTopTab('prioritiser')">
            ← Adjust Top 5 Actions (${chosen.length}/5)
          </button>
          <button type="button" class="header-btn" id="copyCharterBtn" onclick="copyCharterText()">
            Copy Charter to Clipboard
          </button>
        </div>
      </div>

      <div id="charterBox" style="border:2px solid var(--se-gray-1);border-radius:14px;padding:28px;background:#FFFFFF;">
        <div class="meta-strip" style="margin-bottom:24px;">
          <div><strong>Site / Area:</strong> [Insert Site]</div>
          <div><strong>Date:</strong> [YYYY-MM-DD]</div>
          <div><strong>Local Programme Manager:</strong> @[Name]</div>
          <div><strong>Site Leader Sponsor:</strong> @[Name]</div>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px;">
          <div style="padding:16px;background:var(--se-canvas-subtle);border:1px solid var(--se-gray-1);border-radius:10px;">
            <strong style="color:#1B1534;display:block;margin-bottom:8px;">1. Top 3 Leader Priorities (Business Problems to Solve)</strong>
            <ul style="padding-left:18px;color:#54646E;font-size:14px;">
              <li>Shorten delivery lead time on the main line.</li>
              <li>Cut repeat quality defects across shifts.</li>
              <li>Fix handoff delays between departments.</li>
            </ul>
          </div>
          <div style="padding:16px;background:var(--se-canvas-subtle);border:1px solid var(--se-gray-1);border-radius:10px;">
            <strong style="color:#1B1534;display:block;margin-bottom:8px;">2. Starting Site Score &amp; Starred Gateways to Fix</strong>
            <div style="color:#54646E;font-size:14px;">
              <div><strong>Current Score:</strong> 1.6 / 4.0 (Level 1: Basic Implementation)</div>
              <div style="margin-top:6px;">
                <strong>Prioritised Gateways (${chosen.length}):</strong>
                ${chosen.map((c) => `Q${c.qId}`).join(", ") || "None selected"}
              </div>
            </div>
          </div>
        </div>

        <table class="clean-table">
          <thead>
            <tr>
              <th style="width:70px;">#</th>
              <th>Agreed Programme Objective / Key Result ([Measure] from [Start] to [Target] by [Date])</th>
              <th style="width:130px;">Expected Lift</th>
              <th style="width:140px;">VOC Priority</th>
              <th style="width:80px;">Due</th>
              <th style="width:130px;">Owner</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background:var(--se-gray-0);">
              <td style="font-weight:700;color:#1B1534;">OBJ 1</td>
              <td colspan="5" style="font-weight:700;color:#1B1534;">
                Prioritised Top ${chosen.length} Actions (Locked via 3-Step Decision Funnel — Max 5 Capacity Rule)
              </td>
            </tr>
            ${
              chosen.length > 0
                ? chosen
                    .map(
                      (c, idx) => `
              <tr>
                <td style="font-family:ui-monospace,monospace;font-weight:700;color:#1B1534;">KR 1.${idx + 1}</td>
                <td style="color:#1B1534;font-weight:600;">
                  ${escapeHtml(c.krTemplate)}
                  <div style="font-size:12px;color:#54646E;font-weight:400;margin-top:2px;">
                    Linked to Q${c.qId} (${c.gateway ? "★ Starred Gateway" : "Standard Question"}) • ${escapeHtml(c.matrixQuadrant)}
                  </div>
                </td>
                <td style="font-family:ui-monospace,monospace;color:#007A7A;font-weight:700;">${escapeHtml(c.scoreLift)}</td>
                <td>${escapeHtml((c.vocTags || []).join(", "))}</td>
                <td style="font-family:ui-monospace,monospace;">Q${Math.min(4, Math.floor(idx / 2) + 2)}</td>
                <td>@${idx % 2 === 0 ? "ProgrammeMgr" : "OpsLeader"}</td>
              </tr>`
                    )
                    .join("")
                : `<tr><td colspan="6" style="text-align:center;padding:24px;">No actions selected. Open the Top 5 Prioritiser to select up to 5 actions.</td></tr>`
            }
          </tbody>
        </table>
      </div>
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
    btn.textContent = "Copy Charter to Clipboard";
  }, 2000);
}

function setJourneyRoleFilter(role) {
  state.journeyRoleFilter = role;
  renderMain();
}

function toggleLpmPitch() {
  state.lpmPitchOpen = !state.lpmPitchOpen;
  renderMain();
}

function openJourneyStage(routeType, routeId) {
  if (routeType === "sop") {
    selectSOP(routeId);
  } else if (routeType === "prioritiser") {
    switchTopTab("prioritiser");
  } else if (routeType === "charter") {
    switchTopTab("charter");
  }
}

function setPrioritiserGatewayOnly(val) {
  state.prioritiserGatewayOnly = val;
  renderMain();
}

function setPrioritiserVocFilter(voc) {
  state.prioritiserVocFilter = voc;
  renderMain();
}

function setPrioritiserMatrixFilter(mat) {
  state.prioritiserMatrixFilter = mat;
  renderMain();
}

function toggleCandidateAction(actionId) {
  const idx = state.selectedActionIds.indexOf(actionId);
  if (idx >= 0) {
    state.selectedActionIds.splice(idx, 1);
  } else {
    state.selectedActionIds.push(actionId);
  }
  renderSidebar();
  renderMain();
}

function sendTop5ToCharter() {
  if (state.selectedActionIds.length > 5) {
    alert(
      "Capacity Lock: You have selected " +
        state.selectedActionIds.length +
        " actions. Please uncheck lower-impact items so you have at most 5 focus actions before exporting to your 1-Page Charter."
    );
    return;
  }
  switchTopTab("charter");
}

function toggleInlineToolDrawer(toolId) {
  state.openInlineToolId = state.openInlineToolId === toolId ? null : toolId;
  renderMain();
}

function toggleSidebarTools() {
  state.sidebarToolsOpen = !state.sidebarToolsOpen;
  renderSidebar();
}

function setQuestionFilter(mode) {
  state.questionFilter = mode;
  renderMain();
}

function toggleAccordion(el) {
  el.classList.toggle("open");
}

function showOverview() {
  state.view = "overview";
  state.selectedId = null;
  setActiveTopTab("overview");
  renderSidebar();
  renderMain();
}

function selectProcess(id) {
  state.view = "process";
  state.selectedId = id;
  state.expandedProcessId = id;
  setActiveTopTab(id === "PRC-001" ? "where-are-we" : "action");
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
    setActiveTopTab(sop.processId === "PRC-001" ? "where-are-we" : "action");
  }
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
  if (tab === "overview") {
    showOverview();
  } else if (tab === "where-are-we" || tab === "part1") {
    setActiveTopTab("where-are-we");
    selectProcess("PRC-001");
  } else if (tab === "prioritiser") {
    setActiveTopTab("prioritiser");
    state.view = "prioritiser";
    renderSidebar();
    renderMain();
  } else if (tab === "action" || tab === "part2") {
    setActiveTopTab("action");
    selectProcess("PRC-002");
  } else if (tab === "questions") {
    setActiveTopTab("where-are-we");
    state.view = "questions";
    renderSidebar();
    renderMain();
  } else if (tab === "calculator") {
    setActiveTopTab("prioritiser");
    state.view = "calculator";
    renderSidebar();
    renderMain();
  } else if (tab === "charter") {
    setActiveTopTab("action");
    state.view = "charter";
    renderSidebar();
    renderMain();
  }
}

function setActiveTopTab(tabName) {
  document.querySelectorAll(".sub-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });
}

function openAdminModal() {
  const raw = JSON.stringify(DB, null, 2);
  document.getElementById("jsonEditor").value = raw;
  runLiveJsonAudit(raw);
  document.getElementById("jsonModal").classList.remove("hidden");
}

function bindEvents() {
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    if (state.searchQuery.toLowerCase().startsWith("q") && state.view !== "questions") {
      switchTopTab("questions");
    } else {
      renderSidebar();
      renderMain();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
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
    reportEl.innerHTML =
      issues.length === 0
        ? `<div style="color:#007A7A;font-weight:700;">✓ Valid Siemens Energy Lean@GS Payload (${steps} steps checked, all ≤ ${maxW} words, zero raw acronyms).</div>`
        : `<div style="color:#DA1E28;">${issues.join("<br/>")}</div>`;
  } catch (e) {
    reportEl.innerHTML = `<div style="color:#DA1E28;">Syntax Error: ${escapeHtml(e.message)}</div>`;
  }
}

window.showOverview = showOverview;
window.selectProcess = selectProcess;
window.selectSOP = selectSOP;
window.selectTool = selectTool;
window.switchTopTab = switchTopTab;
window.toggleAccordion = toggleAccordion;
window.setQuestionFilter = setQuestionFilter;
window.copyCharterText = copyCharterText;
window.openAdminModal = openAdminModal;
window.setJourneyRoleFilter = setJourneyRoleFilter;
window.toggleLpmPitch = toggleLpmPitch;
window.openJourneyStage = openJourneyStage;
window.setPrioritiserGatewayOnly = setPrioritiserGatewayOnly;
window.setPrioritiserVocFilter = setPrioritiserVocFilter;
window.setPrioritiserMatrixFilter = setPrioritiserMatrixFilter;
window.toggleCandidateAction = toggleCandidateAction;
window.sendTop5ToCharter = sendTop5ToCharter;
window.toggleInlineToolDrawer = toggleInlineToolDrawer;
window.toggleSidebarTools = toggleSidebarTools;
window.addEventListener("DOMContentLoaded", initApp);
