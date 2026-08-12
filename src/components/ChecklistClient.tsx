"use client";

import { useEffect, useState } from "react";
import { RotateCcw, ShieldCheck, Database, MessagesSquare } from "lucide-react";
import clsx from "clsx";
import { allChecklists } from "@/lib/content/checklist";

const STORAGE_KEY = "ai-rca-academy-checklist-v1";
const sectionIcons = [ShieldCheck, Database, MessagesSquare];

export function ChecklistClient() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // One-time hydration from localStorage on mount — server has no
      // access to it, so this necessarily happens after the first paint.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      // ignore
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      // ignore
    }
  }, [checked, loaded]);

  const totalItems = allChecklists.reduce((n, s) => n + s.items.length, 0);
  const totalChecked = Object.values(checked).filter(Boolean).length;

  function toggle(id: string) {
    setChecked((c) => ({ ...c, [id]: !c[id] }));
  }

  function reset() {
    setChecked({});
  }

  return (
    <div>
      <div className="glass-card sticky top-20 z-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl p-5">
        <div className="flex-1 min-w-[220px]">
          <div className="flex items-center justify-between text-xs font-medium text-slate-400">
            <span>{totalChecked} of {totalItems} checks run</span>
            <span>{Math.round((totalChecked / totalItems) * 100)}%</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sky-400 to-amber-300 transition-all duration-500"
              style={{ width: `${(totalChecked / totalItems) * 100}%` }}
            />
          </div>
        </div>
        <button
          onClick={reset}
          className="flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:bg-white/5"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Reset
        </button>
      </div>

      <div className="mt-8 space-y-10">
        {allChecklists.map((section, si) => {
          const Icon = sectionIcons[si] ?? ShieldCheck;
          const sectionChecked = section.items.filter((it) => checked[it.id]).length;
          return (
            <div key={section.slug}>
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-display text-lg font-semibold text-white">{section.title}</h2>
                    <span className="text-xs font-medium text-slate-500">
                      {sectionChecked}/{section.items.length}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">{section.subtitle}</p>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {section.items.map((item) => {
                  const isChecked = !!checked[item.id];
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggle(item.id)}
                      className={clsx(
                        "flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-colors",
                        isChecked
                          ? "border-emerald-400/30 bg-emerald-400/[0.05]"
                          : "border-white/[0.08] bg-white/[0.02] hover:border-white/20"
                      )}
                    >
                      <span
                        className={clsx(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors",
                          isChecked ? "border-emerald-400 bg-emerald-400" : "border-slate-600"
                        )}
                      >
                        {isChecked && (
                          <svg viewBox="0 0 12 12" className="h-3 w-3 fill-none stroke-[#05070d] stroke-2">
                            <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      <div>
                        <p className={clsx("text-sm font-semibold", isChecked ? "text-emerald-200" : "text-white")}>
                          {item.check}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.question}</p>
                        <p className="mt-2 text-xs leading-relaxed text-slate-500">
                          <span className="font-semibold text-rose-300/80">If it fails: </span>
                          {item.failMeans}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
