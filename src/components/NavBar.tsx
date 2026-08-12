"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  Menu,
  X,
  GraduationCap,
  Library,
  ListChecks,
  BookOpenCheck,
  Route,
  NotebookPen,
  Presentation,
  ChevronDown,
} from "lucide-react";
import { Container } from "./Container";

const dayLinks = [
  { href: "/day/1", label: "Day 1" },
  { href: "/day/2", label: "Day 2" },
  { href: "/day/3", label: "Day 3" },
];

const resourceLinks = [
  { href: "/notes", label: "Learn the Concepts", icon: NotebookPen },
  { href: "/prompt-library", label: "Prompt Library", icon: Library },
  { href: "/case-studies", label: "Case Studies", icon: BookOpenCheck },
  { href: "/frameworks", label: "Frameworks", icon: Route },
  { href: "/checklist", label: "Checklist", icon: ListChecks },
  { href: "/glossary", label: "Glossary", icon: GraduationCap },
  { href: "/facilitator-guide", label: "Facilitator Guide", icon: Presentation },
];

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const anyResourceActive = resourceLinks.some((l) => isActive(l.href));

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#05070d]/80 backdrop-blur-xl">
      <Container size="wide">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-amber-300 text-[#05070d] shadow-lg shadow-sky-500/20 transition-transform group-hover:scale-105">
              <GraduationCap className="h-4.5 w-4.5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-sm font-semibold tracking-tight text-white sm:text-base">
              AI-RCA Academy
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {dayLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                  isActive(l.href)
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:text-white"
                )}
              >
                {l.label}
              </Link>
            ))}
            <span className="mx-2 h-5 w-px bg-white/10" />

            <div className="relative" ref={resourcesRef}>
              <button
                onClick={() => setResourcesOpen((v) => !v)}
                className={clsx(
                  "flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                  anyResourceActive || resourcesOpen
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:text-white"
                )}
              >
                Resources
                <ChevronDown className={clsx("h-3.5 w-3.5 transition-transform", resourcesOpen && "rotate-180")} />
              </button>

              {resourcesOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl border border-white/10 bg-[#0c1220] p-1.5 shadow-2xl shadow-black/40">
                  {resourceLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setResourcesOpen(false)}
                      className={clsx(
                        "flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                        isActive(l.href)
                          ? "bg-white/10 text-white"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      <l.icon className="h-4 w-4 shrink-0 text-slate-500" />
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-white/[0.06] bg-[#05070d] lg:hidden">
          <Container size="wide" className="flex flex-col gap-1 py-4">
            <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Curriculum
            </p>
            {dayLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "rounded-lg px-3 py-2 text-sm font-medium",
                  isActive(l.href) ? "bg-white/10 text-white" : "text-slate-300"
                )}
              >
                {l.label}
              </Link>
            ))}
            <p className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Resources
            </p>
            {resourceLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium",
                  isActive(l.href) ? "bg-white/10 text-white" : "text-slate-300"
                )}
              >
                <l.icon className="h-4 w-4" />
                {l.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
