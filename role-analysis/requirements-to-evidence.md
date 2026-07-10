# Requirements-to-Evidence Map

This is the **secret sauce** of the repo. Every interview answer should be traceable to this file.

## Executive view

| Requirement | Josh's evidence | Risk | Interview language |
|---|---|---|---|
| Root-cause analysis | Found 100% RF traffic overestimation | Needs deeper technical detail | Explain detection, isolation, validation |
| Defense systems | Raytheon RF simulation | Avoid classified details | Focus on translating physics into software |
| Python and SQL | Viasat analytical model | Strong | Lead story |
| Cloud systems | Limited evidence | Main gap | Honest adjacency answer |

The executive view is intentionally simple. It should be readable in ten seconds and should guide the whole phone screen:

- **Lead with Python, SQL, RF, and root-cause analysis.**
- **Use Raytheon to prove defense credibility and discretion.**
- **Treat cloud as the main risk and answer it precisely.**
- **Never let a gap become the final sentence of an answer.**

The goal is not to make Josh appear perfect. The goal is to make the strongest evidence unmistakable and every gap survivable.

## Psychology-backed response cards

The executive table is for scanning. These cards are for retrieval under pressure.

| Requirement | Memory cue | Interviewer concern | If-then response | Retrieval test |
|---|---|---|---|---|
| Root-cause analysis | **Expected vs. measured** | Was this a lucky find or disciplined investigation? | **If** asked how he found it, **then** walk through signal → hypotheses → isolation → correction → validation | Explain in 30, 90, and 300 seconds without notes |
| Defense systems | **Physics into software** | Can he discuss technical depth without mishandling classified detail? | **If** asked for restricted specifics, **then** state the boundary and explain the unclassified engineering method | Give a useful answer while omitting program details |
| Python and SQL | **Data → model → defect** | What did he personally build, and how did data move? | **If** asked for implementation detail, **then** name source, grain, SQL transformation, Python output, comparison, and result | Draw the flow verbally from raw data to decision |
| Cloud systems | **Truth → bridge → return** | Does he meet the requirement, or is he inflating exposure? | **If** asked about cloud, **then** state exact platform/services/context, define his ownership, and bridge to production reliability principles | Answer without saying only “fast learner” |

## Why this design is psychologically stronger

### 1. It separates recognition from retrieval

Reading a polished answer creates familiarity, which can be mistaken for mastery. The **retrieval test** column forces Josh to produce the answer without seeing it. Retrieval practice generally strengthens later recall more than repeated rereading and also exposes knowledge gaps before the real interview.

**Repo behavior:** cover the evidence, risk, and language columns; read only the requirement; answer aloud; then reveal and correct.

### 2. It uses compact cues instead of scripts

Long scripts increase the amount Josh must hold and monitor while speaking. The three-to-five-word **memory cue** gives him a retrieval handle while preserving natural language. This matters because evaluative anxiety can consume attentional control and make heavily memorized wording brittle.

**Repo behavior:** memorize the cue, proof sequence, and closing connection—not every sentence.

### 3. It adds self-explanation, not just rehearsal

Being able to repeat a sentence is weaker than being able to explain why the evidence proves the requirement. Self-explanation research shows that generating causal and conceptual explanations can deepen understanding.

For every row, Josh must answer:

1. Why does this evidence satisfy the requirement?
2. What would make the evidence weaker than it first sounds?
3. What follow-up would reveal shallow knowledge?
4. What detail proves ownership?
5. What detail proves validation?

### 4. It converts predictable threats into if-then plans

The **if-then response** column links a likely interview cue to a prepared action. Research on implementation intentions finds that specific cue-response plans can improve follow-through compared with vague intentions.

Bad plan:

> I will stay calm if they challenge me.

Operational plan:

> If they question my cloud depth, then I will state the exact context, define what I owned, distinguish production from coursework, and close on the transferable reliability problems I have solved.

### 5. It standardizes evidence evaluation

Structured interviews are generally more reliable and job-relevant than unstructured impression-based interviews. Josh cannot control the recruiter's process, but he can structure his own preparation around the same logic: one requirement, one evidence anchor, one risk, one response rule, one scoring standard.

**Repo behavior:** score each answer immediately after delivery instead of assigning one vague overall impression to the mock.

### 6. It calibrates confidence

The risk column prevents two opposite errors:

- **Underclaiming:** hiding strong evidence behind timid language
- **Overclaiming:** presenting adjacency as direct experience

Confidence should track proof depth. A score of 3 means Josh can survive a five-minute deep dive, not merely deliver a polished opening sentence.

### 7. It trains flexible retrieval

Interview questions will not use the exact words in this table. Practice should mix the order and wording of prompts so Josh learns to recognize the underlying competency rather than memorize a sequence.

Example variations for root-cause analysis:

- Tell me about a difficult technical problem.
- How do you know when a metric is wrong?
- Describe a surprising production result.
- Tell me about a time your first hypothesis failed.
- How do you validate a correction?

The same evidence should survive all five.

## Science-backed practice protocol

### Pass 1: Blank-page retrieval

Without opening a story file, Josh writes or says everything he remembers about one evidence row for two minutes.

Purpose: expose missing knowledge instead of generating false confidence through rereading.

### Pass 2: Self-explanation

Josh explains why the story is relevant to mission analytics and which details prove ownership, judgment, and validation.

Purpose: deepen the conceptual map so he can adapt when wording changes.

### Pass 3: Progressive compression

Deliver the same evidence in:

- **20 to 30 seconds:** recruiter summary
- **75 to 90 seconds:** normal interview answer
- **Four to five minutes:** technical deep dive

Purpose: build control over answer depth rather than defaulting to either vagueness or rambling.

### Pass 4: Interleaved challenge

Amy mixes requirements and asks unpredictable follow-ups rather than practicing each story in a fixed block.

Purpose: train selection of the correct evidence under realistic uncertainty.

### Pass 5: Immediate feedback

After each answer, score:

- Relevance
- Specificity
- Ownership
- Validation
- Role connection
- Clarity
- Confidence calibration
- Brevity

Then redo the answer once immediately.

Purpose: retrieval plus corrective feedback is more useful than merely repeating an uncorrected answer.

### Pass 6: Spaced return

Revisit the same four rows in shorter sessions rather than one giant cram block:

1. First full session
2. A short retrieval round later the same day
3. Another round the next day
4. A final light round before the interview

Purpose: distributed practice generally produces better retention than massed repetition.

### Pass 7: Pressure rehearsal

Run one mock with a timer, neutral facial expression, interruptions, and skeptical follow-ups. Do not make every practice session hostile; one realistic pressure round is enough to reveal fragility.

Purpose: make challenge cues familiar and test whether the if-then plans survive mild stress.

### Pass 8: Pre-interview worry offload

Before the final rehearsal or actual call, spend five minutes writing uncensored worries, then close the page and switch to the four-row executive view.

Purpose: research on expressive writing before evaluative tasks suggests that externalizing worries can reduce their interference for some anxious performers. Treat this as a low-cost aid, not a guaranteed performance hack.

## Full priority matrix

| Requirement | Josh's evidence | Risk | Interview language |
|---|---|---|---|
| Root-cause analysis | Found a defect causing 100% RF traffic overestimation | Needs exact technical detail | Explain detection, competing hypotheses, isolation, correction, and validation |
| Defense systems | Raytheon RF simulation in a classified aerospace environment | Avoid restricted details | Focus on translating physical RF concepts into dependable software |
| Python and SQL | Viasat analytical model queried RF test data with SQL and calculated expected traffic in Python | Strong, but architecture is undocumented | Lead story; describe source, transformation, model, comparison, and result |
| Cloud systems | Limited evidence on submitted résumé | Main required-qualification risk | Give a precise truthful account, then bridge from APIs, CI/CD, Linux, and data reliability |
| Automation and reliability | Python-based CI/CD tests reduced failures by 35% | Metric may collapse under follow-up | Define what failed, baseline, intervention, period, and operational impact |
| Hardware analytics | Finisar Python automation for transceiver testing across temperature ranges | Missing implementation detail | Explain measurements, environmental context, thresholds, exceptions, and validation |
| Low-latency or operational data | RF and network-system work; production test data | No direct streaming-platform proof | Reason clearly about freshness, late events, retries, ordering, and observability |
| Data modeling | Statistics projects and analytical-model design | No warehouse or dbt artifact shown | Explain grain, entities, relationships, lineage, and quality checks |
| Secure and isolated environments | Prior Secret clearance and classified work | Air-gapped depth may be limited | Distinguish direct experience from conceptual knowledge; emphasize disciplined operations |
| Multiple languages | Python, SQL, C#, C/C++, R, Java, Bash | Breadth can sound shallow | Lead with Python and SQL; use others as evidence of adaptability |
| Linux | Bash, Linux, CI/CD work | Clarify depth | Give one real debugging or automation example |
| Stakeholder communication | Cross-functional engineering and current STEM teaching | Needs one concrete stakeholder story | Show translation, requirements clarification, and knowledge transfer |
| Documentation and enablement | Teaching, lesson plans, engineering workflows | Résumé proof is indirect | Explain how documentation reduced dependence or errors |
| Statistical judgment | M.S. Statistics, longitudinal mixed-effects modeling, causal analysis | Can sound academic | Translate method choice into the decision and limitation |
| Autonomous-system interest | Defense, RF, aerospace, hardware background | Motivation must be authentic | Connect mission analytics to real physical-system behavior |
| Clearance eligibility | Prior Secret clearance | Current status must be verified | Answer status and eligibility directly, without guessing |
| Irvine and travel | Glendora, willing to relocate | Commute realism | State exact plan and availability |

## Signal strength

### Tier 1: Lead aggressively

1. Viasat RF traffic defect
2. Raytheon defense and RF experience
3. Python and SQL analytical workflow
4. Prior Secret clearance
5. Systems plus statistics combination

### Tier 2: Use as reinforcement

1. CI/CD automation
2. Finisar hardware verification
3. Large-scale API migration
4. Mobile-health longitudinal modeling
5. Teaching and technical communication

### Tier 3: Treat carefully

1. Cloud experience
2. Kafka, Flink, Spark, dbt, Foundry, Trino, DuckDB, Polars
3. Air-gapped architecture
4. MCAP, HDF5, and Nix
5. Any résumé metric Josh cannot reproduce or explain

## Proof standard

A claim is interview-ready only when Josh can answer all six:

1. What was the system?
2. What was wrong or needed?
3. What did Josh personally own?
4. What did he build or analyze?
5. How did he validate it?
6. What changed afterward?

## Readiness tracker

Use 0 to 3:

- **0:** Claim is unverified or unsafe
- **1:** Basic answer exists, but follow-up breaks it
- **2:** Clear 90-second answer with ownership and result
- **3:** Can survive a five-minute technical deep dive

| Evidence area | Current score | Target for phone screen | Target for technical round | Next action |
|---|---:|---:|---:|---|
| Viasat RF traffic defect | 1 | 2 | 3 | Recover root cause, SQL/model flow, and validation |
| CI/CD automation | 1 | 2 | 3 | Define the 35% metric and test architecture |
| Raytheon RF simulation | 1 | 2 | 2 | Establish safe technical depth and validation |
| Finisar hardware testing | 1 | 1 | 2 | Recover metrics, automation flow, and efficiency basis |
| Cloud experience | 0 | 2 | 2 | Build factual service-level inventory |
| Career narrative | 2 | 3 | 3 | Rehearse until natural, not memorized |
| Why Anduril | 1 | 3 | 3 | Personalize beyond company language |
| Logistics and clearance | 1 | 3 | 3 | Verify exact answers before Monday |

## Recruiter takeaway

> His titles were systems and software engineering, but the substance of his work is strongly data-oriented: querying RF test data, modeling expected behavior, validating measurements, automating quality workflows, debugging production systems, and turning complex system behavior into reliable conclusions.

## Technical-team takeaway

> He has not used every tool in our stack, but he understands the harder underlying problem: how to trace, validate, and explain data produced by complex physical and software systems.

## Research basis

- Roediger, H. L., & Karpicke, J. D. (2006). *Test-enhanced learning: Taking memory tests improves long-term retention.* Psychological Science.
- Chi, M. T. H., de Leeuw, N., Chiu, M. H., & LaVancher, C. (1994). *Eliciting self-explanations improves understanding.* Cognitive Science.
- Gollwitzer, P. M., & Sheeran, P. (2006). *Implementation intentions and goal achievement: A meta-analysis of effects and processes.* Advances in Experimental Social Psychology.
- Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). *Distributed practice in verbal recall tasks: A review and quantitative synthesis.* Psychological Bulletin.
- Campion, M. A., Palmer, D. K., & Campion, J. E. (1997). *A review of structure in the selection interview.* Personnel Psychology.
- Eysenck, M. W., Derakshan, N., Santos, R., & Calvo, M. G. (2007). *Anxiety and cognitive performance: Attentional control theory.* Emotion.
- Ramirez, G., & Beilock, S. L. (2011). *Writing about testing worries boosts exam performance in the classroom.* Science.
