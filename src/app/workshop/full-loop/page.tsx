import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  GitBranch,
  ListChecks,
  MessagesSquare,
  Quote,
  Sparkles,
  Terminal,
} from "lucide-react";
import { Container } from "@/components/Container";
import { AuroraBackground } from "@/components/AuroraBackground";
import { FadeIn } from "@/components/FadeIn";
import { Pill } from "@/components/Pill";
import { Callout } from "@/components/notes/Callout";
import { CopyButton } from "@/components/CopyButton";
import { FlowDiagram } from "@/components/notes/FlowDiagram";
import { PipelineStages } from "@/components/notes/PipelineStages";
import { getWorkshopModule } from "@/lib/content/workshop";

export const metadata: Metadata = {
  title: "The Full Loop — AI-RCA Academy",
  description: "Code, GitHub, Vercel, production, and back to RCA — the full pipeline this training app itself was shipped through, and where root causes actually hide.",
};

const correlatePrompt = `Here's a deploy history: commit "increase payment timeout threshold" merged and deployed at 02:09 AM. Here's when the incident started: checkout errors spiking at 02:11 AM.

Correlate these and tell me, in plain language: is this deploy a likely contributing factor, and what specifically in that change should be checked first? Do not claim it caused the incident — state only that it's temporally correlated and name the specific check that would confirm or rule it out.`;

export default function FullLoopWorkshopPage() {
  const mod = getWorkshopModule("full-loop")!;

  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-6 sm:pt-20">
        <AuroraBackground />
        <Container size="narrow">
          <FadeIn>
            <Link href="/workshop" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300">
              <ArrowLeft className="h-3.5 w-3.5" /> Workshop Add-Ons
            </Link>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <Pill tone="emerald">{mod.code}</Pill>
              <span className="flex items-center gap-1 text-xs text-slate-500">
                <Clock3 className="h-3 w-3" /> {mod.duration}
              </span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {mod.title}
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-slate-400">{mod.tagline}</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-amber-400/20 bg-amber-400/[0.05] p-4">
              <MessagesSquare className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
              <p className="text-sm leading-relaxed text-amber-100/80">
                <span className="font-semibold text-amber-300">From Day 1 feedback: </span>{mod.fromFeedback}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="glass-card mt-6 rounded-2xl p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <ListChecks className="h-3.5 w-3.5" /> Learning objectives
              </p>
              <ul className="mt-4 space-y-2.5">
                {mod.objectives.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="mt-8 text-base leading-relaxed text-slate-300">{mod.intro}</p>
          </FadeIn>
        </Container>
      </section>

      {/* THE LOOP */}
      <section className="py-10">
        <Container size="narrow">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-white">The Full Loop</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              This is a loop, not a line — the fix an RCA produces goes back through the same pipeline it
              came from.
            </p>
            <FlowDiagram
              steps={[
                { title: "Code written", detail: "a developer makes a change locally", tone: "sky" },
                { title: "Pushed to GitHub", detail: "a commit, a pull request, a review", tone: "slate" },
                { title: "Vercel builds & deploys", detail: "usually live within a minute or two", tone: "amber" },
                { title: "Runs in production", detail: "real users, real traffic", tone: "slate" },
                { title: "Incident — something breaks", tone: "rose" },
                { title: "RCA traces back through the pipeline", tone: "emerald" },
              ]}
              loopBack={{
                fromIndex: 5,
                toIndex: 0,
                label: "Once the fix is identified, it goes back through Code → GitHub → Deploy again — the loop closes, it doesn't end.",
              }}
            />
          </FadeIn>
        </Container>
      </section>

      {/* LIVE WALKTHROUGH USING THIS APP */}
      <section className="py-10">
        <Container size="narrow">
          <FadeIn>
            <div className="rounded-2xl border border-sky-400/20 bg-sky-400/[0.04] p-6 sm:p-7">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-400/15 text-sky-300">
                  <GitBranch className="h-4 w-4" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">Live Walkthrough — Use This App as the Example</p>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">The Pipeline That Shipped This Training App</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Narrate this live, on screen — the room is already using the result, which makes it land
                harder than a hypothetical.
              </p>
              <ol className="mt-5 space-y-3">
                {[
                  "\"I wrote this app's code in Next.js, on my own laptop.\"",
                  "\"I pushed it to a GitHub repository — github.com/writersrinivasan/RCA. Every change is a 'commit,' timestamped, with a message describing what changed. It's a permanent record, like a flight recorder for code.\" (Open the repo's commit history on screen.)",
                  "\"Vercel is connected to that repository. Every time I push a change to the main branch, Vercel automatically builds a new version and deploys it live — usually within a minute or two.\" (Open the Vercel deployments dashboard on screen.)",
                  "\"Now imagine something breaks right after a deploy — a page starts erroring for everyone. Where would you even start looking?\" Pause here — this is the pivot into the next section.",
                ].map((s, i) => (
                  <li key={s} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold text-white">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* FOUR PLACES */}
      <section className="py-10">
        <Container size="narrow">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-white">The Four Places a Bug Can Hide</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              A production incident&rsquo;s root cause can live at any one of these stages — not just wherever the
              alert fired.
            </p>
            <PipelineStages />
          </FadeIn>
        </Container>
      </section>

      {/* TRACING IT BACK */}
      <section className="py-10">
        <Container size="narrow">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-white">Tracing It Back — Live Demo</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              This is the Timeline Reconstruction skill from Day 2&rsquo;s Correlate Timeline Against Recent
              Changes prompt, applied one level up the stack — to the deploy pipeline itself, not just the
              application logs.
            </p>
            <ol className="mt-5 space-y-2.5">
              {[
                "Check the deploy log first — did the last deploy succeed cleanly, and what time did it go live? Correlate that against when the incident actually started.",
                "Check the GitHub commit history for that deploy — what code actually changed? Read the diff, don't guess from the commit message alone.",
                "Check whether the build succeeded fully, or completed with warnings that got ignored.",
                "Check production logs or error tracking for the actual runtime error — this confirms or rules out the deploy as the cause.",
              ].map((s, i) => (
                <li key={s} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold text-white">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>

            <div className="mt-5 rounded-xl border border-white/10 bg-black/25 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  <Terminal className="h-3.5 w-3.5" /> Paste into Claude, live
                </p>
                <CopyButton text={correlatePrompt} />
              </div>
              <pre className="mt-3 whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-slate-300">{correlatePrompt}</pre>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* CALLBACK TO CHECKOUT FAILURE */}
      <section className="py-10">
        <Container size="narrow">
          <FadeIn>
            <Callout type="example" title="You've already seen this exact pattern">
              The Checkout Failure case study from Day 1 <em>was</em> a deploy-stage incident — config change
              #5521 was a deploy, deployed at 02:09 AM, two minutes before checkout errors began. Everything
              this course already taught about correlating a timeline against recent changes was, from the
              start, secretly teaching pipeline-stage thinking. This module just makes that explicit and
              shows the GitHub/Vercel side of it directly.
            </Callout>
          </FadeIn>
        </Container>
      </section>

      {/* GOVERNANCE TIE-IN */}
      <section className="py-10">
        <Container size="narrow">
          <FadeIn>
            <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
                <GitBranch className="h-3.5 w-3.5" /> One governance wrinkle worth naming
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                When a root cause lives in the deploy pipeline itself, the fix isn&rsquo;t just &ldquo;patch the
                code&rdquo; — it&rsquo;s often a process change to the pipeline: an added CI check, a required
                second reviewer for config changes, or a temporary deploy freeze on a fragile area. That&rsquo;s
                a different kind of sign-off than Day 3&rsquo;s escalation triggers cover, and worth adding to
                your own team&rsquo;s playbook entry when it applies.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* KEY TAKEAWAY */}
      <section className="py-10">
        <Container size="narrow">
          <FadeIn>
            <div className="relative rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 sm:p-8">
              <Quote className="h-6 w-6 text-slate-600" />
              <p className="mt-3 font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
                &ldquo;Root cause&rdquo; isn&rsquo;t a place — it&rsquo;s a stage. RCA&rsquo;s first job is
                figuring out which one, before investigating any further.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-20 pt-6">
        <Container size="narrow">
          <div className="flex items-center justify-between border-t border-white/[0.06] pt-8">
            <Link href="/workshop/agents" className="text-sm font-medium text-slate-400 hover:text-white">
              <ArrowLeft className="mr-1 inline h-4 w-4" /> Add-On A: Agents
            </Link>
            <Link href="/workshop" className="text-sm font-medium text-slate-400 hover:text-white">
              Workshop Add-Ons <ArrowRight className="ml-1 inline h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
