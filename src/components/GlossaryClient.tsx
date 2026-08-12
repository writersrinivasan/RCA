"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import clsx from "clsx";
import { glossary, glossaryCategories, GlossaryTerm } from "@/lib/content/glossary";
import { Pill } from "./Pill";

const categoryTone: Record<GlossaryTerm["category"], "sky" | "amber" | "emerald" | "rose" | "indigo"> = {
  "Core Concepts": "sky",
  "Governance & Risk": "rose",
  "AI Tools": "amber",
  "Observability Platforms": "indigo",
  "RCA Frameworks": "emerald",
};

export function GlossaryClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return glossary.filter((t) => {
      if (category && t.category !== category) return false;
      if (!q) return true;
      return t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q);
    });
  }, [query, category]);

  return (
    <div>
      <div className="glass-card sticky top-20 z-10 rounded-2xl p-4 sm:p-5">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms — e.g. &ldquo;PII&rdquo;, &ldquo;Splunk&rdquo;, &ldquo;hallucination&rdquo;..."
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none focus:border-sky-400/40"
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={() => setCategory(null)}
            className={clsx(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              !category ? "bg-sky-400 text-[#05070d]" : "bg-white/5 text-slate-400 hover:text-white"
            )}
          >
            All
          </button>
          {glossaryCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c === category ? null : c)}
              className={clsx(
                "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                category === c ? "bg-sky-400 text-[#05070d]" : "bg-white/5 text-slate-400 hover:text-white"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {filtered.map((t) => (
          <div key={t.term} className="glass-card rounded-2xl p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-base font-semibold text-white">{t.term}</h3>
              <Pill tone={categoryTone[t.category]} className="shrink-0">{t.category}</Pill>
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-300">{t.definition}</p>
            <div className="mt-3 border-t border-white/[0.06] pt-3">
              <p className="text-xs leading-relaxed text-slate-500">
                <span className="font-semibold text-slate-400">For leaders: </span>
                {t.leaderNote}
              </p>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="glass-card col-span-full rounded-2xl p-10 text-center">
            <p className="text-sm text-slate-400">No terms match &ldquo;{query}&rdquo;.</p>
          </div>
        )}
      </div>
    </div>
  );
}
