import type { Metadata } from "next";
import Link from "next/link";
import {
  Presentation,
  ArrowRight,
  Wifi,
  RotateCcw,
  Globe,
  Gauge,
  MonitorPlay,
} from "lucide-react";
import { Container } from "@/components/Container";
import { AuroraBackground } from "@/components/AuroraBackground";
import { FadeIn } from "@/components/FadeIn";
import { Pill } from "@/components/Pill";
import { Callout } from "@/components/notes/Callout";
import { RunOfShowTable } from "@/components/notes/RunOfShowTable";

export const metadata: Metadata = {
  title: "Facilitator Guide — AI-RCA Academy",
  description: "How to run this training live and virtual for 700+ participants as a live-prompt demo — no breakout rooms, no crowd Q&A, just you running real AI prompts on screen. Deployment, pacing, and a minute-by-minute, 70% hands-on run of show for all three days.",
};

const toc = [
  { id: "at-scale", label: "1. Running this virtually at scale" },
  { id: "live-demo-model", label: "2. The live-demo model" },
  { id: "deployment", label: "3. Get the app onto a public URL" },
  { id: "tech-setup", label: "4. Platform & tech checklist" },
  { id: "what-hands-on-means", label: "5. What 70% hands-on means here" },
  { id: "day-1", label: "6. Day 1 run of show" },
  { id: "day-2", label: "7. Day 2 run of show" },
  { id: "day-3", label: "8. Day 3 run of show" },
  { id: "components", label: "9. Running each demo" },
  { id: "troubleshooting", label: "10. Troubleshooting & tips" },
];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
      {children}
    </h2>
  );
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-base leading-relaxed text-slate-300">{children}</p>;
}

const day1Rows = [
  { time: "9:00 – 9:10", segment: "Welcome, Context Setting & Baseline Poll", page: "Home", href: "/", doThis: "Share your screen on the homepage hero. Run one simple baseline poll: \"how is your team already using AI in troubleshooting today?\" Glance at the split — don't read individual answers." },
  { time: "9:10 – 9:25", segment: "Module 1 — Framing (theory)", page: "Day 1 / Module 1", href: "/day/1/why-ai-changes-rca", doThis: "Tight 15-minute talk: the confident-wrong-answer problem and the AI-tools field guide." },
  { time: "9:25 – 10:00", segment: "Module 1 — Live Demo Sequence (4 demos)", page: "Day 1 / Module 1", href: "/day/1/why-ai-changes-rca", doThis: "Run all four demos back to back, in order, straight off the module page: the confident-gap demo, the good-use-of-AI demo, the self-confidence-rating demo, and the self-described-limits demo. Each has its own setup line, prompt, and point-out cue built in." },
  { time: "10:00 – 10:12", segment: "Module 2 — Framing (theory)", page: "Day 1 / Module 2", href: "/day/1/what-good-looks-like", doThis: "The three-question evaluation pass, tight: what evidence, what else was ruled out, what would prove it wrong." },
  { time: "10:12 – 10:40", segment: "Module 2 — Live Demo Sequence (4 demos)", page: "Case Study: Checkout Failure", href: "/case-studies/checkout-failure", doThis: "Show the case on screen first, then run all four demos from the module page: stress-test the hallucinated claim, stress-test the correct one, have the AI argue the wrong side, then the one-sentence gut-check." },
  { time: "10:40 – 10:48", segment: "Module 2B — Framing (theory)", page: "Day 1 / Module 2B", href: "/day/1/reading-ai-evidence", doThis: "60-second refresher: query results are only as good as the time window they searched." },
  { time: "10:48 – 11:05", segment: "Module 2B — Live Demo Sequence (3 demos)", page: "Day 1 / Module 2B", href: "/day/1/reading-ai-evidence", doThis: "Wrong window, right window, then the AI's own clarifying question — all three prompts are on the module page, run back to back right after Module 2." },
];

const day2Rows = [
  { time: "9:00 – 9:13", segment: "Module 3 — Framing (theory)", page: "Day 2 / Module 3", href: "/day/2/coaching-your-team", doThis: "Name the three anti-patterns (prompt-and-paste, anchoring, skipping validation under deadline) fast — the demo is where the room actually learns this." },
  { time: "9:13 – 9:45", segment: "Module 3 — Live Demo Sequence (4 escalating rounds)", page: "Day 2 / Module 3", href: "/day/2/coaching-your-team", doThis: "Run all four rounds from the module page in order — the first pressured message, a second engineer disagreeing, a defensive pushback, and the validated five-minutes-later version. Respond live and unscripted each round." },
  { time: "9:45 – 9:58", segment: "Module 4 — Framing (theory)", page: "Frameworks", href: "/frameworks", doThis: "Quick tour of all four Frameworks tabs on screen so the room has the mental model fresh before the demo." },
  { time: "9:58 – 10:30", segment: "Module 4 — Live Demo Sequence (4 demos)", page: "Day 2 / Module 4", href: "/day/2/mapping-frameworks", doThis: "Run the same incident through Fishbone, then 5 Whys, then a fresh incident through IS/IS-NOT, then ask the AI to pick a framework itself — all four prompts on the module page." },
  { time: "10:30 – 10:39", segment: "Module 5 — Framing (theory)", page: "Day 2 / Module 5", href: "/day/2/leading-retrospective", doThis: "One idea: evidence before hypothesis, every time, even when the AI's hypothesis showed up first." },
  { time: "10:39 – 11:00", segment: "Module 5 — Live Demo Sequence (3 demos)", page: "Case Study: CRM Sync Lag", href: "/case-studies/sync-lag", doThis: "Build the timeline before revealing the hypothesis, have the AI draft the retrospective agenda itself, then rewrite a blame-toned sentence into an evidence-toned one — all three on the module page." },
];

const day3Rows = [
  { time: "9:00 – 9:09", segment: "Module 5B — Framing (theory)", page: "Day 3 / Module 5B", href: "/day/3/incident-communication", doThis: "The three-check pass in 9 minutes: accuracy, hedging, audience fit." },
  { time: "9:09 – 9:30", segment: "Module 5B — Live Demo Sequence (3 demos)", page: "Day 3 / Module 5B", href: "/day/3/incident-communication", doThis: "Stress-test the customer draft, then the executive version of the same facts, then the version that overpromises on purpose — all three prompts on the module page." },
  { time: "9:30 – 9:43", segment: "Module 6 — Framing (theory)", page: "Day 3 / Module 6", href: "/day/3/governance-risk-privacy", doThis: "Two separate questions, stated plainly: should I trust this conclusion, and should this data even be in this tool." },
  { time: "9:43 – 10:15", segment: "Module 6 — Live Demo Sequence (4 demos)", page: "Checklist", href: "/checklist", doThis: "Redact a planted log snippet, run the trust-calibration checks live against the Checklist page, test the escalation judgment on a new scenario, then draft the policy addendum — all four on the module page." },
  { time: "10:15 – 10:24", segment: "Module 7 — Framing (theory)", page: "Day 3 / Module 7", href: "/day/3/playbook-prompt-library", doThis: "Anatomy of a three-line playbook entry — that's the whole framing, the rest is the demo." },
  { time: "10:24 – 10:45", segment: "Module 7 — Live Demo Sequence (3 demos)", page: "Prompt Library", href: "/prompt-library", doThis: "Draft the AI-involvement line, then the full three-line entry, then ask the AI for the two metrics worth reporting upward — all three prompts on the module page, then point to Prompt Library categories to close." },
  { time: "10:45 – 11:00", segment: "Capstone: Synthesis & Action Planning", page: "Learn the Concepts (Cheat Sheet)", href: "/notes#cheat-sheet", doThis: "Share the one-page cheat sheet. Ask everyone to post their one commitment in chat on your cue — scroll and read a sample aloud before closing. This is the one moment worth letting the crowd speak; keep it to one line each." },
];

export default function FacilitatorGuidePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-10 sm:pt-20">
        <AuroraBackground />
        <Container size="wide">
          <FadeIn>
            <Pill tone="amber" icon={<Presentation className="h-3 w-3" />}>For You, the Facilitator</Pill>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              How to Run This Live, Virtual, at Scale
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
              Every other page in this app is content. This page is mechanics — how to get the app in front
              of 700+ people who are all joining remotely, and exactly what to click and say across a
              training that&rsquo;s roughly 70% hands-on and 30% theory, without needing breakout rooms or
              open crowd Q&amp;A to make it feel hands-on.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-28">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
            <aside className="hidden lg:block">
              <nav className="sticky top-24 space-y-1">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">On this page</p>
                {toc.map((t) => (
                  <a key={t.id} href={`#${t.id}`} className="block rounded-lg px-3 py-1.5 text-sm text-slate-400 transition-colors hover:bg-white/5 hover:text-white">
                    {t.label}
                  </a>
                ))}
              </nav>
            </aside>

            <article className="max-w-3xl space-y-16">
              {/* 1. AT SCALE */}
              <FadeIn>
                <div>
                  <H2 id="at-scale">1. Running This Virtually at Scale</H2>
                  <P>
                    This training moved from an in-room intensive to a virtual session for 700+ people —
                    that changes more than the video link. At this size, you can&rsquo;t coordinate breakout
                    rooms for every activity or field open questions from the crowd and expect a usable
                    response. So every hands-on moment in this course now runs as something that works
                    identically whether 10 people are watching or 10,000:
                  </P>
                  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="glass-card rounded-2xl p-5">
                      <p className="flex items-center gap-2 text-sm font-semibold text-white">
                        <MonitorPlay className="h-4 w-4 text-sky-300" /> You run every demo, live
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-slate-400">
                        You pose the question, you paste the prompt into Claude on screen, you read the
                        answer and explain it. No breakout rooms, no waiting on the crowd — see Section 2.
                      </p>
                    </div>
                    <div className="glass-card rounded-2xl p-5">
                      <p className="flex items-center gap-2 text-sm font-semibold text-white">
                        <Globe className="h-4 w-4 text-amber-300" /> The app needs a public URL
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-slate-400">
                        Participants can browse the case studies, prompt library, and checklist on their
                        own afterward — that needs a real internet address. See Section 3.
                      </p>
                    </div>
                    <div className="glass-card rounded-2xl p-5">
                      <p className="flex items-center gap-2 text-sm font-semibold text-white">
                        <Gauge className="h-4 w-4 text-emerald-300" /> 70% of the time is now hands-on
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-slate-400">
                        Every module below is a short framing talk plus a much longer live demo — see
                        Section 5 and the day-by-day run of show.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* 2. LIVE DEMO MODEL */}
              <FadeIn>
                <div>
                  <H2 id="live-demo-model">2. The Live-Demo Model</H2>
                  <P>
                    Every module&rsquo;s hands-on block now follows the same shape, and it&rsquo;s worth
                    understanding once so all nine feel familiar instead of like nine different formats:
                  </P>
                  <ol className="mt-5 space-y-3">
                    {[
                      ["Pose the question yourself", "Ask it to the room, rhetorically. You are not waiting for an answer — say it, then move straight into the demo. This replaces \"ask for a show of hands\" from earlier drafts of this guide."],
                      ["Run the real prompts, live, on screen", "Every module page has a sequence of 3–4 exact, ready-to-paste prompts, each with a Copy button and its own setup line and point-out cue. Paste them into Claude unedited, one after another, in front of everyone — the point is that they're real and unrehearsed, not slides."],
                      ["Read the response aloud and react honestly", "If it says something surprising, say so. If it's exactly what you expected, say that too. The room is learning to read AI output by watching you do it in real time."],
                      ["Answer your own rhetorical question", "Close the loop yourself — name the leadership move, the follow-up question, or the takeaway, out loud, rather than opening the floor."],
                      ["Optionally run a one-click poll", "Every activity has a short, single-click poll suggestion. Glance at the split and move on — it's a pulse-check, not a discussion."],
                    ].map(([title, body], i) => (
                      <li key={title} className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">{i + 1}</span>
                        <div>
                          <p className="text-sm font-semibold text-white">{title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-400">{body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <Callout type="example" title="Test each prompt once before you go live — but still run it live">
                    Run every day&rsquo;s prompts yourself the day before, so you know roughly what to expect
                    and aren&rsquo;t caught off guard. But paste them fresh during the actual session rather
                    than reading a saved response from a slide — AI output varies slightly run to run, and
                    that natural variation is part of what makes the demo credible instead of scripted. Keep
                    a screenshot of your test-run response as a backup in case of an outage or a wildly
                    off-topic answer live.
                  </Callout>
                </div>
              </FadeIn>

              {/* 3. DEPLOYMENT */}
              <FadeIn>
                <div>
                  <H2 id="deployment">3. Get the App Onto a Public URL</H2>
                  <P>
                    Even though you&rsquo;re running the demos yourself, participants still need to reach the app
                    afterward — to revisit the case studies, copy prompts from the Prompt Library for their
                    own team, or work through the plain-English Notes at their own pace. Running{" "}
                    <code className="rounded bg-black/30 px-1.5 py-0.5 font-mono text-xs text-sky-200">npm run dev</code> on
                    your laptop only reaches your laptop; it needs to be deployed before day one.
                  </P>
                  <Callout type="example" title="The good news: this app is almost entirely static">
                    Nearly every page was pre-rendered at build time (you&rsquo;ll see this as{" "}
                    <code className="rounded bg-black/30 px-1.5 py-0.5 font-mono text-xs text-sky-200">○ Static</code> /{" "}
                    <code className="rounded bg-black/30 px-1.5 py-0.5 font-mono text-xs text-sky-200">● SSG</code> in
                    the build output). There&rsquo;s no database and no server-side logic beyond serving
                    pages, so 700+ visitors browsing afterward is a trivial load for any modern host, even a
                    free tier.
                  </Callout>
                  <P>
                    <strong className="text-white">Recommended: Vercel</strong> (the company that builds
                    Next.js — this app deploys there with zero configuration).
                  </P>
                  <ol className="mt-4 space-y-3">
                    {[
                      "From the project folder, run npx vercel and follow the prompts to log in (or create a free account) and deploy — you'll have a live https://your-project.vercel.app URL in about a minute.",
                      "Open that URL yourself from your phone on cellular data, not your office Wi-Fi, to confirm it's genuinely public before trusting it.",
                      "Any time you edit content, redeploy with npx vercel --prod so the live URL picks up the change.",
                      "Keep the same URL across all three days — send it once, in the calendar invite and the session chat, so participants only need to bookmark it a single time.",
                    ].map((s, i) => (
                      <li key={s} className="flex gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-sm leading-relaxed text-slate-300">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold text-white">{i + 1}</span>
                        {s}
                      </li>
                    ))}
                  </ol>
                  <P>
                    Netlify and Cloudflare Pages work identically well if your organization already
                    standardizes on one of those. Whichever you choose, treat deployment as part of
                    pre-production, done days before the first session.
                  </P>
                </div>
              </FadeIn>

              {/* 4. TECH SETUP */}
              <FadeIn>
                <div>
                  <H2 id="tech-setup">4. Platform &amp; Tech Checklist</H2>
                  <ul className="mt-5 space-y-3">
                    {[
                      "App deployed to a public URL (Section 3) and tested from outside your own network, at least 24 hours before the first session.",
                      "Claude (or whichever AI assistant you're demoing) open and logged in, in a separate browser tab, ready to paste into — test it once the day before so you're not troubleshooting a login live.",
                      "Every prompt for the day tested once in advance so you know roughly what to expect, with a screenshot of that test response saved as a fallback.",
                      "Live polling tool ready and tested for the one-click pulse-checks — native platform polls are simplest.",
                      "A pinned chat message or shared doc with that day's app URL, so latecomers can self-orient without you pausing to repeat it.",
                      "Recording enabled if this session needs to be available afterward — 700 people across time zones means not everyone will make the live slot.",
                      "A co-facilitator or producer to monitor chat and technical issues while you're presenting — at this scale, you can't run the demo and moderate chat alone.",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-sm leading-relaxed text-slate-300">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* 5. WHAT HANDS ON MEANS */}
              <FadeIn>
                <div>
                  <H2 id="what-hands-on-means">5. What 70% Hands-On Means Here</H2>
                  <P>
                    Worth saying out loud in the first ten minutes, because it resets expectations:
                    this course still has <strong className="text-white">zero coding and zero log-analysis
                    labs</strong>, and at this scale, no breakout rooms or open Q&amp;A either. Hands-on
                    means the room watches something real and unscripted happen, every single module:
                  </P>
                  <ol className="mt-5 space-y-3">
                    {[
                      ["A short sequence of real prompts, pasted live", "Not a screenshot, not a slide — 3–4 actual AI responses generated in front of everyone, each with its own beat, with all the natural variation that implies."],
                      ["A leader's actual reasoning, out loud", "You model the follow-up question, the skepticism, the connection back to the lesson — narrated, not summarized after the fact."],
                      ["One honest reaction to the output", "If the AI says something unexpected, that's not a failed demo — it's the most convincing possible teaching moment."],
                      ["A single, fast pulse-check", "One-click polls tell you the room's temperature without needing anyone to compose an answer."],
                    ].map(([title, body], i) => (
                      <li key={title} className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">{i + 1}</span>
                        <div>
                          <p className="text-sm font-semibold text-white">{title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-400">{body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <Callout type="example" title="This shows up on every module page">
                    Every module now displays a theory/hands-on time bar, plus a numbered sequence of 3–4
                    demo cards, each with its own &ldquo;Paste into Claude, live&rdquo; box and Copy button —
                    pulled straight into the run-of-show tables below.
                  </Callout>
                </div>
              </FadeIn>

              {/* DAY 1 */}
              <FadeIn>
                <div>
                  <H2 id="day-1">6. Day 1 Run of Show</H2>
                  <P>
                    Times assume a 9:00 AM start — shift the whole column if your session starts later. Each
                    module splits into its Framing block (theory, you talk) and Live Demo block (hands-on,
                    you run 3–4 prompts back to back).
                  </P>
                  <RunOfShowTable rows={day1Rows} />
                </div>
              </FadeIn>

              {/* DAY 2 */}
              <FadeIn>
                <div>
                  <H2 id="day-2">7. Day 2 Run of Show</H2>
                  <RunOfShowTable rows={day2Rows} />
                </div>
              </FadeIn>

              {/* DAY 3 */}
              <FadeIn>
                <div>
                  <H2 id="day-3">8. Day 3 Run of Show</H2>
                  <RunOfShowTable rows={day3Rows} />
                </div>
              </FadeIn>

              {/* 9. COMPONENTS */}
              <FadeIn>
                <div>
                  <H2 id="components">9. Running Each Demo</H2>

                  <h3 className="mt-8 font-display text-lg font-semibold text-white">The live prompt box</h3>
                  <P>
                    Every module page has a &ldquo;Paste into Claude, live&rdquo; box with a Copy button.
                    Open the module page on one screen or tab, Claude on another, and paste directly — don&rsquo;t
                    retype it, the exact wording matters for a clean demonstration.
                  </P>

                  <h3 className="mt-8 font-display text-lg font-semibold text-white">Case Study pages</h3>
                  <P>
                    Open any case under <Link href="/case-studies" className="text-sky-300 underline underline-offset-2 hover:text-sky-200">Case Studies</Link> to
                    show the setup and Write-ups A/B on screen before running that module&rsquo;s live prompt
                    — the case gives the room something concrete to watch the AI reason about. The
                    click-to-reveal &ldquo;If the room&rsquo;s stuck&rdquo; answers on each case&rsquo;s
                    discussion questions are there for you to reference if you want to pose one rhetorically
                    and answer it yourself.
                  </P>

                  <h3 className="mt-8 font-display text-lg font-semibold text-white">Checklist</h3>
                  <P>
                    Open <Link href="/checklist" className="text-sky-300 underline underline-offset-2 hover:text-sky-200">Checklist</Link> during
                    Module 6 and check items off yourself, live, narrating your reasoning for each one against
                    Day 2&rsquo;s case. Click <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-white"><RotateCcw className="h-3 w-3" /> Reset</span> before
                    the session if you tested it beforehand.
                  </P>

                  <h3 className="mt-8 font-display text-lg font-semibold text-white">Frameworks &amp; Prompt Library</h3>
                  <P>
                    These two pages are where the room goes afterward, not during — point to them explicitly
                    at the relevant moment (&ldquo;this exact prompt is in the Prompt Library&rsquo;s
                    Framework Application category&rdquo;) so participants know where to find the templates
                    to try themselves later, on their own device, at their own pace.
                  </P>
                </div>
              </FadeIn>

              {/* 10. TROUBLESHOOTING */}
              <FadeIn>
                <div>
                  <H2 id="troubleshooting">10. Troubleshooting &amp; Tips</H2>
                  <ul className="mt-5 space-y-3">
                    {[
                      ["The live AI response is way off from what you expected", "Say so honestly — \"that's not quite what I got when I tested this\" is a fine, real line. Fall back to your saved screenshot from testing if you need to keep pace, and note the variation itself as a teaching point about non-determinism."],
                      ["The public URL feels slow with hundreds of people hitting it at once", "This shouldn't happen on a static deploy, but check your host's dashboard for rate limiting on the free tier and upgrade if needed — fix this before day one, not live."],
                      ["Checklist shows old checkmarks from a previous test run", "Click Reset at the top of the Checklist page before you go live — it only clears that page's saved progress in that browser."],
                      ["Poll response rates look low", "Normal at this scale for a passive pulse-check — say the raw numbers out loud rather than the percentage, and move on regardless of turnout."],
                      ["A participant can't access the public URL afterward", "Have the URL in the pre-read email as a fallback, and confirm it's not a corporate firewall issue — cellular data usually resolves it."],
                      ["Claude is slow or briefly unavailable mid-session", "Have your tested screenshot ready as an immediate fallback so you're never stuck waiting on a live response in front of 700 people."],
                    ].map(([q, a]) => (
                      <li key={q} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                        <p className="flex items-center gap-2 text-sm font-semibold text-white"><Wifi className="h-3.5 w-3.5 text-slate-500" /> {q}</p>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{a}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl border border-sky-400/20 bg-sky-400/[0.05] p-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm leading-relaxed text-slate-200">
                      Want the concepts fresh in your head before you facilitate? The plain-English study guide
                      covers everything you&rsquo;ll be presenting.
                    </p>
                    <Link href="/notes" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-sky-300 px-5 py-2.5 text-sm font-semibold text-[#05070d]">
                      Learn the Concepts <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
