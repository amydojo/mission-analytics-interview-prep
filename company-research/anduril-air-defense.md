# Anduril and Air Defense Research

## Research questions Josh should be able to answer

- What does Anduril build?
- What is Lattice conceptually?
- What problem does the Air Defense team solve?
- Why do detection, tracking, telemetry, and operator events create difficult data problems?
- Why do classified or disconnected environments change architecture?
- Why does Josh personally want to work in this domain?

## Mission-data thought exercise

Imagine the team receives:

- Sensor observations
- Object detections
- Track updates
- Platform telemetry
- Software and configuration versions
- Operator actions
- Test outcomes
- Maintenance events
- Deployment metadata

Potential failure modes:

- Duplicate events
- Delayed or out-of-order events
- Clock drift
- Missing telemetry
- Conflicting sensors
- Calibration differences
- Schema changes
- Incorrect labels
- Intermittent connectivity
- Software-version mismatches

## Practice prompt

> What operational data might an air-defense system produce, and how would you determine whether a surprising metric represents true behavior or a data-quality problem?

## Answer structure

1. Clarify the metric and decision.
2. Trace lineage back to source events.
3. Check timestamp, version, configuration, and calibration context.
4. Compare independent sources or expected-system behavior.
5. Reproduce the issue.
6. Isolate the failing layer.
7. Validate the fix against known cases.
8. Add monitoring or tests to prevent recurrence.
