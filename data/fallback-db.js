window.FALLBACK_GUIDES_DB = {
  "meta": {
    "organization": "Siemens Energy • Lean@GS",
    "programme": "Maturity Assessment & Navigator Workshop",
    "version": "6.1.1 / 2.4.7",
    "strictWordLimit": 20,
    "filingRule": "Save finished .csv and .json files in '600 Maturity Submissions'. Never move or delete files in that folder.",
    "liveTools": [
      {
        "id": "LIVE-NAVIGATOR",
        "name": "Lean@GS Navigator Toolkit",
        "shortLabel": "Launch Lean@GS Navigator Toolkit ↗",
        "url": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
        "description": "Orientation, Process Overview, Maturity Assessment, Analysis Report, VOC Input, Workshop Guide, Charter Input, Charter & Roadmaps, Action Log"
      },
      {
        "id": "LIVE-PORTAL",
        "name": "Standalone Maturity App (GS Lean Maturity)",
        "shortLabel": "Launch Standalone Maturity App (GS Lean Maturity) ↗",
        "url": "https://megblcntpvc72.ad101.siemens-energy.net/gs-lean-maturity/",
        "description": "Standalone 28-Question Assessment & Gateway Scoring Engine"
      },
      {
        "id": "LIVE-HUB",
        "name": "Lean@GS PM Maturity Hub",
        "shortLabel": "Launch Lean@GS PM Maturity Hub ↗",
        "url": "https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/",
        "description": "Phase 1: Assess (Score Explainer), Phase 2: Visualize (Metro Journey & 4 Pillars), Phase 3: Plan (Strategy Builder & Simulator), Utilities (CSV to JSON Fixer)"
      },
      {
        "id": "LIVE-STORYBOOK",
        "name": "Maturity Model Storybook",
        "shortLabel": "Maturity Model Storybook ↗",
        "url": "https://share.gemini.google/UjLQiIQXFbgc",
        "description": "Interactive Lean@GS Maturity Model Storybook"
      }
    ]
  },
  "glossary": {
    "voc": {
      "term": "Voice of the Customer",
      "plainText": "Leader Business Priorities",
      "definition": "Short interviews with site leaders to capture the top 3 operational headaches the Lean programme must solve."
    },
    "gateway-question": {
      "term": "Gateway Question (★ Yes)",
      "plainText": "Starred Level-Unlock Question",
      "definition": "One of the 17 starred questions that must score at least 3 across 70% of the site before higher-level questions count."
    },
    "seventy-percent-rule": {
      "term": "The 70% Site Rule",
      "plainText": "Works across ~70% of teams",
      "definition": "A Lean habit must work across roughly 70% of the site to score 3 or higher. One pilot team does not count."
    },
    "okr": {
      "term": "Objectives & Key Results",
      "plainText": "Measurable 12-Month Goals",
      "definition": "2–3 clear Objectives paired with Key Results following the pattern: [Measure] from [Start] to [Target] by [Date]."
    }
  },
  "roles": {
    "ROL-001": {
      "id": "ROL-001",
      "title": "Local Programme Manager",
      "department": "Site Lean@GS Lead",
      "color": "#009999"
    },
    "ROL-002": {
      "id": "ROL-002",
      "title": "Lean Core Team Partner",
      "department": "Global Lean@GS Calibration",
      "color": "#8A00E5"
    },
    "ROL-003": {
      "id": "ROL-003",
      "title": "Site Leadership Sponsor",
      "department": "Site Operations Management",
      "color": "#0057C6"
    },
    "ROL-004": {
      "id": "ROL-004",
      "title": "Frontline Team Leader",
      "department": "Cell & Shift Operations",
      "color": "#27B66D"
    },
    "ROL-D01": {
      "id": "ROL-D01",
      "title": "Designated Brew Maker",
      "department": "Office Kitchen Lead",
      "color": "#009999"
    },
    "ROL-D02": {
      "id": "ROL-D02",
      "title": "Kitchen Spotter / Tray Helper",
      "department": "Door & Supply Buddy",
      "color": "#8A00E5"
    },
    "ROL-D03": {
      "id": "ROL-D03",
      "title": "Thirsty Desk Colleagues",
      "department": "Morning Standup Team",
      "color": "#0057C6"
    }
  },
  "tools": {
    "TOL-000": {
      "id": "TOL-000",
      "name": "Orientation & Process Overview",
      "suite": "Lean@GS Navigator Toolkit",
      "versionBadge": "",
      "category": "Before You Start: Orientation",
      "purpose": "Review the Navigator Orientation and Process Overview screens inside Lean@GS Navigator Toolkit (plus the Maturity Model Storybook) before starting Stage 1.",
      "accessUrl": "Navigator Toolkit → Orientation & Process Overview",
      "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
      "secondaryLiveUrl": "https://share.gemini.google/UjLQiIQXFbgc",
      "secondaryLiveLabel": "Maturity Model Storybook ↗",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Open Lean@GS Navigator Toolkit and click 'Orientation' and 'Process Overview' in the left navigation menu.",
        "Open 'Maturity Model Storybook' to review the 5 maturity levels and how Lean capability and business need work together."
      ],
      "quickCommands": [
        {
          "goal": "Open the Navigator Process Overview",
          "command": "Navigator Toolkit → Click 'Orientation' or 'Process Overview'"
        },
        {
          "goal": "Open the Maturity Model Storybook",
          "command": "Navigator Toolkit → Click 'Maturity Model Storybook'"
        }
      ],
      "buttonsReference": [
        {
          "button": "✦ Maturity Model Storybook",
          "where": "Top of Left Sidebar (Navigator Toolkit)",
          "whatItDoes": "Opens the interactive Maturity Model Storybook in a new browser tab to explain the 5 maturity levels and how Lean capability and business need work together."
        },
        {
          "button": "Orientation",
          "where": "Left Sidebar Navigation",
          "whatItDoes": "Opens the welcome orientation screen explaining the role of the Local Programme Manager (LPM) and how the Navigator Toolkit works."
        },
        {
          "button": "Process Overview",
          "where": "Left Sidebar Navigation",
          "whatItDoes": "Displays the end-to-end 6-stage Navigator journey diagram showing how Capability (Stages 1–2) and VOC (Stage 3) converge in the Workshop (Stage 4)."
        },
        {
          "button": "Save Session (.leansession) / Load Session (.leansession)",
          "where": "Bottom-Left Sidebar (Session Management)",
          "whatItDoes": "Saves or restores your complete multi-stage Navigator session (Assessment, Analysis, VOC, Charter, and Action Log) in a single portable file."
        },
        {
          "button": "Clear Session / Output All Data (CSV)",
          "where": "Bottom-Left Sidebar (Session Management)",
          "whatItDoes": "Resets active browser session data or exports all combined Navigator workshop data to a CSV spreadsheet."
        },
        {
          "button": "? Guide & Help",
          "where": "Bottom of Left Sidebar",
          "whatItDoes": "Opens the built-in Navigator Toolkit user guide modal."
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Stakeholders think the Maturity Assessment is the entire Navigator process.",
          "cause": "Confusing Input 1 (Maturity Assessment) with the 6-stage Navigator journey.",
          "fix": "Open 'Process Overview' in Navigator Toolkit to show how Capability (Stages 1–2) and VOC Business Need (Stage 3) converge in the Workshop (Stage 4)."
        }
      ]
    },
    "TOL-001": {
      "id": "TOL-001",
      "name": "Maturity Assessment & Explainer",
      "suite": "Lean@GS Navigator Toolkit",
      "versionBadge": "",
      "category": "Stage 1: Maturity Assessment",
      "purpose": "Score all 28 site Lean questions using the New Standard rubric, inspect ↳ Maturity Explainer flashcards and ↳ Interactive Roadmap, and export your assessment.",
      "accessUrl": "Navigator Toolkit → Maturity Assessment (↳ Maturity Explainer & Interactive Roadmap)",
      "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
      "secondaryLiveUrl": "https://share.gemini.google/UjLQiIQXFbgc",
      "secondaryLiveLabel": "Maturity Model Storybook ↗",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "CRITICAL HEADER RULE: Before scoring any cards, enter your exact Organisation Code in the 'Org' box (for example, GS-TI-EUW-BER01) and the exact 'Date of Assessment' in the top User Data Plate—these two fields auto-generate your exported filenames (<OrgCode>_<YYYY-MM-DD>_Lean_Assessment.json), link your site on the GS Dashboard, and stamp every downstream report.",
        "First-Time Assessment: Complete with your Lean Core Team partner to learn the 28-question rubric and evidence standard.",
        "Ongoing Assessments: Complete directly with your Site Leadership Team as a capability self-assessment (not an audit; Core Team optional)."
      ],
      "quickCommands": [
        {
          "goal": "Set Mandatory Header Key (Before Scoring)",
          "command": "Enter exact Org Code in 'Org' + exact 'Date of Assessment' (auto-names <OrgCode>_<Date>_Lean_Assessment.json)"
        },
        {
          "goal": "Pass a starred Gateway question (★ Gold Border)",
          "command": "Score >= 3 with real workplace proof across ~70% of site teams"
        },
        {
          "goal": "Export assessment files locally & share with Core Team",
          "command": "Click 'Export Assessment (.json & .csv)' → Save locally for Analysis Report (only Lean Core Team files in '600 Maturity Submissions')"
        }
      ],
      "buttonsReference": [
        {
          "button": "Org (Organisation Code — Critical Header Field)",
          "where": "User Data Plate (Top-Right Input Box)",
          "whatItDoes": "CRITICAL: Enter your exact official Organisation Code (for example, GS-TI-EUW-BER01). The app uses this field to name your exported files (<OrgCode>_<YYYY-MM-DD>_Lean_Assessment.json / .csv / .pdf), match your site on the GS Dashboard, index official submissions in '600 Maturity Submissions', and stamp all downstream reports."
        },
        {
          "button": "Date of Assessment (Critical Header Field)",
          "where": "User Data Plate (Second Row, Left Date Picker)",
          "whatItDoes": "CRITICAL: Select the exact date of the assessment (YYYY-MM-DD). Together with the Org Code, this date stamps your exported filenames, tracks baseline vs. re-assessment progress over time on the GS Dashboard, and populates downstream Analysis Report and Charter headers."
        },
        {
          "button": "View Dashboard",
          "where": "Top Action Bar (Maturity Assessment)",
          "whatItDoes": "Opens the Assessment Dashboard modal showing the 10-theme radar chart, category bar chart, overall maturity score, and Gateway status table (with Export to PDF)."
        },
        {
          "button": "Export Assessment (.json & .csv)",
          "where": "Top Action Bar (Petrol Button)",
          "whatItDoes": "Downloads your local .json data file (for Navigator Analysis Report) and .csv spreadsheet. Send a copy to your Lean Core Team partner for official filing in '600 Maturity Submissions'."
        },
        {
          "button": "Import Assessment (.json / .csv)",
          "where": "Top Action Bar",
          "whatItDoes": "Reloads a previously saved .json, .csv, or .leansession assessment file so you can review or update question scores."
        },
        {
          "button": "Reset Progress",
          "where": "Top Action Bar (Red Button)",
          "whatItDoes": "Clears all entered question ratings and comments back to the unassessed state."
        },
        {
          "button": "? User Guide",
          "where": "Top Action Bar",
          "whatItDoes": "Opens step-by-step guidance on scoring criteria, the 70% site coverage rule, and facilitator advice."
        },
        {
          "button": "View Key",
          "where": "Top Action Bar",
          "whatItDoes": "Opens the Visual Key modal explaining card border colours: Gold border = Starred Gateway Question (★); Petrol border = Evaluated question."
        },
        {
          "button": "Maturity Explainer / ↳ Maturity Explainer",
          "where": "Top Action Bar & Left Sidebar Sub-Item",
          "whatItDoes": "Opens the plain-English flashcard reference guide for all 10 Lean dimensions and 28 questions."
        },
        {
          "button": "↳ Interactive Roadmap",
          "where": "Left Sidebar Sub-Item under Maturity Assessment",
          "whatItDoes": "Opens the 10-stage Lean progression roadmap reference."
        },
        {
          "button": "Old Standard | New Standard",
          "where": "Top Action Bar (Right Toggle)",
          "whatItDoes": "Switches the question criteria rubric—always keep set to 'New Standard'."
        },
        {
          "button": "Question Card Modal: Self-Assessment (1–5 Slider / Yes-No)",
          "where": "Inside Open Question Card Modal (Bottom-Left)",
          "whatItDoes": "Selects your 1–5 maturity rating (or Yes [5] / No [1] on Foundation Q1–Q3) after verifying the Level 1–5 Scoring Criteria."
        },
        {
          "button": "Question Card Modal: Comments & Actions",
          "where": "Inside Open Question Card Modal (Middle-Right)",
          "whatItDoes": "Text box to record physical workplace evidence (boards, logs, 70% team coverage) supporting the score."
        },
        {
          "button": "Question Card Modal: Mark as Evaluated",
          "where": "Inside Open Question Card Modal (Bottom-Right Purple Button)",
          "whatItDoes": "Locks the question score with a petrol border on the grid and includes it in the Assessment Dashboard calculation."
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Exported file is named 'Org_Date_Lean_Assessment.json' or fails to match our site on the GS Dashboard.",
          "cause": "The 'Org' (Organisation Code) or 'Date of Assessment' box in the top User Data Plate was left blank or mistyped before exporting.",
          "fix": "Scroll up to the User Data Plate, enter your exact Organisation Code in 'Org' and the date in 'Date of Assessment', then click 'Export Assessment (.json & .csv)' again."
        },
        {
          "symptom": "We had a score of 4 last year, but the habit stopped when a manager left.",
          "cause": "Workplace habits regressed below the 70% site threshold.",
          "fix": "Lower the score honestly to match today's real workplace proof so you can focus help where needed."
        }
      ]
    },
    "TOL-002": {
      "id": "TOL-002",
      "name": "Analysis Report",
      "suite": "Lean@GS Navigator Toolkit",
      "versionBadge": "",
      "category": "Stage 2: Analysis",
      "purpose": "Post-upload diagnostic engine inside Navigator Toolkit that ingests your Stage 1 .json assessment file, evaluates all 10 Roadmap Stages (Pass, Opportunity for Growth, Foundation Focus), lets you accept or customize 2–3 capability actions ('Accept Proposed Action', 'OE Comment', 'OE Action') supporting your business priorities, and exports PowerPoint/PDF reports or a full .leansession file.",
      "accessUrl": "Navigator Toolkit → Analysis Report",
      "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Open 'Analysis Report' in the left sidebar of Lean@GS Navigator Toolkit and click 'Upload Assessment (.json / .csv)'.",
        "Enter 'Analysed By' and 'Analysis Date', then expand the 10 roadmap stages or click 'View Action Report'."
      ],
      "quickCommands": [
        {
          "goal": "Inspect consolidated dimension gaps & recommended actions",
          "command": "Click 'Upload Assessment (.json / .csv)' → Click 'View Action Report'"
        },
        {
          "goal": "Export executive diagnostic slides & reports",
          "command": "Click 'Export to PowerPoint', 'Export Full Report (PDF)', or 'Export Results (CSV)'"
        }
      ],
      "buttonsReference": [
        {
          "button": "Upload Assessment (.json / .csv)",
          "where": "Section 1 card ('1. Assessment Diagnostic Data')",
          "whatItDoes": "Opens a file picker to load your saved <Org>_<Date>_Lean_Assessment.json (or .csv / .leansession) file and unlock the populated 10-stage diagnostic workspace below."
        },
        {
          "button": "Analysed By & Analysis Date",
          "where": "Right-hand card ('2. Add Analysis Details')",
          "whatItDoes": "Records the facilitator/analyst names (one per line) and date of the gap analysis; automatically saved into your .leansession and exported reports."
        },
        {
          "button": "View Action Report",
          "where": "Master Action Bar (first button on left)",
          "whatItDoes": "Opens the Consolidated Action Report modal summarizing all stages where you ticked 'Accept Proposed Action (Y/N)' or wrote a custom 'OE Action'."
        },
        {
          "button": "Expand All / Collapse All",
          "where": "Master Action Bar (buttons 2 and 3)",
          "whatItDoes": "Expands or collapses all 10 Roadmap Stage diagnostic cards at once so you can inspect every question score and recommendation."
        },
        {
          "button": "Export Full Report (PDF)",
          "where": "Master Action Bar (petrol button)",
          "whatItDoes": "Generates and downloads a complete PDF document of all 10 diagnostic stages, scores, verdicts, and your custom OE comments/actions."
        },
        {
          "button": "Export Results (CSV)",
          "where": "Master Action Bar (petrol button)",
          "whatItDoes": "Downloads a spreadsheet-ready CSV table of your stage verdicts, accepted recommendations, and custom OE Action notes."
        },
        {
          "button": "Export to PowerPoint",
          "where": "Master Action Bar (petrol button)",
          "whatItDoes": "Generates an editable PowerPoint (.pptx) executive briefing deck summarizing your maturity profile, key gaps, and selected actions."
        },
        {
          "button": "Reset All Data",
          "where": "Master Action Bar (red danger button)",
          "whatItDoes": "Clears the loaded assessment, analyst details, and custom OE Action notes from the Analysis Report screen."
        },
        {
          "button": "? Help & Guide",
          "where": "Master Action Bar (centre petrol button)",
          "whatItDoes": "Opens the built-in Analysis Report coaching modal explaining how stage verdicts and gateway rules are evaluated."
        },
        {
          "button": "Stage 0–9 Accordion Headers",
          "where": "Main Diagnostic Accordion list (post-upload)",
          "whatItDoes": "Colour-coded stage bars (Green = Pass ✅, Yellow = Opportunity for Growth 💡, Red = Foundation Focus 🎯). Click any stage bar to reveal its questions, verdict, and action builder."
        },
        {
          "button": "View Evaluation Logic",
          "where": "Top-right inside any expanded Stage 0–9 card",
          "whatItDoes": "Opens a modal showing the exact question thresholds and Foundation Gateway (★) rules used to calculate that stage's verdict."
        },
        {
          "button": "Accept Proposed Action (Y/N)",
          "where": "Inside the 'Assessment & Recommendation' box of any expanded stage card",
          "whatItDoes": "Checkbox that selects the built-in recommended capability action for inclusion in your Consolidated Action Report, Workshop, and Charter."
        },
        {
          "button": "OE Comment (Textarea)",
          "where": "Below 'Assessment & Recommendation' inside any expanded stage card",
          "whatItDoes": "Free-text field to record your operational context, root-cause observations, and the Business Priority (Lead Time, Quality, Throughput, Cost, Overheads, Inventory, Complexity) impacted by this gap."
        },
        {
          "button": "OE Action (Modifies or replaces proposed action)",
          "where": "Bottom field inside any expanded stage card",
          "whatItDoes": "Custom action builder where you write or tailor a specific, business-led action statement (combining your Business Priority target + supporting Lean capability) that overrides the generic proposed action."
        },
        {
          "button": "Save Session (.leansession)",
          "where": "Bottom-left dark Navigator sidebar ('FULL TOOLKIT SESSION')",
          "whatItDoes": "Saves your entire Navigator Toolkit state—including uploaded assessment scores, accepted actions, and custom OE Action text—into one portable .leansession file for Stage 3 (VOC), Stage 4 (Workshop), and Stage 5 (Charter)."
        },
        {
          "button": "Next Step: Voice of Customer (VOC) →",
          "where": "Bottom of the Analysis Report page",
          "whatItDoes": "Advances directly to Stage 3 (VOC Input) while keeping your loaded assessment and selected capability actions active in session memory."
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Analysis Report shows 15+ potential gap actions across all 10 roadmap stages.",
          "cause": "Trying to fix every low question at once overwhelms the local team.",
          "fix": "Focus on 2 to 3 priority capability gaps (especially failed starred Gateways) to bring into your Navigator Workshop."
        }
      ]
    },
    "TOL-004": {
      "id": "TOL-004",
      "name": "VOC Input",
      "suite": "Lean@GS Navigator Toolkit",
      "versionBadge": "",
      "category": "Stage 3: Voice of the Customer (VOC)",
      "purpose": "Capture leadership business priorities, operational bottlenecks, and measures of breakthrough success inside Navigator Toolkit → VOC Input.",
      "accessUrl": "Navigator Toolkit → VOC Input",
      "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Schedule 20-minute pre-workshop interviews with site leaders and open 'VOC Input' in the Lean@GS Navigator Toolkit sidebar.",
        "Ask the primary guiding question: 'If you could fix one thing in the next 12 months to significantly improve operational performance and flow, what would it be?'"
      ],
      "quickCommands": [
        {
          "goal": "Capture Voice of the Customer (VOC) interviews",
          "command": "Navigator Toolkit → VOC Input → Record interview insights → Click 'Export VOCs (CSV)'"
        },
        {
          "goal": "Save combined Analysis + VOC workshop prep state",
          "command": "Click 'Save Session (.leansession)' in the Navigator Toolkit sidebar"
        }
      ],
      "buttonsReference": [
        {
          "button": "? Interview Help & Guide",
          "where": "Top Header of VOC Input",
          "whatItDoes": "Opens facilitation guidance on how to interview site leaders and uncover business pain points."
        },
        {
          "button": "1. Interview Details (Stakeholder Name, Role, Date)",
          "where": "Top Form Card in VOC Input",
          "whatItDoes": "Records the name, role/department, and interview date for each site leader or stakeholder."
        },
        {
          "button": "2. Record Insights (Key Challenge, Measure of Success, Bottlenecks)",
          "where": "Main Form Card in VOC Input",
          "whatItDoes": "Captures the leader's top business problems, how they measure 12-month success, and where process flow gets stuck."
        },
        {
          "button": "Save VOC Entry",
          "where": "Bottom of VOC Input Form (Petrol Button)",
          "whatItDoes": "Saves the leader's interview entry into the active session list and automatically syncs priorities into Charter Input."
        },
        {
          "button": "Clear Form",
          "where": "Bottom of VOC Input Form",
          "whatItDoes": "Clears the current form fields so you can enter the next stakeholder interview."
        },
        {
          "button": "Export VOCs (CSV) / Clear All Entries",
          "where": "Saved VOC Entries Section",
          "whatItDoes": "Downloads all recorded leadership interviews as a CSV spreadsheet or clears all saved VOC entries."
        },
        {
          "button": "Next Step: Facilitate Workshop →",
          "where": "Bottom-Right Navigation Bar",
          "whatItDoes": "Advances directly to Stage 4 (Workshop Guide) inside Navigator Toolkit."
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Leaders bring up 15 different priorities during interviews.",
          "cause": "Unfiltered wish lists dilute the half-day workshop.",
          "fix": "Synthesise interview entries inside VOC Input into the Top 3 recurring Leadership Priorities."
        }
      ]
    },
    "TOL-005": {
      "id": "TOL-005",
      "name": "Workshop Guide",
      "suite": "Lean@GS Navigator Toolkit",
      "versionBadge": "",
      "category": "Stage 4: Navigator Workshop",
      "purpose": "Facilitate the 3-module alignment workshop in Navigator Toolkit → Workshop Guide to connect Lean capability gaps (Stages 1–2) with business needs (Stage 3).",
      "accessUrl": "Navigator Toolkit → Workshop Guide",
      "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Load your full workshop session via 'Load Session (.leansession)' in the Navigator Toolkit sidebar.",
        "Open 'Workshop Guide' to lead your Site Leadership Team through the 3 alignment modules."
      ],
      "quickCommands": [
        {
          "goal": "Run Module 1 & Module 2 alignment",
          "command": "Navigator Toolkit → Workshop Guide → Connect VOC business needs to foundation Gateways"
        },
        {
          "goal": "Transition from Workshop to Charter drafting",
          "command": "Complete Module 3 in Workshop Guide → Click 'Next Step: Capture Charter Inputs →'"
        }
      ],
      "buttonsReference": [
        {
          "button": "? Facilitator Help & Guide",
          "where": "Top Header of Workshop Guide",
          "whatItDoes": "Opens the facilitator agenda, room setup checklist, and timing guide for the 3 workshop modules."
        },
        {
          "button": "Download: Navigator Workshop Plan (PPTX)",
          "where": "Module 1 Card in Workshop Guide",
          "whatItDoes": "Downloads the editable PowerPoint slide deck template for facilitating the leadership workshop."
        },
        {
          "button": "Open VOC Input Tool",
          "where": "Module 1 Card in Workshop Guide",
          "whatItDoes": "Jumps directly to VOC Input to review captured leadership business priorities on screen."
        },
        {
          "button": "Next Step: Capture Charter Inputs →",
          "where": "Bottom Navigation Bar of Workshop Guide",
          "whatItDoes": "Advances directly to Stage 5 (Charter Input) to lock in Top 3 Leadership Priorities and 2–3 focus initiatives."
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Workshop discussion gets stuck debating a single question score from the site check.",
          "cause": "Re-litigating individual scores instead of focusing on strategic bottlenecks.",
          "fix": "Remind the room that the assessment is one input; pivot immediately to which foundational Gateway unlocks the leader's top 3 business priorities."
        }
      ]
    },
    "TOL-009": {
      "id": "TOL-009",
      "name": "Charter Input & Roadmaps",
      "suite": "Lean@GS Navigator Toolkit",
      "versionBadge": "",
      "category": "Stage 5: Charter",
      "purpose": "Draft Top 3 Leadership Priorities, measurable Objectives & Key Results, and 2–3 focus initiatives in Charter Input, then view and export the executive 1-Page Charter in Charter & Roadmaps.",
      "accessUrl": "Navigator Toolkit → Charter Input & Charter & Roadmaps",
      "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Open 'Charter Input' in the Lean@GS Navigator Toolkit sidebar to enter your agreed Top 3 Leadership Priorities and 2–3 focus initiatives.",
        "Open 'Charter & Roadmaps' to review the 1-Page Charter infographic and export to PowerPoint."
      ],
      "quickCommands": [
        {
          "goal": "Write a strong, measurable Key Result in Charter Input",
          "command": "Pattern: [Measure] from [Start] to [Target] by [Date] (e.g., 25% to 75% by Q3)"
        },
        {
          "goal": "Export 1-Page Navigator Charter slides",
          "command": "Open 'Charter & Roadmaps' → Click 'Export Report to PowerPoint'"
        }
      ],
      "buttonsReference": [
        {
          "button": "? Charter Help & Guide / ? Infographic Guide & Help",
          "where": "Top Header of Charter Input & Charter & Roadmaps",
          "whatItDoes": "Opens coaching guidance on writing measurable Objectives & Key Results and presenting the 1-Page Charter."
        },
        {
          "button": "Recommended Actions (Collapsible Left Reference Panel)",
          "where": "Left Drawer inside Charter Input",
          "whatItDoes": "Displays diagnostic action recommendations from Analysis Report side-by-side while you type your Charter Objectives."
        },
        {
          "button": "Leadership Priorities (Priority 1, 2, 3 Cards)",
          "where": "Top Section of Charter Input",
          "whatItDoes": "Auto-populates from VOC Input interviews and lets you refine the Top 3 business problems the Charter will solve."
        },
        {
          "button": "Maturity Insight & Key Development Gap",
          "where": "Middle Section of Charter Input",
          "whatItDoes": "Records your baseline capability summary and the primary starred Gateway gap being addressed."
        },
        {
          "button": "+ Add Objective / + Add Key Result",
          "where": "Programme Objectives Section in Charter Input",
          "whatItDoes": "Adds 2–3 focused Programme Objectives and measurable Key Results ([Measure] from [Start] to [Target] by [Date])."
        },
        {
          "button": "Export Report to PowerPoint",
          "where": "Top Action Bar of Charter & Roadmaps",
          "whatItDoes": "Exports the executive 1-Page Navigator Charter and visual roadmap to an editable PowerPoint (.pptx) deck."
        },
        {
          "button": "Export Charter as PDF / Export Charter (CSV)",
          "where": "Top Action Bar of Charter & Roadmaps",
          "whatItDoes": "Downloads a printable 1-Page Charter PDF poster or exports Charter fields to CSV."
        },
        {
          "button": "Next Step: Assign Action Owners →",
          "where": "Bottom Navigation Bar of Charter & Roadmaps",
          "whatItDoes": "Advances directly to Stage 6 (Action Log) to assign single-point owners and target dates."
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Team writes weak task goals like 'Train 30 people in problem solving'.",
          "cause": "Measures attendance in a room instead of real shop-floor habit change.",
          "fix": "Rewrite as a habit metric: 'Increase shift huddles solving issues within 48h from 25% to 75% by Q3'."
        }
      ]
    },
    "TOL-010": {
      "id": "TOL-010",
      "name": "Action Log",
      "suite": "Lean@GS Navigator Toolkit",
      "versionBadge": "",
      "category": "Stage 6: Action Plan",
      "purpose": "Assign single-point action owners, target dates, and status tracking in Navigator Toolkit → Action Log, and display your local visual roadmap via Charter & Roadmaps.",
      "accessUrl": "Navigator Toolkit → Action Log & Charter & Roadmaps",
      "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Open 'Action Log' in the Lean@GS Navigator Toolkit sidebar after agreeing your 2–3 focus initiatives in Charter Input.",
        "Assign a single named owner and target date to every action and click 'Save Session (.leansession)'."
      ],
      "quickCommands": [
        {
          "goal": "Export owned action plan for monthly reviews",
          "command": "Navigator Toolkit → Action Log → Click 'Export Action Matrix (CSV)'"
        },
        {
          "goal": "Backup complete Navigator session",
          "command": "Click 'Save Session (.leansession)' in the Navigator Toolkit sidebar"
        }
      ],
      "buttonsReference": [
        {
          "button": "? Governance Help & Guide",
          "where": "Top Header of Action Log",
          "whatItDoes": "Opens guidance on single-point accountability and running monthly Action Log governance reviews."
        },
        {
          "button": "Owner, Target Date & Status Dropdowns",
          "where": "Each Row in Action Log & Ownership Matrix",
          "whatItDoes": "Assigns a single named owner, target completion date, and live status (Not Started, In Progress, Completed, Delayed) to each Key Result."
        },
        {
          "button": "Export Action Matrix (CSV)",
          "where": "Top-Right of Action Log Matrix (Petrol Button)",
          "whatItDoes": "Downloads the complete owned Action Log table as a CSV spreadsheet for local tracking."
        },
        {
          "button": "← Back to Charter & Roadmap / Open Charter Input →",
          "where": "Action Log Navigation Controls",
          "whatItDoes": "Returns to Charter & Roadmaps or Charter Input if you need to add or edit a Key Result."
        },
        {
          "button": "Complete Workshop & Return to Hub →",
          "where": "Bottom-Right of Action Log",
          "whatItDoes": "Completes the 6-stage Navigator workflow and returns to the Process Overview."
        }
      ],
      "troubleshooting": [
        {
          "symptom": "An action in the Action Log lists two departments as co-owners.",
          "cause": "Shared ownership means nobody owns the deadline.",
          "fix": "Assign one named person as the single-point owner and list supporting colleagues in the notes."
        }
      ]
    },
    "TOL-007": {
      "id": "TOL-007",
      "name": "Phase 1: Assess",
      "suite": "Lean@GS PM Maturity Hub",
      "versionBadge": "",
      "category": "PM Maturity Hub • Phase 1: Assess",
      "purpose": "Score the 28 questions in Maturity Assessment, review the Maturity Explainer flashcards, and diagnose gateway score caps in Score Explainer.",
      "accessUrl": "PM Maturity Hub → Phase 1: Assess (Maturity Assessment, Maturity Explainer, Score Explainer)",
      "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/",
      "secondaryLiveUrl": "https://share.gemini.google/UjLQiIQXFbgc",
      "secondaryLiveLabel": "Maturity Model Storybook ↗",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Open Lean@GS PM Maturity Hub and expand 'PHASE 1: ASSESS' in the left sidebar.",
        "Select 'Maturity Assessment', 'Maturity Explainer', or 'Score Explainer', or click 'Load JSON / CSV' in the Session Data box."
      ],
      "quickCommands": [
        {
          "goal": "Inspect Gateway Ceiling & Blinkers Filter math",
          "command": "Phase 1: Assess → Open 'Score Explainer'"
        },
        {
          "goal": "Capped Score Formula",
          "command": "Compressed = OperatingLevel + [(RawValidAvg - 1) / 4] • Final = min(RawValidAvg, Compressed)"
        }
      ],
      "buttonsReference": [
        {
          "button": "Load JSON / CSV & Clear All Data",
          "where": "Bottom-Left Sidebar (Session Data Box in PM Maturity Hub)",
          "whatItDoes": "Loads a saved .json or .csv assessment file into PM Maturity Hub so 'Data Active' powers all Phase 1, Phase 2, and Phase 3 modules."
        },
        {
          "button": "Maturity Assessment & Maturity Explainer",
          "where": "Left Sidebar under PHASE 1: ASSESS",
          "whatItDoes": "Opens the 28-question assessment grid (with View Dashboard, Export Assessment, View Key, and New Standard toggle) or the 10-dimension Maturity Explainer flashcards."
        },
        {
          "button": "Score Explainer → Select File",
          "where": "Left Sidebar under PHASE 1: ASSESS & Upload Dropzone",
          "whatItDoes": "Loads your assessment file to display the 4-step scoring breakdown: Gateway Ceiling, Blinkers Filter, Raw Valid Average, and Final Compressed Score."
        }
      ],
      "troubleshooting": [
        {
          "symptom": "High scores on Level 2 and Level 3 questions did not raise our 1.6 total score.",
          "cause": "A Level 1 Gateway question (such as Q10) scored below 3, locking your Operating Level ceiling at Level 1.",
          "fix": "Open 'Score Explainer' under Phase 1: Assess to inspect the Gateway Ceiling and Blinkers Filter."
        }
      ]
    },
    "TOL-003": {
      "id": "TOL-003",
      "name": "Phase 2: Visualize",
      "suite": "Lean@GS PM Maturity Hub",
      "versionBadge": "",
      "category": "PM Maturity Hub • Phase 2: Visualize",
      "purpose": "Visualize your site's Lean progression along the Metro Journey map and across The 4 Pillars (Live) and Pillars (Static).",
      "accessUrl": "PM Maturity Hub → Phase 2: Visualize (Metro Journey, The 4 Pillars Live, Pillars Static)",
      "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Click 'Load JSON / CSV' in the left sidebar of Lean@GS PM Maturity Hub so 'Data Active' appears.",
        "Under 'PHASE 2: VISUALIZE', select 'Metro Journey', 'The 4 Pillars (Live)', or 'Pillars (Static)'."
      ],
      "quickCommands": [
        {
          "goal": "See which failed Gateway stops the Digital Twin train",
          "command": "Phase 2: Visualize → Click 'Metro Journey'"
        },
        {
          "goal": "Compare live capability across the 4 Lean pillars",
          "command": "Phase 2: Visualize → Click 'The 4 Pillars (Live)' or 'Pillars (Static)'"
        }
      ],
      "buttonsReference": [
        {
          "button": "Metro Journey: Upload File",
          "where": "Top-Right Header of Metro Journey",
          "whatItDoes": "Loads an assessment .json or .csv file onto the 28-station Metro Journey subway map."
        },
        {
          "button": "Metro Journey: Start Journey",
          "where": "Top-Right Header of Metro Journey (Petrol Button)",
          "whatItDoes": "Animates the Digital Twin train along the Metro line until it stops at the first failed Starred Gateway station."
        },
        {
          "button": "Metro Journey: Save PDF",
          "where": "Top-Right Header of Metro Journey",
          "whatItDoes": "Exports the visual Metro Journey map as a printable PDF poster."
        },
        {
          "button": "Metro Journey: MAP CALIBRATOR",
          "where": "Right-Edge Drawer Toggle on Metro Journey",
          "whatItDoes": "Opens the map station coordinate calibrator panel."
        },
        {
          "button": "The 4 Pillars (Live) & Pillars (Static)",
          "where": "Left Sidebar under PHASE 2: VISUALIZE",
          "whatItDoes": "Displays live colour-coded question progress across the 4 Lean pillars (Strategy, Leadership, Execution, Scaling) or the static reference poster."
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Metro Journey or The 4 Pillars (Live) shows empty stations.",
          "cause": "No assessment file has been loaded into the PM Maturity Hub session.",
          "fix": "Click 'Load JSON / CSV' in the bottom-left Session Data box of PM Maturity Hub."
        }
      ]
    },
    "TOL-006": {
      "id": "TOL-006",
      "name": "Phase 3: Plan",
      "suite": "Lean@GS PM Maturity Hub",
      "versionBadge": "",
      "category": "PM Maturity Hub • Phase 3: Plan",
      "purpose": "Build a local maturity improvement plan in Strategy Builder and test how fixing specific gateways unlocks your score in the ↳ Simulator.",
      "accessUrl": "PM Maturity Hub → Phase 3: Plan (Strategy Builder & ↳ Simulator)",
      "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Ensure 'Data Active' appears in the PM Maturity Hub sidebar.",
        "Under 'PHASE 3: PLAN', click 'Strategy Builder' or its sub-item '↳ Simulator'."
      ],
      "quickCommands": [
        {
          "goal": "Select Light, Standard, Intense, or Custom templates",
          "command": "Phase 3: Plan → Open 'Strategy Builder'"
        },
        {
          "goal": "Model what-if Gateway score unlocks",
          "command": "Phase 3: Plan → Open '↳ Simulator' and drag Gateway sliders"
        }
      ],
      "buttonsReference": [
        {
          "button": "Upload File",
          "where": "Center Dropzone / Top Bar of Strategy Builder",
          "whatItDoes": "Loads your site's .json or .csv assessment file into Strategy Builder and Simulator."
        },
        {
          "button": "? How to Use This Page / Guide Me",
          "where": "Top Header of Strategy Builder & Simulator",
          "whatItDoes": "Starts an interactive guided tour of the Strategy Builder or Simulator controls."
        },
        {
          "button": "Open Simulator / Back to Strategy",
          "where": "Top Bar Toggle Button",
          "whatItDoes": "Switches between Strategy Builder initiative cards and the interactive ↳ Simulator slider sandbox."
        },
        {
          "button": "Light / Standard / Intense / Custom Initiative Cards",
          "where": "Each Gap Card in Strategy Builder",
          "whatItDoes": "Selects a pre-built or custom countermeasure template for a priority capability gap."
        },
        {
          "button": "View Strategic Context",
          "where": "Inside Each Question Card in Strategy Builder",
          "whatItDoes": "Opens deep-dive coaching guidance and root-cause context for that specific question."
        },
        {
          "button": "Unlock Next Tier (Stretch Goals)",
          "where": "Bottom Banner of Strategy Builder",
          "whatItDoes": "Reveals next-level stretch gateway questions when your site is close to unlocking the next tier."
        },
        {
          "button": "Update Roadmap & Export Plan",
          "where": "Top-Right of Strategy Builder & Simulator",
          "whatItDoes": "Applies simulated target scores to your roadmap and exports your local Strategy Builder plan."
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Dragging non-gateway sliders in Simulator barely changes the total score.",
          "cause": "An earlier starred Gateway question is still below 3, capping the Operating Level.",
          "fix": "Raise the red starred Gateway slider to 3 first so the next maturity level unlocks."
        }
      ]
    },
    "TOL-011": {
      "id": "TOL-011",
      "name": "Utilities: CSV to JSON Fixer",
      "suite": "Lean@GS PM Maturity Hub",
      "versionBadge": "",
      "category": "PM Maturity Hub • Utilities",
      "purpose": "Repair or convert legacy .csv assessment exports into valid .json files using the CSV to JSON Fixer utility.",
      "accessUrl": "PM Maturity Hub → Utilities: CSV to JSON Fixer",
      "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Open Lean@GS PM Maturity Hub and click 'CSV to JSON Fixer' under the 'UTILITIES' section at the bottom of the left sidebar."
      ],
      "quickCommands": [
        {
          "goal": "Convert semicolon-delimited Excel CSV to clean JSON",
          "command": "Utilities → Click 'CSV to JSON Fixer' → Upload .csv → Download .json"
        }
      ],
      "buttonsReference": [
        {
          "button": "Select CSV File",
          "where": "Step 1 Upload Box in CSV to JSON Fixer",
          "whatItDoes": "Selects a legacy or regional semicolon-delimited (.csv) assessment file from your computer."
        },
        {
          "button": "Download Fixed JSON",
          "where": "Bottom Button in CSV to JSON Fixer (Green / Petrol Button)",
          "whatItDoes": "Downloads a clean, repaired .json assessment file that loads without errors into any module."
        }
      ],
      "troubleshooting": [
        {
          "symptom": "CSV file fails to load into Score Explainer or Strategy Builder.",
          "cause": "Regional Excel settings saved semicolons (;) instead of commas (,).",
          "fix": "Run the file through 'CSV to JSON Fixer' under Utilities to download a clean .json file."
        }
      ]
    },
    "TOL-008": {
      "id": "TOL-008",
      "name": "Office Kitchen Kettle, Fridge & 4-Mug Tray",
      "suite": "Office Brew Sandbox",
      "versionBadge": "",
      "category": "Everyday Neutral Walkthrough",
      "purpose": "Boil fresh water, check milk and teabag supplies in the fridge, and carry up to 4 hot mugs safely back to the team.",
      "accessUrl": "Office Kitchen Counter & Breakroom Fridge",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Check that the kettle has fresh cold water above the 4-cup minimum line before flicking the switch.",
        "Open the fridge and check both dairy milk and oat milk expiry dates before taking any drink orders."
      ],
      "quickCommands": [
        {
          "goal": "Pass the Kitchen Foundation Gateway (★)",
          "command": "Working kettle + Fresh milk in fridge + Clean mugs >= 3"
        },
        {
          "goal": "Brew a proper builder's tea",
          "command": "Steep teabag in 100°C water for 3 full minutes BEFORE adding milk"
        }
      ],
      "buttonsReference": [
        {
          "button": "Kettle Water Gauge (Min 4-Cup Line)",
          "where": "Side Window of Office Kettle",
          "whatItDoes": "Confirms enough cold water is available for the round before switching on the boil toggle."
        },
        {
          "button": "100°C Boil Switch & 3-Minute Steep Timer",
          "where": "Base of Office Kettle & Kitchen Wall",
          "whatItDoes": "Heats water to 100°C and tracks the 3-minute teabag steep before milk is added."
        },
        {
          "button": "4-Mug Non-Slip Tray (15mm Safety Rim)",
          "where": "Office Kitchen Counter",
          "whatItDoes": "Caps each delivery batch at 2–3 priority mugs (hard ceiling of 4) so no scalding drinks spill in the corridor."
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Tea tastes like dishwater.",
          "cause": "Brewed for 4 seconds or milk poured in before the teabag steeped.",
          "fix": "Leave teabag in boiling water for 3 full minutes before adding milk."
        }
      ]
    },
    "TOL-012": {
      "id": "TOL-012",
      "name": "Standalone GS Lean Maturity App & Storybook",
      "suite": "Standalone GS Lean Maturity",
      "versionBadge": "",
      "category": "Standalone 28-Question Assessment & Storybook",
      "purpose": "Explore the 5 maturity levels in the Maturity Model Storybook and Maturity Explainer flashcards, score all 28 questions against the 70% site rule, inspect the Radar Dashboard & Gateway caps, and export local assessment files.",
      "accessUrl": "GS Lean Maturity (https://megblcntpvc72.ad101.siemens-energy.net/gs-lean-maturity/)",
      "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/gs-lean-maturity/",
      "secondaryLiveUrl": "https://share.gemini.google/UjLQiIQXFbgc",
      "secondaryLiveLabel": "Maturity Model Storybook ↗",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "CRITICAL HEADER RULE: Before scoring any cards, confirm 'New Standard' is active and enter your exact Organisation Code in the 'Org' box (for example, GS-TI-EUW-BER01) and the exact 'Date of Assessment' in the top User Data Plate—these two fields auto-name your exported files (<OrgCode>_<YYYY-MM-DD>_Lean_Assessment.json), index your baseline on the GS Dashboard and in '600 Maturity Submissions', and stamp all downstream reports.",
        "Open the Standalone GS Lean Maturity app and click 'Maturity Model Storybook' or 'Maturity Explainer' to review the 5 maturity levels and 10 themes before scoring.",
        "First-time baseline assessments are completed with your Lean Core Team partner; ongoing assessments are completed directly with your Site Leadership Team as a self-assessment."
      ],
      "quickCommands": [
        {
          "goal": "Set Mandatory Header Key (Before Scoring)",
          "command": "Enter exact Org Code in 'Org' + exact 'Date of Assessment' in the top User Data Plate"
        },
        {
          "goal": "Open the 5-Level & 10-Theme Flashcards",
          "command": "Click 'Maturity Model Storybook' or 'Maturity Explainer' in the top action bar"
        },
        {
          "goal": "Inspect the 10-Theme Radar Chart & Gateway Status",
          "command": "Click 'View Dashboard' in the top action bar (includes 'Export to PDF')"
        },
        {
          "goal": "Export assessment files & share with Core Team",
          "command": "Click 'Export Assessment (.json & .csv)' → Save locally and send a copy to your Lean Core Team partner for '600 Maturity Submissions'"
        }
      ],
      "buttonsReference": [
        {
          "button": "Org (Organisation Code — Critical Header Field)",
          "where": "User Data Plate (Top-Right Input Box)",
          "whatItDoes": "CRITICAL: Enter your exact official Organisation Code (for example, GS-TI-EUW-BER01). The app uses this field to name your exported files (<OrgCode>_<YYYY-MM-DD>_Lean_Assessment.json / .csv / .pdf), match your site on the GS Dashboard, index official submissions in '600 Maturity Submissions', and stamp all downstream reports."
        },
        {
          "button": "Date of Assessment (Critical Header Field)",
          "where": "User Data Plate (Second Row, Left Date Picker)",
          "whatItDoes": "CRITICAL: Select the exact date of the assessment (YYYY-MM-DD). Together with the Org Code, this date stamps your exported filenames, tracks baseline vs. re-assessment progress over time on the GS Dashboard, and populates downstream Analysis Report and Charter headers."
        },
        {
          "button": "✦ Maturity Model Storybook",
          "where": "Top Header / Left Sidebar Launcher",
          "whatItDoes": "Opens the interactive Maturity Model Storybook (https://share.gemini.google/UjLQiIQXFbgc) to explain the 5 maturity levels (Awareness to Lean Enterprise) and how Lean capability and business need fit together."
        },
        {
          "button": "Maturity Explainer",
          "where": "Top Action Bar (Bright Purple Button)",
          "whatItDoes": "Opens the plain-English flashcard reference guide covering all 5 maturity levels, 10 themes, and 28 questions."
        },
        {
          "button": "New Standard / Old Standard",
          "where": "Top Action Bar (Right Toggle — Petrol Active)",
          "whatItDoes": "Switches between the active New Standard (2026) scoring rubric and legacy Old Standard text. Always keep set to 'New Standard'."
        },
        {
          "button": "View Dashboard",
          "where": "Top Action Bar (Deep Plum Button)",
          "whatItDoes": "Opens the Assessment Dashboard modal displaying the 10-theme radar chart, category bar chart, overall maturity level, and Gateway Status table (with 'Export to PDF')."
        },
        {
          "button": "Export Assessment (.json & .csv)",
          "where": "Top Action Bar (Petrol Button)",
          "whatItDoes": "Downloads your assessment as both a .json data file (ready to load into Navigator Toolkit or PM Maturity Hub) and a .csv spreadsheet. Send a copy to your Lean Core Team partner for official archiving in '600 Maturity Submissions'."
        },
        {
          "button": "Import Assessment (.json / .csv)",
          "where": "Top Action Bar (Deep Plum Button)",
          "whatItDoes": "Reloads a previously saved .json or .csv assessment file into the 28-card grid so you can inspect or update ratings."
        },
        {
          "button": "? User Guide",
          "where": "Top Action Bar (Deep Plum Button)",
          "whatItDoes": "Opens the built-in assessment facilitation guide explaining the 1–5 scoring scale, the 70% site coverage rule, and binary foundation gates."
        },
        {
          "button": "Reset Progress",
          "where": "Top Action Bar (Danger Red Button)",
          "whatItDoes": "Clears all entered question ratings, evidence notes, and header fields back to an unassessed state."
        },
        {
          "button": "View Key",
          "where": "Top Action Bar (Deep Plum Button)",
          "whatItDoes": "Opens the Visual Key modal explaining card borders: Gold border = Starred Gateway Question (★); Petrol border = Evaluated card."
        },
        {
          "button": "Question Card Modal: Mark as Evaluated",
          "where": "Inside Open Question Card Modal (Bottom-Right Bright Purple Button)",
          "whatItDoes": "Saves your 1–5 score (or Binary 1/5 on Q1–Q3) and workplace evidence notes, marking the card with a petrol border on the grid."
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Exported file is named 'Org_Date_Lean_Assessment.json' or fails to match our site on the GS Dashboard.",
          "cause": "The 'Org' (Organisation Code) or 'Date of Assessment' box in the top User Data Plate was left blank or mistyped before exporting.",
          "fix": "Scroll up to the User Data Plate, enter your exact Organisation Code in 'Org' and the date in 'Date of Assessment', then click 'Export Assessment (.json & .csv)' again."
        },
        {
          "symptom": "Our overall maturity level on the Radar Dashboard stays at Level 1 despite several 4/5 scores.",
          "cause": "One or more Starred Gateway questions (★) in Level 1 scored below 3, capping the site's overall maturity level.",
          "fix": "Click 'View Dashboard' and inspect the Gateway Status list to see which Starred Gateway (★) is currently below 3."
        }
      ]
    },
    "TOL-AUTH-1": {
      "id": "TOL-AUTH-1",
      "name": "WYSIWYG Guide Authoring Studio & 3-Tier File Manager",
      "suite": "Lean@GS Documentation Platform",
      "versionBadge": "",
      "category": "Guide Authoring, Validation & Sharing",
      "purpose": "Create, edit, validate, and share Playbooks and Step-by-Step SOPs with live WYSIWYG preview, Ctrl+V screenshot paste, click-to-place purple highlight boxes, 1-click AI prompt generation, and 3-tier JSON storage (.leanguide.json single-playbook share & guides.json master release).",
      "accessUrl": "Top Header ('✦ Open Authoring Studio') or Left Sidebar ('✦ BUILD OR SHARE A GUIDE')",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Click '✦ Open Authoring Studio' in the top header bar or '✦ Open WYSIWYG Authoring Studio' in the left sidebar card.",
        "Use Tab 1 to build your Playbook identity and 3–6 Journey Stages, Tab 2 to write <=20-word steps and paste screenshots (Ctrl+V), and Tab 3 to copy the AI Playbook Generator Prompt.",
        "Use '⬇ Export Guide ▾' in the top header to download either a single Playbook (.leanguide.json) for colleagues or the complete Master Library (guides.json) for server release."
      ],
      "quickCommands": [
        {
          "goal": "Paste a real app screenshot into any step",
          "command": "Win+Shift+S (Snipping Tool) → Open Studio Tab 2 → Press Ctrl+V → Click image to place purple highlight box"
        },
        {
          "goal": "Share just your new Playbook with a colleague",
          "command": "Click '⬇ Export Guide ▾' → Select '⬇ Download Current Playbook Only (.leanguide.json)'"
        },
        {
          "goal": "Load & merge a colleague's Playbook into your library",
          "command": "Click '⬆ Upload Guide (.json)' → Select their .leanguide.json file (merges without wiping existing playbooks)"
        }
      ],
      "buttonsReference": [
        {
          "button": "✦ Open Authoring Studio",
          "where": "Top Header Bar (Petrol Button) & Left Sidebar Card",
          "whatItDoes": "Opens the 4-tab WYSIWYG Guide Authoring Studio modal for creating and editing Playbooks, Journey Stages, and Step-by-Step SOPs."
        },
        {
          "button": "+ Create New Playbook",
          "where": "Studio Tab 1 ('Playbook & Journey Builder' Top Bar — Petrol Button)",
          "whatItDoes": "Creates a brand-new Playbook scaffold with a default Journey Stage and SOP so you can start authoring immediately."
        },
        {
          "button": "+ Add Journey Stage",
          "where": "Studio Tab 1 ('Playbook & Journey Builder' Top Bar — Bright Purple Button)",
          "whatItDoes": "Appends a new stage card to the active Playbook's End-to-End Journey Map and links it to a step-by-step SOP."
        },
        {
          "button": "+ New SOP Guide",
          "where": "Studio Tab 2 ('SOP & Step WYSIWYG Editor' Top Bar — Purple Button)",
          "whatItDoes": "Creates a new Step-by-Step SOP runbook inside the active Playbook."
        },
        {
          "button": "+ New Step",
          "where": "Studio Tab 2 ('SOP & Step WYSIWYG Editor' Top Bar — Petrol Button)",
          "whatItDoes": "Adds a new numbered step to the selected SOP Guide with live 20-word Poka-Yoke validation."
        },
        {
          "button": "📸 Custom Screenshot (Paste Ctrl+V / Upload)",
          "where": "Studio Tab 2 ('4. Visual Mode for This Step' + Right Dropzone)",
          "whatItDoes": "Lets you press Ctrl+V to paste a screenshot directly from Windows Snipping Tool (Win+Shift+S), auto-compresses it to Base64, and lets you click anywhere on the image to place a purple highlight box."
        },
        {
          "button": "📋 Copy AI Playbook Prompt",
          "where": "Studio Tab 3 ('AI Generator Prompt & Raw JSON' — Bright Purple Button)",
          "whatItDoes": "Copies a ready-to-use system prompt to your clipboard so M365 Copilot or Gemini can convert rough Word/PowerPoint notes into a valid Lean@GS Playbook JSON in 60 seconds."
        },
        {
          "button": "⬇ Download Current Playbook Only (.leanguide.json)",
          "where": "Top Header '⬇ Export Guide ▾' Dropdown & Studio Modal Top Bar (Petrol Button)",
          "whatItDoes": "Tier 2 Export: Downloads ONLY the currently active Playbook (plus its linked SOPs, Tools, Roles, and embedded Base64 screenshots) as a standalone <Playbook-Slug>.leanguide.json file for sharing via Teams, Email, or SharePoint."
        },
        {
          "button": "⬇ Download Master Library (guides.json)",
          "where": "Top Header '⬇ Export Guide ▾' Dropdown & Studio Modal Top Bar (Bright Purple Button)",
          "whatItDoes": "Tier 3 Export: Downloads the complete multi-playbook master guides.json database for official repository deployment to the corporate server (megblcntpvc72)."
        },
        {
          "button": "⬆ Upload Guide (.json)",
          "where": "Top Header Bar, Left Sidebar Card & Studio Modal Top Bar",
          "whatItDoes": "Smart Upload & Merge: Accepts either a colleague's single-playbook .leanguide.json file (merging it into your active library without deleting existing playbooks) OR a complete master guides.json file."
        },
        {
          "button": "↺ Reset Local Browser Edits",
          "where": "Studio Tab 1, Tab 2 & Tab 3 Bottom Bar",
          "whatItDoes": "Clears local browser draft edits from localStorage and restores the official server library snapshot."
        }
      ],
      "troubleshooting": [
        {
          "symptom": "The step editor shows a red word-count pill and blocks saving.",
          "cause": "The step action exceeds the 20-word Simplified Technical English limit or contains a banned raw acronym.",
          "fix": "Shorten the step action to 20 words or fewer starting with an imperative verb, and move extra explanation into the Supporting Detail or Coaching Tip box."
        },
        {
          "symptom": "I created a new Playbook in my browser—how do I send just that Playbook to a colleague without sending the whole database?",
          "cause": "Browser edits live in Tier 1 (localStorage) until exported.",
          "fix": "Click '⬇ Export Guide ▾' in the top header and choose '⬇ Download Current Playbook Only (.leanguide.json)'. Send that file to your colleague—they can click '⬆ Upload Guide (.json)' to merge it in one click."
        }
      ]
    }
  },
  "processes": {
    "PRC-001": {
      "id": "PRC-001",
      "title": "Check Your Site's Current Score & Analyse Gaps",
      "appName": "Navigator Toolkit / GS Lean Maturity",
      "versionBadge": "",
      "durationBadge": "90 mins",
      "whenToUse": "1st Time: With a Lean Core Team partner • Ongoing: With your Site Leadership Team (Core Team optional).",
      "cardOutput": "Completed 28-question capability baseline & focused 2–3 gap analysis in Analysis Report.",
      "ctaLabel": "Start Stage 1 Assessment Guide",
      "category": "Stages 1 & 2: Capability Baseline & Analysis",
      "userGoal": "Establish your site's baseline Lean capability across all 28 questions, verify real workplace proof across ~70% of teams, and identify 2–3 priority Gateway gaps in Analysis Report.",
      "trigger": "First-time site baseline (with Core Team partner) or ongoing leadership self-assessment before a Navigator Workshop.",
      "finalOutcome": "Exported Assessment (.json & .csv) saved locally for Navigator Toolkit (Analysis Report), with a copy sent to your Lean Core Team partner for official filing in '600 Maturity Submissions'.",
      "valueAddCoaching": "Treat the assessment as a helpful self-assessment of capability, never an audit. Lowering an old score when a habit stops is a win because it directs help to the real bottleneck.",
      "raci": {
        "responsible": "ROL-001",
        "accountable": "ROL-003",
        "consulted": [
          "ROL-002"
        ],
        "informed": [
          "ROL-003"
        ]
      },
      "stages": [
        {
          "stageNumber": 1,
          "name": "Stage 1: Complete the Site Maturity Assessment",
          "sopId": "SOP-001",
          "toolIds": [
            "TOL-000",
            "TOL-001"
          ],
          "summary": "Review Orientation & Process Overview, then score all 28 questions using the 70% site rule (1st time with Core Team partner; ongoing with Site Leadership Team)."
        },
        {
          "stageNumber": 2,
          "name": "Stage 2: Analysis — Strengths, Gaps & Gateway Caps",
          "sopId": "SOP-002",
          "toolIds": [
            "TOL-002"
          ],
          "summary": "Upload your assessment into Navigator Toolkit → Analysis Report to inspect the 10-stage diagnostic and focus on 2–3 priority Gateway gaps."
        }
      ]
    },
    "PRC-002": {
      "id": "PRC-002",
      "title": "Run the Navigator Workshop, Charter & Action Plan",
      "appName": "Lean@GS Navigator Toolkit",
      "versionBadge": "",
      "durationBadge": "Half Day",
      "whenToUse": "After completing your Maturity Assessment & Analysis (Stages 1–2).",
      "cardOutput": "Voice of the Customer (VOC), 1-Page Navigator Charter & owned Action Log.",
      "ctaLabel": "Start Stages 3–6 Navigator Guide",
      "category": "Stages 3–6: VOC, Workshop, Charter & Action Plan",
      "userGoal": "Capture leadership Voice of the Customer (VOC) priorities and combine them with your Lean capability gaps to agree a 1-Page Charter (2–3 key initiatives) and Action Plan.",
      "trigger": "Site is ready to connect Lean capability (Stages 1–2) with business needs (Stage 3) for the next 6 to 12 months.",
      "finalOutcome": "Saved Workshop Session (.leansession), 1-Page Navigator Charter Infographic (.pptx) with 2–3 focus initiatives, and owned Action Log (.csv).",
      "valueAddCoaching": "Never walk into a Navigator Workshop with only Maturity scores. Pairing foundational Gateway gaps with the Site Leader's top 3 business headaches turns 'Lean tasks' into urgent business solutions.",
      "raci": {
        "responsible": "ROL-001",
        "accountable": "ROL-003",
        "consulted": [
          "ROL-002"
        ],
        "informed": [
          "ROL-002"
        ]
      },
      "stages": [
        {
          "stageNumber": 1,
          "name": "Stage 3: Voice of the Customer (VOC)",
          "sopId": "SOP-003",
          "toolIds": [
            "TOL-004"
          ],
          "summary": "Capture leadership business priorities and pain points inside Navigator Toolkit → VOC Input."
        },
        {
          "stageNumber": 2,
          "name": "Stages 4–6: Navigator Workshop, 1-Page Charter & Action Plan",
          "sopId": "SOP-004",
          "toolIds": [
            "TOL-005",
            "TOL-009",
            "TOL-010"
          ],
          "summary": "Facilitate the 3-module Workshop Guide, draft 2–3 focus initiatives in Charter Input & Charter & Roadmaps, and assign owners in Action Log."
        }
      ],
      "summary": "Upload your saved .json assessment file into Analysis Report to unlock the 10-stage diagnostic workspace, inspect strengths and locked Foundation Gateways (★), select 2–3 capability actions supporting your business priorities, and save your .leansession file."
    },
    "PRC-003": {
      "id": "PRC-003",
      "playbookId": "PLB-PMHUB",
      "title": "Run the Standalone Lean@GS PM Maturity Hub Suite",
      "appName": "Lean@GS PM Maturity Hub",
      "versionBadge": "",
      "durationBadge": "60 mins",
      "whenToUse": "When using the standalone PM Maturity Hub for Phase 1: Assess (Score Explainer), Phase 2: Visualize (Metro Journey & 4 Pillars), Phase 3: Plan (Strategy Builder & Simulator), or Utilities (CSV to JSON Fixer).",
      "cardOutput": "Score Explainer diagnostic, Metro Journey & 4 Pillars visualisations, Strategy Builder plan & Simulator model.",
      "ctaLabel": "Start PM Maturity Hub Guide",
      "category": "Standalone PM Maturity Hub Suite",
      "userGoal": "Use the standalone PM Maturity Hub tools to inspect Gateway score caps in Score Explainer, visualise Metro Journey and The 4 Pillars, and model local plans in Strategy Builder and Simulator.",
      "trigger": "Local Programme Manager wants to explore Score Explainer math, Metro Journey visualisations, or Strategy Builder simulations.",
      "finalOutcome": "Visualised Metro Journey & 4 Pillars plus simulated local improvement plan and clean JSON/CSV files.",
      "valueAddCoaching": "PM Maturity Hub is a standalone exploration and simulation suite—use its Score Explainer and Metro Journey to visualise how Gateway caps work.",
      "raci": {
        "responsible": "ROL-001",
        "accountable": "ROL-001",
        "consulted": [
          "ROL-002"
        ],
        "informed": [
          "ROL-003"
        ]
      },
      "stages": [
        {
          "stageNumber": 1,
          "name": "Phases 1 & 2: Assess (Score Explainer) & Visualize (Metro Journey & 4 Pillars)",
          "sopId": "SOP-005",
          "toolIds": [
            "TOL-007",
            "TOL-003"
          ],
          "summary": "Load your assessment into PM Maturity Hub to inspect Score Explainer and view Metro Journey and The 4 Pillars."
        },
        {
          "stageNumber": 2,
          "name": "Phase 3 & Utilities: Plan (Strategy Builder & Simulator) & CSV to JSON Fixer",
          "sopId": "SOP-006",
          "toolIds": [
            "TOL-006",
            "TOL-011"
          ],
          "summary": "Select Light, Standard, or Intense templates in Strategy Builder, test sliders in Simulator, and fix legacy CSV files."
        }
      ]
    },
    "PRC-004": {
      "id": "PRC-004",
      "playbookId": "PLB-DEMO",
      "title": "Run the Morning Office Brew Round Without Spilling",
      "appName": "Office Brew Sandbox",
      "versionBadge": "",
      "durationBadge": "10 mins",
      "whenToUse": "Whenever the team hits the 10:00 AM caffeine slump (or when demoing this Guide System to stakeholders).",
      "cardOutput": "2–3 properly steeped hot drinks delivered on a stable tray without dishwater tea.",
      "ctaLabel": "Start Office Brew Guide",
      "category": "Neutral Stakeholder Walkthrough",
      "userGoal": "Check kitchen supplies, match colleague drink requests to actual fridge stock, and deliver a safe 2–3 mug batch within 10 minutes.",
      "trigger": "Morning stand-up finishes or a colleague asks 'Anyone putting the kettle on?'",
      "finalOutcome": "Happy, caffeinated colleagues and zero spilled mugs on the office carpet.",
      "valueAddCoaching": "Never take 9 drink orders before looking inside the fridge. Checking your kitchen baseline first prevents promising oat-milk lattes when you only have three teabags and a splash of semi-skimmed.",
      "raci": {
        "responsible": "ROL-001",
        "accountable": "ROL-003",
        "consulted": [
          "ROL-002"
        ],
        "informed": [
          "ROL-004"
        ]
      },
      "stages": [
        {
          "stageNumber": 1,
          "name": "Stages 1–3: Check Kitchen Baseline, Spot Gaps & Take Orders",
          "sopId": "SOP-007",
          "toolIds": [
            "TOL-008"
          ],
          "summary": "Check water, milk, and clean mugs first, then capture what colleagues actually want to drink."
        },
        {
          "stageNumber": 2,
          "name": "Stages 4–6: Match Orders, Lock Tray Charter & Deliver Drinks",
          "sopId": "SOP-008",
          "toolIds": [
            "TOL-008"
          ],
          "summary": "Combine orders with real fridge supplies, lock a 2–3 mug batch on the tray, and brew for 3 full minutes."
        }
      ]
    },
    "PRC-005": {
      "id": "PRC-005",
      "playbookId": "PLB-MATURITY",
      "title": "Run a Standalone 28-Question Maturity Assessment & Explore the Storybook",
      "appName": "Standalone GS Lean Maturity",
      "versionBadge": "",
      "durationBadge": "60–90 mins",
      "whenToUse": "When completing a standalone 28-question assessment, exploring the Maturity Model Storybook & Explainer flashcards, or reviewing the Radar Dashboard before choosing your next path.",
      "cardOutput": "Completed 28-question capability baseline, Radar Dashboard review & exported local assessment files.",
      "ctaLabel": "Start Standalone Maturity Guide",
      "category": "Standalone GS Lean Maturity & Storybook",
      "userGoal": "Explore the 5 maturity levels and 10 themes in the Storybook and Maturity Explainer, score all 28 questions against the 70% site rule, inspect the Radar Dashboard & Gateway caps, and export your assessment.",
      "trigger": "Local Programme Manager wants to understand the 5 levels in the Storybook or run a standalone 28-question capability baseline.",
      "finalOutcome": "Exported Assessment files saved locally (ready to load into Navigator Toolkit or PM Maturity Hub), with a copy sent to your Lean Core Team partner for official archiving in '600 Maturity Submissions'.",
      "valueAddCoaching": "Treat the 28-question check as a supportive capability self-assessment, never an audit. First-time assessments are completed with your Lean Core Team partner; ongoing assessments are completed directly with your Site Leadership Team.",
      "raci": {
        "responsible": "ROL-001",
        "accountable": "ROL-003",
        "consulted": [
          "ROL-002"
        ],
        "informed": [
          "ROL-003"
        ]
      },
      "stages": [
        {
          "stageNumber": 1,
          "name": "Stages 1 & 2: Explore Storybook, Set Up Header & Score the 28 Questions",
          "sopId": "SOP-009",
          "toolIds": [
            "TOL-012"
          ],
          "summary": "Walk through the Maturity Model Storybook and Maturity Explainer flashcards, fill in the header details, and score all 28 cards using the 70% site rule."
        },
        {
          "stageNumber": 2,
          "name": "Stages 3 & 4: Review the Radar Dashboard & Export Assessment Files",
          "sopId": "SOP-010",
          "toolIds": [
            "TOL-012"
          ],
          "summary": "Click 'View Dashboard' to inspect the 10-theme radar chart and Gateway caps, then export your assessment files and choose your next path."
        }
      ]
    },
    "PRC-AUTH": {
      "id": "PRC-AUTH",
      "playbookId": "PLB-AUTHOR",
      "title": "Design, Build, Validate & Share a Lean@GS Playbook",
      "appName": "Lean@GS WYSIWYG Authoring Studio",
      "versionBadge": "",
      "durationBadge": "15 mins",
      "whenToUse": "Whenever a Subject Matter Expert, Local Programme Manager, or Core Team member wants to turn a process, tool, or Word SOP into an interactive Lean@GS Playbook.",
      "cardOutput": "Validated, portable .leanguide.json Playbook or updated master guides.json library.",
      "ctaLabel": "Start Authoring Masterclass",
      "category": "Guide Authoring & Publishing Masterclass",
      "userGoal": "Build a crystal-clear, 10-second Playbook in the WYSIWYG Authoring Studio, paste real screenshots with highlight boxes, validate against the 5 Naive Colleague checks, and share via .leanguide.json.",
      "trigger": "New process, software workflow, or complex Word SOP needs to be turned into a practical, step-by-step user guide.",
      "finalOutcome": "Portable <Playbook-Slug>.leanguide.json file shared with colleagues or merged into the corporate master guides.json release.",
      "valueAddCoaching": "Never write a guide that reads like a software manual or compliance audit. Start with the real-world job, keep every step action under 20 words, and show the real screen.",
      "raci": {
        "responsible": "ROL-001",
        "accountable": "ROL-002",
        "consulted": [
          "ROL-003"
        ],
        "informed": [
          "ROL-004"
        ]
      },
      "stages": [
        {
          "stageNumber": 1,
          "name": "Stages 1 & 2: Create a New Playbook & Map the Journey in the WYSIWYG Studio",
          "sopId": "SOP-AUTH-1",
          "toolIds": [
            "TOL-AUTH-1"
          ],
          "summary": "Open the Authoring Studio, click '+ Create New Playbook', write your Golden Principle, and map 3 to 6 clean Journey Stages."
        },
        {
          "stageNumber": 2,
          "name": "Stages 3 & 4: Write <=20-Word Steps, Paste Screenshots (Ctrl+V) & Add Button Tables",
          "sopId": "SOP-AUTH-2",
          "toolIds": [
            "TOL-AUTH-1"
          ],
          "summary": "Write imperative step actions under 20 words, press Ctrl+V to paste real screenshots with purple highlight boxes, or use the AI Prompt Generator."
        },
        {
          "stageNumber": 3,
          "name": "Stage 5: Save, Download, Upload & Share Playbook Files (.leanguide.json & guides.json)",
          "sopId": "SOP-AUTH-3",
          "toolIds": [
            "TOL-AUTH-1"
          ],
          "summary": "Use the 3-tier storage bar to auto-save in your browser, export a single .leanguide.json file to share with colleagues, or publish the master guides.json."
        }
      ]
    }
  },
  "sops": {
    "SOP-001": {
      "id": "SOP-001",
      "title": "Stage 1: Complete the Site Maturity Assessment",
      "processId": "PRC-001",
      "roleId": "ROL-001",
      "toolIds": [
        "TOL-000",
        "TOL-001"
      ],
      "estimatedTime": "90 mins",
      "stationLocation": "Navigator Toolkit → Maturity Assessment (↳ Maturity Explainer & Interactive Roadmap)",
      "kitBag": {
        "leadRole": "Lead: Local Programme Manager (LPM) with Site Leadership Team",
        "supportRole": "1st time: with Lean Core Team partner; Ongoing: Core Team optional",
        "mandatoryStatus": "Stage 1 • Baseline Capability",
        "inputNeeded": "Workplace Evidence (~70% of Site Teams)",
        "outputProduced": "Baseline Lean Capability Scorecard (28 Questions)"
      },
      "userGoal": "Establish your site's baseline Lean capability across all 28 questions—completed with a Lean Core Team partner on your first assessment to learn the tool, and directly with your Site Leadership Team on ongoing assessments.",
      "gettingStarted": [
        "CRITICAL — Get the Org Code & Date Right in the Header: Confirm the top-right toggle is on 'New Standard' and enter your exact Organisation Code in the 'Org' field (for example, GS-TI-EUW-BER01) and the exact 'Date of Assessment' in the top User Data Plate (alongside Project/Department Name, Assessed By, For OE Local PM, GS Dashboard Yes/No, and Scope). These two fields automatically name your exported files (<OrgCode>_<YYYY-MM-DD>_Lean_Assessment.json), index your submission for the GS Dashboard and '600 Maturity Submissions', and stamp all downstream reports.",
        "First-Time Assessment (Learning the Tool): Complete the assessment together with a Lean Core Team partner to learn how the 28 questions and workplace evidence work.",
        "Ongoing Assessments (Leadership Self-Assessment): Complete the assessment directly with your Site Leadership Team as a self-assessment of capability (not an audit), with Core Team support available when needed."
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Select 'New Standard' and enter your exact Org Code and Date of Assessment in the header.",
          "detail": "CRITICAL: In the top User Data Plate, enter your exact Organisation Code in 'Org' (for example, GS-TI-EUW-BER01) and the exact 'Date of Assessment'—alongside Project/Department Name, Assessed By, For OE Local PM, Applicable for GS Dashboard (Yes/No), and Scope. First-time assessments are completed with your Lean Core Team partner; ongoing assessments are completed directly with your Site Leadership Team.",
          "toolId": "TOL-001",
          "coachingTip": "Getting the Org Code and Date of Assessment right in the header is critical: the app uses these two fields to name your exported files (<OrgCode>_<YYYY-MM-DD>_Lean_Assessment.json), match your site on the GS Dashboard, and stamp every downstream Analysis Report and Charter.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/nav-maturity.png",
            "src": "assets/screenshots/nav-maturity.png",
            "caption": "Lean@GS Navigator Toolkit — Maturity Assessment Header: Critical 'Org' Code & 'Date of Assessment' Highlighted",
            "hotspot": {
              "xPercent": 3.5,
              "yPercent": 28,
              "widthPercent": 93,
              "heightPercent": 20,
              "label": "1. Critical: Enter Exact 'Org' Code & 'Date of Assessment' in Header"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Apply the 70% site rule before awarding any score of 3, 4, or 5.",
          "detail": "Click each question card to open the scoring modal—gold-bordered Gateway cards (★) and standard cards must work across roughly 70% of the site with real boards and logs to score 3 or higher.",
          "toolId": "TOL-001",
          "coachingTip": "One enthusiastic pilot area or a written slide deck that nobody uses scores a 2 (Just Starting), never a 3.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/nav-question-modal.png",
            "caption": "Lean@GS Navigator Toolkit — Open Question Scoring Modal (1–5 Scoring Criteria, Evidence Notes & Score Selector)",
            "hotspot": {
              "xPercent": 50,
              "yPercent": 20,
              "widthPercent": 33,
              "heightPercent": 37,
              "label": "2. Check Level 3 (~70% Site Proof) & Score 1–5"
            }
          }
        },
        {
          "stepNumber": 3,
          "action": "Click 'View Dashboard' to review draft ratings with leaders and update only with real proof.",
          "detail": "Walk leaders through the 10-theme radar chart and adjust a card rating only if physical workplace evidence proves it.",
          "toolId": "TOL-001",
          "coachingTip": "If a habit scored 4 last year but stopped working, lower the score openly so the site gets support to rebuild it.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/nav-maturity.png",
            "caption": "Lean@GS Navigator Toolkit — Click 'View Dashboard' to Review Radar Chart with Leaders",
            "hotspot": {
              "xPercent": 7.5,
              "yPercent": 15.5,
              "widthPercent": 12,
              "heightPercent": 6,
              "label": "3. Click 'View Dashboard'"
            }
          }
        },
        {
          "stepNumber": 4,
          "action": "Click 'Export Assessment (.json & .csv)' to save your files locally for Navigator analysis.",
          "detail": "Load the .json file into Navigator Toolkit (Analysis Report). Send a copy to your Lean Core Team partner—only Core Team members can file official submissions in the '600 Maturity Submissions' folder.",
          "toolId": "TOL-001",
          "coachingTip": "Keep your local .json file handy—it loads directly into Navigator Analysis Report without re-typing any scores.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/nav-maturity.png",
            "caption": "Lean@GS Navigator Toolkit — Click 'Export Assessment (.json & .csv)'",
            "hotspot": {
              "xPercent": 19.5,
              "yPercent": 15.5,
              "widthPercent": 21,
              "heightPercent": 6,
              "label": "4. Export Assessment (.json & .csv)"
            }
          }
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Exported file downloads as 'Org_Date_Lean_Assessment.json' or cannot be matched on the GS Dashboard.",
          "cause": "The 'Org' (Organisation Code) or 'Date of Assessment' field in the top User Data Plate was left blank or mistyped before exporting.",
          "fix": "Enter your exact official Organisation Code in the 'Org' box and the exact date in 'Date of Assessment' in the top User Data Plate, then click 'Export Assessment (.json & .csv)' again."
        },
        {
          "symptom": "A manager insists a single high-performing cell justifies a score of 3 for the whole site.",
          "cause": "Confusing a local pilot (Score 2) with a site-wide standard (Score 3).",
          "fix": "Point to the 70% Site Rule: score it 2 today and use your Navigator Charter to scale that cell's standard to 70% of teams."
        }
      ]
    },
    "SOP-002": {
      "id": "SOP-002",
      "title": "Stage 2: Analysis — Understand Strengths, Gaps & Gateway Caps",
      "processId": "PRC-001",
      "roleId": "ROL-001",
      "toolIds": [
        "TOL-002"
      ],
      "estimatedTime": "45 mins",
      "stationLocation": "Navigator Toolkit → Analysis Report",
      "kitBag": {
        "mandatoryStatus": "Mandatory Core Stage",
        "leadRole": "Local Programme Manager (LPM)",
        "supportRole": "Supported by Lean Core Team Partner",
        "inputNeeded": "Exported <Org>_<Date>_Lean_Assessment.json file from Stage 1",
        "outputProduced": "Saved <Org>_<Date>_Session.leansession file (with 2–3 selected capability actions & custom OE Action notes) + Optional PowerPoint / PDF Report"
      },
      "userGoal": "Upload your saved .json assessment file into Navigator Toolkit (Analysis Report) to unlock the hidden 10-stage diagnostic workspace, review your site's strengths and locked Foundation Gateways (★), select 2 to 3 capability actions supporting your business needs, and save your .leansession file.",
      "gettingStarted": [
        "Locate the <Org>_<Date>_Lean_Assessment.json file you exported at the end of Stage 1.",
        "Open Navigator Toolkit and click 'Analysis Report' in the left-hand navigation sidebar.",
        "Remember: Until you upload your .json assessment file, the 10-stage diagnostic accordion and action selection controls remain hidden behind a placeholder card."
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Upload your saved .json assessment file into Analysis Report.",
          "detail": "Click the 'Upload Assessment (.json / .csv)' button in Navigator Toolkit → Analysis Report and select your <Org>_<Date>_Lean_Assessment.json file to unlock the hidden analysis workspace, populate Assessment Details, and enter your analyst names.",
          "coachingTip": "Uploading your .json file reveals the full post-upload Analysis Report workspace—including populated Assessment Details, the Master Action Bar, and all 10 Roadmap Stage cards below.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/nav-analysis-uploaded.png",
            "src": "assets/screenshots/nav-analysis-uploaded.png",
            "caption": "Navigator Toolkit — Post-Upload Analysis Report Workspace Unlocked (.json Loaded)",
            "hotspot": {
              "x": 50,
              "y": 31,
              "w": 24,
              "h": 9,
              "label": "1. Upload Assessment (.json / .csv)"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Review your site's strengths, low-scoring themes, and locked Foundation Gateways (★).",
          "detail": "Check the populated 10-Stage Diagnostic Accordion to see where your organisation is strong (green 'Pass' stages) and expand red 'Foundation Focus' or yellow 'Opportunity for Growth' stages to see which Starred Gateway questions (★) scored below 3.",
          "coachingTip": "Treat red 'Foundation Focus' stages as capability enablers: identify which missing Foundation Gateways (★ < 3) are holding back your teams from solving their top operational business priorities.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/nav-analysis-gaps.png",
            "src": "assets/screenshots/nav-analysis-gaps.png",
            "caption": "Navigator Toolkit — Populated 10-Stage Gap Summary & Expanded Gateway Breakdown",
            "hotspot": {
              "x": 50,
              "y": 74,
              "w": 78,
              "h": 10,
              "label": "2. Review Strengths & Expand Foundation Focus (★)"
            }
          }
        },
        {
          "stepNumber": 3,
          "action": "Choose two to three recommended capability actions or create custom actions supporting business needs.",
          "detail": "In the recommendations and action builder section that appears inside each expanded gap stage, tick 'Accept Proposed Action (Y/N)' to select the built-in recommendation that fits your site—or type a custom action ('OE Action') and notes ('OE Comment') tailored to the business problems (Lead Time, Quality, Throughput, Cost, Overheads, Inventory, Complexity) you need to solve.",
          "coachingTip": "Never select 10+ generic maturity actions. Pick 2 to 3 focused capability actions and tailor the 'OE Action' box so it pairs a concrete business priority (such as Lead Time or Quality) with the enabling Lean capability.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/nav-analysis-actions.png",
            "src": "assets/screenshots/nav-analysis-actions.png",
            "caption": "Navigator Toolkit — Post-Upload Action Selection ('Accept Proposed Action', 'OE Comment' & 'OE Action')",
            "hotspot": {
              "x": 50,
              "y": 78,
              "w": 78,
              "h": 32,
              "label": "3. Accept Proposed Action & Write Custom OE Action"
            }
          }
        },
        {
          "stepNumber": 4,
          "action": "Save your .leansession file or export your draft analysis slides.",
          "detail": "Click 'Save Session (.leansession)' in the bottom-left sidebar to carry your selected capability actions and custom OE Action notes into VOC Input and the Navigator Workshop, or click 'Export to PowerPoint' in the Master Action Bar for a leadership briefing deck.",
          "coachingTip": "Saving a .leansession file bundles your uploaded assessment scores, analyst details, accepted actions, and custom OE Action notes into one portable file for Stages 3, 4, and 5.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/nav-analysis-export-session.png",
            "src": "assets/screenshots/nav-analysis-export-session.png",
            "caption": "Navigator Toolkit — Left Sidebar 'Save Session (.leansession)' & Master Action Bar 'Export to PowerPoint'",
            "hotspot": {
              "x": 9,
              "y": 75,
              "w": 17,
              "h": 6,
              "label": "4. Save Session (.leansession) & Export Slides"
            }
          }
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Analysis Report lists many recommended actions across all 10 stages.",
          "cause": "Each low question triggers a recommendation in the diagnostic engine.",
          "fix": "Select only 2 to 3 priority capability gaps (starting with failed starred Gateways) to bring into Stage 4."
        }
      ]
    },
    "SOP-003": {
      "id": "SOP-003",
      "title": "Stage 3: Voice of the Customer (VOC) — Understand Business Priorities",
      "processId": "PRC-002",
      "roleId": "ROL-001",
      "toolIds": [
        "TOL-004"
      ],
      "estimatedTime": "2 hours (Pre-Work)",
      "stationLocation": "Navigator Toolkit → VOC Input",
      "kitBag": {
        "leadRole": "Lead: Local Programme Manager (LPM) with Site Leaders",
        "supportRole": "Optional Support: Lean Core Team",
        "mandatoryStatus": "Stage 3 • Voice of the Customer (VOC)",
        "inputNeeded": "Leader & Stakeholder Interviews",
        "outputProduced": "Clear Business Priorities & Leadership Pain Points (VOC Entries & Session Backup)"
      },
      "userGoal": "Engage site leadership and stakeholders to capture their critical business challenges, measures of breakthrough success, and the problems they need Lean to solve.",
      "gettingStarted": [
        "Open Navigator Toolkit and select 'VOC Input' in the left navigation sidebar.",
        "Schedule short 1-on-1 interviews with site leaders and ask the primary guiding question: 'If you could fix one thing in the next 12 months to significantly improve operational performance and flow, what would it be?'"
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Open VOC Input in Navigator Toolkit and ask site leaders the guiding business-need questions.",
          "detail": "Use the Primary Guiding Question and Probing Questions on the VOC Input screen to uncover real operational bottlenecks.",
          "toolId": "TOL-004",
          "coachingTip": "Focus on business pain points (delivery lead time, repeat defects, handoff delays) rather than asking leaders which Lean tool they want.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/nav-voc.png",
            "caption": "Lean@GS Navigator Toolkit — VOC Input: Pre-Work Checklist & Guiding Question",
            "hotspot": {
              "xPercent": 15,
              "yPercent": 33,
              "widthPercent": 70,
              "heightPercent": 36,
              "label": "1. Ask Guiding Business-Need Question"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Record leader interviews inside VOC Input, click 'Export VOC to CSV', and save your '.leansession' file.",
          "detail": "Fill in Interview Details and Record Insights for each leader, then click 'Save Session (.leansession)' in the left sidebar.",
          "toolId": "TOL-004",
          "coachingTip": "Entries saved in VOC Input automatically synthesise into the Top 3 Leadership Priorities inside Charter Input.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/nav-voc.png",
            "caption": "Lean@GS Navigator Toolkit — VOC Input: 1. Interview Details & Record Insights",
            "hotspot": {
              "xPercent": 15,
              "yPercent": 73,
              "widthPercent": 70,
              "heightPercent": 26,
              "label": "2. Record Leader Interview Details"
            }
          }
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Site leaders want to skip pre-workshop interviews to save time.",
          "cause": "Busy calendars before the workshop.",
          "fix": "Do a 10-minute hallway or phone check for just their top 3 headaches—entering the workshop without leader priorities turns the meeting into a debate."
        }
      ]
    },
    "SOP-004": {
      "id": "SOP-004",
      "title": "Stages 4–6: Navigator Workshop, 1-Page Charter & Action Plan",
      "processId": "PRC-002",
      "roleId": "ROL-001",
      "toolIds": [
        "TOL-005",
        "TOL-009",
        "TOL-010"
      ],
      "estimatedTime": "Half Day Workshop + Monthly Review",
      "stationLocation": "Navigator Toolkit → Workshop Guide, Charter Input, Charter & Roadmaps, Action Log",
      "kitBag": {
        "leadRole": "Owner & Lead: Local Programme Manager (LPM) with Site Leadership Team",
        "supportRole": "Optional Support: Lean Core Team (if facilitation or coaching is requested)",
        "mandatoryStatus": "Stages 4–6 • Workshop, Charter & Action Plan",
        "inputNeeded": "Capability Gaps (Stages 1–2) + Business Needs / VOC (Stage 3)",
        "outputProduced": "Aligned Direction (Stage 4), 1-Page Charter (Stage 5) & Action Plan (Stage 6)"
      },
      "userGoal": "Facilitate the 3-module alignment workshop, formalise Top 3 Leadership Priorities and 2–3 focus initiatives in Charter Input, and assign single-point owners and due dates in Action Log.",
      "gettingStarted": [
        "Click 'Load Session (.leansession)' in the Navigator Toolkit sidebar so your Analysis Report and VOC Input entries are active.",
        "Open Workshop Guide on the main projector screen and keep Charter Input, Charter & Roadmaps, and Action Log ready in the sidebar."
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Open Workshop Guide and run Modules 1 and 2 to connect business needs to Gateways.",
          "detail": "Module 1 aligns on the Top 3 business problems from VOC; Module 2 connects those problems to foundational Gateway gaps.",
          "toolId": "TOL-005",
          "coachingTip": "Show how strengthening Gateway #10 (Pilot Experiments) or #14 (Daily Huddles) directly unlocks the business performance leaders asked for.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/nav-workshop.png",
            "caption": "Lean@GS Navigator Toolkit — Navigator Workshop Guide",
            "hotspot": {
              "xPercent": 42,
              "yPercent": 32,
              "widthPercent": 16,
              "heightPercent": 6,
              "label": "1. Open Facilitator Help & Guide"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Enter Top 3 Leadership Priorities and 2–3 measurable Key Results inside Charter Input.",
          "detail": "Use the left 'Recommended Actions' reference panel in Charter Input and follow: [Measure] from [Start] to [Target] by [Date].",
          "toolId": "TOL-009",
          "coachingTip": "All fields in Charter Input auto-save to your session and immediately populate the executive Charter & Roadmaps infographic.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/nav-charter-input.png",
            "caption": "Lean@GS Navigator Toolkit — Navigator Charter Input (Top 3 Leadership Priorities & Gap)",
            "hotspot": {
              "xPercent": 5,
              "yPercent": 43,
              "widthPercent": 90,
              "heightPercent": 32,
              "label": "2. Enter Top 3 Leadership Priorities"
            }
          }
        },
        {
          "stepNumber": 3,
          "action": "Open Charter & Roadmaps to export slides, then assign owners and dates in Action Log.",
          "detail": "Export the 1-Page Charter PowerPoint, assign single-point Owners and Target Due Dates in Action Log, and click 'Export Action Matrix (CSV)'.",
          "toolId": "TOL-010",
          "coachingTip": "Click 'Save Session (.leansession)' in the sidebar before leaving the room so the entire workshop state is backed up in one file.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/nav-action-log.png",
            "caption": "Lean@GS Navigator Toolkit — Action Log & Ownership Matrix",
            "hotspot": {
              "xPercent": 75,
              "yPercent": 41,
              "widthPercent": 18,
              "heightPercent": 6,
              "label": "3. Assign Owners & Export Action Matrix (CSV)"
            }
          }
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Workshop discussion gets stuck debating a single question score from the site check.",
          "cause": "Re-litigating individual scores instead of focusing on strategic bottlenecks.",
          "fix": "Remind the room that the assessment is one input; pivot immediately to which foundational Gateway unlocks the leader's top 3 business priorities."
        }
      ]
    },
    "SOP-005": {
      "id": "SOP-005",
      "title": "Phases 1 & 2: Score Assessment, Inspect Score Explainer & View Metro Journey / 4 Pillars",
      "processId": "PRC-003",
      "roleId": "ROL-001",
      "toolIds": [
        "TOL-007",
        "TOL-003"
      ],
      "estimatedTime": "45 mins",
      "stationLocation": "PM Maturity Hub → Phase 1: Assess & Phase 2: Visualize",
      "kitBag": {
        "leadRole": "Lead: Local Programme Manager (LPM)",
        "supportRole": "Optional Support: Lean Core Team partner",
        "mandatoryStatus": "PM Maturity Hub • Phases 1 & 2",
        "inputNeeded": "Completed Site Maturity Assessment (.json or .csv)",
        "outputProduced": "Score Explainer Breakdown, Metro Journey & The 4 Pillars Visualisations"
      },
      "userGoal": "Complete or load your 28-question assessment in Phase 1: Assess (Maturity Assessment, Maturity Explainer, Score Explainer) and visualise progression in Phase 2: Visualize (Metro Journey, The 4 Pillars [Live], and Pillars [Static]).",
      "gettingStarted": [
        "Open PM Maturity Hub and click 'Load JSON / CSV' in the bottom-left Session Data box (or score directly in Phase 1: Maturity Assessment).",
        "Review Maturity Explainer and Score Explainer under Phase 1: Assess, then open Metro Journey, The 4 Pillars (Live), and Pillars (Static) under Phase 2: Visualize."
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Open Phase 1 Maturity Assessment and Maturity Explainer to score or review all 28 questions.",
          "detail": "Click any question card in Maturity Assessment to open the 1–5 scoring modal, or open Maturity Explainer to review the 5 maturity stages and 10 themes.",
          "toolId": "TOL-007",
          "coachingTip": "Use 'Load JSON / CSV' in the bottom-left Session Data box to load an existing assessment into all PM Maturity Hub screens at once.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/nav-maturity.png",
            "caption": "Lean@GS PM Maturity Hub — Phase 1: Assess (Maturity Assessment & Maturity Explainer)",
            "hotspot": {
              "xPercent": 15,
              "yPercent": 36,
              "widthPercent": 24,
              "heightPercent": 16,
              "label": "1. Score 28 Questions or Load Session File"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Click 'Score Explainer' under Phase 1 to inspect the four-step Gateway ceiling calculation.",
          "detail": "Score Explainer walks through Step 1 (Gateway Ceiling), Step 2 (Blinkers Filter), Step 3 (Raw Valid Average), and Step 4 (Final Compressed Score).",
          "toolId": "TOL-007",
          "coachingTip": "If Gateway #10 (Pilot Experiments) scores 2/5, your Operating Level is locked at Level 1 (e.g., 1.6/4.0) even if Level 2 questions score 4.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/hub-score-explainer.png",
            "caption": "Lean@GS PM Maturity Hub — Phase 1: Score Explainer",
            "hotspot": {
              "xPercent": 45,
              "yPercent": 65,
              "widthPercent": 10,
              "heightPercent": 6,
              "label": "2. Inspect 4-Step Gateway Cap Calculation"
            }
          }
        },
        {
          "stepNumber": 3,
          "action": "Open 'Metro Journey' and 'The 4 Pillars (Live)' under Phase 2: Visualize.",
          "detail": "Metro Journey displays your Digital Twin train stopping at the exact failed Gateway station alongside The 4 Pillars (Live) and Pillars (Static) views.",
          "toolId": "TOL-003",
          "coachingTip": "Colleagues grasp the subway map in ten seconds—point directly to the red station blocking the train from advancing.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/hub-metro-journey.png",
            "caption": "Lean@GS PM Maturity Hub — Phase 2: Visualize (Metro Journey & The 4 Pillars)",
            "hotspot": {
              "xPercent": 67,
              "yPercent": 5,
              "widthPercent": 30,
              "heightPercent": 6,
              "label": "3. View Metro Journey & 4 Pillars Progression"
            }
          }
        }
      ],
      "troubleshooting": [
        {
          "symptom": "High scores on Level 2 and Level 3 questions did not raise our 1.6 total score.",
          "cause": "A Level 1 Gateway question (such as Q10) scored below 3, locking your Operating Level ceiling at Level 1.",
          "fix": "Open Score Explainer to inspect the Gateway Ceiling and Blinkers Filter, then raise the failed Gateway to 3 across 70% of teams."
        }
      ]
    },
    "SOP-006": {
      "id": "SOP-006",
      "title": "Phase 3 & Utilities: Build Local Plans in Strategy Builder, Test Simulator & Fix CSVs",
      "processId": "PRC-003",
      "roleId": "ROL-001",
      "toolIds": [
        "TOL-006",
        "TOL-011"
      ],
      "estimatedTime": "30 mins",
      "stationLocation": "PM Maturity Hub → Phase 3: Plan & Utilities: CSV to JSON Fixer",
      "kitBag": {
        "leadRole": "Lead: Local Programme Manager (LPM)",
        "supportRole": "Optional Support: Lean Core Team partner",
        "mandatoryStatus": "PM Maturity Hub • Phase 3 & Utilities",
        "inputNeeded": "Loaded Site Assessment Session",
        "outputProduced": "Simulated Score Lift, Local Strategy Builder Plan & Repaired JSON"
      },
      "userGoal": "Select Light, Standard, Intense, or Custom initiative templates in Strategy Builder, drag 1–5 sliders in the Simulator Sandbox to test score unlocks, and repair legacy Excel CSV files in CSV to JSON Fixer.",
      "gettingStarted": [
        "Ensure 'Data Active' is shown in the PM Maturity Hub sidebar.",
        "Select 'Strategy Builder' or '↳ Simulator' under Phase 3: Plan, or 'CSV to JSON Fixer' under Utilities."
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Select initiative templates in Strategy Builder and drag sliders in Simulator to test unlocks.",
          "detail": "Use Auto-Select (Gateways < 3) in Strategy Builder or click '↳ Simulator' in the sidebar to drag 1–5 score sliders and preview your Projected Score lift.",
          "toolId": "TOL-006",
          "coachingTip": "Keep your simulation focused on 2 to 3 key capability actions at a time—raising Q10 from 2 to 3 immediately unlocks all Level-2 questions.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/hub-strategy-builder.png",
            "caption": "Lean@GS PM Maturity Hub — Phase 3: Plan (Strategy Builder & ↳ Simulator)",
            "hotspot": {
              "xPercent": 55,
              "yPercent": 35,
              "widthPercent": 16,
              "heightPercent": 7,
              "label": "1. Build Strategy Plan & Open Simulator"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Open 'CSV to JSON Fixer' under Utilities if a legacy Excel file fails to load.",
          "detail": "Upload any semicolon-delimited Excel CSV into CSV to JSON Fixer and click 'Download Fixed JSON' to save a clean assessment file.",
          "toolId": "TOL-011",
          "coachingTip": "Regional European Excel settings often export semicolons instead of commas—CSV to JSON Fixer repairs the file in one click.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/hub-csv-fixer.png",
            "caption": "Lean@GS PM Maturity Hub — Utilities: CSV to JSON Fixer",
            "hotspot": {
              "xPercent": 43,
              "yPercent": 21,
              "widthPercent": 14,
              "heightPercent": 7,
              "label": "2. Click 'Select CSV File' & Download Fixed JSON"
            }
          }
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Uploading the Excel .csv file into Score Explainer or Strategy Builder gives a format error.",
          "cause": "Excel saved semicolons (;) instead of commas (,).",
          "fix": "Click 'CSV to JSON Fixer' under Utilities in the PM Maturity Hub to convert the file to a clean .json."
        }
      ]
    },
    "SOP-007": {
      "id": "SOP-007",
      "title": "Stages 1–3: Check Kitchen Baseline, Spot Gaps & Take Team Orders",
      "processId": "PRC-004",
      "roleId": "ROL-001",
      "toolIds": [
        "TOL-008"
      ],
      "estimatedTime": "5 mins",
      "stationLocation": "Office Kitchen Counter & Team Desks",
      "kitBag": {
        "leadRole": "Designated Brew Maker (LPM)",
        "supportRole": "1st Time: With a Seasoned Tea-Round Partner • Ongoing: Solo or With Team",
        "mandatoryStatus": "Stages 1–3 • Kitchen Capability & Team VOC",
        "inputNeeded": "Thirsty Colleagues & Office Kitchen Access",
        "outputProduced": "Verified Fridge Stock & Top 2–3 Colleague Drink Orders"
      },
      "userGoal": "Establish what the office kitchen can actually make today (Stages 1–2) before asking colleagues what they want to drink (Stage 3: Voice of the Customer).",
      "gettingStarted": [
        "Walk to the office kitchen BEFORE asking anyone what they want to drink.",
        "Check the three foundational Kitchen Gateways (★): working kettle, fresh milk in the fridge, and at least 3 clean mugs."
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Check kettle water level, fridge milk expiry dates, and clean mugs before promising any drinks.",
          "detail": "First-time brew makers: check the kitchen with a colleague to learn where spare teabags live. Ongoing rounds: check solo in 60 seconds.",
          "toolId": "TOL-008",
          "coachingTip": "Checking kitchen capability first prevents promising six oat-milk flat whites when the fridge only holds half a pint of semi-skimmed.",
          "visual": {
            "type": "none"
          }
        },
        {
          "stepNumber": 2,
          "action": "Flag missing teabags or oat milk immediately so you know your kitchen gateway limits.",
          "detail": "If decaf bags or oat milk are empty, note that gap before walking back to the team.",
          "toolId": "TOL-008",
          "coachingTip": "Spotting a missing ingredient in Stage 2 saves an awkward second trip back to the desks to renegotiate orders.",
          "visual": {
            "type": "none"
          }
        },
        {
          "stepNumber": 3,
          "action": "Ask colleagues for their drink orders and record mug strength and milk preferences.",
          "detail": "Capture the Voice of the Customer: who needs an urgent caffeine boost, and whether they take milk or sugar.",
          "toolId": "TOL-008",
          "coachingTip": "Keep the round manageable—aim for 2 to 3 mugs per tray (with a hard ceiling of 4) so you never drop a scalding mug in the corridor.",
          "visual": {
            "type": "none"
          }
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Nine colleagues shout out complicated drink orders all at once.",
          "cause": "Trying to boil the ocean instead of capping the tray at a safe batch size.",
          "fix": "Focus on 2 to 3 priority drinks on Tray #1 (hard ceiling of 4 mugs) so everyone gets a hot drink safely."
        }
      ]
    },
    "SOP-008": {
      "id": "SOP-008",
      "title": "Stages 4–6: Match Orders, Lock the 1-Page Tray Charter & Deliver Drinks",
      "processId": "PRC-004",
      "roleId": "ROL-001",
      "toolIds": [
        "TOL-008"
      ],
      "estimatedTime": "5 mins",
      "stationLocation": "Office Kitchen Counter → Team Desks",
      "kitBag": {
        "leadRole": "Designated Brew Maker (LPM)",
        "supportRole": "Mug Carrier / Door Opener Partner",
        "mandatoryStatus": "Stages 4–6 • Huddle, Tray Charter & Delivery",
        "inputNeeded": "Kitchen Stock (Stages 1–2) + Team Orders (Stage 3)",
        "outputProduced": "Agreed 1-Page Tray Charter & Hot Drinks Delivered in <10 Mins"
      },
      "userGoal": "Combine colleague drink orders with real kitchen stock, lock a safe 2–3 mug batch on the 1-Page Tray Charter, and brew for a full 3 minutes.",
      "gettingStarted": [
        "Switch the kettle on to boil while lining up your 2–3 clean mugs on the counter.",
        "Open the 1-Page Tea & Coffee Round Order Sheet (Tab 4) so you don't mix up who takes sugar."
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Match colleague drink orders against available kitchen supplies and select two to three priority mugs.",
          "detail": "Combine Input 1 (what is in the fridge) with Input 2 (what colleagues asked for) inside the Brew Round Prioritiser.",
          "toolId": "TOL-008",
          "coachingTip": "If someone ordered an oat-milk latte and the fridge only has dairy milk, offer them a black Americano or herbal tea before pouring.",
          "visual": {
            "type": "none"
          }
        },
        {
          "stepNumber": 2,
          "action": "Steep teabags in boiling water for three full minutes before pouring milk into mugs.",
          "detail": "Never pour cold milk onto an unsteeped teabag—wait 3 minutes for full flavour extraction, then remove the bag.",
          "toolId": "TOL-008",
          "coachingTip": "Adding milk too early drops the water temperature and locks the tea into a pale, lifeless beige score.",
          "visual": {
            "type": "none"
          }
        },
        {
          "stepNumber": 3,
          "action": "Load the 1-Page Tray Charter batch onto the tray and deliver within ten minutes.",
          "detail": "Place heavier mugs toward the center of the tray and hand each drink to its named owner while still piping hot.",
          "toolId": "TOL-008",
          "coachingTip": "Ask a colleague to hold the hallway fire door—teamwork prevents 90% of corridor tea spills.",
          "visual": {
            "type": "none"
          }
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Tea tastes like dishwater.",
          "cause": "Brewed for 4 seconds.",
          "fix": "Leave teabag in for 3 full minutes before adding milk."
        }
      ]
    },
    "SOP-009": {
      "id": "SOP-009",
      "title": "Stages 1 & 2: Explore Storybook, Set Up Header & Score the 28 Questions",
      "processId": "PRC-005",
      "roleId": "ROL-001",
      "toolIds": [
        "TOL-012"
      ],
      "estimatedTime": "60 mins",
      "stationLocation": "Standalone GS Lean Maturity App & Storybook",
      "kitBag": {
        "leadRole": "Lead: Local Programme Manager (LPM) with Site Leadership Team",
        "supportRole": "1st time: with Lean Core Team partner; Ongoing: Core Team optional",
        "mandatoryStatus": "Stages 1 & 2 • Storybook & 28-Question Scoring",
        "inputNeeded": "Workplace Evidence (~70% of Site Teams)",
        "outputProduced": "Evaluated 28-Card Grid with Evidence Notes"
      },
      "userGoal": "Explore the 5 maturity levels and 10 themes in the Maturity Model Storybook and Maturity Explainer flashcards, set up the assessment header, and score all 28 questions using the 70% site rule.",
      "gettingStarted": [
        "CRITICAL — Get the Org Code & Date Right in the Header: Confirm the top-right toggle is on 'New Standard' and enter your exact Organisation Code in the 'Org' field (for example, GS-TI-EUW-BER01) and the exact 'Date of Assessment' in the top User Data Plate (alongside Project/Department Name, Assessed By, For OE Local PM, GS Dashboard Yes/No, and Scope). These two fields automatically name your exported files (<OrgCode>_<YYYY-MM-DD>_Lean_Assessment.json), index your baseline for the GS Dashboard and '600 Maturity Submissions', and stamp all downstream reports.",
        "Open the Maturity Model Storybook and click 'Maturity Explainer' in the Standalone GS Lean Maturity app to review the 5 maturity levels (Awareness to Lean Enterprise), 10 themes, and 17 Starred Gateways (★).",
        "First-time assessment: complete together with your Lean Core Team partner to learn the 28-question rubric. Ongoing assessments: complete directly with your Site Leadership Team as a self-assessment."
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Open the Maturity Model Storybook and Maturity Explainer flashcards to review the five levels.",
          "detail": "Walk through the 5 maturity levels (1. Awareness to 5. Lean Enterprise), 10 themes, and 17 Starred Gateways (★) before scoring.",
          "toolId": "TOL-012",
          "coachingTip": "Reviewing the flashcards first helps leaders see the difference between an isolated pilot (Level 2) and a consistent site habit (Level 3).",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/nav-maturity-explainer.png",
            "caption": "Standalone GS Lean Maturity — Maturity Explainer Flashcards (5 Levels & 10 Themes)",
            "hotspot": {
              "xPercent": 15,
              "yPercent": 18,
              "widthPercent": 70,
              "heightPercent": 35,
              "label": "1. Review 5 Levels & 10 Themes in Maturity Explainer"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Confirm 'New Standard' is active and enter your exact Org Code and Date of Assessment in the header.",
          "detail": "CRITICAL: In the top User Data Plate, enter your exact Organisation Code in 'Org' (for example, GS-TI-EUW-BER01) and the exact 'Date of Assessment'—alongside Project/Department Name, Assessed By, For OE Local PM, Applicable for GS Dashboard (Yes/No), and Scope.",
          "toolId": "TOL-012",
          "coachingTip": "Getting the Org Code and Date of Assessment right in the header is critical: the app uses these two fields to name your exported files (<OrgCode>_<YYYY-MM-DD>_Lean_Assessment.json), track your site on the GS Dashboard, and stamp every downstream report.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/nav-maturity.png",
            "src": "assets/screenshots/nav-maturity.png",
            "caption": "Standalone GS Lean Maturity — User Data Plate Header: Critical 'Org' Code & 'Date of Assessment' Highlighted",
            "hotspot": {
              "xPercent": 3.5,
              "yPercent": 28,
              "widthPercent": 93,
              "heightPercent": 20,
              "label": "2. Critical: Enter Exact 'Org' Code & 'Date of Assessment' in Header"
            }
          }
        },
        {
          "stepNumber": 3,
          "action": "Click each of the 28 question cards to score 1 to 5 and record evidence.",
          "detail": "Foundation questions Q1 to Q3 score as Binary 1 (No) or 5 (Yes); questions Q4 to Q28 require workplace proof across roughly 70% of teams to score 3 or higher.",
          "toolId": "TOL-012",
          "coachingTip": "Click 'Mark as Evaluated' inside each Question Card Modal so the card turns petrol-bordered on the 28-card grid.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/nav-question-modal.png",
            "caption": "Standalone GS Lean Maturity — Open Question Scoring Modal (1–5 Criteria, Evidence Notes & Mark as Evaluated)",
            "hotspot": {
              "xPercent": 50,
              "yPercent": 20,
              "widthPercent": 33,
              "heightPercent": 37,
              "label": "3. Score 1–5 (~70% Site Rule) & Mark as Evaluated"
            }
          }
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Exported file downloads as 'Org_Date_Lean_Assessment.json' or cannot be matched on the GS Dashboard.",
          "cause": "The 'Org' (Organisation Code) or 'Date of Assessment' field in the top User Data Plate was left blank or mistyped before exporting.",
          "fix": "Enter your exact official Organisation Code in the 'Org' box and the exact date in 'Date of Assessment' in the top User Data Plate, then click 'Export Assessment (.json & .csv)' again."
        },
        {
          "symptom": "A team wants to award Level 3 because one pilot cell has a great visual board.",
          "cause": "A single pilot area represents Level 2 (Emerging), not Level 3 (Structured across ~70% of teams).",
          "fix": "Score the card as 2 today and record the pilot cell in the Comments & Actions box so it can be scaled across the site."
        }
      ]
    },
    "SOP-010": {
      "id": "SOP-010",
      "title": "Stages 3 & 4: Review the Radar Dashboard, Inspect Gateway Caps & Export Files",
      "processId": "PRC-005",
      "roleId": "ROL-001",
      "toolIds": [
        "TOL-012"
      ],
      "estimatedTime": "30 mins",
      "stationLocation": "Standalone GS Lean Maturity App → View Dashboard & Export Assessment",
      "kitBag": {
        "leadRole": "Lead: Local Programme Manager (LPM) with Site Leadership Team",
        "supportRole": "Lean Core Team partner (files official copy in '600 Maturity Submissions')",
        "mandatoryStatus": "Stages 3 & 4 • Radar Dashboard & Export",
        "inputNeeded": "28 Evaluated Question Cards",
        "outputProduced": "Radar Dashboard PDF & Local Assessment Files (.json & .csv)"
      },
      "userGoal": "Click 'View Dashboard' to inspect the 10-theme radar chart, category bar chart, and Starred Gateway (★) caps, then export your .json and .csv files and choose your next path.",
      "gettingStarted": [
        "Confirm all 28 question cards are marked as evaluated on the assessment grid.",
        "Have your local Programme Manager folder ready to save your exported .json and .csv assessment files."
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Click 'View Dashboard' to inspect the radar chart, category bars, and Starred Gateway caps.",
          "detail": "Review the Overall Maturity Level banner, the 10-theme radar chart, and the Gateway Status list showing which Starred Gateways (★) are capping the site's level.",
          "toolId": "TOL-012",
          "coachingTip": "Click 'Export to PDF' inside the Assessment Dashboard modal if you want a standalone one-page visual summary for leadership.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/nav-dashboard-modal.png",
            "caption": "Standalone GS Lean Maturity — Open Assessment Dashboard Modal (Radar Chart, Category Bars & Gateway Status)",
            "hotspot": {
              "xPercent": 16,
              "yPercent": 15,
              "widthPercent": 68,
              "heightPercent": 68,
              "label": "1. Inspect Radar Chart, Overall Level & Gateway Caps"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Click 'Export Assessment (.json & .csv)' to save your files locally and share with Core Team.",
          "detail": "Save both files locally, and send a copy to your Lean Core Team partner when an official baseline needs to be archived in '600 Maturity Submissions'.",
          "toolId": "TOL-012",
          "coachingTip": "Only Lean Core Team members upload official submissions into '600 Maturity Submissions'. Keep your local .json file ready to load into Navigator Toolkit or PM Maturity Hub.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/nav-maturity.png",
            "caption": "Standalone GS Lean Maturity — Click 'Export Assessment (.json & .csv)' in the Top Action Bar",
            "hotspot": {
              "xPercent": 19.5,
              "yPercent": 15.5,
              "widthPercent": 21,
              "heightPercent": 6,
              "label": "2. Click 'Export Assessment (.json & .csv)'"
            }
          }
        }
      ],
      "troubleshooting": [
        {
          "symptom": "We finished the standalone assessment and want to run a leadership workshop or simulate score unlocks.",
          "cause": "The standalone GS Lean Maturity app focuses purely on the 28-question assessment and Radar Dashboard.",
          "fix": "Load your exported .json file into Lean@GS Navigator Toolkit (for Analysis Report, VOC, Workshop & 1-Page Charter) or into Lean@GS PM Maturity Hub (for Score Explainer, Metro Journey & Simulator)."
        }
      ]
    },
    "SOP-AUTH-1": {
      "id": "SOP-AUTH-1",
      "title": "Stages 1 & 2: Create a New Playbook & Journey Map in the WYSIWYG Studio",
      "processId": "PRC-AUTH",
      "roleId": "ROL-001",
      "toolIds": [
        "TOL-AUTH-1"
      ],
      "estimatedTime": "5 mins",
      "stationLocation": "Top Header → ✦ Open Authoring Studio → Tab 1: Playbook & Journey Builder",
      "kitBag": {
        "leadRole": "Guide Author (SME / Local Programme Manager / Core Team)",
        "supportRole": "Optional Reviewer: Lean Core Team Partner",
        "mandatoryStatus": "Stages 1 & 2 • Plan & Structure",
        "inputNeeded": "Real-world job to be done & 3 to 6 logical process stages",
        "outputProduced": "Live Playbook Overview & Connected N-Stage Journey Map"
      },
      "userGoal": "Create a new Playbook in Tab 1 of the WYSIWYG Authoring Studio, define its plain-English purpose and Golden Principle quote, and structure 3 to 6 clean Journey Stage cards.",
      "gettingStarted": [
        "Click '✦ Open Authoring Studio' in the top header bar (or '✦ Open WYSIWYG Authoring Studio' in the left sidebar card).",
        "Ask the 10-Second Naive Colleague question before typing: 'What real-world job does this guide help my colleague finish today?'"
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Click '✦ Open Authoring Studio' in the top header and select '+ Create New Playbook'.",
          "detail": "In Tab 1 ('Playbook & Journey Builder'), click the petrol '+ Create New Playbook' button to generate a clean playbook scaffold.",
          "toolId": "TOL-AUTH-1",
          "coachingTip": "Name your Playbook after the real-world job (for example, 'Run a Site Kaizen Event'), never after a software version number.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/studio-tab1-playbook.png",
            "src": "assets/screenshots/studio-tab1-playbook.png",
            "caption": "WYSIWYG Authoring Studio — Tab 1: Click '+ Create New Playbook' & Edit Identity",
            "hotspot": {
              "xPercent": 45,
              "yPercent": 22,
              "widthPercent": 14,
              "heightPercent": 6,
              "label": "1. Click '+ Create New Playbook'"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Enter the Playbook Title, One-Line Journey Ribbon, Overview Description, and Golden Principle quote.",
          "detail": "Fill in Section A on the left and watch the Live WYSIWYG Preview update immediately on the right.",
          "toolId": "TOL-AUTH-1",
          "coachingTip": "Your Golden Principle quote should state the core human mindset in one memorable sentence so leaders don't miss the point.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/studio-tab1-playbook.png",
            "src": "assets/screenshots/studio-tab1-playbook.png",
            "caption": "WYSIWYG Authoring Studio — Tab 1: Section A Identity & Live Preview",
            "hotspot": {
              "xPercent": 12,
              "yPercent": 32,
              "widthPercent": 39,
              "heightPercent": 48,
              "label": "2. Fill Title, Ribbon & Golden Principle"
            }
          }
        },
        {
          "stepNumber": 3,
          "action": "Click '+ Add Journey Stage' to map three to six stages and click 'Save Playbook'.",
          "detail": "For each stage in Section B, enter the four clean elements: Stage Title, What Happens, Who & Tool Used, and What You Finish With.",
          "toolId": "TOL-AUTH-1",
          "coachingTip": "Never put compliance badges or file extensions (.csv/.json) on Journey Map cards—keep Tab 1 focused on the human flow.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/studio-tab1-playbook.png",
            "src": "assets/screenshots/studio-tab1-playbook.png",
            "caption": "WYSIWYG Authoring Studio — Tab 1: '+ Add Journey Stage' & 4-Element Stage Editor",
            "hotspot": {
              "xPercent": 63,
              "yPercent": 22,
              "widthPercent": 14,
              "heightPercent": 6,
              "label": "3. Click '+ Add Journey Stage'"
            }
          }
        }
      ],
      "troubleshooting": [
        {
          "symptom": "The Studio shows a warning under Section B while editing a Journey Stage card.",
          "cause": "The stage summary includes technical file extensions (.csv or .json) or compliance wording ('Mandatory Gate').",
          "fix": "Describe the stage outcome in plain human language (for example, 'Saved baseline scorecard') and keep technical file details inside Tab 2 SOP steps."
        }
      ]
    },
    "SOP-AUTH-2": {
      "id": "SOP-AUTH-2",
      "title": "Stages 3 & 4: Write Steps, Paste Screenshots (Ctrl+V) & Add Highlight Boxes",
      "processId": "PRC-AUTH",
      "roleId": "ROL-001",
      "toolIds": [
        "TOL-AUTH-1"
      ],
      "estimatedTime": "5 mins",
      "stationLocation": "Authoring Studio → Tab 2: SOP & Step WYSIWYG Editor & Tab 3: AI Generator",
      "kitBag": {
        "leadRole": "Guide Author (SME / Local Programme Manager / Core Team)",
        "supportRole": "Optional AI Assistant: M365 Copilot or Gemini",
        "mandatoryStatus": "Stages 3 & 4 • Steps, Screenshots & Reference",
        "inputNeeded": "Real Application Windows (Win+Shift+S) or Rough Process Notes",
        "outputProduced": "Validated <=20-Word Action Steps with Real Screenshots & Purple Callout Boxes"
      },
      "userGoal": "Write scannable <=20-word imperative steps in Tab 2, paste real application screenshots from your clipboard (Ctrl+V) with click-to-place highlight boxes, or convert rough notes in 60 seconds using the Tab 3 AI Prompt Generator.",
      "gettingStarted": [
        "Switch to 'Tab 2: SOP & Step WYSIWYG Editor' inside the Authoring Studio.",
        "Open the live software application in another tab and use Windows Snipping Tool (Win+Shift+S) to copy any screen you want to show."
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Open Tab 2, select or create your SOP Guide, and write an imperative step action.",
          "detail": "Start the Step Action Command with an action verb ('Click', 'Upload', 'Select', 'Review') and keep the live word-counter pill green (20 words or fewer).",
          "toolId": "TOL-AUTH-1",
          "coachingTip": "Watch the three green Poka-Yoke ticks below the input box: '✓ Active Verb Start', '✓ Zero Raw Acronyms', and '✓ Coaching Tip Included'.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/studio-tab2-steps.png",
            "src": "assets/screenshots/studio-tab2-steps.png",
            "caption": "WYSIWYG Authoring Studio — Tab 2: Live 20-Word Counter Pill & Poka-Yoke Checks",
            "hotspot": {
              "xPercent": 11,
              "yPercent": 40,
              "widthPercent": 40,
              "heightPercent": 14,
              "label": "1. Write <=20-Word Action & Check Green Pills"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Select 'Custom Screenshot', press Ctrl+V to paste your screen, and click to place a highlight box.",
          "detail": "Press Win+Shift+S to snip the real app screen, press Ctrl+V inside Tab 2, type a Callout Label, and click the image to position the purple highlight box.",
          "toolId": "TOL-AUTH-1",
          "coachingTip": "If a step describes a human discussion rule rather than a software click, select '📝 No Image (Text + Coaching Only)' instead of inventing a fake diagram.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/studio-tab2-steps.png",
            "src": "assets/screenshots/studio-tab2-steps.png",
            "caption": "WYSIWYG Authoring Studio — Tab 2: Ctrl+V Screenshot Dropzone & Click-to-Place Hotspot",
            "hotspot": {
              "xPercent": 52,
              "yPercent": 34,
              "widthPercent": 36,
              "heightPercent": 60,
              "label": "2. Press Ctrl+V & Click Image to Place Highlight Box"
            }
          }
        },
        {
          "stepNumber": 3,
          "action": "Use Tab 3 ('Copy AI Playbook Prompt') to convert rough Word notes into JSON.",
          "detail": "Click '📋 Copy AI Playbook Prompt' in Tab 3, paste it into M365 Copilot or Gemini with your rough notes, and paste the returned JSON into the editor.",
          "toolId": "TOL-AUTH-1",
          "coachingTip": "The AI prompt already includes all 20-word, plain-English, and schema rules—turning a 10-page Word SOP into a structured Playbook in 60 seconds.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/studio-tab3-ai-json.png",
            "src": "assets/screenshots/studio-tab3-ai-json.png",
            "caption": "WYSIWYG Authoring Studio — Tab 3: 1-Click AI Playbook Prompt & Live Schema Audit",
            "hotspot": {
              "xPercent": 13,
              "yPercent": 38,
              "widthPercent": 16,
              "heightPercent": 6,
              "label": "3. Click 'Copy AI Playbook Prompt'"
            }
          }
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Pressing Ctrl+V does not paste my screenshot into the step.",
          "cause": "The Authoring Studio is not currently on 'Tab 2: SOP & Step WYSIWYG Editor' or the clipboard contains text instead of an image.",
          "fix": "Take a fresh screen snip with Win+Shift+S, make sure Tab 2 is open in the Authoring Studio, and press Ctrl+V (or click 'Choose file' to upload a PNG)."
        }
      ]
    },
    "SOP-AUTH-3": {
      "id": "SOP-AUTH-3",
      "title": "Stage 5: Save, Download, Upload & Share Playbook Files (.json)",
      "processId": "PRC-AUTH",
      "roleId": "ROL-001",
      "toolIds": [
        "TOL-AUTH-1"
      ],
      "estimatedTime": "5 mins",
      "stationLocation": "Top Header Bar & Left Sidebar ('✦ BUILD OR SHARE A GUIDE' Card)",
      "kitBag": {
        "leadRole": "Guide Author & Colleagues",
        "supportRole": "Repository Publisher: Lean Core Team",
        "mandatoryStatus": "Stage 5 • 3-Tier Storage & Sharing",
        "inputNeeded": "Completed Playbook Draft in Browser",
        "outputProduced": "Shared <Playbook>.leanguide.json File or Published Master guides.json"
      },
      "userGoal": "Understand how the 3-tier storage architecture works so you can save drafts in your browser, share a single Playbook (.leanguide.json) with colleagues via Teams/SharePoint, merge a colleague's Playbook, or publish the master guides.json library.",
      "gettingStarted": [
        "Check the status badge in the top header bar or left sidebar ('● Official Server Library' vs. '● Local Draft Active').",
        "Decide whether you are sharing a single Playbook with colleagues (Tier 2: .leanguide.json) or deploying the entire multi-playbook library to the server (Tier 3: guides.json)."
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Save your edits in the Authoring Studio to activate Tier 1 browser draft storage.",
          "detail": "Clicking '✓ Save Playbook' or '✓ Save & Apply to Live Guide' stores your changes in browser localStorage and turns on the '● Local Draft Active' badge.",
          "toolId": "TOL-AUTH-1",
          "coachingTip": "Tier 1 storage keeps your draft safe in your own browser even if you refresh the page, without affecting other users on the server.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/studio-header-sidebar.png",
            "src": "assets/screenshots/studio-header-sidebar.png",
            "caption": "Left Sidebar — '✦ BUILD OR SHARE A GUIDE' Card & Storage Status Indicator",
            "hotspot": {
              "xPercent": 1,
              "yPercent": 14,
              "widthPercent": 19,
              "heightPercent": 30,
              "label": "1. Left Sidebar Authoring & Storage Card"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Click '⬇ Export Guide ▾' and select 'Download Current Playbook Only (.leanguide.json)' to share.",
          "detail": "Downloads a self-contained <Playbook-Slug>.leanguide.json file containing only your active Playbook, its SOPs, tools, roles, and embedded Base64 screenshots.",
          "toolId": "TOL-AUTH-1",
          "coachingTip": "Send this .leanguide.json file over Microsoft Teams, Email, or SharePoint—colleagues can load it in one click without touching their other playbooks.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/studio-header-sidebar.png",
            "src": "assets/screenshots/studio-header-sidebar.png",
            "caption": "Top Header — '⬇ Export Guide ▾' Menu ('Download Current Playbook Only' vs 'Download Master Library')",
            "hotspot": {
              "xPercent": 66,
              "yPercent": 1,
              "widthPercent": 26,
              "heightPercent": 23,
              "label": "2. Export Single Playbook (.leanguide.json) or Master Library"
            }
          }
        },
        {
          "stepNumber": 3,
          "action": "Click '⬆ Upload Guide (.json)' to merge a colleague's Playbook or publish 'guides.json'.",
          "detail": "Uploading a .leanguide.json file merges that Playbook directly into your Playbook Switcher; uploading or downloading 'guides.json' updates the full server library.",
          "toolId": "TOL-AUTH-1",
          "coachingTip": "When a new Playbook is approved for everyone, send the .leanguide.json file to the Lean Core Team to merge into the master guides.json on megblcntpvc72.",
          "visual": {
            "type": "image",
            "imageSrc": "assets/screenshots/studio-header-sidebar.png",
            "src": "assets/screenshots/studio-header-sidebar.png",
            "caption": "Top Header — '⬆ Upload Guide (.json)' Smart Merge Control",
            "hotspot": {
              "xPercent": 76,
              "yPercent": 0.5,
              "widthPercent": 9,
              "heightPercent": 5.5,
              "label": "3. Click '⬆ Upload Guide (.json)' to Merge"
            }
          }
        }
      ],
      "troubleshooting": [
        {
          "symptom": "I uploaded a colleague's .leanguide.json file and want to return to the clean official server library.",
          "cause": "Merged playbooks are stored in your browser's local draft storage (Tier 1) so you can review them.",
          "fix": "Open '✦ Open Authoring Studio' and click '↺ Reset Local Browser Edits' at the bottom of Tab 1 or Tab 2 to restore the default server library."
        }
      ]
    }
  },
  "questions28": [
    {
      "id": 1,
      "text": "Is there a clear business reason driving this Lean Programme?",
      "theme": "Foundation",
      "level": 0,
      "gateway": true
    },
    {
      "id": 2,
      "text": "Is leadership committed and actively invested in being involved?",
      "theme": "Foundation",
      "level": 0,
      "gateway": true
    },
    {
      "id": 3,
      "text": "Has the team or organisation started acquiring foundational Lean knowledge?",
      "theme": "Foundation",
      "level": 0,
      "gateway": true
    },
    {
      "id": 4,
      "text": "How clearly can your team describe what Lean means and how it supports your business goals?",
      "theme": "Awareness and Training",
      "level": 0,
      "gateway": true
    },
    {
      "id": 5,
      "text": "How deeply do team members understand core Lean concepts?",
      "theme": "Awareness and Training",
      "level": 0,
      "gateway": true
    },
    {
      "id": 6,
      "text": "Is there a consistent and active plan to close competency gaps?",
      "theme": "Awareness and Training",
      "level": 1,
      "gateway": false
    },
    {
      "id": 7,
      "text": "Is there a clear Lean structure and defined role ownership within the team?",
      "theme": "Lean Structure and Strategy",
      "level": 1,
      "gateway": true
    },
    {
      "id": 8,
      "text": "How effectively is strategy managed and reviewed at your level?",
      "theme": "Lean Structure and Strategy",
      "level": 1,
      "gateway": true
    },
    {
      "id": 9,
      "text": "How well are strategic objectives cascaded to teams?",
      "theme": "Lean Structure and Strategy",
      "level": 2,
      "gateway": false
    },
    {
      "id": 10,
      "text": "Does the team actively execute structured, pilot experiments?",
      "theme": "Lean Tools and KPI Alignment",
      "level": 1,
      "gateway": true
    },
    {
      "id": 11,
      "text": "Are Lean tools routinely applied and embedded in daily operations?",
      "theme": "Lean Tools and KPI Alignment",
      "level": 2,
      "gateway": false
    },
    {
      "id": 12,
      "text": "Are performance metrics and Lean-relevant KPIs displayed and actively discussed in the work area?",
      "theme": "Lean Tools and KPI Alignment",
      "level": 2,
      "gateway": true
    },
    {
      "id": 13,
      "text": "Is the review of KPIs driven by Lean principles to prevent local optimization?",
      "theme": "Lean Tools and KPI Alignment",
      "level": 3,
      "gateway": false
    },
    {
      "id": 14,
      "text": "Are daily huddles used consistently to raise and resolve issues?",
      "theme": "Daily Management and CI",
      "level": 2,
      "gateway": true
    },
    {
      "id": 15,
      "text": "How effectively are employee suggestions captured and implemented?",
      "theme": "Daily Management and CI",
      "level": 2,
      "gateway": true
    },
    {
      "id": 16,
      "text": "Does the team practice structured reflection?",
      "theme": "Learning and Value Chain Integration",
      "level": 2,
      "gateway": true
    },
    {
      "id": 17,
      "text": "How consistently are lessons learned documented and applied?",
      "theme": "Learning and Value Chain Integration",
      "level": 3,
      "gateway": false
    },
    {
      "id": 18,
      "text": "Does your Lean philosophy extend across your entire value chain?",
      "theme": "Learning and Value Chain Integration",
      "level": 3,
      "gateway": true
    },
    {
      "id": 19,
      "text": "Are internal departmental handoffs integrated to ensure seamless process flow?",
      "theme": "Learning and Value Chain Integration",
      "level": 3,
      "gateway": false
    },
    {
      "id": 20,
      "text": "Do leaders practice the 'Gemba Walk' habit consistently?",
      "theme": "Leadership & Culture",
      "level": 2,
      "gateway": false
    },
    {
      "id": 21,
      "text": "Do leaders use a consistent questioning cycle to identify target conditions and obstacles?",
      "theme": "Leadership & Culture",
      "level": 2,
      "gateway": false
    },
    {
      "id": 22,
      "text": "Is there a culture of psychological safety that encourages safe experimentation?",
      "theme": "Leadership & Culture",
      "level": 2,
      "gateway": true
    },
    {
      "id": 23,
      "text": "Are learnings from reflection used to update standard work?",
      "theme": "Learning & Scaling",
      "level": 3,
      "gateway": false
    },
    {
      "id": 24,
      "text": "Is physical verification used to validate pilot project outcomes?",
      "theme": "Learning & Scaling",
      "level": 3,
      "gateway": false
    },
    {
      "id": 25,
      "text": "Are successful standards systematically scaled across the site?",
      "theme": "Learning & Scaling",
      "level": 3,
      "gateway": true
    },
    {
      "id": 26,
      "text": "Do teams from different functions collaborate to improve shared processes?",
      "theme": "Collaboration & Feedback",
      "level": 2,
      "gateway": true
    },
    {
      "id": 27,
      "text": "Are joint improvement projects executed with external partners?",
      "theme": "Collaboration & Feedback",
      "level": 4,
      "gateway": true
    },
    {
      "id": 28,
      "text": "How consistently are success stories shared and replicated?",
      "theme": "Communication",
      "level": 1,
      "gateway": false
    }
  ],
  "playbooks": [
    {
      "id": "PLB-001",
      "code": "PLB-001",
      "title": "Lean@GS Navigator Toolkit Guide (6-Stage Navigator & Maturity Process)",
      "eyebrow": "Siemens Energy • Lean@GS Playbook #1",
      "subtitle": "A practical journey from understanding your organisation's current Lean capability to agreeing what Lean should actually do for the business. Start with Navigator Toolkit → Orientation & Process Overview (and the Maturity Model Storybook). Note: The maturity assessment is not the Navigator process—it is one of Navigator's two principal inputs.",
      "goldenPrinciple": {
        "quote": "The goal isn't to improve the maturity score. The goal is to improve the business.",
        "explanation": "The Maturity Assessment tells you what capability you have and what may need developing. The Voice of the Customer tells you what the business needs. Navigator brings the two together so your organisation can decide where Lean should focus."
      },
      "convergenceBanner": {
        "input1Title": "Input 1: Lean Capability (Stages 1 & 2)",
        "input1Desc": "Where are we capable of operating today? (Maturity Assessment & Analysis Report)",
        "input2Title": "Input 2: Business Need (Stage 3)",
        "input2Desc": "What does the business need us to improve? (Voice of the Customer / VOC Input)",
        "combinedTitle": "Combined in Stage 4 (Navigator Workshop)",
        "combinedDesc": "Turning Lean capability [1–2] + business need [3] into an agreed Charter (Stage 5) & Action Plan (Stage 6)."
      },
      "filingRule": "Save finished .csv and .json files in '600 Maturity Submissions'. Never move or delete files in that folder.",
      "processIds": [
        "PRC-001",
        "PRC-002"
      ],
      "sopIds": [
        "SOP-001",
        "SOP-002",
        "SOP-003",
        "SOP-004"
      ],
      "toolIds": [
        "TOL-000",
        "TOL-001",
        "TOL-002",
        "TOL-004",
        "TOL-005",
        "TOL-009",
        "TOL-010"
      ],
      "liveToolIds": [
        "LIVE-NAVIGATOR",
        "LIVE-PORTAL",
        "LIVE-HUB",
        "LIVE-STORYBOOK"
      ],
      "crossRef": {
        "kicker": "Related Playbook • Standalone PM Maturity Hub Suite",
        "title": "Related Playbook: Need Standalone Scoring Maths, Metro Visualisations, Simulator, or CSV Fixer?",
        "desc": "Navigator Toolkit and PM Maturity Hub are kept in separate guides so their menus are never confused. Switch to the Lean@GS PM Maturity Hub Playbook anytime you want to inspect the 4-step Gateway cap maths in Score Explainer, view the Metro Journey & 4 Pillars maps, drag sliders in Simulator, or repair legacy Excel files.",
        "targetPlaybookId": "PLB-PMHUB",
        "primaryButtonLabel": "Switch to PM Maturity Hub Playbook →",
        "deepLinks": [
          {
            "label": "Score Explainer Guide →",
            "playbookId": "PLB-PMHUB",
            "view": "sop",
            "id": "SOP-005"
          },
          {
            "label": "Metro Journey & 4 Pillars →",
            "playbookId": "PLB-PMHUB",
            "view": "tool",
            "id": "TOL-003"
          },
          {
            "label": "Strategy Builder & Simulator →",
            "playbookId": "PLB-PMHUB",
            "view": "sop",
            "id": "SOP-006"
          },
          {
            "label": "CSV to JSON Fixer →",
            "playbookId": "PLB-PMHUB",
            "view": "tool",
            "id": "TOL-011"
          }
        ]
      },
      "chooserLabel": "Which part of the journey are you working on today?",
      "rulesKey": {
        "title": "Before You Start: Orientation & 3 Helpful Principles for Scoring & Prioritising",
        "subtitle": "Start in Navigator Toolkit → Orientation & Process Overview (plus Maturity Model Storybook)",
        "items": [
          {
            "term": "🤝 1. First-Time vs. Ongoing Assessments (Not an Audit)",
            "desc": "First-time assessment: complete together with a Lean Core Team partner to learn the 28 questions and workplace evidence. Ongoing assessments: complete directly with your Site Leadership Team as a self-assessment of capability (with Core Team support available when needed)."
          },
          {
            "term": "🏭 2. Visible Across ~70% of Teams",
            "desc": "To score a 3 or higher, a working habit should be visible with real boards and routines across roughly 7 out of 10 teams—a single pilot area scores a 2."
          },
          {
            "term": "🎯 3. Focus on 2–3 Key Actions at a Time",
            "desc": "Avoid building a 28-item wishlist. Combine your capability gaps with business needs to focus on 2 or 3 high-impact actions at a time."
          }
        ]
      },
      "journeyMap": {
        "formulaBanner": "1. Maturity Assessment → 2. Analysis → 3. Voice of the Customer (VOC) → 4. Navigator Workshop → 5. Charter → 6. Action Plan",
        "mapHeading": "The 6-Stage Lean@GS Navigator & Maturity Process",
        "roleFilters": [
          {
            "id": "all",
            "label": "All Roles"
          },
          {
            "id": "ROL-001",
            "label": "Local Programme Manager (LPM)"
          },
          {
            "id": "ROL-003",
            "label": "Site Leadership Team"
          },
          {
            "id": "ROL-002",
            "label": "Lean Core Team (Optional Support)"
          }
        ],
        "briefingButtonLabel": "⏱ Explain Navigator to Leadership (60-Sec Pitch)",
        "briefingTitle": "60-Second Leadership Briefing: How Maturity & Navigator Fit Together",
        "briefingEquation": "Input 1: Lean Capability (Stages 1–2) + Input 2: Business Need / VOC (Stage 3) = Navigator Workshop (Stage 4) → Charter (Stage 5) → Action Plan (Stage 6)",
        "briefingBullets": [
          "1. The goal isn't to improve the maturity score—the goal is to improve the business.",
          "2. Stages 1 & 2 establish our baseline Lean capability and highlight 2–3 key gaps; Stage 3 captures the Voice of the Customer (the business problems leadership needs solved).",
          "3. In Stages 4 to 6, we bring both inputs into the Navigator Workshop, agree a 1-Page Charter with clear objectives, and convert it into an owned action plan."
        ],
        "stages": [
          {
            "stageNumber": 1,
            "title": "Maturity Assessment",
            "summary": "Establish the baseline Lean capability. First-time assessments: LPM completes together with a Lean Core Team partner to learn the tool. Ongoing assessments: LPM completes directly with the Site Leadership Team as a self-assessment (not an audit).",
            "whoIsInvolved": "Lead: Local Programme Manager (LPM) with Site Leadership Team (1st time: with Lean Core Team partner; Ongoing: Core Team optional)",
            "leadRoleId": "ROL-001",
            "supportRoleId": "ROL-003",
            "involvedRoleIds": [
              "ROL-001",
              "ROL-003",
              "ROL-002"
            ],
            "toolId": "TOL-001",
            "toolLabel": "Navigator Toolkit → Maturity Assessment (↳ Maturity Explainer & Interactive Roadmap)",
            "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
            "secondaryLiveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/gs-lean-maturity/",
            "secondaryLiveLabel": "Standalone Maturity App (GS Lean Maturity) ↗",
            "tertiaryLiveUrl": "https://share.gemini.google/UjLQiIQXFbgc",
            "tertiaryLiveLabel": "Maturity Model Storybook ↗",
            "crossRefNote": {
              "text": "Using the standalone PM Maturity Hub for Score Explainer, Simulator, or CSV to JSON repair?",
              "cta": "Click here to open the PM Maturity Hub Guide →",
              "targetPlaybookId": "PLB-PMHUB",
              "targetView": "sop",
              "targetId": "SOP-005"
            },
            "outputArtifact": "Baseline picture of current Lean capability & gaps",
            "targetView": {
              "type": "sop",
              "id": "SOP-001",
              "cta": "Open Stage 1 Assessment Guide →"
            }
          },
          {
            "stageNumber": 2,
            "title": "Analysis",
            "summary": "Understand strengths, gaps, and foundation gateway caps. Load your assessment into Analysis Report and keep it focused—aim for 2 or 3 key capability actions at a time, not a huge list.",
            "whoIsInvolved": "Lead: Local Programme Manager (LPM) • Optional Support: Lean Core Team partner",
            "leadRoleId": "ROL-001",
            "supportRoleId": "ROL-002",
            "involvedRoleIds": [
              "ROL-001",
              "ROL-002"
            ],
            "toolId": "TOL-002",
            "toolLabel": "Navigator Toolkit → Analysis Report",
            "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
            "crossRefNote": {
              "text": "Using the standalone PM Maturity Hub for Score Explainer, Simulator, or CSV to JSON repair?",
              "cta": "Click here to open the PM Maturity Hub Guide →",
              "targetPlaybookId": "PLB-PMHUB",
              "targetView": "sop",
              "targetId": "SOP-005"
            },
            "outputArtifact": "Focused view of 2–3 priority capability gaps & foundation gateway caps",
            "targetView": {
              "type": "sop",
              "id": "SOP-002",
              "cta": "Open Stage 2 Analysis Guide →"
            }
          },
          {
            "stageNumber": 3,
            "title": "Voice of the Customer (VOC)",
            "summary": "Understand leadership business priorities and pain points. Engage leadership and stakeholders to capture their critical business challenges, measures of breakthrough success, and the problems they need Lean to solve.",
            "whoIsInvolved": "Lead: Local Programme Manager (LPM) with Site Leaders • Optional Support: Lean Core Team",
            "leadRoleId": "ROL-001",
            "supportRoleId": "ROL-003",
            "involvedRoleIds": [
              "ROL-001",
              "ROL-003",
              "ROL-002"
            ],
            "toolId": "TOL-004",
            "toolLabel": "Navigator Toolkit → VOC Input",
            "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
            "outputArtifact": "Clear business priorities & leadership pain points (VOC)",
            "targetView": {
              "type": "sop",
              "id": "SOP-003",
              "cta": "Open Stage 3 VOC Guide →"
            }
          },
          {
            "stageNumber": 4,
            "title": "Navigator Workshop",
            "summary": "Bring Lean capability [Stages 1–2] and Business need [Stage 3] together in the leadership workshop to establish why we are using Lean, the current situation, and our strategic direction.",
            "whoIsInvolved": "Owner & Lead: Local Programme Manager (LPM) with Site Leadership Team • Optional Support: Lean Core Team",
            "leadRoleId": "ROL-001",
            "supportRoleId": "ROL-003",
            "involvedRoleIds": [
              "ROL-001",
              "ROL-003",
              "ROL-002"
            ],
            "toolId": "TOL-005",
            "toolLabel": "Navigator Toolkit → Workshop Guide",
            "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
            "outputArtifact": "Aligned strategic direction connecting Lean capability to business problems",
            "targetView": {
              "type": "sop",
              "id": "SOP-004",
              "cta": "Open Stage 4 Workshop Guide →"
            }
          },
          {
            "stageNumber": 5,
            "title": "Charter",
            "summary": "Agree clear objectives, measurable key results, and 2–3 focus initiatives—along with your local improvement team, sponsor, and coaching roles.",
            "whoIsInvolved": "Owner: Local Programme Manager (LPM) & Site Sponsor • Optional Support: Lean Core Team",
            "leadRoleId": "ROL-001",
            "supportRoleId": "ROL-003",
            "involvedRoleIds": [
              "ROL-001",
              "ROL-003",
              "ROL-002"
            ],
            "toolId": "TOL-009",
            "toolLabel": "Navigator Toolkit → Charter Input & Charter & Roadmaps",
            "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
            "outputArtifact": "Agreed 1-Page Navigator Charter with 2–3 focus initiatives",
            "targetView": {
              "type": "template",
              "id": "TPL-001",
              "cta": "Open Stage 5 Charter →"
            }
          },
          {
            "stageNumber": 6,
            "title": "Action Plan",
            "summary": "Assign clear owners, target dates, and a local visual roadmap. Present and manage your improvement plan in the visual format that works best for your local organisation.",
            "whoIsInvolved": "Owner: Local Programme Manager (LPM) & Action Owners • Optional Support: Lean Core Team",
            "leadRoleId": "ROL-001",
            "supportRoleId": "ROL-002",
            "involvedRoleIds": [
              "ROL-001",
              "ROL-002"
            ],
            "toolId": "TOL-010",
            "toolLabel": "Navigator Toolkit → Action Log & Charter & Roadmaps",
            "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
            "outputArtifact": "Active improvement plan with owners, target dates & local visual roadmap",
            "targetView": {
              "type": "sop",
              "id": "SOP-004",
              "cta": "Open Stage 6 Action Plan Guide →"
            }
          }
        ]
      },
      "decisionTools": [
        {
          "id": "DEC-001",
          "kind": "vital-few-guide",
          "navTitle": "Focus on the Vital Few: Aligning Business Priorities with Lean Capability",
          "eyebrow": "STAGE 2 TO STAGE 4 BRIDGE • BUSINESS PRIORITY FIRST",
          "badge": "Target: 2 to 3 Business-Led Actions",
          "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
          "liveLabel": "Launch Navigator Toolkit (Analysis Report) ↗",
          "title": "Focusing on the 'Vital Few' (2 to 3 Key Actions)",
          "subtitle": "Start with the operational business problems your leaders need to solve—then select the 2 or 3 Lean maturity capabilities your teams need to develop to deliver those business results.",
          "rules": [
            {
              "badge": "STEP 1 • BUSINESS PRIORITY FIRST",
              "title": "Step 1: Define the Business Priority (From Stage 3 — Voice of the Customer)",
              "desc": "Pinpoint the specific operational challenge hurting business performance right now across Lead Time, Quality, Throughput, Cost, Overheads, Inventory, or Complexity.",
              "whereInApp": "Navigator Toolkit → VOC Input: Capture top stakeholder pain points across Lead Time, Quality, Throughput, Cost, Overheads, Inventory, and Complexity."
            },
            {
              "badge": "STEP 2 • SUPPORTING CAPABILITY",
              "title": "Step 2: Identify the Supporting Maturity Capability (From Stages 1 & 2 — Assessment & Analysis)",
              "desc": "Check your Analysis Report to see which foundational Lean capabilities (especially Starred Gateways ★ below Level 3) are currently missing and must be developed so your team can actually solve that business problem.",
              "whereInApp": "Navigator Toolkit → Analysis Report: Upload your saved .json assessment file and expand the red Foundation Focus (🎯) and yellow Opportunity for Growth (💡) stages."
            },
            {
              "badge": "STEP 3 • FOCUSED CHARTER ACTIONS",
              "title": "Step 3: Select 2 to 3 Focused Actions for Your Workshop & Charter (Stages 4 & 5)",
              "desc": "Combine the Business Priority + Enabling Capability into 2 or 3 high-impact initiatives. Never walk out with a 15-item maturity wishlist.",
              "whereInApp": "Navigator Toolkit → Analysis Report & Charter Input: Tick 'Accept Proposed Action (Y/N)', write a custom 'OE Action' tied to your business target, and save your .leansession file."
            }
          ],
          "comparisonExample": {
            "heading": "What Good Looks Like: 1 Business-Led Action vs. 1 Score-Chasing Wishlist Item",
            "good": {
              "badge": "✅ Good Business-Led Action (Vital Few)",
              "gatewayRef": "Business Priority: Lead Time + Q14 ★ & Q19",
              "title": "Business Target Supported by Enabling Lean Capability",
              "statement": "Cut end-to-end switchgear order lead time by 20% by mapping cross-department handoffs (Q19) and resolving bay blockers in a fixed 15-minute daily huddle (Q14 ★) by 30 Nov.",
              "whyItWorks": "Leads with a concrete operational business priority (20% Lead Time reduction) and develops the exact enabling Lean capabilities (Q19 handoff standards and Q14 ★ daily huddles) needed to achieve and sustain it."
            },
            "bad": {
              "badge": "❌ Score-Chasing Wishlist Item (Avoid)",
              "warningRef": "Chasing Maturity Points Without a Business Problem",
              "title": "Unfocused Maturity-Score Chasing",
              "statement": "Raise our overall maturity score by +0.8 points and unlock Level 3 by improving 12 assessment questions across the department this quarter.",
              "whyItFails": "Treats maturity points as the goal rather than the enabler, spreads leadership capacity too thin across 12 disconnected items, and fails to solve a concrete Lead Time, Quality, Throughput, or Cost problem."
            }
          },
          "rulesHeading": "The 3-Step Alignment Logic: Business Priority First → Supported by Capability → Focused Action",
          "matrixHeading": "Practical 'Business Priority ↔ Supporting Maturity Capability' Reference Matrix",
          "matrixSubtitle": "Start in the left column with the operational problem your leadership team needs to solve—then pair it with the enabling Lean maturity capabilities (Questions & ★ Gateways) needed to deliver and sustain that result:",
          "priorityMatrix": [
            {
              "priority": "1. Lead Time",
              "painPoint": "Long end-to-end customer lead times & waiting between departments",
              "supportingCapabilities": "Q12 ★ (Flow Metrics), Q14 ★ (Daily Huddles), Q19 (Departmental Handoffs), Q26 ★ (Cross-Functional Flow)",
              "exampleAction": "Cut end-to-end order lead time by 20% by mapping cross-department handoffs (Q19) and resolving blockers in daily huddles (Q14 ★)."
            },
            {
              "priority": "2. Quality",
              "painPoint": "Repeat defects, rework loops, or escapes to the customer",
              "supportingCapabilities": "Q14 ★ (Issue Escalation), Q16 ★ (Structured Reflection), Q17 (Lessons Learned), Q22 ★ (Blameless Reporting)",
              "exampleAction": "Reduce repeat assembly rework by 35% by embedding structured root-cause reflection after every major defect (Q16 ★)."
            },
            {
              "priority": "3. Throughput",
              "painPoint": "Bottlenecks, uneven output, or missed delivery milestones",
              "supportingCapabilities": "Q10 ★ (Structured Pilot Experiments), Q11 (Standard Work), Q12 ★ (Throughput & Yield Tracking)",
              "exampleAction": "Increase bottleneck cell throughput by 15% by running structured pilot experiments (Q10 ★) and stabilising standard work (Q11)."
            },
            {
              "priority": "4. Cost",
              "painPoint": "High direct job costs, scrap, or uncoordinated firefighting",
              "supportingCapabilities": "Q4 ★ & Q5 ★ (Waste Elimination & Flow), Q13 (Preventing Local Optimisation), Q15 ★ (Frontline Waste Ideas)",
              "exampleAction": "Reduce unit production cost by 8% by capturing and implementing weekly frontline waste-elimination ideas tied to team metrics (Q15 ★)."
            },
            {
              "priority": "5. Overheads",
              "painPoint": "Excessive indirect admin, manual chasing, and status meetings",
              "supportingCapabilities": "Q7 ★ (Clear Role Ownership), Q8 ★ (Strategy & Capacity Alignment), Q14 ★ (Short Fixed Tiered Huddles)",
              "exampleAction": "Cut indirect progress-chasing overhead by replacing ad-hoc status meetings with a 15-minute visual daily huddle and clear role ownership (Q7 ★, Q14 ★)."
            },
            {
              "priority": "6. Inventory",
              "painPoint": "Excess work-in-progress buffers, parts shortages, or batch-and-queue habits",
              "supportingCapabilities": "Q5 ★ (Flow vs. Batching), Q12 ★ (Work-in-Progress & Lead-Time Metrics), Q18 ★ & Q27 ★ (Supplier Value Chain Alignment)",
              "exampleAction": "Lower work-in-progress (WIP) inventory by 25% by replacing batch handoffs with pull flow and shared supplier standards (Q5 ★, Q18 ★)."
            },
            {
              "priority": "7. Complexity",
              "painPoint": "Over-complicated processes, custom workarounds, and variant chaos",
              "supportingCapabilities": "Q11 (Visual Standard Work), Q19 (SIPOC Interface Agreements), Q23 & Q25 ★ (Scaling Proven Standards)",
              "exampleAction": "Simplify process handoffs across 3 shifts by locking in one visual standard work routine and scaling the pilot standard site-wide (Q11, Q25 ★)."
            }
          ]
        },
        {
          "id": "DEC-002",
          "kind": "score-calculator",
          "navTitle": "Gateway Score Cap Calculator",
          "eyebrow": "Stage 2 Analysis & Maturity Explainer • Interactive Calculator",
          "title": "How Gateway Score Caps Work",
          "subtitle": "Why high scores on Level 2–4 questions do not raise your total score if a Level 1 Starred Gateway (such as Q10: Pilot Experiments) scores below 3.",
          "stepsTitle": "How Your Site Score Is Worked Out",
          "steps": [
            "1. Check Starred Gateways: Find the highest level where every starred Gateway question scored at least 3.",
            "2. Count Unlocked Questions: Only include questions up to your unlocked level (e.g., 10 of 28 questions at Level 1).",
            "3. Find the Average: Divide total points by unlocked questions (34 ÷ 10 = 3.40).",
            "4. Apply Level Cap: Level + [(Average - 1) / 4] keeps your final score inside your unlocked level (1.6)."
          ],
          "levelNames": [
            "0 (Lean Awareness)",
            "1 (Basic Implementation)",
            "2 (Structured Approach)",
            "3 (Integrated Lean Culture)",
            "4 (Strategic Mastery)"
          ]
        },
        {
          "id": "DEC-MAT-001",
          "kind": "scoring-matrix-1page",
          "navTitle": "1-Page 28-Question & 1–5 Scoring Rubric",
          "eyebrow": "Shared 16:9 One-Page Scoring & Criteria Matrix",
          "badge": "Navigator Toolkit / GS Lean Maturity / PM Maturity Hub",
          "title": "All 28 Questions, 17 Gateways (★) & 1–5 Scoring Guide",
          "subtitle": "Interactive 1-Page 28-Question & 1–5 Scoring Rubric Matrix with New Standard (2026) / Old Standard toggle, Full Verbatim / Executive Concise toggle, and native PowerPoint (.pptx), 4K Image (.png), and 1-Page PDF exports."
        }
      ],
      "templates": [
        {
          "id": "TPL-001",
          "kind": "action-charter",
          "navTitle": "One-Page Navigator Charter — Annotated Example & Field Guide",
          "eyebrow": "STAGE 5 CHARTER REFERENCE • ANNOTATED EXAMPLE & FIELD GUIDE",
          "badge": "Navigator Toolkit → Charter Input",
          "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
          "liveLabel": "Launch Navigator Toolkit (Charter Input) ↗",
          "title": "One-Page Navigator Charter — Annotated Example & Field Guide",
          "subtitle": "Annotated reference guide showing how a completed One-Page Transformation Charter pairs concrete Business Priorities (Lead Time, Quality, Throughput) with enabling Lean maturity capabilities (★) inside Navigator Toolkit → Charter Input.",
          "appLocation": "Navigator Toolkit → Charter Input (data entry) & Charter & Roadmaps (executive poster)",
          "fieldGuide": [
            {
              "field": "1. Business Priority & Problem Statement (Top Left)",
              "whatToEnter": "State the concrete operational business problem (Lead Time, Quality, Throughput, Cost, Overheads, Inventory, or Complexity) from your Stage 3 Voice of the Customer synthesis alongside the supporting maturity capability gap from Stage 2.",
              "example": "\"High-voltage bay handoff delays and repeat test rework are adding 4.5 days to customer lead time; missing visual flow metrics (Q12 ★) and daily escalation huddles (Q14 ★) prevent teams from resolving bottlenecks early.\""
            },
            {
              "field": "2. Focused Charter Actions ('Vital Few' — Centre Table)",
              "whatToEnter": "Enter 2 to 3 focused actions imported from your .leansession file or selected during your Stage 4 Navigator Workshop. Each action must pair a measurable Business Priority target with the enabling Lean capability (Question / ★ Gateway).",
              "example": "\"Cut end-to-end order lead time by 20% by mapping cross-department handoffs (Q19) and resolving blockers in daily huddles (Q14 ★).\""
            },
            {
              "field": "3. Single Named Owner & 30/60/90-Day Milestones",
              "whatToEnter": "Assign one accountable person per action (never a department name or 'All') and set a concrete 30-, 60-, or 90-day validation date.",
              "example": "\"M. Weber (Assembly Team Lead) — Day 30 (15 Nov)\""
            },
            {
              "field": "4. Measurable Business Outcome Target & Sponsor Sign-Off",
              "whatToEnter": "Define the operational metric (Lead Time, Quality, Throughput, Cost, Overheads, Inventory, or Complexity) that proves the business problem is solved, supported by the developed Lean capability.",
              "example": "\"Cut end-to-end order lead time by 20% (from 18 days to 14.4 days) + Sponsor Sign-Off: E. Rostova\""
            }
          ],
          "metaFields": [
            {
              "label": "Site / Area",
              "value": "Example: Blade Manufacturing Cell A"
            },
            {
              "label": "Date",
              "value": "2026-Q1 Baseline"
            },
            {
              "label": "Local Programme Manager",
              "value": "Local Programme Manager (LPM)"
            },
            {
              "label": "Site Leader Sponsor",
              "value": "Head of Operations (Site Sponsor)"
            }
          ],
          "leftBoxTitle": "1. Top 3 Leader Priorities (Business Problems to Solve)",
          "leftBoxBullets": [
            "Shorten delivery lead time on the main assembly line.",
            "Cut repeat quality defects across shift handovers.",
            "Fix material handoff delays between warehouse and assembly."
          ],
          "rightBoxTitle": "2. Starting Site Score & Starred Gateways to Fix",
          "rightBoxPrimary": "Current Score: 1.6 / 4.0 (Level 1: Basic Implementation)",
          "rightBoxSecondaryPrefix": "Focused Actions",
          "rightBoxSecondaryValue": "3 Key Initiatives (Focused on Level 1–2 ★ Gateways)",
          "tableHeaders": {
            "focus": "Focused Charter Action ('Vital Few' — Max 3)",
            "owner": "Single Named Owner",
            "targetDate": "90-Day Milestone",
            "kpi": "Measurable Business Outcome Target",
            "lift": "Supporting Capability (★)",
            "tag": "Business Priority"
          },
          "objectiveRowCode": "OBJ 1",
          "objectiveRowText": "Annotated Example: 3 Focused Initiatives Entered in Navigator Toolkit → Charter Input",
          "exampleRows": [
            {
              "focus": "1. Cut end-to-end assembly lead time by mapping cross-department handoffs and resolving daily blockers at a fixed 07:45 visual huddle.",
              "owner": "M. Weber (Assembly Team Lead)",
              "targetDate": "Day 30 (15 Nov)",
              "kpi": "Cut end-to-end order lead time by 20% & escalate 100% of bay blockers within 15 mins",
              "lift": "Q14 ★ Daily Huddles & Q19 Handoffs",
              "tag": "Lead Time"
            },
            {
              "focus": "2. Reduce repeat dielectric test rework by embedding structured root-cause reflection after every major test defect.",
              "owner": "S. Lindqvist (Quality & Test Lead)",
              "targetDate": "Day 60 (15 Dec)",
              "kpi": "Reduce repeat assembly rework by 35% across Bays 1–5",
              "lift": "Q16 ★ Structured Reflection & Q17",
              "tag": "Quality"
            },
            {
              "focus": "3. Increase bottleneck test-bay throughput by running structured pilot experiments and locking in visual standard work.",
              "owner": "K. Patel (Test Bay Supervisor)",
              "targetDate": "Day 90 (15 Jan)",
              "kpi": "Increase bottleneck cell throughput by 15% & cut test changeover wait by 25%",
              "lift": "Q10 ★ Pilot Experiments & Q11",
              "tag": "Throughput"
            }
          ]
        }
      ],
      "referenceTables": [
        {
          "id": "REF-001",
          "kind": "scoring-matrix-1page",
          "navTitle": "All 28 Questions, 17 Gateways (★) & 1–5 Scoring Guide",
          "eyebrow": "Shared 16:9 One-Page Scoring & Criteria Matrix",
          "badge": "Navigator Toolkit / PM Maturity Hub / GS Lean Maturity",
          "title": "All 28 Questions, 17 Gateways (★) & 1–5 Scoring Guide",
          "subtitle": "Interactive 1-Page 28-Question & 1–5 Scoring Rubric Matrix with New Standard (2026) / Old Standard toggle, Full Verbatim / Executive Concise toggle, and native PowerPoint (.pptx), 4K Image (.png), and 1-Page PDF exports.",
          "filterAllLabel": "All Questions (28)",
          "filterFlaggedLabel": "★ Starred Gateways Only (17)",
          "columns": [
            "#",
            "Assessment Question",
            "Topic",
            "Level",
            "Gateway?"
          ],
          "rows": [
            {
              "code": "Q1",
              "col1": "Is there a clear business reason driving this Lean Programme?",
              "col2": "Foundation",
              "col3": "Level 0",
              "flagged": true,
              "flagLabel": "★ Yes"
            },
            {
              "code": "Q2",
              "col1": "Is leadership committed and actively invested in being involved?",
              "col2": "Foundation",
              "col3": "Level 0",
              "flagged": true,
              "flagLabel": "★ Yes"
            },
            {
              "code": "Q3",
              "col1": "Has the team or organisation started acquiring foundational Lean knowledge?",
              "col2": "Foundation",
              "col3": "Level 0",
              "flagged": true,
              "flagLabel": "★ Yes"
            },
            {
              "code": "Q4",
              "col1": "How clearly can your team describe what Lean means and how it supports your business goals?",
              "col2": "Awareness and Training",
              "col3": "Level 0",
              "flagged": true,
              "flagLabel": "★ Yes"
            },
            {
              "code": "Q5",
              "col1": "How deeply do team members understand core Lean concepts?",
              "col2": "Awareness and Training",
              "col3": "Level 0",
              "flagged": true,
              "flagLabel": "★ Yes"
            },
            {
              "code": "Q6",
              "col1": "Is there a consistent and active plan to close competency gaps?",
              "col2": "Awareness and Training",
              "col3": "Level 1",
              "flagged": false,
              "flagLabel": "No"
            },
            {
              "code": "Q7",
              "col1": "Is there a clear Lean structure and defined role ownership within the team?",
              "col2": "Lean Structure and Strategy",
              "col3": "Level 1",
              "flagged": true,
              "flagLabel": "★ Yes"
            },
            {
              "code": "Q8",
              "col1": "How effectively is strategy managed and reviewed at your level?",
              "col2": "Lean Structure and Strategy",
              "col3": "Level 1",
              "flagged": true,
              "flagLabel": "★ Yes"
            },
            {
              "code": "Q9",
              "col1": "How well are strategic objectives cascaded to teams?",
              "col2": "Lean Structure and Strategy",
              "col3": "Level 2",
              "flagged": false,
              "flagLabel": "No"
            },
            {
              "code": "Q10",
              "col1": "Does the team actively execute structured, pilot experiments?",
              "col2": "Lean Tools and KPI Alignment",
              "col3": "Level 1",
              "flagged": true,
              "flagLabel": "★ Yes"
            },
            {
              "code": "Q11",
              "col1": "Are Lean tools routinely applied and embedded in daily operations?",
              "col2": "Lean Tools and KPI Alignment",
              "col3": "Level 2",
              "flagged": false,
              "flagLabel": "No"
            },
            {
              "code": "Q12",
              "col1": "Are performance metrics and Lean-relevant KPIs displayed and actively discussed in the work area?",
              "col2": "Lean Tools and KPI Alignment",
              "col3": "Level 2",
              "flagged": true,
              "flagLabel": "★ Yes"
            },
            {
              "code": "Q13",
              "col1": "Is the review of KPIs driven by Lean principles to prevent local optimization?",
              "col2": "Lean Tools and KPI Alignment",
              "col3": "Level 3",
              "flagged": false,
              "flagLabel": "No"
            },
            {
              "code": "Q14",
              "col1": "Are daily huddles used consistently to raise and resolve issues?",
              "col2": "Daily Management and CI",
              "col3": "Level 2",
              "flagged": true,
              "flagLabel": "★ Yes"
            },
            {
              "code": "Q15",
              "col1": "How effectively are employee suggestions captured and implemented?",
              "col2": "Daily Management and CI",
              "col3": "Level 2",
              "flagged": true,
              "flagLabel": "★ Yes"
            },
            {
              "code": "Q16",
              "col1": "Does the team practice structured reflection?",
              "col2": "Learning and Value Chain Integration",
              "col3": "Level 2",
              "flagged": true,
              "flagLabel": "★ Yes"
            },
            {
              "code": "Q17",
              "col1": "How consistently are lessons learned documented and applied?",
              "col2": "Learning and Value Chain Integration",
              "col3": "Level 3",
              "flagged": false,
              "flagLabel": "No"
            },
            {
              "code": "Q18",
              "col1": "Does your Lean philosophy extend across your entire value chain?",
              "col2": "Learning and Value Chain Integration",
              "col3": "Level 3",
              "flagged": true,
              "flagLabel": "★ Yes"
            },
            {
              "code": "Q19",
              "col1": "Are internal departmental handoffs integrated to ensure seamless process flow?",
              "col2": "Learning and Value Chain Integration",
              "col3": "Level 3",
              "flagged": false,
              "flagLabel": "No"
            },
            {
              "code": "Q20",
              "col1": "Do leaders practice the 'Gemba Walk' habit consistently?",
              "col2": "Leadership & Culture",
              "col3": "Level 2",
              "flagged": false,
              "flagLabel": "No"
            },
            {
              "code": "Q21",
              "col1": "Do leaders use a consistent questioning cycle to identify target conditions and obstacles?",
              "col2": "Leadership & Culture",
              "col3": "Level 2",
              "flagged": false,
              "flagLabel": "No"
            },
            {
              "code": "Q22",
              "col1": "Is there a culture of psychological safety that encourages safe experimentation?",
              "col2": "Leadership & Culture",
              "col3": "Level 2",
              "flagged": true,
              "flagLabel": "★ Yes"
            },
            {
              "code": "Q23",
              "col1": "Are learnings from reflection used to update standard work?",
              "col2": "Learning & Scaling",
              "col3": "Level 3",
              "flagged": false,
              "flagLabel": "No"
            },
            {
              "code": "Q24",
              "col1": "Is physical verification used to validate pilot project outcomes?",
              "col2": "Learning & Scaling",
              "col3": "Level 3",
              "flagged": false,
              "flagLabel": "No"
            },
            {
              "code": "Q25",
              "col1": "Are successful standards systematically scaled across the site?",
              "col2": "Learning & Scaling",
              "col3": "Level 3",
              "flagged": true,
              "flagLabel": "★ Yes"
            },
            {
              "code": "Q26",
              "col1": "Do teams from different functions collaborate to improve shared processes?",
              "col2": "Collaboration & Feedback",
              "col3": "Level 2",
              "flagged": true,
              "flagLabel": "★ Yes"
            },
            {
              "code": "Q27",
              "col1": "Are joint improvement projects executed with external partners?",
              "col2": "Collaboration & Feedback",
              "col3": "Level 4",
              "flagged": true,
              "flagLabel": "★ Yes"
            },
            {
              "code": "Q28",
              "col1": "How consistently are success stories shared and replicated?",
              "col2": "Communication",
              "col3": "Level 1",
              "flagged": false,
              "flagLabel": "No"
            }
          ]
        }
      ]
    },
    {
      "id": "PLB-MATURITY",
      "code": "PLB-MATURITY",
      "title": "Standalone GS Lean Maturity & Storybook Guide (28-Question Assessment)",
      "shortTitle": "Standalone GS Lean Maturity Guide",
      "eyebrow": "Siemens Energy • Lean@GS Playbook #2",
      "subtitle": "Dedicated guide for the standalone GS Lean Maturity web app and the Maturity Model Storybook—covering the 5 maturity levels, 10 themes, 28-question scoring rubric, Radar Dashboard, and file export.",
      "goldenPrinciple": {
        "quote": "Treat the 28-question assessment as a supportive capability self-assessment—never an audit.",
        "explanation": "First-time assessments are completed together with a Lean Core Team partner to learn the 28-question rubric and 70% site coverage rule. Ongoing assessments are completed directly with your Site Leadership Team to see where teams need support."
      },
      "convergenceBanner": {
        "input1Title": "Stages 1 & 2: Storybook & 28-Card Scoring",
        "input1Desc": "Explore the 5 maturity levels in the Storybook & Explainer flashcards, then score all 28 cards using the 70% site rule.",
        "input2Title": "Stages 3 & 4: Radar Dashboard & File Export",
        "input2Desc": "Inspect the 10-theme Radar Dashboard & Starred Gateway caps, then export your local assessment files.",
        "combinedTitle": "Ready for Navigator Toolkit or PM Maturity Hub",
        "combinedDesc": "Archive official baselines via your Lean Core Team partner, or load your file into Navigator Toolkit or PM Maturity Hub."
      },
      "filingRule": "Only Lean Core Team members upload official submissions into '600 Maturity Submissions'. Local Programme Managers save exported files locally and send a copy to their Core Team partner.",
      "processIds": [
        "PRC-005"
      ],
      "sopIds": [
        "SOP-009",
        "SOP-010"
      ],
      "toolIds": [
        "TOL-012"
      ],
      "liveToolIds": [
        "LIVE-PORTAL",
        "LIVE-STORYBOOK",
        "LIVE-NAVIGATOR",
        "LIVE-HUB"
      ],
      "crossRef": {
        "kicker": "Related Playbooks • Choose Your Next Path",
        "title": "Finished your standalone 28-question assessment? Jump to Navigator Toolkit or PM Maturity Hub in one click:",
        "desc": "Your exported assessment file loads directly into either sister application—use Lean@GS Navigator Toolkit to combine your assessment with Voice of the Customer for a 1-Page Charter, or Lean@GS PM Maturity Hub for Score Explainer, Metro Journey, and Simulator.",
        "targetPlaybookId": "PLB-001",
        "primaryButtonLabel": "Open Lean@GS Navigator Toolkit Guide →",
        "deepLinks": [
          {
            "label": "Navigator Stage 2 Analysis Report →",
            "playbookId": "PLB-001",
            "view": "sop",
            "id": "SOP-002"
          },
          {
            "label": "Navigator Stage 3–6 VOC, Workshop & Charter →",
            "playbookId": "PLB-001",
            "view": "sop",
            "id": "SOP-003"
          },
          {
            "label": "PM Maturity Hub: Score Explainer & Metro Journey →",
            "playbookId": "PLB-PMHUB",
            "view": "sop",
            "id": "SOP-005"
          },
          {
            "label": "PM Maturity Hub: Strategy Builder & Simulator →",
            "playbookId": "PLB-PMHUB",
            "view": "sop",
            "id": "SOP-006"
          }
        ]
      },
      "chooserLabel": "Which part of the standalone maturity assessment are you doing today?",
      "rulesKey": {
        "title": "Before You Start: 3 Ground-Truth Rules for the Standalone 28-Question Assessment",
        "subtitle": "Hosted at GS Lean Maturity & Maturity Model Storybook",
        "items": [
          {
            "term": "🤝 1. First-Time with Core Team • Ongoing with Leadership Team",
            "desc": "Complete your first baseline together with a Lean Core Team partner to learn the 28-question rubric. Complete ongoing assessments directly with your Site Leadership Team as a self-assessment (never an audit)."
          },
          {
            "term": "🏭 2. The 70% Site Rule & 17 Starred Gateways (★)",
            "desc": "Foundation Q1–Q3 are Binary (1 = No, 5 = Yes). For Q4–Q28, a habit must be visible across roughly 70% of teams to score 3 or higher. All 17 Starred Gateways (★) must score ≥ 3 (or 5 on Q1–Q3) to unlock the next level."
          },
          {
            "term": "📁 3. Official Filing Rule ('600 Maturity Submissions')",
            "desc": "Only Lean Core Team members upload official submissions into the '600 Maturity Submissions' folder. LPMs save exported files locally and send a copy to their Core Team partner."
          }
        ]
      },
      "journeyMap": {
        "formulaBanner": "1. Explore 5 Levels & 10 Themes (Storybook) → 2. Score 28 Questions → 3. Review Radar Dashboard & Gateway Caps → 4. Export & Choose Next Path",
        "mapHeading": "The 4-Stage Standalone GS Lean Maturity & Storybook Journey",
        "roleFilters": [
          {
            "id": "all",
            "label": "All Roles"
          },
          {
            "id": "ROL-001",
            "label": "Local Programme Manager (LPM)"
          },
          {
            "id": "ROL-003",
            "label": "Site Leadership Team"
          },
          {
            "id": "ROL-002",
            "label": "Lean Core Team Partner"
          }
        ],
        "briefingButtonLabel": "⏱ Overview of Standalone Maturity & Storybook (60-Sec Pitch)",
        "briefingTitle": "60-Second Overview: Standalone GS Lean Maturity & Maturity Model Storybook",
        "briefingEquation": "Stage 1: Storybook & Explainer → Stage 2: Score 28 Cards (~70% Rule) → Stage 3: Radar Dashboard → Stage 4: Export & Handover",
        "briefingBullets": [
          "1. Stage 1 (Storybook & Explainer): Review the 5 maturity levels (1. Awareness to 5. Lean Enterprise), 10 themes, and 17 Starred Gateways (★) before scoring.",
          "2. Stage 2 (Score 28 Questions): Confirm 'New Standard' is active, fill in the header, and score all 28 cards using the 70% site coverage rule.",
          "3. Stages 3 & 4 (Dashboard & Export): Click 'View Dashboard' to inspect the 10-theme radar chart and Gateway caps, then export your local files to share with your Core Team partner or load into Navigator Toolkit / PM Maturity Hub."
        ],
        "stages": [
          {
            "stageNumber": 1,
            "title": "Explore the 5 Levels & 10 Themes (Maturity Model Storybook)",
            "summary": "Walk through the Maturity Model Storybook and Maturity Explainer flashcards to understand the 5 maturity levels (1. Awareness → 5. Lean Enterprise), 10 themes, and 17 Starred Gateways (★) before scoring.",
            "whoIsInvolved": "Lead: Local Programme Manager (LPM) with Site Leadership Team & Lean Core Team partner",
            "leadRoleId": "ROL-001",
            "supportRoleId": "ROL-002",
            "involvedRoleIds": [
              "ROL-001",
              "ROL-003",
              "ROL-002"
            ],
            "toolId": "TOL-012",
            "toolLabel": "Maturity Model Storybook & Maturity Explainer",
            "liveUrl": "https://share.gemini.google/UjLQiIQXFbgc",
            "secondaryLiveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/gs-lean-maturity/",
            "secondaryLiveLabel": "Standalone GS Lean Maturity App ↗",
            "outputArtifact": "Shared understanding of the 5 maturity levels, 10 themes & 70% site rule",
            "targetView": {
              "type": "sop",
              "id": "SOP-009",
              "cta": "Open Stage 1 Storybook & Explainer Guide →"
            }
          },
          {
            "stageNumber": 2,
            "title": "Set Up & Score the 28 Questions (Standalone Maturity Assessment)",
            "summary": "Confirm the toggle is on 'New Standard', fill in the top assessment details (Project/Dept, Org, Date, Assessed By, Local PM, Scope), and click each of the 28 cards to score 1–5 (or Binary 1/5 on Q1–Q3) and record workplace evidence notes.",
            "whoIsInvolved": "Lead: Local Programme Manager (LPM) with Site Leadership Team (1st time: with Lean Core Team partner)",
            "leadRoleId": "ROL-001",
            "supportRoleId": "ROL-003",
            "involvedRoleIds": [
              "ROL-001",
              "ROL-003",
              "ROL-002"
            ],
            "toolId": "TOL-012",
            "toolLabel": "Standalone GS Lean Maturity → 28-Question Assessment Grid",
            "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/gs-lean-maturity/",
            "secondaryLiveUrl": "https://share.gemini.google/UjLQiIQXFbgc",
            "secondaryLiveLabel": "Maturity Model Storybook ↗",
            "outputArtifact": "All 28 question cards evaluated with workplace evidence notes",
            "targetView": {
              "type": "sop",
              "id": "SOP-009",
              "cta": "Open Stage 2 Scoring Guide →"
            }
          },
          {
            "stageNumber": 3,
            "title": "Review the Radar Dashboard & Gateway Caps (View Dashboard)",
            "summary": "Click 'View Dashboard' to inspect the 10-theme radar chart, category bar chart, overall maturity level, and which Starred Gateway questions (★) are currently capping the site's level.",
            "whoIsInvolved": "Lead: Local Programme Manager (LPM) with Site Leadership Team",
            "leadRoleId": "ROL-001",
            "supportRoleId": "ROL-003",
            "involvedRoleIds": [
              "ROL-001",
              "ROL-003",
              "ROL-002"
            ],
            "toolId": "TOL-012",
            "toolLabel": "Standalone GS Lean Maturity → View Dashboard Modal",
            "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/gs-lean-maturity/",
            "outputArtifact": "10-theme Radar Dashboard review & Starred Gateway cap diagnosis",
            "targetView": {
              "type": "sop",
              "id": "SOP-010",
              "cta": "Open Stage 3 Radar Dashboard Guide →"
            }
          },
          {
            "stageNumber": 4,
            "title": "Export Files & Choose Your Next Path (Export Assessment)",
            "summary": "Click 'Export Assessment' to save your data locally, send a copy to your Lean Core Team partner for official archiving in '600 Maturity Submissions', and optionally load your file into Navigator Toolkit or PM Maturity Hub.",
            "whoIsInvolved": "Lead: Local Programme Manager (LPM) • Official Archiving: Lean Core Team Partner",
            "leadRoleId": "ROL-001",
            "supportRoleId": "ROL-002",
            "involvedRoleIds": [
              "ROL-001",
              "ROL-002"
            ],
            "toolId": "TOL-012",
            "toolLabel": "Standalone GS Lean Maturity → Export Assessment",
            "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/gs-lean-maturity/",
            "crossRefNote": {
              "text": "Ready to use your exported assessment in a Leadership Workshop or in the Score Simulator?",
              "cta": "Open Navigator Toolkit Guide →",
              "targetPlaybookId": "PLB-001",
              "targetView": "sop",
              "targetId": "SOP-002"
            },
            "outputArtifact": "Exported local assessment files & official Core Team submission copy",
            "targetView": {
              "type": "sop",
              "id": "SOP-010",
              "cta": "Open Stage 4 Export & Handover Guide →"
            }
          }
        ]
      },
      "decisionTools": [
        {
          "id": "DEC-MAT-002",
          "kind": "score-calculator",
          "navTitle": "Gateway Score Cap Calculator",
          "eyebrow": "Stage 3 Radar Dashboard & Gateway Status • Interactive Calculator",
          "title": "How Starred Gateway Caps Work on the Assessment Dashboard",
          "subtitle": "See why all 17 Starred Gateways (★) at your current level must score at least 3 (or 5 on Foundation Q1–Q3) before higher-level question scores unlock the next maturity stage.",
          "stepsTitle": "How Your Overall Maturity Level Is Calculated",
          "steps": [
            "1. Check Foundation Gates (Q1–Q3): All three Binary Foundation gates must score 5 (Yes) to unlock Level 1.",
            "2. Check Starred Gateways (★): Find the highest level where every Starred Gateway question scored at least 3 across ~70% of teams.",
            "3. Count Unlocked Questions: Only include questions up to your unlocked level when calculating the active average.",
            "4. Inspect 'View Dashboard': Open the Assessment Dashboard modal to see your Radar Chart and which Starred Gateways are Passed vs. Capped."
          ],
          "levelNames": [
            "0 (Lean Awareness)",
            "1 (Basic Implementation)",
            "2 (Structured Approach)",
            "3 (Integrated Lean Culture)",
            "4 (Strategic Mastery)"
          ]
        },
        {
          "id": "DEC-MAT-001",
          "kind": "scoring-matrix-1page",
          "navTitle": "1-Page 28-Question & 1–5 Scoring Rubric",
          "eyebrow": "Shared 16:9 One-Page Scoring & Criteria Matrix",
          "badge": "GS Lean Maturity / Navigator Toolkit / PM Maturity Hub",
          "title": "All 28 Questions, 17 Gateways (★) & 1–5 Scoring Guide",
          "subtitle": "Interactive 1-Page 28-Question & 1–5 Scoring Rubric Matrix with New Standard (2026) / Old Standard toggle, Full Verbatim / Executive Concise toggle, and native PowerPoint (.pptx), 4K Image (.png), and 1-Page PDF exports."
        }
      ],
      "templates": [
        {
          "id": "TPL-MAT-001",
          "kind": "action-charter",
          "navTitle": "Standalone Assessment Header, Evidence & Handover Guide",
          "eyebrow": "STAGES 2 & 4 REFERENCE • ANNOTATED EXAMPLE & HANDOVER GUIDE",
          "badge": "Standalone GS Lean Maturity",
          "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/gs-lean-maturity/",
          "liveLabel": "Launch Standalone GS Lean Maturity App ↗",
          "title": "Standalone Assessment Header, Evidence Notes & Next-Path Handover Guide",
          "subtitle": "Annotated example showing how to complete the Top User Data Plate, write concrete 70% workplace evidence notes inside each Question Card Modal, and hand over your exported files.",
          "appLocation": "Standalone GS Lean Maturity → User Data Plate, Question Card Modal & Export Assessment",
          "fieldGuide": [
            {
              "section": "1. Top User Data Plate (6 Fields)",
              "appField": "Project/Dept, Org, Date, Assessed By, Local PM, Scope",
              "guidance": "Fill in all 6 header fields before scoring so your exported .json, .csv, and Radar Dashboard PDF carry complete site metadata."
            },
            {
              "section": "2. Workplace Evidence Notes (~70% Rule)",
              "appField": "Question Card Modal → Comments & Actions Box",
              "guidance": "Record specific physical proof (e.g., which cells run daily huddles, board locations, or which pilot area is at Level 2) before clicking 'Mark as Evaluated'."
            },
            {
              "section": "3. Export & Next-Path Handover",
              "appField": "Top Action Bar → Export Assessment (.json & .csv)",
              "guidance": "Save locally to load into Navigator Toolkit or PM Maturity Hub, and send a copy to your Lean Core Team partner for official filing in '600 Maturity Submissions'."
            }
          ],
          "metaFields": [
            {
              "label": "Project / Department",
              "value": "Example: Gas Services Turbine Assembly"
            },
            {
              "label": "Assessment Date",
              "value": "2026-Q1 Baseline (New Standard)"
            },
            {
              "label": "Assessed By",
              "value": "Local Programme Manager + Site Leadership Team"
            },
            {
              "label": "Core Team Partner",
              "value": "Lean Core Team Partner (Official Filing)"
            }
          ],
          "leftBoxTitle": "1. What Strong Workplace Evidence Notes Look Like (Comments & Actions)",
          "leftBoxBullets": [
            "Q1–Q3 (Binary Gates): Document the specific business problem (True North), active sponsor routines, and core team training completed.",
            "Score 3+ (~70% Site Rule): Name the operational areas where visual boards, standard work, or daily huddles are visibly running (e.g., 'Active in 6 of 8 assembly cells').",
            "Score 2 (Isolated Pilot): Note the single pilot cell so leadership can scale it across the site next quarter."
          ],
          "rightBoxTitle": "2. Choosing Your Next Path After Exporting (.json & .csv)",
          "rightBoxPrimary": "Official Archive: Send copy to Lean Core Team partner for '600 Maturity Submissions'",
          "rightBoxSecondaryPrefix": "Next App Options",
          "rightBoxSecondaryValue": "Load .json into Navigator Toolkit (Analysis & Workshop) OR PM Maturity Hub (Score Explainer & Simulator)",
          "tableHeaders": {
            "code": "Card",
            "action": "Example Question Score & Verifiable Workplace Evidence Note",
            "lift": "Gateway Status",
            "tag": "Theme",
            "due": "Score",
            "owner": "Next Action / Path"
          },
          "objectiveRowCode": "EVID",
          "objectiveRowText": "Annotated Example: High-Clarity Evidence Notes Recorded in Standalone GS Lean Maturity",
          "exampleRows": [
            {
              "code": "Q1 ★",
              "action": "Yes (5/5) — Clear business reason: Reduce turbine rotor assembly lead time from 18 to 12 days.",
              "note": "Binary Foundation Gate (1 or 5) • Communicated at monthly townhall and shift boards",
              "lift": "★ L1 Gate Passed",
              "tag": "Foundation",
              "due": "5 / 5",
              "owner": "Site Sponsor & LPM"
            },
            {
              "code": "Q10 ★",
              "action": "Emerging (2/5) — Pilot A3 experiment running in Rotor Cell 1, but not yet tracked across 70% of cells.",
              "note": "Honest Score 2 identifies why Level 1 is currently capped • Ready to promote in Navigator or Simulator",
              "lift": "★ L2 Gate Capped (<3)",
              "tag": "Tools & KPIs",
              "due": "2 / 5",
              "owner": "Load into Navigator / Hub"
            },
            {
              "code": "Q14 ★",
              "action": "Structured (3/5) — Fixed 08:15 AM daily huddles active in 6 of 8 shop-floor teams (75% coverage).",
              "note": "Verified on gemba walk with active blocker escalation log",
              "lift": "★ L3 Gate Passed",
              "tag": "Daily Mgmt & CI",
              "due": "3 / 5",
              "owner": "Shift Team Leaders"
            }
          ]
        }
      ],
      "referenceTables": [
        {
          "id": "REF-001",
          "kind": "scoring-matrix-1page",
          "navTitle": "All 28 Questions, 17 Gateways (★) & 1–5 Scoring Guide",
          "eyebrow": "Shared 16:9 One-Page Scoring & Criteria Matrix",
          "badge": "GS Lean Maturity / Navigator Toolkit / PM Maturity Hub",
          "title": "All 28 Questions, 17 Gateways (★) & 1–5 Scoring Guide",
          "subtitle": "Interactive 1-Page 28-Question & 1–5 Scoring Rubric Matrix with New Standard (2026) / Old Standard toggle, Full Verbatim / Executive Concise toggle, and native PowerPoint (.pptx), 4K Image (.png), and 1-Page PDF exports.",
          "filterAllLabel": "All Questions (28)",
          "filterFlaggedLabel": "★ Starred Gateways Only (17)",
          "columns": [
            "#",
            "Assessment Question",
            "Topic",
            "Level",
            "Gateway?"
          ],
          "rows": []
        }
      ]
    },
    {
      "id": "PLB-PMHUB",
      "code": "PLB-PMHUB",
      "title": "Lean@GS PM Maturity Hub Guide (3-Phase Standalone Suite)",
      "shortTitle": "Lean@GS PM Maturity Hub Guide",
      "eyebrow": "Siemens Energy • Lean@GS Playbook #3",
      "subtitle": "Guides for the standalone Lean@GS PM Maturity Hub web app—structured around its 3 Phases (Phase 1: Assess, Phase 2: Visualize, Phase 3: Plan) plus Utilities (CSV to JSON Fixer).",
      "goldenPrinciple": {
        "quote": "Use PM Maturity Hub to diagnose gateway score caps, visualise the Metro Journey & 4 Pillars, and simulate local action plans.",
        "explanation": "Lean@GS PM Maturity Hub is a standalone Programme Manager suite organized into Phase 1: Assess (Score Explainer), Phase 2: Visualize (Metro Journey & 4 Pillars), Phase 3: Plan (Strategy Builder & Simulator), and Utilities (CSV to JSON Fixer)."
      },
      "convergenceBanner": {
        "input1Title": "Phase 1 & Phase 2: Assess & Visualize (Stages 1–2)",
        "input1Desc": "Score the 28 questions, inspect Score Explainer, and view the Metro Journey & 4 Pillars.",
        "input2Title": "Phase 3 & Utilities: Plan & Convert (Stages 3–4)",
        "input2Desc": "Build local improvement plans in Strategy Builder, test sliders in Simulator, and repair legacy CSVs.",
        "combinedTitle": "Standalone Lean@GS PM Maturity Hub Suite",
        "combinedDesc": "Interactive Programme Manager suite hosted at the PM Maturity Hub corporate intranet address."
      },
      "filingRule": "Export converted JSON files or Strategy Builder slides to your local Programme Manager folder.",
      "processIds": [
        "PRC-003"
      ],
      "sopIds": [
        "SOP-005",
        "SOP-006"
      ],
      "toolIds": [
        "TOL-007",
        "TOL-003",
        "TOL-006",
        "TOL-011"
      ],
      "liveToolIds": [
        "LIVE-HUB",
        "LIVE-PORTAL",
        "LIVE-NAVIGATOR",
        "LIVE-STORYBOOK"
      ],
      "crossRef": {
        "kicker": "Related Playbook • 6-Stage Navigator Process",
        "title": "Ready to run a leadership workshop with Voice of the Customer and a 1-Page Charter?",
        "desc": "Switch to the Lean@GS Navigator Toolkit Playbook for the full 6-stage leadership process (Maturity Assessment → Analysis Report → VOC Input → Navigator Workshop → 1-Page Charter → Action Log).",
        "targetPlaybookId": "PLB-001",
        "primaryButtonLabel": "Switch to Lean@GS Navigator Toolkit Playbook →",
        "deepLinks": [
          {
            "label": "Stage 1–2 Assessment & Analysis →",
            "playbookId": "PLB-001",
            "view": "sop",
            "id": "SOP-001"
          },
          {
            "label": "Stage 3 Voice of the Customer (VOC) →",
            "playbookId": "PLB-001",
            "view": "sop",
            "id": "SOP-003"
          },
          {
            "label": "Stage 4–6 Workshop, Charter & Action Log →",
            "playbookId": "PLB-001",
            "view": "sop",
            "id": "SOP-004"
          },
          {
            "label": "1-Page Charter Example →",
            "playbookId": "PLB-001",
            "view": "template",
            "id": "TPL-001"
          }
        ]
      },
      "chooserLabel": "Which PM Maturity Hub phase or utility are you using today?",
      "rulesKey": {
        "title": "Before You Start: How Lean@GS PM Maturity Hub Is Organised",
        "subtitle": "3 Phases + Utilities ( plus the Maturity Model Storybook)",
        "items": [
          {
            "term": "📊 1. Phase 1 (Assess) & Phase 2 (Visualize)",
            "desc": "Score the 28 questions with Maturity Explainer, diagnose gateway caps in Score Explainer, and visualize progression on Metro Journey and The 4 Pillars."
          },
          {
            "term": "🎯 2. Phase 3: Plan (Strategy Builder & ↳ Simulator)",
            "desc": "Build a local maturity improvement plan in Strategy Builder and drag sliders in the Simulator to test how fixing specific gateways unlocks your score."
          },
          {
            "term": "🛠️ 3. Utilities: CSV to JSON Fixer",
            "desc": "Use the CSV to JSON Fixer utility to repair or convert legacy spreadsheet exports into valid assessment files."
          }
        ]
      },
      "journeyMap": {
        "formulaBanner": "1. Phase 1: Assess → 2. Phase 2: Visualize → 3. Phase 3: Plan → 4. Utilities (CSV to JSON Fixer)",
        "mapHeading": "The 4 Sections Inside Lean@GS PM Maturity Hub",
        "roleFilters": [
          {
            "id": "all",
            "label": "All Roles"
          },
          {
            "id": "ROL-001",
            "label": "Local Programme Manager (LPM)"
          },
          {
            "id": "ROL-003",
            "label": "Site Leadership Team"
          },
          {
            "id": "ROL-002",
            "label": "Lean Core Team (Optional Support)"
          }
        ],
        "briefingButtonLabel": "⏱ Overview of PM Maturity Hub (60-Sec Pitch)",
        "briefingTitle": "60-Second Overview: The 3 Phases + Utilities of Lean@GS PM Maturity Hub",
        "briefingEquation": "Phase 1: Assess (Score Explainer) → Phase 2: Visualize (Metro & 4 Pillars) → Phase 3: Plan (Strategy Builder & Simulator) → Utilities (CSV Fixer)",
        "briefingBullets": [
          "1. Phase 1 (Assess): Score the 28 questions using the Maturity Explainer flashcards and diagnose gateway score caps in Score Explainer.",
          "2. Phase 2 (Visualize): Visualize your site's Lean progression along the Metro Journey map and across The 4 Pillars (Live) and Pillars (Static).",
          "3. Phase 3 (Plan) & Utilities: Build a local maturity improvement plan in Strategy Builder, test gateway unlocks in Simulator, and repair legacy spreadsheet exports in CSV to JSON Fixer."
        ],
        "stages": [
          {
            "stageNumber": 1,
            "title": "PHASE 1: ASSESS (Maturity Assessment, Maturity Explainer, Score Explainer)",
            "summary": "Score the 28 questions using the Maturity Explainer flashcards and diagnose gateway score caps in Score Explainer.",
            "whoIsInvolved": "Lead: Local Programme Manager (LPM) • Optional Support: Lean Core Team",
            "leadRoleId": "ROL-001",
            "supportRoleId": "ROL-002",
            "involvedRoleIds": [
              "ROL-001",
              "ROL-002"
            ],
            "toolId": "TOL-007",
            "toolLabel": "PM Maturity Hub → Phase 1: Assess",
            "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/",
            "secondaryLiveUrl": "https://share.gemini.google/UjLQiIQXFbgc",
            "secondaryLiveLabel": "Maturity Model Storybook ↗",
            "outputArtifact": "Completed 28-question assessment & Score Explainer gateway cap diagnosis",
            "targetView": {
              "type": "sop",
              "id": "SOP-005",
              "cta": "Open Phase 1 Assess Guide →"
            }
          },
          {
            "stageNumber": 2,
            "title": "PHASE 2: VISUALIZE (Metro Journey, The 4 Pillars Live & Static)",
            "summary": "Visualize your site's Lean progression along the Metro Journey map and across The 4 Pillars (Live) and Pillars (Static).",
            "whoIsInvolved": "Lead: Local Programme Manager (LPM) with Site Leadership Team • Optional Support: Lean Core Team",
            "leadRoleId": "ROL-001",
            "supportRoleId": "ROL-003",
            "involvedRoleIds": [
              "ROL-001",
              "ROL-003",
              "ROL-002"
            ],
            "toolId": "TOL-003",
            "toolLabel": "PM Maturity Hub → Phase 2: Visualize",
            "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/",
            "outputArtifact": "Visual Metro Journey map & 4-Pillar capability snapshot",
            "targetView": {
              "type": "sop",
              "id": "SOP-005",
              "cta": "Open Phase 2 Visualize Guide →"
            }
          },
          {
            "stageNumber": 3,
            "title": "PHASE 3: PLAN (Strategy Builder & ↳ Simulator)",
            "summary": "Build a local maturity improvement plan in Strategy Builder and test how fixing specific gateways unlocks your score in the Simulator.",
            "whoIsInvolved": "Lead: Local Programme Manager (LPM) • Optional Support: Lean Core Team",
            "leadRoleId": "ROL-001",
            "supportRoleId": "ROL-002",
            "involvedRoleIds": [
              "ROL-001",
              "ROL-002"
            ],
            "toolId": "TOL-006",
            "toolLabel": "PM Maturity Hub → Phase 3: Plan",
            "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/",
            "outputArtifact": "Local Strategy Builder improvement plan & simulated score unlock",
            "targetView": {
              "type": "sop",
              "id": "SOP-006",
              "cta": "Open Phase 3 Plan Guide →"
            }
          },
          {
            "stageNumber": 4,
            "title": "UTILITIES (CSV to JSON Fixer)",
            "summary": "Repair or convert legacy spreadsheet assessment exports into valid assessment files using the CSV to JSON Fixer.",
            "whoIsInvolved": "Lead: Local Programme Manager (LPM) • Optional Support: Lean Core Team",
            "leadRoleId": "ROL-001",
            "supportRoleId": "ROL-002",
            "involvedRoleIds": [
              "ROL-001",
              "ROL-002"
            ],
            "toolId": "TOL-011",
            "toolLabel": "PM Maturity Hub → Utilities: CSV to JSON Fixer",
            "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/",
            "outputArtifact": "Repaired assessment file ready to load into any Hub module",
            "targetView": {
              "type": "sop",
              "id": "SOP-006",
              "cta": "Open CSV to JSON Fixer Guide →"
            }
          }
        ]
      },
      "decisionTools": [
        {
          "id": "DEC-003",
          "kind": "vital-few-guide",
          "navTitle": "Focus on the Vital Few: Aligning Business Priorities with Lean Capability",
          "eyebrow": "STRATEGY BUILDER COACHING • BUSINESS PRIORITY FIRST",
          "badge": "Target: 2 to 3 Business-Led Actions",
          "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/",
          "liveLabel": "Launch PM Maturity Hub (Simulator) ↗",
          "title": "Focusing on the 'Vital Few' (2 to 3 Key Actions)",
          "subtitle": "Start with the operational business problems your leaders need to solve—then select the 2 or 3 Lean maturity capabilities in Strategy Builder & Simulator to support those business results.",
          "rules": [
            {
              "badge": "STEP 1 • BUSINESS PRIORITY FIRST",
              "title": "Step 1: Define the Business Priority (Lead Time, Quality, Throughput, Cost, Overheads, Inventory, Complexity)",
              "desc": "Identify the specific operational challenge hurting project or plant performance right now—before looking at maturity scores.",
              "whereInApp": "Leadership Alignment & VOC: Agree on the top 1–2 operational pain points across Lead Time, Quality, Throughput, Cost, Overheads, Inventory, or Complexity."
            },
            {
              "badge": "STEP 2 • SUPPORTING CAPABILITY",
              "title": "Step 2: Identify the Supporting Maturity Capability in PM Maturity Hub",
              "desc": "Use Score Explainer and Strategy Builder to see which foundational Lean capabilities (especially Starred Gateways ★ below Level 3) must be developed to solve that business problem.",
              "whereInApp": "PM Maturity Hub → Strategy Builder & Simulator: Load your assessment file and inspect red/amber Starred Gateway (★) capabilities."
            },
            {
              "badge": "STEP 3 • FOCUSED CHARTER ACTIONS",
              "title": "Step 3: Promote 2 to 3 Focused Actions into Your 1-Page Strategy Charter",
              "desc": "Combine the Business Priority + Enabling Capability into 2 or 3 focused initiatives in the Strategy Charter table, assign one named owner, and export your 1-Page PDF.",
              "whereInApp": "PM Maturity Hub → Strategy Builder: Select 2–3 supporting capabilities, customize the action text around your business target, and click 'Export 1-Page PDF'."
            }
          ],
          "comparisonExample": {
            "heading": "What Good Looks Like: 1 Business-Led Strategy Action vs. 1 Score-Chasing Wishlist Item",
            "good": {
              "badge": "✅ Good Business-Led Action (Vital Few)",
              "gatewayRef": "Business Priority: Quality + Q16 ★ & Q22 ★",
              "title": "Business Outcome Supported by Enabling Lean Capability",
              "statement": "Reduce repeat commissioning rework by 35% by embedding structured root-cause reflection after every major defect (Q16 ★) and blameless issue escalation (Q22 ★) by 30 Nov.",
              "whyItWorks": "Starts with a high-priority business problem (35% reduction in repeat rework) and builds the exact Lean capability (Q16 ★ & Q22 ★) required to sustain the improvement."
            },
            "bad": {
              "badge": "❌ Score-Chasing Wishlist Item (Avoid)",
              "warningRef": "Chasing Maturity Points Without a Business Target",
              "title": "Unfocused Maturity-Score Wishlist",
              "statement": "Select 10 questions in the Simulator to push our simulated maturity score from 1.9 to 3.2 by next quarter.",
              "whyItFails": "Focuses on gaming the maturity number rather than solving an operational Lead Time, Quality, Throughput, or Cost problem, overwhelming the team with 10 simultaneous actions."
            }
          },
          "rulesHeading": "The 3-Step Alignment Logic: Business Priority First → Supported by Capability → Focused Action",
          "matrixHeading": "Practical 'Business Priority ↔ Supporting Maturity Capability' Reference Matrix",
          "matrixSubtitle": "Use this 7-priority reference table to connect concrete operational business needs with the enabling Lean maturity capabilities (Questions & ★ Gateways) required to deliver and sustain those results:",
          "priorityMatrix": [
            {
              "priority": "1. Lead Time",
              "painPoint": "Long end-to-end customer lead times & waiting between departments",
              "supportingCapabilities": "Q12 ★ (Flow Metrics), Q14 ★ (Daily Huddles), Q19 (Departmental Handoffs), Q26 ★ (Cross-Functional Flow)",
              "exampleAction": "Cut end-to-end order lead time by 20% by mapping cross-department handoffs (Q19) and resolving blockers in daily huddles (Q14 ★)."
            },
            {
              "priority": "2. Quality",
              "painPoint": "Repeat defects, rework loops, or escapes to the customer",
              "supportingCapabilities": "Q14 ★ (Issue Escalation), Q16 ★ (Structured Reflection), Q17 (Lessons Learned), Q22 ★ (Blameless Reporting)",
              "exampleAction": "Reduce repeat assembly rework by 35% by embedding structured root-cause reflection after every major defect (Q16 ★)."
            },
            {
              "priority": "3. Throughput",
              "painPoint": "Bottlenecks, uneven output, or missed delivery milestones",
              "supportingCapabilities": "Q10 ★ (Structured Pilot Experiments), Q11 (Standard Work), Q12 ★ (Throughput & Yield Tracking)",
              "exampleAction": "Increase bottleneck cell throughput by 15% by running structured pilot experiments (Q10 ★) and stabilising standard work (Q11)."
            },
            {
              "priority": "4. Cost",
              "painPoint": "High direct job costs, scrap, or uncoordinated firefighting",
              "supportingCapabilities": "Q4 ★ & Q5 ★ (Waste Elimination & Flow), Q13 (Preventing Local Optimisation), Q15 ★ (Frontline Waste Ideas)",
              "exampleAction": "Reduce unit production cost by 8% by capturing and implementing weekly frontline waste-elimination ideas tied to team metrics (Q15 ★)."
            },
            {
              "priority": "5. Overheads",
              "painPoint": "Excessive indirect admin, manual chasing, and status meetings",
              "supportingCapabilities": "Q7 ★ (Clear Role Ownership), Q8 ★ (Strategy & Capacity Alignment), Q14 ★ (Short Fixed Tiered Huddles)",
              "exampleAction": "Cut indirect progress-chasing overhead by replacing ad-hoc status meetings with a 15-minute visual daily huddle and clear role ownership (Q7 ★, Q14 ★)."
            },
            {
              "priority": "6. Inventory",
              "painPoint": "Excess work-in-progress buffers, parts shortages, or batch-and-queue habits",
              "supportingCapabilities": "Q5 ★ (Flow vs. Batching), Q12 ★ (Work-in-Progress & Lead-Time Metrics), Q18 ★ & Q27 ★ (Supplier Value Chain Alignment)",
              "exampleAction": "Lower work-in-progress (WIP) inventory by 25% by replacing batch handoffs with pull flow and shared supplier standards (Q5 ★, Q18 ★)."
            },
            {
              "priority": "7. Complexity",
              "painPoint": "Over-complicated processes, custom workarounds, and variant chaos",
              "supportingCapabilities": "Q11 (Visual Standard Work), Q19 (SIPOC Interface Agreements), Q23 & Q25 ★ (Scaling Proven Standards)",
              "exampleAction": "Simplify process handoffs across 3 shifts by locking in one visual standard work routine and scaling the pilot standard site-wide (Q11, Q25 ★)."
            }
          ]
        },
        {
          "id": "DEC-MAT-001",
          "kind": "scoring-matrix-1page",
          "navTitle": "1-Page 28-Question & 1–5 Scoring Rubric",
          "eyebrow": "Shared 16:9 One-Page Scoring & Criteria Matrix",
          "badge": "PM Maturity Hub / GS Lean Maturity / Navigator Toolkit",
          "title": "All 28 Questions, 17 Gateways (★) & 1–5 Scoring Guide",
          "subtitle": "Interactive 1-Page 28-Question & 1–5 Scoring Rubric Matrix with New Standard (2026) / Old Standard toggle, Full Verbatim / Executive Concise toggle, and native PowerPoint (.pptx), 4K Image (.png), and 1-Page PDF exports."
        }
      ],
      "templates": [
        {
          "id": "TPL-002",
          "kind": "action-charter",
          "navTitle": "PM Maturity Hub Strategy Builder — Annotated Example & Field Guide",
          "eyebrow": "PHASE 3 STRATEGY BUILDER REFERENCE • ANNOTATED EXAMPLE & FIELD GUIDE",
          "badge": "PM Maturity Hub → Strategy Builder",
          "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/",
          "liveLabel": "Launch PM Maturity Hub (Strategy Builder) ↗",
          "title": "PM Maturity Hub Strategy Builder — Annotated Example & Field Guide",
          "subtitle": "Annotated reference showing a completed 1-Page Strategy Charter exported from PM Maturity Hub (Strategy Builder & Simulator), pairing Business Priorities with supporting Lean maturity capabilities (★).",
          "appLocation": "PM Maturity Hub → Phase 3: Plan → Strategy Builder (and ↳ Simulator)",
          "fieldGuide": [
            {
              "section": "1. Current vs. Target Score Banner",
              "appField": "Strategy Builder → Top Score Summary & Auto-Select",
              "guidance": "Load your assessment JSON and use Auto-Select (or manual card selection) to target the starred Gateways currently capping your level."
            },
            {
              "section": "2. Simulated Score Impact",
              "appField": "Phase 3: Plan → ↳ Simulator",
              "guidance": "Verify the projected score lift in Simulator by dragging your 2–3 targeted Gateway sliders to Level 3."
            },
            {
              "section": "3. Exported Strategy Summary",
              "appField": "Strategy Builder → Save Plan / Export PPTX",
              "guidance": "Save your plan as a .json file or click Export PPTX to generate a clean briefing slide deck."
            }
          ],
          "metaFields": [
            {
              "label": "Site / Area",
              "value": "Example: Grid Transformers Assembly"
            },
            {
              "label": "Date",
              "value": "2026-Q1 Simulation"
            },
            {
              "label": "Local Programme Manager",
              "value": "Local Programme Manager (LPM)"
            },
            {
              "label": "Simulated Score Lift",
              "value": "1.6 → 2.6 (Unlocks Level 2)"
            }
          ],
          "leftBoxTitle": "1. 4-Pillar Capability Highlights (Metro Journey & 4 Pillars)",
          "leftBoxBullets": [
            "Foundation & Strategy: Level 0 Gateways unlocked; Q7 & Q8 active.",
            "Tools & KPIs: Q10 (Pilot Experiments) identified as primary Level 1 cap.",
            "Daily Management: Q12 & Q14 targeted for next wave in Simulator."
          ],
          "rightBoxTitle": "2. Simulated Score Impact (PM Maturity Hub Simulator)",
          "rightBoxPrimary": "Simulated Score: 1.6 → 2.6 (Unlocks Level 2)",
          "rightBoxSecondaryPrefix": "Simulated Gateway Actions",
          "rightBoxSecondaryValue": "3 Starred Gateways Tested at Level 3",
          "tableHeaders": {
            "focus": "Focused Strategy Action ('Vital Few' — Max 3)",
            "owner": "Single Named Owner",
            "targetDate": "Target Milestone",
            "kpi": "Measurable Business Outcome Target",
            "lift": "Supporting Capability (★)",
            "tag": "Business Priority"
          },
          "objectiveRowCode": "SIM 1",
          "objectiveRowText": "Annotated Example: 3 Gateway Unlocks Tested in PM Maturity Hub Simulator & Strategy Builder",
          "exampleRows": [
            {
              "focus": "1. Cut indirect progress-chasing overhead by replacing ad-hoc status calls with a fixed 15-minute visual daily huddle and clear role ownership.",
              "owner": "A. Lindqvist (Project Director)",
              "targetDate": "Day 30 (15 Nov)",
              "kpi": "Cut weekly status-meeting overhead hours by 30% & resolve blockers within 24h",
              "lift": "Q7 ★ Role Ownership & Q14 ★ Daily Huddles",
              "tag": "Overheads"
            },
            {
              "focus": "2. Cut engineering-to-procurement handoff lead time by locking in standard interface agreements and visual flow metrics.",
              "owner": "R. Kovács (Lead Systems Engineer)",
              "targetDate": "Day 60 (15 Dec)",
              "kpi": "Cut engineering release lead time by 20% across all work packages",
              "lift": "Q12 ★ Flow Metrics & Q19 Handoffs",
              "tag": "Lead Time"
            },
            {
              "focus": "3. Reduce repeat site commissioning defects by running structured root-cause reflection after every major punch-list escape.",
              "owner": "T. Nguyen (Quality Manager)",
              "targetDate": "Day 90 (15 Jan)",
              "kpi": "Reduce repeat commissioning rework defects by 35%",
              "lift": "Q16 ★ Structured Reflection & Q17",
              "tag": "Quality"
            }
          ]
        }
      ],
      "referenceTables": [
        {
          "id": "REF-001",
          "kind": "scoring-matrix-1page",
          "navTitle": "All 28 Questions, 17 Gateways (★) & 1–5 Scoring Guide",
          "eyebrow": "Shared 16:9 One-Page Scoring & Criteria Matrix",
          "badge": "PM Maturity Hub / Navigator Toolkit / GS Lean Maturity",
          "title": "All 28 Questions, 17 Gateways (★) & 1–5 Scoring Guide",
          "subtitle": "Interactive 1-Page 28-Question & 1–5 Scoring Rubric Matrix with New Standard (2026) / Old Standard toggle, Full Verbatim / Executive Concise toggle, and native PowerPoint (.pptx), 4K Image (.png), and 1-Page PDF exports.",
          "filterAllLabel": "All Questions (28)",
          "filterFlaggedLabel": "★ Starred Gateways Only (17)",
          "columns": [
            "#",
            "Assessment Question",
            "Topic",
            "Level",
            "Gateway?"
          ],
          "rows": []
        },
        {
          "id": "REF-002",
          "navTitle": "PM Maturity Hub Navigation & Module Guide",
          "eyebrow": "Standalone Application Reference",
          "badge": "PM Maturity Hub",
          "title": "PM Maturity Hub Sidebar Modules & When to Use Each",
          "subtitle": "Quick reference for all 4 sidebar groups inside the standalone PM Maturity Hub application.",
          "filterAllLabel": "All Modules (9)",
          "filterFlaggedLabel": "★ Core Interactive Views (5)",
          "columns": [
            "Phase",
            "Sidebar Tab Name",
            "Primary Purpose",
            "Input Needed",
            "Core View?"
          ],
          "rows": [
            {
              "code": "P1-A",
              "col1": "Maturity Assessment",
              "col2": "Score the 28 maturity questions inside PM Maturity Hub",
              "col3": "Site evidence",
              "flagged": true,
              "flagLabel": "★ Core View"
            },
            {
              "code": "P1-B",
              "col1": "Maturity Explainer",
              "col2": "Read plain-English descriptions of Maturity Levels 0 to 4",
              "col3": "None",
              "flagged": false,
              "flagLabel": "Reference"
            },
            {
              "code": "P1-C",
              "col1": "Score Explainer",
              "col2": "See how the 17 starred Gateways cap the overall score",
              "col3": "Assessment file",
              "flagged": true,
              "flagLabel": "★ Core View"
            },
            {
              "code": "P2-A",
              "col1": "Metro Journey",
              "col2": "Visualise the 28 questions as stations on a Metro Journey map",
              "col3": "Assessment file",
              "flagged": true,
              "flagLabel": "★ Core View"
            },
            {
              "code": "P2-B",
              "col1": "The 4 Pillars (Live)",
              "col2": "Interactive live breakdown across the 4 Lean pillars",
              "col3": "Assessment file",
              "flagged": true,
              "flagLabel": "★ Core View"
            },
            {
              "code": "P2-C",
              "col1": "Pillars (Static)",
              "col2": "Static reference poster of the 4 Lean pillars",
              "col3": "None",
              "flagged": false,
              "flagLabel": "Reference"
            },
            {
              "code": "P3-A",
              "col1": "Strategy Builder",
              "col2": "Combine capability gaps with priorities and export a summary",
              "col3": "Assessment file",
              "flagged": true,
              "flagLabel": "★ Core View"
            },
            {
              "code": "P3-B",
              "col1": "Simulator",
              "col2": "Drag score sliders to test what-if Gateway unlocks",
              "col3": "Assessment file",
              "flagged": false,
              "flagLabel": "Utility"
            },
            {
              "code": "UTIL",
              "col1": "CSV to JSON Fixer",
              "col2": "Convert legacy CSV exports into clean JSON assessment files",
              "col3": "Legacy .csv file",
              "flagged": false,
              "flagLabel": "Utility"
            }
          ]
        }
      ]
    },
    {
      "id": "PLB-DEMO",
      "code": "PLB-DEMO",
      "title": "Demo Example: The Office Brew Run (How This Guide System Works)",
      "shortTitle": "Demo: The Office Brew Run",
      "eyebrow": "Siemens Energy • Neutral Demo Sandbox Playbook",
      "subtitle": "A neutral, everyday example showing how our 6-stage Journey Map, Step-by-Step Guides, Decision Funnel, and 1-Page Charter work—so you can review the guide design without getting distracted by process debates.",
      "goldenPrinciple": {
        "quote": "The goal isn't to operate the kettle. The goal is to wake up the team without poisoning anyone.",
        "explanation": "First check what the kitchen can actually make (Stages 1 & 2) and ask the team what they want to drink (Stage 3). Then match orders to your 4-mug tray limit (Stage 4), lock the 1-Page Tray Charter (Stage 5), and deliver hot drinks safely (Stage 6)."
      },
      "convergenceBanner": {
        "input1Title": "Input 1: Kitchen Capability (Stages 1 & 2)",
        "input1Desc": "What can the kitchen make right now? (Clean mugs, kettle water, fresh milk)",
        "input2Title": "Input 2: Team Thirst / VOC (Stage 3)",
        "input2Desc": "What do colleagues actually want before the 09:00 AM standup?",
        "combinedTitle": "Combined in Stage 4 (Brew Workshop)",
        "combinedDesc": "Matching kitchen supplies [1–2] + drink orders [3] into a 1-Page Tray Charter (Stage 5) & safe delivery (Stage 6)."
      },
      "filingRule": "Pin the 1-Page Tea & Coffee Order Sheet next to the kettle and wipe the counter before leaving.",
      "processIds": [
        "PRC-004"
      ],
      "sopIds": [
        "SOP-007",
        "SOP-008"
      ],
      "toolIds": [
        "TOL-008"
      ],
      "liveToolIds": [],
      "chooserLabel": "Which part of the morning brew round are you doing right now?",
      "rulesKey": {
        "title": "Before You Boil: 3 Golden Rules for the Office Brew Run",
        "subtitle": "Why this everyday example mirrors our 6-stage Navigator structure",
        "items": [
          {
            "term": "🫖 1. Check the Kitchen Before Taking Orders",
            "desc": "Never promise four milky Yorkshire Teas if the fridge milk carton is empty. Check your kitchen baseline (Stage 1) and supply gaps (Stage 2) first."
          },
          {
            "term": "⏱ 2. The 3-Minute Steep Rule (No Dishwater Tea)",
            "desc": "Leave black teabags in boiling water for 3 full minutes before adding milk so the tea brews at 98°C."
          },
          {
            "term": "☕ 3. Focus on 2–3 Priority Drinks per Tray (Max 4 Ceiling)",
            "desc": "Never carry 6 mugs balanced on top of each other. Pick 2 to 3 priority orders (maximum 4 mugs per tray) with a 15mm safety rim."
          }
        ]
      },
      "journeyMap": {
        "formulaBanner": "1. Kitchen Check → 2. Supply Gap Analysis → 3. Voice of the Customer (VOC) → 4. Brew Workshop → 5. 1-Page Tray Charter → 6. Delivery Plan",
        "mapHeading": "The 6-Stage End-to-End Office Brew Journey (Neutral Demo Sandbox)",
        "roleFilters": [
          {
            "id": "all",
            "label": "All Roles"
          },
          {
            "id": "ROL-D01",
            "label": "Designated Brew Maker"
          },
          {
            "id": "ROL-D02",
            "label": "Kitchen Buddy"
          },
          {
            "id": "ROL-D03",
            "label": "Thirsty Desk Team"
          }
        ],
        "briefingButtonLabel": "⏱ Why Include an 'Office Brew' Demo? (30-Sec Pitch)",
        "briefingTitle": "Why We Include a Neutral 'Office Brew Run' Demo Playbook",
        "briefingEquation": "Kitchen Check (Stages 1–2) + Team Drink Orders (Stage 3) = Tray Selection (Stage 4) → 1-Page Order Charter (Stage 5) → Hot Drink Delivery (Stage 6)",
        "briefingBullets": [
          "1. When reviewing a new documentation system, colleagues often debate the business content instead of testing how the guide works.",
          "2. Everybody knows how to make a round of tea and coffee, so this playbook lets you test the 6-stage Journey Map, annotated step visuals, and 3-step Prioritiser Funnel in 60 seconds.",
          "3. Open the Gear Icon (top right) to see how you can edit steps, paste screenshots, or build your own playbook with zero coding."
        ],
        "stages": [
          {
            "stageNumber": 1,
            "title": "Kitchen Check (Assessment)",
            "summary": "Check the office kitchen baseline before promising drinks. Inspect the kettle water level, count clean mugs, and check fresh milk in the fridge.",
            "whoIsInvolved": "Designated Brew Maker + Kitchen Buddy",
            "leadRoleId": "ROL-D01",
            "supportRoleId": "ROL-D02",
            "toolId": "TOL-008",
            "toolLabel": "Office Kitchen Kettle & Fridge",
            "outputArtifact": "Clear picture of clean mugs, water level & fresh milk",
            "targetView": {
              "type": "sop",
              "id": "SOP-007",
              "cta": "Open Stage 1 Kitchen Check Guide →"
            }
          },
          {
            "stageNumber": 2,
            "title": "Supply Gap Analysis",
            "summary": "Spot critical foundation blockers before taking complex orders—such as an empty kettle, missing teabags, or expired milk that caps your brew round.",
            "whoIsInvolved": "Designated Brew Maker",
            "leadRoleId": "ROL-D01",
            "supportRoleId": "ROL-D02",
            "toolId": "TOL-008",
            "toolLabel": "Kitchen Supply Check",
            "outputArtifact": "Shortlist of 2–3 kitchen supply fixes needed first",
            "targetView": {
              "type": "sop",
              "id": "SOP-007",
              "cta": "Open Stage 2 Gap Analysis Guide →"
            }
          },
          {
            "stageNumber": 3,
            "title": "Voice of the Customer (VOC)",
            "summary": "Ask thirsty colleagues at the desk bank what they actually need right now—and who has an urgent 09:00 AM meeting.",
            "whoIsInvolved": "Designated Brew Maker + Thirsty Team",
            "leadRoleId": "ROL-D01",
            "supportRoleId": "ROL-D03",
            "toolId": "TOL-008",
            "toolLabel": "Sticky Note Order Pad",
            "outputArtifact": "Captured team drink requests & urgent meeting priorities",
            "targetView": {
              "type": "sop",
              "id": "SOP-007",
              "cta": "Open Stage 3 Team Orders Guide →"
            }
          },
          {
            "stageNumber": 4,
            "title": "Brew Workshop (Match Tray)",
            "summary": "Bring kitchen supplies [Stages 1–2] and team drink requests [Stage 3] together to pick 2 to 3 priority drinks that fit safely on the 4-mug tray.",
            "whoIsInvolved": "Designated Brew Maker + Kitchen Buddy",
            "leadRoleId": "ROL-D01",
            "supportRoleId": "ROL-D02",
            "toolId": "TOL-008",
            "toolLabel": "4-Mug Non-Slip Tray",
            "outputArtifact": "Agreed tray selection matching supply limits to team orders",
            "targetView": {
              "type": "sop",
              "id": "SOP-008",
              "cta": "Open Stage 4 Brew Workshop Guide →"
            }
          },
          {
            "stageNumber": 5,
            "title": "1-Page Tray Charter",
            "summary": "Lock the final 1-Page Tea & Coffee Round Order Sheet with mug colours, steep times, and milk amounts so nobody gets the wrong mug.",
            "whoIsInvolved": "Designated Brew Maker + Thirsty Team",
            "leadRoleId": "ROL-D01",
            "supportRoleId": "ROL-D03",
            "toolId": "TOL-008",
            "toolLabel": "1-Page Order Sheet",
            "outputArtifact": "Locked 1-Page Tea & Coffee Round Order Sheet",
            "targetView": {
              "type": "template",
              "id": "TPL-003",
              "cta": "Open Stage 5 Tray Charter →"
            }
          },
          {
            "stageNumber": 6,
            "title": "Delivery Action Plan",
            "summary": "Steep tea for 3 full minutes, pour milk to match the colour chart, and deliver mugs to desks with a door-holding buddy.",
            "whoIsInvolved": "Designated Brew Maker + Kitchen Buddy",
            "leadRoleId": "ROL-D01",
            "supportRoleId": "ROL-D02",
            "toolId": "TOL-008",
            "toolLabel": "4-Mug Tray & Colour Chart",
            "outputArtifact": "Delivered hot drinks & wiped kitchen counter",
            "targetView": {
              "type": "sop",
              "id": "SOP-008",
              "cta": "Open Stage 6 Delivery Guide →"
            }
          }
        ]
      },
      "decisionTools": [
        {
          "id": "DEC-004",
          "kind": "vital-few-guide",
          "navTitle": "How to Narrow Tray Orders to the 'Vital Few' (2–3 Drinks)",
          "eyebrow": "Preparing for Stage 4 (Brew Workshop) • Combining Kitchen Check + Team Orders",
          "badge": "Coaching Guide • 2 to 3 Tray Items",
          "title": "How to Narrow Your Tray Orders to the 'Vital Few' (2 to 3 Drinks)",
          "subtitle": "How to combine your Kitchen Supply Check (Stages 1–2) with Team Drink Requests (Stage 3) so you pick 2 to 3 safe, high-priority drinks for your 1-Page Tray Charter (Stage 5).",
          "rules": [
            {
              "badge": "Rule 1 • From Stages 1 & 2 (Kitchen Gateways)",
              "title": "Rule 1 — Spot Kitchen Gateways (★) Holding Back the Round",
              "desc": "You cannot pour hot tea from an empty kettle or serve milky Builders Tea without fresh milk. Fix critical kitchen supply blockers (kettle water, clean mugs, fresh milk) first.",
              "whereInApp": "Kitchen Counter → Kettle Water Gauge & Fridge Milk Shelf"
            },
            {
              "badge": "Rule 2 • From Stage 3 (Team Drink VOC)",
              "title": "Rule 2 — Match Against Urgent Team Needs (09:00 AM Standup)",
              "desc": "Prioritise colleagues hosting the 09:00 AM standup who need a fast caffeine boost right now over non-urgent afternoon treat requests.",
              "whereInApp": "Sticky Note Order Pad → Urgent 09:00 AM Standup Orders"
            },
            {
              "badge": "Rule 3 • For Stages 4 & 5 (4-Mug Tray Limit)",
              "title": "Rule 3 — Pick 2 to 3 Realistic Drinks per Tray (Effort vs. Impact)",
              "desc": "Select 2 to 3 standard hot drinks (3-minute steep) that fit safely on the 4-mug non-slip tray with a 15mm safety rim—and defer 15-minute iced blender specials to lunchtime.",
              "whereInApp": "4-Mug Non-Slip Tray (Maximum 4 Mugs per Trip)"
            }
          ],
          "comparisonExample": {
            "heading": "What Good Looks Like: 1 Focused Tray Action vs. 1 Unrealistic Barista Wishlist",
            "good": {
              "badge": "✓ GOOD FOCUSED TRAY ORDER (SAFE & ON TIME)",
              "gatewayRef": "Kettle Boiled (★ Gateway) + 2x Builders Tea & 1x Black Americano",
              "title": "Boil 1.5L kettle and deliver 3 priority standup mugs on the non-slip tray",
              "statement": "Boil 1.5L water by 08:50 AM and deliver 2x 3-minute steeped Builders Teas + 1x Black Americano with a 15mm safety rim by 08:55 AM.",
              "whyItWorks": "Unlocks the boiling-water Gateway first, stays safely inside the 4-mug tray limit, and wakes up the 09:00 AM standup hosts on time."
            },
            "bad": {
              "badge": "✕ UNREALISTIC BARISTA WISHLIST (CAUSES SPILLS & DELAYS)",
              "warningRef": "Overloaded Tray • 15-Minute Prep Delay",
              "title": "Carry 7 stacked mugs plus a hand-whipped Iced Matcha Oat Frappe",
              "statement": "Promise 7 different custom drinks in one trip without checking if the kettle has water or if there are clean mugs.",
              "whyItFails": "Exceeds the 4-mug tray limit, causes hallway spills, and delays the 09:00 AM standup."
            }
          }
        }
      ],
      "templates": [
        {
          "id": "TPL-003",
          "kind": "action-charter",
          "navTitle": "1-Page Tea & Coffee Round Order Sheet — Annotated Example",
          "eyebrow": "STAGE 5 CHARTER REFERENCE • ANNOTATED EXAMPLE & FIELD GUIDE",
          "badge": "Neutral Demo Reference • 1-Page Tray Charter",
          "title": "1-Page Tea & Coffee Round Order Sheet — Annotated Example",
          "subtitle": "Annotated example showing how Stage 5 locks the 1-Page Tray Charter (2 to 3 priority orders) and Stage 6 assigns delivery owners and brew timing.",
          "appLocation": "Kitchen Wall Clip Board → 1-Page Tea & Coffee Order Sheet",
          "fieldGuide": [
            {
              "section": "1. Team Drink Needs (VOC)",
              "appField": "Order Sheet Box 1 → Urgent Standup Priorities",
              "guidance": "List the top 2–3 morning drink needs gathered from the desk bank in Stage 3."
            },
            {
              "section": "2. Kitchen Baseline & Tray Capacity",
              "appField": "Order Sheet Box 2 → Kettle & Tray Status",
              "guidance": "Confirm kettle water and clean mugs are ready and keep total mugs within the 4-mug non-slip tray limit."
            },
            {
              "section": "3. Agreed Tray Orders",
              "appField": "Order Sheet Table → Mug, Steep Rule & Owner",
              "guidance": "Write each drink order with exact steep time, milk shade, delivery time, and named buddy."
            }
          ],
          "metaFields": [
            {
              "label": "Desk Bank / Floor Zone",
              "value": "Floor 2 — North Engineering Bay"
            },
            {
              "label": "Brew Run Time",
              "value": "08:50 AM (Before 09:00 AM Standup)"
            },
            {
              "label": "Designated Brew Maker",
              "value": "@BrewMaker"
            },
            {
              "label": "Round Sponsor (Biscuits)",
              "value": "@SarahJenkins"
            }
          ],
          "leftBoxTitle": "1. Stage 3 Team Drink Needs (Problems to Solve)",
          "leftBoxBullets": [
            "Wake up the 09:00 AM standup hosts with proper 3-minute steeped Builders Tea.",
            "Deliver a strong Black Americano to the Lead Engineer before the project call.",
            "Keep the tray to a maximum of 4 mugs with a 15mm safety rim so nothing spills in the hallway."
          ],
          "rightBoxTitle": "2. Kitchen Baseline & Gateway Supply Status",
          "rightBoxPrimary": "Tray Capacity: Target 2–3 Priority Items (Max 4 Mugs per Tray)",
          "rightBoxSecondaryPrefix": "Example Tray Items",
          "rightBoxSecondaryValue": "3 Priority Orders (Kettle Gateway + 3 Standup Mugs)",
          "tableHeaders": {
            "code": "#",
            "action": "Example Kitchen Fix / Drink Order (Target: 2–3 Key Items)",
            "lift": "Team Impact",
            "tag": "Drink Need (VOC)",
            "due": "Deliver By",
            "owner": "Brew Owner"
          },
          "objectiveRowCode": "GATEWAY",
          "objectiveRowText": "Annotated Example: Morning Tray Orders (2 to 3 Priority Drinks Without Spilling)",
          "exampleRows": [
            {
              "code": "MUG-1",
              "action": "Boil 1.5L fresh water in kitchen kettle from cold to 100°C by 08:50 AM",
              "note": "Stage 1 ★ Kitchen Gateway • Unlocks all hot drinks",
              "lift": "Unlocks Boiling Water (100°C)",
              "tag": "09:00 AM Standup",
              "due": "08:50 AM",
              "owner": "@BrewMaker"
            },
            {
              "code": "MUG-2",
              "action": "Deliver 2 mugs of 3-minute steeped Builders Tea (dash of fresh milk) to Sarah & Dave by 08:55 AM",
              "note": "3 full minutes steep before milk • 15mm safety rim",
              "lift": "Wakes Up 2 Standup Hosts",
              "tag": "Caffeine Boost",
              "due": "08:55 AM",
              "owner": "@BrewMaker"
            },
            {
              "code": "MUG-3",
              "action": "Deliver 1 mug of hot Black Americano (94°C water, zero milk) to Lead Engineer desk by 08:55 AM",
              "note": "Wait 30s post-boil so grounds do not burn",
              "lift": "Fixes Lead Engineer Focus",
              "tag": "Fast 3-Min Pour",
              "due": "08:55 AM",
              "owner": "@KitchenBuddy"
            }
          ]
        }
      ],
      "referenceTables": [
        {
          "id": "REF-003",
          "navTitle": "Standard Office Brew Strength & Steep Time Chart",
          "eyebrow": "Kitchen Wall Reference",
          "badge": "Office Brew Standard",
          "title": "Standard Office Tea & Coffee Steep Time & Milk Shade Guide",
          "subtitle": "Keep this reference table by the kettle so nobody ever serves dishwater tea or scalded instant coffee.",
          "filterAllLabel": "All Drink Standards (6)",
          "filterFlaggedLabel": "★ Golden Brew Rules Only (3)",
          "columns": [
            "Code",
            "Drink Name & Preparation Rule",
            "Category",
            "Steep / Pour Time",
            "Golden Rule"
          ],
          "rows": [
            {
              "code": "BRW-01",
              "col1": "Builders Breakfast Tea — Steep teabag in boiling water for 3 full minutes before adding milk",
              "col2": "Black Tea",
              "col3": "3 Mins Steep",
              "flagged": true,
              "flagLabel": "★ Never Milk First"
            },
            {
              "code": "BRW-02",
              "col1": "Light Milky Tea — Steep 2 minutes, squeeze teabag gently against mug wall, add 25ml fresh milk",
              "col2": "Black Tea",
              "col3": "2 Mins Steep",
              "flagged": false,
              "flagLabel": "Standard"
            },
            {
              "code": "BRW-03",
              "col1": "Filter / Cafetiere Coffee — Wait 30 seconds after kettle boils so 94°C water does not burn grounds",
              "col2": "Coffee",
              "col3": "4 Mins Plunge",
              "flagged": true,
              "flagLabel": "★ Wait 30s Post-Boil"
            },
            {
              "code": "BRW-04",
              "col1": "Instant Coffee — Dissolve granules with 15ml cold milk or warm water before pouring boiling water",
              "col2": "Coffee",
              "col3": "30 Secs Stir",
              "flagged": false,
              "flagLabel": "Standard"
            },
            {
              "code": "BRW-05",
              "col1": "Herbal / Peppermint Infusion — Boiling water only; keep a 15mm safety rim below the mug top",
              "col2": "Herbal",
              "col3": "3 Mins Steep",
              "flagged": false,
              "flagLabel": "Standard"
            },
            {
              "code": "BRW-06",
              "col1": "4-Mug Tray Safety Rule — Never stack mugs or carry more than 4 hot drinks in a single trip",
              "col2": "Tray Safety",
              "col3": "15mm Safety Rim",
              "flagged": true,
              "flagLabel": "★ 4-Mug Max Cap"
            }
          ]
        }
      ]
    },
    {
      "id": "PLB-AUTHOR",
      "title": "How to Build & Share a Lean@GS Guide (Authoring Masterclass)",
      "eyebrow": "SIEMENS ENERGY • GUIDE AUTHORING MASTERCLASS",
      "subtitle": "Learn how to turn rough notes, Word documents, or application screens into a world-class, 10-second Lean@GS Playbook—and share it with colleagues as a portable .leanguide.json file in 15 minutes.",
      "processIds": [
        "PRC-AUTH"
      ],
      "sopIds": [
        "SOP-AUTH-1",
        "SOP-AUTH-2",
        "SOP-AUTH-3"
      ],
      "toolIds": [
        "TOL-AUTH-1"
      ],
      "roleIds": [
        "ROL-001",
        "ROL-002"
      ],
      "tabSubtitles": {
        "journey": "5-Stage Authoring Map",
        "guides": "3 Masterclass SOPs",
        "decision": "5-Question Naive Colleague Scorecard",
        "templates": "3-Tier Storage & Studio Reference"
      },
      "journeyMap": {
        "ribbon": "1. Define the Real-World Job → 2. Map the 3–6 Stage Journey → 3. Write 20-Word Action Steps & Paste Screenshots → 4. Add the Screen Button Reference → 5. Validate, Export & Share (.json)",
        "goldenPrinciple": {
          "eyebrow": "GOLDEN AUTHORING PRINCIPLE",
          "quote": "A great guide doesn't describe the software—it coaches a colleague through a real job in 10 seconds.",
          "description": "If a new starter has to ask 'What am I doing, why does it matter, or what does this acronym mean?', the guide has failed the Naive Colleague Test. Keep every step under 20 words, start with an action verb, and show the real screen."
        },
        "convergenceBanner": {
          "heading": "How a Raw Idea Becomes a Published Playbook",
          "input1": {
            "badge": "INPUT 1 • SUBJECT MATTER EXPERTISE",
            "title": "Subject Matter Expertise",
            "desc": "Your rough notes, Word SOP, facilitation checklist, or process rules."
          },
          "input2": {
            "badge": "INPUT 2 • REAL APPLICATION SCREENS",
            "title": "Real Application Screens",
            "desc": "Win+Shift+S screenshots captured from the live app & button inventories."
          },
          "combined": {
            "badge": "COMBINED IN THE WYSIWYG AUTHORING STUDIO",
            "title": "Validated, Portable .leanguide.json Playbook",
            "desc": "Produces a validated, portable .leanguide.json Playbook ready to share via Teams/SharePoint or publish to megblcntpvc72."
          }
        },
        "stages": [
          {
            "stageNumber": 1,
            "title": "Stage 1: Pass the 10-Second 'Naive Colleague' Test (Plan)",
            "summary": "Name the guide after the real-world job (never a software version) and write a 2-sentence plain-English purpose explaining what the user will achieve and why it matters to the business.",
            "whoInvolved": "Guide Author (SME / Local Programme Manager / Core Team Member)",
            "toolUsed": "Authoring Studio → Tab 1: Playbook & Journey Builder",
            "output": "Clear Playbook title, Golden Principle quote, and 2-sentence purpose",
            "ctaLabel": "Open Stage 1–2 Builder Guide →",
            "sopId": "SOP-AUTH-1"
          },
          {
            "stageNumber": 2,
            "title": "Stage 2: Map the End-to-End Journey Stages (Structure)",
            "summary": "Break the process into 3 to 6 logical stages. For each card, define only 4 human elements: Plain-English Title, What Happens, Who & Tool Used, and What You Finish With.",
            "whoInvolved": "Guide Author",
            "toolUsed": "Authoring Studio → Tab 1: Dynamic N-Stage Card Editor",
            "output": "Connected visual Journey Map with zero compliance stamps or file-extension clutter",
            "ctaLabel": "Open Stage 1–2 Builder Guide →",
            "sopId": "SOP-AUTH-1"
          },
          {
            "stageNumber": 3,
            "title": "Stage 3: Write ≤20-Word Steps & Paste Real Screenshots (Draft)",
            "summary": "Write each step starting with an imperative action verb in 20 words or fewer, add a real-world Coaching Tip, and press Ctrl+V to paste a real screenshot with a click-to-place highlight box (or choose clean Text-Only Coaching Mode for human rules).",
            "whoInvolved": "Guide Author",
            "toolUsed": "Authoring Studio → Tab 2: SOP & Step WYSIWYG Editor",
            "output": "Scannable step-by-step SOPs that pass live Poka-Yoke word and acronym checks",
            "ctaLabel": "Open Stage 3–4 Step Editor Guide →",
            "sopId": "SOP-AUTH-2"
          },
          {
            "stageNumber": 4,
            "title": "Stage 4: Document Screen Buttons & Decision Rules (Reference)",
            "summary": "Add the colour-matched 'Buttons & Controls on This Screen' reference table and any Quick-Fix Troubleshooting rows so users know what every button does without guessing.",
            "whoInvolved": "Guide Author",
            "toolUsed": "Authoring Studio → Tab 2 & Tab 3 (AI Draft Helper)",
            "output": "Complete screen button glossary and troubleshooting safety net",
            "ctaLabel": "Open Stage 3–4 Step Editor Guide →",
            "sopId": "SOP-AUTH-2"
          },
          {
            "stageNumber": 5,
            "title": "Stage 5: Validate, Export & Share Your Guide (Publish)",
            "summary": "Check that all green Poka-Yoke ticks pass, click 'Download Current Playbook Only' to share via Teams or SharePoint, or hand over to the Core Team to merge into the master server release.",
            "whoInvolved": "Guide Author + Lean Core Team Publisher",
            "toolUsed": "Top Header → Export / Upload Guide & validate-guides.js",
            "output": "Portable single-playbook file or live published corporate playbook",
            "ctaLabel": "Open Stage 5 Storage & Sharing Guide →",
            "sopId": "SOP-AUTH-3"
          }
        ]
      },
      "rulesKey": {
        "title": "3 Core Standards Every Lean@GS Guide Must Pass",
        "subtitle": "Built-in Poka-Yoke guardrails in the Authoring Studio",
        "items": [
          {
            "term": "1. ≤ 20-Word Imperative Steps",
            "desc": "Start every step with an action verb ('Click', 'Upload', 'Select', 'Review') in 20 words or fewer with zero unexplained acronyms."
          },
          {
            "term": "2. Visual Authenticity (No Fake UI)",
            "desc": "Show a real app screenshot (Ctrl+V) with a purple callout box for software clicks, or use Clean Coaching Mode for human rules."
          },
          {
            "term": "3. 3-Tier Portable JSON Storage",
            "desc": "Save drafts in browser localStorage (Tier 1), share single playbooks as .leanguide.json (Tier 2), and deploy master guides.json (Tier 3)."
          }
        ]
      },
      "decisionTools": [
        {
          "id": "DEC-AUTH-1",
          "kind": "naive-colleague-rubric",
          "navTitle": "The 5-Question Naive Colleague Scorecard & Writing Examples",
          "eyebrow": "GUIDE QUALITY RUBRIC • BEFORE YOU PUBLISH CHECK",
          "badge": "5 Naive Colleague Checks",
          "title": "The 5-Question 'Naive Colleague' Scorecard & Writing Examples",
          "subtitle": "Before exporting or sharing your Playbook, test every page against the 5 questions a new colleague asks in their first 10 seconds on screen.",
          "rulesHeading": "3 Golden Rules for Passing the 10-Second Naive Colleague Test",
          "rules": [
            {
              "badge": "CHECK 1 • REAL-WORLD JOB FIRST",
              "title": "1. Lead with the Human Job & Business Priority—Never the Software Plumbing",
              "desc": "Colleagues open a guide to solve an operational problem or complete a real task, not to admire database IDs or version numbers.",
              "whereInApp": "Authoring Studio → Tab 1: Playbook Title, Subtitle & Golden Principle Quote."
            },
            {
              "badge": "CHECK 2 • ONE BREATH PER STEP",
              "title": "2. Keep Every Step Action ≤ 20 Words Starting with a Strong Verb",
              "desc": "If a user is looking back and forth between your guide and a live software screen, they can only hold one short imperative sentence in working memory.",
              "whereInApp": "Authoring Studio → Tab 2: Step Action Command (Live 0 / 20 Word Counter Pill)."
            },
            {
              "badge": "CHECK 3 • REAL SCREEN OR COACHING CARD",
              "title": "3. Show the Real Screen for Clicks; Use Coaching Cards for Human Rules",
              "desc": "Never draw fake wireframe buttons for human behaviours. Paste a real screenshot (Ctrl+V) for software steps or choose 'No Image (Text + Coaching Only)'.",
              "whereInApp": "Authoring Studio → Tab 2: 4. Visual Mode for This Step."
            }
          ],
          "matrixHeading": "The 5-Question 'Naive Colleague' Before-You-Publish Scorecard (Bad vs. Good Examples)",
          "matrixSubtitle": "Review your draft Playbook against all 5 Naive Colleague questions below before clicking 'Download Current Playbook (.leanguide.json)':",
          "matrixColumns": {
            "col1": "1. Naive Colleague Question",
            "col2": "Why Colleagues Get Stuck",
            "col3": "❌ Bad Example (Tech Speak / Score-Chasing)",
            "col4": "✅ Good Example (Plain English + Business Priority)"
          },
          "priorityMatrix": [
            {
              "priority": "1. What am I doing?",
              "painPoint": "Internal database codes or audit jargon hide the actual task",
              "supportingCapabilities": "❌ Bad: \"Execute PRC-002 Calibration.\"",
              "exampleAction": "✅ Good: Complete the 28-Question Site Maturity Self-Assessment."
            },
            {
              "priority": "2. Why am I doing it?",
              "painPoint": "Framing actions around chasing maturity points instead of business results",
              "supportingCapabilities": "❌ Bad: \"Raise Gateway #10 from 2/5 to 3/5.\"",
              "exampleAction": "✅ Good: Cut repeat quality defects by standardising pilot experiments across 70% of teams."
            },
            {
              "priority": "3. Where do I start?",
              "painPoint": "Setup prerequisites and live tool links are buried at the bottom of the page",
              "supportingCapabilities": "❌ Bad: Buried at the bottom of the page.",
              "exampleAction": "✅ Good: Clear 'Before You Start' box at the top + direct 'Launch Live Tool ↗' button."
            },
            {
              "priority": "4. Do I understand the terminology?",
              "painPoint": "Wall-to-wall unexplained acronyms force new starters to guess",
              "supportingCapabilities": "❌ Bad: \"Check OE LPM VOC & SQDC in Data Plate.\"",
              "exampleAction": "✅ Good: Zero unexplained acronyms; plain English first on every card and step."
            },
            {
              "priority": "5. Is the visual authentic?",
              "painPoint": "Invented wireframe boxes do not match the real buttons on screen",
              "supportingCapabilities": "❌ Bad: Fake wireframe boxes for human rules.",
              "exampleAction": "✅ Good: Real app screenshot for software clicks; clean Coaching Card for human rules."
            }
          ],
          "comparisonExample": {
            "heading": "What Good Looks Like: 1 Scannable ≤20-Word Step vs. 1 Overloaded Paragraph Step",
            "good": {
              "badge": "✅ Passes Naive Colleague Test (16 Words)",
              "gatewayRef": "✓ Active Verb • ✓ ≤20 Words • ✓ Real Screenshot",
              "title": "Imperative Action + Supporting Detail + Coaching Tip",
              "statement": "Select 'New Standard' and enter your exact Org Code and Date of Assessment in the header.",
              "whyItWorks": "Starts with an imperative verb ('Select'), stays under 20 words (16 words), highlights the two critical header fields on a real screenshot, and puts the 'why' in the Coaching Tip."
            },
            "bad": {
              "badge": "❌ Fails Naive Colleague Test (39 Words + Jargon)",
              "warningRef": "❌ Passive Voice • ❌ 39 Words • ❌ Raw Acronyms",
              "title": "Wall-of-Text Paragraph Mixing Clicks, Rules & Jargon",
              "statement": "The user should now proceed to ensure that the KPI and VOC calibration parameters in PRC-001 v2.4.7 are configured by the LPM prior to executing the JSON export.",
              "whyItFails": "Uses passive voice ('The user should now proceed to ensure'), buries the action in 39 words of bureaucratic jargon, and includes banned raw acronyms and software version numbers."
            }
          }
        }
      ],
      "templates": [
        {
          "id": "TPL-AUTH-1",
          "kind": "authoring-reference",
          "navTitle": "3-Tier Storage Diagram, AI Prompt Cheat Sheet & Studio Button Reference",
          "eyebrow": "STATIC-HOST STORAGE ARCHITECTURE & STUDIO REFERENCE",
          "badge": "3-Tier JSON Workflow",
          "title": "3-Tier Storage Architecture Diagram, AI Prompt Cheat Sheet & Studio Button Reference",
          "subtitle": "How browser drafts, single-playbook peer sharing (.leanguide.json), and official server deployments (guides.json) work together—plus every button inside the WYSIWYG Authoring Studio.",
          "storageTiers": [
            {
              "tierBadge": "TIER 1 • BROWSER DRAFT",
              "badgeBg": "#007A7A",
              "borderColor": "#009999",
              "title": "Automatic Browser Draft (localStorage)",
              "desc": "Every time you click 'Save Playbook' or 'Save & Apply to Live Guide' in the Authoring Studio, your changes are saved instantly in your browser's local storage. A '● Local Draft Active' badge appears in the top header so you never lose work if you refresh.",
              "fileSpec": "localStorage['SE_LEAN_GS_GUIDES_DB_V20'] (Instant & Private to Your Browser)"
            },
            {
              "tierBadge": "TIER 2 • SINGLE-PLAYBOOK SHARE",
              "badgeBg": "#4D217A",
              "borderColor": "#8A00E5",
              "title": "Single-Playbook Bundle (.leanguide.json)",
              "desc": "Click '⬇ Export Guide ▾ → Download Current Playbook Only (.leanguide.json)' to package just the active Playbook (plus its SOPs, Tools, Roles, and embedded Base64 screenshots) into a single file. Send it via Teams or Email—colleagues click '⬆ Upload Guide (.json)' to merge it without wiping out their other playbooks.",
              "fileSpec": "<Playbook-Slug>.leanguide.json (Upload & Merge into Any Colleague's Library)"
            },
            {
              "tierBadge": "TIER 3 • MASTER SERVER RELEASE",
              "badgeBg": "#1B1534",
              "borderColor": "#1B1534",
              "title": "Master Multi-Playbook Library (guides.json)",
              "desc": "When a new or updated Playbook is ready to become part of the official corporate library for all users, click '⬇ Export Guide ▾ → Download Master Library (guides.json)', run 'node scripts/validate-guides.js', and commit 'data/guides.json' to the server repository.",
              "fileSpec": "data/guides.json & data/fallback-db.js (Deployed to megblcntpvc72)"
            }
          ],
          "aiCheatSheet": [
            {
              "stepBadge": "STEP 1 • COPY SYSTEM PROMPT",
              "title": "Click '📋 Copy AI Playbook Prompt'",
              "detail": "Open Authoring Studio → Tab 3 (or click the purple button above) to copy the pre-engineered Lean@GS JSON schema & 20-word style prompt."
            },
            {
              "stepBadge": "STEP 2 • PASTE WITH YOUR ROUGH NOTES",
              "title": "Paste into M365 Copilot or Gemini",
              "detail": "Paste the prompt into Microsoft 365 Copilot or Google Gemini, attach or paste your rough Word SOP, PowerPoint slides, or bullet notes, and hit Enter."
            },
            {
              "stepBadge": "STEP 3 • LOAD & ADD SCREENSHOTS",
              "title": "Paste Returned JSON & Snip Screens",
              "detail": "Paste the AI's JSON output into Studio Tab 3 ('Apply Raw JSON Changes') or save it as a .leanguide.json file, then open Tab 2 to press Ctrl+V and add real screenshots."
            }
          ],
          "fieldGuide": [
            {
              "section": "Tier 1 • Browser Draft",
              "appField": "localStorage Auto-Save",
              "guidance": "Clicking 'Save Playbook' or 'Save & Apply to Live Guide' saves your work immediately in your browser with a 'Local Draft Active' badge."
            },
            {
              "section": "Tier 2 • Single-Playbook Share",
              "appField": "Download Current Playbook (.leanguide.json)",
              "guidance": "Packages only the active Playbook, its SOPs, Tools, Roles, and Base64 screenshots so colleagues can click 'Upload Guide (.json)' to merge it."
            },
            {
              "section": "Tier 3 • Master Release",
              "appField": "Download Master Library (guides.json)",
              "guidance": "Exports the complete multi-playbook master database for validation with validate-guides.js and deployment to megblcntpvc72."
            }
          ],
          "exampleRows": [
            {
              "code": "TIER-1",
              "action": "Browser Draft Auto-Save (localStorage)",
              "note": "Saves automatically while authoring in Tab 1 and Tab 2",
              "lift": "Instant Browser Draft",
              "tag": "Authoring",
              "due": "Real-Time",
              "owner": "Guide Author"
            },
            {
              "code": "TIER-2",
              "action": "Single-Playbook Share (<Slug>.leanguide.json)",
              "note": "Share via Teams, Email, or SharePoint; merges without wiping other playbooks",
              "lift": "1-Click Upload & Merge",
              "tag": "Peer Review",
              "due": "Same Day",
              "owner": "Author / Colleague"
            },
            {
              "code": "TIER-3",
              "action": "Master Multi-Playbook Release (guides.json)",
              "note": "Validated with node scripts/validate-guides.js and committed to server",
              "lift": "Official Server Release",
              "tag": "Production",
              "due": "Release Gate",
              "owner": "Lean Core Team"
            }
          ],
          "buttonsReference": [
            {
              "button": "✦ Open Authoring Studio",
              "where": "Top Header Bar (Petrol Button) & Left Sidebar Card",
              "whatItDoes": "Opens the 4-tab WYSIWYG Guide Authoring Studio modal for creating and editing Playbooks, Journey Stages, and Step-by-Step SOPs."
            },
            {
              "button": "+ Create New Playbook",
              "where": "Studio Tab 1 ('Playbook & Journey Builder' Top Bar — Petrol Button)",
              "whatItDoes": "Creates a brand-new Playbook scaffold with a default Journey Stage and SOP so you can start authoring immediately."
            },
            {
              "button": "+ Add Journey Stage",
              "where": "Studio Tab 1 ('Playbook & Journey Builder' Top Bar — Bright Purple Button)",
              "whatItDoes": "Appends a new stage card to the active Playbook's End-to-End Journey Map and links it to a step-by-step SOP."
            },
            {
              "button": "+ New SOP Guide",
              "where": "Studio Tab 2 ('SOP & Step WYSIWYG Editor' Top Bar — Purple Button)",
              "whatItDoes": "Creates a new Step-by-Step SOP runbook inside the active Playbook."
            },
            {
              "button": "+ New Step",
              "where": "Studio Tab 2 ('SOP & Step WYSIWYG Editor' Top Bar — Petrol Button)",
              "whatItDoes": "Adds a new numbered step to the selected SOP Guide with live 20-word Poka-Yoke validation."
            },
            {
              "button": "📸 Custom Screenshot (Paste Ctrl+V / Upload)",
              "where": "Studio Tab 2 ('4. Visual Mode for This Step' + Right Dropzone)",
              "whatItDoes": "Lets you press Ctrl+V to paste a screenshot directly from Windows Snipping Tool (Win+Shift+S), auto-compresses it to Base64, and lets you click anywhere on the image to place a purple highlight box."
            },
            {
              "button": "📋 Copy AI Playbook Prompt",
              "where": "Studio Tab 3 ('AI Generator Prompt & Raw JSON' — Bright Purple Button)",
              "whatItDoes": "Copies a ready-to-use system prompt to your clipboard so M365 Copilot or Gemini can convert rough Word/PowerPoint notes into a valid Lean@GS Playbook JSON in 60 seconds."
            },
            {
              "button": "⬇ Download Current Playbook Only (.leanguide.json)",
              "where": "Top Header '⬇ Export Guide ▾' Dropdown & Studio Modal Top Bar (Petrol Button)",
              "whatItDoes": "Tier 2 Export: Downloads ONLY the currently active Playbook (plus its linked SOPs, Tools, Roles, and embedded Base64 screenshots) as a standalone <Playbook-Slug>.leanguide.json file for sharing via Teams, Email, or SharePoint."
            },
            {
              "button": "⬇ Download Master Library (guides.json)",
              "where": "Top Header '⬇ Export Guide ▾' Dropdown & Studio Modal Top Bar (Bright Purple Button)",
              "whatItDoes": "Tier 3 Export: Downloads the complete multi-playbook master guides.json database for official repository deployment to the corporate server (megblcntpvc72)."
            },
            {
              "button": "⬆ Upload Guide (.json)",
              "where": "Top Header Bar, Left Sidebar Card & Studio Modal Top Bar",
              "whatItDoes": "Smart Upload & Merge: Accepts either a colleague's single-playbook .leanguide.json file (merging it into your active library without deleting existing playbooks) OR a complete master guides.json file."
            },
            {
              "button": "↺ Reset Local Browser Edits",
              "where": "Studio Tab 1, Tab 2 & Tab 3 Bottom Bar",
              "whatItDoes": "Clears local browser draft edits from localStorage and restores the official server library snapshot."
            }
          ]
        }
      ],
      "referenceTables": []
    }
  ]
};
