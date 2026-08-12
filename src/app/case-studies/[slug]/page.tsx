import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Database, MessagesSquare, Route } from "lucide-react";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Pill } from "@/components/Pill";
import { CaseStudyReveal } from "@/components/CaseStudyReveal";
import { DiscussionQuestion } from "@/components/DiscussionQuestion";
import { caseStudies, getCaseStudy } from "@/lib/content/caseStudies";
import { getModule } from "@/lib/content/curriculum";

const severityTone = { "SEV-1": "rose", "SEV-2": "amber", "SEV-3": "slate" } as const;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const mod = getModule(cs.moduleLink);
  const idx = caseStudies.findIndex((c) => c.slug === slug);
  const nextCase = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <>
      <section className="pt-12 pb-6">
        <Container size="narrow">
          <FadeIn>
            <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300">
              <ArrowLeft className="h-3.5 w-3.5" /> All case studies
            </Link>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <Pill tone={severityTone[cs.severity]}>{cs.severity}</Pill>
              <span className="text-xs text-slate-500">{cs.incidentType}</span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {cs.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300">{cs.setup}</p>
            {mod && (
              <Link
                href={`/day/${mod.day}/${mod.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-sky-300 hover:text-sky-200"
              >
                <Route className="h-3.5 w-3.5" /> Tied to {mod.code}: {mod.title}
              </Link>
            )}
          </FadeIn>
        </Container>
      </section>

      <section className="py-8">
        <Container size="narrow">
          <FadeIn>
            <div className="glass-card rounded-2xl p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <Database className="h-3.5 w-3.5" /> Raw signals available to the investigator
              </p>
              <ul className="mt-4 space-y-2">
                {cs.rawSignals.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 font-mono text-xs leading-relaxed text-slate-400">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <FadeIn>
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
              Two AI-generated write-ups for the same incident — which would you sign off on?
            </p>
          </FadeIn>
          <div className="mt-6">
            <CaseStudyReveal writeUps={cs.writeUps} />
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container size="narrow">
          <FadeIn>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <MessagesSquare className="h-3.5 w-3.5" /> The tell-tales — walked through
            </p>
          </FadeIn>
          <div className="mt-5 space-y-4">
            {cs.tellTales.map((t, i) => (
              <FadeIn key={t.question} delay={i * 0.05}>
                <div className="glass-card rounded-2xl p-5 sm:p-6">
                  <p className="font-display text-sm font-semibold text-sky-300">{t.question}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{t.answer}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 pb-24">
        <Container size="narrow">
          <FadeIn>
            <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                Discussion questions for the room
              </p>
              <ul className="mt-4 space-y-3">
                {cs.discussionQuestions.map((dq) => (
                  <DiscussionQuestion key={dq.question} question={dq.question} ifStuck={dq.ifStuck} />
                ))}
              </ul>
            </div>
          </FadeIn>

          <div className="mt-14 flex justify-end border-t border-white/[0.06] pt-8">
            <Link
              href={`/case-studies/${nextCase.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white"
            >
              Next case: {nextCase.title} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
