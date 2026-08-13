export type WorkshopModule = {
  slug: string;
  code: string;
  title: string;
  tagline: string;
  duration: string;
  fromFeedback: string;
  objectives: string[];
  intro: string;
};

export const workshopModules: WorkshopModule[] = [
  {
    slug: "agents",
    code: "Add-On A",
    title: "From Prompting to Agents: Building Your Team's RCA Assistant",
    tagline: "Same discipline you already taught — configured once, instead of retyped every time",
    duration: "25–30 min",
    fromFeedback: "“Can we change it to agent creation instead of only the prompting?”",
    objectives: [
      "Explain, in plain language, what an AI agent is and how it differs from a one-off prompt.",
      "Watch a real, persistent 'RCA Assistant' get configured live, using content already in this course's Prompt Library.",
      "Leave with a rollout checklist for standing up the same thing with your own team.",
    ],
    intro:
      "Everything up to this point has been prompting: open a chat, paste a template, get an answer, close the chat. That works, but it means every person on your team has to remember to paste the right template, every single time. An agent is what you get when you configure those instructions once, so the discipline is built in — nobody has to remember it.",
  },
  {
    slug: "full-loop",
    code: "Add-On B",
    title: "The Full Loop: Code, GitHub, Deploy, Break, RCA",
    tagline: "Where RCA actually sits inside product development — not floating on its own",
    duration: "30–35 min",
    fromFeedback: "“Can you show when RCA takes place — development of code, moving to GitHub, deployed on Vercel, this flow, and then RCA takes place, RCA would refer where the loop gets failed.”",
    objectives: [
      "See the real pipeline this training app itself was built and shipped through — code, GitHub, Vercel — end to end.",
      "Understand that a production incident's root cause can live at any stage of that pipeline, not just 'in production.'",
      "Practice tracing an incident backward through the pipeline stages, the same way Day 2's timeline skill works, one level up the stack.",
    ],
    intro:
      "Every incident this course has used as an example — the checkout failure, the sync lag — actually started somewhere before production. A line of code. A pull request. A deploy. RCA doesn't begin when the pager goes off; it begins by asking which stage of the pipeline the failure was actually introduced at. This module walks that full loop once, live, using this very app as the example.",
  },
];

export function getWorkshopModule(slug: string): WorkshopModule | undefined {
  return workshopModules.find((m) => m.slug === slug);
}
