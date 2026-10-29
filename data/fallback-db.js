window.FALLBACK_GUIDES_DB = {
  "meta": {
    "organization": "Siemens Energy • Lean@GS",
    "programme": "Maturity Assessment & Navigator Workshop",
    "version": "6.1.1 / 2.4.7",
    "strictWordLimit": 20,
    "filingRule": "Save finished .csv and .json files in '600 Maturity Submissions'. Never move or delete files in that folder.",
    "liveTools": [
      {
        "id": "LIVE-PORTAL",
        "name": "GS Lean Maturity Portal",
        "shortLabel": "GS Lean Maturity ↗",
        "url": "https://megblcntpvc72.ad101.siemens-energy.net/gs-lean-maturity/",
        "description": "Standalone 28-Question Assessment & Dual-Lock v1.0 Scoring Engine"
      },
      {
        "id": "LIVE-HUB",
        "name": "PM Maturity Hub",
        "shortLabel": "PM Maturity Hub ↗",
        "url": "https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/",
        "description": "Phase 1 Assess, Score Explainer, Metro Journey, 4 Pillars & Strategy Builder"
      },
      {
        "id": "LIVE-NAVIGATOR",
        "name": "Navigator Toolkit",
        "shortLabel": "Navigator Toolkit ↗",
        "url": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
        "description": "Analysis Report, VOC Input, Workshop Guide, 1-Page Charter & Action Log"
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
    "TOL-001": {
      "id": "TOL-001",
      "name": "Maturity Assessment & Explainer",
      "suite": "PM Maturity Hub",
      "versionBadge": "",
      "category": "Phase 1: Assess",
      "purpose": "Score all 28 site Lean questions using the New Standard rubric, inspect Maturity Explainer flashcards, and click 'Export Assessment (.json & .csv)'.",
      "accessUrl": "PM Maturity Hub → Phase 1: Assess (or GS Lean Maturity Portal)",
      "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/",
      "secondaryLiveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/gs-lean-maturity/",
      "secondaryLiveLabel": "Open GS Lean Maturity Portal ↗",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "First-Time Assessment: Complete with your Lean Core Team partner to learn the 28-question rubric and evidence standard.",
        "Ongoing Assessments: Complete directly with your Site Leadership Team as a capability self-assessment (not an audit; Core Team optional).",
        "Confirm the top-right standard toggle is set to 'New Standard' and fill out the User Data Plate (Project/Department Name, Org, Assessed By, For OE Local PM, Scope)."
      ],
      "quickCommands": [
        {
          "goal": "Pass a starred Gateway question (★ Gold Border)",
          "command": "Score >= 3 with real workplace proof across ~70% of site teams"
        },
        {
          "goal": "Export & archive completed assessment files",
          "command": "Click 'Export Assessment (.json & .csv)' → Save inside 600 Maturity Submissions"
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
      "versionBadge": "",
      "category": "Phase 1 & Phase 2: Visualize",
      "purpose": "Understand how foundation Gateway questions affect your site level in Score Explainer, see where the train stops on Metro Journey, and view The 4 Pillars (Live & Static).",
      "accessUrl": "PM Maturity Hub → Score Explainer & Phase 2: Visualize",
      "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Click 'Load JSON / CSV' in the left sidebar of PM Maturity Hub (or score directly in Maturity Assessment—your assessment syncs automatically).",
        "If uploading a legacy Excel .csv file fails, run it through 'CSV to JSON Fixer' under Phase 4: Utilities."
      ],
      "quickCommands": [
        {
          "goal": "Capped Score Formula",
          "command": "Compressed = OperatingLevel + [(RawValidAvg - 1) / 4] • Final = min(RawValidAvg, Compressed)"
        },
        {
          "goal": "Visualise Gateway roadblocks for leadership",
          "command": "Open 'Metro Journey' & 'The 4 Pillars (Live)' under Phase 2: Visualize"
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
    "TOL-003": {
      "id": "TOL-003",
      "name": "Strategy Builder, Simulator & CSV to JSON Fixer",
      "suite": "PM Maturity Hub",
      "versionBadge": "",
      "category": "Phase 3: Plan & Simulate + Phase 4: Utilities",
      "purpose": "Select Light, Standard, Intense, or Custom initiative templates for failed Gateways in Strategy Builder and model score improvements in the Simulator Sandbox.",
      "accessUrl": "PM Maturity Hub → Phase 3: Plan & Simulate",
      "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Load your site's .json assessment file via 'Load JSON / CSV' in the PM Maturity Hub sidebar."
      ],
      "quickCommands": [
        {
          "goal": "Fix broken Excel semicolon CSV exports",
          "command": "Open Phase 4: Utilities → 'CSV to JSON Fixer' → Convert ';' to clean .json"
        },
        {
          "goal": "Build a targeted local action plan & test score impact",
          "command": "Open 'Strategy Builder' → Select Light/Standard/Intense template → Test sliders in 'Simulator'"
        }
      ],
      "troubleshooting": [
        {
          "symptom": "CSV file fails to load into Score Explainer or Strategy Builder.",
          "cause": "Regional Excel settings saved semicolons (;) instead of commas (,).",
          "fix": "Open 'CSV to JSON Fixer' in Utilities and convert the file into a clean .json file."
        }
      ]
    },
    "TOL-004": {
      "id": "TOL-004",
      "name": "Analysis Report & VOC Input",
      "suite": "Navigator Toolkit",
      "versionBadge": "",
      "category": "Assess, Analyze & Prepare",
      "purpose": "Turn your maturity capability gaps and leadership interview notes into a focused briefing pack for your Navigator Workshop.",
      "accessUrl": "Navigator Toolkit → Analysis Report / VOC Input",
      "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Click 'Upload Assessment (.json / .csv)' inside Analysis Report (or 'Load Session (.leansession)' in the left sidebar).",
        "Schedule 20-minute pre-workshop interviews with site leaders and ask the primary guiding question in VOC Input."
      ],
      "quickCommands": [
        {
          "goal": "Generate executive gap slides & radar chart",
          "command": "Analysis Report → 'Upload Assessment (.json / .csv)' → Click 'Export to PowerPoint'"
        },
        {
          "goal": "Capture Voice of the Customer (VOC) interviews",
          "command": "VOC Input → Record insights → Click 'Export VOC to CSV' & 'Save Session (.leansession)'"
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
      "name": "Workshop Guide, Charter Input, Charter & Roadmaps + Action Log",
      "suite": "Navigator Toolkit",
      "versionBadge": "",
      "category": "Align, Create & Communicate",
      "purpose": "Facilitate the 3-module alignment workshop, draft Top 3 Leadership Priorities and 2–3 focus initiatives in Charter Input, export the 1-Page Charter, and track owners in Action Log.",
      "accessUrl": "Navigator Toolkit → Workshop Guide / Charter Input / Charter & Roadmaps / Action Log",
      "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Load your full workshop session via 'Load Session (.leansession)' in the Navigator Toolkit sidebar so Analysis and VOC insights auto-populate Charter Input."
      ],
      "quickCommands": [
        {
          "goal": "Write a strong, measurable Key Result in Charter Input",
          "command": "Pattern: [Measure] from [Start] to [Target] by [Date] (e.g., 25% to 75% by Q3)"
        },
        {
          "goal": "Backup full workshop state & export action matrix",
          "command": "Click 'Save Session (.leansession)' in sidebar + 'Export Action Matrix (CSV)' in Action Log"
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
    "TOL-006": {
      "id": "TOL-006",
      "name": "Visual Stand-Up Board (Safety, Quality, Delivery, Cost)",
      "suite": "Daily Management Suite",
      "versionBadge": "",
      "category": "Tier 1 Cell Operations",
      "purpose": "Display shift targets vs. actuals in red and green, log frontline containment actions, and flag cross-team blockers.",
      "accessUrl": "Work Area Stand-Up Board / Digital Tier 1 Hub",
      "ownerRoleId": "ROL-004",
      "gettingStarted": [
        "Update yesterday's safety, quality, delivery, and cost numbers 5 minutes before the shift horn.",
        "Have red and green dry-erase markers or the digital Tier 1 touch screen unlocked."
      ],
      "quickCommands": [
        {
          "goal": "Mark a missed shift target",
          "command": "Colour the cell Red + Write a 1-line root cause + Assign a 24h owner"
        },
        {
          "goal": "Flag a blocker for Tier 2 escalation",
          "command": "Attach a Red Escalation Tag when an issue breaches the 2-hour cell limit"
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Tier 1 stand-up drags past 15 minutes into a 40-minute technical debate.",
          "cause": "Engineers trying to solve complex root causes at the stand-up board.",
          "fix": "Use the 60-Second Rule: log immediate containment on the board and book a separate 3-person problem-solving huddle right after."
        }
      ]
    },
    "TOL-007": {
      "id": "TOL-007",
      "name": "Escalation Triage Filter & 24-Hour Countermeasure Log",
      "suite": "Daily Management Suite",
      "versionBadge": "",
      "category": "Tier 2 Cross-Department Escalation",
      "purpose": "Filter shift blockers down to a maximum of 3 critical escalations for Tier 2 and assign 24-hour leadership countermeasures.",
      "accessUrl": "Tier 2 Operations Board → Escalation & Countermeasure Log",
      "ownerRoleId": "ROL-001",
      "gettingStarted": [
        "Collect red escalation cards from all Tier 1 boards at least 15 minutes before the 09:00 Tier 2 huddle.",
        "Ensure engineering, quality, and warehouse leads are present at the Tier 2 board."
      ],
      "quickCommands": [
        {
          "goal": "Filter Tier 1 red tags before Tier 2",
          "command": "Keep only cross-department blockers -> Cap at Max 3 Escalations per shift"
        },
        {
          "goal": "Close the loop back to the shop floor",
          "command": "Write the agreed 24-hour countermeasure and owner directly on the Tier 1 board before 10:00"
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Team leaders stop raising red blockers because nothing changes after Tier 2.",
          "cause": "Escalated items disappear into management emails without feedback to the cell.",
          "fix": "Enforce the 10:00 AM Feedback Rule: the Local Programme Manager walks back to the cell board to confirm the assigned owner and fix time."
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
      "troubleshooting": [
        {
          "symptom": "Tea tastes like dishwater.",
          "cause": "Brewed for 4 seconds or milk poured in before the teabag steeped.",
          "fix": "Leave teabag in boiling water for 3 full minutes before adding milk."
        }
      ]
    }
  },
  "processes": {
    "PRC-001": {
      "id": "PRC-001",
      "title": "Check Your Site's Current Score",
      "appName": "PM Maturity Hub",
      "versionBadge": "",
      "durationBadge": "90 mins",
      "whenToUse": "1st Time: With a Lean Core Team partner • Ongoing: With your Site Leadership Team (Core Team optional).",
      "cardOutput": "Completed 28-question capability baseline & focused 2–3 gap analysis.",
      "ctaLabel": "Start Stage 1 Assessment Guide",
      "category": "Stages 1 & 2: Capability Baseline & Analysis",
      "userGoal": "Establish your site's baseline Lean capability across all 28 questions, verify real workplace proof across ~70% of teams, and identify 2–3 priority Gateway gaps.",
      "trigger": "First-time site baseline (with Core Team partner) or ongoing leadership self-assessment before a Navigator Workshop.",
      "finalOutcome": "Exported Assessment (.json & .csv) archived in '600 Maturity Submissions' plus Score Explainer, Metro Journey, and Strategy Builder plan.",
      "valueAddCoaching": "Treat the assessment as a helpful self-assessment of capability, never an audit. Lowering an old score when a habit stops is a win because it directs help to the real bottleneck.",
      "raci": {
        "responsible": "ROL-001",
        "accountable": "ROL-003",
        "consulted": ["ROL-002"],
        "informed": ["ROL-003"]
      },
      "stages": [
        {
          "stageNumber": 1,
          "name": "Stage 1: Complete the Site Maturity Assessment",
          "sopId": "SOP-001",
          "toolIds": ["TOL-001"],
          "summary": "Score all 28 questions using the 70% site rule (1st time with Core Team partner; ongoing with Site Leadership Team)."
        },
        {
          "stageNumber": 2,
          "name": "Stage 2: Analysis — Strengths, Gaps & Gateway Caps",
          "sopId": "SOP-002",
          "toolIds": ["TOL-002", "TOL-003"],
          "summary": "Inspect Dual-Lock v1.0 Gateway caps in Score Explainer, view Metro Journey, and select 2–3 focus actions in Strategy Builder."
        }
      ]
    },
    "PRC-002": {
      "id": "PRC-002",
      "title": "Run the Navigator Workshop, Charter & Action Plan",
      "appName": "Navigator Toolkit",
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
        "consulted": ["ROL-002"],
        "informed": ["ROL-002"]
      },
      "stages": [
        {
          "stageNumber": 1,
          "name": "Stage 3: Voice of the Customer (VOC) & Analysis Report",
          "sopId": "SOP-003",
          "toolIds": ["TOL-004"],
          "summary": "Upload your assessment into Analysis Report and capture leadership interviews inside VOC Input."
        },
        {
          "stageNumber": 2,
          "name": "Stages 4–6: Navigator Workshop, 1-Page Charter & Action Plan",
          "sopId": "SOP-004",
          "toolIds": ["TOL-005"],
          "summary": "Facilitate the 3-module Workshop Guide, draft 2–3 focus initiatives in Charter Input, and assign owners in Action Log."
        }
      ]
    },
    "PRC-003": {
      "id": "PRC-003",
      "playbookId": "PLB-002",
      "title": "Run Tier 1 Cell Stand-Up & Escalate to Tier 2",
      "appName": "Daily Management Suite",
      "versionBadge": "",
      "durationBadge": "15 mins daily",
      "whenToUse": "At the start of every shift across all operational cells.",
      "cardOutput": "Updated SQDC board, 24-hour containment owners & max 3 Tier 2 escalations.",
      "ctaLabel": "Start Tier 1 Stand-Up Guide",
      "category": "Tiered Daily Management",
      "userGoal": "Run a crisp 15-minute shift stand-up that spots safety, quality, delivery, and cost misses immediately and escalates cross-team blockers within 2 hours.",
      "trigger": "Start of shift (5 minutes before shift handover horn) and 09:00 AM Tier 2 escalation review.",
      "finalOutcome": "Every red metric has a named 24-hour containment owner and cross-department blockers are resolved at Tier 2 with feedback to the cell by 10:00 AM.",
      "valueAddCoaching": "A stand-up board is an action trigger, not a wallpaper report. Keep discussion strictly on red misses—green metrics take five seconds.",
      "raci": {
        "responsible": "ROL-004",
        "accountable": "ROL-001",
        "consulted": ["ROL-002"],
        "informed": ["ROL-003"]
      },
      "stages": [
        {
          "stageNumber": 1,
          "name": "Prep Visual Board & Run 15-Minute Tier 1 Stand-Up",
          "sopId": "SOP-005",
          "toolIds": ["TOL-006"],
          "summary": "Update shift actuals 5 minutes before shift start and run the 15-minute cell stand-up focused on red misses."
        },
        {
          "stageNumber": 2,
          "name": "Triage Blockers to Tier 2 & Assign 24-Hour Countermeasures",
          "sopId": "SOP-006",
          "toolIds": ["TOL-007"],
          "summary": "Filter cross-department blockers down to at most 3 red tags for Tier 2 and close the loop back to the shop floor."
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
        "consulted": ["ROL-002"],
        "informed": ["ROL-004"]
      },
      "stages": [
        {
          "stageNumber": 1,
          "name": "Stages 1–3: Check Kitchen Baseline, Spot Gaps & Take Orders",
          "sopId": "SOP-007",
          "toolIds": ["TOL-008"],
          "summary": "Check water, milk, and clean mugs first, then capture what colleagues actually want to drink."
        },
        {
          "stageNumber": 2,
          "name": "Stages 4–6: Match Orders, Lock Tray Charter & Deliver Drinks",
          "sopId": "SOP-008",
          "toolIds": ["TOL-008"],
          "summary": "Combine orders with real fridge supplies, lock a 2–3 mug batch on the tray, and brew for 3 full minutes."
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
      "toolIds": ["TOL-001"],
      "estimatedTime": "90 mins",
      "stationLocation": "PM Maturity Hub → Phase 1: Assess → Maturity Assessment",
      "kitBag": {
        "leadRole": "Lead: Local Programme Manager (LPM) with Site Leadership Team",
        "supportRole": "1st time: with Lean Core Team partner; Ongoing: Core Team optional",
        "mandatoryStatus": "Stage 1 • Baseline Capability",
        "inputNeeded": "Workplace Evidence (~70% of Site Teams)",
        "outputProduced": "Baseline Lean Capability Scorecard (28 Questions)"
      },
      "userGoal": "Establish your site's baseline Lean capability across all 28 questions—completed with a Lean Core Team partner on your first assessment to learn the tool, and directly with your Site Leadership Team on ongoing assessments.",
      "gettingStarted": [
        "First-Time Assessment (Learning the Tool): Complete the assessment together with a Lean Core Team partner to learn how the 28 questions and workplace evidence work.",
        "Ongoing Assessments (Leadership Self-Assessment): Complete the assessment directly with your Site Leadership Team as a self-assessment of capability (not an audit), with Core Team support available when needed.",
        "Confirm the top-right toggle is set to 'New Standard', fill the User Data Plate (Project/Department Name, Org, Date, Assessed By, For OE Local PM, Scope), and open Maturity Explainer flashcards alongside the 28 cards."
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Select 'New Standard', fill the User Data Plate, and review all 28 questions with Maturity Explainer.",
          "detail": "First-time assessments: complete with your Lean Core Team partner to learn the tool. Ongoing assessments: complete directly with your Site Leadership Team as a self-assessment.",
          "toolId": "TOL-001",
          "coachingTip": "Treat scoring as an open self-assessment of capability, never an audit—the goal is to see where teams need support, not to chase a higher score.",
          "visual": {
            "type": "ui-mockup",
            "caption": "PM Maturity Hub (maturity.html) — New Standard Toggle & User Data Plate",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Interactive Lean Maturity Assessment • [New Standard ✓]", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "b1", "kind": "card", "label": "1st Time: LPM + Core Team (Learn Tool)", "x": 35, "y": 58, "w": 210, "h": 50, "state": "active" },
              { "id": "b2", "kind": "button", "label": "Ongoing: LPM + Leadership Team", "x": 255, "y": 58, "w": 205, "h": 50, "state": "success" },
              { "id": "b3", "kind": "badge", "label": "User Data Plate: Project/Dept Name • Org • Assessed By • For OE Local PM", "x": 35, "y": 124, "w": 425, "h": 34, "state": "default" }
            ],
            "annotation": {
              "targetX": 255,
              "targetY": 58,
              "targetW": 205,
              "targetH": 50,
              "arrowFromX": 300,
              "arrowFromY": 26,
              "label": "1. Self-Assess Under 'New Standard'"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Apply the 70% site rule before awarding any score of 3, 4, or 5.",
          "detail": "Gold-bordered Gateway cards (★) and standard cards must work across roughly 70% of the site with real boards and logs to score 3 or higher.",
          "toolId": "TOL-001",
          "coachingTip": "One enthusiastic pilot area or a written slide deck that nobody uses scores a 2 (Just Starting), never a 3.",
          "visual": {
            "type": "ui-mockup",
            "caption": "28-Card Grid — Gold Gateway Border (★) & Petrol Evaluated Border",
            "elements": [
              { "id": "w1", "kind": "window", "label": "1–5 Flashcard Rubric • Passing Gold Gateway Cards (★)", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
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
          "action": "Click 'View Dashboard' to review draft ratings with leaders and update only with real proof.",
          "detail": "Walk leaders through the 10-theme radar chart and adjust a card rating only if physical workplace evidence proves it.",
          "toolId": "TOL-001",
          "coachingTip": "If a habit scored 4 last year but stopped working, lower the score openly so the site gets support to rebuild it.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Header Action Bar — 'View Dashboard' & 'View Key' Calibration",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Assessment Dashboard • Radar Chart & Evidence Check", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Click: [View Dashboard] Radar", "x": 40, "y": 60, "w": 200, "h": 48, "state": "default" },
              { "id": "c2", "kind": "button", "label": "Update Card Only With Proof", "x": 255, "y": 60, "w": 205, "h": 48, "state": "active" },
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
          "action": "Click 'Export Assessment (.json & .csv)' and save both files inside 600 Maturity Submissions.",
          "detail": "Never move, rename, or delete historical files inside the 600 Maturity Submissions folder.",
          "toolId": "TOL-001",
          "coachingTip": "The exported <Org>_<Date>_Lean_Assessment.json file automatically strips image bloat and loads cleanly into both PM Maturity Hub and Navigator Toolkit.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Header Button — 'Export Assessment (.json & .csv)'",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Export & Archive Official Submission (Compact JSON + CSV)", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "button", "label": "Export Assessment (.json & .csv)", "x": 35, "y": 60, "w": 220, "h": 48, "state": "success" },
              { "id": "c2", "kind": "card", "label": "Folder: 600 Maturity Submissions", "x": 268, "y": 60, "w": 192, "h": 48, "state": "active" },
              { "id": "c3", "kind": "badge", "label": "ARCHIVE RULE: Never move or delete files in 600 Maturity Submissions", "x": 35, "y": 124, "w": 425, "h": 34, "state": "default" }
            ],
            "annotation": {
              "targetX": 35,
              "targetY": 60,
              "targetW": 220,
              "targetH": 48,
              "arrowFromX": 145,
              "arrowFromY": 26,
              "label": "4. Click 'Export Assessment (.json & .csv)'"
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
      "title": "Stage 2: Analysis — Understand Strengths, Gaps & Gateway Caps",
      "processId": "PRC-001",
      "roleId": "ROL-001",
      "toolIds": ["TOL-002", "TOL-003"],
      "estimatedTime": "45 mins",
      "stationLocation": "PM Maturity Hub → Score Explainer, Phase 2 (Visualize) & Phase 3 (Plan)",
      "kitBag": {
        "leadRole": "Lead: Local Programme Manager (LPM)",
        "supportRole": "Optional Support: Lean Core Team partner",
        "mandatoryStatus": "Stage 2 • Capability Analysis",
        "inputNeeded": "Completed Site Maturity Assessment",
        "outputProduced": "Focused View of 2–3 Priority Capability Gaps & Foundation Gateway Caps"
      },
      "userGoal": "Inspect how the Dual-Lock v1.0 engine evaluates your 17 starred Gateways, visualise roadblocks on the Metro Journey map, and focus on 2–3 priority capability gaps.",
      "gettingStarted": [
        "Click 'Load JSON / CSV' in the left sidebar of PM Maturity Hub to load your saved assessment into all Hub tools at once.",
        "Open Score Explainer (Phase 1), Metro Journey & The 4 Pillars (Phase 2), and Strategy Builder & Simulator (Phase 3)."
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Click 'Load JSON / CSV' and open Score Explainer to see which Gateways cap your level.",
          "detail": "Score Explainer walks through the 4-step Dual-Lock v1.0 check: Gateway Ceiling, Blinkers Filter, Raw Valid Average, and Compressed Score.",
          "toolId": "TOL-002",
          "coachingTip": "If Gateway #10 (Pilot Experiments) scores 2/5, your Operating Level is locked at Level 1 (e.g., 1.6/4.0) even if Level 2 questions score 4.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Score Explainer (lean_score_explainer.html) — Dual-Lock v1.0 Breakdown",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Score Explainer • Compressed = OperatingLevel + [(RawValidAvg - 1) / 4]", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Level 0 Gateways (Q1–Q5 >= 3) ✓", "x": 35, "y": 58, "w": 195, "h": 48, "state": "success" },
              { "id": "c2", "kind": "button", "label": "Gateway Q10 = 2/5 ✗ (Ceiling L1)", "x": 245, "y": 58, "w": 215, "h": 48, "state": "danger" },
              { "id": "c3", "kind": "badge", "label": "Blinkers Filter Active: Levels 2–4 Ignored Until Q10 >= 3 • Final: 1.6", "x": 35, "y": 122, "w": 425, "h": 36, "state": "active" }
            ],
            "annotation": {
              "targetX": 245,
              "targetY": 58,
              "targetW": 215,
              "targetH": 48,
              "arrowFromX": 295,
              "arrowFromY": 26,
              "label": "1. Inspect Gateway Ceiling & Cap"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Open Metro Journey and The 4 Pillars (Live) to show leaders where the train stops.",
          "detail": "Metro Journey displays your Digital Twin train stopping at the exact failed Gateway station alongside The 4 Pillars diagnostic view.",
          "toolId": "TOL-002",
          "coachingTip": "Leaders grasp the subway map in ten seconds—point directly to the red station blocking the train from advancing.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Phase 2: Visualize — Metro Journey & The 4 Pillars (Live)",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Phase 2: Visualize • Metro Journey & The 4 Pillars (Live)", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Metro Line: L0 PASS ──● Q10 STOP", "x": 35, "y": 60, "w": 235, "h": 48, "state": "active" },
              { "id": "c2", "kind": "button", "label": "The 4 Pillars (Live) View", "x": 285, "y": 60, "w": 175, "h": 48, "state": "success" },
              { "id": "c3", "kind": "badge", "label": "4 Pillars: Strategy & Alignment • Leadership • Daily Execution • Scaling", "x": 35, "y": 124, "w": 425, "h": 34, "state": "default" }
            ],
            "annotation": {
              "targetX": 285,
              "targetY": 60,
              "targetW": 175,
              "targetH": 48,
              "arrowFromX": 315,
              "arrowFromY": 26,
              "label": "2. View Metro Journey & 4 Pillars"
            }
          }
        },
        {
          "stepNumber": 3,
          "action": "Select initiative templates inside Strategy Builder, test scores in Simulator, and export your local plan.",
          "detail": "Choose Light, Standard, Intense, or Custom initiative cards for 2–3 priority Gateway gaps and model the score lift in Simulator.",
          "toolId": "TOL-003",
          "coachingTip": "Keep analysis focused on 2 to 3 key capability actions at a time—raising Q10 from 2 to 3 immediately unlocks all Level-2 questions.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Phase 3: Plan & Simulate — Strategy Builder & Simulator Sandbox",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Strategy Builder & Simulator (Lean_Strategy_builder.html)", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Gap Q10 → [Standard Template ✓]", "x": 35, "y": 60, "w": 230, "h": 48, "state": "active" },
              { "id": "c2", "kind": "button", "label": "Test in Simulator Sandbox", "x": 280, "y": 60, "w": 180, "h": 48, "state": "success" },
              { "id": "c3", "kind": "badge", "label": "Simulator Sliders: Fixing Q10 Unlocks Level 2 Ceiling (1.6 → 2.6)", "x": 35, "y": 124, "w": 425, "h": 34, "state": "default" }
            ],
            "annotation": {
              "targetX": 280,
              "targetY": 60,
              "targetW": 180,
              "targetH": 48,
              "arrowFromX": 315,
              "arrowFromY": 26,
              "label": "3. Pick Template & Test Simulator"
            }
          }
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Uploading the Excel .csv file into Score Explainer gives a format error.",
          "cause": "Excel saved semicolons (;) instead of commas (,).",
          "fix": "Click 'CSV to JSON Fixer' under Phase 4: Utilities in the PM Maturity Hub to convert the file to a clean .json."
        }
      ]
    },
    "SOP-003": {
      "id": "SOP-003",
      "title": "Stage 3: Voice of the Customer (VOC) — Understand Business Priorities",
      "processId": "PRC-002",
      "roleId": "ROL-001",
      "toolIds": ["TOL-004"],
      "estimatedTime": "2 hours (Pre-Work)",
      "stationLocation": "Navigator Toolkit → Analysis Report & VOC Input",
      "kitBag": {
        "leadRole": "Lead: Local Programme Manager (LPM) with Site Leaders",
        "supportRole": "Optional Support: Lean Core Team",
        "mandatoryStatus": "Stage 3 • Voice of the Customer (VOC)",
        "inputNeeded": "Leader & Stakeholder Interviews",
        "outputProduced": "Clear Business Priorities & Leadership Pain Points (VOC Entries & Session Backup)"
      },
      "userGoal": "Prepare the two principal inputs for the Navigator Workshop: the 10-stage Maturity Analysis Report (Input 1: Capability) and the Voice of the Customer executive interviews (Input 2: Business Need).",
      "gettingStarted": [
        "Open Navigator Toolkit and click 'Upload Assessment (.json / .csv)' on the Analysis Report page.",
        "Schedule short 1-on-1 interviews with site leaders and open 'VOC Input' to ask the primary guiding question: 'If you could fix one thing in the next 12 months to significantly improve operational performance and flow, what would it be?'"
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Click 'Upload Assessment (.json / .csv)' in Analysis Report and click 'Export to PowerPoint'.",
          "detail": "Enter 'Analysed By' and 'Analysis Date', inspect the 10 roadmap stages (or launch the optional Co-pilot AI Agent), and export your slides.",
          "toolId": "TOL-004",
          "coachingTip": "Highlight the exact 2 or 3 red Gateway questions that block the next maturity level so leaders don't drown in all 28 questions.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Navigator Toolkit (analysis.html) — Upload Assessment & Export PowerPoint",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Lean Maturity Analysis • 10-Stage Diagnostic & Co-pilot Agent", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Upload Assessment (.json / .csv)", "x": 35, "y": 60, "w": 230, "h": 48, "state": "active" },
              { "id": "c2", "kind": "button", "label": "Export to PowerPoint", "x": 280, "y": 60, "w": 180, "h": 48, "state": "success" },
              { "id": "c3", "kind": "badge", "label": "Also Available: View Action Report • Export Full Report (PDF) • Next: VOC →", "x": 35, "y": 124, "w": 425, "h": 34, "state": "default" }
            ],
            "annotation": {
              "targetX": 280,
              "targetY": 60,
              "targetW": 180,
              "targetH": 48,
              "arrowFromX": 310,
              "arrowFromY": 26,
              "label": "1. Upload JSON & Export PowerPoint"
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
            "type": "ui-mockup",
            "caption": "Navigator Toolkit (voc.html) — Voice of Customer & Save Session (.leansession)",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Voice of Customer (VOC) • Pre-Workshop Diagnostic", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Add Interview Entry (VOC Input)", "x": 35, "y": 60, "w": 215, "h": 48, "state": "active" },
              { "id": "c2", "kind": "button", "label": "Save Session (.leansession)", "x": 265, "y": 60, "w": 195, "h": 48, "state": "success" },
              { "id": "c3", "kind": "badge", "label": "Auto-Syncs VOC Entries into Charter Input & Exports VOC CSV", "x": 35, "y": 124, "w": 425, "h": 34, "state": "default" }
            ],
            "annotation": {
              "targetX": 265,
              "targetY": 60,
              "targetW": 195,
              "targetH": 48,
              "arrowFromX": 305,
              "arrowFromY": 26,
              "label": "2. Save Session (.leansession)"
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
      "toolIds": ["TOL-005"],
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
            "type": "ui-mockup",
            "caption": "Stage 4 (Workshop Guide) — Connecting Business Need + Lean Capability",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Workshop Guide (workshop.html) • 3-Module Facilitator Agenda", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Mod 1: Top 3 VOC Business Needs", "x": 35, "y": 60, "w": 200, "h": 48, "state": "default" },
              { "id": "c2", "kind": "button", "label": "Mod 2: Connect to Red Gateways", "x": 250, "y": 60, "w": 210, "h": 48, "state": "active" },
              { "id": "c3", "kind": "badge", "label": "Mod 3: Draft 2–3 Focus Objectives & Key Results in Charter Input", "x": 35, "y": 124, "w": 425, "h": 34, "state": "default" }
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
          "action": "Enter Top 3 Leadership Priorities and 2–3 measurable Key Results inside Charter Input.",
          "detail": "Use the left 'Recommended Actions' reference panel in Charter Input and follow: [Measure] from [Start] to [Target] by [Date].",
          "toolId": "TOL-005",
          "coachingTip": "All fields in Charter Input auto-save to your session and immediately populate the executive Charter & Roadmaps infographic.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Stage 5 (charter_input.html) — Leadership Priorities & Measurable OKRs",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Navigator Charter Input • Priorities, Gap & OKRs (Auto-Save)", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Left Panel: Recommended Actions", "x": 35, "y": 60, "w": 185, "h": 48, "state": "default" },
              { "id": "c2", "kind": "button", "label": "OKR: 'Huddles 25% → 75% by Q3' ✓", "x": 235, "y": 60, "w": 225, "h": 48, "state": "success" },
              { "id": "c3", "kind": "badge", "label": "Focus on 2–3 Key Initiatives • Auto-populates Charter & Roadmaps", "x": 35, "y": 124, "w": 425, "h": 34, "state": "default" }
            ],
            "annotation": {
              "targetX": 235,
              "targetY": 60,
              "targetW": 225,
              "targetH": 48,
              "arrowFromX": 285,
              "arrowFromY": 26,
              "label": "2. Draft 2–3 Measurable OKRs"
            }
          }
        },
        {
          "stepNumber": 3,
          "action": "Open Charter & Roadmaps to export slides, then assign owners and dates in Action Log.",
          "detail": "Export the 1-Page Charter PowerPoint, assign single-point Owners and Target Due Dates in Action Log, and click 'Export Action Matrix (CSV)'.",
          "toolId": "TOL-005",
          "coachingTip": "Click 'Save Session (.leansession)' in the sidebar before leaving the room so the entire workshop state is backed up in one file.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Stage 6 (charter.html & action_log.html) — Charter & Ownership Matrix",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Charter & Roadmaps + Action Log & Ownership Matrix", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Charter & Roadmaps (Export PPTX)", "x": 35, "y": 60, "w": 205, "h": 48, "state": "active" },
              { "id": "c2", "kind": "button", "label": "Export Action Matrix (CSV)", "x": 255, "y": 60, "w": 205, "h": 48, "state": "success" },
              { "id": "c3", "kind": "badge", "label": "Backup Full Workshop: Click 'Save Session (.leansession)' in Sidebar", "x": 35, "y": 124, "w": 425, "h": 34, "state": "default" }
            ],
            "annotation": {
              "targetX": 255,
              "targetY": 60,
              "targetW": 205,
              "targetH": 48,
              "arrowFromX": 295,
              "arrowFromY": 26,
              "label": "3. Assign Owners & Export Matrix"
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
      "title": "Prep Visual Board Metrics and Run the 15-Minute Tier 1 Stand-Up",
      "processId": "PRC-003",
      "roleId": "ROL-004",
      "toolIds": ["TOL-006"],
      "estimatedTime": "15 mins",
      "stationLocation": "Cell SQDC Stand-Up Board (5 mins before shift)",
      "kitBag": {
        "leadRole": "Frontline Team Leader",
        "supportRole": "Local Programme Manager (LPM)",
        "mandatoryStatus": "Stages 1–2 • Daily Shift Stand-Up",
        "inputNeeded": "Shift Handover Log",
        "outputProduced": "Updated SQDC Board & Immediate Containment Actions"
      },
      "userGoal": "Update Safety, Quality, Delivery, and Cost metrics before shift start and run a sharp 15-minute stand-up that assigns containment actions to every red miss.",
      "gettingStarted": [
        "Arrive at the cell board 5 minutes before the shift handover horn with the outgoing shift log.",
        "Ensure green and red markers (or digital status tiles) are ready before calling the team together."
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Write yesterday's safety, quality, delivery, and cost numbers on the board before shift starts.",
          "detail": "Mark each metric green when it meets target or red when it misses target.",
          "toolId": "TOL-006",
          "coachingTip": "Never waste stand-up time writing numbers while the team watches—have every metric colored red or green 5 minutes early.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Stage 1 — Prep Visual SQDC Board 5 Minutes Before Shift",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Tier 1 Visual Stand-Up Board • Pre-Shift Check (-5 Mins)", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Safety: 0 Incidents (GREEN ✓)", "x": 35, "y": 58, "w": 200, "h": 48, "state": "success" },
              { "id": "c2", "kind": "button", "label": "Delivery: -2 Units Behind (RED ✗)", "x": 250, "y": 58, "w": 210, "h": 48, "state": "danger" },
              { "id": "c3", "kind": "badge", "label": "Rule: All SQDC cells must be colored Red or Green before the horn sounds", "x": 35, "y": 122, "w": 425, "h": 36, "state": "default" }
            ],
            "annotation": {
              "targetX": 250,
              "targetY": 58,
              "targetW": 210,
              "targetH": 48,
              "arrowFromX": 295,
              "arrowFromY": 26,
              "label": "1. Mark Missed Targets in Red Early"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Walk through Safety, Quality, Delivery, and Cost in 15 minutes focusing on red misses.",
          "detail": "Spend five seconds acknowledging green targets and focus discussion on red misses and today's risks.",
          "toolId": "TOL-006",
          "coachingTip": "Stand physically in front of the board—when the leader touches the red number on the board, the whole team focuses on the gap.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Stage 2 — 15-Minute Tier 1 Stand-Up Cadence",
            "elements": [
              { "id": "w1", "kind": "window", "label": "15-Minute Tier 1 Huddle • Focus on Red Exceptions", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Green Targets: 5-Sec Check ✓", "x": 35, "y": 58, "w": 195, "h": 48, "state": "default" },
              { "id": "c2", "kind": "button", "label": "Red Misses: Log Containment Now", "x": 245, "y": 58, "w": 215, "h": 48, "state": "active" },
              { "id": "c3", "kind": "badge", "label": "Strict Timebox: 15 Minutes Max • Park deep root-cause debates for offline", "x": 35, "y": 122, "w": 425, "h": 36, "state": "default" }
            ],
            "annotation": {
              "targetX": 245,
              "targetY": 58,
              "targetW": 215,
              "targetH": 48,
              "arrowFromX": 295,
              "arrowFromY": 26,
              "label": "2. Focus Time on Red Exceptions"
            }
          }
        },
        {
          "stepNumber": 3,
          "action": "Write a named owner and 24-hour fix time next to every red item.",
          "detail": "If the team cannot fix a blocker within 2 hours, attach a Red Escalation Tag for Tier 2.",
          "toolId": "TOL-006",
          "coachingTip": "Never write 'Team' as the owner—write a single person's name and exact hour when the check will happen.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Stage 2 Output — Immediate Containment & Red Tag Trigger",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Tier 1 Action Strip • Single Owner & 24-Hour Due Time", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Fixable in Cell: Assign @Owner (24h)", "x": 35, "y": 58, "w": 210, "h": 48, "state": "success" },
              { "id": "c2", "kind": "button", "label": "Blocked >2h: Attach Red Tag ↑", "x": 260, "y": 58, "w": 200, "h": 48, "state": "danger" },
              { "id": "c3", "kind": "badge", "label": "Handoff: Red Escalation Tags move to Tier 2 Triage before 09:00 AM", "x": 35, "y": 122, "w": 425, "h": 36, "state": "default" }
            ],
            "annotation": {
              "targetX": 260,
              "targetY": 58,
              "targetW": 200,
              "targetH": 48,
              "arrowFromX": 300,
              "arrowFromY": 26,
              "label": "3. Tag Cross-Team Blockers (>2h)"
            }
          }
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Team members stay silent when asked about obstacles on the shift.",
          "cause": "Questions are too vague ('Any issues?') instead of pointing to a specific target condition.",
          "fix": "Ask a direct target-condition question: 'We lost 40 minutes on station 3 yesterday—what blocked the handoff?'"
        }
      ]
    },
    "SOP-006": {
      "id": "SOP-006",
      "title": "Filter Blockers to Tier 2 and Close the 24-Hour Countermeasure Loop",
      "processId": "PRC-003",
      "roleId": "ROL-001",
      "toolIds": ["TOL-007"],
      "estimatedTime": "20 mins",
      "stationLocation": "Tier 2 Operations Board (09:00 AM Daily)",
      "kitBag": {
        "leadRole": "Local Programme Manager (LPM) & Site Leadership Sponsor",
        "supportRole": "Lean Core Team Partner",
        "mandatoryStatus": "Stages 3–4 • Tier 2 Escalation & Close-Loop",
        "inputNeeded": "Tier 1 Red Escalation Tags",
        "outputProduced": "Max 3 Escalated Red Blockers & Signed Countermeasure Log"
      },
      "userGoal": "Filter Tier 1 red tags down to a maximum of 3 critical cross-department escalations and lock 24-hour leadership countermeasures.",
      "gettingStarted": [
        "Gather all Red Escalation Tags from the Tier 1 boards 15 minutes before the 09:00 AM Tier 2 meeting.",
        "Open the Escalation Triage Filter to separate cell-level fixes from true cross-department blockers."
      ],
      "steps": [
        {
          "stepNumber": 1,
          "action": "Filter incoming Tier 1 red tags down to at most three cross-department blockers.",
          "detail": "Return local single-team issues to the cell leader and keep only safety, quality, or delivery stops needing cross-team help.",
          "toolId": "TOL-007",
          "coachingTip": "Escalating ten minor items paralyzes Tier 2—capping escalations at three forces leaders to solve the real bottleneck today.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Stage 3 — Escalation Triage Filter (Max 3 Red Blockers)",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Escalation Triage Filter • Pre-Tier 2 Screening", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Local Cell Issue → Return to Tier 1", "x": 35, "y": 58, "w": 205, "h": 48, "state": "default" },
              { "id": "c2", "kind": "button", "label": "Lock Max 3 Cross-Team Red Tags", "x": 255, "y": 58, "w": 205, "h": 48, "state": "active" },
              { "id": "c3", "kind": "badge", "label": "Priority Order: 1. Safety Stop -> 2. Customer Line Stop -> 3. Quality Hold", "x": 35, "y": 122, "w": 425, "h": 36, "state": "default" }
            ],
            "annotation": {
              "targetX": 255,
              "targetY": 58,
              "targetW": 205,
              "targetH": 48,
              "arrowFromX": 295,
              "arrowFromY": 26,
              "label": "1. Cap Tier 2 Escalations at Max 3"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Assign a support department owner and 24-hour countermeasure for each escalated blocker.",
          "detail": "The Site Leadership Sponsor assigns engineering, quality, or logistics leads to clear the obstacle within 24 hours.",
          "toolId": "TOL-007",
          "coachingTip": "Confirm the support owner physically visits the shop-floor cell before noon rather than replying by email.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Stage 4 — Assign 24-Hour Countermeasure & Support Owner",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Tier 2 Countermeasure Log • Leadership Commitment", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Red Tag #1: Torque Tool Calibration", "x": 35, "y": 58, "w": 205, "h": 48, "state": "danger" },
              { "id": "c2", "kind": "button", "label": "Assign @MaintLead (Fix < 24h) ✓", "x": 255, "y": 58, "w": 205, "h": 48, "state": "success" },
              { "id": "c3", "kind": "badge", "label": "Sponsor Sign-Off: Verifies resource commitment at the Tier 2 board", "x": 35, "y": 122, "w": 425, "h": 36, "state": "default" }
            ],
            "annotation": {
              "targetX": 255,
              "targetY": 58,
              "targetW": 205,
              "targetH": 48,
              "arrowFromX": 295,
              "arrowFromY": 26,
              "label": "2. Lock 24h Support Owner at Tier 2"
            }
          }
        },
        {
          "stepNumber": 3,
          "action": "Walk back to the cell board before 10:00 AM and write the agreed fix time.",
          "detail": "Close the communication loop so frontline operators see their escalated blocker has an active owner.",
          "toolId": "TOL-007",
          "coachingTip": "Nothing builds frontline trust faster than seeing a Tier 2 countermeasure written on their cell board within an hour.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Stage 4 Close-Loop — 10:00 AM Shop-Floor Feedback",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Close the Loop • Tier 2 Back to Tier 1 Cell Board", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "09:15 AM: Tier 2 Decision Locked", "x": 35, "y": 58, "w": 200, "h": 48, "state": "default" },
              { "id": "c2", "kind": "button", "label": "10:00 AM: Update Tier 1 Board ✓", "x": 250, "y": 58, "w": 210, "h": 48, "state": "success" },
              { "id": "c3", "kind": "badge", "label": "Output: Signed Countermeasure Log & Verified Cell Feedback", "x": 35, "y": 122, "w": 425, "h": 36, "state": "default" }
            ],
            "annotation": {
              "targetX": 250,
              "targetY": 58,
              "targetW": 210,
              "targetH": 48,
              "arrowFromX": 295,
              "arrowFromY": 26,
              "label": "3. Post Fix Time on Cell Board <10:00"
            }
          }
        }
      ],
      "troubleshooting": [
        {
          "symptom": "Tier 2 board is flooded with 12 red tags every morning.",
          "cause": "Tier 1 leaders are escalating issues before attempting a 2-hour cell containment.",
          "fix": "Use the Escalation Triage Filter before the meeting to return cell-fixable items and enforce the Max 3 Red Blockers cap."
        }
      ]
    },
    "SOP-007": {
      "id": "SOP-007",
      "title": "Stages 1–3: Check Kitchen Baseline, Spot Gaps & Take Team Orders",
      "processId": "PRC-004",
      "roleId": "ROL-001",
      "toolIds": ["TOL-008"],
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
            "type": "ui-mockup",
            "caption": "Stage 1: Check the Kitchen Baseline (Assess)",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Office Kitchen Baseline Check • 3 Foundational Gateways (★)", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Kettle Water >= 4 Cups ✓ (Passes ★)", "x": 35, "y": 58, "w": 205, "h": 48, "state": "success" },
              { "id": "c2", "kind": "button", "label": "4 Clean Mugs Ready ✓ (Passes ★)", "x": 255, "y": 58, "w": 205, "h": 48, "state": "active" },
              { "id": "c3", "kind": "badge", "label": "Rule: Never promise artisanal barista drinks before checking basic kitchen stock", "x": 35, "y": 122, "w": 425, "h": 36, "state": "default" }
            ],
            "annotation": {
              "targetX": 255,
              "targetY": 58,
              "targetW": 205,
              "targetH": 48,
              "arrowFromX": 295,
              "arrowFromY": 26,
              "label": "1. Verify Clean Mugs & Kettle First"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Flag missing teabags or oat milk immediately so you know your kitchen gateway limits.",
          "detail": "If decaf bags or oat milk are empty, note that gap before walking back to the team.",
          "toolId": "TOL-008",
          "coachingTip": "Spotting a missing ingredient in Stage 2 saves an awkward second trip back to the desks to renegotiate orders.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Stage 2: Spot Supply Gaps (Analyse)",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Kitchen Gap Analysis • What Can We Actually Brew Today?", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Yorkshire Tea + Dairy Milk: IN STOCK ✓", "x": 35, "y": 58, "w": 215, "h": 48, "state": "success" },
              { "id": "c2", "kind": "button", "label": "Oat Milk Carton: EMPTY ✗ (Gap)", "x": 265, "y": 58, "w": 195, "h": 48, "state": "danger" },
              { "id": "c3", "kind": "badge", "label": "Gateway Cap: Oat-milk lattes paused until someone restocks the fridge", "x": 35, "y": 122, "w": 425, "h": 36, "state": "default" }
            ],
            "annotation": {
              "targetX": 265,
              "targetY": 58,
              "targetW": 195,
              "targetH": 48,
              "arrowFromX": 305,
              "arrowFromY": 26,
              "label": "2. Spot Empty Fridge Items Early"
            }
          }
        },
        {
          "stepNumber": 3,
          "action": "Ask colleagues for their drink orders and record mug strength and milk preferences.",
          "detail": "Capture the Voice of the Customer: who needs an urgent caffeine boost, and whether they take milk or sugar.",
          "toolId": "TOL-008",
          "coachingTip": "Keep the round manageable—aim for 2 to 3 mugs per tray (with a hard ceiling of 4) so you never drop a scalding mug in the corridor.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Stage 3: Take Team Orders (Voice of the Customer)",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Team Drink Orders (VOC) • What Does the Team Need?", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Sarah: Strong Builder's Tea (Milk)", "x": 35, "y": 58, "w": 205, "h": 48, "state": "active" },
              { "id": "c2", "kind": "button", "label": "Dave: Black Americano (No Sugar)", "x": 255, "y": 58, "w": 205, "h": 48, "state": "success" },
              { "id": "c3", "kind": "badge", "label": "Target Batch: 2–3 Mugs per Round (Max 4 Tray Capacity Ceiling)", "x": 35, "y": 122, "w": 425, "h": 36, "state": "default" }
            ],
            "annotation": {
              "targetX": 255,
              "targetY": 58,
              "targetW": 205,
              "targetH": 48,
              "arrowFromX": 295,
              "arrowFromY": 26,
              "label": "3. Capture 2–3 Colleague Orders"
            }
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
      "toolIds": ["TOL-008"],
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
            "type": "ui-mockup",
            "caption": "Stage 4: Match Orders to Supplies (Kitchen Huddle)",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Kitchen Huddle • Combining Kitchen Stock [1–2] + Team Orders [3]", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Input 1: Kettle + Tea + Dairy Milk", "x": 35, "y": 58, "w": 205, "h": 48, "state": "default" },
              { "id": "c2", "kind": "button", "label": "Lock 3 Matched Mugs for Tray #1 ✓", "x": 255, "y": 58, "w": 205, "h": 48, "state": "success" },
              { "id": "c3", "kind": "badge", "label": "Result: 2 Builder's Teas + 1 Black Coffee Locked on 1-Page Tray Charter", "x": 35, "y": 122, "w": 425, "h": 36, "state": "default" }
            ],
            "annotation": {
              "targetX": 255,
              "targetY": 58,
              "targetW": 205,
              "targetH": 48,
              "arrowFromX": 295,
              "arrowFromY": 26,
              "label": "1. Lock 2–3 Matched Drinks"
            }
          }
        },
        {
          "stepNumber": 2,
          "action": "Steep teabags in boiling water for three full minutes before pouring milk into mugs.",
          "detail": "Never pour cold milk onto an unsteeped teabag—wait 3 minutes for full flavour extraction, then remove the bag.",
          "toolId": "TOL-008",
          "coachingTip": "Adding milk too early drops the water temperature and locks the tea into a pale, lifeless beige score.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Stage 5: Agree & Brew the Round (3-Minute Steep Rule)",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Brew Quality Standard • Avoid 'Dishwater Tea' Failure", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "4-Sec Dip: Pale Dishwater ✗", "x": 35, "y": 58, "w": 185, "h": 48, "state": "danger" },
              { "id": "c2", "kind": "button", "label": "3-Min Steep + Splash Milk: Gold ★", "x": 235, "y": 58, "w": 225, "h": 48, "state": "success" },
              { "id": "c3", "kind": "badge", "label": "Sequence Rule: 100°C Water → 3-Min Steep → Remove Bag → Add Milk Last", "x": 35, "y": 122, "w": 425, "h": 36, "state": "default" }
            ],
            "annotation": {
              "targetX": 235,
              "targetY": 58,
              "targetW": 225,
              "targetH": 48,
              "arrowFromX": 285,
              "arrowFromY": 26,
              "label": "2. Steep 3 Full Minutes First"
            }
          }
        },
        {
          "stepNumber": 3,
          "action": "Load the 1-Page Tray Charter batch onto the tray and deliver within ten minutes.",
          "detail": "Place heavier mugs toward the center of the tray and hand each drink to its named owner while still piping hot.",
          "toolId": "TOL-008",
          "coachingTip": "Ask a colleague to hold the hallway fire door—teamwork prevents 90% of corridor tea spills.",
          "visual": {
            "type": "ui-mockup",
            "caption": "Stage 6: Deliver Hot Drinks (Action Plan)",
            "elements": [
              { "id": "w1", "kind": "window", "label": "Stage 6 Action Plan • Safe Desk Delivery (<10 Mins)", "x": 20, "y": 15, "w": 460, "h": 165, "state": "default" },
              { "id": "c1", "kind": "card", "label": "Tray Balanced (3 Mugs Centered)", "x": 35, "y": 58, "w": 205, "h": 48, "state": "active" },
              { "id": "c2", "kind": "button", "label": "Delivered to Desks (<10m) ✓", "x": 255, "y": 58, "w": 205, "h": 48, "state": "success" },
              { "id": "c3", "kind": "badge", "label": "Close Loop: Rinse teapot and return dirty spoons to the dishwasher", "x": 35, "y": 122, "w": 425, "h": 36, "state": "default" }
            ],
            "annotation": {
              "targetX": 255,
              "targetY": 58,
              "targetW": 205,
              "targetH": 48,
              "arrowFromX": 295,
              "arrowFromY": 26,
              "label": "3. Deliver Hot Mugs Within 10 Mins"
            }
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
  ],
  "journeyStages": [
    {
      "stage": 1,
      "title": "Self / Pair Calibration & Scoring (90 mins)",
      "statusBadge": "MANDATORY",
      "statusTone": "purple",
      "leadRole": "Local Programme Manager (LPM)",
      "supportRole": "Lean Core Team",
      "roleTag": "both",
      "toolLabel": "PM Maturity Hub v6.0.0 (Assessment Tab)",
      "toolId": "TOL-001",
      "input": "Workplace Evidence (70% Rule)",
      "output": "Raw scores.csv / .json",
      "routeType": "sop",
      "routeId": "SOP-001",
      "ctaText": "Open Stage 1 Guide →"
    },
    {
      "stage": 2,
      "title": "Gateway Cap & Gap Diagnosis",
      "statusBadge": "MANDATORY",
      "statusTone": "purple",
      "leadRole": "Lean Core Team",
      "supportRole": "Review: LPM",
      "roleTag": "core",
      "toolLabel": "PM Maturity Hub v6.0.0 (Score Explainer & Strategy Builder)",
      "toolId": "TOL-002",
      "input": "Scored Assessment",
      "output": "Capped Maturity Score & Red Starred Gateways (★)",
      "routeType": "sop",
      "routeId": "SOP-002",
      "ctaText": "Open Stage 2 Guide →"
    },
    {
      "stage": 3,
      "title": "Business Priorities & Leader Interviews (VOC)",
      "statusBadge": "MANDATORY FOR WORKSHOP • OPTIONAL FOR STANDALONE CHECK",
      "statusTone": "teal",
      "leadRole": "Lean Core Team + LPM",
      "supportRole": "Input: Site Leadership Sponsor",
      "roleTag": "both",
      "toolLabel": "Navigator Toolkit v2.4.4 (Analysis Report & VOC Input)",
      "toolId": "TOL-004",
      "input": "Leader Interviews",
      "output": "Top Site Pain Points (Safety, Delivery, Quality, Cost)",
      "routeType": "sop",
      "routeId": "SOP-003",
      "ctaText": "Open Stage 3 Guide →"
    },
    {
      "stage": 4,
      "title": "Prioritise the 'Vital Few' (Max 5 Actions)",
      "statusBadge": "MANDATORY",
      "statusTone": "purple",
      "leadRole": "Joint: LPM + Lean Core Team",
      "supportRole": "Joint Calibration",
      "roleTag": "both",
      "toolLabel": "Top 5 Action Prioritiser & Simulator",
      "toolId": "TOL-003",
      "input": "All Gaps + VOC",
      "output": "Ranked Top 5 High-Impact / Low-Effort Actions",
      "routeType": "prioritiser",
      "routeId": "prioritiser",
      "ctaText": "Open Top 5 Prioritiser →"
    },
    {
      "stage": 5,
      "title": "Leadership Navigator Workshop",
      "statusBadge": "RECOMMENDED (SITE TRANSFORMATION) • OPTIONAL (LOCAL TUNE-UP)",
      "statusTone": "teal",
      "leadRole": "Host: Site Sponsor & LPM",
      "supportRole": "Facilitator: Lean Core Team",
      "roleTag": "both",
      "toolLabel": "Navigator Toolkit v2.4.4 (Workshop Guide & Charter Input)",
      "toolId": "TOL-005",
      "input": "Top 5 Priorities",
      "output": "Agreed Owners & Measurable Targets",
      "routeType": "sop",
      "routeId": "SOP-004",
      "ctaText": "Open Workshop Guide →"
    },
    {
      "stage": 6,
      "title": "1-Page Charter & 90-Day Coaching Roadmap",
      "statusBadge": "MANDATORY",
      "statusTone": "purple",
      "leadRole": "Owner: LPM",
      "supportRole": "Coaching Cadence: Lean Core Team",
      "roleTag": "lpm",
      "toolLabel": "Navigator Toolkit v2.4.4 (Action Log) + 600 Maturity Submissions",
      "toolId": "TOL-005",
      "input": "Signed 1-Page Charter",
      "output": "Active 90-Day Coaching Plan & Filed Submission",
      "routeType": "charter",
      "routeId": "charter",
      "ctaText": "Open 1-Page Charter →"
    }
  ],
  "prioritiserCandidates": [
    {
      "id": "ACT-Q10",
      "qId": 10,
      "level": 1,
      "gateway": true,
      "defaultBelowThreshold": true,
      "scoreLift": "+1.0 Level Unlock (1.6 → 2.6)",
      "title": "Standardise structured pilot experiments across 70% of site teams",
      "krTemplate": "Raise Gateway #10 (Structured Pilot Experiments) from 2/5 to 3/5 across 70% of teams by Q2",
      "vocTags": ["Quality / First-Time-Right", "Cost / Productivity"],
      "matrixQuadrant": "Quick Win",
      "effort": "Low Effort",
      "impact": "High Maturity Lift",
      "selectedByDefault": true
    },
    {
      "id": "ACT-Q07",
      "qId": 7,
      "level": 1,
      "gateway": true,
      "defaultBelowThreshold": false,
      "scoreLift": "+0.4 Level 1 Lift",
      "title": "Assign clear Lean structure and written role ownership in every department",
      "krTemplate": "Establish signed Lean role cards across 75% of operational areas from 30% to 75% by Q1",
      "vocTags": ["Safety", "On-Time Delivery"],
      "matrixQuadrant": "Quick Win",
      "effort": "Low Effort",
      "impact": "High Maturity Lift",
      "selectedByDefault": true
    },
    {
      "id": "ACT-Q08",
      "qId": 8,
      "level": 1,
      "gateway": true,
      "defaultBelowThreshold": false,
      "scoreLift": "+0.3 Level 1 Lift",
      "title": "Run a monthly site strategy review cadence with visual target tracking",
      "krTemplate": "Complete monthly leadership strategy reviews on time from 40% to 100% by Q2",
      "vocTags": ["On-Time Delivery", "Cost / Productivity"],
      "matrixQuadrant": "Quick Win",
      "effort": "Low Effort",
      "impact": "High Maturity Lift",
      "selectedByDefault": false
    },
    {
      "id": "ACT-Q12",
      "qId": 12,
      "level": 2,
      "gateway": true,
      "defaultBelowThreshold": true,
      "scoreLift": "+0.35 Level 2 Unlock",
      "title": "Display and actively review safety, quality, and delivery boards in every work area",
      "krTemplate": "Increase work areas updating visual SQDC boards daily from 35% to 75% by Q2",
      "vocTags": ["Safety", "Quality / First-Time-Right", "On-Time Delivery"],
      "matrixQuadrant": "Quick Win",
      "effort": "Low Effort",
      "impact": "High Maturity Lift",
      "selectedByDefault": true
    },
    {
      "id": "ACT-Q14",
      "qId": 14,
      "level": 2,
      "gateway": true,
      "defaultBelowThreshold": true,
      "scoreLift": "+0.45 Level 2 Unlock",
      "title": "Run 15-minute daily shift huddles that close team blockers within 48 hours",
      "krTemplate": "Increase daily shift huddles solving team-level issues within 48 hours from 25% to 75% by Q3",
      "vocTags": ["Safety", "On-Time Delivery", "Quality / First-Time-Right"],
      "matrixQuadrant": "Quick Win",
      "effort": "Low Effort",
      "impact": "High Maturity Lift",
      "selectedByDefault": true
    },
    {
      "id": "ACT-Q15",
      "qId": 15,
      "level": 2,
      "gateway": true,
      "defaultBelowThreshold": false,
      "scoreLift": "+0.25 Level 2 Lift",
      "title": "Capture and implement frontline safety and waste-reduction ideas weekly",
      "krTemplate": "Raise frontline employee suggestions implemented within 14 days from 20% to 70% by Q3",
      "vocTags": ["Safety", "Cost / Productivity"],
      "matrixQuadrant": "Quick Win",
      "effort": "Low Effort",
      "impact": "High Maturity Lift",
      "selectedByDefault": false
    },
    {
      "id": "ACT-Q16",
      "qId": 16,
      "level": 2,
      "gateway": true,
      "defaultBelowThreshold": true,
      "scoreLift": "+0.50 Unlocks Level 3 Cap",
      "title": "Embed structured root-cause reflection after every major line stop or defect",
      "krTemplate": "Raise Gateway #16 (Structured Reflection) from 2/5 to 3/5 across 70% of teams by Q3",
      "vocTags": ["Quality / First-Time-Right", "Safety"],
      "matrixQuadrant": "Major Step",
      "effort": "High Effort",
      "impact": "High Maturity Lift",
      "selectedByDefault": true
    },
    {
      "id": "ACT-Q22",
      "qId": 22,
      "level": 2,
      "gateway": true,
      "defaultBelowThreshold": false,
      "scoreLift": "+0.30 Level 2 Unlock",
      "title": "Coach team leaders on safe experimentation and blameless problem reporting",
      "krTemplate": "Raise Gateway #22 (Psychological Safety for Experimentation) from 2/5 to 3/5 by Q3",
      "vocTags": ["Safety", "Quality / First-Time-Right"],
      "matrixQuadrant": "Major Step",
      "effort": "High Effort",
      "impact": "High Maturity Lift",
      "selectedByDefault": false
    },
    {
      "id": "ACT-Q26",
      "qId": 26,
      "level": 2,
      "gateway": true,
      "defaultBelowThreshold": false,
      "scoreLift": "+0.35 Cross-Team Flow Lift",
      "title": "Fix cross-department handoff delays between engineering, warehouse, and assembly",
      "krTemplate": "Reduce cross-department handoff wait time between shifts from 6 hours to 1.5 hours by Q4",
      "vocTags": ["On-Time Delivery", "Cost / Productivity"],
      "matrixQuadrant": "Major Step",
      "effort": "High Effort",
      "impact": "High Maturity Lift",
      "selectedByDefault": false
    },
    {
      "id": "ACT-Q25",
      "qId": 25,
      "level": 3,
      "gateway": true,
      "defaultBelowThreshold": false,
      "scoreLift": "+0.30 Level 3 Unlock",
      "title": "Scale proven pilot standards across all shifts and sister production lines",
      "krTemplate": "Scale verified standard work packages across 80% of parallel lines by Q4",
      "vocTags": ["Quality / First-Time-Right", "Cost / Productivity"],
      "matrixQuadrant": "Major Step",
      "effort": "High Effort",
      "impact": "High Maturity Lift",
      "selectedByDefault": false
    },
    {
      "id": "ACT-Q28",
      "qId": 28,
      "level": 1,
      "gateway": false,
      "defaultBelowThreshold": false,
      "scoreLift": "+0.10 Non-Gateway Lift",
      "title": "Publish a monthly 1-page site Lean win bulletin on shift boards",
      "krTemplate": "Share 2 replicated team improvement stories per month from 0 to 2 by Q2",
      "vocTags": ["Cost / Productivity"],
      "matrixQuadrant": "Fill-In",
      "effort": "Low Effort",
      "impact": "Low Lift",
      "selectedByDefault": false
    },
    {
      "id": "ACT-Q27",
      "qId": 27,
      "level": 4,
      "gateway": true,
      "defaultBelowThreshold": false,
      "scoreLift": "+0.15 Level 4 Only (Locked)",
      "title": "Launch joint external supplier Lean transformation workshops",
      "krTemplate": "Run 2 external supplier value-stream workshops by Q4",
      "vocTags": ["On-Time Delivery", "Cost / Productivity"],
      "matrixQuadrant": "Hard Slog",
      "effort": "High Effort",
      "impact": "Low Lift (Until L1-L3 Unlocked)",
      "selectedByDefault": false
    }
  ],
  "playbooks": [
    {
      "id": "PLB-001",
      "code": "PLB-001",
      "title": "The Lean@GS Navigator & Maturity Process",
      "eyebrow": "Siemens Energy • Lean@GS Playbook #1",
      "subtitle": "A practical journey from understanding your organisation's current Lean capability to agreeing what Lean should actually do for the business. Note: The maturity assessment is not the Navigator process—it is one of Navigator's two principal inputs.",
      "goldenPrinciple": {
        "quote": "The goal isn't to improve the maturity score. The goal is to improve the business.",
        "explanation": "The Maturity Assessment tells you what capability you have and what may need developing. The Voice of the Customer tells you what the business needs. Navigator brings the two together so your organisation can decide where Lean should focus."
      },
      "convergenceBanner": {
        "input1Title": "Input 1: Lean Capability (Stages 1 & 2)",
        "input1Desc": "Where are we capable of operating today? (Maturity Assessment & Analysis)",
        "input2Title": "Input 2: Business Need (Stage 3)",
        "input2Desc": "What does the business need us to improve? (Voice of the Customer / VOC)",
        "combinedTitle": "Combined in Stage 4 (Navigator Workshop)",
        "combinedDesc": "Turning Lean capability [1–2] + business need [3] into an agreed Charter (Stage 5) & Action Plan (Stage 6)."
      },
      "filingRule": "Save finished .csv and .json files in '600 Maturity Submissions'. Never move or delete files in that folder.",
      "processIds": ["PRC-001", "PRC-002"],
      "sopIds": ["SOP-001", "SOP-002", "SOP-003", "SOP-004"],
      "toolIds": ["TOL-001", "TOL-002", "TOL-003", "TOL-004", "TOL-005"],
      "chooserLabel": "Which part of the journey are you working on today?",
      "rulesKey": {
        "title": "Before You Start: 3 Helpful Principles for Scoring & Prioritising",
        "subtitle": "How the Maturity Assessment & Navigator work together",
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
          { "id": "all", "label": "All Roles" },
          { "id": "ROL-001", "label": "Local Programme Manager (LPM)" },
          { "id": "ROL-003", "label": "Site Leadership Team" },
          { "id": "ROL-002", "label": "Lean Core Team (Optional Support)" }
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
            "involvedRoleIds": ["ROL-001", "ROL-003", "ROL-002"],
            "toolId": "TOL-001",
            "toolLabel": "PM Maturity Hub (Assessment)",
            "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/",
            "secondaryLiveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/gs-lean-maturity/",
            "outputArtifact": "Baseline picture of current Lean capability & gaps",
            "targetView": { "type": "sop", "id": "SOP-001", "cta": "Open Stage 1 Assessment Guide →" }
          },
          {
            "stageNumber": 2,
            "title": "Analysis",
            "summary": "Understand strengths, gaps, and foundation gateway caps. Load your assessment into the analysis view and keep it focused—aim for 2 or 3 key capability actions at a time, not a huge list.",
            "whoIsInvolved": "Lead: Local Programme Manager (LPM) • Optional Support: Lean Core Team partner",
            "leadRoleId": "ROL-001",
            "supportRoleId": "ROL-002",
            "involvedRoleIds": ["ROL-001", "ROL-002"],
            "toolId": "TOL-002",
            "toolLabel": "PM Maturity Hub (Dashboard & Score Explainer)",
            "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/pm-maturity-hub/",
            "outputArtifact": "Focused view of 2–3 priority capability gaps & foundation gateway caps",
            "targetView": { "type": "sop", "id": "SOP-002", "cta": "Open Stage 2 Analysis Guide →" }
          },
          {
            "stageNumber": 3,
            "title": "Voice of the Customer (VOC)",
            "summary": "Understand leadership business priorities and pain points. Engage leadership and stakeholders to capture their critical business challenges, measures of breakthrough success, and the problems they need Lean to solve.",
            "whoIsInvolved": "Lead: Local Programme Manager (LPM) with Site Leaders • Optional Support: Lean Core Team",
            "leadRoleId": "ROL-001",
            "supportRoleId": "ROL-003",
            "involvedRoleIds": ["ROL-001", "ROL-003", "ROL-002"],
            "toolId": "TOL-004",
            "toolLabel": "Navigator Toolkit (Strategy Builder VOC Input)",
            "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
            "outputArtifact": "Clear business priorities & leadership pain points (VOC)",
            "targetView": { "type": "sop", "id": "SOP-003", "cta": "Open Stage 3 VOC Guide →" }
          },
          {
            "stageNumber": 4,
            "title": "Navigator Workshop",
            "summary": "Bring Lean capability [Stages 1–2] and Business need [Stage 3] together in the leadership workshop to establish why we are using Lean, the current situation, and our strategic direction.",
            "whoIsInvolved": "Owner & Lead: Local Programme Manager (LPM) with Site Leadership Team • Optional Support: Lean Core Team (if facilitation is requested)",
            "leadRoleId": "ROL-001",
            "supportRoleId": "ROL-003",
            "involvedRoleIds": ["ROL-001", "ROL-003", "ROL-002"],
            "toolId": "TOL-005",
            "toolLabel": "Navigator Toolkit (Metro Journey & 4 Pillars)",
            "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
            "outputArtifact": "Aligned strategic direction connecting Lean capability to business problems",
            "targetView": { "type": "sop", "id": "SOP-004", "cta": "Open Stage 4 Workshop Guide →" }
          },
          {
            "stageNumber": 5,
            "title": "Charter",
            "summary": "Agree clear objectives, measurable key results, and 2–3 focus initiatives—along with your local improvement team, sponsor, and coaching roles.",
            "whoIsInvolved": "Owner: Local Programme Manager (LPM) & Site Sponsor • Optional Support: Lean Core Team",
            "leadRoleId": "ROL-001",
            "supportRoleId": "ROL-003",
            "involvedRoleIds": ["ROL-001", "ROL-003", "ROL-002"],
            "toolId": "TOL-005",
            "toolLabel": "Navigator Toolkit (Strategy Builder Charter & PPTX Export)",
            "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
            "outputArtifact": "Agreed 1-Page Navigator Charter with 2–3 focus initiatives",
            "targetView": { "type": "template", "id": "TPL-001", "cta": "Open Stage 5 Charter →" }
          },
          {
            "stageNumber": 6,
            "title": "Action Plan",
            "summary": "Assign clear owners, target dates, and a local visual roadmap. Present and manage your improvement plan in the visual format that works best for your local organisation.",
            "whoIsInvolved": "Owner: Local Programme Manager (LPM) & Action Owners • Optional Support: Lean Core Team Coach",
            "leadRoleId": "ROL-001",
            "supportRoleId": "ROL-002",
            "involvedRoleIds": ["ROL-001", "ROL-002"],
            "toolId": "TOL-005",
            "toolLabel": "Navigator Toolkit (Action Matrix & Local Visual Roadmap)",
            "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
            "outputArtifact": "Active improvement plan with owners, target dates & local visual roadmap",
            "targetView": { "type": "sop", "id": "SOP-004", "cta": "Open Stage 6 Action Plan Guide →" }
          }
        ]
      },
      "decisionTools": [
        {
          "id": "DEC-001",
          "kind": "prioritiser-funnel",
          "navTitle": "Focus Action Prioritiser (Target: 2 to 3 Key Actions)",
          "eyebrow": "Preparing for Stage 4 (Navigator Workshop) • Combining Stages 1–2 + Stage 3",
          "badge": "Recommended: 2–3 Key Actions • Max 5 Ceiling",
          "title": "Focus Action Prioritiser (Target: 2 to 3 Key Actions)",
          "subtitle": "Preparing for Stage 4 (Navigator Workshop): Combine your Capability Analysis (Stages 1–2) with your Voice of the Customer Business Needs (Stage 3) to select 2 to 3 key initiatives for your Charter (Stage 5).",
          "recommendedMin": 2,
          "recommendedMax": 3,
          "maxCapacity": 5,
          "targetTemplateId": "TPL-001",
          "sendButtonLabel": "Stage 5 Charter",
          "overLimitWarning": "⚠️ Over Max 5 Ceiling: Selecting more than 5 actions dilutes leadership focus. Aim for 2–3 key actions at a time (Max 5 ceiling).",
          "withinLimitMessage": "✓ Ready for Stage 4 Workshop & Stage 5 Charter",
          "filter1": {
            "badge": "From Stages 1 & 2 • Capability & Gateways",
            "title": "1. Foundation Capability Gaps (★ Gateways)",
            "desc": "Identify which foundational Gateway capabilities (★) are currently holding back maturity and need strengthening.",
            "allLabel": "Show All Capability Gaps",
            "flaggedLabel": "★ Only Foundation Gateway Gaps",
            "priorityBadgeText": "FOUNDATION GATEWAY GAP (★)"
          },
          "filter2": {
            "badge": "From Stage 3 • Voice of the Customer",
            "title": "2. Align with Business Need (VOC Priorities)",
            "desc": "Match those capability gaps against the critical business problems your Site Leaders need to solve (Safety, On-Time Delivery, Quality / First-Time-Right, Cost / Productivity). Remember: the goal is to improve the business, and improving foundational Gateway capability unlocks that business performance.",
            "allLabel": "All Business Needs (VOC)",
            "columnLabel": "Business Need (VOC Priority)",
            "options": ["Safety", "On-Time Delivery", "Quality / First-Time-Right", "Cost / Productivity"]
          },
          "filter3": {
            "badge": "For Stages 4 & 5 • Workshop & Charter",
            "title": "3. Rank Impact vs. Effort (Select 2–3 Key Actions)",
            "desc": "Filter by Quick Win (Low Effort / High Impact) vs Major Initiative.",
            "allLabel": "All Impact / Effort Levels",
            "options": ["Quick Win", "Major Step", "Fill-In", "Hard Slog"]
          },
          "candidates": [
            {
              "id": "ACT-Q10",
              "codeLabel": "Q10 (Level 1 ★ Gateway)",
              "isPriorityFlagged": true,
              "liftLabel": "+1.0 Level Unlock (1.6 → 2.6)",
              "title": "Standardise structured pilot experiments across 70% of site teams",
              "draftText": "Raise Gateway #10 (Structured Pilot Experiments) from 2/5 to 3/5 across 70% of teams by Q2",
              "tags": ["Quality / First-Time-Right", "Cost / Productivity"],
              "quadrant": "Quick Win",
              "effort": "Low Effort",
              "impact": "High Capability Lift",
              "defaultDue": "Q2",
              "defaultOwner": "@ProgrammeMgr",
              "selectedByDefault": true
            },
            {
              "id": "ACT-Q07",
              "codeLabel": "Q7 (Level 1 ★ Gateway)",
              "isPriorityFlagged": false,
              "liftLabel": "+0.4 Level 1 Lift",
              "title": "Assign clear Lean structure and written role ownership in every department",
              "draftText": "Establish signed Lean role cards across 75% of operational areas from 30% to 75% by Q1",
              "tags": ["Safety", "On-Time Delivery"],
              "quadrant": "Quick Win",
              "effort": "Low Effort",
              "impact": "High Capability Lift",
              "defaultDue": "Q1",
              "defaultOwner": "@OpsLeader",
              "selectedByDefault": false
            },
            {
              "id": "ACT-Q08",
              "codeLabel": "Q8 (Level 1 ★ Gateway)",
              "isPriorityFlagged": false,
              "liftLabel": "+0.3 Level 1 Lift",
              "title": "Run a monthly site strategy review cadence with visual target tracking",
              "draftText": "Complete monthly leadership strategy reviews on time from 40% to 100% by Q2",
              "tags": ["On-Time Delivery", "Cost / Productivity"],
              "quadrant": "Quick Win",
              "effort": "Low Effort",
              "impact": "High Capability Lift",
              "defaultDue": "Q2",
              "defaultOwner": "@ProgrammeMgr",
              "selectedByDefault": false
            },
            {
              "id": "ACT-Q12",
              "codeLabel": "Q12 (Level 2 ★ Gateway)",
              "isPriorityFlagged": true,
              "liftLabel": "+0.35 Level 2 Unlock",
              "title": "Display and actively review safety, quality, and delivery boards in every work area",
              "draftText": "Increase work areas updating visual SQDC boards daily from 35% to 75% by Q2",
              "tags": ["Safety", "Quality / First-Time-Right", "On-Time Delivery"],
              "quadrant": "Quick Win",
              "effort": "Low Effort",
              "impact": "High Capability Lift",
              "defaultDue": "Q2",
              "defaultOwner": "@OpsLeader",
              "selectedByDefault": true
            },
            {
              "id": "ACT-Q14",
              "codeLabel": "Q14 (Level 2 ★ Gateway)",
              "isPriorityFlagged": true,
              "liftLabel": "+0.45 Level 2 Unlock",
              "title": "Run 15-minute daily shift huddles that close team blockers within 48 hours",
              "draftText": "Increase daily shift huddles solving team-level issues within 48 hours from 25% to 75% by Q3",
              "tags": ["Safety", "On-Time Delivery", "Quality / First-Time-Right"],
              "quadrant": "Quick Win",
              "effort": "Low Effort",
              "impact": "High Capability Lift",
              "defaultDue": "Q3",
              "defaultOwner": "@ProgrammeMgr",
              "selectedByDefault": true
            },
            {
              "id": "ACT-Q15",
              "codeLabel": "Q15 (Level 2 ★ Gateway)",
              "isPriorityFlagged": false,
              "liftLabel": "+0.25 Level 2 Lift",
              "title": "Capture and implement frontline safety and waste-reduction ideas weekly",
              "draftText": "Raise frontline employee suggestions implemented within 14 days from 20% to 70% by Q3",
              "tags": ["Safety", "Cost / Productivity"],
              "quadrant": "Quick Win",
              "effort": "Low Effort",
              "impact": "High Capability Lift",
              "defaultDue": "Q3",
              "defaultOwner": "@OpsLeader",
              "selectedByDefault": false
            },
            {
              "id": "ACT-Q16",
              "codeLabel": "Q16 (Level 2 ★ Gateway)",
              "isPriorityFlagged": true,
              "liftLabel": "+0.50 Unlocks Level 3 Cap",
              "title": "Embed structured root-cause reflection after every major line stop or defect",
              "draftText": "Raise Gateway #16 (Structured Reflection) from 2/5 to 3/5 across 70% of teams by Q3",
              "tags": ["Quality / First-Time-Right", "Safety"],
              "quadrant": "Major Step",
              "effort": "High Effort",
              "impact": "High Capability Lift",
              "defaultDue": "Q3",
              "defaultOwner": "@OpsLeader",
              "selectedByDefault": false
            },
            {
              "id": "ACT-Q22",
              "codeLabel": "Q22 (Level 2 ★ Gateway)",
              "isPriorityFlagged": false,
              "liftLabel": "+0.30 Level 2 Unlock",
              "title": "Coach team leaders on safe experimentation and blameless problem reporting",
              "draftText": "Raise Gateway #22 (Psychological Safety for Experimentation) from 2/5 to 3/5 by Q3",
              "tags": ["Safety", "Quality / First-Time-Right"],
              "quadrant": "Major Step",
              "effort": "High Effort",
              "impact": "High Capability Lift",
              "defaultDue": "Q3",
              "defaultOwner": "@ProgrammeMgr",
              "selectedByDefault": false
            },
            {
              "id": "ACT-Q26",
              "codeLabel": "Q26 (Level 2 ★ Gateway)",
              "isPriorityFlagged": false,
              "liftLabel": "+0.35 Cross-Team Flow Lift",
              "title": "Fix cross-department handoff delays between engineering, warehouse, and assembly",
              "draftText": "Reduce cross-department handoff wait time between shifts from 6 hours to 1.5 hours by Q4",
              "tags": ["On-Time Delivery", "Cost / Productivity"],
              "quadrant": "Major Step",
              "effort": "High Effort",
              "impact": "High Capability Lift",
              "defaultDue": "Q4",
              "defaultOwner": "@OpsLeader",
              "selectedByDefault": false
            },
            {
              "id": "ACT-Q28",
              "codeLabel": "Q28 (Level 1 Standard)",
              "isPriorityFlagged": false,
              "liftLabel": "+0.10 Non-Gateway Lift",
              "title": "Publish a monthly 1-page site Lean win bulletin on shift boards",
              "draftText": "Share 2 replicated team improvement stories per month from 0 to 2 by Q2",
              "tags": ["Cost / Productivity"],
              "quadrant": "Fill-In",
              "effort": "Low Effort",
              "impact": "Low Lift",
              "defaultDue": "Q2",
              "defaultOwner": "@ProgrammeMgr",
              "selectedByDefault": false
            },
            {
              "id": "ACT-Q27",
              "codeLabel": "Q27 (Level 4 ★ Gateway)",
              "isPriorityFlagged": false,
              "liftLabel": "+0.15 Level 4 Only (Locked)",
              "title": "Launch joint external supplier Lean transformation workshops",
              "draftText": "Run 2 external supplier value-stream workshops by Q4",
              "tags": ["On-Time Delivery", "Cost / Productivity"],
              "quadrant": "Hard Slog",
              "effort": "High Effort",
              "impact": "Low Lift (Until L1-L3 Unlocked)",
              "defaultDue": "Q4",
              "defaultOwner": "@OpsLeader",
              "selectedByDefault": false
            }
          ]
        },
        {
          "id": "DEC-002",
          "kind": "score-calculator",
          "navTitle": "Gateway Score Cap Calculator",
          "eyebrow": "Score Explainer • Interactive Calculator",
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
        }
      ],
      "templates": [
        {
          "id": "TPL-001",
          "kind": "action-charter",
          "navTitle": "1-Page Navigator Charter Template",
          "eyebrow": "STAGE 5 CHARTER TEMPLATE • PRE-FILLED FROM FOCUS ACTION PRIORITISER",
          "badge": "Navigator Toolkit",
          "liveUrl": "https://megblcntpvc72.ad101.siemens-energy.net/navigator-toolkit/",
          "liveLabel": "Launch Navigator Toolkit ↗",
          "title": "One-Page Navigator Charter Template",
          "linkedDecisionId": "DEC-001",
          "metaFields": [
            { "label": "Site / Area", "value": "[Insert Site]" },
            { "label": "Date", "value": "[YYYY-MM-DD]" },
            { "label": "Local Programme Manager", "value": "@[Name]" },
            { "label": "Site Leader Sponsor", "value": "@[Name]" }
          ],
          "leftBoxTitle": "1. Top 3 Leader Priorities (Business Problems to Solve)",
          "leftBoxBullets": [
            "Shorten delivery lead time on the main line.",
            "Cut repeat quality defects across shifts.",
            "Fix handoff delays between departments."
          ],
          "rightBoxTitle": "2. Starting Site Score & Starred Gateways to Fix",
          "rightBoxPrimary": "Current Score: 1.6 / 4.0 (Level 1: Basic Implementation)",
          "rightBoxSecondaryPrefix": "Prioritised Items",
          "tableHeaders": {
            "code": "#",
            "action": "Agreed Programme Objective / Key Result ([Measure] from [Start] to [Target] by [Date])",
            "lift": "Expected Lift",
            "tag": "VOC Priority",
            "due": "Due",
            "owner": "Owner"
          },
          "objectiveRowCode": "OBJ 1",
          "objectiveRowText": "Agreed Focus Initiatives (Target: 2 to 3 Key Actions to Improve the Business)",
          "rowCodePrefix": "KR 1."
        }
      ],
      "referenceTables": [
        {
          "id": "REF-001",
          "navTitle": "All 28 Questions & 17 Gateways (★)",
          "eyebrow": "Site Assessment Reference",
          "badge": "PM Maturity Hub",
          "title": "All 28 Assessment Questions & 17 Gateways",
          "subtitle": "Starred Gateway questions (★ Yes) must score at least 3 across roughly 70% of the site before higher-level questions count toward your final score.",
          "filterAllLabel": "All Questions (28)",
          "filterFlaggedLabel": "★ Starred Gateways Only (17)",
          "columns": ["#", "Assessment Question", "Topic", "Level", "Gateway?"],
          "rows": [
            { "code": "Q1", "col1": "Is there a clear business reason driving this Lean Programme?", "col2": "Foundation", "col3": "Level 0", "flagged": true, "flagLabel": "★ Yes" },
            { "code": "Q2", "col1": "Is leadership committed and actively invested in being involved?", "col2": "Foundation", "col3": "Level 0", "flagged": true, "flagLabel": "★ Yes" },
            { "code": "Q3", "col1": "Has the team or organisation started acquiring foundational Lean knowledge?", "col2": "Foundation", "col3": "Level 0", "flagged": true, "flagLabel": "★ Yes" },
            { "code": "Q4", "col1": "How clearly can your team describe what Lean means and how it supports your business goals?", "col2": "Awareness and Training", "col3": "Level 0", "flagged": true, "flagLabel": "★ Yes" },
            { "code": "Q5", "col1": "How deeply do team members understand core Lean concepts?", "col2": "Awareness and Training", "col3": "Level 0", "flagged": true, "flagLabel": "★ Yes" },
            { "code": "Q6", "col1": "Is there a consistent and active plan to close competency gaps?", "col2": "Awareness and Training", "col3": "Level 1", "flagged": false, "flagLabel": "No" },
            { "code": "Q7", "col1": "Is there a clear Lean structure and defined role ownership within the team?", "col2": "Lean Structure and Strategy", "col3": "Level 1", "flagged": true, "flagLabel": "★ Yes" },
            { "code": "Q8", "col1": "How effectively is strategy managed and reviewed at your level?", "col2": "Lean Structure and Strategy", "col3": "Level 1", "flagged": true, "flagLabel": "★ Yes" },
            { "code": "Q9", "col1": "How well are strategic objectives cascaded to teams?", "col2": "Lean Structure and Strategy", "col3": "Level 2", "flagged": false, "flagLabel": "No" },
            { "code": "Q10", "col1": "Does the team actively execute structured, pilot experiments?", "col2": "Lean Tools and KPI Alignment", "col3": "Level 1", "flagged": true, "flagLabel": "★ Yes" },
            { "code": "Q11", "col1": "Are Lean tools routinely applied and embedded in daily operations?", "col2": "Lean Tools and KPI Alignment", "col3": "Level 2", "flagged": false, "flagLabel": "No" },
            { "code": "Q12", "col1": "Are performance metrics and Lean-relevant KPIs displayed and actively discussed in the work area?", "col2": "Lean Tools and KPI Alignment", "col3": "Level 2", "flagged": true, "flagLabel": "★ Yes" },
            { "code": "Q13", "col1": "Is the review of KPIs driven by Lean principles to prevent local optimization?", "col2": "Lean Tools and KPI Alignment", "col3": "Level 3", "flagged": false, "flagLabel": "No" },
            { "code": "Q14", "col1": "Are daily huddles used consistently to raise and resolve issues?", "col2": "Daily Management and CI", "col3": "Level 2", "flagged": true, "flagLabel": "★ Yes" },
            { "code": "Q15", "col1": "How effectively are employee suggestions captured and implemented?", "col2": "Daily Management and CI", "col3": "Level 2", "flagged": true, "flagLabel": "★ Yes" },
            { "code": "Q16", "col1": "Does the team practice structured reflection?", "col2": "Learning and Value Chain Integration", "col3": "Level 2", "flagged": true, "flagLabel": "★ Yes" },
            { "code": "Q17", "col1": "How consistently are lessons learned documented and applied?", "col2": "Learning and Value Chain Integration", "col3": "Level 3", "flagged": false, "flagLabel": "No" },
            { "code": "Q18", "col1": "Does your Lean philosophy extend across your entire value chain?", "col2": "Learning and Value Chain Integration", "col3": "Level 3", "flagged": true, "flagLabel": "★ Yes" },
            { "code": "Q19", "col1": "Are internal departmental handoffs integrated to ensure seamless process flow?", "col2": "Learning and Value Chain Integration", "col3": "Level 3", "flagged": false, "flagLabel": "No" },
            { "code": "Q20", "col1": "Do leaders practice the 'Gemba Walk' habit consistently?", "col2": "Leadership & Culture", "col3": "Level 2", "flagged": false, "flagLabel": "No" },
            { "code": "Q21", "col1": "Do leaders use a consistent questioning cycle to identify target conditions and obstacles?", "col2": "Leadership & Culture", "col3": "Level 2", "flagged": false, "flagLabel": "No" },
            { "code": "Q22", "col1": "Is there a culture of psychological safety that encourages safe experimentation?", "col2": "Leadership & Culture", "col3": "Level 2", "flagged": true, "flagLabel": "★ Yes" },
            { "code": "Q23", "col1": "Are learnings from reflection used to update standard work?", "col2": "Learning & Scaling", "col3": "Level 3", "flagged": false, "flagLabel": "No" },
            { "code": "Q24", "col1": "Is physical verification used to validate pilot project outcomes?", "col2": "Learning & Scaling", "col3": "Level 3", "flagged": false, "flagLabel": "No" },
            { "code": "Q25", "col1": "Are successful standards systematically scaled across the site?", "col2": "Learning & Scaling", "col3": "Level 3", "flagged": true, "flagLabel": "★ Yes" },
            { "code": "Q26", "col1": "Do teams from different functions collaborate to improve shared processes?", "col2": "Collaboration & Feedback", "col3": "Level 2", "flagged": true, "flagLabel": "★ Yes" },
            { "code": "Q27", "col1": "Are joint improvement projects executed with external partners?", "col2": "Collaboration & Feedback", "col3": "Level 4", "flagged": true, "flagLabel": "★ Yes" },
            { "code": "Q28", "col1": "How consistently are success stories shared and replicated?", "col2": "Communication", "col3": "Level 1", "flagged": false, "flagLabel": "No" }
          ]
        }
      ]
    },
    {
      "id": "PLB-002",
      "code": "PLB-002",
      "title": "Tiered Daily Management & Escalation Meetings",
      "eyebrow": "Siemens Energy • Lean@GS Playbook #2",
      "subtitle": "Run crisp 15-minute shift stand-up meetings, filter cross-department blockers down to at most 3 red tags, and lock 24-hour countermeasures.",
      "goldenPrinciple": {
        "quote": "The goal of a daily stand-up isn't to report numbers. The goal is to unblock the shift.",
        "explanation": "Green metrics take five seconds. Spend your 15 minutes assigning clear 24-hour owners to cell-level misses and escalating at most three cross-department blockers to Tier 2."
      },
      "convergenceBanner": {
        "input1Title": "Input 1: Shop-Floor Exceptions (Stages 1 & 2)",
        "input1Desc": "Where did we miss safety, quality, delivery, or cost targets today?",
        "input2Title": "Input 2: Escalation Triage (Stage 3)",
        "input2Desc": "Which blockers cannot be fixed inside the cell within 2 hours?",
        "combinedTitle": "Combined in Stage 4 (Tier 2 Close-Loop)",
        "combinedDesc": "Locking 24-hour cross-department countermeasures and writing the fix time back on the cell board by 10:00 AM."
      },
      "filingRule": "Post signed Tier 2 Countermeasure Logs on the Operations Board and archive weekly inside '200 Daily Management Logs'.",
      "processIds": ["PRC-003"],
      "sopIds": ["SOP-005", "SOP-006"],
      "toolIds": ["TOL-006", "TOL-007"],
      "chooserLabel": "Which daily management task are you running right now?",
      "rulesKey": {
        "title": "Before You Start: The 3 Rules of Tiered Daily Management",
        "subtitle": "How shift stand-ups and escalations work in plain English",
        "items": [
          {
            "term": "⏱ 1. The 15-Minute Rule",
            "desc": "Update numbers 5 minutes before the horn. Spend 5 seconds on green metrics and focus the 15-minute stand-up strictly on red misses."
          },
          {
            "term": "🏷️ 2. The 2-Hour Red-Tag Trigger",
            "desc": "If a cell team cannot contain a safety, quality, or delivery obstacle within 2 hours, attach a Red Escalation Tag for Tier 2."
          },
          {
            "term": "🔄 3. Max 3 Escalations & 10:00 AM Loop",
            "desc": "Filter Tier 2 escalations to at most 3 critical cross-team blockers per shift and write the agreed fix time back on the cell board by 10:00 AM."
          }
        ]
      },
      "journeyMap": {
        "formulaBanner": "Spot Red Exceptions Early → Contain in Cell (<2h) → Triage Max 3 Blockers to Tier 2 → Close Loop by 10:00 AM",
        "mapHeading": "End-to-End 4-Stage Daily Management & Escalation Map",
        "roleFilters": [
          { "id": "all", "label": "All Roles" },
          { "id": "ROL-004", "label": "Highlight Team Leader Tasks" },
          { "id": "ROL-001", "label": "Highlight LPM Tasks" },
          { "id": "ROL-003", "label": "Highlight Site Sponsor Tasks" }
        ],
        "briefingButtonLabel": "⏱ Explain Tiered Stand-Ups (60-Sec Pitch)",
        "briefingTitle": "60-Second Floor Briefing: Why We Run Tier 1 & Tier 2 Stand-Ups",
        "briefingEquation": "5-Min Board Prep + 15-Min Red-Miss Focus + Max 3 Tier 2 Red Tags = 24-Hour Countermeasure Loop",
        "briefingBullets": [
          "1. Where we are: Every shift starts with a 15-minute check at the visual SQDC board—numbers are colored Red or Green 5 minutes before the horn so we never waste meeting time writing.",
          "2. What matters: We don't debate root causes at the stand-up board. Cell-fixable misses get a named 24-hour owner; cross-team blockers breaching 2 hours get a Red Escalation Tag.",
          "3. Our next step: The Local Programme Manager filters red tags down to a maximum of 3 critical blockers for the 09:00 AM Tier 2 huddle and writes the agreed fix back on the cell board by 10:00 AM."
        ],
        "stages": [
          {
            "stageNumber": 1,
            "title": "Prep Visual Board Metrics Before Shift",
            "summary": "Update yesterday's safety, quality, delivery, and cost numbers 5 minutes before the shift horn sounds.",
            "whoIsInvolved": "Frontline Team Leader (5 mins before shift)",
            "whoAndDuration": "Frontline Team Leader • 5 mins before shift",
            "leadRoleId": "ROL-004",
            "leadRoleLabel": "Frontline Team Leader",
            "supportRoleId": "ROL-001",
            "supportRoleLabel": "Local Programme Manager",
            "toolId": "TOL-006",
            "toolLabel": "Visual Stand-Up Board (SQDC)",
            "outputArtifact": "Updated visual stand-up board",
            "targetView": { "type": "sop", "id": "SOP-005", "cta": "Open Stage 1–2 Guide →" }
          },
          {
            "stageNumber": 2,
            "title": "Run 15-Minute Tier 1 Stand-Up Meeting",
            "summary": "Focus the 15-minute team check on missed targets and assign a 24-hour owner to every red item.",
            "whoIsInvolved": "Frontline Team Leader + Cell Team (15 mins)",
            "whoAndDuration": "Frontline Team Leader + Cell Team • 15 mins",
            "leadRoleId": "ROL-004",
            "leadRoleLabel": "Frontline Team Leader",
            "supportRoleId": "ROL-001",
            "supportRoleLabel": "Local Programme Manager",
            "toolId": "TOL-006",
            "toolLabel": "Visual Stand-Up Board (SQDC)",
            "outputArtifact": "Immediate cell containment actions",
            "targetView": { "type": "sop", "id": "SOP-005", "cta": "Open Tier 1 Stand-Up SOP →" }
          },
          {
            "stageNumber": 3,
            "title": "Filter & Escalate Blockers to Tier 2",
            "summary": "Screen red tags before 09:00 AM so at most 3 cross-department blockers go to the Tier 2 huddle.",
            "whoIsInvolved": "Local Programme Manager (10 mins before Tier 2)",
            "whoAndDuration": "Local Programme Manager • 10 mins",
            "leadRoleId": "ROL-001",
            "leadRoleLabel": "Local Programme Manager",
            "supportRoleId": "ROL-004",
            "supportRoleLabel": "Frontline Team Leader",
            "toolId": "TOL-007",
            "toolLabel": "Escalation Triage Filter",
            "outputArtifact": "Max 3 escalated red blockers",
            "targetView": { "type": "decision", "id": "DEC-003", "cta": "Open Escalation Triage Filter →" }
          },
          {
            "stageNumber": 4,
            "title": "Assign 24-Hour Countermeasures & Close Loop",
            "summary": "Assign support department owners at Tier 2 and write the agreed fix time back on the cell board by 10:00 AM.",
            "whoIsInvolved": "Site Leadership Sponsor + Local Programme Manager (20 mins)",
            "whoAndDuration": "Site Leadership Sponsor + Programme Manager • 20 mins",
            "leadRoleId": "ROL-003",
            "leadRoleLabel": "Site Leadership Sponsor",
            "supportRoleId": "ROL-002",
            "supportRoleLabel": "Lean Core Team Partner",
            "toolId": "TOL-007",
            "toolLabel": "24-Hour Countermeasure Log",
            "outputArtifact": "Signed countermeasure log & 10:00 AM cell feedback",
            "targetView": { "type": "sop", "id": "SOP-006", "cta": "Open Tier 2 Close-Loop SOP →" }
          }
        ]
      },
      "decisionTools": [
        {
          "id": "DEC-003",
          "kind": "prioritiser-funnel",
          "navTitle": "Meeting Escalation & Red-Tag Triage Filter",
          "eyebrow": "Stage 3 Triage Funnel • Protect Tier 2 Focus",
          "badge": "Max 3 Red Blockers Rule",
          "title": "Meeting Escalation & Red-Tag Triage Filter (Tier 1 → Tier 2)",
          "subtitle": "Never flood the 09:00 AM Tier 2 operations huddle with 15 minor cell issues. Filter today's incoming shift blockers down to a maximum of 3 critical cross-department escalations.",
          "maxCapacity": 3,
          "targetTemplateId": "TPL-002",
          "sendButtonLabel": "Tier 2 Stand-Up Board Agenda",
          "overLimitWarning": "⚠️ Stop: Escalating more than 3 red blockers stalls the 15-minute Tier 2 meeting. Return single-department items to Tier 1 containment.",
          "withinLimitMessage": "✓ Tier 2 Escalation Tray Ready (Max 3 Cross-Department Red Blockers Locked for 09:00 AM)",
          "filter1": {
            "badge": "Triage Step 1 • Line-Stop & Safety Gate",
            "title": "1. Prioritise Immediate Line Stops & Safety Risks (★)",
            "desc": "Any red tag halting customer delivery or safety breaches the 2-hour cell rule and must go to Tier 2 first.",
            "allLabel": "Show All Shift Red Tags",
            "flaggedLabel": "★ Only Line-Stop / >2h Breaches",
            "priorityBadgeText": "PRIORITY 1: LINE STOP / >2H CELL BREACH"
          },
          "filter2": {
            "badge": "Triage Step 2 • SQDC Category",
            "title": "2. Filter by SQDC Board Pillar",
            "desc": "Match the blocker to the affected SQDC pillar so the right support lead (Safety, Quality, Maintenance, Logistics) is ready.",
            "allLabel": "All SQDC Pillars",
            "columnLabel": "SQDC Board Pillar",
            "options": ["Safety", "Quality", "Delivery", "Cost / Equipment"]
          },
          "filter3": {
            "badge": "Triage Step 3 • Resolution Scope",
            "title": "3. Filter by Resolution Ownership Scope",
            "desc": "Escalate Cross-Dept Blockers to Tier 2; keep Cell-Level Fixes at Tier 1.",
            "allLabel": "All Scopes",
            "options": ["Tier 2 Cross-Dept", "Supplier / External", "Contain in Cell (Tier 1)"]
          },
          "candidates": [
            {
              "id": "ESC-01",
              "codeLabel": "RED-TAG #1 (Bay 4 Assembly ★)",
              "isPriorityFlagged": true,
              "liftLabel": "Stops Main Line in 2h",
              "title": "Torque controller calibration fault halting Bay 4 final casing bolt-up",
              "draftText": "Dispatch Maintenance Calibration Lead to swap backup controller on Bay 4 before 11:00 AM",
              "tags": ["Quality", "Delivery"],
              "quadrant": "Tier 2 Cross-Dept",
              "effort": "Cross-Team Needed",
              "impact": "Unblocks Shift Output",
              "defaultDue": "11:00 AM",
              "defaultOwner": "@MaintLead",
              "selectedByDefault": true
            },
            {
              "id": "ESC-02",
              "codeLabel": "RED-TAG #2 (Test Cell B ★)",
              "isPriorityFlagged": true,
              "liftLabel": "High Safety Priority",
              "title": "Overhead crane limit switch intermittent trip during rotor lift",
              "draftText": "Lock out Secondary Hoist B and complete EHS & Electrical inspection before afternoon shift",
              "tags": ["Safety", "Cost / Equipment"],
              "quadrant": "Tier 2 Cross-Dept",
              "effort": "EHS + Facilities",
              "impact": "Zero-Harm Mandatory",
              "defaultDue": "13:00 PM",
              "defaultOwner": "@EHSLead",
              "selectedByDefault": true
            },
            {
              "id": "ESC-03",
              "codeLabel": "RED-TAG #3 (Sub-Assembly 2 ★)",
              "isPriorityFlagged": true,
              "liftLabel": "3 Shifts Delayed",
              "title": "Missing kitted seal rings from central warehouse holding 4 customer units",
              "draftText": "Expedite bonded inspection release of seal batch #4402 from Warehouse to Sub-Assembly 2 by 14:00",
              "tags": ["Delivery", "Quality"],
              "quadrant": "Tier 2 Cross-Dept",
              "effort": "Logistics + QA",
              "impact": "Saves +4 Units OTD",
              "defaultDue": "14:00 PM",
              "defaultOwner": "@MaterialsMgr",
              "selectedByDefault": true
            },
            {
              "id": "ESC-04",
              "codeLabel": "RED-TAG #4 (Machining Cell 1)",
              "isPriorityFlagged": false,
              "liftLabel": "Vendor Batch Issue",
              "title": "Surface burr on incoming cast brackets requiring 15 mins extra deburring",
              "draftText": "Issue 24-hour supplier containment alert and sort current pallet with Quality Tech",
              "tags": ["Quality", "Cost / Equipment"],
              "quadrant": "Supplier / External",
              "effort": "Supplier QA",
              "impact": "Saves 2h Rework/Shift",
              "defaultDue": "Tomorrow 09:00",
              "defaultOwner": "@SupplierQA",
              "selectedByDefault": false
            },
            {
              "id": "ESC-05",
              "codeLabel": "RED-TAG #5 (Pack Station)",
              "isPriorityFlagged": false,
              "liftLabel": "Fixable in Cell (<30m)",
              "title": "Label printer ribbon roll depleted at Station 2 packing bench",
              "draftText": "Return to Tier 1 Team Leader: restock ribbon from cell kanban cabinet within 15 minutes",
              "tags": ["Delivery"],
              "quadrant": "Contain in Cell (Tier 1)",
              "effort": "Cell Operator",
              "impact": "No Tier 2 Needed",
              "defaultDue": "08:30 AM",
              "defaultOwner": "@TeamLeader",
              "selectedByDefault": false
            },
            {
              "id": "ESC-06",
              "codeLabel": "RED-TAG #6 (Weld Booth 3)",
              "isPriorityFlagged": false,
              "liftLabel": "Fixable in Cell (<1h)",
              "title": "Shadow board 10mm socket missing after night shift handover",
              "draftText": "Return to Tier 1 Team Leader: replace from tool crib and audit shift-end 5S checklist",
              "tags": ["Cost / Equipment"],
              "quadrant": "Contain in Cell (Tier 1)",
              "effort": "Cell Team",
              "impact": "No Tier 2 Needed",
              "defaultDue": "09:30 AM",
              "defaultOwner": "@TeamLeader",
              "selectedByDefault": false
            }
          ]
        }
      ],
      "templates": [
        {
          "id": "TPL-002",
          "kind": "action-charter",
          "navTitle": "Tier 1 / Tier 2 Stand-up Board Agenda Template",
          "eyebrow": "Stage 4 Output Template • Pre-Filled from Escalation Triage Filter",
          "badge": "Daily Management Suite",
          "title": "Tier 1 / Tier 2 Stand-Up Board Agenda & 24-Hour Countermeasure Log",
          "linkedDecisionId": "DEC-003",
          "metaFields": [
            { "label": "Site / Cell Area", "value": "[Insert Cell / Value Stream]" },
            { "label": "Shift & Date", "value": "[Day Shift • YYYY-MM-DD]" },
            { "label": "Tier 1 Team Leader", "value": "@[TeamLeader]" },
            { "label": "Tier 2 Chair (LPM / Sponsor)", "value": "@[OpsSponsor]" }
          ],
          "leftBoxTitle": "1. Standard 15-Minute Tier 1 / Tier 2 Stand-Up Agenda",
          "leftBoxBullets": [
            "00–03 Mins (Safety & People): Check zero-harm status, ergonomic risks, and shift staffing.",
            "03–08 Mins (Quality & Delivery): Review red misses only; verify 24h cell containment owners.",
            "08–15 Mins (Cost & Escalations): Lock max 3 Red Tags for Tier 2 and confirm 10:00 AM feedback."
          ],
          "rightBoxTitle": "2. Shift SQDC Status & Escalation Cap Summary",
          "rightBoxPrimary": "Tier 2 Escalation Cap: Max 3 Cross-Department Red Blockers",
          "rightBoxSecondaryPrefix": "Active Red Tags Escalated Today",
          "tableHeaders": {
            "code": "Tag #",
            "action": "24-Hour Countermeasure & Shop-Floor Verification ([Action] + [Location] + [Fix Window])",
            "lift": "Operational Impact",
            "tag": "SQDC Pillar",
            "due": "Fix By",
            "owner": "24h Owner"
          },
          "objectiveRowCode": "TIER 2",
          "objectiveRowText": "Escalated Cross-Department Blockers (Filtered via Tier 2 Red-Tag Triage — 10:00 AM Feedback Rule)",
          "rowCodePrefix": "CM-"
        }
      ],
      "referenceTables": [
        {
          "id": "REF-002",
          "navTitle": "Standard SQDC Escalation Matrix",
          "eyebrow": "Daily Management Reference",
          "badge": "Daily Management Suite",
          "title": "Standard Tier 1 → Tier 3 Escalation Matrix & Response Times",
          "subtitle": "Clear rules for when a shop-floor issue stays in the cell (Tier 1) versus when it must be escalated with a Red Tag to Tier 2 or Tier 3.",
          "filterAllLabel": "All Triggers (8)",
          "filterFlaggedLabel": "★ Immediate Tier 2 Red-Tag Triggers Only (5)",
          "columns": ["Code", "Shop-Floor Trigger Condition", "Pillar", "Target Tier", "Red-Tag Rule"],
          "rows": [
            { "code": "ESC-S1", "col1": "First-aid injury, near-miss with high potential, or unsafe lifting/hoist equipment condition", "col2": "Safety", "col3": "Tier 2 & EHS Immediately", "flagged": true, "flagLabel": "★ Red Tag Now" },
            { "code": "ESC-S2", "col1": "Minor 5S housekeeping or walkway clutter fixable by cell operators within 15 minutes", "col2": "Safety", "col3": "Tier 1 Cell Containment", "flagged": false, "flagLabel": "Cell Fix (<15m)" },
            { "code": "ESC-Q1", "col1": "Repeat critical-to-quality defect or calibrated torque/test tool out of tolerance", "col2": "Quality", "col3": "Tier 2 (<2 Hours)", "flagged": true, "flagLabel": "★ Red Tag (>2h)" },
            { "code": "ESC-Q2", "col1": "Single cosmetic blemish with documented standard rework instruction in cell", "col2": "Quality", "col3": "Tier 1 Cell Containment", "flagged": false, "flagLabel": "Cell Fix (<2h)" },
            { "code": "ESC-D1", "col1": "Main line or test bay stopped >2 hours waiting on warehouse parts, crane, or engineering", "col2": "Delivery", "col3": "Tier 2 (09:00 AM Huddle)", "flagged": true, "flagLabel": "★ Red Tag (>2h)" },
            { "code": "ESC-D2", "col1": "Customer shipment at risk of missing weekly commit date after 24h Tier 2 containment", "col2": "Delivery", "col3": "Tier 3 Plant Director", "flagged": true, "flagLabel": "★ Escalate Tier 3" },
            { "code": "ESC-C1", "col1": "Key bottleneck machine breakdown exceeding 2 hours without maintenance replacement", "col2": "Cost / Equipment", "col3": "Tier 2 (<2 Hours)", "flagged": true, "flagLabel": "★ Red Tag (>2h)" },
            { "code": "ESC-C2", "col1": "Consumable kanban bin or label roll depleted with backup stock available in cell", "col2": "Cost / Equipment", "col3": "Tier 1 Cell Containment", "flagged": false, "flagLabel": "Cell Fix (<30m)" }
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
      "processIds": ["PRC-004"],
      "sopIds": ["SOP-007", "SOP-008"],
      "toolIds": ["TOL-008"],
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
          { "id": "all", "label": "All Roles" },
          { "id": "ROL-D01", "label": "Designated Brew Maker" },
          { "id": "ROL-D02", "label": "Kitchen Buddy" },
          { "id": "ROL-D03", "label": "Thirsty Desk Team" }
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
            "targetView": { "type": "sop", "id": "SOP-007", "cta": "Open Stage 1 Kitchen Check Guide →" }
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
            "targetView": { "type": "sop", "id": "SOP-007", "cta": "Open Stage 2 Gap Analysis Guide →" }
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
            "targetView": { "type": "sop", "id": "SOP-007", "cta": "Open Stage 3 Team Orders Guide →" }
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
            "targetView": { "type": "sop", "id": "SOP-008", "cta": "Open Stage 4 Brew Workshop Guide →" }
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
            "targetView": { "type": "template", "id": "TPL-003", "cta": "Open Stage 5 Tray Charter →" }
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
            "targetView": { "type": "sop", "id": "SOP-008", "cta": "Open Stage 6 Delivery Guide →" }
          }
        ]
      },
      "decisionTools": [
        {
          "id": "DEC-004",
          "kind": "prioritiser-funnel",
          "navTitle": "Brew Round Prioritiser (Target: 2 to 3 Drinks per Tray)",
          "eyebrow": "Preparing for Stage 4 (Brew Workshop) • Combining Kitchen Check + Team Orders",
          "badge": "Recommended: 2–3 Priority Items • Max 4 Tray Slots",
          "title": "Brew Round Prioritiser (Target: 2 to 3 Drinks per Tray)",
          "subtitle": "Preparing for Stage 4: Combine your Kitchen Supply Check (Stages 1–2) with Team Drink Requests (Stage 3) to pick 2 to 3 priority actions or drinks for your 1-Page Tray Charter (Stage 5).",
          "recommendedMin": 2,
          "recommendedMax": 3,
          "maxCapacity": 4,
          "targetTemplateId": "TPL-003",
          "sendButtonLabel": "1-Page Order Sheet",
          "overLimitWarning": "⚠️ Over 4-Mug Tray Limit: Carrying more than 4 mugs causes hallway spills! Keep 2–3 key items (Max 4).",
          "withinLimitMessage": "✓ Fits Safely on the 4-Mug Non-Slip Tray",
          "filter1": {
            "badge": "From Stages 1 & 2 • Kitchen Gateways",
            "title": "1. Kitchen Supply Gateways (★ Must Fix First)",
            "desc": "You cannot pour hot tea from an empty kettle. Filter for critical kitchen supply unlocks (★) first.",
            "allLabel": "Show All Brew Items",
            "flaggedLabel": "★ Only Kitchen Gateway Unlocks",
            "priorityBadgeText": "KITCHEN GATEWAY UNLOCK (★)"
          },
          "filter2": {
            "badge": "From Stage 3 • Voice of the Customer (VOC)",
            "title": "2. Align with Team Drink Need (VOC)",
            "desc": "Match kitchen capability against the most urgent morning team need (09:00 AM Standup, Caffeine Boost, Fast Pour).",
            "allLabel": "All Team Drink Needs",
            "columnLabel": "Team Drink Need (VOC)",
            "options": ["09:00 AM Standup", "Caffeine Boost", "Fast 3-Min Pour", "Afternoon Treat"]
          },
          "filter3": {
            "badge": "For Stages 4 & 5 • Tray Selection",
            "title": "3. Rank Joy vs. Effort (Select 2–3 Items)",
            "desc": "Pick Quick Wins (3-minute steep) and defer 15-minute iced blender specials to lunchtime.",
            "allLabel": "All Effort Levels",
            "options": ["Quick Win", "Major Step", "Hard Slog"]
          },
          "candidates": [
            {
              "id": "BRW-G1",
              "codeLabel": "KETTLE (Stage 1 ★ Gateway)",
              "isPriorityFlagged": true,
              "liftLabel": "Unlocks Boiling Water (100°C)",
              "title": "Fill kettle to 1.5L line, place on power base, and switch on",
              "draftText": "Boil 1.5L fresh water in kitchen kettle from cold to 100°C by 08:50 AM",
              "tags": ["09:00 AM Standup", "Caffeine Boost", "Fast 3-Min Pour"],
              "quadrant": "Quick Win",
              "effort": "Low Effort (2m)",
              "impact": "Unlocks All Hot Drinks",
              "defaultDue": "08:50 AM",
              "defaultOwner": "@BrewMaker",
              "selectedByDefault": true
            },
            {
              "id": "BRW-O1",
              "codeLabel": "ORDER-1 (Stage 3 ★ VOC)",
              "isPriorityFlagged": true,
              "liftLabel": "Wakes Up 2 Standup Hosts",
              "title": "Brew 2x Builders Yorkshire Tea (3-minute steep, dash of fresh milk)",
              "draftText": "Deliver 2 mugs of 3-minute steeped Builders Tea to Sarah & Dave by 08:55 AM",
              "tags": ["09:00 AM Standup", "Caffeine Boost", "Fast 3-Min Pour"],
              "quadrant": "Quick Win",
              "effort": "Low Effort (3m)",
              "impact": "High Team Morale",
              "defaultDue": "08:55 AM",
              "defaultOwner": "@BrewMaker",
              "selectedByDefault": true
            },
            {
              "id": "BRW-O2",
              "codeLabel": "ORDER-2 (Stage 3 VOC)",
              "isPriorityFlagged": false,
              "liftLabel": "Fixes Lead Engineer Focus",
              "title": "Pour 1x Strong Black Americano (94°C water, zero milk, zero sugar)",
              "draftText": "Deliver 1 mug of hot Black Americano to Lead Engineer desk by 08:55 AM",
              "tags": ["09:00 AM Standup", "Caffeine Boost", "Fast 3-Min Pour"],
              "quadrant": "Quick Win",
              "effort": "Low Effort (1m)",
              "impact": "High Focus Lift",
              "defaultDue": "08:55 AM",
              "defaultOwner": "@KitchenBuddy",
              "selectedByDefault": true
            },
            {
              "id": "BRW-O3",
              "codeLabel": "ORDER-3 (Stage 3 VOC)",
              "isPriorityFlagged": false,
              "liftLabel": "Easy 4th Tray Slot",
              "title": "Pour 1x Peppermint Herbal Tea (boiling water only, 15mm safety rim)",
              "draftText": "Deliver 1 mug of Peppermint Herbal Tea with 15mm safety rim by 08:58 AM",
              "tags": ["Fast 3-Min Pour"],
              "quadrant": "Quick Win",
              "effort": "Low Effort (1m)",
              "impact": "Calm Morning Lift",
              "defaultDue": "08:58 AM",
              "defaultOwner": "@KitchenBuddy",
              "selectedByDefault": false
            },
            {
              "id": "BRW-O4",
              "codeLabel": "ORDER-4 (Barista Overload)",
              "isPriorityFlagged": false,
              "liftLabel": "Delays Standup by 15m",
              "title": "Blend Iced Caramel Oat-Milk Matcha Frappe with hand-whipped cinnamon foam",
              "draftText": "Defer complex blender Frappe order to lunchtime café walk at 12:30 PM",
              "tags": ["Afternoon Treat"],
              "quadrant": "Hard Slog",
              "effort": "High Effort (15m)",
              "impact": "Blocks 09:00 AM Call",
              "defaultDue": "12:30 PM",
              "defaultOwner": "@SelfService",
              "selectedByDefault": false
            }
          ]
        }
      ],
      "templates": [
        {
          "id": "TPL-003",
          "kind": "action-charter",
          "navTitle": "1-Page Tea & Coffee Round Order Sheet",
          "eyebrow": "STAGE 5 CHARTER TEMPLATE • PRE-FILLED FROM BREW ROUND PRIORITISER",
          "badge": "Neutral Demo Template • 1-Page Tray Charter",
          "title": "1-Page Tea & Coffee Round Order Sheet",
          "subtitle": "Stage 5 sets the Tray Charter (2 to 3 priority orders) and Stage 6 assigns delivery owners and brew timing.",
          "linkedDecisionId": "DEC-004",
          "metaFields": [
            { "label": "Desk Bank / Floor Zone", "value": "Floor 2 — North Engineering Bay" },
            { "label": "Brew Run Time", "value": "08:50 AM (Before 09:00 AM Standup)" },
            { "label": "Designated Brew Maker", "value": "@BrewMaker" },
            { "label": "Round Sponsor (Biscuits)", "value": "@SarahJenkins" }
          ],
          "leftBoxTitle": "1. Stage 3 Team Drink Needs (Problems to Solve)",
          "leftBoxBullets": [
            "Wake up the 09:00 AM standup hosts with proper 3-minute steeped Builders Tea.",
            "Deliver a strong Black Americano to the Lead Engineer before the project call.",
            "Keep the tray to a maximum of 4 mugs with a 15mm safety rim so nothing spills in the hallway."
          ],
          "rightBoxTitle": "2. Kitchen Baseline & Gateway Supply Status",
          "rightBoxPrimary": "Tray Capacity: Target 2–3 Priority Items (Max 4 Mugs per Tray)",
          "rightBoxSecondaryPrefix": "Selected Tray Items",
          "tableHeaders": {
            "code": "#",
            "action": "Selected Kitchen Fix / Drink Order (Target: 2–3 Key Items)",
            "lift": "Team Impact",
            "tag": "Drink Need (VOC)",
            "due": "Deliver By",
            "owner": "Brew Owner"
          },
          "objectiveRowCode": "GATEWAY",
          "objectiveRowText": "Agreed Morning Tray Orders (Target: 2 to 3 Priority Drinks Without Spilling)",
          "rowCodePrefix": "MUG-"
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
          "columns": ["Code", "Drink Name & Preparation Rule", "Category", "Steep / Pour Time", "Golden Rule"],
          "rows": [
            { "code": "BRW-01", "col1": "Builders Breakfast Tea — Steep teabag in boiling water for 3 full minutes before adding milk", "col2": "Black Tea", "col3": "3 Mins Steep", "flagged": true, "flagLabel": "★ Never Milk First" },
            { "code": "BRW-02", "col1": "Light Milky Tea — Steep 2 minutes, squeeze teabag gently against mug wall, add 25ml fresh milk", "col2": "Black Tea", "col3": "2 Mins Steep", "flagged": false, "flagLabel": "Standard" },
            { "code": "BRW-03", "col1": "Filter / Cafetiere Coffee — Wait 30 seconds after kettle boils so 94°C water does not burn grounds", "col2": "Coffee", "col3": "4 Mins Plunge", "flagged": true, "flagLabel": "★ Wait 30s Post-Boil" },
            { "code": "BRW-04", "col1": "Instant Coffee — Dissolve granules with 15ml cold milk or warm water before pouring boiling water", "col2": "Coffee", "col3": "30 Secs Stir", "flagged": false, "flagLabel": "Standard" },
            { "code": "BRW-05", "col1": "Herbal / Peppermint Infusion — Boiling water only; keep a 15mm safety rim below the mug top", "col2": "Herbal", "col3": "3 Mins Steep", "flagged": false, "flagLabel": "Standard" },
            { "code": "BRW-06", "col1": "4-Mug Tray Safety Rule — Never stack mugs or carry more than 4 hot drinks in a single trip", "col2": "Tray Safety", "col3": "15mm Safety Rim", "flagged": true, "flagLabel": "★ 4-Mug Max Cap" }
          ]
        }
      ]
    }
  ]
};
