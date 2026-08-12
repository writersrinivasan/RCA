export type WriteUp = {
  label: "A" | "B";
  verdict: "grounded" | "hallucinated";
  text: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  incidentType: string;
  severity: "SEV-1" | "SEV-2" | "SEV-3";
  setup: string;
  rawSignals: string[];
  writeUps: WriteUp[];
  tellTales: { question: string; answer: string }[];
  discussionQuestions: { question: string; ifStuck: string }[];
  moduleLink: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "checkout-failure",
    title: "The Checkout Failure That Wasn't the Certificate",
    incidentType: "E-commerce checkout / payment processing",
    severity: "SEV-1",
    setup:
      "At 02:11 AM, checkout success rate drops from 98% to 41% across all regions. Support tickets from customers reporting 'payment failed' errors spike within minutes. An on-call engineer pastes three hours of gateway logs into an AI assistant to get a fast read before the exec bridge starts.",
    rawSignals: [
      "Checkout success rate: 98% → 41% at 02:11 AM, recovered to 96% at 03:05 AM",
      "Deploy log: config change #5521 ('increase payment timeout threshold') shipped at 02:09 AM",
      "Gateway logs: spike in 'upstream timeout' errors (not SSL errors) starting 02:12 AM",
      "SSL certificate expiry date: 8 months out — confirmed via certificate manager dashboard",
      "Rollback of config #5521 at 02:58 AM; success rate began recovering within 7 minutes",
    ],
    writeUps: [
      {
        label: "A",
        verdict: "grounded",
        text: "Root cause: config change #5521, deployed at 02:09 AM, reduced the payment gateway timeout threshold in a way that caused legitimate slow-but-successful transactions to be cut off early, logged as 'upstream timeout.' Checkout success rate dropped from 98% to 41% starting 02:11 AM, two minutes after the deploy. Rolling back #5521 at 02:58 AM correlated with recovery to 96% by 03:05 AM, a 7-minute lag consistent with cache propagation. SSL certificate was checked and confirmed valid through [date 8 months out] — ruled out as a cause. Confidence: high, based on deploy-timing correlation and rollback-confirmed recovery.",
      },
      {
        label: "B",
        verdict: "hallucinated",
        text: "Root cause: the payment gateway's SSL certificate expired at 2:14 AM, causing all HTTPS handshakes to the payment processor to fail, which produced the timeout errors seen in the logs. This is a common failure mode for e-commerce platforms and explains the sudden, sharp drop in checkout success rate. Recommend immediate certificate renewal and adding expiry monitoring to prevent recurrence.",
      },
    ],
    tellTales: [
      {
        question: "What evidence supports this?",
        answer:
          "Write-up A cites the exact deploy ID, timestamp, and the specific error type in the logs ('upstream timeout,' not an SSL error). Write-up B asserts a certificate expiry with no log evidence — and the certificate manager dashboard actually shows 8 months of validity remaining.",
      },
      {
        question: "What else was ruled out, and how?",
        answer:
          "Write-up A explicitly rules out the SSL theory by checking the certificate manager. Write-up B never mentions checking anything else — it presents one theory as the only theory.",
      },
      {
        question: "What would prove this wrong?",
        answer:
          "Write-up A's own logic is falsifiable and was tested: if the config rollback hadn't correlated with recovery, the theory would have been dropped. Write-up B's theory was never tested against the certificate manager at all — the 8-month validity window would have disproven it in ten seconds if anyone had looked.",
      },
    ],
    discussionQuestions: [
      {
        question: "Write-up B is objectively better written — cleaner prose, confident tone. Why does that make it more dangerous, not less?",
        ifStuck:
          "Fluency and accuracy are unrelated in AI output, but people are wired to treat them as the same signal — with humans, confident delivery loosely tracks expertise; with AI, the model writes with identical confidence whether it's citing something real or filling a gap. A fluent wrong answer slides past the skepticism a hesitant guess would trigger, right when it most needs to be caught. Write-up B also borrows the vocabulary of specificity (\"SSL certificate,\" \"HTTPS handshakes\") without tying any of it to an actual log line — it mimics evidence-anchoring without the substance.",
      },
      {
        question: "If this had gone straight into a customer-facing update, what would the SSL claim have cost the team when it turned out to be wrong?",
        ifStuck:
          "The outage would have kept running — a certificate renewal does nothing for a config-timeout problem, while the real fix (rolling back #5521) sits undone. A \"we've fixed the SSL issue\" message would be false the moment it's sent, so customers find out checkout is still broken right after being told it's resolved — worse than no update at all. It also risks wasted effort looping in security/compliance over a red herring, and a durable credibility hit: a wrong cause in a published postmortem is the kind of thing an enterprise customer remembers next time your team reports a cause.",
      },
      {
        question: "What single question, asked in the incident channel, would have caught Write-up B before it went anywhere?",
        ifStuck:
          "\"What would prove this wrong — and have we checked it?\" For this claim specifically, that's a 10-second look at the certificate manager dashboard, which shows 8 months of validity remaining. The claim doesn't survive contact with the one piece of evidence that could kill it — nobody looked before typing it out with total confidence.",
      },
    ],
    moduleLink: "what-good-looks-like",
  },
  {
    slug: "login-outage",
    title: "The Login Outage: Two Theories, One Rollback",
    incidentType: "Mobile app authentication / SSO",
    severity: "SEV-1",
    setup:
      "Login failure rate jumps from 1% to 38% at 14:02. Customer support tickets flood in from users locked out of the mobile app. The team is under pressure from an executive watching the incident channel live, and two engineers independently ask an AI assistant for a read on the logs.",
    rawSignals: [
      "Login failure rate: 1% → 38% at 14:02, back to 1.1% by 14:24",
      "CDN config push (change #8821) deployed at 14:00, two minutes before failures began",
      "Auth server CPU and memory: flat, no unusual load throughout the incident window",
      "Rollback of change #8821 at 14:19; recovery began within 5 minutes",
      "Support ticket volume during the window: 340% above baseline, concentrated in one geographic region initially served by the CDN edge node affected by #8821",
    ],
    writeUps: [
      {
        label: "A",
        verdict: "hallucinated",
        text: "The login failures were most likely caused by increased load on the authentication servers during a period of high traffic, which is common during peak usage hours and can lead to intermittent authentication failures for users. Recommend scaling the authentication service and monitoring server load more closely during peak periods.",
      },
      {
        label: "B",
        verdict: "grounded",
        text: "Root cause: CDN config change #8821, deployed at 14:00, disrupted routing for a subset of edge nodes serving [region]. Login failures spiked from 1% to 38% starting 14:02, two minutes after the push, concentrated in the affected region per ticket geography. Auth server CPU/memory remained flat throughout — ruling out a server-load explanation. Rolling back #8821 at 14:19 correlated with recovery to 1.1% by 14:24, a 5-minute propagation lag. Confidence: high, based on deploy-timing correlation, geographic ticket concentration, and rollback-confirmed recovery.",
      },
    ],
    tellTales: [
      {
        question: "What evidence supports this?",
        answer:
          "Write-up B ties the timing to a specific change ID and cross-checks it against the geographic pattern in ticket data. Write-up A invokes 'high traffic' with no traffic data cited anywhere — auth server metrics actually show flat load the whole time.",
      },
      {
        question: "What else was ruled out, and how?",
        answer:
          "Write-up B directly checks and rules out server load using the CPU/memory metrics. Write-up A's own explanation (server load) is the one piece of evidence that directly contradicts it, and it isn't checked.",
      },
      {
        question: "What would prove this wrong?",
        answer:
          "For Write-up B, a rollback with no recovery would have disproven it — that test was run and it worked. Write-up A's 'high traffic' theory would be disproven by the flat CPU/memory graphs, which were available the whole time and simply weren't checked.",
      },
    ],
    discussionQuestions: [
      {
        question: "This time the grounded write-up is B, not A — why is it dangerous to assume the more detailed-sounding one is always the accurate one?",
        ifStuck:
          "In the checkout case, detail happened to signal the hallucination. Here, detail correctly signals the truth. If your team's rule of thumb is \"more specific means more accurate,\" you'll be right by accident about half the time. The rule that actually works regardless of which write-up happens to sound more detailed is: does the detail trace to a cited source — a change ID, a metric, a ticket — or is it decoration? Both write-ups here use technical language; only one ties it to a checkable fact.",
      },
      {
        question: "An executive is watching the channel live. How does that pressure change how carefully a hypothesis like Write-up A gets checked before someone posts it?",
        ifStuck:
          "Executive presence pulls hard toward speed over accuracy — nobody wants to be \"still investigating\" while a VP watches, so the room grabs the fastest available answer. That's exactly the moment validation is most likely to get skipped, and also the moment being wrong is most expensive, since it damages credibility with leadership specifically. The leader's move is to slow the room down just enough for one grounding question, framed as protecting the executive from a false update rather than delaying them: \"let's get this right the first time so we're not walking it back in five minutes.\"",
      },
      {
        question: "What would you say, in the moment, to the engineer about to post Write-up A into the incident channel?",
        ifStuck:
          "\"Before it goes in — what does the CPU/memory graph actually show for the auth servers right now?\" That question doesn't block or embarrass anyone, and it forces a check against the one piece of evidence that directly contradicts the theory (server load was flat the whole time). If they can't answer, hold the post ten more seconds; if they can, the update just got stronger before it shipped.",
      },
    ],
    moduleLink: "what-good-looks-like",
  },
  {
    slug: "sync-lag",
    title: "The CRM Sync Lag Nobody Could Pin Down",
    incidentType: "Data pipeline / CRM ticket sync",
    severity: "SEV-2",
    setup:
      "For the third time in two months, support tickets stop syncing to the CRM for 20–40 minutes at a time. Each time, a different engineer runs an informal 5 Whys in a Slack thread with AI assistance and lands on a different 'root cause.' This time, the team lead decides to use the retrospective to actually compare the three incidents side by side.",
    rawSignals: [
      "Incident 1 (6 weeks ago): sync queue backed up after a scheduled maintenance window; manual re-sync trigger was skipped",
      "Incident 2 (3 weeks ago): sync queue backed up after a deploy; manual re-sync trigger was skipped",
      "Incident 3 (this week): sync queue backed up after a database failover; manual re-sync trigger was skipped",
      "In all three cases, the sync pipeline itself never errored — it silently paused and waited for a manual trigger that has no automated fallback",
      "The manual re-sync step exists because of a design decision made 14 months ago and is documented only in a wiki page linked from a since-archived onboarding doc",
    ],
    writeUps: [
      {
        label: "A",
        verdict: "hallucinated",
        text: "Incident 1 root cause: a transient network issue during the maintenance window caused sync failures. Incident 2 root cause: the deploy introduced a bug in the sync connector. Incident 3 root cause: the database failover caused a temporary sync interruption. Each incident appears to be an isolated, unrelated technical issue tied to its specific trigger event.",
      },
      {
        label: "B",
        verdict: "grounded",
        text: "Root cause (all three incidents): the sync pipeline requires a manual re-sync trigger after any disruption — maintenance, deploy, or failover — with no automated fallback. In all three cases, the pipeline itself did not error; it silently paused, and the manual trigger step was missed because it is undocumented outside an archived onboarding page. This is a single recurring process gap, not three unrelated technical incidents. The trigger event differs each time (maintenance, deploy, failover) but the actual failure mode — a missed manual step with no automation and no discoverable documentation — is identical.",
      },
    ],
    tellTales: [
      {
        question: "What evidence supports this?",
        answer:
          "Write-up B compares all three incidents side by side and finds the identical underlying mechanism (manual trigger, no fallback, no discoverable docs). Write-up A treats each incident as a fresh investigation and never asks whether they're the same failure — the pipeline logs it cites as 'root causes' actually show no errors at all in any incident.",
      },
      {
        question: "What else was ruled out, and how?",
        answer:
          "Write-up B rules out 'three separate technical bugs' by checking pipeline error logs across all three incidents and finding no errors — just silent pauses. Write-up A never compares across incidents at all, which is exactly how a recurring process gap gets re-diagnosed as three unrelated one-offs.",
      },
      {
        question: "What would prove this wrong?",
        answer:
          "If a fourth incident occurred with the manual trigger properly executed and sync still failed, that would disprove Write-up B's theory. Write-up A's three separate 'root causes' were never tested against each other at all — nobody asked if they shared a mechanism.",
      },
    ],
    discussionQuestions: [
      {
        question: "Module 4 covers framework choice — why would 5 Whys, run fresh each time on a single incident, be structurally likely to produce Write-up A's result?",
        ifStuck:
          "5 Whys is built to follow one chain of causation for one incident, starting from scratch every time — it has no built-in way to compare today's incident against last month's. Each investigator dutifully chases \"why did sync fail this time\" down to whatever technical trigger was present that day (a deploy, a maintenance window, a failover), and stops there, because that trigger genuinely does explain that day's proximate failure. The framework isn't wrong on any single run — it's structurally blind to a pattern that only becomes visible when you line up three runs side by side. That's a framework-selection issue, not a bad-investigator issue.",
      },
      {
        question: "What would a Fishbone pass across all three incidents together have surfaced that three separate 5 Whys sessions missed?",
        ifStuck:
          "Categorizing all three incidents' notes into People/Process/Technology/Environment at once — instead of one 5 Whys chain at a time — would show the same Process entry recurring in every incident (the undocumented manual re-sync step), even though the Technology/Environment trigger differed each time. Fishbone's category structure makes that repetition visible; 5 Whys' linear structure hides it, because each session only ever looks at one incident in isolation.",
      },
      {
        question: "This is a process/documentation root cause, not a technical one. Does that change who owns the action item?",
        ifStuck:
          "Yes, and it's worth naming explicitly. If the action item stays with engineering as \"add a retry mechanism,\" it treats the symptom without necessarily fixing the actual gap — nobody knowing the step exists. The real owner is whoever owns the runbook or onboarding documentation for that pipeline, and the fix is as much \"surface this step where it can't be missed\" as it is any code change. RCA write-ups default to naming engineering owners even when the root cause is a documentation gap — say so directly in the postmortem.",
      },
    ],
    moduleLink: "mapping-frameworks",
  },
  {
    slug: "api-latency-spike",
    title: "The API Latency Spike and the Query That Looked in the Wrong Window",
    incidentType: "Third-party API integration / partner-facing latency",
    severity: "SEV-2",
    setup:
      "A key enterprise customer reports that API response times tripled for about 90 minutes starting mid-morning. By the time an engineer investigates, the issue has already resolved. They ask an AI assistant to check the observability platform for anomalies in the last hour — the default time window the tool suggested.",
    rawSignals: [
      "Customer-reported issue window: 09:15 AM – 10:45 AM (90 minutes), confirmed via customer's own monitoring timestamps",
      "Engineer began investigating at 11:40 AM",
      "AI-generated query default time window: 'last 60 minutes' (10:40 AM – 11:40 AM) — mostly after the issue had already resolved",
      "Actual latency metrics for 09:15–10:45 AM (checked later): P95 latency rose from 220ms to 890ms, correlating with a batch export job that ran 09:10–10:50 AM on shared infrastructure",
    ],
    writeUps: [
      {
        label: "A",
        verdict: "hallucinated",
        text: "Query result: no anomalies found in API latency or error rates for the last 60 minutes. Based on this, the reported latency issue does not appear to be on our side — recommend asking the customer to check their own network path or client-side implementation, as our systems show no evidence of a problem during the relevant period.",
      },
      {
        label: "B",
        verdict: "grounded",
        text: "Initial query covered the wrong window (last 60 minutes, 10:40–11:40 AM) relative to the customer-reported issue window (09:15–10:45 AM) — re-ran against the correct window. P95 latency rose from 220ms to 890ms during 09:15–10:45 AM, correlating with a batch export job running 09:10–10:50 AM on shared infrastructure. This is a plausible resource-contention root cause; recommend moving the batch export to isolated infrastructure or off-peak scheduling. Confidence: medium-high, pending confirmation the export job was the actual contention source rather than a coincident load spike.",
      },
    ],
    tellTales: [
      {
        question: "What evidence supports this?",
        answer:
          "Write-up B explicitly checks and states the time window used, catches that the first query used the wrong one, and re-runs it correctly. Write-up A reports a clean result without ever stating what window was checked — the 'no anomalies' finding is from a query that barely overlapped the actual incident.",
      },
      {
        question: "What else was ruled out, and how?",
        answer:
          "Write-up B considers and names an alternative (coincident load spike vs. the export job specifically) and flags it as still open. Write-up A jumps straight to blaming the customer's own systems with nothing checked on their side either.",
      },
      {
        question: "What would prove this wrong?",
        answer:
          "Write-up B's theory is testable — moving the export job and watching whether latency spikes recur would confirm or disprove it. Write-up A's 'no anomalies' conclusion was never re-tested against the correct time window until someone caught the mismatch.",
      },
    ],
    discussionQuestions: [
      {
        question: "This is the Module 2B scenario in full: what single follow-up question would have caught the wrong time window before Write-up A went back to the customer?",
        ifStuck:
          "\"What time window did that query actually cover, and does it match when the customer says the issue started?\" The query returned a real, accurate \"no anomalies\" result — just for the wrong 60 minutes. Forcing the window to be stated out loud next to the customer's reported window (09:15–10:45) would have exposed the mismatch (10:40–11:40) immediately, before anyone drew a conclusion from it.",
      },
      {
        question: "Telling an enterprise customer 'the problem isn't on our side' based on Write-up A — what's the relationship cost if that turns out to be wrong?",
        ifStuck:
          "For an enterprise account, this is a trust issue, not just an awkward correction. It shifts blame onto the customer's own systems, which they'll investigate on their own time and money — and when they find nothing wrong on their end, your team looks either incompetent or evasive, exactly when a big account is deciding how much to trust your support organization. Depending on the contract, it can also feed into SLA disputes or renewal conversations. It costs more in relationship repair than the two minutes it would've taken to re-check the time window.",
      },
      {
        question: "How would you build 'always state the time window checked' into your team's habits without slowing every investigation down?",
        ifStuck:
          "Bake it into the request itself instead of adding a separate review step — this is exactly what the Observability Query Requests prompt template in the Prompt Library does: it requires a three-line plain-language scope summary (time window / data source / filters) alongside every query, automatically, every time. That turns the check into a byproduct of asking the question at all, rather than a step someone has to remember afterward — same speed, built-in verification.",
      },
    ],
    moduleLink: "reading-ai-evidence",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
