import type { Metadata } from "next";
import { ListChecks } from "lucide-react";
import { Container } from "@/components/Container";
import { AuroraBackground } from "@/components/AuroraBackground";
import { FadeIn } from "@/components/FadeIn";
import { Pill } from "@/components/Pill";
import { ChecklistClient } from "@/components/ChecklistClient";

export const metadata: Metadata = {
  title: "Governance Checklist — AI-RCA Academy",
  description: "Interactive trust-calibration, data-handling, and communication-review checklists for AI-assisted RCA.",
};

export default function ChecklistPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-10 sm:pt-20">
        <AuroraBackground />
        <Container size="wide">
          <FadeIn>
            <Pill tone="emerald" icon={<ListChecks className="h-3 w-3" />}>Facilitator Resource</Pill>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Governance Checklist
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
              Three checklists from Module 6 and Module 5B, built to actually run during a live incident —
              not sit in a slide. Your progress saves in this browser, so you can use it as a running
              reference across all three days.
            </p>
          </FadeIn>
        </Container>
      </section>
      <section className="pb-24">
        <Container size="narrow">
          <ChecklistClient />
        </Container>
      </section>
    </>
  );
}
