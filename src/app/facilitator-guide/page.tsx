import type { Metadata } from "next";
import Link from "next/link";
import {
  Presentation,
  ArrowRight,
  Wifi,
  Users2,
  RotateCcw,
  Globe,
  Gauge,
} from "lucide-react";
import { Container } from "@/components/Container";
import { AuroraBackground } from "@/components/AuroraBackground";
import { FadeIn } from "@/components/FadeIn";
import { Pill } from "@/components/Pill";
import { Callout } from "@/components/notes/Callout";
import { RunOfShowTable } from "@/components/notes/RunOfShowTable";

export const metadata: Metadata = {
  title: "Facilitator Guide — AI-RCA Academy",
  description: "How to run this training live and virtual for 700+ participants — deployment, breakout-room strategy, and a minute-by-minute, 70% hands-on run of show for all three days.",
};

const toc = [
  { id: "at-scale", label: "1. Running this virtually at scale" },
  { id: "deployment", label: "2. Get the app onto a public URL" },
  { id: "breakout-strategy", label: "3. Breakout rooms for 700 people" },
  { id: "tech-setup", label: "4. Platform & tech checklist" },
  { id: "what-hands-on-means", label: "5. What 70% hands-on means here" },
  { id: "day-1", label: "6. Day 1 run of show" },
  { id: "day-2", label: "7. Day 2 run of show" },
  { id: "day-3", label: "8. Day 3 run of show" },
  { id: "components", label: "9. Running each interactive piece" },
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
  { time: "9:00 – 9:10", segment: "Welcome, Context Setting & Baseline Poll", page: "Home", href: "/", doThis: "Share your screen on the homepage hero. Run the baseline poll on your platform: \"how is your team already using AI in troubleshooting today?\" Screenshot the results — you'll reference them later." },
  { time: "9:10 – 9:25", segment: "Module 1 — Framing (theory)", page: "Day 1 / Module 1", href: "/day/1/why-ai-changes-rca", doThis: "Tight 15-minute talk: the confident-wrong-answer problem and the AI-tools field guide. Don't linger — the hands-on block is where this lands." },
  { time: "9:25 – 10:00", segment: "Module 1 — Hands-On: Field-Guide Match + Trust-Story Exchange", page: "Day 1 / Module 1", href: "/day/1/why-ai-changes-rca", doThis: "Individual quiz (5 min) → live poll (5 min) → breakout rooms of 6–7 (20 min) sharing a real trust-story → 3 rooms report back in chat (5 min). Auto-assign rooms; post the quiz and prompt in chat first." },
  { time: "10:00 – 10:12", segment: "Module 2 — Framing (theory)", page: "Day 1 / Module 2", href: "/day/1/what-good-looks-like", doThis: "The three-question evaluation pass, tight: what evidence, what else was ruled out, what would prove it wrong." },
  { time: "10:12 – 10:40", segment: "Module 2 — Hands-On: Vote, Then Reveal", page: "Case Study: Checkout Failure", href: "/case-studies/checkout-failure", doThis: "Everyone opens the case on their own device (5 min) → poll A/B (3 min) → breakout rooms of 6–7 apply the three questions and reveal together (12 min) → post-reveal poll + chat share-out (8 min)." },
  { time: "10:40 – 10:48", segment: "Module 2B — Framing (theory)", page: "Day 1 / Module 2B", href: "/day/1/reading-ai-evidence", doThis: "60-second refresher: query results are only as good as the time window they searched." },
  { time: "10:48 – 11:05", segment: "Module 2B — Hands-On: Spot the Wrong Time Window", page: "Case Study: API Latency Spike", href: "/case-studies/api-latency-spike", doThis: "Reuse Module 2's breakout rooms — no re-shuffling. Individual read (4 min) → breakout reveal + discuss (8 min) → chat share-out (5 min)." },
];

const day2Rows = [
  { time: "9:00 – 9:13", segment: "Module 3 — Framing (theory)", page: "Day 2 / Module 3", href: "/day/2/coaching-your-team", doThis: "Name the three anti-patterns (prompt-and-paste, anchoring, skipping validation under deadline) fast — the role-play is where the room actually learns this." },
  { time: "9:13 – 9:45", segment: "Module 3 — Hands-On: Role-Play in Pairs", page: "Day 2 / Module 3", href: "/day/2/coaching-your-team", doThis: "Pair/triad breakout rooms (2–3 people). Round 1 (10 min) + harder round 2 (10 min), post both scenario prompts in chat first. Debrief poll + chat share (10 min)." },
  { time: "9:45 – 9:58", segment: "Module 4 — Framing (theory)", page: "Frameworks", href: "/frameworks", doThis: "Quick tour of all four Frameworks tabs on a shared screen so every room starts from the same mental model." },
  { time: "9:58 – 10:30", segment: "Module 4 — Hands-On: Map Your Own Incident", page: "Frameworks", href: "/frameworks", doThis: "Individual (3 min) picks a real incident type → individual (5 min) re-skims Frameworks → breakout rooms of 6–7 (15 min) map it → poll + chat share (9 min). Reuse Module 3's rooms if your platform allows resizing." },
  { time: "10:30 – 10:39", segment: "Module 5 — Framing (theory)", page: "Day 2 / Module 5", href: "/day/2/leading-retrospective", doThis: "One idea: evidence before hypothesis, every time, even when the AI's hypothesis showed up first." },
  { time: "10:39 – 11:00", segment: "Module 5 — Hands-On: Facilitate the Retrospective", page: "Case Study: CRM Sync Lag", href: "/case-studies/sync-lag", doThis: "Breakout rooms of 6–7, each picks a facilitator-in-training. Open with the raw signals, not the write-ups (12 min), then a quick peer-feedback round (7 min)." },
];

const day3Rows = [
  { time: "9:00 – 9:09", segment: "Module 5B — Framing (theory)", page: "Day 3 / Module 5B", href: "/day/3/incident-communication", doThis: "The three-check pass in 9 minutes: accuracy, hedging, audience fit — and the one line that overpromises without anyone intending it." },
  { time: "9:09 – 9:30", segment: "Module 5B — Hands-On: Edit Before You Send", page: "Prompt Library", href: "/prompt-library", doThis: "Everyone runs a real prompt in their own AI tool (6 min) → breakout rooms of 6–7 compare drafts and run the three-check pass (10 min) → chat share of the riskiest phrase found (5 min)." },
  { time: "9:30 – 9:43", segment: "Module 6 — Framing (theory)", page: "Day 3 / Module 6", href: "/day/3/governance-risk-privacy", doThis: "Two separate questions, stated plainly: should I trust this conclusion, and should this data even be in this tool." },
  { time: "9:43 – 10:15", segment: "Module 6 — Hands-On: Run the Checklist Against the Flaw", page: "Checklist", href: "/checklist", doThis: "Everyone opens Checklist (4 min) → breakout rooms of 6–7 debrief Module 5's case against Trust-Calibration and Data-Handling items live (16 min) → sanitization pass (7 min) → poll (5 min)." },
  { time: "10:15 – 10:24", segment: "Module 7 — Framing (theory)", page: "Day 3 / Module 7", href: "/day/3/playbook-prompt-library", doThis: "Anatomy of a three-line playbook entry — that's the whole framing, the rest is drafting time." },
  { time: "10:24 – 10:45", segment: "Module 7 — Hands-On: Draft Your Playbook Entry", page: "Prompt Library", href: "/prompt-library", doThis: "Individual drafting (8 min) → short breakout feedback rooms of 6–7 (8 min) → individual template selection (5 min)." },
  { time: "10:45 – 11:00", segment: "Capstone: Synthesis & Action Planning", page: "Learn the Concepts (Cheat Sheet)", href: "/notes#cheat-sheet", doThis: "Share the one-page cheat sheet. Ask everyone to post their one commitment in chat at the same time on your cue — scroll and read a sample aloud before closing." },
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
              of 700+ people who are all joining remotely, how to structure breakout rooms that don&rsquo;t
              need a facilitator in every one, and exactly what to click and when across a training that&rsquo;s
              now roughly 70% hands-on and 30% theory.
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
                    that changes more than the video link. Three things are different now, and the rest of
                    this guide is built around them:
                  </P>
                  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="glass-card rounded-2xl p-5">
                      <p className="flex items-center gap-2 text-sm font-semibold text-white">
                        <Globe className="h-4 w-4 text-sky-300" /> The app needs a public URL
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-slate-400">
                        The old &ldquo;same-Wi-Fi&rdquo; trick only works in one room. 700 remote people need
                        a real internet address — see Section 2.
                      </p>
                    </div>
                    <div className="glass-card rounded-2xl p-5">
                      <p className="flex items-center gap-2 text-sm font-semibold text-white">
                        <Users2 className="h-4 w-4 text-amber-300" /> Facilitation happens in parallel
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-slate-400">
                        You can&rsquo;t visit 100+ breakout rooms. Every activity below is written as
                        self-contained instructions a room can run without you in it — see Section 3.
                      </p>
                    </div>
                    <div className="glass-card rounded-2xl p-5">
                      <p className="flex items-center gap-2 text-sm font-semibold text-white">
                        <Gauge className="h-4 w-4 text-emerald-300" /> 70% of the time is now hands-on
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-slate-400">
                        Every module below is restructured as a short framing talk plus a much longer
                        structured exercise — see Section 5 and the day-by-day run of show.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* 2. DEPLOYMENT */}
              <FadeIn>
                <div>
                  <H2 id="deployment">2. Get the App Onto a Public URL</H2>
                  <P>
                    This is the one step that&rsquo;s non-negotiable for virtual delivery at this scale.
                    Running <code className="rounded bg-black/30 px-1.5 py-0.5 font-mono text-xs text-sky-200">npm run dev</code> on
                    your laptop only reaches your laptop, or devices on your exact Wi-Fi network — neither
                    helps 700 people joining from home, from offices, and from other countries. The app needs
                    to be deployed to a real hosting service before day one.
                  </P>
                  <Callout type="example" title="The good news: this app is almost entirely static">
                    Nearly every page in this app was pre-rendered at build time (you&rsquo;ll see this as{" "}
                    <code className="rounded bg-black/30 px-1.5 py-0.5 font-mono text-xs text-sky-200">○ Static</code> /{" "}
                    <code className="rounded bg-black/30 px-1.5 py-0.5 font-mono text-xs text-sky-200">● SSG</code> in
                    the build output). There&rsquo;s no database and no server-side logic beyond serving
                    pages, so 700 concurrent visitors is a trivial load for any modern host — even a free
                    tier handles this comfortably.
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
                    Netlify and Cloudflare Pages work identically well if your organization already standardizes
                    on one of those — the app has no Vercel-specific dependency. Whichever you choose, treat
                    the deployment step as part of pre-production, done days before the first session, not
                    something to improvise the morning of.
                  </P>
                </div>
              </FadeIn>

              {/* 3. BREAKOUT STRATEGY */}
              <FadeIn>
                <div>
                  <H2 id="breakout-strategy">3. Breakout Rooms for 700 People</H2>
                  <P>
                    Every hands-on activity in this course now runs in breakout rooms sized for the specific
                    exercise — small for role-play, a little larger for discussion. The mechanics that make
                    this work at 700-person scale:
                  </P>
                  <ul className="mt-5 space-y-3">
                    {[
                      ["Use auto-assign, not manual", "Manually sorting 700 people into rooms isn't feasible. Let your platform assign randomly — the variety is a feature, not a bug, for this kind of peer discussion."],
                      ["Check your platform's room cap before day one", "Zoom's higher-tier plans support up to 200 breakout rooms; other platforms vary. At 6–7 people per room, 700 attendees need roughly 100–115 rooms — confirm your plan supports that before the session, and fall back to slightly larger groups (9–10) if it doesn't."],
                      ["Post instructions before opening rooms", "You can't re-explain verbally in every room. Every activity's steps are written to stand alone in chat or a pinned doc — paste them before you open breakouts, not after."],
                      ["Use broadcast messages for timing", "Every major platform can push a message into all open rooms at once (\"2 minutes left\"). Use it instead of hoping rooms self-time."],
                      ["Consider co-facilitators as room-hoppers", "One person can't spot-check 100+ rooms. If you have producers or co-facilitators available, have them drop into a handful of rooms each round to sense energy and answer questions — not to run the room."],
                    ].map(([title, body]) => (
                      <li key={title} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                        <p className="text-sm font-semibold text-white">{title}</p>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{body}</p>
                      </li>
                    ))}
                  </ul>
                  <Callout type="analogy" title="Show of hands doesn't scale — polls and chat do">
                    Every place the original design said &ldquo;ask for a show of hands&rdquo; now means a
                    live poll (built into Zoom/Teams/Webex, or a tool like Slido/Mentimeter). Every place it
                    said &ldquo;open the floor for discussion&rdquo; now means a chat prompt you scan for
                    patterns, plus 2–3 randomly-called rooms who unmute to share. Neither loses the
                    interaction — they just make it work at 700-person scale instead of 20.
                  </Callout>
                </div>
              </FadeIn>

              {/* 4. TECH SETUP */}
              <FadeIn>
                <div>
                  <H2 id="tech-setup">4. Platform &amp; Tech Checklist</H2>
                  <ul className="mt-5 space-y-3">
                    {[
                      "App deployed to a public URL (Section 2) and tested from outside your own network, at least 24 hours before the first session.",
                      "Video platform confirmed to support your target breakout room count and size (Section 3) — check this against your actual license tier, not just the marketing page.",
                      "Live polling tool ready and tested — native platform polls are simplest; Slido/Mentimeter add nicer visuals if you already use one.",
                      "A pinned chat message or shared doc link ready for each day, containing that day's app URL and any per-activity instructions, so latecomers can self-orient.",
                      "Recording enabled if this session needs to be available afterward — 700 people across time zones means not everyone will make the live slot.",
                      "A co-facilitator or producer to monitor chat and technical issues while you're presenting — at this scale, you can't run slides and moderate chat alone.",
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
                    labs</strong> — hands-on doesn&rsquo;t mean technical. Every module is now built as a
                    short framing talk (roughly 30% of its time) followed by a structured exercise (roughly
                    70%) that participants run themselves, individually and in breakout rooms:
                  </P>
                  <ol className="mt-5 space-y-3">
                    {[
                      ["Vote before you peek", "Read a real write-up, commit to a sign-off decision via poll, then reveal the answer in a breakout room — Case Studies."],
                      ["Practice the real conversation", "Paired role-play under time pressure, not a discussion about role-play — Module 3."],
                      ["Check it live", "Run governance checks against a real planted scenario as a breakout group — Checklist."],
                      ["Try it yourself", "Copy a real prompt into your own AI chat during the session and compare what comes back — Prompt Library."],
                      ["Map your own incident", "Pick a framework and place your team's real recurring incident onto it — Frameworks."],
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
                  <Callout type="example" title="This split shows up on every module page">
                    Every module in Day 1–3 now displays a theory/hands-on time bar with exact minutes, plus
                    the activity&rsquo;s format, duration, group size, and virtual-delivery notes — pulled straight
                    from the run-of-show tables below.
                  </Callout>
                </div>
              </FadeIn>

              {/* DAY 1 */}
              <FadeIn>
                <div>
                  <H2 id="day-1">6. Day 1 Run of Show</H2>
                  <P>
                    Times assume a 9:00 AM start — shift the whole column if your session starts later. Each
                    module is split into its Framing block (theory) and Hands-On block, matching the time
                    split shown on that module&rsquo;s page.
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
                  <H2 id="components">9. Running Each Interactive Piece</H2>

                  <h3 className="mt-8 font-display text-lg font-semibold text-white">Case Study Reveal</h3>
                  <P>
                    Open any case under <Link href="/case-studies" className="text-sky-300 underline underline-offset-2 hover:text-sky-200">Case Studies</Link>.
                    Every participant reads both write-ups on their own device before anyone reveals anything
                    — the exercise only works if the room commits to an answer first. Run a live poll for A
                    or B, send rooms to discuss and click Reveal together, then poll again afterward to show
                    how the vote shifted. Walk the three tell-tales on a shared screen afterward; that&rsquo;s
                    where the real learning happens, not the reveal itself.
                  </P>

                  <h3 className="mt-8 font-display text-lg font-semibold text-white">Checklist</h3>
                  <P>
                    Open <Link href="/checklist" className="text-sky-300 underline underline-offset-2 hover:text-sky-200">Checklist</Link>.
                    Each participant&rsquo;s progress saves only in their own browser — at 700-person scale that&rsquo;s
                    an advantage, since everyone keeps an independent running checklist with no risk of one
                    person&rsquo;s clicks affecting anyone else&rsquo;s. If you&rsquo;re demoing on a shared facilitator screen
                    between cohorts, click <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-white"><RotateCcw className="h-3 w-3" /> Reset</span> first.
                  </P>

                  <h3 className="mt-8 font-display text-lg font-semibold text-white">Frameworks Tabs</h3>
                  <P>
                    Open <Link href="/frameworks" className="text-sky-300 underline underline-offset-2 hover:text-sky-200">Frameworks</Link> and
                    click through all four on a shared screen during framing. During the hands-on block, every
                    breakout room opens the same page independently on their own devices — no shared screen
                    needed inside the room itself, which is exactly what lets 100+ rooms run this in parallel.
                  </P>

                  <h3 className="mt-8 font-display text-lg font-semibold text-white">Prompt Library</h3>
                  <P>
                    Open <Link href="/prompt-library" className="text-sky-300 underline underline-offset-2 hover:text-sky-200">Prompt Library</Link> —
                    the one page every participant should have open on their own device with their own AI
                    account, not shared. Have them search for a category, expand a card, hit Copy, and paste
                    it into whatever AI assistant they already use. The point isn&rsquo;t watching a demo —
                    it&rsquo;s that all 700 people leave having actually run one of these themselves. The
                    day-wise agenda cards at the top of that page also make good breakout-room instructions:
                    point each room at the day&rsquo;s relevant category directly.
                  </P>

                  <h3 className="mt-8 font-display text-lg font-semibold text-white">Polls &amp; Chat</h3>
                  <P>
                    These replace every in-person &ldquo;show of hands&rdquo; and &ldquo;open floor&rdquo;
                    moment from the original design. Keep poll questions binary or single-select so results
                    render instantly at scale. For chat share-outs, ask for one short phrase per room rather
                    than open-ended paragraphs — you&rsquo;re scanning for patterns across hundreds of responses,
                    not reading each one aloud.
                  </P>
                </div>
              </FadeIn>

              {/* 10. TROUBLESHOOTING */}
              <FadeIn>
                <div>
                  <H2 id="troubleshooting">10. Troubleshooting &amp; Tips</H2>
                  <ul className="mt-5 space-y-3">
                    {[
                      ["The public URL feels slow with hundreds of people hitting it at once", "This shouldn't happen on a static Next.js deploy, but if it does, check your host's dashboard for rate limiting on the free tier and upgrade if needed — this is inexpensive to fix well before day one, not something to discover live."],
                      ["A breakout room exceeds your platform's room-count limit", "Increase group size (e.g., 6–7 → 9–10) rather than exceeding the room cap — fewer, slightly larger rooms is a better trade-off than the session failing to open breakouts at all."],
                      ["Checklist shows old checkmarks from a previous demo", "Click Reset at the top of the Checklist page — it only clears that page's saved progress in that browser, nothing else, and doesn't affect any participant's own device."],
                      ["Polls show low response rates", "Normal at this scale — treat a 15–20% response rate as directionally useful, not as a precise vote. Say the raw numbers out loud rather than the percentage so the room can calibrate for itself."],
                      ["A participant can't access the public URL", "Confirm it's not a corporate firewall issue on their end — ask them to try cellular data. Have the URL and a one-line description of the app ready in the pre-read email as a fallback so this is rarely a live-session problem."],
                      ["You want a quiet backup in case the live demo breaks", "Screenshot the case studies and prompt templates you're using that day beforehand — the app has no server-side dependency to fail, but a broken screen-share is still a broken screen-share."],
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
