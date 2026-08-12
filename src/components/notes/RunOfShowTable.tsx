export type RunOfShowRow = {
  time: string;
  segment: string;
  page: string;
  href: string;
  doThis: string;
};

export function RunOfShowTable({ rows }: { rows: RunOfShowRow[] }) {
  return (
    <div className="my-4 overflow-x-auto rounded-2xl border border-white/[0.08]">
      <table className="w-full min-w-[680px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-white/[0.04]">
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Time</th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Segment</th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Open in the app</th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Do this live</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-transparent" : "bg-white/[0.015]"}>
              <td className="whitespace-nowrap border-t border-white/[0.06] px-4 py-3.5 text-xs font-mono text-slate-500">{r.time}</td>
              <td className="border-t border-white/[0.06] px-4 py-3.5 text-sm font-semibold text-white">{r.segment}</td>
              <td className="border-t border-white/[0.06] px-4 py-3.5">
                <a href={r.href} className="text-xs font-medium text-sky-300 underline underline-offset-2 hover:text-sky-200">
                  {r.page}
                </a>
              </td>
              <td className="border-t border-white/[0.06] px-4 py-3.5 text-sm leading-relaxed text-slate-400">{r.doThis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
