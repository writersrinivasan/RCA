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
      title: "Live Demo: Watch AI Fill a Gap With Confidence",
      format: "facilitator-demo",
      duration: "35 min",
      engagement: "Optional one-click poll: \"Has this happened on your team? Yes / No\" — glance at the result, no discussion needed.",
      description:
        "You run this live, unscripted, in front of the whole room. Pose the question yourself, paste the prompt into Claude on screen, and narrate what comes back — the room watches the confident-wrong-answer problem happen in real time instead of hearing about it.",
      steps: [
        "Pose the question to the room, rhetorically: \"What happens when I give an AI assistant only half the story?\" You're not waiting for answers — say it, then go straight to the demo.",
        "Open Claude on screen and paste the prompt below live, unedited, so the room sees a real, unrehearsed response — not a slide you prepared earlier.",
        "Read the response aloud. Pause on the specific technical claim it makes and ask the room, rhetorically: \"Where did that come from? We never gave it that.\"",
        "Answer your own question: name the one follow-up question a leader should ask before this goes in an incident channel, and tie it directly back to the 'confident wrong answer' problem.",
        "Run the optional poll below as a 10-second pulse-check, then move on — don't wait for or read out individual answers.",
      ],
      facilitatorPrompt:
        "Here's what I know so far: our email notification service stopped sending password-reset emails starting around 3 PM yesterday. That's the whole report — no logs yet. What's the likely root cause, and how confident are you?",
      virtualNotes:
        "This format works at any audience size because nobody needs to respond for it to land — it's a worked example, the same way a keynote demo works for 10 people or 10,000. No breakout rooms, no chat-reading required. Just run the prompt for real and react to it honestly.",
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
      title: "Live Demo: Watch the Stress-Test Catch the Hallucination",
      format: "facilitator-demo",
      duration: "28 min",
      engagement: "Optional one-click poll: \"Would you have signed off on this before seeing the check? Yes / No.\"",
      description:
        "Show the room the Checkout Failure case on screen, then run the actual Evidence Validation prompt from the Prompt Library live — the room watches Claude itself surface the contradiction, in real time, with no rehearsal.",
      steps: [
        "Open the Checkout Failure case study on screen and read Write-up B's claim aloud: \"the payment gateway's SSL certificate expired at 2:14 AM...\" Ask the room, rhetorically: \"Would you sign off on this?\"",
        "Open Claude and paste the prompt below live — it's the same Stress-Test Hypothesis template from this course's Prompt Library, just filled in with this case's real evidence.",
        "Read the output aloud as it comes back. It will surface that the certificate has 8 months of validity left — pause there and let that land.",
        "Connect it back for the room: the lesson isn't 'don't trust AI' — it's that the right prompt, aimed at the right evidence, catches a wrong AI claim just as fast as it can produce one. That's evidence-anchoring, demonstrated, not just described.",
        "Run the optional poll, glance at the split, move on.",
      ],
      facilitatorPrompt:
        "Here is a proposed root cause: \"The payment gateway's SSL certificate expired at 2:14 AM, causing all HTTPS handshakes to the payment processor to fail.\" Here is the available evidence: checkout success rate dropped from 98% to 41% at 02:11 AM and recovered to 96% by 03:05 AM; config change #5521 (\"increase payment timeout threshold\") deployed at 02:09 AM; gateway logs show a spike in \"upstream timeout\" errors — not SSL errors — starting 02:12 AM; the SSL certificate's expiry is confirmed 8 months out via the certificate manager dashboard; rolling back config #5521 at 02:58 AM correlated with recovery within 7 minutes. Do three things: 1) List every piece of evidence that supports the proposed cause. 2) List any evidence that contradicts it. 3) Describe one test that would disprove it if it's wrong.",
      virtualNotes:
        "This works as a single shared screen for any size audience — nobody needs their own device or a breakout room for the demonstration to land. If you want participants to try the prompt themselves afterward, point them to this exact template in the Prompt Library's Evidence Validation category.",
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
      title: "Live Demo: Catch the Wrong Time Window",
      format: "facilitator-demo",
      duration: "17 min",
      engagement: "Optional one-click poll: \"Would 'no anomalies found' have reassured you? Yes / No.\"",
      description:
        "A short, sharp version of the same live-demo structure — one prompt, run once, focused entirely on the single skill this module teaches.",
      steps: [
        "Set up the scene in one line: an engineer just told you \"the query found nothing, so it's not on our side.\" Ask the room, rhetorically: \"Do you believe that yet?\"",
        "Paste the prompt below into Claude live — it asks for a plain-language scope explanation of the query that was run.",
        "Read the response aloud. It will state the query's actual time window, which won't match the incident window you give it — pause on the mismatch.",
        "Answer your own question: the follow-up that catches this every time is \"what time window did that query actually cover, and does it match when the customer says the issue started?\"",
      ],
      facilitatorPrompt:
        "Here is a query that was run: a search for API errors and anomalies over 'the last 60 minutes,' starting at 11:40 AM. Here is the incident window we actually care about: 09:15 AM to 10:45 AM, on our API gateway. Explain, in plain language a non-technical reader can follow, exactly what time window the query covered — then state clearly: does that match the incident window above, or is there a mismatch?",
      virtualNotes:
        "Same shared-screen demo format as Module 2 — no separate setup needed, and no breakout rooms to re-form. Run it back to back with Module 2 to save transition time.",
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
      title: "Live Demo: Spar With the Pressured Engineer",
      format: "facilitator-demo",
      duration: "32 min",
      engagement: "Optional one-click poll: \"Did that question feel like it would speed things up or slow them down? Fast / Slow.\"",
      description:
        "You play the leader, live and unscripted. Claude plays the pressured engineer proposing a hypothesis — you respond in real time with the validating question, so the room watches the actual conversation instead of discussing it in the abstract.",
      steps: [
        "Set the scene for the room: an engineer is about to post an AI-generated root cause into the incident channel, an executive is watching, and there's a customer call in 20 minutes.",
        "Paste the prompt below into Claude live and let it write the engineer's message — realistic, a little rushed, exactly the kind of message that shows up under pressure.",
        "Read the message aloud, then respond out loud exactly as you would in the room: the one validating question that doesn't stall momentum. Do this live, don't pre-write it.",
        "Ask Claude a follow-up in the same thread — \"what would the engineer say back if a leader asked that?\" — read the reply, and critique it with the room: did it actually answer the question, or dodge it?",
        "Run the optional poll, glance at the result, move on.",
      ],
      facilitatorPrompt:
        "Role-play as a support engineer under pressure. It's 20 minutes before a customer call, an executive is watching the incident channel, and an AI assistant just gave you a plausible-sounding root cause for the outage. Write the single message you'd post in the incident channel proposing it as the cause, in a realistic, slightly rushed tone — the way someone actually types under deadline pressure, not a polished report.",
      virtualNotes:
        "This is genuinely more consistent at scale than 350 pairs improvising role-play simultaneously — everyone sees the same real exchange and can judge the validating question for themselves. No breakout rooms, no pairing logistics, no risk of a room going quiet with nobody willing to go first.",
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
      title: "Live Demo: Draft a Fishbone From Real Notes",
      format: "facilitator-demo",
      duration: "32 min",
      engagement: "Optional one-click poll: \"Which framework would you have reached for first? 5 Whys / Fishbone.\"",
      description:
        "Pose the framework-choice question yourself, then run the actual Framework Application prompt live against a real recurring incident — the room watches a Fishbone diagram get built in real time from messy notes.",
      steps: [
        "Ask the room, rhetorically: \"This incident kept happening — three times, three different 'root causes.' What's wrong with how it was investigated?\" Don't wait for an answer; go straight to the demo.",
        "Open Frameworks on screen and skim all four tabs for 60 seconds so the room has the mental model fresh before the demo.",
        "Paste the prompt below into Claude live — it's the Framework Application template from the Prompt Library, filled in with a real recurring incident's notes.",
        "Read the four categories back as they populate. Point out anything that comes back empty — that's the model correctly declining to force an entry, not a gap in the demo.",
        "Answer your own opening question: this is exactly what three separate 5 Whys sessions missed, and exactly what a Fishbone pass catches by comparing categories instead of chasing one chain at a time.",
      ],
      facilitatorPrompt:
        "Here are raw notes from an incident: a support-ticket sync queue backed up after a scheduled maintenance window, and the manual re-sync trigger was skipped. This is the third time this has happened in two months — once after a deploy, once after a database failover, always with the same missed manual step, and the pipeline itself never actually errors. Sort every potential contributing factor into four categories: People, Process, Technology, Environment. Only include factors that have real support in the notes above — if a category has nothing to support it, say so instead of forcing an entry.",
      virtualNotes:
        "One shared screen, no breakout rooms, no per-table framework selection to coordinate — every attendee sees the same worked example and can apply it to their own incident afterward using the Frameworks and Prompt Library pages on their own time.",
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
      title: "Live Demo: Build the Timeline Before the Hypothesis",
      format: "facilitator-demo",
      duration: "21 min",
      engagement: "Optional one-click poll: \"Would you have opened with the AI hypothesis or the timeline? Hypothesis / Timeline.\"",
      description:
        "Model the opening minute of a retrospective live: run the Timeline Reconstruction prompt on real evidence before anyone in the room sees the AI-generated hypothesis, so the ordering itself becomes the demonstration.",
      steps: [
        "Tell the room the setup: the CRM Sync Lag incident, and an AI-generated hypothesis that's already sitting in the incident channel — but you're not opening with it.",
        "Paste the prompt below into Claude live and let it build the timeline from the raw signals alone, no hypothesis included yet.",
        "Read the timeline aloud and ask the room, rhetorically: \"Based on just this, what do you think the pattern is?\" Give it three seconds, then answer it yourself.",
        "Now reveal the AI-generated hypothesis on screen for the first time, and check it against the timeline you just built together — confirm or reject it live, out loud.",
        "Run the optional poll to show how many people's instinct matched yours before the reveal.",
      ],
      facilitatorPrompt:
        "Build a chronological timeline from these incident notes, evidence only, no conclusions: sync queue backed up after a scheduled maintenance window 6 weeks ago; sync queue backed up after a deploy 3 weeks ago; sync queue backed up after a database failover this week; in all three cases the sync pipeline itself never logged an error, it silently paused waiting for a manual re-sync trigger; that manual trigger step is documented only on a wiki page linked from an archived onboarding doc. Sort strictly by time and flag anything that repeats across all three incidents.",
      virtualNotes:
        "Running this as one live demo, in front of everyone, is actually closer to the real skill than 100 separate rooms each electing an inexperienced facilitator — the room watches an evidence-first opening modeled correctly once, cleanly, before they ever try it themselves back at their own desk.",
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
      title: "Live Demo: Catch the Overpromise Before It Sends",
      format: "facilitator-demo",
      duration: "21 min",
      engagement: "Optional one-click poll: \"Would you have sent that draft as-is? Yes / No.\"",
      description:
        "Run the actual Customer-Facing Update prompt live, then read the draft it produces with the three-check pass out loud — the room watches the exact edit a leader should make, on a real draft, not a cleaned-up example.",
      steps: [
        "Tell the room what's about to happen: a real AI-drafted customer update, generated live, that you're going to try to break using the three checks — accuracy, hedging, audience fit.",
        "Paste the prompt below into Claude on screen and let it produce the draft, unedited.",
        "Read the draft aloud, then run the three checks against it one at a time, out loud, marking any line that overpromises or names a cause too early.",
        "Read the model's own self-flagged \"sentences I was unsure about\" list — compare it against what you just caught. Where do they agree, and where did you catch something it didn't flag itself?",
        "Run the optional poll, glance at the split, move on.",
      ],
      facilitatorPrompt:
        "Draft a customer-facing status update based on this internal summary: checkout failures affected roughly 60% of transactions for about an hour; the team believes a recent configuration change caused it and has since rolled that change back; success rates have returned to normal but full confirmation is still in progress. Requirements: state the customer-visible impact clearly and first. Do not name an internal root cause unless it has been fully confirmed — use 'we are investigating' language if it hasn't. Do not use language that could be read as admitting fault or liability unless that has been explicitly approved. Keep it under 100 words. After the draft, list separately any sentence you were unsure about from a liability or overpromising standpoint.",
      virtualNotes:
        "One shared screen carries this entire exercise — every attendee can go run the same template themselves afterward with their own incident details, using the direct link to this prompt in the Prompt Library.",
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
      title: "Live Demo: Let AI Flag What Needs Redacting",
      format: "facilitator-demo",
      duration: "32 min",
      engagement: "Optional one-click poll: \"Would you have spotted all of these yourself? Yes / No.\"",
      description:
        "Run the actual Data Sanitization prompt live against a planted, realistic log snippet, then walk the Checklist against Day 2's retrospective on screen — two short demos back to back, both narrated, neither requiring the room to do anything but watch and answer a single poll.",
      steps: [
        "Tell the room: \"I'm going to paste a realistic log snippet and have Claude find everything in it that shouldn't be there.\" Read the snippet aloud first so they can try to spot it themselves, silently.",
        "Paste the prompt below into Claude live and let it flag every PII/credential/token item it finds.",
        "Read the flagged list aloud and compare it against what you personally caught reading it cold — be honest if it caught something you missed.",
        "Switch to the Checklist page on screen and walk the Trust-Calibration items against Day 2's CRM Sync Lag retrospective, checking off live which ones would have caught the planted flaw and narrating your reasoning for each.",
        "Run the optional poll, glance at the split, move on.",
      ],
      facilitatorPrompt:
        "Review this text and list every piece of information that looks like it could be PII, a credential, or a token — names, emails, account IDs, session tokens, API keys, IP addresses, phone numbers, or anything else that could identify a specific person or grant access to a system: \"Customer jane.doe@example.com (acct #88213) reported the issue at 09:41. Pulled logs from host prod-api-07, session token eyJhbGciOiJIUzI1NiJ9.mock, source IP 203.0.113.44. Escalated to on-call via internal Slack, cc'd manager rgupta@example.com.\" For each item found, quote the exact snippet and say what category it falls into.",
      virtualNotes:
        "Both halves of this demo run from one shared screen — the Checklist's per-browser saved state (via localStorage) means you can safely reset it before the session without affecting anything else, and nobody in the audience needs their own copy open for the demo to work.",
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
      title: "Live Demo: Draft a Playbook Entry From Scratch",
      format: "facilitator-demo",
      duration: "21 min",
      engagement: "Optional one-click poll: \"Do you have anything like this documented today? Yes / No.\"",
      description:
        "Draft a real three-line playbook entry live, for a made-up but realistic incident type, so the room sees exactly how little effort this takes — then point everyone to the exact templates they'll adapt on their own afterward.",
      steps: [
        "Tell the room the target: a three-line playbook entry — when AI is used, what sign-off is required, how it's documented — for one recurring incident type. Pick one out loud (e.g., \"password reset failures\").",
        "Paste the prompt below into Claude live and let it draft the AI-involvement documentation line as a starting point.",
        "Read it aloud, then write the other two lines yourself, live, thinking out loud about what sign-off trigger would actually get followed rather than ignored.",
        "Open Prompt Library on screen and point to the two categories most relevant to the incident type you picked — tell the room these are the ones to start with for their own team.",
        "Run the optional poll, glance at the split, close the module.",
      ],
      facilitatorPrompt:
        "Based on this investigation summary: 'AI drafted the first hypothesis from ticket history, a human validated it against server logs before the postmortem, and AI drafted this postmortem document from the validated findings,' write one sentence for a postmortem that documents where AI was used and what was independently validated by a human. Keep it factual and specific — no marketing language, no vague 'AI-assisted' phrasing.",
      virtualNotes:
        "This closes the loop for the whole audience without needing anyone to draft anything live themselves — the artifact you produce on screen is the model they take back to their own desk, and the Prompt Library link is what they actually use afterward.",
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
