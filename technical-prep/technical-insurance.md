# Technical Insurance for the Phone Screen

This is not a full technical-interview curriculum. It is enough to prevent a recruiter or technical recruiter from exposing a conceptual hole.

## Pipeline explanation

> Source systems and sensors produce events. An ingestion layer receives and buffers them. Raw events are preserved for replay and auditability. Validation and transformation create cleaned, standardized records. Modeled entities support operational metrics and applications. Monitoring checks freshness, completeness, duplication, and correctness.

## Concepts to explain in plain English

- Batch versus streaming
- Idempotency
- Duplicate events
- Late and out-of-order data
- Schema evolution
- Partitioning
- Data lineage
- Data-quality tests
- Observability
- Reproducibility
- Event time versus processing time
- Store-and-forward during connectivity loss
- Local processing in air-gapped environments

## Interview answer control system

For nontechnical questions:

> Answer → Evidence → Connection to role

For technical questions:

> Clarify → State assumptions → Propose approach → Validate → Discuss tradeoffs

When unfamiliar with a tool:

> I have not used that technology directly in production. My closest experience is [adjacent experience]. My understanding is that it is used for [purpose]. I would approach the problem by [method] and validate [critical risk].
