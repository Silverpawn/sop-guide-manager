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
   - Always store and render clickable **`"Launch Live Tool ↗"`** buttons (`target="_blank" rel="noopener noreferrer"`) on Stage Cards, Kit Bags, and Tool Reference drawers using these exact corporate URLs:
     - **Maturity Model Storybook (GS Lean Maturity Portal):** `https://megblcntpvc72.ad101.siemens-energy.net/gs-lean-maturity/`
     - **Lean@GS Navigator Toolkit:** `https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/`
     - **Lean@GS PM Maturity Hub:** `https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/`
   - **A. `Lean@GS Navigator Toolkit` (`PLB-001`) Ground-Truth Menu (`https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/`):**
     Contains these exact menu items (and **NEVER** `Score Explainer`, `Metro Journey`, `4 Pillars`, `Strategy Builder`, `Simulator`, or `CSV to JSON Fixer`):
     - `Maturity Model Storybook` (`https://megblcntpvc72.ad101.siemens-energy.net/gs-lean-maturity/`)
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
     - `Maturity Model Storybook` (`https://megblcntpvc72.ad101.siemens-energy.net/gs-lean-maturity/`)
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
5. **Flexible 3-Mode Visuals (M365 Ready):**
   - `type: "image"`: Custom screenshot (Base64 data URI from `Ctrl+V` Snipping Tool paste or URL) with optional percentage-based highlight box (`hotspot`).
   - `type: "svg"`: Declarative SVG diagram with callout arrow reflecting real production UI labels.
   - `type: "none"` (or omitted): Cleanly renders without an empty placeholder box, elevating the `coachingTip` card to balance the 2-column rhythm.

---

## Section E: Siemens Energy Visual Tokens

- **Official Siemens Energy Wordmark:** Stacked two-line geometric SVG wordmark (**SIEMENS** in Petrol `#009999` + **energy** in crisp `#FFFFFF` on dark header `#1B1534`) paired with a clean vertical divider before `LEAN@GS DOCUMENTATION`.
- **Header Gradient:** `linear-gradient(90deg, #1B1534 0%, #4D217A 100%)` with Siemens Petrol (`#009999`) precision accents and signature fading petrol line.
- **Backgrounds & Text:** `#FFFFFF` / `#F8FAFC` generous light canvas, `#1B1534` deep purple headings and primary text, `#54646E` secondary copy.
- **Interactive Accents:** Siemens Energy Bright Purple (`#8A00E5`), hover `#641E8C`, ice-blue visual cards (`#EAF4F8`), accessible petrol text (`#007A7A`).
