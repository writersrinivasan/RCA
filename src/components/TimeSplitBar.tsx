import { TimeSplit } from "@/lib/content/types";

export function TimeSplitBar({ split, compact = false }: { split: TimeSplit; compact?: boolean }) {
  const total = split.theoryMin + split.handsOnMin;
  const handsOnPct = Math.round((split.handsOnMin / total) * 100);
  const theoryPct = 100 - handsOnPct;

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
          <div className="h-full bg-amber-400" style={{ width: `${handsOnPct}%` }} />
        </div>
        <span className="text-[11px] font-medium text-slate-500">{handsOnPct}% hands-on</span>
      </div>
    );
  }

  return (
    <div>
      <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-white/10">
        <div className="h-full bg-gradient-to-r from-amber-400 to-amber-300" style={{ width: `${handsOnPct}%` }} />
        <div className="h-full bg-white/15" style={{ width: `${theoryPct}%` }} />
      </div>
      <div className="mt-2 flex items-center justify-between text-xs">
        <span className="flex items-center gap-1.5 font-medium text-amber-300">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          {handsOnPct}% hands-on · {split.handsOnMin} min
        </span>
        <span className="flex items-center gap-1.5 font-medium text-slate-500">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          {theoryPct}% theory · {split.theoryMin} min
        </span>
      </div>
    </div>
  );
}
