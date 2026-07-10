# Mission Analytics Interview Prep

Private interview operating system for Joshua Gross's Anduril Industries **Mission Analytics Engineer, Air Defense** phone screen and the technical rounds that may follow.

## Positioning

> **Systems and software engineer with defense, RF, Python automation, SQL-driven analytics, production debugging, hardware verification, and graduate statistics experience.**

Josh is not presenting himself as a generic data scientist trying to enter defense. His narrative is a coherent progression:

**physical and networked systems → trustworthy measurement → root-cause analysis → mission analytics**

## Phone-screen win condition

The recruiter should leave believing:

1. Josh already understands defense, aerospace, RF, and production systems.
2. He has used Python and SQL to investigate real system behavior.
3. He can explain a high-impact root-cause story with exact ownership and validation.
4. He communicates clearly enough to work across engineering, operations, and leadership.
5. His gaps are specific tools, not foundational engineering judgment.
6. Clearance, location, travel, timing, and compensation are aligned.

## Threat model

The four preventable failure modes are:

1. **Vague ownership:** saying "we" without explaining his contribution.
2. **Unsupported metrics:** being unable to defend the 100% or 35% figures.
3. **Cloud inflation:** overstating coursework, labs, or exposure as production ownership.
4. **Generic motivation:** giving an answer that could apply to any technology company.

## Repository map

```text
mission-analytics-interview-prep/
├── README.md
├── role-analysis/
│   ├── job-description.md
│   ├── requirements-to-evidence.md
│   └── gaps-and-bridges.md
├── stories/
│   ├── viasat-rf-traffic-defect.md
│   ├── ci-cd-automation.md
│   ├── raytheon-rf-simulation.md
│   ├── finisar-hardware-testing.md
│   └── statistics-project.md
├── interview-answers/
│   ├── tell-me-about-yourself.md
│   ├── why-anduril.md
│   ├── why-this-role.md
│   ├── career-gap.md
│   ├── cloud-experience.md
│   └── compensation.md
├── technical-prep/
│   ├── sql-drills.sql
│   ├── data-pipeline-design.md
│   ├── streaming-concepts.md
│   ├── air-gapped-systems.md
│   └── python-drills.py
├── company-research/
│   ├── air-defense.md
│   ├── lattice.md
│   └── questions-to-ask.md
├── mock-interviews/
│   ├── recruiter-screen.md
│   ├── hiring-manager.md
│   └── feedback-log.md
└── day-of/
    └── one-page-cheat-sheet.md
```

Additional repository safety and execution files remain at the root.

## Execution sequence

### Phase 1: Establish truth

Complete [`prep-checklist.md`](prep-checklist.md). Verify every date, title, metric, clearance statement, cloud claim, and logistical answer.

### Phase 2: Build proof

Use the five files in [`stories/`](stories/) to recover the real technical details behind each résumé bullet. Every story must answer:

- What was the system and why did it matter?
- What did Josh personally own?
- What evidence showed something was wrong?
- Which hypotheses were tested?
- How was the result validated?
- What changed operationally?

### Phase 3: Build answer control

Rehearse the files in [`interview-answers/`](interview-answers/) as ideas, not scripts. Use:

- **Nontechnical:** Answer → Evidence → Connection
- **Technical:** Clarify → Assumptions → Approach → Validation → Tradeoffs

### Phase 4: Pressure test

Run [`mock-interviews/recruiter-screen.md`](mock-interviews/recruiter-screen.md), review the recording, then run [`mock-interviews/hiring-manager.md`](mock-interviews/hiring-manager.md). An answer is ready only when it is clear, specific, truthful, owned, and connected to the role.

### Phase 5: Compress

Fill in [`day-of/one-page-cheat-sheet.md`](day-of/one-page-cheat-sheet.md). Nothing else should be visible during the call except the résumé, job posting, and this sheet.

## Readiness gates

Josh is phone-screen ready when he can deliver without reading:

- 75-second introduction
- 60-second Why Anduril
- 45-second Why this role
- 90-second Viasat story
- 60-second Raytheon story
- 30-second cloud answer
- 30-second timeline answer
- 20-second compensation answer
- Three thoughtful recruiter questions

He is technical-round ready when he can:

- Defend every résumé metric
- Explain the Viasat investigation for five minutes
- Design a telemetry pipeline verbally
- Reason about duplicates, late events, connectivity loss, and schema changes
- Explain unfamiliar tools honestly in terms of their purpose
- Protect confidential information while still communicating technical depth

## Safety

Do not commit classified, export-controlled, proprietary, employer-confidential, or personally sensitive material. Use high-level descriptions and synthetic examples only. See [`SECURITY.md`](SECURITY.md).
