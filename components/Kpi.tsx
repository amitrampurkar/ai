"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  label: string;
  value: string | number | React.ReactNode;
  /** Small helper text under the label (new name) */
  hint?: string;
  /** Legacy alias used elsewhere in your codebase */
  sub?: string;
  /** Optional custom info text; if not provided, we auto-fill for known home KPIs */
  info?: string;
  /** Optional stable id */
  id?: string;
};

/** Default info text for the 4 home KPIs (case-insensitive label match) */
const DEFAULT_INFO: Record<string, string> = {
  "safety refusal":
    "Model reliably refuses unsafe prompts. This is part of my shipping bar and reflects safety-first criteria.",
  "contamination flags":
    "Checks for training/test leakage (e.g., n-gram overlap, seed matches). Zero flags means no known contamination.",
  "cost / 1k tokens":
    "Target spend per 1K tokens for the reference stack. Keeps COGS predictable as we scale usage.",
  "p95 latency":
    "95th percentile end-to-end response time. Ensures worst-case UX stays within acceptable bounds at scale.",
};

export default function Kpi({ label, value, hint, sub, info, id }: Props) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // derive a stable id
  const kpiId = useMemo(
    () =>
      (id ?? label)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, ""),
    [id, label]
  );

  // auto-fill info for known home KPIs when not provided
  const infoText =
    info ?? DEFAULT_INFO[label.trim().toLowerCase()] ?? undefined;

  const helper = hint ?? sub;

  // Close when clicking outside
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Ensure only one KPI popover is open at a time
  useEffect(() => {
    const onSomeoneOpened = (e: Event) => {
      const otherId = (e as CustomEvent<string>).detail;
      if (otherId !== kpiId) setOpen(false);
    };
    window.addEventListener("kpi:open", onSomeoneOpened as EventListener);
    return () =>
      window.removeEventListener("kpi:open", onSomeoneOpened as EventListener);
  }, [kpiId]);

  const toggle = () => {
    setOpen((prev) => {
      const next = !prev;
      if (next) window.dispatchEvent(new CustomEvent("kpi:open", { detail: kpiId }));
      return next;
    });
  };

  return (
    <div ref={wrapRef} className="relative">
      {/* Keep styling neutral so existing look stays the same */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-xs font-medium text-zinc-400">{label}</div>
            {helper ? (
              <div className="text-[11px] text-zinc-500 mt-0.5">{helper}</div>
            ) : null}
          </div>

          {infoText && (
            <button
              type="button"
              aria-label={`About ${label}`}
              onClick={toggle}
              className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800"
            >
              i
            </button>
          )}
        </div>

        <div className="mt-2 text-2xl font-semibold tabular-nums text-zinc-100">
          {value}
        </div>
      </div>

      {open && infoText && (
        <div
          role="dialog"
          className="absolute right-2 top-10 z-20 w-72 rounded-xl border border-zinc-700 bg-zinc-900 p-3 text-sm text-zinc-200 shadow-xl"
        >
          {infoText}
        </div>
      )}
    </div>
  );
}
