# Siemens Energy • Documentation, Playbook & SOP Guide Platform
## Design System, UX & Plain-English Style Guide (`DESIGN_GUIDE.md`)

> **Purpose:** Platform-wide Look & Feel, Information Architecture, Editorial, and Functionality standard. This guide is **playbook-agnostic** and applies to every guide created or hosted on the platform.  
> **Enforcement:** Automated via [`scripts/validate-guides.js`](./scripts/validate-guides.js) and surfaced inside the in-app **Authoring Studio (`Tab 4: Design & Style Guide`)**.

---

## Section A: Look & Feel — Siemens Energy Visual Design System

1. **Brand Header & Signature Accents:**
   - **Header Gradient:** `linear-gradient(90deg, #1B1534 0%, #4D217A 100%)` paired with a stacked two-line geometric SVG wordmark (**SIEMENS** in Petrol `#009999` + **energy** in crisp `#FFFFFF`).
   - **Signature Fading Petrol Line:** Full-width horizontal divider (`#009999` fading to transparent) separating the top header bar from the navigation bar.
   - **Canvas & Surface Palette:** Generous `#FFFFFF` and `#F8FAFC` light backgrounds, `#D7E4EE` subtle card borders, and `#EAF4F8` ice-blue visual framing cards.
   - **Accessible Typography & Interactive Tokens:** Deep purple (`#1B1534`) primary headings and body copy, slate (`#54646E`) secondary copy, Bright Purple (`#8A00E5`, hover `#641E8C`) primary interactive accents, and accessible Petrol (`#009999` fills / `#007A7A` text on light backgrounds).

2. **True-to-App Button Colour Badges (`buttonsReference`):**
   - Whenever documenting software controls in a **"Buttons & Controls on This Screen"** table, render each button badge in the exact colour it uses in the target application:
     - **Petrol (`#009999` bg, `#FFFFFF` text):** Primary export, download, save, and active standard toggles.
     - **Bright Purple (`#8A00E5` bg, `#FFFFFF` text):** Primary workflow progression (`Next Step →`), upload, and evaluation actions.
     - **Deep Plum / Indigo (`#2E1065` bg, `#FFFFFF` text):** Secondary utility actions, imports, filters, and form controls.
     - **Danger Red (`#DC2626` bg, `#FFFFFF` text):** Destructive actions (`Reset`, `Clear`, `Delete`).
     - **Dark Sidebar Slate (`#1E1B4B` bg, `#E2E8F0` text):** Sidebar navigation and session management links.
     - **Dark Teal Accent (`#1B1534` bg, `#2DD4BF` text, `#0D9488` border):** Featured external companion or storybook links.

---

## Section B: Information Architecture & The "10-Second Naive Colleague" Standard

Every screen must make immediate sense within **10 seconds** to a colleague who does not know internal processes, acronyms, or software menus:

1. **Universal 4-Tab Navigation Shell:**
   - Every playbook uses the same predictable 4-tab structure:
     1. **`1. End-to-End Journey`** — Executive purpose, Golden Principle callout box, live application launchers, cross-reference links, and the connected visual Journey Map.
     2. **`2. Step-by-Step Guides`** — Dedicated, scannable SOP runbooks with pre-flight setup checklists, 2-column visual steps, button reference tables, and troubleshooting.
     3. **`3. Decision & Priority Tools`** — Business-priority alignment guides, decision matrices, quality rubrics, and interactive calculators.
     4. **`4. Templates & Reference`** — Annotated 1-page templates, field-by-field guides, and master reference matrices.

2. **Dynamic `N`-Stage Journey Maps & 1-to-1 Stage-to-SOP Mapping Rule:**
   - **Flexible `N`-Stage Flow:** Journey Maps dynamically support `N` stages to match the real operational sequence of any process.
   - **1-to-1 Stage-to-SOP Mapping:** Every stage on a Playbook's Journey Map must have its own dedicated, standalone Step-by-Step Guide page in `2. Step-by-Step Guides`. Never bundle multiple journey stages into a single combined SOP page, and never route users through intermediate cover pages.
   - **Separate Playbooks with Cross-References:** Keep distinct applications or workflows in separate, focused playbooks in the top Playbook Switcher, and use **1-Click Cross-Reference Cards** on Tab 1 and in the Left Sidebar when workflows connect.

3. **Strict Card Density Standard (Clean 4-Element Journey Stage Cards):**
   - Overview stage cards must never look like database records, compliance checklists, or technical plumbing. Each card displays only **4 human elements**:
     1. **Stage Number & Plain-English Title** (what this stage is called).
     2. **What Happens** (1–2 sentence conversational summary).
     3. **Who Is Involved & Tool Used** (clear role ownership + clickable `Launch Live Tool ↗` button).
     4. **What You Finish With** (tangible human outcome).
   - **Zero Overview Clutter:** Never display raw file extensions (`.csv`, `.json`), compliance stamps (`MANDATORY` / `OPTIONAL`), or technical handoff labels (`Input → Output:`) on Tab 1 overview cards.

4. **Zero Leaked Database IDs & Zero Version Numbers Rule:**
   - Internal relational keys (`PLB-xxx`, `PRC-xxx`, `SOP-xxx`, `TOL-xxx`, `ROL-xxx`) and software version numbers (`v1.0`, `v2.4.0`) must **never** appear in user-facing titles, breadcrumbs, Kit Bags, or visual diagrams.

---

## Section C: Step-by-Step SOP, Visual Authenticity & Editorial Standards

1. **≤ 20-Word Simplified Technical English (STE) Rule:**
   - Every SOP step's primary `action` sentence must be **20 words or fewer**.
   - Every step must begin with an active **imperative verb** (*Click, Open, Select, Review, Write, Assign, Upload, Export, Facilitate, Load*).

2. **Zero Unexplained Acronyms & Business-First Framing:**
   - Never use raw, unexplained acronyms in step actions. Spell terms out in plain English first.
   - Always lead decision guides and templates with concrete **business and operational outcomes** rather than abstract scoring mechanics, and recommend focusing on **2 to 3 key actions at a time** (with a hard ceiling of 5) so teams finish what they start.

3. **Predictable Structural Anchors on Every SOP Page:**
   - **Top Kit Bag:** Displays *Who Leads & Supports*, *Point-of-Use Tool* (with expandable quick-fix drawer and `Launch Live Tool ↗` button), *Input Artifact*, and *Output Artifact*.
   - **1. Before You Begin (Setup Checklist):** Interactive pre-flight checkboxes highlighting critical prerequisites (such as mandatory header/metadata fields).
   - **2. Step-by-Step Instructions:** 2-column split rows pairing the action command, supporting detail, and **Good Practice Coaching Tip** on the left with the step visual on the right.
   - **3. Buttons & Controls on This Screen:** Scannable table (`Button / Control Name` | `Where It Is` | `What It Does & When to Use It`) containing only the controls belonging to that specific screen.
   - **4. Common Problems & Quick Fixes:** Self-service troubleshooting table (`What You See` | `Why It Happens` | `How to Fix It Now`).

4. **Visual Authenticity & Post-Upload UI State Rule:**
   - **Mode 1 — Real Application Screenshots (`type: "image"`):** Whenever a step instructs the user to click or type in a software application, display a real screenshot of that screen with a positioned highlight box and callout label. If a screen requires an uploaded file or session state to reveal its workspace, load sample data first so the real controls are visible.
   - **Mode 2 — Clean Text + Coaching Card (`type: "none"`):** Whenever a step describes a human discussion, facilitation habit, or physical check rather than a software click, set `visual.type = "none"` so the right-hand column renders an elevated **Good Practice Coaching Card**. Never draw fake wireframe UI buttons for human rules.
   - **"Guide, Don't Duplicate the App" Rule:** The platform is an interactive coaching and documentation guide—never clone stateful software forms or data-entry tables that belong inside the live operational tool itself.

---

## Section D: Authoring Studio, AI Generator & Controlled 3-Tier Storage Functionality

1. **Prominent Authoring & First-Time Onboarding UI:**
   - Keep **`👋 First Time Here?`** (4-step onboarding banner), **`✦ Open Authoring Studio`**, **`⬆ Upload Guide (.json)`**, and **`⬇ Export Guide ▾`** prominently accessible in the Top Header Bar and Left Sidebar (never hidden in a footer).
   - Provide concise, plain-English hover tooltips (`data-tooltip`) across all primary navigation and authoring controls.

2. **Full-Viewport Split-Screen Authoring Studio (`96vw × 94vh`):**
   - Opens as a widescreen `96vw × 94vh` workspace (with a `⛶ Fullscreen` toggle) and independently scrolling left/right split panes:
     - **Tab 1 (`Playbook & Journey Builder`):** Create/edit playbooks, Golden Principles, and dynamic `N`-stage Journey Maps with a live WYSIWYG preview.
     - **Tab 2 (`SOP & Step WYSIWYG Editor`):** Edit SOPs and steps with live 20-word counter pills, active-verb/acronym Poka-Yoke checks, `Ctrl+V` clipboard screenshot paste (auto-compressed to Base64), and click-to-place highlight callout boxes.
     - **Tab 3 (`✨ AI Playbook Generator & JSON Importer`):** 3-step self-service workflow: (1) Enter topic + rough notes and copy the schema-enforced AI prompt for M365 Copilot / Gemini; (2) Paste the AI's JSON output into the importer (auto-stripping markdown fences and offering 1-click minor schema/ID auto-fix); (3) Validate and import directly into Tab 1/Tab 2.
     - **Tab 4 (`Design & Style Guide`):** In-app reference of these platform design, UX, and functionality standards.

3. **3-Tier Static-Host Storage & Controlled Server Release Governance:**
   - **Tier 1 — Browser Draft (`localStorage` — All Authors):** Edits auto-save immediately in the author's browser with a visible `● Local Draft Active` badge.
   - **Tier 2 — Single-Playbook Bundle (`.leanguide.json` — All Authors):** Packages only the active Playbook (plus its linked SOPs, Tools, Roles, and embedded Base64 screenshots) into a portable `<Playbook-Slug>.leanguide.json` file. Colleagues can click `⬆ Upload Guide (.json)` to merge a playbook into their browser library without overwriting existing playbooks.
   - **Tier 3 — Controlled Master Library Release (`guides.json` — App Owner Only):** Server release and repository upload is a **controlled governance step** and is **not** performed directly by individual authors. When a new or updated guide is ready for official publication, **authors send their exported `.leanguide.json` or `guides.json` update to the App Owner**, who runs `node scripts/validate-guides.js` and deploys the updated master library to the corporate server.

---

## Section E: Plain-English "Red Pen" Editorial Examples (Agnostic Bad vs. Good Copy)

| ❌ Avoid (Jargon, Tech Plumbing & Compliance Policing) | ✅ Use Instead (Plain Human English & Outcome-Led Coaching) |
| :--- | :--- |
| *"Execute PRC-002 Calibration in v2.4.1 — MANDATORY GATE"* | **"Complete the baseline self-assessment with your team"** |
| *"Input → Output: Raw export_payload.csv / .json"* | **"What you finish with: Clear baseline summary ready for review"** |
| *"The configuration parameters should be verified by the user prior to export."* | **"Check the header details before clicking Export."** *(Active verb start, ≤ 20 words)* |
| *"Select all 15 open items from the diagnostic list."* | **"Focus on 2 to 3 high-impact actions at a time (maximum 5) so the team finishes what they start."** |
| *"Bundling Stages 4, 5, and 6 into a single combined SOP page"* | **"1-to-1 Stage-to-SOP Mapping: Give every Journey Stage its own dedicated Step-by-Step Guide page"** |
