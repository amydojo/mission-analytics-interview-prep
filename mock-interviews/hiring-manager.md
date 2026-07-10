# Hiring Manager Red-Team Mock

## Purpose

This round is deliberately harder than the phone screen. It tests whether Josh's résumé claims survive technical follow-up and prepares him for the next stage before he receives it.

## Format

- 40 minutes
- Record audio or video
- No coaching during answers
- Require Josh to clarify assumptions
- Interrupt vague answers with one of the pressure prompts below
- Score using the feedback log after the round

## Opening

1. Give me the two-minute version of your background.
2. Why are you a Mission Analytics Engineer rather than a conventional systems engineer or data scientist?
3. Why Anduril, and why Air Defense specifically?

## Viasat deep dive

4. Draw the data flow for the RF traffic model verbally.
5. What was the grain of the SQL data?
6. What did the Python model calculate?
7. How did you know the measured traffic was wrong rather than merely surprising?
8. What hypotheses did you test?
9. What was the root cause?
10. What did you personally change?
11. How did you validate the fix?
12. Why was the overestimation 100%?
13. What test would have caught the defect earlier?
14. What would you log or monitor in production now?

## CI/CD deep dive

15. What exactly failed 35% less often?
16. How was the baseline calculated?
17. Were you reducing flaky tests, infrastructure errors, or product defects?
18. How did Python, PyTest, Jenkins, Bash, and Linux fit together?
19. How did the system report failures to engineers?
20. What was one tradeoff in the design?

## Data architecture

21. Design a pipeline for telemetry from autonomous assets with intermittent connectivity.
22. How would you handle duplicates?
23. How would you handle late and out-of-order events?
24. What should be immutable?
25. How would you model assets, missions, detections, tracks, alerts, and configurations?
26. How would you detect a silent sensor?
27. How would you distinguish a source problem from a transformation problem?
28. What changes in a classified or air-gapped environment?

## Cloud and stack gaps

29. Describe the most substantial cloud data solution you personally contributed to.
30. Which cloud services did you use and why?
31. You have not shown production Kafka, Flink, Spark, dbt, or Foundry experience. Why should we hire you?
32. Which of those tools would you learn first for this job and why?
33. Explain Kafka, Flink, and dbt in plain language.
34. When would DuckDB or Polars be useful in a constrained environment?

## Behavioral and operational judgment

35. Tell me about a time your first technical hypothesis was wrong.
36. Tell me about a time you had incomplete requirements.
37. Tell me about a conflict with another engineer or stakeholder.
38. Tell me about a production issue where speed and rigor were in tension.
39. How do you communicate uncertainty without making the result useless?
40. How do you document a system so another person can operate it?

## Pressure prompts

Use these whenever an answer becomes vague:

- What did **you** personally own?
- What was the exact input and output?
- How did you measure that?
- How did you validate it?
- What alternative did you reject?
- What broke?
- What assumption are you making?
- What happens at ten times the volume?
- What happens when the network disappears?
- What would prove your conclusion wrong?
- Explain that without the acronym.

## Pass criteria

Josh is ready for a technical round when he can:

- Explain the Viasat story for five minutes without inventing details
- State exact ownership and validation
- Defend every résumé metric
- Draw a coherent event pipeline verbally
- Explain unfamiliar tools honestly and conceptually
- Stay composed when challenged
- Protect confidential information without becoming evasive
- Connect technical choices to operational outcomes

## Automatic fail conditions in practice

- Cannot explain the 100% figure
- Cannot explain the 35% figure
- Claims cloud or tool depth that collapses under one follow-up
- Uses "we" repeatedly without ownership
- Gives architecture answers without clarifying requirements
- Treats dashboards as the entire job
- Reveals proprietary or classified details
