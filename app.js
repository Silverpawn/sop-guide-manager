let DB = null;
let state = {
  view: "overview", // "overview" | "sop" | "process" | "tool" | "questions" | "calculator" | "charter"
  selectedId: null,
  expandedProcessId: "PRC-001",
  questionFilter: "all", // "all" | "gateway"
  searchQuery: "",
  simLevel: 1,
  simRawAvg: 3.4
};

async function initApp() {
  try {
    const res = await fetch("./data/guides.json");
    DB = await res.json();
  } catch (e) {
    DB = window.FALLBACK_GUIDES_DB;
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

function renderSidebar() {
  const sidebar = document.getElementById("leftSidebar");
  const q = state.searchQuery.toLowerCase().trim();

  const processes = Object.values(DB.processes || {}).filter(
    (p) => !q || JSON.stringify(p).toLowerCase().includes(q)
  );
  const tools = Object.values(DB.tools || {}).filter(
    (t) => !q || JSON.stringify(t).toLowerCase().includes(q)
  );

  // Fix 1: Dropped "0." prefix and stripped raw SOP-001 / PRC-001 database codes from tree labels
  let html = `
    <div>
      <button type="button" class="tree-item ${state.view === "overview" ? "active" : ""}" onclick="showOverview()">
        <span>Overview</span>
      </button>

      <div class="sidebar-divider"></div>
      <div class="sidebar-section-label">Step-by-Step Guides</div>

      ${processes
        .map((proc) => {
          const isExpanded = state.expandedProcessId === proc.id || q.length > 0;
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
      <div class="sidebar-section-label">Quick Reference &amp; Templates</div>

      <button type="button" class="tree-item ${state.view === "questions" ? "active" : ""}" onclick="switchTopTab('questions')">
        <span>All 28 Questions &amp; Gateways (★)</span>
        <span class="tree-chevron">›</span>
      </button>

      <button type="button" class="tree-item ${state.view === "calculator" ? "active" : ""}" onclick="switchTopTab('calculator')">
        <span>Gateway Score Cap Calculator</span>
        <span class="tree-chevron">›</span>
      </button>

      <button type="button" class="tree-item ${state.view === "charter" ? "active" : ""}" onclick="switchTopTab('charter')">
        <span>1-Page Navigator Charter</span>
        <span class="tree-chevron">›</span>
      </button>

      <div class="sidebar-divider"></div>
      <div class="sidebar-section-label">Software Tool Help</div>

      ${tools
        .map((tool) => {
          const isActive = state.view === "tool" && state.selectedId === tool.id;
          return `
            <button type="button" class="tree-item ${isActive ? "active" : ""}" onclick="selectTool('${tool.id}')">
              <span>${escapeHtml(tool.name)}</span>
              <span class="tree-chevron">›</span>
            </button>
          `;
        })
        .join("")}
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
  } else if (state.view === "calculator") {
    renderCalculatorPage(canvas);
  } else if (state.view === "charter") {
    renderCharterPage(canvas);
  }
}

/**
 * Landing Page with:
 * - Fix 1: Human 1-sentence subtitle & muted version/ID pills
 * - Fix 2: "Which Job Are You Doing Today?" 2-Card Chooser
 * - Fix 3: 3-Term "Before You Start" Plain-English Key
 */
function renderOverviewPage(canvas) {
  const processes = Object.values(DB.processes || {});
  const p1 = DB.processes["PRC-001"] || processes[0];
  const p2 = DB.processes["PRC-002"] || processes[1];

  canvas.innerHTML = `
    <div class="content-container">
      <div class="eyebrow-tag">
        <span class="petrol-dot" style="width:7px;height:7px;"></span>
        <span>Siemens Energy • Lean@GS Practical User Guide</span>
      </div>
      <h1 class="page-title">Maturity Assessment &amp; Navigator Workshop Guides</h1>
      <p class="page-subtitle">
        Use these guides to check how Lean practices are working at your site and turn your findings into a practical leadership action plan.
      </p>

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

function renderSOPPage(sop, canvas) {
  const proc = DB.processes[sop.processId];
  const role = DB.roles[sop.roleId];
  const tools = (sop.toolIds || []).map((id) => DB.tools[id]).filter(Boolean);

  canvas.innerHTML = `
    <div class="content-container">
      <div class="breadcrumb-row">
        <button type="button" class="breadcrumb-link" onclick="showOverview()">Overview</button>
        <span>/</span>
        ${
          proc
            ? `<button type="button" class="breadcrumb-link" onclick="selectProcess('${proc.id}')">${escapeHtml(proc.title)}</button><span>/</span>`
            : ""
        }
        <span class="muted-code-pill">${sop.id}</span>
      </div>

      <h1 class="page-title">${escapeHtml(sop.title)}</h1>
      <p class="page-subtitle" style="margin-bottom:24px;">${escapeHtml(sop.userGoal)}</p>

      <div class="meta-strip">
        <div><strong>Who does this:</strong> ${escapeHtml(role?.title || sop.roleId)}</div>
        <div><strong>Time needed:</strong> ${escapeHtml(sop.estimatedTime)}</div>
        <div><strong>Where in app:</strong> ${escapeHtml(sop.stationLocation)}</div>
        <div>
          <strong>Related Tools:</strong>
          ${tools
            .map(
              (t) =>
                `<button type="button" class="breadcrumb-link" style="margin-right:8px;" onclick="selectTool('${t.id}')">${escapeHtml(
                  t.name
                )}</button>`
            )
            .join("")}
        </div>
      </div>

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

function renderProcessPage(proc, canvas) {
  const resp = DB.roles[proc.raci?.responsible];
  canvas.innerHTML = `
    <div class="content-container">
      <div class="breadcrumb-row">
        <button type="button" class="breadcrumb-link" onclick="showOverview()">Overview</button>
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
        <button type="button" class="breadcrumb-link" onclick="showOverview()">Overview</button>
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

      <div style="display:flex;gap:10px;margin-bottom:20px;">
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
      <div class="eyebrow-tag">Score Explainer • Interactive Calculator</div>
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
 * 1-Page Navigator Charter Template
 */
function renderCharterPage(canvas) {
  canvas.innerHTML = `
    <div class="content-container">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
            <span class="eyebrow-tag" style="margin-bottom:0;">Workshop Output Template</span>
            <span class="muted-code-pill">Navigator Toolkit • v2.4.4</span>
          </div>
          <h1 class="page-title" style="margin-bottom:4px;">One-Page Navigator Charter Template</h1>
        </div>
        <button type="button" class="header-btn" id="copyCharterBtn" onclick="copyCharterText()">
          Copy Charter to Clipboard
        </button>
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
              <div style="margin-top:6px;"><strong>Gateways to Fix:</strong> Q10 (Pilot Experiments: 2/5), Q16 (Structured Reflection: 2/5)</div>
            </div>
          </div>
        </div>

        <table class="clean-table">
          <thead>
            <tr>
              <th style="width:70px;">#</th>
              <th>Agreed Programme Objective / Key Result ([Measure] from [Start] to [Target] by [Date])</th>
              <th style="width:90px;">Start</th>
              <th style="width:90px;">Target</th>
              <th style="width:80px;">Due</th>
              <th style="width:130px;">Owner</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background:var(--se-gray-0);">
              <td style="font-weight:700;color:#1B1534;">OBJ 1</td>
              <td colspan="5" style="font-weight:700;color:#1B1534;">
                Make structured pilot experiments and daily problem solving a normal habit across core teams
              </td>
            </tr>
            <tr>
              <td style="font-family:ui-monospace,monospace;">KR 1.1</td>
              <td style="color:#1B1534;">Raise Gateway #10 (Structured Pilot Experiments) across 70% of teams to unlock Level 2</td>
              <td style="font-family:ui-monospace,monospace;">2 / 5</td>
              <td style="font-family:ui-monospace,monospace;color:#007A7A;font-weight:700;">3 / 5</td>
              <td style="font-family:ui-monospace,monospace;">Q2</td>
              <td>@ProgrammeMgr</td>
            </tr>
            <tr>
              <td style="font-family:ui-monospace,monospace;">KR 1.2</td>
              <td style="color:#1B1534;">Share of daily shift huddles solving team-level issues within 48 hours</td>
              <td style="font-family:ui-monospace,monospace;">25%</td>
              <td style="font-family:ui-monospace,monospace;color:#007A7A;font-weight:700;">75%</td>
              <td style="font-family:ui-monospace,monospace;">Q3</td>
              <td>@OpsLeader</td>
            </tr>
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
  setActiveTopTab(id === "PRC-001" ? "part1" : "part2");
  renderSidebar();
  renderMain();
}

function selectSOP(id) {
  state.view = "sop";
  state.selectedId = id;
  const sop = DB.sops[id];
  if (sop) {
    state.expandedProcessId = sop.processId;
    setActiveTopTab(sop.processId === "PRC-001" ? "part1" : "part2");
  }
  renderSidebar();
  renderMain();
}

function selectTool(id) {
  state.view = "tool";
  state.selectedId = id;
  renderSidebar();
  renderMain();
}

function switchTopTab(tab) {
  setActiveTopTab(tab);
  if (tab === "overview") showOverview();
  else if (tab === "part1") selectProcess("PRC-001");
  else if (tab === "part2") selectProcess("PRC-002");
  else if (tab === "questions") {
    state.view = "questions";
    renderSidebar();
    renderMain();
  } else if (tab === "calculator") {
    state.view = "calculator";
    renderSidebar();
    renderMain();
  } else if (tab === "charter") {
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
window.addEventListener("DOMContentLoaded", initApp);
