import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  Layers,
  ListChecks,
  TriangleAlert,
  Quote,
  CircleCheckBig,
  MonitorPlay,
  Terminal,
  Vote,
  Wifi,
  Timer,
} from "lucide-react";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Pill } from "@/components/Pill";
import { TimeSplitBar } from "@/components/TimeSplitBar";
import { CopyButton } from "@/components/CopyButton";
import { modules, getModule, getAdjacentModules } from "@/lib/content/curriculum";
import { getDay } from "@/lib/content/days";

const tones = ["sky", "amber", "emerald"] as const;

export function generateStaticParams() {
  return modules.map((m) => ({ day: String(m.day), moduleSlug: m.slug }));
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ day: string; moduleSlug: string }>;
}) {
  const { day: dayParam, moduleSlug } = await params;
  const mod = getModule(moduleSlug);
  if (!mod || mod.day !== Number(dayParam)) notFound();

  const day = getDay(mod.day)!;
  const tone = tones[mod.day - 1];
  const { prev, next } = getAdjacentModules(mod.slug);

  return (
    <>
      <section className="pt-12 pb-6">
        <Container size="narrow">
          <FadeIn>
            <Link
              href={`/day/${mod.day}`}
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Day {mod.day}: {day.title}
            </Link>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <Pill tone={tone}>{mod.code}</Pill>
              <span className="flex items-center gap-1 text-xs text-slate-500">
                <Clock3 className="h-3 w-3" /> {mod.duration} live
                <span className="text-slate-700">·</span>
                <span className="text-slate-600">{mod.originalDuration} original design</span>
              </span>
              <Pill tone="slate">{mod.format}</Pill>
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {mod.title}
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-slate-400">{mod.tagline}</p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="glass-card mt-8 rounded-2xl p-5">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <Timer className="h-3.5 w-3.5" /> This module&rsquo;s time split
              </p>
              <div className="mt-3">
                <TimeSplitBar split={mod.timeSplit} />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="glass-card mt-4 rounded-2xl p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <ListChecks className="h-3.5 w-3.5" /> Learning objectives
              </p>
              <ul className="mt-4 space-y-2.5">
                {mod.objectives.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300">
                    <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
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

      {/* TOPICS */}
      <section className="py-10">
        <Container size="narrow">
          <FadeIn>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <Layers className="h-3.5 w-3.5" /> Topics covered
            </p>
          </FadeIn>
          <div className="mt-5 space-y-4">
            {mod.topics.map((t, i) => (
              <FadeIn key={t.title} delay={i * 0.05}>
                <div className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6">
                  <h3 className="font-display text-base font-semibold text-white">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{t.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ACTIVITY */}
      <section className="py-10">
        <Container size="narrow">
          <FadeIn>
            <div className="rounded-2xl border border-sky-400/20 bg-sky-400/[0.04] p-6 sm:p-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-400/15 text-sky-300">
                  <MonitorPlay className="h-4 w-4" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">Live facilitator demo</p>
                <span className="ml-auto flex flex-wrap items-center gap-2">
                  <Pill tone="amber" icon={<Clock3 className="h-3 w-3" />}>{mod.activity.duration} · {mod.activity.demos.length} demos</Pill>
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{mod.activity.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{mod.activity.description}</p>

              <div className="mt-6 space-y-5">
                {mod.activity.demos.map((d, i) => (
                  <div key={d.label} className="rounded-xl border border-white/10 bg-black/20 p-4 sm:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="flex items-center gap-2 text-sm font-semibold text-white">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-400/20 text-[11px] font-bold text-sky-300">
                          {i + 1}
                        </span>
                        {d.label}
                      </p>
                      <Pill tone="slate" icon={<Clock3 className="h-3 w-3" />}>{d.minutes} min</Pill>
                    </div>
                    <p className="mt-2.5 text-xs leading-relaxed text-slate-400">
                      <span className="font-semibold text-slate-300">Say this: </span>
                      {d.setup}
                    </p>

                    <div className="mt-3 rounded-lg border border-white/10 bg-black/30 p-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                          <Terminal className="h-3 w-3" /> Paste into Claude, live
                        </p>
                        <CopyButton text={d.prompt} />
                      </div>
                      <pre className="mt-2.5 whitespace-pre-wrap font-mono text-[12.5px] leading-relaxed text-slate-300">
{d.prompt}
                      </pre>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-emerald-100/80">
                      <span className="font-semibold text-emerald-300">Point out: </span>
                      {d.pointOut}
                    </p>
                  </div>
                ))}
              </div>

              {mod.activity.engagement && (
                <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-amber-400/15 bg-amber-400/[0.04] p-4">
                  <Vote className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                  <p className="text-xs leading-relaxed text-amber-100/80">
                    <span className="font-semibold text-amber-300">Optional pulse-check: </span>
                    {mod.activity.engagement}
                  </p>
                </div>
              )}

              <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-white/10 bg-black/20 p-4">
                <Wifi className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                <p className="text-xs leading-relaxed text-slate-400">
                  <span className="font-semibold text-slate-300">Why this scales: </span>
                  {mod.activity.virtualNotes}
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* MISCONCEPTIONS */}
      {mod.misconceptions.length > 0 && (
        <section className="py-10">
          <Container size="narrow">
            <FadeIn>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <TriangleAlert className="h-3.5 w-3.5" /> Misconceptions addressed
              </p>
            </FadeIn>
            <div className="mt-5 space-y-4">
              {mod.misconceptions.map((mc, i) => (
                <FadeIn key={mc.claim} delay={i * 0.05}>
                  <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
                    <div className="flex items-start gap-3 bg-rose-400/[0.06] p-4">
                      <span className="mt-0.5 shrink-0 rounded-full bg-rose-400/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-rose-300">
                        Myth
                      </span>
                      <p className="text-sm italic leading-relaxed text-rose-100/80">&ldquo;{mc.claim}&rdquo;</p>
                    </div>
                    <div className="flex items-start gap-3 bg-emerald-400/[0.05] p-4">
                      <span className="mt-0.5 shrink-0 rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                        Reality
                      </span>
                      <p className="text-sm leading-relaxed text-slate-300">{mc.reality}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* SCENARIO */}
      <section className="py-10">
        <Container size="narrow">
          <FadeIn>
            <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">{mod.scenario.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">{mod.scenario.scenario}</p>
              <div className="mt-5 flex items-start gap-2.5 border-t border-amber-400/15 pt-4">
                <span className="mt-0.5 shrink-0 text-xs font-bold uppercase tracking-wider text-amber-300">
                  Leader move →
                </span>
                <p className="text-sm leading-relaxed text-slate-300">{mod.scenario.leaderMove}</p>
              </div>
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
                {mod.keyTakeaway}
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* NAV */}
      <section className="pb-20 pt-6">
        <Container size="narrow">
          <div className="flex items-center justify-between border-t border-white/[0.06] pt-8">
            {prev ? (
              <Link
                href={`/day/${prev.day}/${prev.slug}`}
                className="max-w-[45%] text-sm font-medium text-slate-400 hover:text-white"
              >
                <span className="flex items-center gap-1.5"><ArrowLeft className="h-4 w-4 shrink-0" /> {prev.code}</span>
                <span className="mt-0.5 block truncate text-xs text-slate-500">{prev.title}</span>
              </Link>
            ) : <span />}
            {next ? (
              <Link
                href={`/day/${next.day}/${next.slug}`}
                className="max-w-[45%] text-right text-sm font-medium text-slate-400 hover:text-white"
              >
                <span className="flex items-center justify-end gap-1.5">{next.code} <ArrowRight className="h-4 w-4 shrink-0" /></span>
                <span className="mt-0.5 block truncate text-xs text-slate-500">{next.title}</span>
              </Link>
            ) : (
              <Link href="/prompt-library" className="text-sm font-medium text-sky-300 hover:text-sky-200">
                Explore the Prompt Library <ArrowRight className="ml-1 inline h-4 w-4" />
              </Link>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
