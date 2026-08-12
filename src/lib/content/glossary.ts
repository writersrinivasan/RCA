export type GlossaryTerm = {
  term: string;
  category: "AI Tools" | "Observability Platforms" | "RCA Frameworks" | "Governance & Risk" | "Core Concepts";
  definition: string;
  leaderNote: string;
};

export const glossary: GlossaryTerm[] = [
  {
    term: "Root Cause Analysis (RCA)",
    category: "Core Concepts",
    definition:
      "A structured process for finding the actual underlying reason an incident happened, rather than just the symptom that was noticed first.",
    leaderNote:
      "The whole course rests on one distinction: a fast answer and a right answer are not the same thing, and AI makes fast much easier without making right any easier.",
  },
  {
    term: "Hallucination",
    category: "Core Concepts",
    definition:
      "When an AI model generates output that sounds plausible and confident but isn't grounded in the actual evidence it was given — effectively, a fluent guess presented as fact.",
    leaderNote:
      "This is the single risk this entire course is built to manage. It's not a bug that gets fixed — it's a standing property of how these tools generate language, so the leadership habit is checking, not waiting for it to stop happening.",
  },
  {
    term: "Evidence-Anchoring",
    category: "Core Concepts",
    definition:
      "Whether a claim points to something specific and checkable — a ticket, a timestamp, a change log — versus just asserting a cause in confident prose.",
    leaderNote:
      "This is the fastest possible check on any RCA write-up: does it name a source, or does it just sound sure of itself?",
  },
  {
    term: "Blast Radius (of being wrong)",
    category: "Governance & Risk",
    definition:
      "What it would cost — in time, trust, money, or compliance exposure — if a given hypothesis is accepted and it turns out to be wrong.",
    leaderNote:
      "Use this to calibrate how much scrutiny a hypothesis deserves. A low-stakes internal tooling glitch needs less scrutiny than a customer-facing payment failure with the same evidence strength.",
  },
  {
    term: "PII (Personally Identifiable Information)",
    category: "Governance & Risk",
    definition:
      "Any data that can identify a specific individual — names, email addresses, account IDs, session tokens, IP addresses, and similar fields.",
    leaderNote:
      "This is the data that must be sanitized before it ever reaches an AI tool, approved or not. When in doubt about whether a log snippet contains it, the answer is to ask, not to assume it's fine.",
  },
  {
    term: "Approved Tool / Approved-AI-Usage Policy",
    category: "Governance & Risk",
    definition:
      "An AI tool your organization has a contract with covering data handling, retention, and training-use restrictions — as opposed to a consumer-grade version of the same underlying model with no such protections.",
    leaderNote:
      "The same task — summarizing a log file — can be entirely safe in one tool and a policy violation in another, based purely on which contract sits behind it. This is worth confirming with your own IT/security team by name.",
  },
  {
    term: "Claude",
    category: "AI Tools",
    definition:
      "A conversational AI assistant made by Anthropic, strong at summarizing, explaining, and drafting language in natural back-and-forth conversation.",
    leaderNote:
      "Good for: drafting summaries, timelines, and communication. Not built for live access to your systems unless specifically connected to one.",
  },
  {
    term: "ChatGPT",
    category: "AI Tools",
    definition:
      "A conversational AI assistant made by OpenAI, functionally similar in role to Claude for most RCA-adjacent conversational tasks.",
    leaderNote:
      "Same leadership lens as Claude: excellent for drafting and summarizing, and the same 'confident wrong answer' risk applies equally.",
  },
  {
    term: "Copilot",
    category: "AI Tools",
    definition:
      "A coding assistant embedded directly in a developer's code editor, strong at suggesting code and scripts in the context of the codebase it's working in.",
    leaderNote:
      "If an engineer says 'Copilot found the root cause,' that's worth a second look — Copilot is built for writing code, not for incident narrative reasoning.",
  },
  {
    term: "Cursor",
    category: "AI Tools",
    definition:
      "A full AI-native code editor built around AI-assisted software development, used by engineers digging deeply through a codebase.",
    leaderNote:
      "Largely irrelevant to you as a leader reviewing a postmortem — it's a tool for the engineering work behind the incident, not for producing the RCA write-up itself.",
  },
  {
    term: "Splunk",
    category: "Observability Platforms",
    definition:
      "A log-search platform used to search and analyze large volumes of machine-generated log data.",
    leaderNote:
      "Good for questions like 'show me every error message matching this pattern in this time window.' You'll never operate it — just know what kind of question it answers.",
  },
  {
    term: "Datadog",
    category: "Observability Platforms",
    definition:
      "An observability platform focused on metrics, dashboards, and monitoring across infrastructure and applications.",
    leaderNote:
      "Leans toward 'did this number change' questions — latency, error rate, throughput — rather than raw log search.",
  },
  {
    term: "ELK / Kibana",
    category: "Observability Platforms",
    definition:
      "Elasticsearch, Logstash, and Kibana — an open-source log-search and visualization stack, functionally similar in role to Splunk.",
    leaderNote:
      "Same leadership lens as Splunk: a log-search platform, good for finding specific patterns across large volumes of logs.",
  },
  {
    term: "KQL (Kusto Query Language)",
    category: "Observability Platforms",
    definition:
      "Microsoft's query language, common in Azure Monitor and Microsoft 365 environments, used to search and analyze log and telemetry data.",
    leaderNote:
      "You'll see this if your organization is Microsoft/Azure-centric. Same rule as any other query language: you don't need to read the syntax, just the plain-language explanation of what it searched.",
  },
  {
    term: "5 Whys",
    category: "RCA Frameworks",
    definition:
      "An RCA method that repeatedly asks 'why' — typically five times — with each answer becoming the next question, until reaching an actionable cause.",
    leaderNote:
      "Best for fast-moving, single-cause-looking incidents. See the full Frameworks resource for where AI helps and where it doesn't.",
  },
  {
    term: "Fishbone / Ishikawa Diagram",
    category: "RCA Frameworks",
    definition:
      "An RCA method that organizes potential causes into categories — typically People, Process, Technology, and Environment — branching off a central problem.",
    leaderNote:
      "Best when the cause could span more than just a technical bug — and especially good for spotting patterns across multiple recurring incidents.",
  },
  {
    term: "Fault Tree Analysis (FTA)",
    category: "RCA Frameworks",
    definition:
      "An RCA method that works backward from an undesired top-level event through logical combinations of contributing failures.",
    leaderNote:
      "Reserved for safety- or compliance-sensitive incidents — one of the categories in Module 6 that requires named human sign-off before an AI-assisted conclusion is finalized.",
  },
  {
    term: "Kepner-Tregoe Problem Analysis",
    category: "RCA Frameworks",
    definition:
      "An RCA method built around an IS / IS-NOT table — comparing what is affected against what conspicuously isn't — to sharpen a fuzzy problem statement.",
    leaderNote:
      "Reach for this when a team can't agree on how big or how narrow an incident actually is — the IS-NOT column is often more diagnostic than the IS column.",
  },
  {
    term: "Postmortem",
    category: "Core Concepts",
    definition:
      "A written record produced after an incident, documenting what happened, its impact, the root cause, and follow-up action items.",
    leaderNote:
      "This is the document Module 7's playbook entry says should note where AI was involved and what a human independently validated.",
  },
];

export const glossaryCategories = [
  "Core Concepts",
  "Governance & Risk",
  "AI Tools",
  "Observability Platforms",
  "RCA Frameworks",
] as const;
