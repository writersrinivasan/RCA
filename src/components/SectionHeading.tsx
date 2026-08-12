import { ReactNode } from "react";
import clsx from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={clsx(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className={clsx(
          "mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-400",
          align === "center" && "justify-center"
        )}>
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className={clsx(
          "mt-4 max-w-2xl text-base leading-relaxed text-slate-400",
          align === "center" && "mx-auto"
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
