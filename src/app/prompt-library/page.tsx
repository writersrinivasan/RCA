import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { AuroraBackground } from "@/components/AuroraBackground";
import { FadeIn } from "@/components/FadeIn";
import { Pill } from "@/components/Pill";
import { PromptLibraryClient } from "@/components/PromptLibraryClient";
import { Library, CircleCheckBig } from "lucide-react";

export const metadata: Metadata = {
  title: "Prompt Library — AI-RCA Academy",
  description: "60 ready-to-run AI prompts, 20 per day, every one pre-filled with a concrete example — nothing to improvise live, nothing to confuse the room.",
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
              20 prompts a day, 60 total — the same ones behind every module&rsquo;s live demo, plus more to
              go deeper. Copy one, paste it into Claude, and it runs exactly as shown. Hand the rest to your
              team afterward to adapt with their own incident details.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="mt-6 flex max-w-2xl items-start gap-2.5 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.05] p-4">
              <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
              <p className="text-sm leading-relaxed text-emerald-100/80">
                <span className="font-semibold text-emerald-300">No placeholders, nothing to fill in live: </span>
                every prompt below already has a real, concrete example baked in — the same handful of
                incidents used throughout the course (the Checkout Failure case, the CRM Sync Lag case, and
                a few others), so nothing new needs explaining to the room mid-session.
              </p>
            </div>
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
