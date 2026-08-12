import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenCheck } from "lucide-react";
import { Container } from "@/components/Container";
import { AuroraBackground } from "@/components/AuroraBackground";
import { FadeIn } from "@/components/FadeIn";
import { Pill } from "@/components/Pill";
import { caseStudies } from "@/lib/content/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies — AI-RCA Academy",
  description: "Real-world support incidents with a grounded AI write-up and a fluent-but-hallucinated one, side by side.",
};

const severityTone = { "SEV-1": "rose", "SEV-2": "amber", "SEV-3": "slate" } as const;

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-10 sm:pt-20">
        <AuroraBackground />
        <Container size="wide">
          <FadeIn>
            <Pill tone="amber" icon={<BookOpenCheck className="h-3 w-3" />}>Facilitator Resource</Pill>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Case Studies
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
              Four real-style support incidents. Each has two AI-generated write-ups for the same evidence —
              one anchored, one a fluent guess. Use these live in Module 2 and Module 5: read both, apply
              the three questions, decide which one you&rsquo;d sign off on before revealing the answer.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-24">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {caseStudies.map((cs, i) => (
              <FadeIn key={cs.slug} delay={i * 0.06}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="glass-card glass-card-hover group flex h-full flex-col rounded-2xl p-6"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Pill tone={severityTone[cs.severity]}>{cs.severity}</Pill>
                    <span className="text-xs text-slate-500">{cs.incidentType}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-white">{cs.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-400">{cs.setup}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-300">
                    Read the case
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
