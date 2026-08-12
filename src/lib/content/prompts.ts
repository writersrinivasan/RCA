export type PromptTemplate = {
  slug: string;
  title: string;
  useCase: string;
  whenToUse: string;
  promptText: string;
  tips: string[];
  goodOutputLooksLike: string;
  redFlag: string;
};

export type PromptCategory = {
  slug: string;
  name: string;
  icon: string;
  description: string;
  moduleLink: string;
  prompts: PromptTemplate[];
};

// Ordered day by day (Day 1 → Day 2 → Day 3) to match the course agenda —
// see PromptLibraryClient's "Day-wise Agenda" overview, which derives each
// category's day from `moduleLink` via the curriculum data.
export const promptCategories: PromptCategory[] = [
  // ───────────────────────── DAY 1 ─────────────────────────
  {
    slug: "hypothesis-generation",
    name: "Hypothesis Generation",
    icon: "Lightbulb",
    description:
      "Getting a fast, well-structured first theory from raw incident notes — without letting that first theory become the only theory.",
    moduleLink: "why-ai-changes-rca",
    prompts: [
      {
        slug: "first-hypothesis",
        title: "First-Pass Hypothesis with Forced Alternatives",
        useCase: "Kick off an investigation from raw notes or a ticket thread.",
        whenToUse:
          "The moment an incident is reported and the team needs somewhere to start looking — not a final answer.",
        promptText:
          "You are helping generate investigation leads, not a final conclusion. Here is the raw incident information: [PASTE SANITIZED LOGS / TICKET NOTES / TIMELINE].\n\nGive me exactly 3 possible root-cause hypotheses, ranked by likelihood. For each one:\n1. State the hypothesis in one sentence.\n2. State what specific evidence in the information above supports it.\n3. State one thing we could check right now that would quickly rule it in or out.\nDo not pick a single 'most likely' answer — present all 3 with equal weight and let the evidence decide.",
        tips: [
          "Insist on 3 hypotheses, never 1 — this is the single biggest lever against anchoring.",
          "Read the 'what would rule it out' column first — it tells you whether the hypothesis is actually testable.",
        ],
        goodOutputLooksLike:
          "Three distinct hypotheses, each tied to a specific line of evidence already in the notes, each with a concrete next check — not three phrasings of the same idea.",
        redFlag:
          "All three hypotheses point to the same underlying cause worded differently, or none of them cite anything specific from the pasted notes.",
      },
      {
        slug: "pattern-across-tickets",
        title: "Pattern Detection Across Past Tickets",
        useCase: "Spot whether a new incident matches a recurring pattern in ticket history.",
        whenToUse:
          "When an incident feels familiar and you want to know if it's happened before, fast — before assuming it's brand new.",
        promptText:
          "Here are summaries of the last [NUMBER] tickets related to [SYSTEM/AREA]: [PASTE SANITIZED TICKET SUMMARIES].\n\nA new incident just came in: [PASTE NEW INCIDENT SUMMARY].\n\nDoes this new incident match a pattern in the ticket history? If yes, name the specific past tickets it resembles and what they had in common. If no clear pattern exists, say so directly instead of forcing a match — do not stretch a weak similarity into a confident pattern.",
        tips: [
          "Explicitly told the model to say 'no pattern' rather than force one — models default toward finding a connection if you don't block that.",
          "Ask for ticket numbers/IDs it's matching against so you can spot-check the comparison yourself.",
        ],
        goodOutputLooksLike:
          "A short, specific list of matching tickets with what they share in common — or an honest 'no strong match found.'",
        redFlag:
          "A confident pattern claim with no specific ticket IDs cited, or a pattern built from one loosely related ticket.",
      },
    ],
  },
  {
    slug: "evidence-validation",
    name: "Evidence Validation",
    icon: "ShieldCheck",
    description:
      "Stress-testing a hypothesis someone already believes — the Module 2 questions, turned into a request the AI has to actually answer.",
    moduleLink: "what-good-looks-like",
    prompts: [
      {
        slug: "stress-test-hypothesis",
        title: "Stress-Test an Existing Hypothesis",
        useCase: "Before a hypothesis goes into a postmortem or a customer update, pressure-test it.",
        whenToUse:
          "Anytime someone — human or AI — has already proposed a root cause and it's about to be written down as fact.",
        promptText:
          "Here is a proposed root cause: [PASTE HYPOTHESIS]. Here is the available evidence: [PASTE SANITIZED LOGS / TIMELINE / METRICS].\n\nDo three things, in order:\n1. List every specific piece of evidence above that directly supports this hypothesis. If there is none, say so.\n2. List any evidence above that contradicts or is inconsistent with this hypothesis.\n3. Describe one test we could run right now that would disprove this hypothesis if it's wrong.\nBe skeptical by default — your job here is to find holes, not to confirm the theory.",
        tips: [
          "This is the Module 2 three-question framework, encoded directly into the prompt — use it any time you're the one reviewing, not just when AI is drafting.",
          "Pay closest attention to step 2 — a hypothesis with zero contradicting evidence listed either is very solid or wasn't checked hard enough.",
        ],
        goodOutputLooksLike:
          "A genuinely mixed list — supporting evidence and contradicting evidence both present — plus one concrete disproof test with clear pass/fail criteria.",
        redFlag:
          "Step 2 comes back empty every single time regardless of the hypothesis — a sign the model is confirming rather than actually stress-testing.",
      },
      {
        slug: "check-query-scope",
        title: "Sanity-Check an Observability Query's Scope",
        useCase: "Confirm an AI-generated query actually covered the right window, source, and filters.",
        whenToUse: "Any time someone reports 'the query confirmed it' or 'the query found nothing' — before you accept either.",
        promptText:
          "Here is a query that was run: [PASTE QUERY]. Here is the incident window we care about: [START TIME] to [END TIME], on system [SYSTEM NAME].\n\nExplain, in plain language a non-technical reader can follow, exactly what time window this query covers, what data source or index it searches, and any filters it applies. Then state clearly: does this query's scope actually match the incident window and system stated above, or is there a mismatch?",
        tips: [
          "This is the Module 2B follow-up question, turned into a request you can run yourself without knowing query syntax.",
          "Always supply the incident window and system independently — don't let the model infer it from the query, or a wrong query will look self-consistent.",
        ],
        goodOutputLooksLike:
          "A plain-language breakdown of window/source/filters plus an explicit yes/no on whether it matches your stated incident window.",
        redFlag:
          "A vague 'this query looks reasonable' answer that doesn't explicitly restate the time window and source in plain numbers.",
      },
    ],
  },
  {
    slug: "observability-queries",
    name: "Observability Query Requests",
    icon: "Search",
    description:
      "Asking for a query in plain language, and getting back a plain-language explanation of what it will actually check — the Module 2B skill.",
    moduleLink: "reading-ai-evidence",
    prompts: [
      {
        slug: "request-query-with-explanation",
        title: "Request a Query, Require a Plain-Language Explanation",
        useCase: "Have an engineer (or yourself, reading over their shoulder) get a query plus a scope check in one step.",
        whenToUse: "Any time a query is being generated to investigate an incident, not just to explore.",
        promptText:
          "Write a [SPLUNK / DATADOG / ELK / KQL] query that searches [SYSTEM/SERVICE] for [WHAT YOU'RE LOOKING FOR, e.g. 'HTTP 500 errors'] between [START TIME] and [END TIME].\n\nAfter the query, add a plain-language explanation with exactly three lines: 'Time window: ...', 'Data source: ...', 'Filters applied: ...' — written so someone with no query-language background can check it's asking the right question.",
        tips: [
          "This is the query-scope habit from Module 2B built into the request itself, so the check happens automatically instead of as an afterthought.",
          "As a leader, you only ever need to read the three-line plain-language block — never the query syntax itself.",
        ],
        goodOutputLooksLike:
          "A query plus a clean three-line plain-language scope summary that matches the incident window and system you actually care about.",
        redFlag:
          "The three-line summary is missing, vague ('recent data'), or doesn't match the specific window and system you asked for.",
      },
    ],
  },

  // ───────────────────────── DAY 2 ─────────────────────────
  {
    slug: "timeline-reconstruction",
    name: "Timeline Reconstruction",
    icon: "Clock",
    description:
      "Turning scattered logs, alerts, and messages into a single ordered timeline — the foundation every good RCA and every good retrospective starts from.",
    moduleLink: "leading-retrospective",
    prompts: [
      {
        slug: "unify-timeline",
        title: "Unify Scattered Sources into One Timeline",
        useCase: "Combine logs, alerts, and chat messages into a single chronological view.",
        whenToUse:
          "Right after an incident, before the retrospective — so the meeting opens with facts, not memory.",
        promptText:
          "Build a single chronological timeline from these sources: [PASTE SANITIZED: ALERT LOG / DEPLOY LOG / INCIDENT CHANNEL MESSAGES / TICKET UPDATES].\n\nFor every entry, include: exact timestamp, source (which system it came from), and a one-line plain-language description of what happened. Sort strictly by time. Flag any gaps longer than 10 minutes where nothing was logged, and flag any place where two sources disagree on timing.",
        tips: [
          "The 'flag disagreements' instruction is the most valuable part — it surfaces exactly where evidence is shaky before the meeting starts.",
          "Always keep the source column — it lets someone verify any single line against the original system in seconds.",
        ],
        goodOutputLooksLike:
          "A clean table: timestamp, source, event — with explicit callouts for gaps and source disagreements, not a smoothed-over narrative.",
        redFlag:
          "A tidy narrative paragraph instead of a sourced, timestamped table — fluent prose that's actually harder to verify than raw entries.",
      },
      {
        slug: "correlate-deploy",
        title: "Correlate Timeline Against Recent Changes",
        useCase: "Check whether a recent deploy, config change, or feature flag lines up with when things broke.",
        whenToUse: "Early in an investigation, as a fast first correlation check — not as a verdict.",
        promptText:
          "Here is the incident timeline: [PASTE TIMELINE]. Here is the change log for the same period: [PASTE SANITIZED DEPLOY / CONFIG / FEATURE-FLAG LOG].\n\nList every change that occurred within 30 minutes before the first sign of trouble in the timeline. For each, state only that it is 'temporally correlated' — do not claim it caused the incident. Separately, note if no changes occurred in that window at all.",
        tips: [
          "Notice the prompt explicitly bans the word 'caused' — correlation in time is not causation, and this keeps the model from overstating it.",
          "A 'no changes in that window' result is itself valuable — it rules out the most common first guess.",
        ],
        goodOutputLooksLike:
          "A list of candidate changes with exact timestamps and time-gap to the incident start, explicitly labeled as correlation, not cause.",
        redFlag:
          "Language like 'X caused the incident' appearing anywhere in the output — a sign the model jumped from correlation to causation unprompted.",
      },
    ],
  },
  {
    slug: "framework-application",
    name: "Framework Application",
    icon: "Route",
    description:
      "Drafting the structured artifacts behind Fishbone and Kepner-Tregoe from raw notes — the exact AI-assist points Module 4 describes, turned into requests you can hand your team.",
    moduleLink: "mapping-frameworks",
    prompts: [
      {
        slug: "draft-fishbone",
        title: "Draft a Fishbone Diagram from Raw Notes",
        useCase: "Turn messy incident notes into a structured People/Process/Technology/Environment starting draft.",
        whenToUse:
          "When a retrospective needs a broad first pass before the team narrows down to specifics, or when comparing multiple recurring incidents for a shared pattern.",
        promptText:
          "Here are raw notes from an incident: [PASTE SANITIZED NOTES / TIMELINE / TICKET THREAD].\n\nSort every potential contributing factor mentioned or implied in these notes into four categories: People, Process, Technology, Environment. For each category, list only factors that have some support in the notes above — do not invent factors that aren't mentioned or reasonably implied. If a category has no supported factors, say so instead of forcing an entry.",
        tips: [
          "The 'don't force an entry' instruction matters — a Fishbone diagram with something plausible-sounding in every box regardless of evidence defeats the purpose.",
          "Use this as a first draft to react to, not a finished diagram — the team still has to confirm each entry against real evidence.",
        ],
        goodOutputLooksLike:
          "Some categories may have 2-3 entries and others zero — a lopsided result is often more honest than an evenly populated one.",
        redFlag:
          "Every single category gets exactly one or two plausible-sounding entries regardless of how thin the notes actually are — a sign the model padded categories instead of leaving gaps.",
      },
      {
        slug: "draft-is-is-not",
        title: "Draft an IS / IS-NOT Table for Kepner-Tregoe",
        useCase: "Sharpen a fuzzy problem statement into a structured comparison of what's affected versus what isn't.",
        whenToUse: "When the team can't agree on how big or how narrow an incident actually is.",
        promptText:
          "Here are the incident notes: [PASTE SANITIZED NOTES / TICKET DATA / CUSTOMER REPORTS].\n\nBuild an IS / IS-NOT table across these dimensions: Region, Platform/Device, Time Window, User Segment. For each dimension, state what IS affected and what IS NOT affected, based only on what's in the notes. If the notes don't say enough to fill in a dimension confidently, write 'not enough data' instead of guessing.",
        tips: [
          "The IS-NOT column is often more diagnostic than the IS column — read it first once the table comes back.",
          "'Not enough data' is a valid and useful answer — it tells the team exactly what to go find out next, rather than papering over a gap.",
        ],
        goodOutputLooksLike:
          "A table with at least one 'not enough data' cell if the notes are genuinely incomplete — a fully filled table from thin notes is a red flag on its own.",
        redFlag:
          "Every cell is confidently filled in even when the source notes clearly don't support that level of detail.",
      },
    ],
  },

  // ───────────────────────── DAY 3 ─────────────────────────
  {
    slug: "stakeholder-communication",
    name: "Stakeholder Communication",
    icon: "Megaphone",
    description:
      "Translating a technical finding into the right update for the right audience — and catching overpromises before they ship.",
    moduleLink: "incident-communication",
    prompts: [
      {
        slug: "executive-summary",
        title: "Executive Summary from Technical Notes",
        useCase: "Translate an engineering-facing incident summary into a 3-sentence executive update.",
        whenToUse: "Whenever a technical write-up needs to go to a non-technical stakeholder fast.",
        promptText:
          "Here is a technical incident summary written for engineers: [PASTE TECHNICAL SUMMARY].\n\nRewrite this as a 3-sentence update for an executive with no technical background. Sentence 1: what happened and who was affected, in business terms (not system names). Sentence 2: current status, stated with the same level of confidence the technical summary actually has — do not round 'likely resolved' up to 'resolved.' Sentence 3: what happens next and when the next update will come.",
        tips: [
          "The explicit 'don't round up confidence' instruction is the single highest-value line in this prompt — it's where overpromising sneaks in.",
          "Always compare the confidence words in the output ('resolved' vs 'likely resolved' vs 'identified a likely cause') against what the team has actually confirmed.",
        ],
        goodOutputLooksLike:
          "Three tight sentences, business language, with hedging language that matches — not exceeds — the team's actual confidence.",
        redFlag:
          "The word 'resolved' or 'fixed' appearing when the technical source only said 'likely' or 'appears to.'",
      },
      {
        slug: "customer-update",
        title: "Customer-Facing Update with Liability Check",
        useCase: "Draft a customer notification that doesn't overpromise a cause or admit fault prematurely.",
        whenToUse: "For any customer-facing update during or after an active incident.",
        promptText:
          "Draft a customer-facing status update based on this internal summary: [PASTE INTERNAL SUMMARY].\n\nRequirements: state the customer-visible impact clearly and first. Do not name an internal root cause unless it has been fully confirmed — use 'we are investigating' language if it hasn't. Do not use language that could be read as admitting fault or liability unless that has been explicitly approved. Keep it under 100 words. After the draft, list separately any sentence you were unsure about from a liability or overpromising standpoint.",
        tips: [
          "The self-flagging instruction at the end ('list any sentence you were unsure about') is worth the extra line — it surfaces the exact spots that need your review pass from Module 5B.",
          "Never send this draft without a human reading the self-flagged list first, even if the draft itself looks clean.",
        ],
        goodOutputLooksLike:
          "A concise, impact-first update with cautious cause language, plus a short self-flagged list of uncertain lines for your review.",
        redFlag:
          "A specific named root cause in a customer-facing draft when the internal summary only described a working theory.",
      },
    ],
  },
  {
    slug: "data-sanitization",
    name: "Data Sanitization",
    icon: "ShieldAlert",
    description:
      "A second set of eyes for what needs redacting before anything reaches an AI tool — the Module 6 data-handling guardrail, as a repeatable request.",
    moduleLink: "governance-risk-privacy",
    prompts: [
      {
        slug: "flag-redactions",
        title: "Flag What Needs Redacting Before It Goes Anywhere",
        useCase: "Get a second set of eyes on a log snippet or ticket thread before it's pasted into any AI tool.",
        whenToUse:
          "Every time, before production logs or customer data reach an AI tool — run this in your organization's approved tool only, never a consumer-grade one.",
        promptText:
          "Review this text and list every piece of information that looks like it could be PII, a credential, or a token — names, emails, account IDs, session tokens, API keys, IP addresses, phone numbers, or anything else that could identify a specific person or grant access to a system: [PASTE TEXT TO CHECK].\n\nFor each item found, quote the exact snippet and say what category it falls into. Do not summarize or analyze the incident itself — this pass is only for finding what needs to be redacted before the real analysis happens.",
        tips: [
          "Run this as its own separate step, in your organization's approved tool, before the actual RCA analysis prompt — don't combine the two in one request.",
          "Treat this as a second check, not a replacement for your team's existing sanitization process — the Governance Checklist in this app still applies.",
        ],
        goodOutputLooksLike:
          "A short, specific list of exact snippets flagged with categories — easy to redact by hand before the real analysis prompt goes out.",
        redFlag:
          "A vague 'this looks fine, no sensitive data found' with no itemized list — that's not a real check, it's a guess.",
      },
    ],
  },
  {
    slug: "rca-documentation",
    name: "RCA Documentation",
    icon: "FileText",
    description:
      "Turning a validated investigation into a clean, evidence-anchored write-up — fast, without smoothing over the parts that still need scrutiny.",
    moduleLink: "playbook-prompt-library",
    prompts: [
      {
        slug: "draft-postmortem",
        title: "Draft a Postmortem from Validated Findings",
        useCase: "Produce a first-draft postmortem document once the investigation is actually done.",
        whenToUse:
          "After validation, not before — this prompt is for writing up a confirmed finding, not for generating one.",
        promptText:
          "Draft a postmortem using this validated timeline and confirmed root cause: [PASTE VALIDATED TIMELINE + CONFIRMED CAUSE + EVIDENCE].\n\nUse this structure: Summary (2-3 sentences), Impact (who/what was affected, for how long), Timeline (timestamped), Root Cause (with the specific evidence cited inline, not just asserted), What Went Well, What Didn't, Action Items (owner + due date for each).\nFor the Root Cause section specifically: every claim must reference the evidence provided — do not add any explanation or detail that wasn't in the source material I gave you.",
        tips: [
          "The 'do not add detail that wasn't in the source material' instruction is the most important line — it stops the model from filling narrative gaps with plausible-sounding invention.",
          "Always read the Root Cause section against the original evidence before this goes anywhere near a customer or executive.",
        ],
        goodOutputLooksLike:
          "Every sentence in the Root Cause section maps back to something you actually pasted in — no new specifics have appeared.",
        redFlag:
          "A root cause section with more specific detail than the source material contained — a sign the model filled a gap instead of leaving it open.",
      },
      {
        slug: "ai-involvement-note",
        title: "Generate the AI-Involvement Documentation Line",
        useCase: "Standardize how AI involvement gets noted in every postmortem, per your playbook.",
        whenToUse: "As the last step before a postmortem is finalized — a Module 7 playbook habit.",
        promptText:
          "Based on this investigation summary: [PASTE BRIEF SUMMARY OF WHERE AI WAS USED — e.g., 'AI drafted first hypothesis, drafted timeline from logs, drafted this document'], write one sentence for the postmortem that documents where AI was used and what was independently validated by a human. Keep it factual and specific — no marketing language, no vague 'AI-assisted' phrasing.",
        tips: [
          "One sentence is the target length — this is a transparency habit, not a section of the report.",
          "Specific beats vague: 'AI drafted the initial timeline; engineering validated all timestamps against source logs' is useful; 'AI was used in this investigation' is not.",
        ],
        goodOutputLooksLike:
          "A single, specific sentence naming what AI did and what a human checked — reusable as a template line across every postmortem.",
        redFlag:
          "Generic phrasing like 'AI tools assisted with this analysis' that doesn't say what was AI-drafted versus human-validated.",
      },
    ],
  },
];

export function getAllPrompts(): (PromptTemplate & { category: string; categorySlug: string })[] {
  return promptCategories.flatMap((cat) =>
    cat.prompts.map((p) => ({ ...p, category: cat.name, categorySlug: cat.slug }))
  );
}
