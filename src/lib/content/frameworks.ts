export type Framework = {
  slug: string;
  name: string;
  fullName: string;
  bestFor: string;
  howItWorks: string;
  aiRole: string;
  humanCheckpoint: string;
  steps: { step: string; aiAssists: boolean; detail: string }[];
  worksBestWhen: string[];
  watchOutFor: string;
};

export const frameworks: Framework[] = [
  {
    slug: "five-whys",
    name: "5 Whys",
    fullName: "5 Whys",
    bestFor: "Fast-moving incidents that look like a single chain of causation",
    howItWorks:
      "Start with the problem statement and ask 'why' repeatedly — typically five times — with each answer becoming the next question, until you reach a cause the team can actually act on.",
    aiRole:
      "AI proposes the next plausible 'why' based on the answer so far, which keeps the chain moving instead of stalling on a blank line.",
    humanCheckpoint:
      "A human validates each 'why' against actual evidence before moving to the next one. Skipping this turns 5 Whys into five confident guesses stacked on top of each other.",
    steps: [
      { step: "State the problem precisely", aiAssists: false, detail: "This has to be evidence-based and specific — a vague problem statement guarantees a vague chain." },
      { step: "Ask the first 'why', propose an answer", aiAssists: true, detail: "AI can draft a plausible first answer from the notes available." },
      { step: "Validate that answer against evidence", aiAssists: false, detail: "Human checks: does something concrete actually support this, or does it just sound reasonable?" },
      { step: "Repeat for whys 2 through 5", aiAssists: true, detail: "AI proposes each next step; human validates each one before advancing — every single time, not just at the end." },
      { step: "Confirm the final cause is actionable", aiAssists: false, detail: "If the chain ends somewhere nobody can act on ('human error'), it stopped one step too early." },
    ],
    worksBestWhen: [
      "The incident has a clear, single starting symptom.",
      "The team needs speed and the chain of causation is likely to be linear.",
      "There's good evidence available at each step to validate against.",
    ],
    watchOutFor:
      "5 Whys follows one line of reasoning at a time — it can completely miss a recurring pattern that only shows up when you compare multiple incidents side by side (see the CRM Sync Lag case study).",
  },
  {
    slug: "fishbone",
    name: "Fishbone",
    fullName: "Fishbone / Ishikawa Diagram",
    bestFor: "Incidents where the cause could span people, process, technology, and environment",
    howItWorks:
      "Organize potential causes into categories — typically People, Process, Technology, and Environment — branching off a central problem statement, so the team looks broadly before narrowing down.",
    aiRole:
      "AI helps populate the four categories from raw incident notes, turning a messy timeline into a structured starting draft fast — genuinely tedious to do by hand.",
    humanCheckpoint:
      "The categorization is a labor-saver, not a conclusion. Deciding which branch actually matters, and why, is still a team judgment call made against the evidence.",
    steps: [
      { step: "State the central problem", aiAssists: false, detail: "Same discipline as 5 Whys — precise and evidence-based." },
      { step: "Draft candidate causes under each category", aiAssists: true, detail: "AI reads raw notes and sorts observations into People / Process / Technology / Environment." },
      { step: "Review each category for evidence strength", aiAssists: false, detail: "Team checks which branches actually have support versus which are speculative filler." },
      { step: "Look for clustering across incidents", aiAssists: false, detail: "If the same category keeps lighting up across repeat incidents, that's the real signal — not any single branch." },
    ],
    worksBestWhen: [
      "The team suspects the cause isn't purely technical.",
      "Multiple recurring incidents need to be compared side by side for a pattern.",
      "A retrospective needs a broad first pass before narrowing to specifics.",
    ],
    watchOutFor:
      "A Fishbone diagram can end up with a plausible-looking entry in every category, giving false confidence that all angles were covered — evidence strength still has to be checked per branch, not just presence.",
  },
  {
    slug: "fault-tree",
    name: "Fault Tree",
    fullName: "Fault Tree Analysis (FTA)",
    bestFor: "Safety- or compliance-sensitive incidents involving combinations of failures",
    howItWorks:
      "Start from an undesired top-level event and work backward through logical combinations (AND/OR) of contributing failures, useful when a single point of failure alone wouldn't explain what happened.",
    aiRole:
      "AI assists with likelihood framing across branches, pattern-matching against similar past incidents to suggest which combinations are more or less probable.",
    humanCheckpoint:
      "The final tree — and any probability that gets acted on — stays human-owned. A model's likelihood framing is a starting estimate, not a measurement, and this framework is used precisely where the stakes are highest.",
    steps: [
      { step: "Define the top-level undesired event", aiAssists: false, detail: "Must be specific and observable, not a vague category of badness." },
      { step: "Identify contributing failure branches", aiAssists: true, detail: "AI can help brainstorm candidate contributing factors from documentation and past incidents." },
      { step: "Frame relative likelihood per branch", aiAssists: true, detail: "AI offers a starting likelihood estimate based on pattern-matching; this is explicitly a draft, not a number to act on." },
      { step: "Human review and sign-off on the final tree", aiAssists: false, detail: "Given the stakes this framework is used for, the finished tree and its conclusions require named human ownership." },
    ],
    worksBestWhen: [
      "The incident touches security, safety, or compliance.",
      "No single obvious cause explains the failure alone — it likely required more than one thing to go wrong at once.",
      "The write-up may become a regulatory or audit artifact.",
    ],
    watchOutFor:
      "This is one of the categories flagged in Module 6 as needing named human sign-off before an AI-assisted conclusion goes anywhere official — the stakes are exactly why AI's role here is framing, not deciding.",
  },
  {
    slug: "kepner-tregoe",
    name: "Kepner-Tregoe",
    fullName: "Kepner-Tregoe Problem Analysis",
    bestFor: "Incidents where the scope of the problem itself is confusing or disputed",
    howItWorks:
      "Build an IS / IS-NOT table — what is affected versus what conspicuously isn't — to sharpen a fuzzy problem statement into something precise enough to actually investigate.",
    aiRole:
      "AI helps draft the IS / IS-NOT table from unstructured incident notes — a genuinely tedious task to do by hand that AI handles well as a first pass.",
    humanCheckpoint:
      "The team still has to confirm each cell reflects what actually happened, not what would make a tidy, symmetrical-looking table. A drafted table is a hypothesis about scope, not a confirmed one.",
    steps: [
      { step: "Draft the IS / IS-NOT table", aiAssists: true, detail: "AI reads raw notes and drafts what is / isn't affected across dimensions like time, location, and user segment." },
      { step: "Verify each cell against actual data", aiAssists: false, detail: "Every IS and IS-NOT entry needs a real check — an unconfirmed IS-NOT can quietly hide the real scope." },
      { step: "Use the contrast to narrow hypotheses", aiAssists: false, detail: "The IS-NOT column is often more diagnostic than the IS column — what escaped the problem often points straight at the mechanism." },
    ],
    worksBestWhen: [
      "Nobody can agree on how big or how narrow the incident actually is.",
      "The affected population looks inconsistent (some regions, not others; some users, not others).",
      "A prior investigation stalled because the problem statement itself kept shifting.",
    ],
    watchOutFor:
      "An AI-drafted table can look complete and symmetrical without every cell being verified — a confident-looking IS-NOT entry that's actually wrong will misdirect the whole investigation.",
  },
];

export function getFramework(slug: string): Framework | undefined {
  return frameworks.find((f) => f.slug === slug);
}
