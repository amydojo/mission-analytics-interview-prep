# Gaps and Bridges

A good bridge has four parts:

> **Truth → Closest evidence → Transferable principle → Role connection**

Never use confidence as a substitute for truth. Never end an answer on the gap.

## Cloud experience: primary risk

### Truth inventory

Complete before rehearsing:

- Cloud platform used:
- Specific services used:
- Production, academic, certification, lab, or personal context:
- What Josh personally built or configured:
- Data entering the system:
- Storage and compute:
- Data leaving the system:
- Permissions or security:
- Deployment method:
- Monitoring or validation:
- Outcome:

### Strong answer pattern

> My strongest production experience has been in Python, SQL, REST APIs, CI/CD, and Linux-based engineering environments. My direct cloud experience has been [specific platform, services, and context]. I personally [specific contribution], and the outcome was [result]. I want to be precise that my experience with [missing area] is [depth]. The underlying concerns around data movement, access, deployment, reliability, and validation are familiar from my production work.

### Honest limited-experience answer

> I have not yet owned a large cloud-native data platform in production. My closest experience includes Python and SQL analytical workflows, API-driven system migration, CI/CD automation, and Linux-based production systems. I understand the architecture concerns and would rather define my current depth accurately than overstate it. The specific managed services may be new, but tracing data, validating outputs, automating deployments, and diagnosing failures across system boundaries are not new problems for me.

### Failure modes

- "I know AWS" with no named service
- Treating a certification lab as production ownership
- Saying only "I learn quickly"
- Giving an architecture answer without personal contribution
- Becoming apologetic and forgetting the Viasat evidence

## Modern data-stack tools

### Safe bridge

> I have not used every tool in the listed stack directly in production. My closest experience is building Python and SQL analytical workflows, REST API integrations, automated testing pipelines, and Linux-based systems. I understand the underlying concerns around ingestion, transformation, data quality, reproducibility, latency, and failure handling, and I am comfortable learning the team's implementation.

### One-sentence tool purposes

- **dbt:** Version-controlled SQL transformations, tests, documentation, and lineage.
- **Kafka:** Durable distributed event log supporting partitioning, replay, and multiple consumers.
- **Flink:** Stateful stream processing with event-time handling and recovery.
- **Spark:** Distributed processing for large batch and streaming workloads.
- **Trino/Presto:** Distributed SQL over multiple data sources.
- **Foundry:** Integrated data platform for ingestion, modeling, governance, and operational applications.
- **DuckDB:** Embedded analytical database useful for local and constrained workflows.
- **Polars:** High-performance DataFrame library.
- **Nix:** Reproducible dependency and system configuration.
- **MCAP/HDF5:** Formats used to store structured, time-oriented, or scientific/robotics data.

Knowing the purpose is not the same as claiming hands-on depth.

## Data-title mismatch

### Concern

His titles were systems and software engineering, while the role requires three or more years in analytics-focused or data-oriented work.

### Bridge

> Although my titles were systems and software engineering, much of my work was fundamentally data-oriented: querying RF test data, modeling expected system behavior, identifying incorrect measurements, validating outputs, automating test pipelines, and supporting production decisions. My master's in statistics added formal modeling and experimental depth to work I was already doing around system data.

### Proof points

- Python analytical model built on SQL queries
- 100% measurement overestimation discovered through comparison of expected and observed behavior
- Automated test data and CI/CD reliability
- Hardware verification data at Finisar
- Statistical modeling in graduate work

## Direct streaming experience

### Bridge

> My direct production experience has been closer to analytical workflows, APIs, test automation, and network-system data than operating a dedicated stream-processing platform. I do understand the operational problems streaming systems address: low latency, retries, duplicates, late events, ordering, backpressure, replay, and state recovery. Those are the concepts I would map into the team's chosen tools.

## Air-gapped experience

### Bridge

> I have worked in a classified aerospace environment and understand the discipline required around access, documentation, and technical boundaries. I would not claim ownership of an air-gapped analytics platform if I did not have it. Conceptually, I understand that the system must be local-first, reproducible, observable without external services, and deployable through controlled artifact and dependency processes.

## Robotics formats

### Bridge

> I have not used MCAP directly. My understanding is that it is commonly used for timestamped robotics data and can preserve multiple channels for replay and analysis. My first step would be to inspect schema, timing, version, and metadata requirements, then use the team's established libraries rather than inventing a new ingestion path.

## Career timeline

> After Viasat, I completed my master's in statistics at UC Irvine to deepen my modeling, experimentation, and analytical foundation. Since graduating, I have been teaching programming while targeting a full-time role that combines my systems-engineering background with data and analytics.

## Teaching relevance

> Teaching strengthened my ability to diagnose where someone is blocked, adapt explanations, and create structured documentation. Those skills transfer directly to requirements gathering, enablement, and helping operational users self-serve trusted data.

## "Why should we hire you without our stack?"

> The strongest part of my fit is the combination of defense and RF systems experience, production Python and SQL analysis, root-cause investigation, and graduate statistics. I would need to ramp on parts of the specific data stack, but I already understand why correctness, lineage, timing, version context, and validation matter when data comes from complex physical systems. I can contribute domain and systems judgment immediately while building tool depth.

## Recovery line

When Josh feels cornered:

> I want to be exact about what I have done directly. The closest relevant experience is ____. The principle that transfers is ____. For this role, I would apply it by ____.

## Rule

Do not apologize for a gap. Do not bluff it. Define it, bridge it, and return to evidence.
