# Siemens Energy • Lean@GS Documentation & Playbook Platform
## Living Design & Plain-English Style Guide (`DESIGN_GUIDE.md`)

> **Status:** Mandatory Architectural & Editorial Standard  
> **Enforcement:** Automated via [`scripts/validate-guides.js`](./scripts/validate-guides.js) and surfaced inside the in-app **Guide Authoring Studio (⚙️ → Tab 4: Design & Plain-English Guide)**.  
> **Golden Rule:** Every prompt, playbook, journey map, decision tool, template, and SOP step MUST obey this document before code or JSON is written.

---

## Section A: The "Naive Colleague" 10-Second Rule & Flexible Journey Maps

Every screen must make immediate sense within **10 seconds** to a colleague who does not know our internal processes, acronyms, or software tools:

1. **Why am I here? (Purpose & Golden Principle):**
   - Every Playbook Overview starts with a plain-English description explaining what the journey helps you achieve in the real world, paired with a high-contrast **Golden Principle Callout Box** (e.g., *"The goal isn't to improve the maturity score. The goal is to improve the business."*).
2. **How do I use this? (No Compliance Stamps):**
   - Never stamp loud compliance badges like `MANDATORY` or `OPTIONAL` across stage cards.
   - Instead, show how inputs converge visually (e.g., *Input 1: Lean Capability* + *Input 2: Business Need* → *Combined in Stage 4: Navigator Workshop*).
3. **Flexible N-Stage Journey Maps inside the 4 Universal Navigation Tabs:**
   - The application shell always uses the **4 Universal Top Navigation Tabs**:
     1. **`1. End-to-End Journey`** *(Understand where we are & how every stage connects)*
     2. **`2. Step-by-Step Guides`** *(How to do each task)*
     3. **`3. Decision & Priority Tools`** *(Focus on 2–3 key actions at a time, max 5 hard cap)*
     4. **`4. Templates & Reference`** *(1-page charters, agendas, and reference lists)*
   - Inside Tab 1 (`1. End-to-End Journey`), playbooks can have **as many stages as the real process requires** (e.g., **6 stages** for the Navigator Process, **4 stages** for Tiered Daily Management). Authors can dynamically `+ Add Stage`, `Reorder Stage`, and `Delete Stage` in the Playbook Builder.

---

## Section B: Strict Card Density Standard (Clean 4-Element Stage Cards)

Overview stage cards must **NEVER** look like database records, audit checklists, or tech plumbing. Each stage card on the Journey Map uses a clean **4-element human layout**:

1. **Plain-English Stage Title:**
   - Clear stage number and action-oriented name (e.g., *"Stage 1: Establish the Baseline (Assess)"*, *"Stage 4: Bring the Two Together (Navigator Workshop)"*).
2. **What Happens (Plain-English Summary):**
   - Clear, conversational explanation of what happens in that stage (e.g., *"Complete the maturity self-assessment (ideally with your leadership team—this is a self-assessment, not an audit) to establish current Lean capability and highlight gaps."*).
3. **Who Is Involved & Tool Used:**
   - Clean human role line and clickable tool link (never use double labels like `Lead: Owner: LPM`).
4. **What You Finish With:**
   - Human outcome (e.g., *"Baseline picture of current Lean capability & gaps"*).
   - Never display raw file extensions (`.csv`, `.json`) or technical handoff labels (`Input → Output:`) on overview cards.

---

## Section C: Progressive Disclosure of Rules & Jargon ("The Red Pen Lexicon")

- **Rule 1 (No Unexplained Rules or Tech Plumbing on Overviews):**
  - Never display raw file extensions (`.csv`, `.json`), `MANDATORY`/`OPTIONAL` stamps, or consultant jargon (`Pair Calibration`, `Gateway Cap Diagnosis`, `Input -> Output`) on Journey Map cards.
- **Rule 2 (Focus on 2–3 Key Actions, Not a Huge Wishlist):**
  - Guide teams to focus on **2 to 3 key capability actions at a time** (with a hard maximum cap of 5) where Lean capability gaps meet critical business needs.
- **Rule 3 (Mandatory Plain-English Replacements):**

| ❌ Never Write This on Overviews (Tech Speak / Jargon) | ✅ Always Write This Instead (Plain Human English) |
| :--- | :--- |
| *"Self / Pair Calibration & Scoring"* | **"Establish the Baseline (Assess)"** |
| *"Gateway Cap & Gap Diagnosis"* | **"Understand the Gaps (Analyse)"** |
| *"Leader Interviews (VOC)"* | **"Understand the Business Need (Voice of the Customer)"** |
| *"Prioritise the 'Vital Few'"* | **"Bring the Two Together (Navigator Workshop)"** |
| *"Input → Output: Raw scores.csv / .json"* | **"What you finish with: Baseline picture of current Lean capability & gaps"** |
| *"MANDATORY / OPTIONAL"* stamps on cards | *(Omit compliance stamps; explain the human purpose instead)* |

---

## Section D: SOP Step & Visual Standards

1. **≤20-Word Rule:** Every step's primary `action` sentence must be **20 words or fewer**.
2. **Imperative Verb Start:** Every step must begin with a direct action verb (*Click, Open, Review, Write, Ask, Filter, Assign*).
3. **Zero Raw Acronyms:** Enforced via `glossary` in [`data/guides.json`](./data/guides.json) and [`scripts/validate-guides.js`](./scripts/validate-guides.js).
4. **Value-Add Coaching Tip:** Every step includes a `coachingTip` explaining how to get the best real-world result.
5. **Flexible 3-Mode Visuals (M365 Ready):**
   - `type: "image"`: Custom screenshot (Base64 data URI from `Ctrl+V` Snipping Tool paste or URL) with optional percentage-based highlight box (`hotspot`).
   - `type: "svg"`: Declarative SVG diagram with callout arrow.
   - `type: "none"` (or omitted): Cleanly renders without an empty placeholder box, elevating the `coachingTip` card to balance the 2-column rhythm.

---

## Section E: Siemens Energy Visual Tokens

- **Header Gradient:** `linear-gradient(90deg, #1B1534 0%, #4D217A 100%)` with Siemens Petrol (`#009999`) precision accents and signature fading petrol line.
- **Backgrounds & Text:** `#FFFFFF` / `#F8FAFC` generous light canvas, `#1B1534` deep purple headings and primary text, `#54646E` secondary copy.
- **Interactive Accents:** Siemens Energy Bright Purple (`#8A00E5`), hover `#641E8C`, ice-blue visual cards (`#EAF4F8`), accessible petrol text (`#007A7A`).
