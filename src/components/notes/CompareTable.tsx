export function CompareTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: { label: string; cells: string[] }[];
}) {
  return (
    <div className="my-4 overflow-x-auto rounded-2xl border border-white/[0.08]">
      <table className="w-full min-w-[560px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-white/[0.04]">
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              &nbsp;
            </th>
            {columns.map((c) => (
              <th key={c} className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.label} className={i % 2 === 0 ? "bg-transparent" : "bg-white/[0.015]"}>
              <td className="border-t border-white/[0.06] px-4 py-3.5 text-sm font-semibold text-white">
                {r.label}
              </td>
              {r.cells.map((cell, j) => (
                <td key={j} className="border-t border-white/[0.06] px-4 py-3.5 text-sm leading-relaxed text-slate-400">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
