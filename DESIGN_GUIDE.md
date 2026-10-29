# Siemens Energy • Lean@GS Documentation & Playbook Platform
## Living Design & Plain-English Style Guide (`DESIGN_GUIDE.md`)

> **Status:** Mandatory Architectural & Editorial Standard  
> **Enforcement:** Automated via [`scripts/validate-guides.js`](./scripts/validate-guides.js) and surfaced inside the in-app **Guide Authoring Studio (⚙️ → Tab C: Design & Style Guide)**.  
> **Golden Rule:** Every prompt, playbook, journey map, decision tool, template, and SOP step MUST obey this document before code or JSON is written.

---

## Section A: The "Naive Colleague" 10-Second Rule (Core Philosophy)

Every screen must make immediate sense within **10 seconds** to a colleague who does not know our internal processes, acronyms, or software tools:

1. **Why am I here?**
   - Every Playbook Overview starts with a **2-sentence plain-English goal** explaining what the guide helps you achieve in the real world (never a feature list or internal jargon).
2. **How do I use this?**
   - Never stamp loud compliance badges like `MANDATORY` or `OPTIONAL` across stage cards.
   - Instead, show a simple **"Ways to Use This Guide"** banner (e.g., *Quick Local Check* vs. *Full Leadership Workshop*).
3. **What do I do next?**
   - Maximum **4 high-level stages** on any Journey Map, aligned 1-to-1 with the **4 universal navigation tabs**:
     1. **`1. Overview & Journey`** *(Understand where we are & how it connects)*
     2. **`2. Step-by-Step Guides`** *(How to do each task)*
     3. **`3. Decision & Priority Tools`** *(What matters most — e.g., Top 5 Prioritiser)*
     4. **`4. Templates & Reference`** *(1-page charters, agendas, and reference lists)*

---

## Section B: Strict Card Density Standard (Journey Map Cards)

Overview stage cards must **NEVER** look like database records or audit checklists. Each stage card on Tab 1 is strictly limited to **4 human-readable elements**:

1. **Plain-English Title:**
   - Maximum **7 words** (excluding the stage number prefix), starting with a direct action verb (e.g., *"1. Score Your Site's Current Practices"*).
2. **One-Sentence Summary:**
   - Plain-English explanation of what happens in that stage (no unexplained rules or acronyms).
3. **Who & How Long:**
   - Single clean line (e.g., *"Programme Manager + Core Team Partner • 90 mins"*).
   - Never use double labels like `Lead: Owner: LPM` or `Support: Review: LPM`.
4. **What You Finish With:**
   - Human outcome (e.g., *"Agreed scorecard for 28 site practices"*).
   - Never display raw file extensions (`.csv`, `.json`) or technical handoff labels (`Input → Output:`) on overview cards.

---

## Section C: Progressive Disclosure of Rules & Jargon ("The Red Pen Lexicon")

- **Rule 1 (No Unexplained Rules on Overviews):**
  - Never mention internal rule names (*"70% Rule"*, *"Starred Gateways ★"*, *"VOC"*, *"Pair Calibration"*) on the home screen before they have been explained.
  - Explain rules inside a **"3 Golden Rules Before You Start"** box at the top of Step 1 where the user actually needs them.
- **Rule 2 (Point-of-Use Delivery):**
  - Do not put persistent filing warnings (like the `'600 Maturity Submissions'` box) in the global left sidebar.
  - Put filing instructions at the final step of the SOP where saving actually happens.
- **Rule 3 (Mandatory Plain-English Replacements):**

| ❌ Never Write This (Internal Jargon / Tech Speak) | ✅ Always Write This Instead (Plain Human English) |
| :--- | :--- |
| *"Self / Pair Calibration & Scoring"* | **"Score Your Site Together in a Pair"** |
| *"Gateway Cap & Gap Diagnosis"* | **"See What Is Holding Your Score Back"** |
| *"Starred Gateways (★) / Red Gateways"* | **"Foundation Questions (★) that unlock the next level"** |
| *"70% Site Rule / Workplace Evidence"* | **"Visible across most of your site (at least 7 out of 10 areas)"** |
| *"Leader Interviews (VOC)"* | **"Ask Site Leaders About Their Biggest Challenges"** |
| *"Prioritise the 'Vital Few'"* | **"Pick Your Top 5 Focus Areas"** |
| *"Input → Output: Raw scores.csv / .json"* | **"What you finish with: Saved site scorecard"** |

---

## Section D: SOP Step & Visual Standards

1. **≤20-Word Rule:** Every step's primary `action` sentence must be **20 words or fewer**.
2. **Imperative Verb Start:** Every step must begin with a direct action verb (*Click, Open, Review, Write, Ask, Filter, Assign*).
3. **Zero Raw Acronyms:** Enforced via `glossary` in [`data/guides.json`](./data/guides.json) and [`scripts/validate-guides.js`](./scripts/validate-guides.js).
4. **Value-Add Coaching Tip:** Every step includes a `coachingTip` explaining how to get the best real-world result (not just which button to press).
5. **Flexible 3-Mode Visuals (M365 Ready):**
   - `type: "image"`: Custom screenshot (Base64 data URI from `Ctrl+V` Snipping Tool paste or URL) with optional percentage-based highlight box (`hotspot`).
   - `type: "svg"`: Declarative SVG diagram with callout arrow.
   - `type: "none"` (or omitted): Cleanly renders without an empty placeholder box, elevating the `coachingTip` card to balance the 2-column rhythm.

---

## Section E: Siemens Energy Visual Tokens

- **Header Gradient:** `linear-gradient(90deg, #1B1534 0%, #4D217A 100%)` with Siemens Petrol (`#009999`) precision accents and signature fading petrol line.
- **Backgrounds & Text:** `#FFFFFF` / `#F8FAFC` generous light canvas, `#1B1534` deep purple headings and primary text, `#54646E` secondary copy.
- **Interactive Accents:** Siemens Energy Bright Purple (`#8A00E5`), hover `#641E8C`, ice-blue visual cards (`#EAF4F8`), accessible petrol text (`#007A7A`).
