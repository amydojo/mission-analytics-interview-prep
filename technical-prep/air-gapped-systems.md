# Air-Gapped and Security-Hardened Systems

## Why this matters

The role explicitly mentions network-isolated and classified environments. Josh's prior classified experience is an advantage, but he should not imply specific air-gapped architecture experience unless it is true.

## Core architectural differences

### No assumption of internet access

- Dependencies must be mirrored, vendored, or approved in advance.
- Package installation and updates follow controlled processes.
- External APIs and cloud-hosted observability may be unavailable.
- Documentation and runbooks must be usable offline.

### Local-first operation

- Process critical data near the source.
- Buffer during connectivity loss.
- Provide local dashboards and diagnostics.
- Design graceful degradation when central services are unavailable.

### Reproducible deployment

- Pin versions and dependencies.
- Produce signed, auditable artifacts.
- Test the exact deployment bundle before transfer.
- Maintain rollback packages.
- Record configuration and software versions with outputs.

### Controlled data movement

- Minimize exports.
- Apply classification and access controls.
- Use approved transfer mechanisms.
- Maintain audit logs.
- Sanitize logs and diagnostics.

### Constrained resources

- Assume limited CPU, memory, disk, bandwidth, and operational support.
- Bound caches and queues.
- Prioritize critical workloads.
- Prefer simple, observable components over unnecessary distributed complexity.

### Local observability

Track:

- Service health
- Queue depth
- Disk use
- Data freshness
- Error and retry rates
- Version and configuration state
- Missing sources
- Clock health

## Practice question

> How would you deploy an analytics solution into a classified, network-isolated environment?

## Answer structure

1. Clarify security classification, hardware, users, and operational constraints.
2. Minimize dependencies and create a reproducible offline bundle.
3. Validate and sign artifacts in an approved build process.
4. Deploy with least privilege and clear configuration management.
5. Provide local monitoring, logs, and runbooks.
6. Design store-and-forward or approved export paths if synchronization is required.
7. Include rollback and recovery procedures.
8. Test the complete workflow in a representative isolated environment.

## Josh-specific answer

> I have worked in a classified aerospace environment, so I understand the need for disciplined access, documentation, and boundaries around technical information. I would be careful not to overstate my direct experience with every air-gapped deployment pattern, but I understand that the design has to be local-first, reproducible, observable without external services, and operable under constrained conditions.

## Security behavior during interviews

- Describe engineering approaches at a high level.
- Never reveal program names, internal architecture, datasets, or restricted details.
- Say clearly when a detail cannot be discussed.
- Treat discretion as evidence of professionalism, not as an inconvenience.
