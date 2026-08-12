"use client";

import { useState } from "react";
import { ChevronDown, CircleCheckBig, TriangleAlert } from "lucide-react";
import clsx from "clsx";
import { CopyButton } from "./CopyButton";
import { PromptTemplate } from "@/lib/content/prompts";

export function PromptCard({ prompt }: { prompt: PromptTemplate }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass-card overflow-hidden rounded-2xl">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
      >
        <div>
          <h3 className="font-display text-base font-semibold text-white">{prompt.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{prompt.useCase}</p>
          <p className="mt-2 text-xs leading-relaxed text-slate-500">
            <span className="font-semibold text-slate-400">When to use it: </span>
            {prompt.whenToUse}
          </p>
        </div>
        <ChevronDown
          className={clsx(
            "mt-1 h-4.5 w-4.5 shrink-0 text-slate-500 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div className="border-t border-white/[0.06] p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Prompt template</p>
            <CopyButton text={prompt.promptText} />
          </div>
          <pre className="mt-3 whitespace-pre-wrap rounded-xl border border-white/[0.06] bg-black/30 p-4 font-mono text-[13px] leading-relaxed text-slate-300">
{prompt.promptText}
          </pre>

          {prompt.tips.length > 0 && (
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Facilitator tips</p>
              <ul className="mt-2 space-y-1.5">
                {prompt.tips.map((t) => (
                  <li key={t} className="text-sm leading-relaxed text-slate-400">· {t}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/[0.04] p-3.5">
              <p className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300">
                <CircleCheckBig className="h-3.5 w-3.5" /> Good output looks like
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-300">{prompt.goodOutputLooksLike}</p>
            </div>
            <div className="rounded-xl border border-rose-400/15 bg-rose-400/[0.04] p-3.5">
              <p className="flex items-center gap-1.5 text-xs font-semibold text-rose-300">
                <TriangleAlert className="h-3.5 w-3.5" /> Red flag
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-300">{prompt.redFlag}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
