window.FALLBACK_GUIDES_DB = {
  "meta": {
    "organization": "Siemens Energy • Lean@GS",
    "programme": "Maturity Assessment & Navigator Workshop",
    "version": "6.0.0 / 2.4.4",
    "strictWordLimit": 20,
    "filingRule": "Save finished .csv and .json files in '600 Maturity Submissions'. Never move or delete files in that folder."
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
    }
  },
  "tools": {
    "TOL-001": {
      "id": "TOL-001",
      "name": "Maturity Assessment & Explainer",
      "suite": "PM Maturity Hub",
      "versionBadge": "v6.0.0",
      "category": "Phase 1: Assess",
      "purpose": "Score all 28 site Lean questions in pairs, view plain-English Level 1–5 flashcards, and export your .json and .csv files.",
      "accessUrl": "PM Maturity Hub → Phase 1: Assess",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Book a 90-minute scoring session with your Lean Core Team partner—never score alone.",
        "Open the Maturity Explainer flashcards alongside the 28 questions to check what Level 3 proof looks like."
      ],
      "quickCommands": [
        {
          "goal": "Pass a starred Gateway question (★)",
          "command": "Score >= 3 with real workplace proof across ~70% of site teams"
        },
        {
          "goal": "Archive completed assessment files",
          "command": "Save Data.json and Data.csv inside folder: 600 Maturity Submissions"
        }
      ],
      "troubleshooting": [
        {
          "symptom": "We had a score of 4 last year, but the habit stopped when a manager left.",
          "cause": "Workplace habits regressed below the 70% site threshold.",
          "fix": "Lower the score honestly to match today's real workplace proof so you can focus help where needed."
        }
      ]
    },
    "TOL-002": {
      "id": "TOL-002",
      "name": "Score Explainer, Metro Journey & 4 Pillars",
      "suite": "PM Maturity Hub",
      "versionBadge": "v6.0.0",
      "category": "Phase 2: Visualize",
      "purpose": "Show leaders visually which Gateways passed or failed, where the Metro train stops, and how the 1–4 level cap works.",
      "accessUrl": "PM Maturity Hub → Phase 2: Visualize",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Have your saved Assessment .json file ready to upload.",
        "If uploading an Excel .csv file fails, run it through the CSV to JSON Fixer utility first."
      ],
      "quickCommands": [
        {
          "goal": "Calculate capped maturity score",
          "command": "Final Score = Unlocked Level + [(Unlocked Average - 1) / 4]"
        },
        {
          "goal": "Export subway-style visual map for leaders",
          "command": "Open Metro Journey → Click 'Save PDF'"
        }
      ],
      "troubleshooting": [
        {
          "symptom": "High scores on Level 2 and Level 3 questions did not raise our 1.6 total score.",
          "cause": "A Level 1 Gateway question (such as Q10) scored below 3, pausing all higher-level questions.",
          "fix": "Open Score Explainer to spot the red Level 1 Gateway and raise it to 3 across 70% of teams."
        }
      ]
    },
    "TOL-003": {
      "id": "TOL-003",
      "name": "Strategy Builder, Simulator & CSV Fixer",
      "suite": "PM Maturity Hub",
      "versionBadge": "v6.0.0",
      "category": "Phase 3: Plan & Utilities",
      "purpose": "Simulate how fixing red Gateways raises your score and export a local site improvement plan without needing a full workshop.",
      "accessUrl": "PM Maturity Hub → Phase 3: Plan",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Load your site's .json assessment file into Strategy Builder or Simulator."
      ],
      "quickCommands": [
        {
          "goal": "Fix broken Excel semicolon CSV exports",
          "command": "Open Utilities → CSV to JSON Fixer → Convert ';' to clean .json"
        },
        {
          "goal": "Build a standalone local action plan",
          "command": "Select Pilot, Standardization, or System Integration for each gap → Click 'Export Plan'"
        }
      ],
      "troubleshooting": [
        {
          "symptom": "CSV file fails to load into Score Explainer or Strategy Builder.",
          "cause": "Regional Excel settings saved semicolons (;) instead of commas (,).",
          "fix": "Open CSV to JSON Fixer in Utilities and convert the file into a clean .json file."
        }
      ]
    },
    "TOL-004": {
      "id": "TOL-004",
      "name": "Analysis Report & VOC Input",
      "suite": "Navigator Toolkit",
      "versionBadge": "v2.4.4",
      "category": "Steps 2 & 3: Analyze & Prepare",
      "purpose": "Turn low Maturity scores into suggested Stage 0–9 actions and capture leader interview priorities before the workshop.",
      "accessUrl": "Navigator Toolkit → Analysis Report / VOC Input",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Complete your Site Maturity Assessment and save your Data.json file before opening Analysis Report.",
        "Schedule 20-minute pre-workshop interviews with key site leaders to ask for their top 3 operational headaches."
      ],
      "quickCommands": [
        {
          "goal": "Generate draft gap slides from Maturity JSON",
          "command": "Analysis Report → Upload .json → Add notes → Click 'Export to PowerPoint'"
        },
        {
          "goal": "Export leadership Voice of the Customer pack",
          "command": "VOC Input → Enter leader pain points → Download Briefing Pack.pptx & VOC Log.csv"
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Leaders bring up 15 different priorities during interviews.",
          "cause": "Unfiltered wish lists dilute the half-day workshop.",
          "fix": "Group interview notes inside VOC Input into the Top 3 recurring operational problems."
        }
      ]
    },
    "TOL-005": {
      "id": "TOL-005",
      "name": "Workshop Guide, Charter Input & Action Log",
      "suite": "Navigator Toolkit",
      "versionBadge": "v2.4.4",
      "category": "Steps 4–6: Align, Charter & Track",
      "purpose": "Facilitate the 3-part leadership workshop, lock 12-month OKRs into a 1-page Charter, and track monthly completion.",
      "accessUrl": "Navigator Toolkit → Workshop Guide / Charter & Action Log",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Have your Briefing Pack.pptx (Leader Needs) and Action Report.pptx (Maturity Gaps) ready on screen."
      ],
      "quickCommands": [
        {
          "goal": "Write a strong, measurable Key Result",
          "command": "Pattern: [Measure] from [Start] to [Target] by [Date] (e.g., 25% to 75% by Q3)"
        },
        {
          "goal": "Run monthly governance follow-up",
          "command": "Open Action Log → Check off completed tasks and update owners with site leaders"
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Team writes weak task goals like 'Train 30 people in problem solving'.",
          "cause": "Measures attendance in a room instead of real shop-floor habit change.",
          "fix": "Rewrite as a habit metric: 'Increase shift huddles solving issues within 48h from 25% to 75% by Q3'."
        }
      ]
    }
  },
  "processes": {
    "PRC-001": {
      "id": "PRC-001",
      "title": "Check Your Site's Current Score",
      "appName": "PM Maturity Hub",
      "versionBadge": "v6.0.0",
      "durationBadge": "90 mins",
      "whenToUse": "Every quarter with a Lean Core Team partner.",
      "cardOutput": "Completed 28-question health check & local action plan.",
      "ctaLabel": "Start Site Assessment Guide",
      "category": "Standalone Site Health Check",
      "userGoal": "Score your site's 28 Lean questions fairly in pairs, verify real workplace proof across 70% of teams, and build a local improvement plan.",
      "trigger": "Quarterly site Lean health check or preparation before a leadership Navigator Workshop.",
      "finalOutcome": "Calibrated Data.json and Data.csv saved in '600 Maturity Submissions' plus a visual Metro Journey and local Strategy Builder plan.",
      "valueAddCoaching": "Treat the assessment as a helpful coaching conversation, never an audit. Lowering an old score when a habit stops is a win because it directs help to the real bottleneck.",
      "raci": {
        "responsible": "ROL-001",
        "accountable": "ROL-003",
        "consulted": ["ROL-002"],
        "informed": ["ROL-003"]
      },
      "stages": [
        {
          "stageNumber": 1,
          "name": "Score All 28 Questions Together in a Pair",
          "sopId": "SOP-001",
          "toolIds": ["TOL-001"],
          "summary": "Score together with a Core Team partner using the 70% site rule and real workplace proof."
        },
        {
          "stageNumber": 2,
          "name": "Check Starred Gateways & Build a Local Action Plan",
          "sopId": "SOP-002",
          "toolIds": ["TOL-002", "TOL-003"],
          "summary": "See which starred Gateways cap your level, export the Metro Journey PDF, and build a local plan in Strategy Builder."
        }
      ]
    },
    "PRC-002": {
      "id": "PRC-002",
      "title": "Run a Leadership Action Workshop",
      "appName": "Navigator Toolkit",
      "versionBadge": "v2.4.4",
      "durationBadge": "Half Day",
      "whenToUse": "After completing your site check.",
      "cardOutput": "Signed 1-page action charter & 12-month roadmap.",
      "ctaLabel": "Start Workshop Guide",
      "category": "6-Step Leadership Alignment",
      "userGoal": "Combine your site's Maturity gap scores with leadership business priorities to agree on a 1-page Charter, measurable goals, and a 12-month roadmap.",
      "trigger": "Site is ready to align leadership priorities and Lean resources for the next 6 to 12 months.",
      "finalOutcome": "Signed 1-Page Navigator Charter with 2–3 measurable Key Results, a Q1–Q4 Interactive Roadmap, and monthly tracking in the Action Log.",
      "valueAddCoaching": "Never walk into a Navigator Workshop with only Maturity scores. Pairing red Gateway gaps with the Site Leader's top 3 business headaches turns 'Lean tasks' into urgent business solutions.",
      "raci": {
        "responsible": "ROL-001",
        "accountable": "ROL-003",
        "consulted": ["ROL-002"],
        "informed": ["ROL-002"]
      },
      "stages": [
        {
          "stageNumber": 1,
          "name": "Prepare Gap Slides & Interview Site Leaders",
          "sopId": "SOP-003",
          "toolIds": ["TOL-004"],
          "summary": "Upload your site score .json into Analysis Report and interview site leaders to build the pre-workshop Briefing Pack."
        },
        {
          "stageNumber": 2,
          "name": "Facilitate the Workshop, Lock Goals & Track Monthly",
          "sopId": "SOP-004",
          "toolIds": ["TOL-005"],
          "summary": "Run the 3-part agenda, write measurable goals in Charter Input, and review monthly in Action Log."
        }
      ]
    }
  },
  "sops": {
    "SOP-001": {
      "id": "SOP-001",
      "title": "Calibrate and Score All 28 Site Questions in Pairs",
      "processId": "PRC-001",
      "roleId": "ROL-001",
      "toolIds": ["TOL-001"],
      "estimatedTime": "90 mins",
      "stationLocation": "PM Maturity Hub → Phase 1: Assess",
      "userGoal": "Complete a fair, evidence-based 1–5 rating for all 28 Lean@GS questions and save the official submission files.",
      "gettingStarted": [
        "Pair the Local Programme Manager with a Lean Core Team member—new or uncertified managers must never score alone.",
        "Open the Maturity Assessment and Maturity Explainer side-by-side inside the PM Maturity Hub.",
        "Gather physical evidence: team huddle boards, meeting logs, and 3–6 months of trend charts."
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Review each question in a pair and check the Maturity Explainer flashcards.",
          "detail": "The Local Programme Manager and Lean Core Team partner review all 28 questions together before showing leaders.",
          "toolId": "TOL-001",
          "coachingTip": "Treat scoring as a helpful coaching conversation to find where teams need support—never push just to chase a higher number.",
          "visual": {
            "type": "ui-mockup",
            "caption": "5-Step Calibration Flow — Step 1: Score in a Pair",
            "elements": [
              { "id": "w1", "kind": "window", "label": "PM Maturity Hub • Calibration Workflow", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "b1", "kind": "card", "label": "STEP 1: Score in a Pair (Programme Mgr + Core Team)", "x": 40, "y": 58, "w": 255, "h": 50, "state": "active" },
              { "id": "b2", "kind": "button", "label": "Open Explainer Cards", "x": 310, "y": 58, "w": 150, "h": 50, "state": "success" },
              { "id": "b3", "kind": "badge", "label": "Rule: Never score alone • Certified Core Team partner required", "x": 40, "y": 124, "w": 420, "h": 34, "state": "default" }
            ],
            "annotation": {
              "targetX": 40,
              "targetY": 58,
              "targetW": 255,
              "targetH": 50,
              "arrowFromX": 175,
              "arrowFromY": 26,
              "label": "1. Always Score Together in a Pair"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Apply the 70% site rule before awarding any score of 3, 4, or 5.",
          "detail": "A habit must be working across roughly 70% of the site with real boards and logs to score 3 or higher.",
          "toolId": "TOL-001",
          "coachingTip": "One enthusiastic pilot area or a written slide deck that nobody uses scores a 2 (Just Starting), never a 3.",
          "visual": {
            "type": "ui-mockup",
            "caption": "The 70% Site Rule & 1–5 Evidence Scale",
            "elements": [
              { "id": "w1", "kind": "window", "label": "1–5 Rating Scale • Passing Starred Gateways (★)", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Score 2: 1 Pilot Only (Fails ★)", "x": 38, "y": 60, "w": 185, "h": 48, "state": "danger" },
              { "id": "c2", "kind": "button", "label": "Score 3: ~70% of Site (Passes ★)", "x": 240, "y": 60, "w": 220, "h": 48, "state": "success" },
              { "id": "c3", "kind": "badge", "label": "Score 4: Daily Habit (3–6m trends) | Score 5: Self-Running", "x": 38, "y": 124, "w": 422, "h": 34, "state": "default" }
            ],
            "annotation": {
              "targetX": 240,
              "targetY": 60,
              "targetW": 220,
              "targetH": 48,
              "arrowFromX": 290,
              "arrowFromY": 26,
              "label": "2. Verify ~70% Site Coverage for 3+"
            }
          }
        },
        {
          "stepNumber": 3,
          "action": "Review draft scores with site leaders and update only when shown real proof.",
          "detail": "Walk leaders through the draft ratings and adjust a score only if physical workplace evidence proves it.",
          "toolId": "TOL-001",
          "coachingTip": "If a habit scored 4 last year but stopped working, lower the score openly so the site gets support to rebuild it.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Leader Evidence Review & Calibration Sign-Off",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Steps 3 & 4 • Leader Calibration & Workplace Proof", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Step 3: Discuss Draft with Leaders", "x": 40, "y": 60, "w": 200, "h": 48, "state": "default" },
              { "id": "c2", "kind": "button", "label": "Step 4: Update Only With Proof", "x": 255, "y": 60, "w": 205, "h": 48, "state": "active" },
              { "id": "c3", "kind": "badge", "label": "Required Proof: Working boards, meeting logs, 3-6 month action history", "x": 40, "y": 124, "w": 420, "h": 34, "state": "default" }
            ],
            "annotation": {
              "targetX": 255,
              "targetY": 60,
              "targetW": 205,
              "targetH": 48,
              "arrowFromX": 300,
              "arrowFromY": 26,
              "label": "3. Change Score Only With Proof"
            }
          }
        },
        {
          "stepNumber": 4,
          "action": "Download the finished .json and .csv files into the 600 Maturity Submissions folder.",
          "detail": "Never move, rename, or delete historical files inside the 600 Maturity Submissions folder.",
          "toolId": "TOL-001",
          "coachingTip": "Always export both .json and .csv—the .json file loads cleanly into Score Explainer and Navigator Toolkit without Excel formatting bugs.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Official Filing Rule — 600 Maturity Submissions",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Step 5 • Export & Archive Official Submission", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "button", "label": "Download Data.json & Data.csv", "x": 40, "y": 60, "w": 210, "h": 48, "state": "success" },
              { "id": "c2", "kind": "card", "label": "Folder: 600 Maturity Submissions", "x": 265, "y": 60, "w": 195, "h": 48, "state": "active" },
              { "id": "c3", "kind": "badge", "label": "ARCHIVE RULE: Never move or delete files in 600 Maturity Submissions", "x": 40, "y": 124, "w": 420, "h": 34, "state": "default" }
            ],
            "annotation": {
              "targetX": 265,
              "targetY": 60,
              "targetW": 195,
              "targetH": 48,
              "arrowFromX": 310,
              "arrowFromY": 26,
              "label": "4. Save in 600 Maturity Submissions"
            }
          }
        }
      ],
      "troubleshooting": [
        {
          "symptom": "A manager insists a single high-performing cell justifies a score of 3 for the whole site.",
          "cause": "Confusing a local pilot (Score 2) with a site-wide standard (Score 3).",
          "fix": "Point to the 70% Site Rule: score it 2 today and use Strategy Builder to scale that cell's standard to 70% of teams."
        }
      ]
    },
    "SOP-002": {
      "id": "SOP-002",
      "title": "Diagnose Gateway Score Caps and Build a Local Action Plan",
      "processId": "PRC-001",
      "roleId": "ROL-001",
      "toolIds": ["TOL-002", "TOL-003"],
      "estimatedTime": "45 mins",
      "stationLocation": "PM Maturity Hub → Phases 2 & 3",
      "userGoal": "Identify which starred Gateway questions cap your site's level and export a targeted local action plan.",
      "gettingStarted": [
        "Locate your saved Data.json file from your site assessment.",
        "Open Score Explainer, Metro Journey, and Strategy Builder inside the PM Maturity Hub."
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Upload your .json file into Score Explainer to see which Gateways cap your level.",
          "detail": "All 17 starred Gateway questions (★) in your level must score at least 3 before higher-level questions count.",
          "toolId": "TOL-002",
          "coachingTip": "If Gateway #10 (Pilot Experiments) scores 2/5, your site is capped at Level 1 (e.g., 1.6/4.0) even if Level 2 questions score 4.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Gateway Score Cap — Why Q10 = 2/5 Caps Total Score at 1.6",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Score Explainer • Level Cap Formula: Level + [(Avg - 1) / 4]", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Level 0 Gateways (Q1–Q5 >= 3) ✓", "x": 35, "y": 58, "w": 195, "h": 48, "state": "success" },
              { "id": "c2", "kind": "button", "label": "Gateway Q10 = 2/5 ✗ (Capped L1)", "x": 245, "y": 58, "w": 215, "h": 48, "state": "danger" },
              { "id": "c3", "kind": "badge", "label": "Levels 2–4 Paused Until Q10 >= 3  •  Final Score: 1.6 / 4.0", "x": 35, "y": 122, "w": 425, "h": 36, "state": "active" }
            ],
            "annotation": {
              "targetX": 245,
              "targetY": 58,
              "targetW": 215,
              "targetH": 48,
              "arrowFromX": 295,
              "arrowFromY": 26,
              "label": "1. Spot Red Gateway Blocking Level 2"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Open Metro Journey and click 'Save PDF' to show leaders where the train stops.",
          "detail": "Pair the Metro Journey map with 'The 4 Pillars (Live)' view to highlight green PASS and red GAP badges.",
          "toolId": "TOL-002",
          "coachingTip": "Leaders grasp the subway map in ten seconds—point directly to the red station blocking the train from advancing.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Phase 2: Visualize — Metro Journey & 4 Pillars Live",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Metro Journey & The 4 Pillars (Live View)", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Metro Line: L0 PASS ──● Q10 STOP", "x": 40, "y": 60, "w": 245, "h": 48, "state": "active" },
              { "id": "c2", "kind": "button", "label": "Save PDF Map", "x": 300, "y": 60, "w": 160, "h": 48, "state": "success" },
              { "id": "c3", "kind": "badge", "label": "4 Pillars Live: Shows Green [PASS] and Red [GAP] Badges by Pillar", "x": 40, "y": 124, "w": 420, "h": 34, "state": "default" }
            ],
            "annotation": {
              "targetX": 300,
              "targetY": 60,
              "targetW": 160,
              "targetH": 48,
              "arrowFromX": 320,
              "arrowFromY": 26,
              "label": "2. Click 'Save PDF' on Metro Map"
            }
          }
        },
        {
          "stepNumber": 3,
          "action": "Select actions for each red Gateway inside Strategy Builder and click 'Export Plan'.",
          "detail": "Choose Pilot, Standardization, or System Integration for each gap and test the impact in Simulator.",
          "toolId": "TOL-003",
          "coachingTip": "Fix current-level red Gateways first—raising Q10 from 2 to 3 immediately unlocks all 12 Level-2 questions.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Phase 3: Plan — Strategy Builder & Score Simulator",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Strategy Builder • Local Action Plan Generator", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Gap Q10 → Pick: [Standardization ▾]", "x": 40, "y": 60, "w": 245, "h": 48, "state": "active" },
              { "id": "c2", "kind": "button", "label": "Export Plan", "x": 300, "y": 60, "w": 160, "h": 48, "state": "success" },
              { "id": "c3", "kind": "badge", "label": "Simulator Preview: Fixing Q10 Unlocks Level 2 (1.6 → 2.6)", "x": 40, "y": 124, "w": 420, "h": 34, "state": "default" }
            ],
            "annotation": {
              "targetX": 300,
              "targetY": 60,
              "targetW": 160,
              "targetH": 48,
              "arrowFromX": 320,
              "arrowFromY": 26,
              "label": "3. Pick Action & Click 'Export Plan'"
            }
          }
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Uploading the Excel .csv file into Score Explainer gives a format error.",
          "cause": "Excel saved semicolons (;) instead of commas (,).",
          "fix": "Click 'CSV to JSON Fixer' under Utilities in the PM Maturity Hub to convert the file to a clean .json."
        }
      ]
    },
    "SOP-003": {
      "id": "SOP-003",
      "title": "Prepare the Navigator Workshop Inputs",
      "processId": "PRC-002",
      "roleId": "ROL-001",
      "toolIds": ["TOL-004"],
      "estimatedTime": "2 hours (Pre-Work)",
      "stationLocation": "Navigator Toolkit → Steps 1 to 3",
      "userGoal": "Prepare the two mandatory workshop inputs: the Maturity Gap Action Report and the Leader Priorities Briefing Pack.",
      "gettingStarted": [
        "Have your completed Site Maturity Data.json file ready.",
        "Complete short 1-on-1 interviews with site leaders to ask for their top 3 business headaches."
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Upload your site score .json file into Analysis Report and click 'Export to PowerPoint'.",
          "detail": "Review the suggested actions across Stages 0–9 and add local Lean Core Team notes before exporting.",
          "toolId": "TOL-004",
          "coachingTip": "Highlight the exact 2 or 3 red Gateway questions that block the next maturity level so leaders don't drown in all 28 questions.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Navigator Step 2 (ANALYZE) — Analysis Report Tool",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Navigator Toolkit • Analysis Report (Step 2)", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Input 1: Maturity Data.json Loaded ✓", "x": 40, "y": 60, "w": 230, "h": 48, "state": "active" },
              { "id": "c2", "kind": "button", "label": "Export to PowerPoint", "x": 285, "y": 60, "w": 175, "h": 48, "state": "success" },
              { "id": "c3", "kind": "badge", "label": "Files Out: Action Report.pptx + Summary.csv (Stages 0–9)", "x": 40, "y": 124, "w": 420, "h": 34, "state": "default" }
            ],
            "annotation": {
              "targetX": 285,
              "targetY": 60,
              "targetW": 175,
              "targetH": 48,
              "arrowFromX": 310,
              "arrowFromY": 26,
              "label": "1. Export Action Report.pptx"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Type leader interview pain points into VOC Input and download the Briefing Pack.",
          "detail": "Downloads both the VOC Log.csv and the pre-workshop Briefing Pack.pptx showing leadership's top priorities.",
          "toolId": "TOL-004",
          "coachingTip": "Use the leaders' own words for lead-time delays, repeat quality defects, or handoff friction so they immediately recognize their priorities in the room.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Navigator Step 3 (PREPARE) — VOC Input Tool",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Navigator Toolkit • VOC Input (Leader Needs)", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Input 2: Top 3 Leader Pain Points", "x": 40, "y": 60, "w": 230, "h": 48, "state": "active" },
              { "id": "c2", "kind": "button", "label": "Download Briefing Pack.pptx", "x": 285, "y": 60, "w": 175, "h": 48, "state": "success" },
              { "id": "c3", "kind": "badge", "label": "Combines Input 1 (Maturity JSON) + Input 2 (Leader Priorities)", "x": 40, "y": 124, "w": 420, "h": 34, "state": "default" }
            ],
            "annotation": {
              "targetX": 285,
              "targetY": 60,
              "targetW": 175,
              "targetH": 48,
              "arrowFromX": 310,
              "arrowFromY": 26,
              "label": "2. Download VOC Briefing Pack.pptx"
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
      "title": "Facilitate the Half-Day Workshop, Write Goals, and Track Monthly",
      "processId": "PRC-002",
      "roleId": "ROL-001",
      "toolIds": ["TOL-005"],
      "estimatedTime": "3 hours (180 mins)",
      "stationLocation": "Navigator Toolkit → Steps 4 to 6",
      "userGoal": "Guide leaders through the 3-part agenda, lock 2–3 measurable goals into the 1-Page Charter, and track monthly in Action Log.",
      "gettingStarted": [
        "Open Workshop Guide on the main projector screen with the Site Leader Sponsor and Lean Core Team.",
        "Have Charter Input and Interactive Roadmap open in adjacent tabs to capture decisions live."
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Run Part 1 (45m) and Part 2 (60m) to connect leader problems to failed Gateways.",
          "detail": "Part 1 locks the Top 3 business problems; Part 2 connects those problems to red Gateway gaps.",
          "toolId": "TOL-005",
          "coachingTip": "Show how fixing Gateway #10 (Pilot Experiments) or #14 (Daily Huddles) directly solves the leader's lead-time or defect headache.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Navigator Step 4 (ALIGN) — 3-Part Workshop Agenda (180 Mins)",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Workshop Guide • Live Half-Day Session Agenda", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Part 1 (45m): Top 3 Leader Needs", "x": 35, "y": 60, "w": 200, "h": 48, "state": "default" },
              { "id": "c2", "kind": "button", "label": "Part 2 (60m): Link to Red Gateways", "x": 250, "y": 60, "w": 210, "h": 48, "state": "active" },
              { "id": "c3", "kind": "badge", "label": "Next: Part 3 (75m) Agree on 2–3 Programme Objectives & Key Results", "x": 35, "y": 124, "w": 425, "h": 34, "state": "default" }
            ],
            "annotation": {
              "targetX": 250,
              "targetY": 60,
              "targetW": 210,
              "targetH": 48,
              "arrowFromX": 295,
              "arrowFromY": 26,
              "label": "1. Link Business Problems to Gateways"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Write 2–3 Objectives and measurable Key Results inside Charter Input during Part 3 (75m).",
          "detail": "Follow the strict goal pattern: [Measure] from [Start] to [Target] by [Date], then place tasks into Q1–Q4.",
          "toolId": "TOL-005",
          "coachingTip": "Never write 'Train 30 people'. Write: 'Increase daily shift huddles solving issues within 48h from 25% to 75% by Q3'.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Navigator Step 5 (CREATE) — Charter Input & Strong Goal Pattern",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Charter Input • Objectives & Key Results (Part 3: 75m)", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Weak: 'Train 30 people' ✗", "x": 35, "y": 60, "w": 175, "h": 48, "state": "danger" },
              { "id": "c2", "kind": "button", "label": "Strong: 'Huddles 25% → 75% by Q3' ✓", "x": 225, "y": 60, "w": 235, "h": 48, "state": "success" },
              { "id": "c3", "kind": "badge", "label": "Also Lock KR 1.1: Raise Gateway #10 from 2/5 to 3/5 across 70% by Q2", "x": 35, "y": 124, "w": 425, "h": 34, "state": "default" }
            ],
            "annotation": {
              "targetX": 225,
              "targetY": 60,
              "targetW": 235,
              "targetH": 48,
              "arrowFromX": 285,
              "arrowFromY": 26,
              "label": "2. Use [Measure] [Start]→[Target] [Date]"
            }
          }
        },
        {
          "stepNumber": 3,
          "action": "Download the 1-Page Charter poster and review progress monthly inside Action Log.",
          "detail": "Open Charter & Roadmaps to export the Final Deck.pptx, then track task completion monthly in Action Log.",
          "toolId": "TOL-005",
          "coachingTip": "Book the first three monthly 30-minute Action Log check-ins before leaders leave the workshop room.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Navigator Step 6 (COMMUNICATE) — 1-Page Charter & Monthly Action Log",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Step 6 • Charter & Roadmaps + Monthly Action Log", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Export 1-Page Charter Poster", "x": 35, "y": 60, "w": 200, "h": 48, "state": "active" },
              { "id": "c2", "kind": "button", "label": "Open Monthly Action Log", "x": 250, "y": 60, "w": 210, "h": 48, "state": "success" },
              { "id": "c3", "kind": "badge", "label": "Sustains Momentum for 6–12 Months Until Next Site Re-Assessment", "x": 35, "y": 124, "w": 425, "h": 34, "state": "default" }
            ],
            "annotation": {
              "targetX": 250,
              "targetY": 60,
              "targetW": 210,
              "targetH": 48,
              "arrowFromX": 295,
              "arrowFromY": 26,
              "label": "3. Track Monthly in Action Log"
            }
          }
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Workshop discussion gets stuck debating a single question score from the site check.",
          "cause": "Re-litigating individual scores instead of focusing on strategic bottlenecks.",
          "fix": "Remind the room that scores were calibrated in pairs; pivot immediately to which red Gateway blocks the leader's top 3 priorities."
        }
      ]
    }
  },
  "questions28": [
    { "id": 1, "text": "Is there a clear business reason driving this Lean Programme?", "theme": "Foundation", "level": 0, "gateway": true },
    { "id": 2, "text": "Is leadership committed and actively invested in being involved?", "theme": "Foundation", "level": 0, "gateway": true },
    { "id": 3, "text": "Has the team or organisation started acquiring foundational Lean knowledge?", "theme": "Foundation", "level": 0, "gateway": true },
    { "id": 4, "text": "How clearly can your team describe what Lean means and how it supports your business goals?", "theme": "Awareness and Training", "level": 0, "gateway": true },
    { "id": 5, "text": "How deeply do team members understand core Lean concepts?", "theme": "Awareness and Training", "level": 0, "gateway": true },
    { "id": 6, "text": "Is there a consistent and active plan to close competency gaps?", "theme": "Awareness and Training", "level": 1, "gateway": false },
    { "id": 7, "text": "Is there a clear Lean structure and defined role ownership within the team?", "theme": "Lean Structure and Strategy", "level": 1, "gateway": true },
    { "id": 8, "text": "How effectively is strategy managed and reviewed at your level?", "theme": "Lean Structure and Strategy", "level": 1, "gateway": true },
    { "id": 9, "text": "How well are strategic objectives cascaded to teams?", "theme": "Lean Structure and Strategy", "level": 2, "gateway": false },
    { "id": 10, "text": "Does the team actively execute structured, pilot experiments?", "theme": "Lean Tools and KPI Alignment", "level": 1, "gateway": true },
    { "id": 11, "text": "Are Lean tools routinely applied and embedded in daily operations?", "theme": "Lean Tools and KPI Alignment", "level": 2, "gateway": false },
    { "id": 12, "text": "Are performance metrics and Lean-relevant KPIs displayed and actively discussed in the work area?", "theme": "Lean Tools and KPI Alignment", "level": 2, "gateway": true },
    { "id": 13, "text": "Is the review of KPIs driven by Lean principles to prevent local optimization?", "theme": "Lean Tools and KPI Alignment", "level": 3, "gateway": false },
    { "id": 14, "text": "Are daily huddles used consistently to raise and resolve issues?", "theme": "Daily Management and CI", "level": 2, "gateway": true },
    { "id": 15, "text": "How effectively are employee suggestions captured and implemented?", "theme": "Daily Management and CI", "level": 2, "gateway": true },
    { "id": 16, "text": "Does the team practice structured reflection?", "theme": "Learning and Value Chain Integration", "level": 2, "gateway": true },
    { "id": 17, "text": "How consistently are lessons learned documented and applied?", "theme": "Learning and Value Chain Integration", "level": 3, "gateway": false },
    { "id": 18, "text": "Does your Lean philosophy extend across your entire value chain?", "theme": "Learning and Value Chain Integration", "level": 3, "gateway": true },
    { "id": 19, "text": "Are internal departmental handoffs integrated to ensure seamless process flow?", "theme": "Learning and Value Chain Integration", "level": 3, "gateway": false },
    { "id": 20, "text": "Do leaders practice the 'Gemba Walk' habit consistently?", "theme": "Leadership & Culture", "level": 2, "gateway": false },
    { "id": 21, "text": "Do leaders use a consistent questioning cycle to identify target conditions and obstacles?", "theme": "Leadership & Culture", "level": 2, "gateway": false },
    { "id": 22, "text": "Is there a culture of psychological safety that encourages safe experimentation?", "theme": "Leadership & Culture", "level": 2, "gateway": true },
    { "id": 23, "text": "Are learnings from reflection used to update standard work?", "theme": "Learning & Scaling", "level": 3, "gateway": false },
    { "id": 24, "text": "Is physical verification used to validate pilot project outcomes?", "theme": "Learning & Scaling", "level": 3, "gateway": false },
    { "id": 25, "text": "Are successful standards systematically scaled across the site?", "theme": "Learning & Scaling", "level": 3, "gateway": true },
    { "id": 26, "text": "Do teams from different functions collaborate to improve shared processes?", "theme": "Collaboration & Feedback", "level": 2, "gateway": true },
    { "id": 27, "text": "Are joint improvement projects executed with external partners?", "theme": "Collaboration & Feedback", "level": 4, "gateway": true },
    { "id": 28, "text": "How consistently are success stories shared and replicated?", "theme": "Communication", "level": 1, "gateway": false }
  ]
}
;
