# Story 1: Viasat RF Traffic Defect

## Why this is the lead story

This story proves Python, SQL, RF systems, analytical modeling, data validation, root-cause analysis, and operational impact in one example.

## Evidence already established

- Built a Python analytical model
- Queried RF test data using SQL
- Predicted expected network traffic
- Identified a defect causing a 100% overestimation in measured traffic

## Story excavation

Complete these with concrete, nonconfidential details:

- What business or engineering decision depended on the traffic measurement?
- What system generated the RF test data?
- What was the grain of the data?
- Which fields or measurements mattered?
- What did the SQL query retrieve or aggregate?
- What did the Python model calculate?
- How was expected traffic defined?
- What first suggested the measured result was wrong?
- What were the first three hypotheses?
- What tests ruled each hypothesis in or out?
- What was the root cause?
- What did Josh personally change?
- Who else contributed?
- How was the fix validated?
- Was the 100% figure exact, approximate, or scenario-specific?
- What changed for customers or internal teams?
- What safeguard prevented recurrence?

## 20-second version

> At Viasat, I built a Python analytical model using SQL queries of RF test data to estimate expected network traffic. Comparing expected and measured behavior exposed a defect that was doubling the reported traffic. I isolated the cause, supported the correction, and validated that the resulting measurements matched expected system behavior.

Replace "supported the correction" with Josh's exact ownership.

## 90-second structure

1. System and stakes
2. Unexpected discrepancy
3. Josh's model and investigation
4. Root cause
5. Validation
6. Operational result
7. Relevance to mission analytics

## Five-minute deep-dive prompts

- Why use Python and SQL rather than another approach?
- What assumptions did the model make?
- How did you handle missing or malformed data?
- How did you distinguish a measurement problem from true system behavior?
- What alternatives did you consider?
- What would you improve now?
