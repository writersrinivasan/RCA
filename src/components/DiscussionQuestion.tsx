"use client";

import { useState } from "react";
import { LifeBuoy, ChevronDown } from "lucide-react";
import clsx from "clsx";

export function DiscussionQuestion({ question, ifStuck }: { question: string; ifStuck: string }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="rounded-xl border border-amber-400/10 bg-black/10 p-4">
      <p className="text-sm leading-relaxed text-slate-200">— {question}</p>
      <button
        onClick={() => setOpen((v) => !v)}
        className={clsx(
          "mt-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
          open ? "bg-amber-400/15 text-amber-200" : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
        )}
      >
        <LifeBuoy className="h-3.5 w-3.5" />
        {open ? "Hide suggested answer" : "If the room's stuck…"}
        <ChevronDown className={clsx("h-3 w-3 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="mt-3 rounded-lg border border-amber-400/15 bg-amber-400/[0.05] p-3.5">
          <p className="text-xs leading-relaxed text-amber-50/90">{ifStuck}</p>
        </div>
      )}
    </li>
  );
}
