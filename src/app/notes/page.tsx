import type { Metadata } from "next";
import Link from "next/link";
import { NotebookPen, ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { AuroraBackground } from "@/components/AuroraBackground";
import { FadeIn } from "@/components/FadeIn";
import { Pill } from "@/components/Pill";
import { Callout } from "@/components/notes/Callout";
import { CompareTable } from "@/components/notes/CompareTable";
import { FlowDiagram } from "@/components/notes/FlowDiagram";
import { WhyChain } from "@/components/notes/WhyChain";
import { FishboneDiagram } from "@/components/notes/FishboneDiagram";
import { FaultTreeDiagram } from "@/components/notes/FaultTreeDiagram";

export const metadata: Metadata = {
  title: "Learn the Concepts — AI-RCA Academy",
  description: "A plain-English, no-jargon study guide to every concept in this course, with real-world analogies and flow diagrams — written for you, not for the room.",
};

const toc = [
  { id: "start-here", label: "1. What is Root Cause Analysis?" },
  { id: "what-is-ai", label: "2. What AI actually is" },
  { id: "hallucination", label: "3. The one risk: hallucination" },
  { id: "evidence-anchoring", label: "4. The evidence-anchoring test" },
  { id: "ai-tools", label: "5. Claude vs ChatGPT vs Copilot vs Cursor" },
  { id: "observability", label: "6. Splunk, Datadog, ELK, KQL" },
  { id: "golden-rule", label: "7. The golden rule" },
  { id: "frameworks", label: "8. The four detective methods" },
  { id: "full-flow", label: "9. One incident, start to finish" },
  { id: "governance", label: "10. When to slow down" },
  { id: "cheat-sheet", label: "11. One-page cheat sheet" },
];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-base leading-relaxed text-slate-300">{children}</p>;
}

export default function NotesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-10 sm:pt-20">
        <AuroraBackground />
        <Container size="wide">
          <FadeIn>
            <Pill tone="indigo" icon={<NotebookPen className="h-3 w-3" />}>Written for you, not the room</Pill>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Learn the Concepts, In Plain English
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
              Every idea in this course, explained the way you&rsquo;d explain it to a friend over coffee —
              no jargon, a real-world comparison for every concept, and a diagram wherever a picture beats
              a paragraph. Read this once before you teach it, and it&rsquo;ll never feel technical again.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-28">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
            <aside className="hidden lg:block">
              <nav className="sticky top-24 space-y-1">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">On this page</p>
                {toc.map((t) => (
                  <a
                    key={t.id}
                    href={`#${t.id}`}
                    className="block rounded-lg px-3 py-1.5 text-sm text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {t.label}
                  </a>
                ))}
              </nav>
            </aside>

            <article className="max-w-3xl space-y-20">
              {/* 1. START HERE */}
              <FadeIn>
                <div>
                  <H2 id="start-here">1. What Even Is &ldquo;Root Cause Analysis&rdquo;?</H2>
                  <P>
                    Strip away the acronym and it&rsquo;s one plain idea: <strong className="text-white">find the
                    real reason something broke, not just the first thing you noticed.</strong> The thing you
                    notice first is almost always a symptom — the actual cause is usually one or two layers
                    underneath it.
                  </P>
                  <Callout type="analogy">
                    A doctor and a fever. The fever isn&rsquo;t the illness — it&rsquo;s your body&rsquo;s
                    reaction to an infection underneath. An ice pack brings the fever down for an hour, but the
                    infection is still there tomorrow. RCA is the discipline of looking for the infection
                    instead of stopping at the fever.
                  </Callout>
                  <Callout type="example">
                    A customer says &ldquo;checkout is slow.&rdquo; That&rsquo;s the fever. Telling them to
                    &ldquo;try again in a minute&rdquo; treats the fever. The infection might be a background
                    report job quietly hogging the database every day at the same time — invisible to the
                    customer, and the actual thing worth fixing so it doesn&rsquo;t happen again tomorrow.
                  </Callout>
                </div>
              </FadeIn>

              {/* 2. WHAT IS AI */}
              <FadeIn>
                <div>
                  <H2 id="what-is-ai">2. What AI Actually Is (In One Paragraph)</H2>
                  <P>
                    Tools like Claude and ChatGPT have read an enormous amount of text and learned to predict,
                    extremely well, what words would plausibly come next in a sentence. That&rsquo;s the whole
                    trick. They do not &ldquo;know&rdquo; facts the way you recall a memory — they generate the
                    most statistically likely-sounding answer based on patterns they&rsquo;ve seen before.
                    Most of the time that produces something true and useful. Sometimes it produces something
                    fluent and wrong, and there is no little warning light that tells you which one just happened.
                  </P>
                  <Callout type="analogy">
                    Imagine a brilliant intern who has read every troubleshooting guide ever written, but has
                    never actually worked at your company and has never seen your systems. Ask this intern
                    anything and they&rsquo;ll answer instantly and confidently — because saying &ldquo;I don&rsquo;t
                    know&rdquo; isn&rsquo;t really in their nature. They&rsquo;re not lying to you on purpose.
                    They genuinely believe their best guess is worth saying out loud, every single time.
                  </Callout>
                  <FlowDiagram
                    steps={[
                      { title: "Your question + whatever data you gave it", detail: "logs, notes, a ticket thread", tone: "sky" },
                      { title: "AI predicts the most plausible-sounding next words", detail: "pattern-matching, not fact-checking", tone: "amber" },
                      { title: "A fluent, confident answer", detail: "sounds identical whether it's right or wrong", tone: "rose" },
                    ]}
                  />
                </div>
              </FadeIn>

              {/* 3. HALLUCINATION */}
              <FadeIn>
                <div>
                  <H2 id="hallucination">3. The One Risk That Matters Most: Hallucination</H2>
                  <P>
                    &ldquo;Hallucination&rdquo; is just the field&rsquo;s word for what happens when the intern
                    from the last section fills a gap in its knowledge with something that sounds right instead
                    of admitting it doesn&rsquo;t know. It isn&rsquo;t a rare glitch — it&rsquo;s a predictable
                    side effect of how these tools generate language at all.
                  </P>
                  <Callout type="warning" title="The confusion everyone falls into">
                    We&rsquo;re wired to trust people who sound confident and speak in detail — in everyday
                    life, that&rsquo;s usually a decent signal someone knows what they&rsquo;re talking about.
                    With AI, that signal is broken. <strong className="text-white">Fluency and correctness are
                    two completely unrelated things</strong> for these tools — a wrong answer and a right
                    answer are written in exactly the same confident voice.
                  </Callout>
                  <Callout type="example">
                    In one of the Case Studies in this app, an AI assistant confidently reported: &ldquo;the
                    payment gateway&rsquo;s SSL certificate expired at 2:14 AM, causing all HTTPS handshakes to
                    fail.&rdquo; Specific. Technical. Delivered with total certainty. The certificate actually
                    had eight months of validity left — the AI simply filled a gap with something that sounded
                    like the kind of thing that causes checkout failures. See{" "}
                    <Link href="/case-studies/checkout-failure" className="text-sky-300 underline underline-offset-2 hover:text-sky-200">
                      the full case study
                    </Link>{" "}
                    for the real evidence next to it.
                  </Callout>
                </div>
              </FadeIn>

              {/* 4. EVIDENCE ANCHORING */}
              <FadeIn>
                <div>
                  <H2 id="evidence-anchoring">4. The Single Test That Fixes Most of This</H2>
                  <P>
                    You will never have time to re-investigate every claim yourself. You don&rsquo;t need to —
                    you need one habit: before believing any claim, ask whether it points to something specific
                    you could go check, or whether it&rsquo;s just confidently asserted.
                  </P>
                  <Callout type="analogy">
                    Picture a courtroom. &ldquo;The defendant is guilty&rdquo; and &ldquo;the security camera
                    timestamp shows the defendant entering the building at 9:14 PM&rdquo; can be said in exactly
                    the same confident tone. Only one of them points to something a third person could go
                    independently verify. That difference — not the tone of voice — is what evidence-anchoring
                    means.
                  </Callout>
                  <CompareTable
                    columns={["What it sounds like", "Can you check it?"]}
                    rows={[
                      { label: "“The recent deployment likely caused this.”", cells: ["Just an assertion.", "No — nothing to go look at."] },
                      { label: "“Deploy #4471, shipped 09:41, matches the error spike two minutes later.”", cells: ["Evidence-anchored.", "Yes — a deploy ID and a timestamp."] },
                    ]}
                  />
                  <P>
                    In the full course, this becomes three simple questions you can ask about literally any
                    RCA write-up, AI-generated or not: <em>What evidence supports this? What else was ruled
                    out? What would prove this wrong?</em> A claim that can&rsquo;t survive those three
                    questions shouldn&rsquo;t go in a postmortem yet.
                  </P>
                </div>
              </FadeIn>

              {/* 5. AI TOOLS */}
              <FadeIn>
                <div>
                  <H2 id="ai-tools">5. Meet the AI Tools (So the Names Stop Being a Blur)</H2>
                  <P>
                    You&rsquo;ll hear four names thrown around. They are not interchangeable — they&rsquo;re
                    built for different jobs, the same way a word processor and a spreadsheet are both
                    &ldquo;office software&rdquo; but you wouldn&rsquo;t use one to do the other&rsquo;s job.
                  </P>
                  <Callout type="analogy">
                    Claude and ChatGPT are like a smart assistant you sit down and chat with. Copilot is more
                    like a spell-checker that lives permanently inside the software a developer is writing code
                    in — it only ever sees code. Cursor is an entire office built specifically around writing
                    software with AI help. If someone tells you &ldquo;Copilot found the root cause of the
                    outage,&rdquo; that&rsquo;s worth a raised eyebrow — narrating an incident isn&rsquo;t what
                    Copilot is built to do.
                  </Callout>
                  <CompareTable
                    columns={["Built for", "Good for as a leader"]}
                    rows={[
                      { label: "Claude / ChatGPT", cells: ["Conversation, drafting, summarizing", "Timelines, summaries, communication drafts"] },
                      { label: "Copilot", cells: ["Suggesting code inside a code editor", "Not relevant to reading a postmortem"] },
                      { label: "Cursor", cells: ["A full AI-native coding environment", "Not relevant to reading a postmortem"] },
                    ]}
                  />
                </div>
              </FadeIn>

              {/* 6. OBSERVABILITY */}
              <FadeIn>
                <div>
                  <H2 id="observability">6. Meet the Observability Platforms</H2>
                  <P>
                    Splunk, Datadog, ELK/Kibana, KQL — these are the tools engineers use to look at what your
                    systems were actually doing during an incident. You will never operate one, and you don&rsquo;t
                    need to.
                  </P>
                  <Callout type="analogy">
                    Think of your company&rsquo;s systems as a huge building wired with security cameras
                    everywhere, recording everything, all the time. Splunk and ELK/Kibana are the tool for
                    searching through that footage for a specific moment or pattern — &ldquo;show me everyone
                    who walked past this door between 2 and 3 AM.&rdquo; Datadog is more like the building&rsquo;s
                    dashboard of gauges and dials — temperature, pressure, how many people are in each room
                    right now. KQL does the same job as Splunk, just for Microsoft-flavored buildings (Azure).
                  </Callout>
                  <Callout type="example">
                    &ldquo;Did anything unusual happen in this specific log between 2 and 3 AM?&rdquo; is a
                    Splunk/ELK-style question. &ldquo;Is response time running hotter than normal today?&rdquo;
                    is a Datadog-style question. Same building, different way of looking at it.
                  </Callout>
                  <P>
                    The one thing worth remembering as a leader: when someone says &ldquo;the query found
                    nothing,&rdquo; that&rsquo;s only reassuring if the query actually looked at the right
                    <em> time window</em> and the right <em>place</em>. A perfectly working camera search aimed
                    at the wrong hour will always come back clean — that doesn&rsquo;t mean nothing happened.
                  </P>
                </div>
              </FadeIn>

              {/* 7. GOLDEN RULE */}
              <FadeIn>
                <div>
                  <H2 id="golden-rule">7. The Golden Rule Behind Everything Else</H2>
                  <P>
                    If you remember exactly one sentence from these three days, make it this one:
                  </P>
                  <div className="my-4 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 text-center">
                    <p className="font-display text-xl font-bold text-white sm:text-2xl">
                      &ldquo;AI proposes. A human validates.&rdquo;
                    </p>
                  </div>
                  <P>
                    That&rsquo;s it. That&rsquo;s the entire leadership job in one loop. AI is genuinely useful
                    for the &ldquo;propose&rdquo; half — it&rsquo;s fast at drafting a starting theory. The
                    &ldquo;validate&rdquo; half never gets automated away, because that&rsquo;s the part where
                    someone checks the theory against real evidence.
                  </P>
                  <FlowDiagram
                    steps={[
                      { title: "Something breaks", tone: "rose" },
                      { title: "AI drafts a fast first theory", detail: "from logs, notes, ticket history", tone: "sky" },
                      { title: "A human checks it against real evidence", detail: "the 3 questions from Section 4", tone: "amber" },
                      { title: "Confirmed → goes in the report", tone: "emerald" },
                    ]}
                    loopBack={{
                      fromIndex: 2,
                      toIndex: 1,
                      label: "the evidence doesn't hold up, go back and dig — don't write it down as fact yet.",
                    }}
                  />
                </div>
              </FadeIn>

              {/* 8. FRAMEWORKS */}
              <FadeIn>
                <div>
                  <H2 id="frameworks">8. The Four Detective Methods, In Plain English</H2>
                  <P>
                    &ldquo;RCA framework&rdquo; just means a structured way of hunting for a cause, so the team
                    isn&rsquo;t just guessing. There are four your team will likely use. Let&rsquo;s walk the
                    same incident — <em>&ldquo;customers suddenly can&rsquo;t check out&rdquo;</em> — through
                    each one so you can feel the difference.
                  </P>

                  <h3 className="mt-10 font-display text-lg font-semibold text-white">5 Whys — keep asking &ldquo;why&rdquo; until you hit bedrock</h3>
                  <Callout type="analogy">
                    Exactly like a curious kid asking &ldquo;why&rdquo; over and over until a grown-up runs out
                    of answers that aren&rsquo;t &ldquo;because I said so.&rdquo; Each answer becomes the next
                    question.
                  </Callout>
                  <WhyChain
                    steps={[
                      { why: "Customers can't check out", answer: "Payment requests are timing out before they complete." },
                      { why: "Payment requests are timing out", answer: "The database is responding much slower than usual." },
                      { why: "The database is responding slowly", answer: "A large report job is running heavy queries against it." },
                      { why: "A report job is running right now", answer: "It's scheduled to run during business hours." },
                      { why: "It's scheduled during business hours", answer: "Nobody ever moved it to run overnight after it was built." },
                    ]}
                  />

                  <h3 className="mt-10 font-display text-lg font-semibold text-white">Fishbone — sort every possible cause into buckets</h3>
                  <Callout type="analogy">
                    A detective&rsquo;s suspect board. Instead of chasing one theory, you sort every possible
                    explanation into four buckets — People, Process, Technology, Environment — so you don&rsquo;t
                    accidentally skip an entire category of explanation.
                  </Callout>
                  <FishboneDiagram />

                  <h3 className="mt-10 font-display text-lg font-semibold text-white">Fault Tree — when it takes more than one thing going wrong</h3>
                  <Callout type="analogy">
                    A bank vault with three separate locks that all have to turn at the same time for the door
                    to open. No single failure alone explains the incident — it&rsquo;s the specific combination
                    that mattered.
                  </Callout>
                  <FaultTreeDiagram />

                  <h3 className="mt-10 font-display text-lg font-semibold text-white">Kepner-Tregoe — when nobody can agree how big the problem even is</h3>
                  <Callout type="analogy">
                    A spot-the-difference puzzle: two pictures that look almost identical, and the few spots
                    that differ are exactly where the answer is hiding. You build one list of what IS affected
                    and one list of what conspicuously IS NOT — the contrast points straight at the mechanism.
                  </Callout>
                  <CompareTable
                    columns={["IS (affected)", "IS NOT (unaffected)"]}
                    rows={[
                      { label: "Region", cells: ["EU customers", "US customers"] },
                      { label: "Platform", cells: ["Mobile app", "Desktop website"] },
                      { label: "Time", cells: ["9 AM – 11 AM", "Every other hour"] },
                    ]}
                  />
                  <P>
                    Notice how the IS-NOT column is almost more useful than the IS column — &ldquo;why mobile
                    and not desktop&rdquo; is a much sharper question than &ldquo;something&rsquo;s wrong with
                    checkout.&rdquo;
                  </P>

                  <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Quick pick guide</p>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-300">
                      <li><strong className="text-white">Fast, looks like one clear chain?</strong> → 5 Whys</li>
                      <li><strong className="text-white">Could be people, process, or tech?</strong> → Fishbone</li>
                      <li><strong className="text-white">Safety, security, or compliance-sensitive?</strong> → Fault Tree</li>
                      <li><strong className="text-white">Nobody agrees on how big the problem is?</strong> → Kepner-Tregoe</li>
                    </ul>
                    <Link href="/frameworks" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 hover:text-sky-200">
                      Open the full interactive Frameworks resource <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </FadeIn>

              {/* 9. FULL FLOW */}
              <FadeIn>
                <div>
                  <H2 id="full-flow">9. Putting It All Together: One Incident, Start to Finish</H2>
                  <P>
                    Here&rsquo;s every piece from this page, in the order it actually happens during a real
                    incident.
                  </P>
                  <FlowDiagram
                    steps={[
                      { title: "Incident happens", detail: "customers notice something's wrong", tone: "rose" },
                      { title: "Team pulls evidence", detail: "an observability tool searches logs/metrics", tone: "slate" },
                      { title: "AI drafts a first theory + timeline", detail: "fast, but unproven", tone: "sky" },
                      { title: "The 3 evidence questions get asked", detail: "source, alternatives, disproof test", tone: "amber" },
                      { title: "Confirmed → documented & communicated", detail: "leader review pass before it ships", tone: "emerald" },
                    ]}
                    loopBack={{
                      fromIndex: 3,
                      toIndex: 2,
                      label: "the theory doesn't survive the 3 questions, go back and dig with a new angle — don't skip ahead under deadline pressure.",
                    }}
                  />
                  <P>
                    Every module in this course lives somewhere on this one diagram. Modules 1–2B teach you to
                    spot a weak Step 3. Modules 3–5 teach you to lead the team through Steps 3–4 without
                    slowing them down. Modules 5B–7 teach you Step 5 — how it gets communicated and documented
                    once it&rsquo;s actually confirmed.
                  </P>
                </div>
              </FadeIn>

              {/* 10. GOVERNANCE */}
              <FadeIn>
                <div>
                  <H2 id="governance">10. Governance in Plain English: When to Slow Down</H2>
                  <P>
                    Two separate questions live under &ldquo;governance,&rdquo; and they get confused a lot.
                    Keep them apart in your head.
                  </P>
                  <h3 className="mt-8 font-display text-lg font-semibold text-white">Question 1 — Should I trust this conclusion?</h3>
                  <P>
                    A judgment call you calibrate based on how bad it would be to act on it if it&rsquo;s wrong.
                    A guess about an internal tooling glitch needs less scrutiny than a guess about a customer
                    payment failure.
                  </P>
                  <h3 className="mt-6 font-display text-lg font-semibold text-white">Question 2 — Should this data even be in this tool?</h3>
                  <Callout type="analogy">
                    Never shout your medical file out loud in a crowded coffee shop. Some AI tools are like a
                    private, NDA-covered meeting room your company has a contract with — safe for sensitive
                    information. A random consumer AI account is the crowded coffee shop — same words, no
                    privacy agreement behind it. This isn&rsquo;t a judgment call to calibrate. It&rsquo;s a
                    line: customer names, emails, tokens, and account IDs don&rsquo;t go into the coffee shop,
                    ever.
                  </Callout>
                  <P>
                    The full interactive version of this — with all three checklists your team can actually
                    run live — is in the{" "}
                    <Link href="/checklist" className="text-sky-300 underline underline-offset-2 hover:text-sky-200">
                      Governance Checklist
                    </Link>{" "}
                    resource.
                  </P>
                </div>
              </FadeIn>

              {/* 11. CHEAT SHEET */}
              <FadeIn>
                <div>
                  <H2 id="cheat-sheet">11. Your One-Page Cheat Sheet</H2>
                  <P>Read this section alone the morning of each training day if you need a two-minute refresh.</P>
                  <div className="mt-5 space-y-3">
                    {[
                      ["RCA", "Find the real reason, not just the symptom you noticed first."],
                      ["AI", "A brilliant intern that always answers confidently, even when it's guessing."],
                      ["Hallucination", "A fluent, confident answer that isn't actually grounded in evidence."],
                      ["Evidence-anchoring", "Does this claim point to something specific I could go check?"],
                      ["The golden rule", "AI proposes. A human validates. Every time, no exceptions."],
                      ["Observability tools", "Different ways of searching the building's security camera footage."],
                      ["5 Whys / Fishbone / Fault Tree / Kepner-Tregoe", "Four different ways to structure the hunt for a cause."],
                      ["Governance", "One judgment call (how much to trust this) and one hard line (what data goes where)."],
                    ].map(([term, def]) => (
                      <div key={term} className="flex flex-col gap-1 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 sm:flex-row sm:items-baseline sm:gap-4">
                        <span className="shrink-0 font-display text-sm font-bold text-sky-300 sm:w-56">{term}</span>
                        <span className="text-sm leading-relaxed text-slate-300">{def}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl border border-sky-400/20 bg-sky-400/[0.05] p-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm leading-relaxed text-slate-200">
                      Ready to see it in the actual course flow? Start with Day 1 — everything above shows up
                      there in the same order.
                    </p>
                    <Link
                      href="/day/1"
                      className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-sky-300 px-5 py-2.5 text-sm font-semibold text-[#05070d]"
                    >
                      Go to Day 1 <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
