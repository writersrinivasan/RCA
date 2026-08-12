import { DayMeta } from "./types";

export const days: DayMeta[] = [
  {
    day: 1,
    title: "See Clearly",
    subtitle: "How AI helps — and fools — root cause analysis",
    narrative:
      "Day 1 builds your mental model. You'll leave able to explain, in plain language your team will respect, exactly where AI earns its keep in troubleshooting and exactly where it produces confident nonsense — including how to read the observability evidence your engineers wave at you without needing to write a query yourself.",
    timeBudget: "2h 05m",
    opener: {
      title: "Welcome, Context Setting & Team Baseline",
      duration: "10 min",
      description:
        "A quick poll of the room: how is your team already using AI in troubleshooting today — sanctioned or not? We frame the three days against your real starting point, not a hypothetical one. Every leader names one recent incident where AI was involved, even informally, and we bank those for later modules.",
    },
  },
  {
    day: 2,
    title: "Lead It",
    subtitle: "Coaching your team, choosing frameworks, running retrospectives",
    narrative:
      "Day 2 moves from understanding to leading. You'll practice the exact language for coaching an engineer who's anchored on an AI answer, learn how AI slots into the RCA frameworks your team already trusts, and run a simulated retrospective where an AI-planted hypothesis is subtly wrong.",
    timeBudget: "2h 00m",
  },
  {
    day: 3,
    title: "Own It",
    subtitle: "Communication, governance, and your team's playbook",
    narrative:
      "Day 3 turns everything into something you take back to your desk: a review pass for AI-drafted incident updates, a governance checklist with real teeth, and a lightweight playbook and prompt library your team can start using this week.",
    timeBudget: "2h 00m",
    closer: {
      title: "Capstone: Synthesis, Action Planning & Q&A",
      duration: "15 min",
      description:
        "Each leader commits, in writing, to one practice from the three days — a checklist item, a coaching habit, or a governance rule — to pilot with their team within two weeks. We close with open Q&A and a live read-back of commitments to the group.",
    },
  },
];

export function getDay(day: number): DayMeta | undefined {
  return days.find((d) => d.day === day);
}
