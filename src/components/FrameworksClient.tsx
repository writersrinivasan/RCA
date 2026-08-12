"use client";

import { useState } from "react";
import { CircleCheckBig, TriangleAlert, Sparkles, UserCheck } from "lucide-react";
import clsx from "clsx";
import { frameworks } from "@/lib/content/frameworks";

export function FrameworksClient() {
  const [active, setActive] = useState(frameworks[0].slug);
  const framework = frameworks.find((f) => f.slug === active)!;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {frameworks.map((f) => (
          <button
            key={f.slug}
            onClick={() => setActive(f.slug)}
            className={clsx(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              active === f.slug
                ? "bg-gradient-to-r from-sky-400 to-sky-300 text-[#05070d]"
                : "bg-white/5 text-slate-400 hover:text-white"
            )}
          >
            {f.name}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="font-display text-2xl font-bold text-white">{framework.fullName}</h2>
          <p className="mt-2 text-sm font-medium text-sky-300">{framework.bestFor}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">{framework.howItWorks}</p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-sky-400/15 bg-sky-400/[0.04] p-4">
              <p className="flex items-center gap-1.5 text-xs font-semibold text-sky-300">
                <Sparkles className="h-3.5 w-3.5" /> Where AI helps
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{framework.aiRole}</p>
            </div>
            <div className="rounded-xl border border-amber-400/15 bg-amber-400/[0.04] p-4">
              <p className="flex items-center gap-1.5 text-xs font-semibold text-amber-300">
                <UserCheck className="h-3.5 w-3.5" /> Human checkpoint
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{framework.humanCheckpoint}</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Step by step</p>
            <ol className="mt-4 space-y-3">
              {framework.steps.map((s, i) => (
                <li key={s.step} className="glass-card flex items-start gap-4 rounded-xl p-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-semibold text-white">{s.step}</p>
                      <span
                        className={clsx(
                          "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                          s.aiAssists
                            ? "bg-sky-400/15 text-sky-300"
                            : "bg-amber-400/15 text-amber-300"
                        )}
                      >
                        {s.aiAssists ? "AI assists" : "Human sign-off"}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{s.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="space-y-5">
          <div className="glass-card rounded-2xl p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Works best when</p>
            <ul className="mt-3 space-y-2.5">
              {framework.worksBestWhen.map((w) => (
                <li key={w} className="flex items-start gap-2 text-xs leading-relaxed text-slate-300">
                  <CircleCheckBig className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-rose-400/20 bg-rose-400/[0.04] p-5">
            <p className="flex items-center gap-1.5 text-xs font-semibold text-rose-300">
              <TriangleAlert className="h-3.5 w-3.5" /> Watch out for
            </p>
            <p className="mt-2.5 text-xs leading-relaxed text-slate-300">{framework.watchOutFor}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
