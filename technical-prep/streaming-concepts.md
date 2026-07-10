# Streaming Concepts

## Phone-screen objective

Josh does not need to pretend he is a Kafka or Flink expert. He should be able to explain the problems these tools solve and reason about failure modes.

## Core concepts

### Batch versus streaming

- **Batch:** Process a bounded collection periodically. Simpler and efficient when latency is not critical.
- **Streaming:** Process events continuously or in small increments. Useful when operational decisions depend on recent data.

### Event time versus processing time

- **Event time:** When the event occurred at the source.
- **Processing time:** When the system processed it.

For field systems, the difference matters because connectivity loss and buffering can delay delivery.

### Late and out-of-order events

A robust system defines:

- How much lateness is expected
- Whether historical outputs can be corrected
- How ordering is reconstructed
- Which metrics are provisional versus final

### Idempotency

Repeating the same operation should not change the final result after the first successful application. Stable event IDs and upsert or merge logic help prevent retry-induced duplication.

### Delivery semantics

- **At most once:** Events may be lost, but are not repeated.
- **At least once:** Events should arrive, but may be repeated.
- **Exactly once:** A useful processing goal, but often achieved operationally through idempotency, transactions, and careful state management rather than magic.

### Partitioning

Partition by a key that supports scale while preserving required ordering. Asset ID, sensor ID, or mission ID may be reasonable depending on query and ordering needs.

### Consumer groups

Multiple consumers divide partitions so processing can scale horizontally while each partition is handled by one consumer in the group at a time.

### Backpressure

When downstream processing cannot keep up, the system must buffer, slow producers, shed low-priority work, or scale consumers. Silent queue growth is an operational risk.

### Checkpointing and state

Stateful stream processing periodically records progress and state so it can recover after failure without starting from zero.

### Watermarks

A watermark estimates how far event time has progressed and helps decide when a time window can be evaluated despite late data.

### Dead-letter handling

Malformed or unprocessable records should be isolated with enough context for diagnosis. They should not disappear silently.

## Tool map

- **Kafka:** Durable distributed event log, partitioning, retention, replay, consumer groups.
- **Flink:** Stateful stream processing, event-time semantics, windows, checkpoints.
- **Spark:** Distributed batch and streaming computation.
- **dbt:** Version-controlled SQL transformations, testing, documentation, lineage.
- **Trino/Presto:** Distributed SQL query engines across multiple data sources.
- **DuckDB:** Embedded analytical database useful for local and constrained workflows.
- **Polars:** High-performance DataFrame library.

## Practice scenarios

### Asset reconnects after two hours

Discuss local buffering, stable IDs, event time, replay, deduplication, ordering, and corrected downstream aggregates.

### Consumer falls behind

Discuss lag monitoring, bottleneck isolation, partition count, consumer scaling, expensive transformations, and backpressure.

### Same event appears three times

Discuss producer retries, stable IDs, idempotent sinks, duplicate-rate monitoring, and preserving source evidence.

### New firmware changes payload shape

Discuss schema versioning, compatibility, raw preservation, staged rollout, and quality monitoring by software version.

## Safe unfamiliar-tool answer

> I have not operated Flink directly in production. I understand that it is used for stateful stream processing with event-time handling and checkpointed recovery. My direct experience is closer to Python, SQL, APIs, CI/CD, and system-data validation, so I would map those reliability principles into the team's specific stack rather than claim tool depth I do not have.
