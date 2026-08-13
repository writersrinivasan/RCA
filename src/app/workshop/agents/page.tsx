import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Clock3,
  ListChecks,
  MessagesSquare,
  Quote,
  Scale,
  Sparkles,
  Terminal,
} from "lucide-react";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Pill } from "@/components/Pill";
import { Callout } from "@/components/notes/Callout";
import { CopyButton } from "@/components/CopyButton";
import { getWorkshopModule } from "@/lib/content/workshop";

export const metadata: Metadata = {
  title: "From Prompting to Agents — AI-RCA Academy",
  description: "A live demo turning a Prompt Library template into a persistent 'RCA Assistant' using Claude Projects.",
};

const customInstructions = `You are this team's RCA Assistant. Follow these rules on every response, without being asked:
1. Never state a root cause without citing the specific evidence it's based on. If evidence is missing, say so and name exactly what's missing.
2. Always propose at least 2-3 alternative explanations before settling on one, unless explicitly asked for a single answer.
3. Match your confidence language to the actual evidence strength — never say "confirmed" or "resolved" unless it has been fully validated.
4. If asked about an observability query, always restate the time window, data source, and filters in plain language before trusting its result.
5. Flag anything that looks like PII, a credential, or a token before analyzing it, and don't proceed with analysis until it's confirmed sanitized.`;

const projectKnowledge = `Reference: The Three-Question Evidence Check (use this on every hypothesis)
1. What evidence supports this claim?
2. What else was ruled out, and how?
3. What would prove this wrong?

Reference: Trust-Calibration Checklist
- Source-grounding: does the claim trace to specific evidence?
- Alternative-hypothesis: were other explanations genuinely considered?
- Blast-radius: if this is wrong and we act on it, what does it cost us?`;

const testQuestion = `Checkout success rate dropped from 98% to 41% at 2:11 AM and recovered by 3:05 AM. A config change increasing the payment timeout threshold deployed at 2:09 AM. What's the likely cause?`;

export default function AgentsWorkshopPage() {
  const mod = getWorkshopModule("agents")!;

  return (
    <>
      <section className="pt-12 pb-6">
        <Container size="narrow">
          <FadeIn>
            <Link href="/workshop" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300">
              <ArrowLeft className="h-3.5 w-3.5" /> Workshop Add-Ons
            </Link>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <Pill tone="sky">{mod.code}</Pill>
              <span className="flex items-center gap-1 text-xs text-slate-500">
                <Clock3 className="h-3 w-3" /> {mod.duration}
              </span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {mod.title}
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-slate-400">{mod.tagline}</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-amber-400/20 bg-amber-400/[0.05] p-4">
              <MessagesSquare className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
              <p className="text-sm leading-relaxed text-amber-100/80">
                <span className="font-semibold text-amber-300">From Day 1 feedback: </span>{mod.fromFeedback}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="glass-card mt-6 rounded-2xl p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <ListChecks className="h-3.5 w-3.5" /> Learning objectives
              </p>
              <ul className="mt-4 space-y-2.5">
                {mod.objectives.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
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

      {/* WHAT IS AN AGENT */}
      <section className="py-10">
        <Container size="narrow">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-white">What&rsquo;s the Difference, in Plain English?</h2>
            <Callout type="analogy">
              A prompt is asking a knowledgeable temp worker a question, once — they answer well, then forget
              everything the moment the conversation ends. An agent is hiring someone permanent and giving
              them a standing playbook: <em>always cite your evidence, always name what else you checked,
              never overstate confidence</em>. You only explain the rules once. After that, they just know.
            </Callout>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Concretely: a prompt is a single message you paste into a chat. An agent — in the form we&rsquo;ll
              build today, a Claude <strong className="text-white">Project</strong> — is a persistent
              workspace with custom instructions and reference material attached, so every conversation
              inside it automatically follows the rules without anyone retyping them.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-10">
        <Container size="narrow">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-white">Why This Matters for a Support Team</h2>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                ["Consistency", "Nobody has to remember to paste the evidence-citing instructions — they're just always active."],
                ["Speed", "No copy-pasting the same template fifty times a day across the team."],
                ["Standardization", "Everyone's 'RCA Assistant' behaves the same way, regardless of who's using it or how new they are."],
                ["Lower training burden", "A new hire gets the discipline built into the tool from day one, not from memorizing a prompt library."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* LIVE DEMO */}
      <section className="py-10">
        <Container size="narrow">
          <FadeIn>
            <div className="rounded-2xl border border-sky-400/20 bg-sky-400/[0.04] p-6 sm:p-7">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-400/15 text-sky-300">
                  <Bot className="h-4 w-4" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">Live Demo — Build It in Front of the Room</p>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">Turn the Prompt Library Into a Persistent Assistant</h3>

              <ol className="mt-5 space-y-4">
                <li className="flex gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold text-white">1</span>
                  <span>Open Claude on screen, click <strong className="text-white">Projects</strong>, and create a new one called <strong className="text-white">&ldquo;RCA Assistant.&rdquo;</strong> Narrate what you&rsquo;re doing as you click.</span>
                </li>
                <li className="flex gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold text-white">2</span>
                  <span>Paste the custom instructions below into the Project&rsquo;s instructions field.</span>
                </li>
              </ol>

              <div className="mt-4 rounded-xl border border-white/10 bg-black/25 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <Terminal className="h-3.5 w-3.5" /> Custom instructions
                  </p>
                  <CopyButton text={customInstructions} />
                </div>
                <pre className="mt-3 whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-slate-300">{customInstructions}</pre>
              </div>

              <ol start={3} className="mt-4 space-y-4">
                <li className="flex gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold text-white">3</span>
                  <span>Add the reference material below as <strong className="text-white">Project knowledge</strong> — this is the same three-question check and trust-calibration checklist from Days 1 and 3, now permanently attached.</span>
                </li>
              </ol>

              <div className="mt-4 rounded-xl border border-white/10 bg-black/25 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <Terminal className="h-3.5 w-3.5" /> Project knowledge
                  </p>
                  <CopyButton text={projectKnowledge} />
                </div>
                <pre className="mt-3 whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-slate-300">{projectKnowledge}</pre>
              </div>

              <ol start={4} className="mt-4 space-y-4">
                <li className="flex gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold text-white">4</span>
                  <span>Start a new chat <strong className="text-white">inside the Project</strong> and paste the test question below — nothing else, no re-explaining the rules.</span>
                </li>
              </ol>

              <div className="mt-4 rounded-xl border border-white/10 bg-black/25 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <Terminal className="h-3.5 w-3.5" /> Test question
                  </p>
                  <CopyButton text={testQuestion} />
                </div>
                <pre className="mt-3 whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-slate-300">{testQuestion}</pre>
              </div>

              <ol start={5} className="mt-4 space-y-2.5">
                <li className="flex gap-3 text-sm leading-relaxed text-slate-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold text-white">5</span>
                  <span>Read the response aloud — it should already cite evidence, list alternatives, and hedge appropriately, with none of that spelled out in your message.</span>
                </li>
              </ol>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* SIDE BY SIDE */}
      <section className="py-10">
        <Container size="narrow">
          <FadeIn>
            <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-6">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
                <Scale className="h-3.5 w-3.5" /> Make the difference visible
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                Open a second, completely bare Claude chat — no Project, no instructions — and paste the
                exact same test question. Read both answers side by side.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                The bare chat will likely answer fluently and reasonably — but the Project answer is the one
                that automatically shows its evidence, names alternatives, and hedges correctly, because
                that discipline is now configured in, not dependent on what anyone remembered to paste.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ROLLOUT CHECKLIST */}
      <section className="py-10">
        <Container size="narrow">
          <FadeIn>
            <h2 className="font-display text-2xl font-bold text-white">Before You Roll This Out to Your Team</h2>
            <ul className="mt-5 space-y-3">
              {[
                ["Name an owner", "Someone specific maintains the instructions and knowledge — not 'the team,' one person."],
                ["Version the instructions", "Keep the custom instructions in a doc with a date, so a change in behavior can be traced to a specific edit."],
                ["Pilot with 2-3 people first", "Before the whole team switches over, confirm it behaves consistently for a few real, sanitized incidents."],
                ["Review outputs weekly, early on", "Spot-check a handful of real conversations for drift — an agent can quietly stop following its own rules over time."],
                ["The governance rules still apply", "An agent is not exempt from the Data Sanitization and Trust-Calibration checks from Day 3 — if anything, they matter more once usage scales up."],
              ].map(([title, body]) => (
                <li key={title} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{body}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </section>

      {/* OTHER PLATFORMS NOTE */}
      <section className="py-10">
        <Container size="narrow">
          <FadeIn>
            <Callout type="example" title="Not on Claude? Same idea, different product">
              If your organization uses a different platform — Copilot Studio, a custom GPT, or an internal
              agent-builder — the underlying concept is identical: standing instructions plus reference
              knowledge equals consistent behavior, regardless of which product implements it. Don&rsquo;t get
              stuck on the specific tool name; get the concept across, then point your team at whichever
              platform your organization has actually approved.
            </Callout>
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
                An agent doesn&rsquo;t change what good RCA looks like — it just makes sure the discipline
                survives contact with a team that&rsquo;s busy, new, or in a hurry.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-20 pt-6">
        <Container size="narrow">
          <div className="flex items-center justify-between border-t border-white/[0.06] pt-8">
            <Link href="/workshop" className="text-sm font-medium text-slate-400 hover:text-white">
              <ArrowLeft className="mr-1 inline h-4 w-4" /> Workshop Add-Ons
            </Link>
            <Link href="/workshop/full-loop" className="text-sm font-medium text-slate-400 hover:text-white">
              Add-On B: The Full Loop <ArrowRight className="ml-1 inline h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
