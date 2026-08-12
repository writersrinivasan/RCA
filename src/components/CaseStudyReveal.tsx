"use client";

import { useState } from "react";
import { CircleCheckBig, TriangleAlert, Eye } from "lucide-react";
import clsx from "clsx";
import { WriteUp } from "@/lib/content/caseStudies";

export function CaseStudyReveal({ writeUps }: { writeUps: WriteUp[] }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {writeUps.map((w) => (
          <div
            key={w.label}
            className={clsx(
              "relative rounded-2xl border p-5 transition-colors sm:p-6",
              revealed && w.verdict === "grounded" && "border-emerald-400/30 bg-emerald-400/[0.04]",
              revealed && w.verdict === "hallucinated" && "border-rose-400/30 bg-rose-400/[0.04]",
              !revealed && "border-white/[0.08] bg-white/[0.02]"
            )}
          >
            <div className="flex items-center justify-between">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 font-display text-sm font-bold text-white">
                {w.label}
              </span>
              {revealed && (
                <span
                  className={clsx(
                    "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
                    w.verdict === "grounded"
                      ? "bg-emerald-400/15 text-emerald-300"
                      : "bg-rose-400/15 text-rose-300"
                  )}
                >
                  {w.verdict === "grounded" ? (
                    <CircleCheckBig className="h-3.5 w-3.5" />
                  ) : (
                    <TriangleAlert className="h-3.5 w-3.5" />
                  )}
                  {w.verdict === "grounded" ? "Evidence-grounded" : "Fluent but hallucinated"}
                </span>
              )}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{w.text}</p>
          </div>
        ))}
      </div>

      {!revealed && (
        <button
          onClick={() => setRevealed(true)}
          className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-sky-300 px-6 py-3 text-sm font-semibold text-[#05070d] shadow-lg shadow-sky-500/25 transition-transform hover:scale-[1.03]"
        >
          <Eye className="h-4 w-4" />
          Reveal which one is grounded
        </button>
      )}
    </div>
  );
}
