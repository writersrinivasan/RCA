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
      title: "Live Demo Sequence: Four Ways to See How AI Actually Behaves",
      format: "facilitator-demo",
      duration: "35 min",
      engagement: "Optional one-click poll after Demo 1: \"Has this happened on your team? Yes / No\" — glance at the result, no discussion needed.",
      description:
        "Four short, real demos, run back to back — each one takes the room somewhere the last one didn't. Pose each question yourself, paste the prompt into Claude on screen, and narrate what comes back.",
      demos: [
        {
          label: "Demo 1 — Watch it fill a gap with confidence",
          minutes: 9,
          setup: "Ask the room, rhetorically: \"What happens when I give an AI assistant only half the story?\" Then go straight to the prompt.",
          prompt: "Here's what I know so far: our email notification service stopped sending password-reset emails starting around 3 PM yesterday. That's the whole report — no logs yet. What's the likely root cause, and how confident are you?",
          pointOut: "It names a specific technical cause with total confidence despite almost no evidence. Ask the room: \"Where did that come from? We never gave it that.\" Then answer your own question — name the one follow-up a leader should ask before this goes in an incident channel.",
        },
        {
          label: "Demo 2 — Watch it do what it's actually good at",
          minutes: 8,
          setup: "\"Now let's flip it — same tool, used well.\"",
          prompt: "Here are five ticket subject lines from the last week: \"Login button unresponsive on Safari,\" \"Password reset email delayed 20 min,\" \"Two-factor code not arriving,\" \"Account locked after 3 failed attempts,\" \"Reset link expired immediately.\" Summarize what pattern, if any, connects these, in two sentences.",
          pointOut: "This is summarizing and surfacing a pattern — genuinely useful, low-risk, fast — and notice it's not asserting a root cause, just naming a pattern. That's the good use of AI this module talks about.",
        },
        {
          label: "Demo 3 — Ask it to grade its own confidence",
          minutes: 9,
          setup: "\"Here's a trick worth stealing: ask the AI to rate its own certainty.\"",
          prompt: "Here's what I know so far: our email notification service stopped sending password-reset emails starting around 3 PM yesterday. On a scale of 1–10, how confident are you in a root cause, and what's missing that would raise that number?",
          pointOut: "Watch whether it actually lowers its number and lists real missing evidence, or just repeats the same guess with a number stapled on. That's the test for whether a tool is honestly calibrated.",
        },
        {
          label: "Demo 4 — Let it describe its own limits",
          minutes: 9,
          setup: "\"Last one — let's ask the tool about itself.\"",
          prompt: "In two sentences, what kind of tasks should a leader NOT trust you to do alone during an incident investigation, and why?",
          pointOut: "Check whether it mentions live system access or verifying facts against reality — connect this straight back to the field guide and the Claude/Copilot/Cursor distinction.",
        },
      ],
      virtualNotes:
        "This format works at any audience size because nobody needs to respond for it to land — it's a worked example, the same way a keynote demo works for 10 people or 10,000. No breakout rooms, no chat-reading required. Run each prompt for real and react to it honestly — if a response surprises you, say so.",
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
      title: "Live Demo Sequence: Stress-Test Both Write-Ups, Then Break It",
      format: "facilitator-demo",
      duration: "28 min",
      engagement: "Optional one-click poll after Demo 1: \"Would you have signed off on this before seeing the check? Yes / No.\"",
      description:
        "Four short demos on the same Checkout Failure case, each one changing the question you ask the AI — the room sees evidence-anchoring tested from every angle, not just described once.",
      demos: [
        {
          label: "Demo 1 — Catch the hallucination",
          minutes: 8,
          setup: "Show the Checkout Failure case on screen, read Write-up B's claim aloud: \"the SSL certificate expired at 2:14 AM...\" Ask the room, rhetorically: \"Would you sign off on this?\"",
          prompt: "Here is a proposed root cause: \"The payment gateway's SSL certificate expired at 2:14 AM, causing all HTTPS handshakes to the payment processor to fail.\" Here is the available evidence: checkout success rate dropped from 98% to 41% at 02:11 AM and recovered to 96% by 03:05 AM; config change #5521 (\"increase payment timeout threshold\") deployed at 02:09 AM; gateway logs show a spike in \"upstream timeout\" errors — not SSL errors — starting 02:12 AM; the SSL certificate's expiry is confirmed 8 months out via the certificate manager dashboard; rolling back config #5521 at 02:58 AM correlated with recovery within 7 minutes. Do three things: 1) List every piece of evidence that supports the proposed cause. 2) List any evidence that contradicts it. 3) Describe one test that would disprove it if it's wrong.",
          pointOut: "It will surface that the certificate has 8 months of validity left. Pause there — the AI itself just caught the AI-generated claim.",
        },
        {
          label: "Demo 2 — Now stress-test the one that was right",
          minutes: 7,
          setup: "\"Same test, different claim — let's check Write-up A, the one that turned out to be correct.\"",
          prompt: "Here is a proposed root cause: \"Config change #5521, deployed at 02:09 AM, reduced the payment gateway timeout threshold, causing legitimate slow transactions to be cut off early.\" Here is the same evidence as before. Do three things: 1) List every piece of evidence that supports this cause. 2) List any evidence that contradicts it. 3) Describe one test that would disprove it if it's wrong.",
          pointOut: "Step 2 comes back thin or empty this time — not because the AI is rubber-stamping it, but because there genuinely isn't much to contradict. That contrast between Demo 1 and Demo 2 is the whole lesson.",
        },
        {
          label: "Demo 3 — Have it argue the wrong side, on purpose",
          minutes: 7,
          setup: "\"One more experiment — let's ask it to defend the wrong answer, like a lawyer would.\"",
          prompt: "Argue as persuasively as you can that the SSL certificate expiration IS the root cause of the checkout failure, using only the evidence from Demo 1. Do your best even if you think it's actually unlikely.",
          pointOut: "Notice how fluent and confident this sounds even though we already proved it's wrong. A good advocate can make almost anything sound reasonable — which is exactly why fluency can't be your test for correctness.",
        },
        {
          label: "Demo 4 — The one-sentence gut-check",
          minutes: 6,
          setup: "\"Last one, fast — just the disproof test, nothing else.\"",
          prompt: "In one sentence: what single piece of evidence would immediately disprove the claim that the SSL certificate caused this outage?",
          pointOut: "One sentence, and it's the fastest possible check. This is the version short enough to actually type into an incident channel mid-crisis.",
        },
      ],
      virtualNotes:
        "This works as a single shared screen for any size audience — nobody needs their own device for the demonstration to land. Point participants to the exact Evidence Validation templates in the Prompt Library afterward so they can run these themselves.",
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
      title: "Live Demo Sequence: Wrong Window, Right Window, Right Question",
      format: "facilitator-demo",
      duration: "17 min",
      engagement: "Optional one-click poll after Demo 1: \"Would 'no anomalies found' have reassured you? Yes / No.\"",
      description:
        "Short and sharp — three quick demos back to back, focused entirely on the single skill this module teaches.",
      demos: [
        {
          label: "Demo 1 — Catch the wrong window",
          minutes: 7,
          setup: "Set the scene: an engineer just told you \"the query found nothing, so it's not on our side.\" Ask the room, rhetorically: \"Do you believe that yet?\"",
          prompt: "Here is a query that was run: a search for API errors and anomalies over 'the last 60 minutes,' starting at 11:40 AM. Here is the incident window we actually care about: 09:15 AM to 10:45 AM, on our API gateway. Explain, in plain language a non-technical reader can follow, exactly what time window the query covered — then state clearly: does that match the incident window above, or is there a mismatch?",
          pointOut: "It will state the query's actual window, which won't match the incident window — pause on the mismatch. \"No anomalies\" only means something if the query looked in the right place.",
        },
        {
          label: "Demo 2 — Now ask for the right one",
          minutes: 6,
          setup: "\"Let's ask it to try again, with the right window this time.\"",
          prompt: "Write a plain-language description (not code) of what a good query would look like to check for anomalies in our API gateway between 09:15 AM and 10:45 AM today, including what data source and filters it should use.",
          pointOut: "Compare this description to the wrong one from Demo 1 — same tool, same skill, just given the right constraint. The lesson isn't 'the AI is bad at this,' it's 'the human has to supply the right window.'",
        },
        {
          label: "Demo 3 — Let it name its own clarifying question",
          minutes: 4,
          setup: "\"Last one, fast.\"",
          prompt: "Before running any query to investigate an incident, what's the one clarifying question you'd want a human to answer first?",
          pointOut: "If it says something like \"what time window should I search,\" that's the AI essentially agreeing with this entire module.",
        },
      ],
      virtualNotes:
        "Same shared-screen demo format as Module 2 — no separate setup needed. Run it back to back with Module 2 to save transition time.",
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
      title: "Live Demo Sequence: Escalate the Pressure, Round by Round",
      format: "facilitator-demo",
      duration: "32 min",
      engagement: "Optional one-click poll after Demo 1: \"Did that question feel like it would speed things up or slow them down? Fast / Slow.\"",
      description:
        "You play the leader, live and unscripted, across four escalating rounds. Claude plays the pressured engineer — you respond in real time each round, so the room watches the actual conversation instead of discussing it in the abstract.",
      demos: [
        {
          label: "Demo 1 — The first message under pressure",
          minutes: 9,
          setup: "Set the scene: an engineer is about to post an AI-generated root cause into the incident channel, an executive is watching, and there's a customer call in 20 minutes.",
          prompt: "Role-play as a support engineer under pressure. It's 20 minutes before a customer call, an executive is watching the incident channel, and an AI assistant just gave you a plausible-sounding root cause for the outage. Write the single message you'd post in the incident channel proposing it as the cause, in a realistic, slightly rushed tone — the way someone actually types under deadline pressure, not a polished report.",
          pointOut: "Read the message aloud, then respond out loud exactly as you would in the room — the one validating question that doesn't stall momentum. Don't pre-write your response; do it live.",
        },
        {
          label: "Demo 2 — A second engineer disagrees",
          minutes: 8,
          setup: "\"Let's raise the pressure — a second engineer just jumped into the thread.\"",
          prompt: "Continue the role-play. A second engineer just replied in the thread: \"I don't think that's it — I saw something similar last month and it was a different cause.\" Write their message, in the same realistic, slightly informal tone.",
          pointOut: "Now there are two competing claims in the channel. Model out loud how you'd handle this without picking a side prematurely — ask what evidence each person actually has.",
        },
        {
          label: "Demo 3 — The defensive pushback",
          minutes: 8,
          setup: "\"Now let's pressure-test the validating question itself.\"",
          prompt: "Play the first engineer again. The leader just asked: \"what does the log actually show?\" Respond the way a rushed, slightly defensive engineer might respond under deadline pressure — realistically, not ideally.",
          pointOut: "This is the real world — a good question sometimes gets friction back, not gratitude. Model how you'd respond to THAT, calmly, without escalating.",
        },
        {
          label: "Demo 4 — The five-minutes-later version",
          minutes: 7,
          setup: "\"Last one — let's see what this looks like once it's actually validated.\"",
          prompt: "Now write the calm, evidence-backed version of the original message from Demo 1, as if the team had taken five minutes to check the logs first.",
          pointOut: "Put this side by side with Demo 1's very first message. Same information, five extra minutes, a completely different level of trust it deserves.",
        },
      ],
      virtualNotes:
        "This is genuinely more consistent at scale than hundreds of pairs improvising role-play simultaneously — everyone sees the same real exchange and can judge each validating question for themselves. No breakout rooms, no pairing logistics, no risk of a room going quiet with nobody willing to go first.",
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
      title: "Live Demo Sequence: Run the Same Incident Through Three Frameworks",
      format: "facilitator-demo",
      duration: "32 min",
      engagement: "Optional one-click poll after Demo 1: \"Which framework would you have reached for first? 5 Whys / Fishbone.\"",
      description:
        "One recurring incident, run through three different frameworks live, back to back — the room watches the exact same evidence produce three different kinds of insight, depending on which lens you point at it.",
      demos: [
        {
          label: "Demo 1 — Fishbone from real notes",
          minutes: 9,
          setup: "Ask the room, rhetorically: \"This incident kept happening — three times, three different 'root causes.' What's wrong with how it was investigated?\" Go straight to the demo.",
          prompt: "Here are raw notes from an incident: a support-ticket sync queue backed up after a scheduled maintenance window, and the manual re-sync trigger was skipped. This is the third time this has happened in two months — once after a deploy, once after a database failover, always with the same missed manual step, and the pipeline itself never actually errors. Sort every potential contributing factor into four categories: People, Process, Technology, Environment. Only include factors that have real support in the notes above — if a category has nothing to support it, say so instead of forcing an entry.",
          pointOut: "Read the four categories as they populate — point out anything that comes back empty, that's the model correctly declining to force an entry, not a gap in the demo.",
        },
        {
          label: "Demo 2 — Now run 5 Whys on the same incident",
          minutes: 8,
          setup: "\"Let's run the same incident through 5 Whys instead, live, and see what it misses.\"",
          prompt: "Using only this incident: \"sync queue backed up after a scheduled maintenance window; manual re-sync trigger was skipped,\" ask \"why\" five times, each answer building on the last, to find a root cause.",
          pointOut: "This chain only ever looks at ONE incident — it can't see that this happened two other times for different trigger events. That's exactly the blind spot the Fishbone pass just showed us.",
        },
        {
          label: "Demo 3 — A fresh incident, IS/IS-NOT",
          minutes: 8,
          setup: "\"One more framework, one more incident — this time the scope itself is the problem.\"",
          prompt: "Build an IS/IS-NOT table across Region, Platform, and Time for this: \"EU mobile app users reported checkout errors between 9 and 11 AM; US and desktop users reported nothing.\" Use only what's stated.",
          pointOut: "Look at how sharp the IS-NOT column makes the question — \"why mobile and not desktop\" is a far better question than \"something's wrong with checkout.\"",
        },
        {
          label: "Demo 4 — Ask it to pick the framework",
          minutes: 7,
          setup: "\"Last one — let's see if it agrees with our own decision guide.\"",
          prompt: "In one sentence, which RCA framework — 5 Whys, Fishbone, Fault Tree, or Kepner-Tregoe — fits this best, and why: \"a payment outage that required three unrelated systems to fail at the same time\"?",
          pointOut: "It should land on Fault Tree, because of \"unrelated systems failing together.\" Check whether it catches that signal the way our decision guide does.",
        },
      ],
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
      title: "Live Demo Sequence: Evidence First, Agenda Second, Tone Third",
      format: "facilitator-demo",
      duration: "21 min",
      engagement: "Optional one-click poll after Demo 1: \"Would you have opened with the AI hypothesis or the timeline? Hypothesis / Timeline.\"",
      description:
        "Three short demos that model the opening minutes of a retrospective, live — the ordering, the agenda, and the tone, each demonstrated rather than described.",
      demos: [
        {
          label: "Demo 1 — Build the timeline before the hypothesis",
          minutes: 9,
          setup: "Tell the room: the CRM Sync Lag incident, and an AI-generated hypothesis already sitting in the channel — but you're not opening with it.",
          prompt: "Build a chronological timeline from these incident notes, evidence only, no conclusions: sync queue backed up after a scheduled maintenance window 6 weeks ago; sync queue backed up after a deploy 3 weeks ago; sync queue backed up after a database failover this week; in all three cases the sync pipeline itself never logged an error, it silently paused waiting for a manual re-sync trigger; that manual trigger step is documented only on a wiki page linked from an archived onboarding doc. Sort strictly by time and flag anything that repeats across all three incidents.",
          pointOut: "Ask the room, rhetorically: \"Based on just this, what's the pattern?\" Give it three seconds, then answer yourself. Now reveal the AI-generated hypothesis for the first time and check it against the timeline — confirm or reject it live.",
        },
        {
          label: "Demo 2 — Have it draft the agenda itself",
          minutes: 6,
          setup: "\"Let's have it draft the actual agenda for this meeting.\"",
          prompt: "Draft a 5-step agenda for a 30-minute incident retrospective that puts evidence review before any hypothesis discussion, for the CRM sync lag incident we just built the timeline for.",
          pointOut: "Check whether hypothesis review comes before or after the evidence steps in its own agenda — that ordering is the whole lesson of this module, handed back to us in outline form.",
        },
        {
          label: "Demo 3 — Rewrite the blame into evidence",
          minutes: 6,
          setup: "\"One more, fast — the blameless-tone test.\"",
          prompt: "Rewrite this in a blameless tone without losing the evidence standard: \"Someone should have caught that the retry logic was broken before this shipped.\"",
          pointOut: "Notice it likely shifts the sentence from a person to a process. That's the line this module draws between blameless and uncritical.",
        },
      ],
      virtualNotes:
        "Running this as one live demo, in front of everyone, is actually closer to the real skill than hundreds of separate rooms each electing an inexperienced facilitator — the room watches an evidence-first opening modeled correctly once, cleanly, before they ever try it themselves back at their own desk.",
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
      title: "Live Demo Sequence: Same Facts, Three Audiences",
      format: "facilitator-demo",
      duration: "21 min",
      engagement: "Optional one-click poll after Demo 1: \"Would you have sent that draft as-is? Yes / No.\"",
      description:
        "The same incident, drafted three different ways live — a customer update, an executive summary, and a deliberately overconfident version — so the room sees exactly how a few words change the risk.",
      demos: [
        {
          label: "Demo 1 — The customer draft, stress-tested",
          minutes: 9,
          setup: "Tell the room: a real AI-drafted customer update, generated live, that you're going to try to break using the three checks — accuracy, hedging, audience fit.",
          prompt: "Draft a customer-facing status update based on this internal summary: checkout failures affected roughly 60% of transactions for about an hour; the team believes a recent configuration change caused it and has since rolled that change back; success rates have returned to normal but full confirmation is still in progress. Requirements: state the customer-visible impact clearly and first. Do not name an internal root cause unless it has been fully confirmed — use 'we are investigating' language if it hasn't. Do not use language that could be read as admitting fault or liability unless that has been explicitly approved. Keep it under 100 words. After the draft, list separately any sentence you were unsure about from a liability or overpromising standpoint.",
          pointOut: "Run the three checks against it out loud, then read the model's own self-flagged \"sentences I was unsure about\" list — compare it to what you just caught yourself.",
        },
        {
          label: "Demo 2 — The same facts, for an executive",
          minutes: 6,
          setup: "\"Same incident, different audience — let's see the executive version.\"",
          prompt: "Here is a technical incident summary: checkout failures affected roughly 60% of transactions for about an hour; the team believes a recent configuration change caused it and has since rolled that change back; success rates have returned to normal but full confirmation is still in progress. Rewrite this as a 3-sentence update for an executive with no technical background, matching the team's actual confidence level exactly.",
          pointOut: "Put this next to the customer version from Demo 1 — same facts, two different translations. Neither one lies, but they read completely differently.",
        },
        {
          label: "Demo 3 — The version that overpromises on purpose",
          minutes: 6,
          setup: "\"One more experiment — let's ask it to write the version that ships when nobody's paying attention.\"",
          prompt: "Now write a version of the same update that sounds reassuring and confident, even overstating certainty slightly, the way someone in a hurry might write it without meaning to overpromise.",
          pointOut: "Read it next to Demo 1's version — the difference is usually two or three words, not a rewrite. That's how easy it is to overpromise without noticing.",
        },
      ],
      virtualNotes:
        "One shared screen carries this entire exercise — every attendee can go run the same templates themselves afterward with their own incident details, using the direct links in the Prompt Library.",
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
      title: "Live Demo Sequence: Redact It, Check It, Escalate It, Write It Down",
      format: "facilitator-demo",
      duration: "32 min",
      engagement: "Optional one-click poll after Demo 1: \"Would you have spotted all of these yourself? Yes / No.\"",
      description:
        "Four short demos covering all four governance moves this module teaches — sanitize, calibrate trust, know when to escalate, and write the policy down — each one run live, none requiring anything from the room but a single poll.",
      demos: [
        {
          label: "Demo 1 — Let AI flag what needs redacting",
          minutes: 8,
          setup: "\"I'm going to paste a realistic log snippet and have Claude find everything in it that shouldn't be there.\" Read the snippet aloud first so the room can try to spot it themselves, silently.",
          prompt: "Review this text and list every piece of information that looks like it could be PII, a credential, or a token — names, emails, account IDs, session tokens, API keys, IP addresses, phone numbers, or anything else that could identify a specific person or grant access to a system: \"Customer jane.doe@example.com (acct #88213) reported the issue at 09:41. Pulled logs from host prod-api-07, session token eyJhbGciOiJIUzI1NiJ9.mock, source IP 203.0.113.44. Escalated to on-call via internal Slack, cc'd manager rgupta@example.com.\" For each item found, quote the exact snippet and say what category it falls into.",
          pointOut: "Read the flagged list aloud and compare it against what you personally caught reading it cold — be honest if it caught something you missed.",
        },
        {
          label: "Demo 2 — Run the trust-calibration checks live",
          minutes: 9,
          setup: "Switch to the Checklist page on screen so the room can see the three Trust-Calibration items while you run this.",
          prompt: "Here is a hypothesis from an incident retrospective: \"the sync pipeline requires a manual re-sync trigger after any disruption, and that step was missed each time.\" Apply three checks and answer each in one sentence: 1) Source-grounding — does it trace to specific evidence? 2) Alternative-hypothesis — were other explanations genuinely considered? 3) Blast-radius — what does it cost if we're wrong and act on it anyway?",
          pointOut: "Check off the matching items on the Checklist page live as each answer comes back, narrating your reasoning — this is the checklist and the AI cross-checking each other in real time.",
        },
        {
          label: "Demo 3 — Test the escalation judgment",
          minutes: 8,
          setup: "\"Let's test the escalation-trigger judgment live, on a new scenario.\"",
          prompt: "In one sentence, does this incident need named human sign-off before an AI-assisted conclusion is used, and why: \"unusual login patterns detected on 40 customer accounts overnight, pattern unclear\"?",
          pointOut: "This should trip the security-incident trigger immediately — check whether it says so, and note that it's a security question, not a technical one.",
        },
        {
          label: "Demo 4 — Draft the policy addendum",
          minutes: 7,
          setup: "\"Last one — let's see if it can keep this lightweight.\"",
          prompt: "Draft one paragraph to add to an existing incident response policy that requires human sign-off before AI-assisted root causes are finalized for security incidents, without creating a new approval workflow.",
          pointOut: "Read it aloud — if it's longer than a paragraph or invents a new process, that's worth naming: even AI defaults toward adding process instead of staying lightweight, which is the exact trap this module warns against.",
        },
      ],
      virtualNotes:
        "All four demos run from one shared screen — the Checklist's per-browser saved state (via localStorage) means you can safely reset it before the session without affecting anything else, and nobody in the audience needs their own copy open for the demo to work.",
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
      title: "Live Demo Sequence: Build the Playbook, Piece by Piece",
      format: "facilitator-demo",
      duration: "21 min",
      engagement: "Optional one-click poll after Demo 1: \"Do you have anything like this documented today? Yes / No.\"",
      description:
        "Three short demos that build one complete artifact live — the AI-involvement line, the full three-line entry, and the two metrics worth reporting upward — so the room leaves with the whole shape, not just a fragment.",
      demos: [
        {
          label: "Demo 1 — Draft the AI-involvement line",
          minutes: 7,
          setup: "Tell the room the target: a three-line playbook entry for one recurring incident type. Pick one out loud (e.g., \"password reset failures\").",
          prompt: "Based on this investigation summary: \"AI drafted the first hypothesis from ticket history, a human validated it against server logs before the postmortem, and AI drafted this postmortem document from the validated findings,\" write one sentence for a postmortem that documents where AI was used and what was independently validated by a human. Keep it factual and specific — no marketing language, no vague \"AI-assisted\" phrasing.",
          pointOut: "Read it aloud — this is the third line of the playbook entry, done. Notice how specific it is compared to a generic \"AI was used here.\"",
        },
        {
          label: "Demo 2 — Draft all three lines at once",
          minutes: 8,
          setup: "\"Now let's see if it can draft the whole entry, not just one line.\"",
          prompt: "Draft a three-line playbook entry for \"password reset failures\": when AI is used, what sign-off is required, how AI involvement gets documented. Keep each line to one sentence.",
          pointOut: "Read all three lines aloud, then critique the sign-off line specifically, out loud: is it something a tired on-call engineer could actually follow at 2 AM, or does it just sound good?",
        },
        {
          label: "Demo 3 — Ask it for the metrics worth reporting",
          minutes: 6,
          setup: "\"Last one — let's check its instincts against ours on what to report upward.\"",
          prompt: "In one sentence each, name two metrics a team could track to show whether AI-assisted RCA is actually working, beyond just \"we use AI now.\"",
          pointOut: "Compare its answer to time-to-hypothesis and hypothesis-accuracy-rate from this module. If it lands close, that's confirmation those are the right two to report upward. Then open Prompt Library and point to the two categories the room should start with.",
        },
      ],
      virtualNotes:
        "This closes the loop for the whole audience without needing anyone to draft anything live themselves — the artifacts you produce on screen are the models they take back to their own desks, and the Prompt Library link is what they actually use afterward.",
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
