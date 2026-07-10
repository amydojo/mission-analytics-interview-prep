# Air Defense Team Research

## What the team does

Anduril describes the Air Defense team as building and sustaining a family of networked sensors and effectors spanning detection, tracking, identification, deterrence, and defeat of unmanned-aircraft threats.

The team works across product, engineering, business development, logistics, operations, and mission success, and deploys systems into challenging operational environments worldwide.

Source captured July 10, 2026: https://job-boards.greenhouse.io/andurilindustries/jobs/5130552007

## What this means for mission analytics

Data is likely generated across multiple layers:

- Sensor observations
- Detections and classifications
- Track creation, association, and updates
- Platform telemetry
- Network health
- Software and configuration versions
- Operator actions
- Alerts
- Test and evaluation outcomes
- Deployment and mission context
- Maintenance and sustainment events

The analytical challenge is not only computing a metric. It is determining whether the metric faithfully represents system behavior in a changing physical environment.

## Likely questions the data must answer

- Are sensors producing complete and timely observations?
- How often are detections converted into stable tracks?
- Where does latency enter the kill chain?
- Which software or configuration versions correlate with degraded performance?
- Are failures tied to environment, calibration, connectivity, or code?
- Which alerts are actionable versus noisy?
- What happened during a specific test or mission sequence?
- Which operational workflows should be standardized or automated?
- Can operators and leaders self-serve trusted answers?

## Failure modes Josh should recognize

- Duplicate observations or retries
- Out-of-order track updates
- Clock drift
- Missing context
- Conflicting sensor reports
- Calibration changes
- Software-version mismatch
- Intermittent network connectivity
- Incorrect joins across mission or asset boundaries
- Ground-truth uncertainty
- Metrics that hide cohort or environment differences

## Why Josh fits this environment

- Raytheon: defense, classified aerospace, RF simulation
- Viasat: RF data, network behavior, Python/SQL analysis, production debugging
- Finisar: automated verification of physical hardware across conditions
- Statistics M.S.: formal model selection, repeated measures, uncertainty
- Teaching: technical communication and knowledge transfer

## Practice answer: Why Air Defense?

> Air Defense is compelling to me because it combines sensing, RF and networked systems, software, and real operational constraints. My previous work has taught me how easily a measurement can be technically valid yet operationally misleading if context, calibration, or system assumptions are wrong. I am interested in helping teams build the trusted data layer needed to understand those systems in production.

## Five-minute research drill

Josh should be able to explain, without notes:

1. What the Air Defense team broadly does
2. What kinds of data the systems might generate
3. Three ways that data can become misleading
4. Why his RF and systems experience is relevant
5. Why trusted analytics matters to the mission
