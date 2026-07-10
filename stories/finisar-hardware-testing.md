# Story 4: Finisar Hardware Verification

## Why this story matters

This is Josh's cleanest proof that he can connect software automation to physical hardware behavior. It supports Anduril's preference for candidates curious about analytics and hardware systems.

## Known evidence

- Automated optical transceiver performance verification with Python.
- Tested performance across temperature ranges.
- Doubled test efficiency.
- Supported product reliability.

## Story excavation

Answer these without proprietary detail:

- Which transceiver metrics were measured?
- What equipment or interfaces generated the measurements?
- How were temperature conditions varied or controlled?
- What was manual before the Python automation?
- What did the script ingest, calculate, compare, and output?
- How were pass/fail thresholds defined?
- How did Josh prevent automation from hiding a real hardware defect?
- What happened when measurements were missing, noisy, or outside tolerance?
- What exactly doubled: test throughput, engineer time, coverage, or turnaround?
- Who consumed the results?
- What did Josh personally own?

## 20-second version

> At Finisar, I automated optical-transceiver verification across temperature conditions using Python. The workflow collected and evaluated performance measurements consistently, doubled test efficiency, and helped engineers identify reliability issues faster.

Use the final sentence only if it matches the actual outcome.

## 90-second structure

1. Hardware and testing context
2. Manual bottleneck or inconsistency
3. Python automation and data flow
4. Validation and exception handling
5. Measured efficiency gain
6. Lesson relevant to Anduril

## Best closing connection

> That experience taught me that analytics around physical systems must preserve context such as environmental conditions, configuration, and calibration. A surprising value may be a real hardware signal, a measurement problem, or a software problem, and the workflow has to help distinguish among them.
