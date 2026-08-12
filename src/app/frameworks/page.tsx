import type { Metadata } from "next";
import { Route } from "lucide-react";
import { Container } from "@/components/Container";
import { AuroraBackground } from "@/components/AuroraBackground";
import { FadeIn } from "@/components/FadeIn";
import { Pill } from "@/components/Pill";
import { FrameworksClient } from "@/components/FrameworksClient";

export const metadata: Metadata = {
  title: "RCA Frameworks — AI-RCA Academy",
  description: "5 Whys, Fishbone, Fault Tree, and Kepner-Tregoe — mapped step by step to where AI assists and where a human sign-off is required.",
};

export default function FrameworksPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-10 sm:pt-20">
        <AuroraBackground />
        <Container size="wide">
          <FadeIn>
            <Pill tone="indigo" icon={<Route className="h-3 w-3" />}>Facilitator Resource</Pill>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              RCA Frameworks, Mapped to AI
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
              AI doesn&rsquo;t need a new methodology — it slots into the frameworks your team already trusts.
              Switch between the four below to see exactly which steps AI can accelerate and which ones stay
              human-owned, no exceptions.
            </p>
          </FadeIn>
        </Container>
      </section>
      <section className="pb-24">
        <Container size="wide">
          <FrameworksClient />
        </Container>
      </section>
    </>
  );
}
