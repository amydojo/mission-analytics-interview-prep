# Data Pipeline Design

## Practice prompt

Design a data system that supports near-real-time monitoring and historical analysis for a fleet of sensor-enabled or autonomous assets operating with intermittent connectivity.

## Step 1: Clarify requirements

Ask before designing:

- What event types and formats exist?
- Expected throughput and burst behavior?
- Required latency?
- How often is connectivity lost?
- Is event ordering guaranteed?
- How long must data be retained?
- What is classified or export-controlled?
- Which users and applications consume the data?
- Is correction of historical results allowed?
- What auditability is required?

## Step 2: Define source contracts

Every event should ideally include:

- Stable event identifier
- Source or asset identifier
- Event timestamp
- Ingest or receipt timestamp
- Schema version
- Software and configuration version
- Mission or deployment context
- Calibration or environmental context when relevant
- Quality or validity flags

## Step 3: Conceptual architecture

1. **Edge collection**
   - Local buffering
   - Compression
   - Store-and-forward
   - Bounded storage policy
   - Clock-health metadata

2. **Ingestion**
   - Durable event log or queue
   - Partitioning by asset or mission
   - Retry handling
   - Backpressure
   - Dead-letter path

3. **Raw preservation**
   - Immutable source events
   - Replayability
   - Access control
   - Retention policy

4. **Validation and transformation**
   - Schema validation
   - Deduplication
   - Timestamp normalization
   - Version-aware parsing
   - Referential checks
   - Quality flags rather than silent dropping

5. **Modeled entities**
   - Asset
   - Sensor
   - Deployment
   - Mission
   - Detection
   - Track
   - Telemetry reading
   - Alert
   - Operator action
   - Software/configuration state
   - Maintenance event

6. **Serving layer**
   - Operational dashboards
   - Investigation tools
   - Historical analysis
   - Alerts and automated workflows
   - Self-service documentation

7. **Observability**
   - Freshness
   - Completeness
   - Duplicate rate
   - Consumer lag
   - Parse failures
   - Schema drift
   - Distribution changes
   - Missing assets or silent sources

## Step 4: Hard questions

### What if events arrive twice?

Use stable IDs and idempotent writes. Preserve duplicate-rate metrics because a sudden rise can indicate a source or retry problem.

### What if events arrive late?

Use event time for analytical truth and receipt time for operational monitoring. Define a lateness policy and support backfills or corrected aggregates.

### What if clocks disagree?

Store both source and receive timestamps, monitor clock offsets, and avoid assuming device time is authoritative.

### What if connectivity disappears?

Buffer locally, persist state across restarts, prioritize critical event classes, and reconcile after reconnection.

### What if a schema changes?

Version contracts, preserve raw payloads, use compatibility checks, and deploy readers that can handle known versions.

## Tradeoffs to narrate

- Latency versus completeness
- Centralized versus edge processing
- Normalized versus denormalized models
- Strict rejection versus quality-flagged acceptance
- Retention cost versus forensic value
- Exactly-once promises versus idempotent behavior
- Flexibility versus governance

## Josh connection

Close by relating the design to his Viasat experience:

> My instinct would be to preserve enough source context to distinguish true system behavior from measurement or transformation errors. That was central to the RF traffic issue I investigated at Viasat.
