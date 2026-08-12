import { ReactNode } from "react";
import { Lightbulb, MapPin, TriangleAlert } from "lucide-react";
import clsx from "clsx";

const variants = {
  analogy: {
    icon: Lightbulb,
    label: "Think of it like this",
    classes: "border-indigo-400/25 bg-indigo-400/[0.05]",
    labelColor: "text-indigo-300",
  },
  example: {
    icon: MapPin,
    label: "Real-world example",
    classes: "border-amber-400/25 bg-amber-400/[0.05]",
    labelColor: "text-amber-300",
  },
  warning: {
    icon: TriangleAlert,
    label: "Common confusion",
    classes: "border-rose-400/25 bg-rose-400/[0.05]",
    labelColor: "text-rose-300",
  },
};

export function Callout({
  type,
  children,
  title,
}: {
  type: keyof typeof variants;
  children: ReactNode;
  title?: string;
}) {
  const v = variants[type];
  return (
    <div className={clsx("my-4 rounded-2xl border p-5", v.classes)}>
      <p className={clsx("flex items-center gap-2 text-xs font-semibold uppercase tracking-wider", v.labelColor)}>
        <v.icon className="h-3.5 w-3.5" />
        {title ?? v.label}
      </p>
      <div className="mt-2.5 text-sm leading-relaxed text-slate-300">{children}</div>
    </div>
  );
}
