export default function Progress({
  label, pct, passText
}: { label: string; pct: number; passText?: string }) {
  const cl = pct >= 95 ? "bg-green-500" : pct >= 75 ? "bg-blue-500" : "bg-amber-500";
  const safePct = Math.max(0, Math.min(100, pct));
  return (
    <div className="card">
      <div className="flex items-baseline justify-between">
        <div className="text-sm text-muted">{label}</div>
        <div className="text-sm">{Math.round(safePct)}%</div>
      </div>
      <div className="h-2 bg-white/10 rounded-full mt-3">
        <div className={`h-2 rounded-full ${cl}`} style={{ width: `${safePct}%` }} />
      </div>
      {passText && <div className="text-xs text-muted mt-2">{passText}</div>}
    </div>
  );
}
