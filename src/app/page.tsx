import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Users,
  Route,
  Library,
  BookOpenCheck,
  ListChecks,
  GraduationCap,
  CircleCheckBig,
  TriangleAlert,
  ShieldCheck,
  MessagesSquare,
  Compass,
  Target,
  CalendarClock,
  NotebookPen,
  Presentation,
} from "lucide-react";
import { Container } from "@/components/Container";
import { AuroraBackground } from "@/components/AuroraBackground";
import { FadeIn } from "@/components/FadeIn";
import { Pill } from "@/components/Pill";
import { SectionHeading } from "@/components/SectionHeading";
import { days } from "@/lib/content/days";
import { getModulesForDay } from "@/lib/content/curriculum";
import { promptCategories } from "@/lib/content/prompts";
import { caseStudies } from "@/lib/content/caseStudies";
import { frameworks } from "@/lib/content/frameworks";

const objectives = [
  {
    icon: Compass,
    title: "See where AI genuinely helps — and where it fools you",
    body: "Explain, in plain language, where AI earns trust in RCA and where it creates false confidence.",
  },
  {
    icon: Users,
    title: "Coach your team, not just observe it",
    body: "Enable responsible AI use during troubleshooting without needing to write a single prompt yourself.",
  },
  {
    icon: TriangleAlert,
    title: "Spot the red flags in an AI-assisted write-up",
    body: "Evaluate RCA reports and postmortems for unverified claims, hallucinated causes, and missing evidence.",
  },
  {
    icon: Route,
    title: "Fit AI into the frameworks you already run",
    body: "Integrate AI-assisted RCA into your team's existing frameworks and governance — no technical rework.",
  },
  {
    icon: ShieldCheck,
    title: "Set guardrails that actually get followed",
    body: "Define expectations, guardrails, and escalation triggers for AI use in incident response.",
  },
  {
    icon: MessagesSquare,
    title: "Facilitate, don't operate",
    body: "Lead an AI-augmented retrospective by asking the right questions — not by writing the prompts.",
  },
  {
    icon: Target,
    title: "Choose the right tool for the task",
    body: "Pick, at a leadership level, which AI tool and which data-handling guardrails fit a given task.",
  },
  {
    icon: Sparkles,
    title: "Direct communication, don't draft it",
    body: "Direct AI-assisted incident updates, executive summaries, and postmortems without writing them yourself.",
  },
];

const resourceCards = [
  {
    href: "/notes",
    icon: NotebookPen,
    title: "Learn the Concepts",
    tone: "indigo" as const,
    body: "A plain-English study guide with real-world analogies and flow diagrams for every concept in this course — written for you to read first, before you ever teach it.",
  },
  {
    href: "/facilitator-guide",
    icon: Presentation,
    title: "Facilitator Guide",
    tone: "slate" as const,
    body: "Room setup, a minute-by-minute run of show for all three days, and exactly how to run every interactive moment — the mechanics behind showing this off live.",
  },
  {
    href: "/prompt-library",
    icon: Library,
    title: "Prompt Library",
    tone: "sky" as const,
    body: `${promptCategories.reduce((n, c) => n + c.prompts.length, 0)} ready-to-use prompt templates across ${promptCategories.length} categories — hypothesis generation, timeline reconstruction, evidence validation, documentation, and stakeholder communication.`,
  },
  {
    href: "/case-studies",
    icon: BookOpenCheck,
    title: "Case Studies",
    tone: "amber" as const,
    body: `${caseStudies.length} real-world support incidents, each with a grounded AI write-up and a fluent-but-hallucinated one, side by side — practice spotting the difference.`,
  },
  {
    href: "/frameworks",
    icon: Route,
    title: "RCA Frameworks",
    tone: "indigo" as const,
    body: `${frameworks.length} frameworks — 5 Whys, Fishbone, Fault Tree, Kepner-Tregoe — mapped step by step to exactly where AI assists and where a human sign-off is required.`,
  },
  {
    href: "/checklist",
    icon: ListChecks,
    title: "Governance Checklist",
    tone: "emerald" as const,
    body: "Interactive trust-calibration, data-handling, and communication-review checklists you can run live during any real incident.",
  },
  {
    href: "/glossary",
    icon: GraduationCap,
    title: "Plain-Language Glossary",
    tone: "rose" as const,
    body: "Every tool, platform, and framework named in this course — Splunk, KQL, Fishbone, PII, and more — explained for a non-technical leader.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
        <AuroraBackground />
        <Container size="wide">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <Pill tone="sky" icon={<Sparkles className="h-3 w-3" />}>
                A 3-Day Virtual Leadership Intensive · 700+ Participants · 70% Hands-On
              </Pill>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="mt-6 text-balance font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
                AI-Assisted Problem Solving{" "}
                <span className="gradient-text">&amp; Root Cause Analysis</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.16}>
              <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-slate-400">
                For support team leads, supervisors, and managers who oversee technical support
                or service desk teams — no coding, log analysis, or prompt-writing background required.
                Delivered live and virtual to 700+ participants at once, with roughly 70% of every
                session spent watching real AI prompts run live and unscripted, not listening to slides.
              </p>
            </FadeIn>
            <FadeIn delay={0.24}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/notes"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-sky-300 px-6 py-3 text-sm font-semibold text-[#05070d] shadow-lg shadow-sky-500/25 transition-transform hover:scale-[1.03]"
                >
                  Learn the Concepts First
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/day/1"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.08]"
                >
                  Start Day 1
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.32}>
              <dl className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
                {[
                  ["3", "Days"],
                  ["6", "Hours total"],
                  ["70%", "Hands-on"],
                  ["700+", "Participants"],
                ].map(([n, label]) => (
                  <div key={label} className="glass-card rounded-2xl px-4 py-5">
                    <dt className="font-display text-3xl font-bold text-white">{n}</dt>
                    <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{label}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* WHO / FORMAT STRIP */}
      <section className="border-y border-white/[0.06] bg-white/[0.015] py-10">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Prerequisites</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Familiarity with your team&rsquo;s incident/ticketing process and basic conversational
                experience with an AI assistant. No technical setup needed.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Format</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Live and virtual to 700+ participants at once. Roughly 70% of every module is a live,
                unscripted AI prompt run on screen and explained in real time — with short framing talks
                covering the rest. No breakout rooms, no crowd Q&amp;A, no hands-on coding or log-analysis
                labs; AI tools and observability queries are covered at a recognize-and-direct level.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Tools referenced</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Claude / ChatGPT / Copilot / Cursor (conversational, side-by-side comparison only), plus
                Splunk, Datadog, ELK/Kibana, and KQL referenced conceptually. Delivered over your video
                platform of choice, with this app open on every participant&rsquo;s own device.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* LEARNING OBJECTIVES */}
      <section className="py-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="By the end of day three"
            title="What you'll walk away able to do"
            description="These are course-level outcomes — the thread that connects all three days back to the job you actually have to do on Monday morning."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {objectives.map((o, i) => (
              <FadeIn key={o.title} delay={(i % 4) * 0.06}>
                <div className="glass-card glass-card-hover h-full rounded-2xl p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-400/10 text-sky-300">
                    <o.icon className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="mt-4 font-display text-sm font-semibold leading-snug text-white">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{o.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* THREE DAY JOURNEY */}
      <section className="py-8 pb-24">
        <Container size="wide">
          <SectionHeading
            eyebrow="Your three-day arc"
            title="See it. Lead it. Own it."
            description="Each day builds on the last — a mental model on Day 1, leadership practice on Day 2, and artifacts you take back to your team on Day 3."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {days.map((d, i) => {
              const dayModules = getModulesForDay(d.day);
              return (
                <FadeIn key={d.day} delay={i * 0.1}>
                  <Link
                    href={`/day/${d.day}`}
                    className="glass-card glass-card-hover group flex h-full flex-col rounded-2xl p-6"
                  >
                    <div className="flex items-center justify-between">
                      <Pill tone={i === 0 ? "sky" : i === 1 ? "amber" : "emerald"}>
                        Day {d.day}
                      </Pill>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <CalendarClock className="h-3.5 w-3.5" />
                        {d.timeBudget}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold text-white">{d.title}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-400">{d.subtitle}</p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
                      {d.narrative}
                    </p>
                    <ul className="mt-6 space-y-2 border-t border-white/[0.06] pt-5">
                      {dayModules.map((m) => (
                        <li key={m.slug} className="flex items-start gap-2 text-xs text-slate-400">
                          <CircleCheckBig className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-600" />
                          <span><span className="text-slate-500">{m.code}</span> · {m.title}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-300">
                      Enter Day {d.day}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* RESOURCE HUB */}
      <section className="py-8 pb-28">
        <Container size="wide">
          <SectionHeading
            eyebrow="Facilitator resource hub"
            title="Everything you need to showcase this live"
            description="Built for teaching from a laptop or a projector: real prompt templates, real incident write-ups, and interactive checklists — not just slides."
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resourceCards.map((r, i) => (
              <FadeIn key={r.href} delay={(i % 3) * 0.08}>
                <Link href={r.href} className="glass-card glass-card-hover group flex h-full flex-col rounded-2xl p-6">
                  <Pill tone={r.tone} icon={<r.icon className="h-3 w-3" />}>{r.title}</Pill>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">{r.body}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                    Open resource
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
