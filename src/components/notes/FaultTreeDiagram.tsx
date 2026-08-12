import { Plus, ArrowDown } from "lucide-react";

const factors = [
  "A backup job was running (extra load)",
  "It was Monday morning (peak traffic)",
  "One database replica was already offline",
];

export function FaultTreeDiagram() {
  return (
    <div className="my-4 flex flex-col items-center">
      <div className="flex flex-wrap items-stretch justify-center gap-2">
        {factors.map((f, i) => (
          <div key={f} className="flex items-center gap-2">
            <div className="w-40 rounded-xl border border-amber-400/25 bg-amber-400/[0.05] p-3.5 text-center">
              <p className="text-xs leading-relaxed text-amber-100/90">{f}</p>
            </div>
            {i < factors.length - 1 && (
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-slate-300">
                <Plus className="h-3 w-3" />
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">all three, together (AND)</p>
      <ArrowDown className="my-2 h-5 w-5 text-slate-600" />
      <div className="w-64 rounded-xl border border-rose-400/25 bg-rose-400/[0.05] p-4 text-center">
        <p className="text-sm font-semibold text-rose-200">The site went down</p>
      </div>
      <p className="mt-3 max-w-md text-center text-xs leading-relaxed text-slate-500">
        None of these three things alone would have caused an outage. It took all three happening
        at once — that combination is exactly what a Fault Tree is built to find.
      </p>
    </div>
  );
}
