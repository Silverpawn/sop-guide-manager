# Siemens Energy • Lean@GS Documentation, Playbook & SOP Guide Manager

A **Snowflake-style Documentation Portal** styled with the **Siemens Energy Web UI Design System** (`#1B1534` → `#4D217A` brand gradient, `#009999` Siemens Petrol, `#8A00E5` Bright Purple, and generous `#FFFFFF` white space) that builds interactive user guides, process hubs, tool references, and visual SOP runbooks from a relational JSON payload ([`data/guides.json`](data/guides.json) and offline [`data/fallback-db.js`](data/fallback-db.js)).

---

## 1. Project Overview & Core Purpose
**Siemens Energy — Lean@GS Documentation, Playbook & SOP Guide Manager**
- **What it is:** A self-contained, JSON-driven interactive documentation and coaching platform built for the Siemens Energy Gas Services (Lean@GS) programme.
- **Why we built it:** Replaces static, jargon-heavy Word/PDF manuals with a role-based, end-to-end operational journey that passes the **"10-Second Naive Colleague Test"** (within 10 seconds of landing on any screen, a user knows *what* they are doing, *why* it matters to the business, *where* to start, and *which* live tool to launch).
- **Core Operational Philosophy:**
  > *"The goal isn't to improve the maturity score. The goal is to improve the business."*
  > The Maturity Assessment establishes current Lean capability and gaps (Stages 1–2). The Voice of the Customer captures critical business priorities—Lead Time, Quality, Throughput, Cost, Overheads, Inventory, and Complexity (Stage 3). The Navigator process brings the two together in a leadership workshop (Stage 4) to agree on a focused 1-Page Charter of **2 to 3 key actions at a time** (Stage 5) and an owned Action Plan (Stage 6).

### Core Usability Pillars
1. **Visual-First Design:** Every SOP step pairs its instruction with real application screenshots featuring interactive highlight boxes and callout pills, a clean coaching card for human/discussion rules, or a declarative SVG diagram.
2. **Radical Text Brevity:** Enforces the **≤20-word Simplified Technical English rule**, active-voice imperative commands, and zero raw acronyms via [`scripts/validate-guides.js`](scripts/validate-guides.js).
3. **Task-Focused + Value-Add Coaching:** Organizes documentation around what the user wants to achieve and includes **Lean@GS Coaching Tips** on every step.
4. **Predictable Structural Anchors & First-Time Onboarding:** Fixed **Searchable Table of Contents**, **Getting Started (Pre-Flight Setup)**, **Step-by-Step Instructions**, **Self-Service Troubleshooting** tables, floating **First-Time Colleague Tooltips**, and a **`👋 First Time Here?`** 4-step Quick-Start onboarding strip.

---

## 2. Connected Intranet Applications & Playbook Lineup
The platform hosts **5 distinct Playbooks** selectable from the top Playbook Switcher, with 1-click cross-reference links and direct launchers to our 3 live corporate intranet applications:

### Live Corporate Intranet Tools Embedded Across the Platform
1. **Lean@GS Navigator Toolkit:** `https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/`
2. **Standalone GS Lean Maturity & Storybook:** `https://megblcntpvc72.ad101.siemens-energy.net/gs-lean-maturity/` (and Storybook: `https://share.gemini.google/UjLQiIQXFbgc`)
3. **Lean@GS PM Maturity Hub:** `https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/`

### The 5 Built-In Playbooks ([`data/guides.json`](data/guides.json))
1. **`PLB-001` — Lean@GS Navigator Toolkit Guide (6-Stage Process):**
   - Covers the end-to-end leadership alignment journey inside `Navigator Toolkit`:
     `1. Maturity Assessment → 2. Analysis (Analysis Report) → 3. Voice of the Customer (VOC Input) → 4. Navigator Workshop (Workshop Guide) → 5. Charter (Charter Input & Roadmaps) → 6. Action Plan (Action Log)`
   - **Role Ownership:** Owned and led end-to-end by the **Local Programme Manager (LPM)** with their Site Leadership Team. After the first-time assessment calibration, the **Lean Core Team** serves as optional coaching/facilitation support (and files official archive copies into the `'600 Maturity Submissions'` folder).
   - **Included SOP Runbooks:**
     - `SOP-001`: Calibrate and Score All 28 Site Questions in Pairs (5-step ground rules, mandatory `Org` Code & `Date of Assessment` header check, 70% site rule, `'600 Maturity Submissions'` archive rule)
     - `SOP-003`: Prepare the Navigator Workshop Inputs (`Analysis Report` post-upload workspace & `VOC Input` leader interviews)
     - `SOP-004`: Facilitate the Half-Day Workshop, Write OKRs, and Track Monthly (`Workshop Guide`, `Charter Input`, `Action Log`)
2. **`PLB-MATURITY` — Standalone GS Lean Maturity & Storybook Guide:**
   - Dedicated 4-stage guide for teams exploring the `Maturity Model Storybook`, running a standalone 28-question capability self-assessment (`New Standard`), reviewing the 10-theme radar dashboard, and exporting `.json` / `.csv` files (`SOP-009` & `SOP-010`).
3. **`PLB-PMHUB` — Lean@GS PM Maturity Hub Guide:**
   - Dedicated 4-stage guide aligned 1-to-1 with the `PM Maturity Hub` sidebar (`SOP-005` through `SOP-008`):
     - **Phase 1: Assess** (`Maturity Assessment`, `Maturity Explainer`, `Score Explainer`)
     - **Phase 2: Visualize** (`Metro Journey`, `The 4 Pillars [Live]`, `Pillars [Static]`)
     - **Phase 3: Plan** (`Strategy Builder` & `↳ Simulator`)
     - **Utilities** (`CSV to JSON Fixer`)
4. **`PLB-AUTHOR` — How to Build & Share a Lean@GS Guide (Authoring Masterclass):**
   - Self-referential meta-playbook (`SOP-AUTH-1` through `SOP-AUTH-3`) teaching colleagues how to plan, draft, illustrate, validate, and share new playbooks using the built-in WYSIWYG Authoring Studio and AI Generator.
5. **`PLB-DEMO` — Demo Example: The Office Brew Run:**
   - A lighthearted, zero-jargon everyday playbook (`SOP-DEMO-1` & `SOP-DEMO-2`) used for stakeholder demonstrations so teams can evaluate the platform UX without getting sidetracked by internal Lean process debates.

---

## 3. Universal 4-Tab Information Architecture
Every playbook follows a consistent 4-tab navigation shell:
- **Tab 1: `1. End-to-End Journey`** — Purpose banner, Golden Principle quote, live intranet tool launchers, 1-click cross-reference cards between operational playbooks, "Before You Start" principles, and a dynamic `N`-stage connected Journey Map (`Who-When-What-How`).
- **Tab 2: `2. Step-by-Step Guides`** — Direct access to each SOP with a top **Kit Bag** (Lead/Support roles, Point-of-Use Tool launcher, Inputs/Outputs), **Pre-Flight Setup Checklist**, **2-Column Step-by-Step Instructions** (with real app screenshots or coaching cards), **Quick-Fix Troubleshooting Table**, and a colour-matched **"Buttons & Controls on This Screen" Reference Table**.
- **Tab 3: `3. Decision & Priority Tools`** — Business-Priority-First **"Vital Few (2–3 Key Actions)"** decision guidance mapping operational metrics (*Lead Time, Quality, Throughput, Cost, Overheads, Inventory, Complexity*) to supporting Lean maturity capabilities and Foundation Gateways (★), plus the interactive Gateway Score Cap Calculator (`Level + [(Average - 1) / 4]`).
- **Tab 4: `4. Templates & Reference`** — Includes the **Annotated One-Page Navigator Charter Field Guide** (with one-click clipboard copy) and the interactive **16:9 1-Page 28-Question & 1–5 Scoring Criteria Matrix** (complete with `New Standard (2026)` / `Old Standard` toggle, `Full Verbatim` / `Executive Concise` toggle, Q1–Q3 binary foundation gates, 10 colour-coded theme pills, 17 ★ gateway highlights, and native **1-Slide PPTX, 2-Slide PPTX, 4K PNG, and 1-Page PDF exporters**).

---

## 4. Full-Viewport WYSIWYG Authoring Studio & 3-Tier Storage Model
Accessible directly from the **`✦ Authoring Studio`**, **`⬆ Upload Guide`**, and **`⬇ Export Guide`** controls in the top header and left sidebar (opening in a spacious `96vw × 94vh` split-screen workspace with a `⛶ Fullscreen` toggle):
- **Tab 1 (`Playbook & Journey Builder`):** Create or edit playbooks and dynamically add/reorder/delete `N` journey stages with guided plain-English micro-prompts and a live side-by-side WYSIWYG preview.
- **Tab 2 (`SOP & Step WYSIWYG Editor`):** Create/edit SOPs, checklists, troubleshooting rows, and steps with live word-count & active-verb Poka-Yoke badges, plus 3 visual modes:
  1. **Real Screenshot (`Ctrl+V` clipboard paste or upload)** with interactive click-to-place highlight callout boxes.
  2. **Clean Text + Coaching Mode** (for human/discussion rules where no software click exists).
  3. **Declarative Diagram Mode**.
- **Tab 3 (`✨ AI Playbook Generator & JSON Importer`):**
  1. Enter a topic and paste rough notes/SOP text → Click **`📋 Copy Ready-to-Use AI Prompt`** (pre-loaded with our JSON schema and [`DESIGN_GUIDE.md`](DESIGN_GUIDE.md) rules for M365 Copilot or Gemini).
  2. Paste the AI's JSON response back into the right-hand pane (automatically strips ```` ```json ```` markdown fences and auto-fixes minor ID gaps).
  3. Click **`✓ Import & Open in WYSIWYG Studio`** to validate and load immediately.
- **Tab 4 (`Design & Style Guide`):** In-app view of [`DESIGN_GUIDE.md`](DESIGN_GUIDE.md) and the Plain-English Red Pen Lexicon.

### 3-Tier Static-Host Storage & Sharing Workflow (M365 Ready)
1. **Tier 1 — Instant Browser Draft (`localStorage`):** All edits and pasted screenshots auto-save locally in the browser (`SE_LEAN_GS_GUIDES_DB_V22`) with a live header indicator (`Local Draft Active`).
2. **Tier 2 — Single-Playbook Sharing (`.leanguide.json`):** Authors click **`⬇ Download Current Playbook Only (.leanguide.json)`** to share a single self-contained playbook file via Teams, Email, or SharePoint. Colleagues click **`⬆ Upload Guide (.json)`** to merge it into their browser library without overwriting other playbooks.
3. **Tier 3 — Master Server Release ([`data/guides.json`](data/guides.json)):** Publishers click **`⬇ Download Master Library (guides.json)`**, replace `/data/guides.json` in the repository, run `node scripts/validate-guides.js`, and deploy to the corporate server (`megblcntpvc72`).
   - 📩 **Official Master Library Inclusion:** **New guides can be passed to Brian Johns for inclusion** in the official Lean@GS corporate library.

---

## 5. Living Governance & Automated Guardrails ([`DESIGN_GUIDE.md`](DESIGN_GUIDE.md) & [`scripts/validate-guides.js`](scripts/validate-guides.js))
All content and UI changes are governed by [`DESIGN_GUIDE.md`](DESIGN_GUIDE.md) and automatically checked via `node scripts/validate-guides.js`:
- **Simplified Technical English (STE):** Every SOP step primary command must be **≤ 20 words** and begin with an **imperative action verb**.
- **Zero Unexplained Acronyms:** All acronyms must be expanded on use or defined in `glossary`.
- **Zero Software Version Numbers:** Version strings (`v6.0.0`, `v2.4.4`) are banned in user-facing text since live links always serve the latest web release.
- **Zero Leaked Database IDs:** Relational Snowflake IDs (`PLB-xxx`, `PRC-xxx`, `SOP-xxx`, `TOL-xxx`, `ROL-xxx`) are used strictly internally inside [`data/guides.json`](data/guides.json) and never displayed on user-facing cards or breadcrumbs.
- **Mandatory Assessment Header Rule:** Every Maturity Assessment guide explicitly instructs assessors to verify the **Organisation Code (`Org`)** and **Date of Assessment** in the top header before scoring so longitudinal comparisons and `'600 Maturity Submissions'` archive files remain accurate.
- **Visual Authenticity:** Software steps use authentic application screenshots (`navigator-toolkit`, `pm-maturity-hub`, `gs-lean-maturity`) and true-to-app button badge colours (`#009999` Petrol, `#8A00E5` Bright Purple, `#2E1065` Deep Plum, `#DC2626` Danger Red).

---

## 6. Quick Start, Repository Structure & Validation CLI

### Quick Start & Local Development
You can open [`index.html`](index.html) directly in your browser (supported offline via [`data/fallback-db.js`](data/fallback-db.js) for M365 SharePoint / OneDrive / local `file://` portability), or run a local web server:

```bash
# Start local development server on http://localhost:3000
npm start

# Run automated DESIGN_GUIDE.md & Snowflake relational schema audit
npm run validate
# (or: node scripts/validate-guides.js)

# Scaffold a new guide template from the CLI
npm run new-guide
```

### Key Repository Files
- [`index.html`](index.html) — Main application shell, Top Header Bar (`👋 First Time Here?`, `✦ Authoring Studio`, `⬆ Upload Guide`, `⬇ Export Guide ▾`), Universal 4-Tab Navigation, and Full-Viewport (`96vw × 94vh`) Authoring Studio modal.
- [`styles.css`](styles.css) — Siemens Energy Web UI Design System styles, WCAG AA/AAA accessible contrast tokens, 16:9 1-Page Scoring Matrix layout, and floating tooltip rules.
- [`app.js`](app.js) — Relational rendering engine, 16:9 1-Page 28-Question Scoring Matrix (`PPTX` / `PNG` / `PDF` export engine), WYSIWYG Authoring Studio, AI Playbook Generator & JSON Importer, and 3-Tier `.leanguide.json` / `guides.json` storage manager.
- [`data/guides.json`](data/guides.json) — Master relational JSON database containing all 5 Playbooks, 6 Processes, 14 Tools, 7 Roles, and 13 SOPs.
- [`data/fallback-db.js`](data/fallback-db.js) — Auto-synchronized JavaScript fallback wrapper of `guides.json` enabling zero-server execution over `file://` and M365 SharePoint/OneDrive.
- [`DESIGN_GUIDE.md`](DESIGN_GUIDE.md) — Authoritative Living Style Guide, 10-Second Naive Colleague Test, Red Pen Plain-English Lexicon, and UI/content governance rules.
- [`scripts/validate-guides.js`](scripts/validate-guides.js) — AutomatedPokayoke linter enforcing the ≤20-word STE rule, active-verb check, acronym guardrails, relational integrity, and [`DESIGN_GUIDE.md`](DESIGN_GUIDE.md) compliance.
