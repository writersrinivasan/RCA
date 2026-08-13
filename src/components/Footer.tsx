import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/[0.06]">
      <Container size="wide" className="flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/5 text-slate-300">
            <GraduationCap className="h-3.5 w-3.5" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-medium text-slate-300">AI-Assisted Problem Solving &amp; Root Cause Analysis</p>
            <p className="text-xs text-slate-500">A 3-day leadership intensive · by Srinivasan Ramanujam</p>
          </div>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
          <Link href="/day/1" className="hover:text-slate-300">Day 1</Link>
          <Link href="/day/2" className="hover:text-slate-300">Day 2</Link>
          <Link href="/day/3" className="hover:text-slate-300">Day 3</Link>
          <Link href="/notes" className="hover:text-slate-300">Learn the Concepts</Link>
          <Link href="/workshop" className="hover:text-slate-300">Workshop Add-Ons</Link>
          <Link href="/prompt-library" className="hover:text-slate-300">Prompt Library</Link>
          <Link href="/case-studies" className="hover:text-slate-300">Case Studies</Link>
          <Link href="/glossary" className="hover:text-slate-300">Glossary</Link>
          <Link href="/facilitator-guide" className="hover:text-slate-300">Facilitator Guide</Link>
        </nav>
      </Container>
    </footer>
  );
}
