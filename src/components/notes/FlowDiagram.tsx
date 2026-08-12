import { ReactNode } from "react";
import { ArrowRight, ArrowDown, CornerUpLeft } from "lucide-react";
import clsx from "clsx";

export type FlowStepData = {
  title: string;
  detail?: string;
  tone?: "sky" | "amber" | "emerald" | "rose" | "slate";
};

const toneClasses: Record<string, string> = {
  sky: "border-sky-400/25 bg-sky-400/[0.05]",
  amber: "border-amber-400/25 bg-amber-400/[0.05]",
  emerald: "border-emerald-400/25 bg-emerald-400/[0.05]",
  rose: "border-rose-400/25 bg-rose-400/[0.05]",
  slate: "border-white/10 bg-white/[0.03]",
};

function StepBox({ step, index }: { step: FlowStepData; index: number }) {
  return (
    <div
      className={clsx(
        "flex min-w-[150px] flex-1 flex-col rounded-xl border p-4",
        toneClasses[step.tone ?? "slate"]
      )}
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[11px] font-bold text-white">
        {index + 1}
      </span>
      <p className="mt-2.5 text-sm font-semibold leading-snug text-white">{step.title}</p>
      {step.detail && (
        <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{step.detail}</p>
      )}
    </div>
  );
}

export function FlowDiagram({
  steps,
  loopBack,
}: {
  steps: FlowStepData[];
  loopBack?: { fromIndex: number; toIndex: number; label: string };
}) {
  return (
    <div className="my-2">
      <div className="flex flex-col items-stretch gap-0 lg:flex-row lg:items-center">
        {steps.map((step, i) => (
          <div key={step.title} className="flex flex-col items-center lg:flex-1 lg:flex-row">
            <StepBox step={step} index={i} />
            {i < steps.length - 1 && (
              <>
                <ArrowDown className="my-1.5 h-4 w-4 shrink-0 text-slate-600 lg:hidden" />
                <ArrowRight className="mx-1.5 hidden h-4 w-4 shrink-0 text-slate-600 lg:block" />
              </>
            )}
          </div>
        ))}
      </div>
      {loopBack && (
        <div className="mt-3 flex items-start gap-2 rounded-lg border border-dashed border-amber-400/30 bg-amber-400/[0.04] px-3.5 py-2.5">
          <CornerUpLeft className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-300" />
          <p className="text-xs leading-relaxed text-amber-100/80">
            <span className="font-semibold text-amber-300">If it fails: </span>
            {loopBack.label}
          </p>
        </div>
      )}
    </div>
  );
}

export function InlineArrow() {
  return <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-600" />;
}

export function BoxRow({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center gap-2">{children}</div>;
}
