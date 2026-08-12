import { CourseModule } from "./types";

export const modules: CourseModule[] = [
  // ───────────────────────── DAY 1 ─────────────────────────
  {
    slug: "why-ai-changes-rca",
    day: 1,
    order: 1,
    code: "Module 1",
    title: "Why AI Changes RCA — A Leader's Mental Model (and Toolset)",
    tagline: "Where AI genuinely helps, where it fools you, and which tool is which",
    duration: "50 min",
    originalDuration: "60 min",
    format: "Lecture + guided discussion",
    objectives: [
      "Explain, in plain language, where AI helps and where it introduces false confidence in RCA.",
      "Recognize the three recurring failure modes of AI-assisted RCA without needing a technical background.",
      "Recognize, at a glance, which category of AI tool fits which RCA-adjacent task — enough to sanity-check what the team reaches for.",
    ],
    intro:
      "Every support leader already knows the RCA bottleneck: too much noise, too little time, and a team under pressure to name a cause before the postmortem meeting. That pressure is exactly why teams reach for AI — and exactly why leaders need a mental model for it, not a technical manual. You don't need to know how a large language model works. You need to know what it's reliable at, what it fakes convincingly, and what question to ask when someone hands you an answer it produced.",
    timeSplit: { theoryMin: 15, handsOnMin: 35 },
    topics: [
      {
        title: "The traditional RCA bottleneck, from a leader's view",
        detail:
          "Before AI, RCA was slow because evidence was scattered — logs in one system, tickets in another, tribal knowledge in someone's head. Engineers under deadline pressure took shortcuts: they trusted the loudest theory in the room, not the best-supported one. AI doesn't remove that pressure. It changes its shape — now the shortcut is trusting the AI's first answer instead of a colleague's hunch. Same failure mode, faster and more convincing packaging.",
      },
      {
        title: "What AI is genuinely good at",
        detail:
          "Summarizing a wall of incident history into a readable timeline. Surfacing patterns across hundreds of past tickets a human would never read end-to-end. Drafting a first hypothesis fast, so the team starts investigating instead of staring at a blank page. All three are acceleration of human work — not replacement of human judgment. Treat AI output at this stage as a rough draft that buys the team ten minutes, not a verdict.",
      },
      {
        title: "What AI does poorly",
        detail:
          "Causal reasoning without grounding: it can describe what a cause would look like without any evidence that this cause is what actually happened. Sounding confident while being wrong: the model's tone doesn't shift when its certainty should. Blind spots outside what it's been shown: if the relevant log, the relevant deploy, or the relevant customer segment was never in the conversation, the model won't tell you it's missing — it will fill the gap with something plausible instead.",
      },
      {
        title: "The \"confident wrong answer\" problem",
        detail:
          "This is the single biggest risk you need to manage as a leader — not a technical curiosity for engineers to worry about. A wrong answer that sounds unsure gets double-checked automatically. A wrong answer delivered with total fluency and specific-sounding detail (\"the root cause is a race condition in the token refresh handler introduced in the March 14 deploy\") walks straight past everyone's skepticism, including yours. The fix isn't distrusting AI — it's building a habit of asking where the specificity came from.",
      },
      {
        title: "A leader's field guide to the AI toolset",
        detail:
          "Claude and ChatGPT are conversational assistants — strong at summarizing, explaining, and drafting language, weaker at anything requiring live access to your systems unless connected to one. Copilot is a coding assistant embedded in the developer's editor — strong at suggesting code and scripts in context, not built for incident narrative. Cursor is a full AI-native coding environment — powerful for an engineer digging through a codebase, irrelevant to you reviewing a postmortem. The tool a team reaches for tells you something about what kind of work they're doing — a coding assistant producing a \"root cause\" should raise a different question than a conversational assistant doing the same.",
      },
    ],
    activity: {
      title: "Field-Guide Match + Trust-Story Exchange",
      format: "individual-then-breakout",
      duration: "35 min",
      groupSize: "Breakout rooms of 6–7",
      description:
        "A fast individual warm-up followed by a structured breakout exchange, so every single participant contributes a real example instead of a handful of people doing all the talking.",
      steps: [
        "(5 min, individual) Privately guess, in the chat or a shared worksheet, which AI tool — Claude, ChatGPT, Copilot, or Cursor — fits each of 4 quick scenarios posted on screen.",
        "(5 min, live poll) Vote on the one scenario the room disagreed on most — the split itself becomes the teaching moment.",
        "(20 min, breakout rooms of 6–7) Each person shares one real moment their team trusted an AI-generated answer that turned out right or wrong, and names what leadership check was present or missing. The room appoints a scribe and picks its single best example.",
        "(5 min, main room) Three randomly-called rooms unmute and share their example in 60 seconds each via chat or voice; the facilitator ties each one back to the 'confident wrong answer' problem.",
      ],
      virtualNotes:
        "Auto-assign breakout rooms sized 6–7 (roughly 100–115 rooms for 700 people). Post the 4-scenario quiz and the discussion prompt in the chat or a pinned doc so every room has it without needing a shared screen. Use your platform's broadcast/timer feature to move all rooms together.",
    },
    misconceptions: [
      {
        claim: "AI replaces the discipline of RCA.",
        reality:
          "It accelerates the process — pulling together evidence and drafting hypotheses faster than a human could alone. It does not replace the judgment step: deciding which hypothesis the evidence actually supports is still, and will remain, a human call.",
      },
      {
        claim: "This requires me to understand how the AI works technically.",
        reality:
          "Leaders need to know what to check, not how to build it. Every check in this course is a plain-language question, not a technical skill.",
      },
      {
        claim: "Any AI tool works for any task.",
        reality:
          "The tools are built for different jobs. A coding assistant and a conversational assistant earn trust differently — knowing which one your team is using for which task is itself a useful leadership signal.",
      },
    ],
    scenario: {
      label: "Real-world scenario",
      scenario:
        "A support engineer pastes three hours of error logs into an AI assistant during a checkout-failure incident and gets back: \"Root cause: the payment gateway's SSL certificate expired at 2:14 AM, causing all HTTPS handshakes to fail.\" It's specific, it's technical, it's delivered with total confidence — and the certificate doesn't expire for another eight months.",
      leaderMove:
        "Before anyone announces this as the root cause in the incident channel, ask one question: \"What in the logs actually shows the certificate failing — not just that a failure happened around that time?\" A confident, specific-sounding answer is not the same as a sourced one.",
    },
    keyTakeaway:
      "AI compresses the time to a first hypothesis, not the time to a correct one. Your job is to keep those two things from getting confused in your team's head — and yours.",
  },
  {
    slug: "what-good-looks-like",
    day: 1,
    order: 2,
    code: "Module 2",
    title: "What \"Good\" AI-Assisted RCA Looks Like — A Leader's Evaluation Framework",
    tagline: "Four questions that separate a grounded hypothesis from a good guess",
    duration: "40 min",
    originalDuration: "45 min",
    format: "Lecture + guided walkthrough",
    objectives: [
      "Evaluate an AI-assisted RCA write-up for trustworthiness without reading logs or writing prompts.",
      "Apply a short set of questions that separate a grounded hypothesis from a plausible-sounding guess.",
    ],
    intro:
      "You will never have time to re-derive an RCA from raw logs. What you can do — every time, in under two minutes — is run a short evaluation pass on the write-up in front of you. This module gives you that pass: four questions, in order, that expose the gap between a report that sounds right and one that is right.",
    timeSplit: { theoryMin: 12, handsOnMin: 28 },
    topics: [
      {
        title: "Evidence-anchoring",
        detail:
          "Did the write-up point to something specific — a ticket number, a timestamp, a change-log entry, a named metric that moved — or did it just assert a cause in confident prose? \"Deploys #4471 introduced the regression; error rate rose from 0.2% to 14% at 09:41, matching the deploy window\" is anchored. \"The recent deployment likely caused the issue\" is not, no matter how reasonable it sounds.",
      },
      {
        title: "Single-hypothesis lock-in as a red flag",
        detail:
          "A report with exactly one confident answer and zero alternatives considered should make you more suspicious, not less. Real RCA work rules things out along the way. If the write-up never mentions what else was checked and dismissed, either the investigation was shallow or that step got skipped when the AI-generated draft became the final draft.",
      },
      {
        title: "The three questions every leader should ask",
        detail:
          "\"What evidence supports this?\" — forces a pointer back to something concrete. \"What else was ruled out, and how?\" — exposes whether alternatives were genuinely tested or never considered. \"What would prove this wrong?\" — the most powerful of the three, because a hypothesis nobody can imagine disproving usually isn't a tested hypothesis at all, it's a story.",
      },
      {
        title: "Reading team confidence versus reading evidence",
        detail:
          "A well-written report and a correct report are not the same thing — and AI-assisted drafts are, by design, well-written. Fluency is the model's default output style regardless of whether the underlying claim is solid. Train yourself to notice when you're nodding along because the prose is clean, not because the logic holds.",
      },
    ],
    activity: {
      title: "Vote, Then Reveal: Checkout Failure Case Study",
      format: "individual-then-breakout",
      duration: "28 min",
      groupSize: "Breakout rooms of 6–7",
      description:
        "Everyone reads the same two AI write-ups and commits to a sign-off decision individually before any discussion — the vote-first structure is what makes the reveal land.",
      steps: [
        "(5 min, individual, in-app) Open the Checkout Failure case study on your own device and read both write-ups without revealing the answer.",
        "(3 min, live poll) Vote A or B: which write-up would you personally sign off on for the customer-facing postmortem?",
        "(12 min, breakout rooms of 6–7) Apply the three questions — what evidence, what else was ruled out, what would prove it wrong — to both write-ups as a group, then click Reveal together in-app.",
        "(8 min, main room) The facilitator polls again post-reveal to show how the vote shifted, then opens the chat for one 'what surprised you' response per room.",
      ],
      virtualNotes:
        "This is the app's built-in Case Study Reveal component — every participant runs it themselves on their own device, so it scales to any number of attendees with zero facilitator bottleneck. Share the direct link in the chat: /case-studies/checkout-failure.",
    },
    misconceptions: [
      {
        claim: "Confident and detailed means correct.",
        reality:
          "This is the exact pattern that should raise your scrutiny, not lower it. Detail is cheap for a language model to generate; detail that traces back to a specific piece of evidence is not.",
      },
    ],
    scenario: {
      label: "Real-world scenario",
      scenario:
        "Two engineers hand you write-ups for the same mobile-app login outage. Write-Up A: \"Login failures spiked from 1% to 38% starting 14:02, matching the CDN config push (change #8821) two minutes earlier; rolling back the push at 14:19 brought the rate back to 1.1% by 14:24.\" Write-Up B: \"The login failures were most likely caused by increased load on the authentication servers during a period of high traffic.\" Both are fluent. Only one is anchored.",
      leaderMove:
        "Ask each engineer the \"what would prove this wrong\" question. Write-Up A's author can answer immediately — the rollback timing is itself the disproof test, already run. Write-Up B's author will likely improvise an answer on the spot, which is your signal it wasn't tested before the report was written.",
    },
    keyTakeaway:
      "You don't need to read the logs. You need to ask where the specificity came from — and notice when nobody can answer.",
  },
  {
    slug: "reading-ai-evidence",
    day: 1,
    order: 3,
    code: "Module 2B",
    title: "Reading AI-Generated Evidence: Observability Queries for Leaders",
    tagline: "You'll never write a query. You just need the right follow-up question.",
    duration: "25 min",
    originalDuration: "30 min",
    format: "Lecture + guided examples",
    objectives: [
      "Recognize what a well-formed observability query looks like — across Splunk, Datadog, ELK/Kibana, and KQL — without writing one.",
      "Ask the right follow-up question when a team member says an AI-generated query confirmed a root cause.",
    ],
    intro:
      "Observability queries — pulling the right slice of logs or metrics out of Splunk, Datadog, ELK/Kibana, or KQL — are one of the highest-value, lowest-risk daily uses of AI in troubleshooting, and the first thing most support engineers reach for. You will never write one of these queries yourself, and you don't need to. You need to know what question to ask when someone tells you \"the query confirmed it.\"",
    timeSplit: { theoryMin: 8, handsOnMin: 17 },
    topics: [
      {
        title: "Why this is high-value, low-risk — and the first thing engineers reach for",
        detail:
          "Writing a correct query from memory across four different platforms' syntax is genuinely hard and genuinely tedious — exactly the kind of mechanical task AI is well-suited to accelerate. The risk isn't in AI writing the query; it's in nobody checking what the query actually asked for.",
      },
      {
        title: "A leader's-eye view of the major platforms",
        detail:
          "Splunk and ELK/Kibana are log-search platforms — good for \"show me every error message matching this pattern in this time window.\" Datadog leans toward metrics and dashboards — good for \"did this number change.\" KQL (Kusto Query Language) is Microsoft's query language, common in Azure and Microsoft 365 environments. You don't need to operate any of them. You need to recognize, when a query result is shown to you, roughly what kind of question it was capable of answering.",
      },
      {
        title: "Reading a query result versus reading the query itself",
        detail:
          "\"The AI generated this query\" tells you the syntax is probably valid. It tells you nothing about whether the query asked the right question. A perfectly correct query against the wrong time window returns a perfectly clean, perfectly misleading result.",
      },
      {
        title: "Red flags in an AI-generated query",
        detail:
          "The wrong time window — pulling data from a window that doesn't actually cover the incident. The wrong index or data source — searching the wrong service's logs entirely. A filter that quietly excludes the failure case — for example, filtering to status codes 400–499 when the real failures were 500s, silently making the query return \"no errors found\" during an outage.",
      },
    ],
    activity: {
      title: "Spot the Wrong Time Window: API Latency Case",
      format: "individual-then-breakout",
      duration: "17 min",
      groupSize: "Breakout rooms of 6–7",
      description:
        "A short, sharp version of the same vote-then-reveal structure, focused entirely on the one skill this module teaches: catching a query that looked in the wrong place.",
      steps: [
        "(4 min, individual, in-app) Open the API Latency Spike case study and read the raw signals and both write-ups.",
        "(8 min, breakout rooms of 6–7) Agree as a group on the one follow-up question that would have caught the wrong time window, then reveal together and compare.",
        "(5 min, main room) Chat prompt: paste your group's one-sentence follow-up question — the facilitator reads a few aloud and highlights the closest matches to 'what time window did this actually cover?'",
      ],
      virtualNotes:
        "Same in-app mechanic as Module 2, different case: /case-studies/api-latency-spike. Because this module is short, reuse Module 2's breakout rooms rather than re-forming them — every minute of transition time matters at 700-person scale.",
    },
    misconceptions: [
      {
        claim: "If the AI wrote the query, the data it returns must be right.",
        reality:
          "The query's assumptions — time window, data source, filters — are exactly what need validating. A syntactically perfect query can still ask the wrong question.",
      },
    ],
    scenario: {
      label: "Real-world scenario",
      scenario:
        "An engineer reports: \"I asked the AI to check Datadog for errors during the outage, and it came back clean — no anomalies. So the issue must be upstream, not on our side.\" The AI-generated query searched the last 60 minutes. The outage started 90 minutes earlier and had already resolved by the time the query ran.",
      leaderMove:
        "Ask: \"What time window did the query actually cover, and does that match when we know the incident started?\" A clean result from a query aimed at the wrong window isn't reassuring — it's meaningless, and it can send the whole investigation in the wrong direction.",
    },
    keyTakeaway:
      "\"No anomalies found\" only means something if the query looked in the right place. Always ask what the query looked at before you trust what it didn't find.",
  },

  // ───────────────────────── DAY 2 ─────────────────────────
  {
    slug: "coaching-your-team",
    day: 2,
    order: 1,
    code: "Module 3",
    title: "Coaching Your Team on Responsible AI Use in Troubleshooting",
    tagline: "\"AI proposes, human validates\" — as a norm your team actually lives",
    duration: "45 min",
    originalDuration: "50 min",
    format: "Case study + facilitated discussion",
    objectives: [
      "Recognize the AI-use anti-patterns a team is likely to fall into under incident pressure.",
      "Coach a team toward \"AI proposes, human validates\" as a standing norm.",
    ],
    intro:
      "You don't need to perform your team's AI usage to lead it well. You need to recognize the anti-patterns that show up under deadline pressure, and know what to say in the moment — in a stand-up, in an incident channel, in a hallway conversation — that reinforces validation without slowing anyone down.",
    timeSplit: { theoryMin: 13, handsOnMin: 32 },
    topics: [
      {
        title: "How engineers actually use AI in troubleshooting today",
        detail:
          "Pasting logs or error messages into a conversational assistant for a quick read. Asking it to draft a query, a script, or a first-pass summary of a ticket thread. Using it as a faster search engine for \"has this error message shown up before.\" None of this requires you to do it yourself — but recognizing the pattern lets you observe and coach it instead of being talked past.",
      },
      {
        title: "Common team anti-patterns",
        detail:
          "Prompt-and-paste RCA: pasting the AI's output directly into the postmortem with no edit pass. Anchoring on the AI's first answer: the first hypothesis becomes the only hypothesis discussed, because it arrived first and sounded reasonable. Skipping validation when the deadline is close: the exact moment validation matters most is the moment it's most likely to be skipped.",
      },
      {
        title: "Setting and reinforcing team norms without slowing the team down",
        detail:
          "The norm isn't \"double the investigation time.\" It's \"AI proposes, human validates\" — a one-line standard that fits inside existing timelines. In practice: any AI-sourced hypothesis gets one explicit validation step (a log check, a rollback test, a second opinion) before it's stated as fact in a channel or a report, no exceptions for how confident it sounds.",
      },
      {
        title: "What to look for in a stand-up or incident channel",
        detail:
          "Language like \"the AI says...\" being treated as equivalent to \"we confirmed...\" A hypothesis that changed from \"maybe\" to \"the cause\" between two messages with no evidence added in between. Nobody in the thread asking a clarifying question about an AI-sourced claim. Any of these is a coaching moment, not a crisis — but it's one you have to actually notice to catch.",
      },
    ],
    activity: {
      title: "Role-Play in Pairs: The Live-Incident Pressure Test",
      format: "breakout",
      duration: "32 min",
      groupSize: "Breakout rooms of 2–3 (paired role-play)",
      description:
        "Real-time pressure only shows up in a real conversation — this runs as paired role-play in small breakout rooms so everyone practices the actual words, not just discusses the theory.",
      steps: [
        "(2 min, main room) The facilitator sets the scene: an engineer is about to post an AI-generated root cause into the incident channel with an executive watching, 20 minutes before a customer call.",
        "(10 min, breakout pairs/triads) One person plays the engineer proposing the hypothesis under time pressure; the other plays the leader, practicing a validating question that doesn't stall the room. Swap roles halfway through.",
        "(10 min, same rooms, round 2) Run a second, harder scenario — the posted instructions escalate the pressure: a second engineer disagrees, and the customer is already on the line.",
        "(10 min, main room) Poll: 'Did the validating question slow the room down, speed it up, or make no difference?' Then 2–3 pairs share the exact phrase they used, via chat.",
      ],
      virtualNotes:
        "Pair or triad rooms (2–3 people, roughly 230–350 rooms for 700 attendees) work better than large groups for role-play — nobody can hide, and it mirrors the real 1:1 pressure of an incident channel. Post both scenario prompts in the chat before opening rooms so nobody is waiting on a shared screen.",
    },
    misconceptions: [
      {
        claim: "If the team is using AI, my job is just to get out of the way.",
        reality:
          "Leaders still own the validation culture, even when they are not writing the prompts. Stepping back on tooling doesn't mean stepping back on standards.",
      },
      {
        claim: "Slowing the team down to validate costs more than it saves.",
        reality:
          "The case-study math is stark: a wrong root cause that ships to a postmortem or a customer costs far more in re-work, trust, and repeat incidents than the single validation step would have cost in minutes.",
      },
    ],
    scenario: {
      label: "Real-world scenario",
      scenario:
        "Twenty minutes before a customer escalation call, an engineer posts in the incident channel: \"AI says it's a database connection pool exhaustion — I'm putting that in the update.\" Three people react with 👍. Nobody has looked at the connection pool metrics yet.",
      leaderMove:
        "Reply in the channel, not in a DM, so the norm is visible to everyone: \"Before it goes in the update — can someone pull the actual pool utilization graph for the last hour? Two minutes, then we send.\" This validates the norm publicly without stopping the clock.",
    },
    keyTakeaway:
      "You're not coaching prompt-writing. You're coaching the one-beat pause between a proposed answer and a stated fact — and making that pause visible and normal in your team's culture.",
  },
  {
    slug: "mapping-frameworks",
    day: 2,
    order: 2,
    code: "Module 4",
    title: "Mapping AI Assistance onto RCA Frameworks Your Team Already Uses",
    tagline: "AI doesn't need a new methodology — it slots into the ones you trust",
    duration: "45 min",
    originalDuration: "50 min",
    format: "Group work + report-back",
    objectives: [
      "Recognize, at a conceptual level, how AI fits into 5 Whys, Fishbone, Fault Tree, and Kepner-Tregoe.",
      "Choose the right framework — and the right AI checkpoint — for a given incident type.",
    ],
    intro:
      "Whatever framework your team already trusts, AI slots into it as an accelerant at specific steps — not as a replacement for the framework itself. This module walks the four most common RCA frameworks and shows exactly where AI helps and where a human sign-off is non-negotiable. The full visual breakdown lives in the Frameworks resource — use this module to build the mental model, and the resource as your reference during real incidents.",
    timeSplit: { theoryMin: 13, handsOnMin: 32 },
    topics: [
      {
        title: "5 Whys, with AI proposing and a human validating each branch",
        detail:
          "The model proposes the next \"why\" based on the answer so far — a fast way to avoid staring at a blank line. A human validates each branch before moving to the next one. Skip the validation step and 5 Whys degrades into five confident guesses stacked on top of each other.",
      },
      {
        title: "Fishbone/Ishikawa: AI populates the categories",
        detail:
          "AI helps populate People, Process, Technology, and Environment categories from raw incident notes — turning a messy timeline into a structured starting draft fast. The categorization is a labor-saver; deciding which branch actually matters is still a team judgment call.",
      },
      {
        title: "Fault Tree Analysis: AI assists with likelihood framing",
        detail:
          "AI can help frame relative likelihoods across branches of a fault tree based on pattern-matching against similar past incidents. The final tree — and the probabilities that get acted on — stays human-owned, because likelihood framing from a model is a starting estimate, not a measurement.",
      },
      {
        title: "Kepner-Tregoe: AI drafts the IS / IS-NOT table",
        detail:
          "AI helps draft the IS / IS-NOT table (what is affected vs. what conspicuously isn't) from unstructured incident notes — a genuinely tedious task to do by hand that AI does well as a first pass. The team still has to confirm each cell reflects what actually happened, not what would make a tidy table.",
      },
      {
        title: "A decision guide: which framework for which incident, and why it still matters",
        detail:
          "5 Whys suits fast-moving, single-cause-looking incidents. Fishbone suits incidents where the cause could span people, process, and tech. Fault Tree suits safety- or compliance-sensitive incidents where you need to reason about combinations of failures. Kepner-Tregoe suits incidents where the scope itself is confusing. Framework choice still determines what evidence gets asked for, and in what order — AI doesn't change that, it just makes each framework faster to execute.",
      },
    ],
    activity: {
      title: "Map Your Own Incident onto a Framework",
      format: "breakout",
      duration: "32 min",
      groupSize: "Breakout rooms of 6–7",
      description:
        "Groups pick a framework live in the app and place a real, recurring incident from their own environment onto it, using the in-app Frameworks tool as the shared reference every room works from independently.",
      steps: [
        "(3 min, individual) Think of one real, recurring incident type from your own team's history — you'll need it in the next step.",
        "(5 min, individual, in-app) Open Frameworks and skim all four tabs to refresh which one fits fast chains, broad causes, combinations, or unclear scope.",
        "(15 min, breakout rooms of 6–7) Each person names their incident type; the group picks the framework that best fits each one and marks, step by step, where AI would assist and where a human sign-off is required.",
        "(9 min, main room) Poll: which framework did most rooms reach for most often? The facilitator shows the live result and asks one room with an unusual pick to explain their reasoning via chat.",
      ],
      virtualNotes:
        "Keep the same 6–7 person rooms as earlier in the day if your platform allows it — less re-shuffling overhead at 700-person scale. The app's Frameworks page (/frameworks) is the shared reference every room works from independently; no shared screen needed.",
    },
    misconceptions: [
      {
        claim: "AI needs a new methodology.",
        reality:
          "It augments the frameworks the team already trusts and already knows how to run. There's no new framework to teach.",
      },
      {
        claim: "Framework choice stops mattering once AI is involved.",
        reality:
          "The framework still determines what evidence gets asked for, and in what order. AI accelerates execution of the framework — it doesn't replace the thinking the framework structures.",
      },
    ],
    scenario: {
      label: "Real-world scenario",
      scenario:
        "A recurring \"tickets not syncing to the CRM\" incident keeps landing on your team's desk. Each time, someone runs an informal 5 Whys in a Slack thread and lands on a different answer. The pattern itself — different root cause every time for the 'same' incident — is a signal the framework, not just the investigation, might be wrong for this incident type.",
      leaderMove:
        "Suggest a Fishbone pass instead, with AI drafting the four categories from the last five incident write-ups. If the recurring failures cluster in one category (say, Process — a manual re-sync step people forget), you've found something 5 Whys kept missing by design, because 5 Whys follows one line of causation at a time.",
    },
    keyTakeaway:
      "Don't ask 'should we use AI in RCA.' Ask 'which of our existing frameworks fits this incident, and where in that framework does AI save us time without taking over the judgment calls.'",
  },
  {
    slug: "leading-retrospective",
    day: 2,
    order: 3,
    code: "Module 5",
    title: "Leading an AI-Assisted Incident Retrospective",
    tagline: "Evidence before hypothesis — even when the hypothesis showed up first",
    duration: "30 min",
    originalDuration: "60 min",
    format: "Simulated retrospective + peer review",
    objectives: [
      "Facilitate a postmortem where AI-generated hypotheses are present, without letting the team anchor on them too early.",
      "Give and receive peer feedback on retrospective facilitation.",
    ],
    intro:
      "An AI-generated hypothesis is often sitting in the incident channel before your retrospective even starts — drafted the moment someone pasted the first error into a chat window. Your job as facilitator isn't to ban it from the room. It's to structure the meeting so evidence gets reviewed before that hypothesis gets discussed, so the room reasons from facts forward instead of from a conclusion backward.",
    timeSplit: { theoryMin: 9, handsOnMin: 21 },
    topics: [
      {
        title: "Structuring the agenda: evidence before hypothesis",
        detail:
          "Open the retrospective with the timeline and the evidence — what happened, when, and what data confirms it — before anyone states what they believe caused it, AI-sourced or not. This single ordering change is the biggest lever you have against anchoring.",
      },
      {
        title: "Challenging an AI-suggested root cause constructively",
        detail:
          "Don't dismiss the AI's contribution outright — it may well be right, and it did save someone time drafting a starting point. Challenge it the same way you'd challenge a colleague's hunch: \"what evidence do we have for this specifically,\" asked with curiosity, not suspicion.",
      },
      {
        title: "Keeping a blameless tone while holding an evidence standard",
        detail:
          "Blameless doesn't mean uncritical. You can hold the room to 'show me the evidence' without it becoming 'whose fault was this.' The distinction: questions aimed at the claim, not the person who raised it.",
      },
      {
        title: "Handling disagreement between the AI's hypothesis and the team's instinct",
        detail:
          "When they conflict, that's useful friction, not a problem to resolve quickly. Put both on the table with their evidence side by side and let the room evaluate them the same way — neither gets deference for its source.",
      },
    ],
    activity: {
      title: "Facilitate the CRM Sync Lag Retrospective",
      format: "breakout",
      duration: "21 min",
      groupSize: "Breakout rooms of 6–7, one facilitator-in-training per room",
      description:
        "One person per room practices opening a retrospective with evidence before hypothesis, using the CRM Sync Lag case as the shared incident packet — everyone in the room has the same evidence in front of them via the app.",
      steps: [
        "(2 min, main room) Rooms pick one person to facilitate; everyone opens the CRM Sync Lag case study on their own device.",
        "(12 min, breakout rooms of 6–7) The facilitator opens with the raw signals — not the write-ups — and only introduces the AI-generated hypothesis after the group has formed its own read of the evidence. The room decides together whether to confirm or reject it.",
        "(7 min, same rooms) Quick peer feedback round: each person tells the facilitator-in-training one thing that kept the room anchored on evidence, and one moment it almost anchored on the hypothesis instead.",
      ],
      virtualNotes:
        "This works as well as — or better than — in person: everyone has independent access to the same case study page, so there's no 'who can see the packet' bottleneck a physical handout would create at 700-person scale.",
    },
    misconceptions: [
      {
        claim: "A good retrospective just needs a good AI summary to start from.",
        reality:
          "The summary is a starting point for scrutiny, not a substitute for it. Starting the meeting with it, instead of with the evidence, is exactly what invites anchoring.",
      },
    ],
    scenario: {
      label: "Real-world scenario",
      scenario:
        "You open a retrospective and the incident packet already has an AI-drafted summary at the top: \"Root cause: a misconfigured rate limiter throttled legitimate API traffic starting 08:00.\" It's well written, and two engineers nod immediately when they see it.",
      leaderMove:
        "Before discussing that summary at all, put the raw timeline up first: traffic graphs, error rates, deploy log, support ticket volume. Ask the room to build their own read of what happened from that timeline. Only then bring the AI summary back in — and ask whether the evidence the room just reviewed actually supports it.",
    },
    keyTakeaway:
      "The AI-generated hypothesis doesn't have to be wrong to be dangerous — it just has to arrive first. Reorder the meeting so evidence always arrives first instead.",
  },

  // ───────────────────────── DAY 3 ─────────────────────────
  {
    slug: "incident-communication",
    day: 3,
    order: 1,
    code: "Module 5B",
    title: "AI-Assisted Incident Communication & Stakeholder Reporting",
    tagline: "Faster to draft. Not faster to trust.",
    duration: "30 min",
    originalDuration: "35 min",
    format: "Lecture + drafting exercise",
    objectives: [
      "Direct a team's use of AI for incident updates, executive summaries, and customer-facing communication without drafting the messages themselves.",
      "Recognize where AI-drafted communication needs a leader's edit before it goes out.",
    ],
    intro:
      "AI genuinely speeds up incident communication — status updates, executive summaries, customer notifications, first-pass postmortem drafts. It also introduces a specific new risk: fluent, confident-sounding language going out to a customer or an executive before anyone has checked whether it says what actually happened. This module gives you the review pass, so speed doesn't come at the cost of accuracy or liability.",
    timeSplit: { theoryMin: 9, handsOnMin: 21 },
    topics: [
      {
        title: "Where AI genuinely speeds things up",
        detail:
          "Status updates during an active incident, executive summaries after the fact, customer-facing notifications, and first-pass postmortem drafts are all places where AI removes the blank-page problem and gets a draft in front of you fast — which matters when stakeholders are waiting.",
      },
      {
        title: "The translation problem",
        detail:
          "What an AI produces when prompted by an engineer is often written for a technical audience by default — full of service names, error codes, and internal jargon. What an executive or a customer needs is impact, timeline, and what's being done about it. A draft can be accurate and still be the wrong translation for its audience.",
      },
      {
        title: "Tone and liability risk in customer-facing drafts",
        detail:
          "Overpromising a cause before it's confirmed. Admitting fault prematurely in language that has legal or contractual weight. Burying the real customer impact under technical detail that makes the update sound more reassuring than the facts support. All three are easy for a fluent draft to do without anyone intending it.",
      },
      {
        title: "A leader's three-check review pass",
        detail:
          "Accuracy against evidence — does every claim in the draft trace back to something confirmed, not just plausible. Appropriate hedging — does the language match the team's actual confidence level, not the model's default fluent tone. Audience fit — would this make sense, and land correctly, for the specific person or group about to read it.",
      },
    ],
    activity: {
      title: "Edit Before You Send: Two Live Drafts",
      format: "individual-then-breakout",
      duration: "21 min",
      groupSize: "Breakout rooms of 6–7",
      description:
        "Everyone runs a real Prompt Library template in their own AI chat and edits the output against the three-check pass — the most literally hands-on moment in the whole course.",
      steps: [
        "(6 min, individual, in-app + your own AI tool) Open Prompt Library, copy the Executive Summary or Customer-Facing Update prompt, and run it in whatever AI assistant you already use.",
        "(10 min, breakout rooms of 6–7) Compare drafts across the room — everyone's AI output will differ slightly. Run the three-check pass (accuracy, hedging, audience fit) on two or three of them together and mark what needs editing.",
        "(5 min, main room) Chat prompt: paste the single word or phrase your group flagged as most likely to overpromise — the facilitator scans for patterns live.",
      ],
      virtualNotes:
        "This is the one activity every participant should do on their own device with their own AI account, not shared — it only works if 700 people are each generating a real draft. Post the direct link (/prompt-library) in the chat at the top of the block.",
    },
    misconceptions: [
      {
        claim: "AI-drafted means faster and safer to send as-is.",
        reality:
          "Faster to draft, not faster to trust. The leader's edit pass still matters most for anything customer-facing, precisely because the draft's fluency can mask an inaccuracy or an overpromise.",
      },
    ],
    scenario: {
      label: "Real-world scenario",
      scenario:
        "An AI-drafted customer notification reads: \"We have identified and resolved the root cause of the checkout issue, which was caused by an error in our payment processing configuration.\" The team has a strong working theory, but the fix that seemed to resolve it hasn't been confirmed to hold under full production load yet.",
      leaderMove:
        "Run the three-check pass before it ships. \"Identified and resolved\" overstates the team's actual confidence — the hedging check fails. Rewrite to: \"We've made a change that appears to have resolved the checkout issue and are continuing to monitor closely.\" Same speed to send, none of the overpromise.",
    },
    keyTakeaway:
      "Your edit pass isn't about polishing prose — it's about making sure the confidence level in the language matches the confidence level the team actually has.",
  },
  {
    slug: "governance-risk-privacy",
    day: 3,
    order: 2,
    code: "Module 6",
    title: "Governance, Risk, Data Privacy & When to Say No to AI",
    tagline: "A trust-calibration checklist, and the data-handling line your team can't cross",
    duration: "45 min",
    originalDuration: "50 min",
    format: "Facilitated debrief + checklist build",
    objectives: [
      "Apply a trust-calibration checklist before accepting AI-generated output as a root cause.",
      "Identify the incident categories where AI-assisted RCA should not be used without additional sign-off.",
      "Apply data-handling guardrails — sanitization, PII, and approved-tool policy — before a team pastes production logs or customer data into an AI tool.",
    ],
    intro:
      "This module builds the guardrails module. Two separate risks live here, and support leaders need both: knowing when to trust an AI-generated root cause, and knowing what should never be pasted into an AI tool in the first place — because the second one carries legal and compliance weight the first one doesn't.",
    timeSplit: { theoryMin: 13, handsOnMin: 32 },
    topics: [
      {
        title: "A trust-calibration checklist for leaders",
        detail:
          "Source-grounding check — does the claim trace to specific evidence. Alternative-hypothesis check — were other explanations genuinely considered and ruled out. Blast-radius-of-being-wrong check — if this hypothesis is wrong and we act on it anyway, what does that cost us. The higher the blast radius, the more scrutiny the first two checks deserve before you sign off.",
      },
      {
        title: "When not to use AI unsupervised",
        detail:
          "Security incidents — where a wrong conclusion can leave a real vulnerability unaddressed. Compliance-sensitive RCA — where the write-up itself may become a regulatory or audit artifact. Low-evidence, high-stakes scenarios — where the pressure to produce an answer is highest and the evidence to ground one is thinnest. These categories need a named human sign-off before an AI-assisted conclusion goes anywhere official.",
      },
      {
        title: "Setting escalation triggers and sign-off requirements",
        detail:
          "Define, in advance, which incident severities or categories require a second set of human eyes on the RCA before it's finalized — so nobody has to make that judgment call live, under pressure, for the first time.",
      },
      {
        title: "Building this into existing incident policy without adding drag",
        detail:
          "This is an addendum to your current incident process, not a parallel one. One paragraph naming the sign-off trigger and one line in the postmortem template noting AI involvement is enough — it doesn't need its own approval workflow to be effective.",
      },
      {
        title: "Handling sensitive production logs and customer data in AI tools",
        detail:
          "Some data should never go into a public or consumer-grade AI assistant, full stop — regardless of how useful the analysis would be. This isn't a technical rule; it's a data-handling rule any leader can enforce without understanding the underlying systems.",
      },
      {
        title: "Data sanitization basics for leaders",
        detail:
          "Redacting PII, tokens, and credentials before logs reach any AI tool is a step your team should already be doing — you need to know enough to confirm it's happening, not to do it yourself. If you're not sure whether a log snippet has been sanitized, the answer is to ask, not to assume.",
      },
      {
        title: "Approved-AI-usage guidelines for enterprise environments",
        detail:
          "\"Approved tool\" typically means the AI vendor has a contract covering data handling, retention, and training-use restrictions with your company — a consumer-grade version of the exact same model may have none of those protections. The same task — summarizing a log file — can be entirely safe in one tool and a policy violation in another, purely based on which contract is in place behind it.",
      },
    ],
    activity: {
      title: "Run the Checklist Against the Planted Flaw",
      format: "individual-then-breakout",
      duration: "32 min",
      groupSize: "Breakout rooms of 6–7",
      description:
        "Groups debrief Day 2's retrospective simulation item by item against the live Checklist tool, deciding together where each check would have caught the planted flaw.",
      steps: [
        "(4 min, individual, in-app) Open Checklist on your own device — you'll check items live as a group in the next step.",
        "(16 min, breakout rooms of 6–7) Walk the Trust-Calibration and Data-Handling checklists together against the CRM Sync Lag scenario from Module 5: for each item, decide as a group whether it would have caught the flaw, and who should have caught it. Check items off together, live.",
        "(7 min, same rooms) Separately, list anything in that case's raw signals that would have needed sanitizing before reaching an AI tool, and check it against your own organization's approved-tool policy if you know it.",
        "(5 min, main room) Poll: 'Which checklist item would have caught this fastest?' — three options pulled from the app's checklist items.",
      ],
      virtualNotes:
        "Each participant's checklist state saves only in their own browser (via localStorage) — that's a feature at this scale, not a limitation: 700 people can each keep their own running checklist across all three days without anyone's progress interfering with anyone else's.",
    },
    misconceptions: [
      {
        claim: "If it sounds technical and specific, it is probably right.",
        reality:
          "This is the core hallucination trap from Module 1, and the checklist exists specifically to counter it with a repeatable process instead of relying on gut feel every time.",
      },
      {
        claim: "If the log looks internal, it's safe to paste anywhere.",
        reality:
          "Internal-looking data still carries PII, credentials, and customer identifiers. The tool it goes into matters as much as the data itself — an internal-looking log in a consumer AI tool with no data agreement is still a policy violation.",
      },
    ],
    scenario: {
      label: "Real-world scenario",
      scenario:
        "During a security-adjacent incident (unusual login patterns on customer accounts), an engineer pastes a batch of raw access logs — including customer email addresses and session tokens — into a personal ChatGPT account to \"get a quick read on the pattern,\" because it's faster than waiting for the approved internal tool to load.",
      leaderMove:
        "This is a stop-everything moment, not a coaching-later moment: security incidents require named sign-off per the checklist, and customer PII in a consumer-grade, non-approved tool is a data-handling violation independent of whether the analysis was useful. Address the data exposure first through your incident/security process, then coach the underlying time-pressure shortcut separately.",
    },
    keyTakeaway:
      "Two different questions, two different stakes: 'should I trust this AI-generated cause' is a judgment call you calibrate. 'Should this data ever have gone into this tool' is a line, not a judgment call — and it's the one that can't wait for a retrospective.",
  },
  {
    slug: "playbook-prompt-library",
    day: 3,
    order: 3,
    code: "Module 7",
    title: "Building Your Team's AI-RCA Playbook, Prompt Library & Reporting Upward",
    tagline: "Leave with something usable this week, not homework",
    duration: "30 min",
    originalDuration: "35 min",
    format: "Individual drafting",
    objectives: [
      "Draft a lightweight governance and playbook entry for the team's own environment.",
      "Identify the metrics worth reporting to stakeholders about AI-assisted RCA.",
      "Curate a starter set of reusable prompt templates for the team to standardize on.",
    ],
    intro:
      "Everything from the last two days compresses into two artifacts here: a one-page playbook entry your team can start using immediately, and two prompt templates from the shared library that you'll pilot this week. Nothing in this module is homework — you leave the room with it done.",
    timeSplit: { theoryMin: 9, handsOnMin: 21 },
    topics: [
      {
        title: "Anatomy of a simple team playbook entry",
        detail:
          "Three lines is enough: when to use AI for this incident type, what sign-off is required before the conclusion is final, and how AI involvement gets documented in the postmortem (a single line — \"first hypothesis AI-drafted, validated against X\" — is sufficient).",
      },
      {
        title: "Lightweight governance that doesn't require a technical rewrite",
        detail:
          "You are not redesigning your incident process. You're adding one paragraph to what already exists — the same instinct as Module 6's guardrails, applied at the team level instead of the org level.",
      },
      {
        title: "Metrics worth tracking and reporting upward",
        detail:
          "Time-to-hypothesis — how fast the team gets to a first testable theory. Hypothesis accuracy rate — how often the first hypothesis holds up under validation. Postmortem quality trend over time — whether write-ups are getting more evidence-anchored, not just faster. These tell a much better story to your own leadership than \"we use AI now.\"",
      },
      {
        title: "Why a shared prompt library matters for consistency, not just speed",
        detail:
          "A library standardizes what a good prompt asks for — evidence, alternatives, disconfirming tests — so quality doesn't depend on which engineer happened to write the prompt that day. This is the same discipline from Module 2's evaluation questions, built into the request instead of applied after the fact.",
      },
      {
        title: "Walkthrough of the provided template set",
        detail:
          "Hypothesis generation, timeline reconstruction, evidence validation, and RCA documentation prompts — the same four categories your team will find in the full Prompt Library resource, ready to adapt to your own ticketing fields and postmortem format.",
      },
      {
        title: "Adapting templates without breaking what makes them reliable",
        detail:
          "You can swap in your own field names, system names, and template sections freely. What you shouldn't strip out are the instructions that force evidence-citing and alternative-consideration — those are the parts doing the actual quality-control work.",
      },
    ],
    activity: {
      title: "Draft Your Team's First Playbook Entry",
      format: "individual-then-breakout",
      duration: "21 min",
      groupSize: "Breakout rooms of 6–7",
      description:
        "Individual drafting time, with a breakout room for peer feedback — everyone leaves with a real artifact, not a template they'll fill in later.",
      steps: [
        "(8 min, individual, in-app) Open Prompt Library, pick one recurring incident type from your own team, and draft the three-line playbook entry (when AI is used, what sign-off is required, how it's documented) in a doc or the chat.",
        "(8 min, breakout rooms of 6–7) Read your playbook entry aloud to the room; get one piece of feedback from a neighbor on whether the sign-off trigger is specific enough to actually be followed.",
        "(5 min, individual, in-app) Select two prompt templates from the library to pilot with your own team this week — note them down.",
      ],
      virtualNotes:
        "Because this is individual drafting, breakout rooms here are for feedback only, not co-authoring — keep them short (8 min) so 700 people aren't stuck waiting on slower groups.",
    },
    misconceptions: [],
    scenario: {
      label: "Real-world scenario",
      scenario:
        "Your team has no written AI guidance at all today — usage is informal, inconsistent, and undocumented. Writing a full governance framework from scratch feels like a multi-week project you don't have time for.",
      leaderMove:
        "Don't write the framework. Write the three-line entry for your single most common incident type this week, hand two prompt templates to your team, and expand from there once it's running. A one-page start your team actually uses beats a comprehensive policy that sits in a drive nobody opens.",
    },
    keyTakeaway:
      "The goal of these three days was never a binder. It's a habit — evidence before conclusion, validation before it ships — small enough to start Monday morning.",
  },
];

export function getModule(slug: string): CourseModule | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getModulesForDay(day: number): CourseModule[] {
  return modules
    .filter((m) => m.day === day)
    .sort((a, b) => a.order - b.order);
}

export function getAdjacentModules(slug: string): {
  prev: CourseModule | null;
  next: CourseModule | null;
} {
  const idx = modules.findIndex((m) => m.slug === slug);
  return {
    prev: idx > 0 ? modules[idx - 1] : null,
    next: idx < modules.length - 1 ? modules[idx + 1] : null,
  };
}
