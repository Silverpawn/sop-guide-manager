# Siemens Energy • Lean@GS Documentation & SOP Guide Manager

A **Snowflake-style Documentation Portal** styled with the **Siemens Energy Web UI Design System** (`#1B1534` → `#4D217A` brand gradient, `#009999` Siemens Petrol, `#8A00E5` Bright Purple, and generous `#FFFFFF` white space) that builds interactive user guides, process hubs, tool references, and visual SOP runbooks from a simple JSON payload ([`data/guides.json`](data/guides.json)).

## Core Usability Pillars
1. **Visual-First Design:** Every SOP step pairs its instruction with an annotated SVG diagram featuring a highlight box, pointer arrow, and callout pill.
2. **Radical Text Brevity:** Enforces the **≤20-word Simplified Technical English rule**, active-voice imperative commands, and zero raw acronyms via [`scripts/validate-guides.js`](scripts/validate-guides.js).
3. **Task-Focused + Value-Add Coaching:** Organizes documentation around what the user wants to achieve and includes **Lean@GS Coaching Tips** on every step.
4. **Predictable Structural Anchors:** Fixed **Searchable Table of Contents**, **Getting Started (Pre-Flight Setup)**, **Step-by-Step Instructions**, and **Self-Service Troubleshooting** tables.

## Included Payload: Lean@GS Maturity & Navigator Reference Manual
- **Part 1 — Standalone Site Maturity Assessment (`PRC-001` / PM Maturity Hub v6.0.0):**
  - `SOP-001`: Calibrate and Score All 28 Site Questions in Pairs (5-step ground rules, 70% site rule, `600 Maturity Submissions` archive rule)
  - `SOP-002`: Diagnose Gateway Score Caps and Build a Local Action Plan (`Score Explainer`, `Metro Journey`, `4 Pillars`, `Strategy Builder`)
- **Part 2 — The 6-Step Leadership Navigator Workshop (`PRC-002` / Navigator Toolkit v2.4.4):**
  - `SOP-003`: Prepare the Navigator Workshop Inputs (`Analysis Report` & `VOC Input` leader interviews)
  - `SOP-004`: Facilitate the Half-Day Workshop, Write OKRs, and Track Monthly (`Workshop Guide`, `Charter Input`, `Action Log`)
- **Interactive Reference Tools:**
  - All 28 Assessment Questions & 17 Starred Gateways (`★`) filterable table
  - Interactive Gateway Score Cap Calculator (`Level + [(Average - 1) / 4]`)
  - One-Page Navigator Charter Template with one-click clipboard copy

## Quick Start
Open `index.html` directly in your browser, or run:
```bash
npm start
# Validate JSON payload against the 20-word & Snowflake schema rules:
npm run validate
```
