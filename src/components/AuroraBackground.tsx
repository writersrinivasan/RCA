export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] overflow-hidden">
      <div className="aurora-blob absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-sky-500/20 blur-[120px]" />
      <div
        className="aurora-blob absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-[120px]"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="aurora-blob absolute left-1/3 top-52 h-[380px] w-[380px] rounded-full bg-indigo-500/15 blur-[120px]"
        style={{ animationDelay: "-11s" }}
      />
      <div className="grain-overlay" />
    </div>
  );
}
