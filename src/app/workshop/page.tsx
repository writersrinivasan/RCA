import type { Metadata } from "next";
import Link from "next/link";
import { Puzzle, ArrowRight, MessagesSquare } from "lucide-react";
import { Container } from "@/components/Container";
import { AuroraBackground } from "@/components/AuroraBackground";
import { FadeIn } from "@/components/FadeIn";
import { Pill } from "@/components/Pill";
import { workshopModules } from "@/lib/content/workshop";

export const metadata: Metadata = {
  title: "Workshop Add-Ons — AI-RCA Academy",
  description: "Two extra modules built from live Day 1 feedback: agent creation beyond prompting, and the full code-to-deploy-to-RCA workflow.",
};

const placement = [
  { session: "Session 2", spot: "Open with Add-On B (The Full Loop) before Module 3", why: "It reframes the whole day — coaching, frameworks, and retrospectives all land better once the room has seen where an incident actually starts." },
  { session: "Session 2 or 3", spot: "Slot Add-On A (Agents) after Module 7", why: "It's a natural 'what's next' after the Prompt Library and playbook — turning a template into something the team doesn't have to re-paste." },
  { session: "Either", spot: "Trim one live-demo round from Module 3 or 6 to make room", why: "Both already run 3-4 demo rounds — cutting to 2-3 recovers roughly 8-10 minutes without losing the core lesson." },
];

export default function WorkshopIndexPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-10 sm:pt-20">
        <AuroraBackground />
        <Container size="wide">
          <FadeIn>
            <Pill tone="amber" icon={<Puzzle className="h-3 w-3" />}>Built From Day 1 Feedback</Pill>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Workshop Add-Ons
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
              Two participants asked for two specific things after Day 1. These modules answer both,
              built separately from the Day 1–3 curriculum so nothing already working has to change —
              slot them into Session 2 or Session 3 wherever they fit.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-16">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {workshopModules.map((m, i) => (
              <FadeIn key={m.slug} delay={i * 0.08}>
                <Link
                  href={`/workshop/${m.slug}`}
                  className="glass-card glass-card-hover group flex h-full flex-col rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between">
                    <Pill tone={i === 0 ? "sky" : "emerald"}>{m.code}</Pill>
                    <span className="text-xs font-medium text-slate-500">{m.duration}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-white">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{m.tagline}</p>
                  <div className="mt-4 flex items-start gap-2 rounded-lg border border-white/10 bg-black/20 p-3">
                    <MessagesSquare className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500" />
                    <p className="text-xs italic leading-relaxed text-slate-400">{m.fromFeedback}</p>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-300">
                    Open module
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-24">
        <Container size="narrow">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Where these fit, given the same total time</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Total remaining time is unchanged — these two add-ons run about 55–65 minutes combined, so
              something else needs to give. Here&rsquo;s the simplest way to make room without losing anything
              essential from Day 2 or Day 3.
            </p>
          </FadeIn>
          <div className="mt-5 space-y-3">
            {placement.map((p) => (
              <FadeIn key={p.spot} delay={0.05}>
                <div className="glass-card rounded-2xl p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Pill tone="slate">{p.session}</Pill>
                    <p className="text-sm font-semibold text-white">{p.spot}</p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.why}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
