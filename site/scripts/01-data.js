const evidenceCards = [
  {
    title: "Root cause analysis",
    cue: "Expected vs. measured",
    summary: "Use the Viasat traffic defect to show a disciplined investigation, not a lucky find.",
    concern: "Was this a repeatable method or an accidental discovery?",
    protocol: "Signal → hypotheses → isolation → correction → validation",
    test: "Explain the same story in 30, 90, and 300 seconds without notes."
  },
  {
    title: "Defense systems",
    cue: "Physics into software",
    summary: "Use Raytheon to prove physical domain fluency, defense credibility, and discretion.",
    concern: "Can he show technical depth while respecting information boundaries?",
    protocol: "State the boundary → explain the unclassified method → name validation",
    test: "Give a useful technical answer while omitting program details."
  },
  {
    title: "Python and SQL",
    cue: "Data → model → defect",
    summary: "Make personal ownership and the full data path unmistakable.",
    concern: "What did he personally build, and how did the data move?",
    protocol: "Source → grain → SQL transformation → Python model → comparison → result",
    test: "Draw the flow verbally from raw RF data to an engineering decision."
  },
  {
    title: "Cloud systems",
    cue: "Truth → bridge → return",
    summary: "Treat cloud as the main gap. Precision is stronger than inflated familiarity.",
    concern: "Is he accurately describing his exposure or bluffing production depth?",
    protocol: "Exact context → personal contribution → reliability bridge → role return",
    test: "Answer without ending on the phrase “fast learner.”"
  }
];

const prompts = [
  { category: "ROOT CAUSE", text: "Tell me about a difficult technical problem.", card: 0, close: "How the same judgment transfers to deployed mission systems." },
  { category: "ROOT CAUSE", text: "How do you know when a metric is wrong?", card: 0, close: "Your standard for evidence, correction, and validation." },
  { category: "ROOT CAUSE", text: "Tell me about a time your first hypothesis failed.", card: 0, close: "How you updated the investigation instead of forcing the theory." },
  { category: "ROOT CAUSE", text: "What was the exact root cause of the RF traffic overestimation?", card: 0, close: "The engineering mechanism and how the corrected result was verified." },
  { category: "OWNERSHIP", text: "What did you personally own in the Viasat investigation?", card: 2, close: "Your implementation, analysis, decisions, and validation." },
  { category: "DATA FLOW", text: "Walk me from the raw RF test data to the final conclusion.", card: 2, close: "A clean end to end path with no mystery middle." },
  { category: "PYTHON + SQL", text: "Why did the work require both SQL and Python?", card: 2, close: "What each tool did and why the combination mattered." },
  { category: "VALIDATION", text: "How did you prove the 100% result was correct?", card: 0, close: "Independent checks, corrected behavior, and operational confirmation." },
  { category: "DEFENSE", text: "How is your Raytheon experience relevant to mission analytics?", card: 1, close: "Physical system reasoning, validated software, and defense context." },
  { category: "CONFIDENTIALITY", text: "Can you explain restricted technical work without becoming vague?", card: 1, close: "A clear boundary followed by useful engineering method." },
  { category: "CLOUD GAP", text: "What cloud data solutions have you contributed to?", card: 3, close: "The exact truth, your ownership, and the closest production reliability work." },
  { category: "MODERN STACK", text: "You have not used our full analytics stack. Why should the team move you forward?", card: 3, close: "The harder underlying problems you have already solved." },
  { category: "MODERN STACK", text: "Have you used Spark, Kafka, Flink, dbt, or Foundry?", card: 3, close: "Purpose level understanding without fake production depth." },
  { category: "ROLE FIT", text: "Your titles were systems and software engineer. How does that meet the data oriented requirement?", card: 2, close: "Querying, modeling, validating, automating, and explaining system data." },
  { category: "MOTIVATION", text: "Why Anduril?", card: 1, close: "Real physical systems, consequential operations, and tight field feedback." },
  { category: "MOTIVATION", text: "Why this Mission Analytics Engineer role?", card: 0, close: "Analysis connected to source systems, engineering constraints, and operational decisions." },
  { category: "CAREER", text: "What have you been doing since Viasat?", card: 3, close: "M.S. Statistics, teaching, technical communication, and a targeted return." },
  { category: "PRESSURE", text: "What alternative explanation did you rule out?", card: 0, close: "Competing hypotheses and the evidence that eliminated each one." },
  { category: "TRANSFER", text: "Which part of your background is most transferable here?", card: 2, close: "Trusted measurement across complex physical and software systems." },
  { category: "REFLECTION", text: "What would you do differently if you ran the investigation today?", card: 0, close: "A mature improvement without weakening the original result." }
];

const scoring = [
  ["Relevance", "Answers the question before adding context"],
  ["Specificity", "Names a real system, method, decision, or constraint"],
  ["Ownership", "Makes Josh's personal contribution unmistakable"],
  ["Validation", "Explains how he knew the result was correct"],
  ["Role connection", "Shows why the evidence matters here"],
  ["Clarity", "Understandable to the intended interviewer"],
  ["Confidence", "Grounded and calm without bluffing"],
  ["Brevity", "Appropriate depth without wandering"]
];

const checklistItems = [
  "75 second introduction is natural without reading",
  "Why Anduril is personal and specific",
  "Why this role is clear in 45 seconds",
  "Viasat story has exact ownership and validation",
  "The 100% figure is defensible",
  "The 35% figure is defensible",
  "Cloud answer is precise and truthful",
  "Clearance status is verified",
  "Irvine, travel, timing, and compensation answers are settled",
  "Three candidate questions are selected"
];
