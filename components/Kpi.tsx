// components/Kpi.tsx
export default function Kpi({
  label,
  value,
  sub,
  info,
}: {
  label: string;
  value: string;
  sub?: string;
  info?: string;
}) {
  return (
    <div className="card relative">
      {/* Info popover (click to open/close) */}
      {info && (
        <details className="absolute right-3 top-3 text-xs">
          <summary
            aria-label={`About ${label}`}
            className="cursor-pointer select-none opacity-70 hover:opacity-100 list-none"
            style={{ listStyle: 'none' }}
          >
            {/* info icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm.75 15h-1.5v-6h1.5v6zm0-8h-1.5V7h1.5v2z" />
            </svg>
          </summary>
          <div className="absolute right-0 mt-2 w-64 rounded-lg border border-white/10 bg-black/90 p-3 shadow-xl">
            <div className="text-xs">
              <div className="font-semibold mb-1">{label}</div>
              <div className="opacity-90">{info}</div>
            </div>
          </div>
        </details>
      )}

      <div className="text-sm text-muted">{label}</div>
      <div className="text-3xl font-bold mt-1">{value}</div>
      {sub && <div className="text-xs text-muted mt-1">{sub}</div>}
    </div>
  );
}
