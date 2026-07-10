# Mission Data Pipeline Design Exercise

## Prompt

Design a system that supports near-real-time monitoring and historical analysis for a fleet of autonomous or sensor-enabled assets.

## Start with requirements

- Expected event volume
- Latency target
- Connectivity assumptions
- Retention
- Query patterns
- Security classification
- Offline or air-gapped operation
- Correctness and audit requirements
- Number of downstream users and applications

## Conceptual architecture

1. Data sources
   - Telemetry
   - Sensor observations
   - Logs
   - Configuration
   - Operator actions

2. Edge collection
   - Local buffering
   - Event identifiers
   - Clock and version metadata
   - Store-and-forward behavior

3. Ingestion
   - Durable queue or log
   - Partitioning
   - Backpressure
   - Retry strategy

4. Raw storage
   - Immutable source events
   - Replayability
   - Access controls
   - Retention

5. Validation and transformation
   - Schema checks
   - Deduplication
   - Timestamp normalization
   - Version-aware parsing
   - Quality flags

6. Modeled layer
   - Assets
   - Missions
   - Detections
   - Tracks
   - Alerts
   - Maintenance
   - Software configurations

7. Consumption
   - Operational dashboards
   - Investigation tools
   - Historical analysis
   - Automated alerting

8. Observability
   - Freshness
   - Completeness
   - Consumer lag
   - Error rates
   - Duplicate rate
   - Distribution shifts

## Tradeoffs to discuss

- Latency versus completeness
- Exactly-once claims versus idempotent processing
- Centralized versus edge processing
- Normalized versus denormalized models
- Retention cost versus forensic value
- Flexibility versus schema enforcement
