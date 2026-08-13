import { Braces, GitBranch, Rocket, Server } from "lucide-react";

const stages = [
  {
    icon: Braces,
    name: "Code",
    border: "border-sky-400/25",
    bg: "bg-sky-400/[0.05]",
    text: "text-sky-300",
    example: "A genuine logic bug — a config default that's wrong, an edge case nobody tested.",
  },
  {
    icon: GitBranch,
    name: "GitHub (PR & Merge)",
    border: "border-amber-400/25",
    bg: "bg-amber-400/[0.05]",
    text: "text-amber-300",
    example: "The wrong branch got merged, a conflict was resolved incorrectly, or a review got skipped under deadline pressure.",
  },
  {
    icon: Rocket,
    name: "Build & Deploy",
    border: "border-emerald-400/25",
    bg: "bg-emerald-400/[0.05]",
    text: "text-emerald-300",
    example: "A build succeeded with warnings, an environment variable was missing, or config worked locally but not in production.",
  },
  {
    icon: Server,
    name: "Production / Runtime",
    border: "border-rose-400/25",
    bg: "bg-rose-400/[0.05]",
    text: "text-rose-300",
    example: "Something environment-specific — a third-party API outage, a traffic spike, a migration that silently didn't run.",
  },
];

export function PipelineStages() {
  return (
    <div className="my-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {stages.map((s) => (
          <div key={s.name} className={`rounded-xl border ${s.border} ${s.bg} p-4`}>
            <p className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${s.text}`}>
              <s.icon className="h-3.5 w-3.5" /> {s.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.example}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
        <p className="text-sm font-semibold text-white">A production incident can originate at any one of these four stages — RCA has to check all of them, not just the last one.</p>
      </div>
    </div>
  );
}
