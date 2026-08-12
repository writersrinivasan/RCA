import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock3, CircleCheckBig, Rocket, Trophy } from "lucide-react";
import { Container } from "@/components/Container";
import { AuroraBackground } from "@/components/AuroraBackground";
import { FadeIn } from "@/components/FadeIn";
import { Pill } from "@/components/Pill";
import { TimeSplitBar } from "@/components/TimeSplitBar";
import { days } from "@/lib/content/days";
import { getModulesForDay } from "@/lib/content/curriculum";

const tones = ["sky", "amber", "emerald"] as const;

export function generateStaticParams() {
  return days.map((d) => ({ day: String(d.day) }));
}

export default async function DayPage({ params }: { params: Promise<{ day: string }> }) {
  const { day: dayParam } = await params;
  const dayNum = Number(dayParam);
  const day = days.find((d) => d.day === dayNum);
  if (!day) notFound();

  const modules = getModulesForDay(day.day);
  const tone = tones[day.day - 1];
  const prevDay = days.find((d) => d.day === day.day - 1);
  const nextDay = days.find((d) => d.day === day.day + 1);

  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-16 sm:pt-20">
        <AuroraBackground />
        <Container size="wide">
          <FadeIn>
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300">
              <ArrowLeft className="h-3.5 w-3.5" /> Course overview
            </Link>
          </FadeIn>

          <FadeIn delay={0.06}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Pill tone={tone}>Day {day.day} of 3</Pill>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock3 className="h-3.5 w-3.5" /> {day.timeBudget}
              </span>
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {day.title}
            </h1>
            <p className="mt-2 text-lg font-medium text-slate-400">{day.subtitle}</p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">{day.narrative}</p>
          </FadeIn>

          {day.opener && (
            <FadeIn delay={0.12}>
              <div className="glass-card mt-8 flex items-start gap-4 rounded-2xl p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-400/10 text-sky-300">
                  <Rocket className="h-4.5 w-4.5" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-display text-sm font-semibold text-white">{day.opener.title}</p>
                    <Pill tone="slate">{day.opener.duration}</Pill>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{day.opener.description}</p>
                </div>
              </div>
            </FadeIn>
          )}
        </Container>
      </section>

      <section className="pb-16">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-5">
            {modules.map((m, i) => (
              <FadeIn key={m.slug} delay={i * 0.06}>
                <Link
                  href={`/day/${day.day}/${m.slug}`}
                  className="glass-card glass-card-hover group flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Pill tone={tone}>{m.code}</Pill>
                      <span className="flex items-center gap-1 text-xs text-slate-500">
                        <Clock3 className="h-3 w-3" /> {m.duration}
                        <span className="text-slate-700">·</span>
                        <span className="text-slate-600 line-through">{m.originalDuration}</span>
                      </span>
                      <span className="text-xs text-slate-500">{m.format}</span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-semibold text-white">{m.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{m.tagline}</p>
                    <div className="mt-3">
                      <TimeSplitBar split={m.timeSplit} compact />
                    </div>
                    <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1.5">
                      {m.objectives.slice(0, 2).map((o) => (
                        <li key={o} className="flex items-start gap-1.5 text-xs text-slate-500">
                          <CircleCheckBig className="mt-0.5 h-3 w-3 shrink-0 text-slate-600" />
                          <span className="max-w-md">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-white/10 sm:self-center">
                    Open module
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>

          {day.closer && (
            <FadeIn delay={0.1}>
              <div className="glass-card mt-5 flex items-start gap-4 rounded-2xl p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-400/10 text-amber-300">
                  <Trophy className="h-4.5 w-4.5" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-display text-sm font-semibold text-white">{day.closer.title}</p>
                    <Pill tone="slate">{day.closer.duration}</Pill>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{day.closer.description}</p>
                </div>
              </div>
            </FadeIn>
          )}

          <div className="mt-14 flex items-center justify-between border-t border-white/[0.06] pt-8">
            {prevDay ? (
              <Link href={`/day/${prevDay.day}`} className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white">
                <ArrowLeft className="h-4 w-4" /> Day {prevDay.day}: {prevDay.title}
              </Link>
            ) : <span />}
            {nextDay ? (
              <Link href={`/day/${nextDay.day}`} className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white">
                Day {nextDay.day}: {nextDay.title} <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <Link href="/checklist" className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:text-sky-200">
                Go to your Governance Checklist <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
