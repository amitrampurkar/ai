'use client';

import { useEffect, useState } from 'react';
import Kpi from './Kpi';
import Progress from './Progress';
import DecisionBadge from './DecisionBadge';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

type Gates = {
  capability_threshold: number;
  safety_refusal_threshold: number;
  contamination_delta_threshold: number;
  overlap_jaccard5_threshold: number;
};

type Scores = {
  mmlu?: number;
  arc_challenge?: number;
  hellaswag?: number;
  gsm8k_em?: number;
};

type Summary = {
  capability_macro: number;
  safety_refusal: number;
  contamination_delta_avg: number;
  overlap_jaccard5_avg: number;
  p95_latency_s: number;
  decision: 'Ship' | 'Hold' | 'Block' | string;
};

type Scorecard = {
  version: string;
  model: string;
  run_id: string;
  run_date_utc: string;
  gates: Gates;
  scores: Scores;
  summary: Summary;
};

export default function ScorecardClient({
  jsonUrl,
  downloads
}: {
  jsonUrl: string;
  downloads: { title: string; href: string }[];
}) {
  const [data, setData] = useState<Scorecard | null>(null);
  const [error, setError] = useState<string | null>(null);

  const resolvedJson = (BASE + jsonUrl).replace(/\/{2,}/g, '/');

  useEffect(() => {
    fetch(resolvedJson)
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((d: Scorecard) => setData(d))
      .catch(e => setError(String(e)));
  }, [resolvedJson]);

  if (error) {
    return (
      <div className="card">
        <div className="text-sm text-muted">Scorecard</div>
        <div className="mt-2">
          Couldn’t load <code>{resolvedJson}</code>. Make sure the file exists in <code>public/downloads/</code>.
        </div>
      </div>
    );
  }

  if (!data) return <div className="card">Loading scorecard…</div>;

  const s = data.summary;
  const gate = data.gates;

  const capPct = Math.round((s.capability_macro ?? 0) * 100);
  const safetyPct = Math.round((s.safety_refusal ?? 0) * 100);
  const passContamDelta = (s.contamination_delta_avg ?? 1) <= gate.contamination_delta_threshold;
  const passOverlap = (s.overlap_jaccard5_avg ?? 1) <= gate.overlap_jaccard5_threshold;

  return (
    <section className="flex flex-col gap-6">
      {/* Hero summary */}
      <div className="card">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-sm text-muted">Model</div>
            <div className="text-xl font-semibold">{data.model}</div>
            <div className="text-xs text-muted mt-1">Run: {new Date(data.run_date_utc).toUTCString()}</div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted">Decision</span>
            <DecisionBadge decision={s.decision} />
          </div>
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Kpi label="Capability (macro)" value={`${capPct}%`} sub={`PASS ≥ ${Math.round(gate.capability_threshold * 100)}%`} />
        <Kpi label="Safety refusal" value={`${safetyPct}%`} sub={`PASS ≥ ${Math.round(gate.safety_refusal_threshold * 100)}%`} />
        <Kpi label="p95 latency" value={`${(s.p95_latency_s ?? 0).toFixed(1)} s`} sub="Informational SLO" />
      </div>

      {/* Visual bars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Progress label="Capability" pct={capPct} passText={`Threshold ≥ ${Math.round(gate.capability_threshold * 100)}%`} />
        <Progress label="Safety refusal" pct={safetyPct} passText={`Threshold ≥ ${Math.round(gate.safety_refusal_threshold * 100)}%`} />
      </div>

      {/* Gate statuses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="card">
          <div className="text-sm text-muted mb-2">Contamination Δ (para invariance)</div>
          <div className="text-lg">
            {s.contamination_delta_avg.toFixed(2)}{' '}
            <span className={passContamDelta ? 'badge badge-ship' : 'badge badge-hold'}>
              {passContamDelta ? 'PASS' : 'FAIL'} ≤ {gate.contamination_delta_threshold}
            </span>
          </div>
        </div>
        <div className="card">
          <div className="text-sm text-muted mb-2">5-gram overlap (completion vs prompt)</div>
          <div className="text-lg">
            {s.overlap_jaccard5_avg.toFixed(2)}{' '}
            <span className={passOverlap ? 'badge badge-ship' : 'badge badge-hold'}>
              {passOverlap ? 'PASS' : 'FAIL'} ≤ {gate.overlap_jaccard5_threshold}
            </span>
          </div>
        </div>
      </div>

      {/* Downloads */}
      <div className="flex flex-wrap gap-3">
        {downloads.map(d => (
          <a key={d.href} className="btn" href={(BASE + d.href).replace(/\/{2,}/g, '/')} download>
            {d.title}
          </a>
        ))}
      </div>
    </section>
  );
}
