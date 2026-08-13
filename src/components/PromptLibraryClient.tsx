"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  Lightbulb,
  Clock,
  ShieldCheck,
  FileText,
  Megaphone,
  ArrowRight,
  CalendarDays,
  Route,
  ShieldAlert,
  Gauge,
  UserCheck,
  Workflow,
  BadgeCheck,
} from "lucide-react";
import clsx from "clsx";
import { promptCategories } from "@/lib/content/prompts";
import { getModule } from "@/lib/content/curriculum";
import { days } from "@/lib/content/days";
import { PromptCard } from "./PromptCard";
import { Pill } from "./Pill";

const iconMap = {
  Lightbulb,
  Clock,
  ShieldCheck,
  FileText,
  Megaphone,
  Search,
  Route,
  ShieldAlert,
  Gauge,
  UserCheck,
  Workflow,
  BadgeCheck,
};

const dayTone = { 1: "sky", 2: "amber", 3: "emerald" } as const;

function categoryDay(moduleLink: string): 1 | 2 | 3 | null {
  return getModule(moduleLink)?.day ?? null;
}

export function PromptLibraryClient() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeDay, setActiveDay] = useState<1 | 2 | 3 | null>(null);

  const agenda = useMemo(() => {
    return days.map((d) => {
      const cats = promptCategories.filter((c) => categoryDay(c.moduleLink) === d.day);
      return {
        day: d.day,
        title: d.title,
        subtitle: d.subtitle,
        categories: cats,
        promptCount: cats.reduce((n, c) => n + c.prompts.length, 0),
      };
    });
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return promptCategories
      .filter((c) => !activeCategory || c.slug === activeCategory)
      .filter((c) => !activeDay || categoryDay(c.moduleLink) === activeDay)
      .map((cat) => ({
        ...cat,
        prompts: cat.prompts.filter((p) => {
          if (!q) return true;
          return (
            p.title.toLowerCase().includes(q) ||
            p.useCase.toLowerCase().includes(q) ||
            p.whenToUse.toLowerCase().includes(q) ||
            p.promptText.toLowerCase().includes(q)
          );
        }),
      }))
      .filter((c) => c.prompts.length > 0);
  }, [query, activeCategory, activeDay]);

  const totalShown = filtered.reduce((n, c) => n + c.prompts.length, 0);

  function jumpToDay(day: 1 | 2 | 3) {
    setActiveDay(day === activeDay ? null : day);
    setActiveCategory(null);
  }

  return (
    <div>
      {/* DAY-WISE AGENDA OVERVIEW */}
      <div className="mb-8">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          <CalendarDays className="h-3.5 w-3.5" /> Where these fit in the 3-day agenda
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {agenda.map((d) => (
            <button
              key={d.day}
              onClick={() => jumpToDay(d.day as 1 | 2 | 3)}
              className={clsx(
                "glass-card glass-card-hover rounded-2xl p-5 text-left transition-colors",
                activeDay === d.day && "border-sky-400/40 bg-sky-400/[0.04]"
              )}
            >
              <div className="flex items-center justify-between">
                <Pill tone={dayTone[d.day as 1 | 2 | 3]}>Day {d.day} · {d.title}</Pill>
                <span className="text-xs font-medium text-slate-500">
                  {d.promptCount} prompt{d.promptCount === 1 ? "" : "s"}
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">{d.subtitle}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {d.categories.length === 0 && (
                  <span className="text-xs italic text-slate-600">No dedicated templates this day</span>
                )}
                {d.categories.map((c) => (
                  <span key={c.slug} className="rounded-full bg-white/5 px-2 py-1 text-[11px] font-medium text-slate-300">
                    {c.name}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="glass-card sticky top-20 z-10 rounded-2xl p-4 sm:p-5">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search prompts — e.g. &ldquo;timeline&rdquo;, &ldquo;customer update&rdquo;, &ldquo;query&rdquo;..."
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none focus:border-sky-400/40"
          />
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Day</span>
          <button
            onClick={() => setActiveDay(null)}
            className={clsx(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              !activeDay ? "bg-sky-400 text-[#05070d]" : "bg-white/5 text-slate-400 hover:text-white"
            )}
          >
            All days
          </button>
          {days.map((d) => (
            <button
              key={d.day}
              onClick={() => setActiveDay(d.day === activeDay ? null : d.day)}
              className={clsx(
                "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                activeDay === d.day ? "bg-sky-400 text-[#05070d]" : "bg-white/5 text-slate-400 hover:text-white"
              )}
            >
              Day {d.day}
            </button>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-white/[0.06] pt-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Category</span>
          <button
            onClick={() => setActiveCategory(null)}
            className={clsx(
              "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              !activeCategory ? "bg-sky-400 text-[#05070d]" : "bg-white/5 text-slate-400 hover:text-white"
            )}
          >
            All categories
          </button>
          {promptCategories.map((c) => (
            <button
              key={c.slug}
              onClick={() => setActiveCategory(c.slug === activeCategory ? null : c.slug)}
              className={clsx(
                "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                activeCategory === c.slug ? "bg-sky-400 text-[#05070d]" : "bg-white/5 text-slate-400 hover:text-white"
              )}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-xs font-medium text-slate-500">
        Showing {totalShown} prompt{totalShown === 1 ? "" : "s"}
      </p>

      <div className="mt-6 space-y-14">
        {filtered.map((cat) => {
          const Icon = iconMap[cat.icon as keyof typeof iconMap] ?? Lightbulb;
          const day = categoryDay(cat.moduleLink);
          return (
            <div key={cat.slug}>
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/[0.06] pb-4">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-semibold text-white">{cat.name}</h2>
                    <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-400">{cat.description}</p>
                  </div>
                </div>
                <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
                  {day && <Pill tone={dayTone[day]}>Day {day}</Pill>}
                  <ModuleLinkPill slug={cat.moduleLink} />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
                {cat.prompts.map((p) => (
                  <PromptCard key={p.slug} prompt={p} />
                ))}
              </div>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="glass-card rounded-2xl p-10 text-center">
            <p className="text-sm text-slate-400">No prompts match your filters. Try clearing the day, category, or search term.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ModuleLinkPill({ slug }: { slug: string }) {
  const mod = getModule(slug);
  const href = mod ? `/day/${mod.day}/${mod.slug}` : "/";
  return (
    <Link href={href} className="shrink-0">
      <Pill tone="slate" icon={<ArrowRight className="h-3 w-3" />}>
        {mod ? `From ${mod.code}` : "From the curriculum"}
      </Pill>
    </Link>
  );
}
