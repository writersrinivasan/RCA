const categories = [
  { name: "People", border: "border-sky-400/25", bg: "bg-sky-400/[0.05]", text: "text-sky-300", example: "New agent didn't know the manual re-sync step existed" },
  { name: "Process", border: "border-amber-400/25", bg: "bg-amber-400/[0.05]", text: "text-amber-300", example: "No documented step for re-syncing after maintenance" },
  { name: "Technology", border: "border-emerald-400/25", bg: "bg-emerald-400/[0.05]", text: "text-emerald-300", example: "Sync pipeline has no automatic retry" },
  { name: "Environment", border: "border-rose-400/25", bg: "bg-rose-400/[0.05]", text: "text-rose-300", example: "Maintenance windows keep shifting with no notice" },
];

export function FishboneDiagram() {
  return (
    <div className="my-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {categories.map((c) => (
          <div key={c.name} className={`rounded-xl border ${c.border} ${c.bg} p-4`}>
            <p className={`text-xs font-bold uppercase tracking-wider ${c.text}`}>{c.name}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{c.example}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
        <p className="text-sm font-semibold text-white">↑ All four feed into: &ldquo;Why do tickets stop syncing to the CRM?&rdquo;</p>
      </div>
    </div>
  );
}
