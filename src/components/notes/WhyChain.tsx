import { ArrowDown, CircleCheckBig } from "lucide-react";

export function WhyChain({ steps }: { steps: { why: string; answer: string }[] }) {
  return (
    <div className="my-4 flex flex-col items-stretch">
      {steps.map((s, i) => (
        <div key={i}>
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">Why #{i + 1}: {s.why}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.answer}</p>
          </div>
          {i < steps.length - 1 ? (
            <div className="flex justify-start py-1 pl-4">
              <ArrowDown className="h-4 w-4 text-slate-600" />
            </div>
          ) : (
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-emerald-400/25 bg-emerald-400/[0.05] p-4">
              <CircleCheckBig className="h-4 w-4 shrink-0 text-emerald-400" />
              <p className="text-sm font-medium text-emerald-200">
                This is where the chain stops being about a symptom and becomes about something the team can actually fix.
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
