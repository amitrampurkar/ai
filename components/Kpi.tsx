"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  label: string;
  value: string | number | React.ReactNode;
  hint?: string;   // helper text under label
  sub?: string;    // legacy alias
  info?: string;   // explicit info text
  id?: string;     // optional stable id
};

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

  const kpiId = useMemo(
    () =>
      (id ?? label)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, ""),
    [id, label]
  );

  const infoText = info ?? DEFAULT_INFO[label.trim().toLowerCase()];
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

  // Only one popover open at a time
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
      <div className="relative rounded-xl border border-zinc-800 bg-zinc-900 p-4 shadow-sm">
        {/* top-right smaller info icon */}
        {infoText && (
          <button
            type="button"
            aria-label={`About ${label}`}
            onClick={toggle}
            className="absolute top-3 right-3 inline-flex h-5 w-5 items-center justify-center rounded-full border border-zinc-700 text-zinc-300 hover:bg-zinc-800"
          >
            i
          </button>
        )}

        <div className="min-w-0">
          <div className="text-xs font-medium text-zinc-400">{label}</div>
          {helper ? (
            <div className="text-[11px] text-zinc-500 mt-0.5">{helper}</div>
          ) : null}
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
