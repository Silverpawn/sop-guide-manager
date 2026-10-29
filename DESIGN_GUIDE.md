# Siemens Energy • Lean@GS Documentation & Playbook Platform
## Living Design & Plain-English Style Guide (`DESIGN_GUIDE.md`)

> **Status:** Mandatory Architectural & Editorial Standard (Stage 7 Locked)  
> **Enforcement:** Automated via [`scripts/validate-guides.js`](./scripts/validate-guides.js) and surfaced inside the in-app **Guide Authoring Studio (⚙️ → Tab 4: Design & Style Guide)**.  
> **Golden Rule:** Every prompt, playbook, journey map, decision tool, template, and SOP step MUST obey this document before code or JSON is written.

---

## Section A: The "Naive Colleague" 10-Second Rule & Dynamic N-Stage Journey Maps

Every screen must make immediate sense within **10 seconds** to a colleague who does not know our internal processes, acronyms, or software tools:

1. **Why am I here? (Business Need + Gateway Capability Rule):**
   - Every Playbook Overview starts with a plain-English description explaining what the journey helps you achieve in the real world, paired with a high-contrast **Golden Principle Callout Box**.
   - **Business Need + Gateway Capability Rule:** *"The goal is not to chase a maturity score; the goal is to improve the business. However, foundational Gateway capabilities (★) must be strengthened to unlock and sustain that business performance."*

2. **Dynamic N-Stage Journey Maps (Not Locked to 4 Cards):**
   - The application shell always uses the **4 Universal Top Navigation Tabs**:
     1. **`1. End-to-End Journey`** *(The single transparent process overview)*
     2. **`2. Step-by-Step Guides`** *(Direct routing to step-by-step SOPs)*
     3. **`3. Decision & Priority Tools`** *(Focus Action Prioritiser: 2–3 key actions at a time, max 5 ceiling)*
     4. **`4. Templates & Reference`** *(1-page charters, agendas, and reference lists)*
   - **Flexible N-Stage Rule:** *"Journey Maps support `N` stages to match the real operational sequence. For the Navigator Process (`PLB-001`), the chronological order is strictly locked to 6 stages: 1. Maturity Assessment → 2. Analysis → 3. Voice of the Customer (VOC) → 4. Navigator Workshop → 5. Charter → 6. Action Plan."*

3. **No Intermediate `PRC-xxx` Cover Pages, Zero Visible Database IDs & Zero Version Numbers Rule:**
   - **Direct Routing Rule:** *"Tab 1 (`1. End-to-End Journey`) is the single transparent process overview. Clicking a stage or sidebar guide routes directly to the Step-by-Step Guide—never through an intermediate `PRC-xxx` cover page."*
   - **Hidden Database ID Rule:** *"Internal database IDs (`PRC-001`, `SOP-001`, `PLB-001`, `TOL-001`, `ROL-001`) must NEVER appear in UI breadcrumbs, headers, Kit Bags, or SVG diagrams."*
   - **Zero Version Numbers Rule:** *"Never display software version numbers (e.g., `v6.0.0`, `v2.4.4`, `v1.0`) in Playbook titles, Stage cards, Tool names, Kit Bags, breadcrumbs, or SVG diagrams. Since our corporate web tools (`PM Maturity Hub`, `Navigator Toolkit`, `GS Lean Maturity`) are centrally hosted web apps, the live link always opens the latest version."*

4. **Two-Step Scoring Progression & Role Ownership Rule (LPM Owns the Process, Core Team is Optional Support):**
   - Never use `"MANDATORY"` stamps or `"Never score alone"` policing. Always use our two-step coaching progression:
     - **First-Time Assessment:** Local Programme Manager (LPM) scores together with a Lean Core Team partner to learn the tool and evidence standard.
     - **Ongoing Assessments:** LPM completes it with their Site Leadership Team as a capability self-assessment (not an audit).
   - **LPM Owns the Process (Core Team is Optional Support):** The **Local Programme Manager (LPM)** is the primary owner and driver of all 6 stages of the Navigator Process—including leading the Stage 4 Navigator Workshop and Stage 5 Charter with their Site Leadership Team. After the first-time Maturity Assessment calibration, the **Lean Core Team** is always **optional support / coaching**, never mandatory.

5. **Official Corporate Intranet Tool Links & Ground-Truth Menu Alignment Rule:**
   - Always store and render clickable **`"Launch Live Tool ↗"`** buttons (`target="_blank" rel="noopener noreferrer"`) on Stage Cards, Kit Bags, and Tool Reference drawers using these exact URLs:
     - **Maturity Model Storybook:** `https://share.gemini.google/UjLQiIQXFbgc`
     - **GS Lean Maturity Portal:** `https://megblcntpvc72.ad101.siemens-energy.net/gs-lean-maturity/`
     - **Lean@GS Navigator Toolkit:** `https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/`
     - **Lean@GS PM Maturity Hub:** `https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/`
   - **A. `Lean@GS Navigator Toolkit` (`PLB-001`) Ground-Truth Menu (`https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/`):**
     Contains these exact menu items (and **NEVER** `Score Explainer`, `Metro Journey`, `4 Pillars`, `Strategy Builder`, `Simulator`, or `CSV to JSON Fixer`):
     - `Maturity Model Storybook` (`https://share.gemini.google/UjLQiIQXFbgc`)
     - `Orientation`
     - `Process Overview`
     - `Maturity Assessment` (with sub-items: `↳ Maturity Explainer` and `↳ Interactive Roadmap`)
     - `Analysis Report`
     - `VOC Input`
     - `Workshop Guide`
     - `Charter Input`
     - `Charter & Roadmaps`
     - `Action Log`
   - **B. `Lean@GS PM Maturity Hub` (`PLB-PMHUB`) Ground-Truth Menu (`https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/`):**
     Organized into 3 Phases + Utilities (and **NEVER** participates in the Navigator Workshop, VOC Input, or Charter):
     - `Maturity Model Storybook` (`https://share.gemini.google/UjLQiIQXFbgc`)
     - **PHASE 1: ASSESS:** `Maturity Assessment`, `Maturity Explainer`, `Score Explainer`
     - **PHASE 2: VISUALIZE:** `Metro Journey`, `The 4 Pillars (Live)`, `Pillars (Static)`
     - **PHASE 3: PLAN:** `Strategy Builder`, `↳ Simulator`
     - **UTILITIES:** `CSV to JSON Fixer`

6. **Neutral Demo Playbook Standard (`PLB-DEMO`):**
   - Maintain a neutral, everyday-life example playbook (`PLB-DEMO`: *"Demo Example: The Office Brew Run (How This Guide System Works)"*) in the Playbook Switcher so stakeholders can evaluate the platform UX and authoring features without getting distracted by internal process debates.

---

## Section B: Strict Card Density Standard (Clean 4-Element Stage Cards)

Overview stage cards must **NEVER** look like database records, audit checklists, or tech plumbing. Each stage card on the Journey Map uses a clean **4-element human layout**:

1. **Stage Number & Plain-English Title:**
   - e.g., *"Stage 1: Maturity Assessment"*, *"Stage 3: Voice of the Customer (VOC)"*, *"Stage 4: Navigator Workshop"*.
2. **What Happens (Plain-English Summary):**
   - Clear, conversational explanation of what happens in that stage without compliance stamps.
3. **Who Is Involved & Tool Used (with Live Intranet Launcher):**
   - Clean human role line, clickable tool reference link, and direct **`Launch Live Tool ↗`** button when a corporate `liveUrl` is configured.
4. **What You Finish With:**
   - Human outcome (e.g., *"Baseline picture of current Lean capability & gaps"*).
   - Never display raw file extensions (`.csv`, `.json`) or technical handoff labels (`Input → Output:`) on overview cards.

---

## Section C: Progressive Disclosure, VOC/Gateway Nuance & Target Action Focus ("The Red Pen Lexicon")

- **Rule 1 (VOC & Gateway Terminology Nuance):**
  - Allow `Voice of the Customer (VOC)` when paired with its full name on first/header use (`"Stage 3: Voice of the Customer (VOC)"`).
  - Explain **Foundation Gateway capabilities (★)** clearly as the foundational habits that must be strengthened to unlock and sustain business performance.
- **Rule 2 (Target Action Focus — 2 to 3 Key Actions):**
  - *"Focus on **2 to 3 key actions at a time** (with a hard ceiling of 5) so teams finish what they start instead of building a giant wishlist."*
- **Rule 3 (Mandatory Plain-English Replacements):**

| ❌ Never Write This on Overviews (Tech Speak / Policing) | ✅ Always Write This Instead (Stage 7 Approved Copy) |
| :--- | :--- |
| *"Self / Pair Calibration & Scoring — Never score alone"* | **"Stage 1: Maturity Assessment (1st Time: LPM + Core Team Partner • Ongoing: LPM + Site Leadership Team)"** |
| *"Gateway Cap & Gap Diagnosis"* | **"Stage 2: Analysis (Understand strengths, gaps & foundation gateway caps)"** |
| *"Raw unexplained 'VOC'"* | **"Stage 3: Voice of the Customer (VOC) — Understand leadership business priorities & pain points"** |
| *"Prioritise the 'Vital Few' (Max 5)"* | **"Focus on 2 to 3 key actions at a time (with a hard ceiling of 5)"** |
| *"Input → Output: Raw scores.csv / .json"* | **"What you finish with: Baseline picture of current Lean capability & gaps"** |
| *"Intermediate `PRC-001` cover pages or visible `SOP-001` IDs"* | **Direct routing to Step-by-Step Guides with zero visible database IDs in UI** |

---

## Section D: SOP Step & Visual Standards

1. **≤20-Word Rule:** Every step's primary `action` sentence must be **20 words or fewer**.
2. **Imperative Verb Start:** Every step must begin with a direct action verb (*Click, Open, Review, Write, Ask, Filter, Assign*).
3. **Zero Raw Acronyms:** Enforced via `glossary` in [`data/guides.json`](./data/guides.json) and [`scripts/validate-guides.js`](./scripts/validate-guides.js).
4. **Value-Add Coaching Tip:** Every step includes a `coachingTip` explaining how to get the best real-world result.
5. **Visual Authenticity Rule (No Fake UI Wireframes) & Flexible 3-Mode Visuals:**
   - **Never Draw Fake UI Buttons for Process Rules:** Declarative SVG boxes must **NEVER** invent fake buttons that do not exist in the software (such as `"1st Time: LPM + Core Team"` or `"Score 2: 1 Pilot Only"`), and SVG text layers must never overlap.
   - **Real Screenshots for Software Steps (`type: "image"`):** If a step instructs the user to interact with `Navigator Toolkit`, `PM Maturity Hub`, or `GS Lean Maturity`, the right-hand card must display a **real screenshot** (`visual.type = "image"`, stored in `/assets/screenshots/...` or Base64 data URI) captured from the actual application UI, with an optional percentage hotspot highlight over the real button/input.
   - **Show the Open Question Scoring Modal (Stage 1, Step 2):** When explaining how to score the 28 questions (Step 2 of Stage 1), always show a real screenshot of an **open Question Card Modal** (`assets/screenshots/nav-question-modal.png` — showing the 1–5 rating scale descriptions, evidence notes box, and 1–5 score selector) captured from the live assessment UI.
   - **Clean Text/Coaching Mode for Human Rules (`type: "none"`):** If a step describes a human behaviour or discussion rule rather than a software click, set `visual: { type: "none" }` so the right-hand column cleanly renders the Good Practice Coaching Card instead of a fake diagram.
6. **Official Filing Rule (`600 Maturity Submissions` Folder):**
   - Only **Lean Core Team members** have permission and responsibility to upload official submission files into the `'600 Maturity Submissions'` folder.
   - **Local Programme Managers (LPMs)** export and save their `.json` and `.csv` files locally to load into `Navigator Toolkit` (`Analysis Report`), and share a copy with their Lean Core Team partner when an official baseline submission needs to be archived in `'600 Maturity Submissions'`.
7. **"Guide, Don't Duplicate the App" Rule (No Redundant Interactive App Clones):**
   - **Never Clone Software Features Inside the User Guide:** This platform is a user guide and coaching manual, **NOT** a replacement for `Navigator Toolkit` or `PM Maturity Hub`.
   - Do **NOT** build interactive gap-selection checkboxes, filter pills, capacity counter bars, or `"Send to Charter"` state-builders that belong inside `Navigator Toolkit → Analysis Report`. Instead, render a clean **"How to Narrow Your Gaps to the 'Vital Few' (2 to 3 Key Actions)"** visual decision guide with a static **"What Good Looks Like"** comparison example and a direct `Launch Navigator Toolkit (Analysis Report) ↗` button.
   - Do **NOT** include `"Copy Template to Clipboard"` or `"← Adjust in Focus Action Prioritiser"` buttons on reference examples when the real template lives inside `Navigator Toolkit → Charter Input`. Frame Tab 4 as **`One-Page Navigator Charter — Annotated Example & Field Guide`** with a `Launch Navigator Toolkit (Charter Input) ↗` button.
8. **Mandatory "Buttons & Controls on This Screen" Reference (`buttonsReference`) & True-to-App Button Colour Badges:**
   - Every SOP and Tool Reference page **MUST** include a clear, scannable **"Buttons & Controls on This Screen"** table (`Button / Control Name` | `Where It Is` | `What It Does & When to Use It`) extracted directly from the real `navigator-toolkit` and `pm-maturity-hub` source code.
   - Render every button badge using the exact background and text colour it has in the live application:
     - **Petrol (`#009999` bg, white text):** `Export Assessment (.json & .csv)`, `New Standard` active toggle, `Download` / `Export` buttons.
     - **Bright Purple (`#8A00E5` bg, white text):** `Maturity Explainer`, `Orientation`, `Question Card Modal: Mark as Evaluated`, primary action buttons.
     - **Dark Sidebar Teal Accent (`#1B1534` bg, `#2dd4bf` text, `#0d9488` border):** `✦ Maturity Model Storybook`.
     - **Deep Plum / Indigo (`#2E1065` bg, white text):** `View Dashboard`, `Import Assessment (.json / .csv)`, `? User Guide`, `View Key`.
     - **Danger Red (`#DC2626` bg, white text):** `Reset Progress`, `Clear Session`.
     - **Dark Sidebar Slate (`#1E1B4B` bg, `#e2e8f0` text):** Sidebar navigation items & session buttons.
9. **Four Distinct Playbooks in the Switcher (3 Operational + 1 Demo) with 3-Way Cross-References:**
   - Keep **`PLB-001` (`Lean@GS Navigator Toolkit Guide`)**, **`PLB-MATURITY` (`Standalone GS Lean Maturity & Storybook Guide`)**, **`PLB-PMHUB` (`Lean@GS PM Maturity Hub Guide`)**, and **`PLB-DEMO` (`Demo Example: The Office Brew Run`)** as four separate, dedicated playbooks in the top Playbook Switcher:
     - **`PLB-001` (`Lean@GS Navigator Toolkit Guide`):** `https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/`
     - **`PLB-MATURITY` (`Standalone GS Lean Maturity & Storybook Guide`):** `https://megblcntpvc72.ad101.siemens-energy.net/gs-lean-maturity/`
     - **`PLB-PMHUB` (`Lean@GS PM Maturity Hub Guide`):** `https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/`
     - **`PLB-DEMO` (`Demo Example: The Office Brew Run`):** Neutral stakeholder walkthrough.
   - Do **NOT** merge the 3 operational playbooks. Keep each focused on its own web application and provide **3-Way 1-Click Cross-Reference Cards** on Tab 1 and in the left sidebar so users can jump between `Standalone Maturity`, `Navigator Toolkit`, and `PM Maturity Hub` in one click.
10. **Shared 1-Page 28-Question & 1–5 Scoring Criteria Rubric Across All 3 Operational Playbooks:**
    - Tab 4 (`4. Templates & Reference`) and Tab 3 (`3. Decision & Scoring Tools`) in `PLB-001`, `PLB-MATURITY`, and `PLB-PMHUB` **MUST** include the complete, verbatim **16:9 1-Page Scoring & Criteria Guide** (`dataNewStandard` and `dataOldStandard` for all 28 questions, Q1–Q3 binary gates, 17 ★ gateways, `New/Old Standard` toggle, `Full/Concise` toggle, and working `.pptx`, `.png`, and `.pdf` exports).
11. **Business-Priority-First Decision Rule (Supported by Maturity Development):**
    - Never frame the "Vital Few" (Tab 3) or the Charter (Tab 4) primarily around raising maturity scores or `"+0.4 Level Unlocks"`.
    - Always lead with concrete **Business & Operational Priorities** (**Lead Time, Quality, Throughput, Cost, Overheads, Inventory, Complexity**) and position **Maturity Development** (including Foundation Gateways ★) as the *enabling capability* required to achieve and sustain those business results.
12. **Post-Upload UI State Rule:**
    - When documenting tools that require a data file to reveal their workspace (such as `Navigator Toolkit → Analysis Report`), always load a valid sample `.json` assessment file into the app before capturing screenshots and writing steps so the post-upload action selection controls are visible.
13. **Mandatory Assessment Header Rule (`Org` Code & `Date of Assessment`):**
    - In the Maturity Assessment (`Navigator Toolkit → Maturity Assessment` and `Standalone GS Lean Maturity`), getting the **`Org`** (`Org Code`, e.g. `GS-TI-EUW-BER01`) and **`Date of Assessment`** (`YYYY-MM-DD`) right in the top User Data Plate is critical:
      1. The application uses `Org` and `Date of Assessment` to automatically name exported files (`<OrgCode>_<YYYY-MM-DD>_Lean_Assessment.json`, `.csv`, and `_Report.pdf`). Leaving them blank produces generic `Org_Date_Lean_Assessment.json` files that overwrite each other.
      2. The **GS Dashboard** and the `'600 Maturity Submissions'` folder index and track baseline vs. re-assessment progress using the exact `Org` code and `Date of Assessment`.
      3. Downstream tools (`Analysis Report`, `Charter & Roadmaps`, `PM Maturity Hub`) read `Org` and `Date of Assessment` directly from the uploaded `.json` header to stamp all reports and charters.
14. **Prominent Authoring & File Management UI (Never Hide in Footer):**
    - The `Playbook & SOP Authoring Studio` and `Upload / Download Guide` controls are core platform features and must **NEVER** be styled as muted grey footer links.
    - Display a prominent **`✦ Open Authoring Studio`** button and **`⬆ Upload Guide (.json)` / `⬇ Export Guide ▾`** controls in the **Top Header Bar** AND as a high-contrast **`✦ BUILD OR SHARE A GUIDE`** card in the left sidebar.
15. **3-Tier Static-Host Storage & Sharing Architecture:**
    - **Tier 1 (Browser Draft):** Automatic `localStorage` persistence with a visible header/sidebar status badge (`"Local Draft Active"` / `"Unsaved Browser Edits"`) when local edits exist.
    - **Tier 2 (Single-Playbook Share — `.leanguide.json`):** Ability to export just the currently active Playbook (plus its linked Processes, SOPs, Tools, Roles, and embedded Base64 screenshots) as a standalone `<Playbook-Slug>.leanguide.json` file, and **Upload & Merge** a colleague's `.leanguide.json` file into the active library without wiping out existing playbooks.
    - **Tier 3 (Master Release — `guides.json`):** Ability to download or upload the complete multi-playbook master `guides.json` file for repository deployment to `megblcntpvc72`.
16. **Full-Viewport Authoring Studio (`96vw x 94vh`):**
    - The `Playbook & SOP Authoring Studio` modal must **NEVER** render in a cramped dialog box. It must open at **`width: 96vw; max-width: 1840px; height: 94vh;`** with a clean `50% / 50%` (or `45% / 55%`) split pane where left and right columns scroll independently, plus a **`⛶ Fullscreen (100vw x 100vh)`** toggle button in the top-right modal header.
17. **Mandatory AI Script-to-JSON Generator & Live Importer (Tab 3):**
    - Tab 3 of the Authoring Studio (`Tab 3: ✨ AI Playbook Generator & JSON Importer`) must always provide a 3-step self-service workflow:
      - **Step 1:** Enter topic + target roles/tool + paste rough notes/SOP text -> Click **`📋 Copy Ready-to-Use AI Prompt (For M365 Copilot / Gemini)`** (with live prompt preview).
      - **Step 2:** Paste the AI's generated JSON output into the importer text area (automatically stripping ` ```json ` markdown fences) or upload a `.json` file.
      - **Step 3:** Click **`✓ Validate & Import Playbook into Studio`** (with live Pre-Import Poka-Yoke checks and `🔧 Auto-Fix Minor Schema / ID Gaps`) to merge the new Playbook into the active library, switch to it immediately, and open it in Tab 1/Tab 2 for WYSIWYG visual fine-tuning.

---

## Section E: Siemens Energy Visual Tokens

- **Official Siemens Energy Wordmark:** Stacked two-line geometric SVG wordmark (**SIEMENS** in Petrol `#009999` + **energy** in crisp `#FFFFFF` on dark header `#1B1534`) paired with a clean vertical divider before `LEAN@GS DOCUMENTATION`.
- **Header Gradient:** `linear-gradient(90deg, #1B1534 0%, #4D217A 100%)` with Siemens Petrol (`#009999`) precision accents and signature fading petrol line.
- **Backgrounds & Text:** `#FFFFFF` / `#F8FAFC` generous light canvas, `#1B1534` deep purple headings and primary text, `#54646E` secondary copy.
- **Interactive Accents:** Siemens Energy Bright Purple (`#8A00E5`), hover `#641E8C`, ice-blue visual cards (`#EAF4F8`), accessible petrol text (`#007A7A`).
