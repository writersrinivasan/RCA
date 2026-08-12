import { ReactNode } from "react";
import clsx from "clsx";

const tones = {
  sky: "bg-sky-400/10 text-sky-300 ring-1 ring-inset ring-sky-400/20",
  amber: "bg-amber-400/10 text-amber-300 ring-1 ring-inset ring-amber-400/20",
  emerald: "bg-emerald-400/10 text-emerald-300 ring-1 ring-inset ring-emerald-400/20",
  rose: "bg-rose-400/10 text-rose-300 ring-1 ring-inset ring-rose-400/20",
  slate: "bg-white/5 text-slate-300 ring-1 ring-inset ring-white/10",
  indigo: "bg-indigo-400/10 text-indigo-300 ring-1 ring-inset ring-indigo-400/20",
};

export function Pill({
  children,
  tone = "slate",
  className,
  icon,
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        tones[tone],
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}
