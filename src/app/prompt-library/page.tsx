import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { AuroraBackground } from "@/components/AuroraBackground";
import { FadeIn } from "@/components/FadeIn";
import { Pill } from "@/components/Pill";
import { PromptLibraryClient } from "@/components/PromptLibraryClient";
import { Library } from "lucide-react";

export const metadata: Metadata = {
  title: "Prompt Library — AI-RCA Academy",
  description: "Ready-to-use AI prompt templates for hypothesis generation, timeline reconstruction, evidence validation, RCA documentation, and stakeholder communication.",
};

export default function PromptLibraryPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-10 sm:pt-20">
        <AuroraBackground />
        <Container size="wide">
          <FadeIn>
            <Pill tone="sky" icon={<Library className="h-3 w-3" />}>Facilitator Resource</Pill>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              The Prompt Library
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
              You will never write these prompts live in front of the room — hand them to your team to pilot.
              Each one encodes a habit from the curriculum (forced alternatives, evidence-citing, hedging
              discipline) directly into the request, so quality doesn&rsquo;t depend on who&rsquo;s typing.
            </p>
          </FadeIn>
        </Container>
      </section>
      <section className="pb-24">
        <Container size="wide">
          <PromptLibraryClient />
        </Container>
      </section>
    </>
  );
}
