import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { Container } from "@/components/Container";
import { AuroraBackground } from "@/components/AuroraBackground";
import { FadeIn } from "@/components/FadeIn";
import { Pill } from "@/components/Pill";
import { GlossaryClient } from "@/components/GlossaryClient";

export const metadata: Metadata = {
  title: "Glossary — AI-RCA Academy",
  description: "Every tool, platform, and framework named in this course, explained in plain language for a non-technical leader.",
};

export default function GlossaryPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-10 sm:pt-20">
        <AuroraBackground />
        <Container size="wide">
          <FadeIn>
            <Pill tone="rose" icon={<GraduationCap className="h-3 w-3" />}>Facilitator Resource</Pill>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Plain-Language Glossary
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
              Every tool, platform, and framework named across the three days — explained the way this course
              explains everything: what to know, and what it means for you as a leader, not how to operate it.
            </p>
          </FadeIn>
        </Container>
      </section>
      <section className="pb-24">
        <Container size="wide">
          <GlossaryClient />
        </Container>
      </section>
    </>
  );
}
