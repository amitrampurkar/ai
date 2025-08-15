'use client';

import { useEffect, useState } from 'react';
import Kpi from './Kpi';
import Progress from './Progress';
import DecisionBadge from './DecisionBadge';

type Scorecard = {
  version: string;
  model: string;
  run_id: string;
  run_date_utc: string;
  gates: {
    capability_threshold: number;
    safety_refusal_threshold: number;
    contamination_delta_threshold: number;
    overlap_jaccard5_threshold: number;
  };
  scores: {
    mmlu?: number;
    arc_challenge?: number;
    hellaswag?: number;
    gsm8k_em?: number;
  };
  summary: {
    capability_macro: number;
    safety_refusal: number;
    contamination_delta_avg: number;
    overlap_jaccard5_avg: number;
    p95_latency_s: number;
    decision: 'Ship' | 'Hold' | 'Block';
  };
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

  useEffect(() => {
    fetch(jsonUrl)
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(setData)
      .catch(e => setError(String(e)));
  }, [jsonUrl]);

  if (error) {
    // Graceful fallback if the file hasn't been uploaded yet
    return (
      <div className="card">
        <div className="text-sm text-muted">Scorecard</div>
        <div className="mt-2">Upload the file <code>{jsonUrl}</code> to <code>public/downloads/</code> to show the dashboard.</div>
      </div>
    );
  }

  if (!data) return <div className="card">Loading scorecard…</div>;

  const s = data.summary;
  const gate = data.gates;
  const passContamDelta = s.contamination_delta_avg <= gate.contamination_delta_threshold;
  const passOverlap = s.overlap_jaccard5_avg <= gate.overlap_jaccard5_threshold;

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
        <Kpi label="Capability (macro)" value={(s.capability_macro*100).toFixed(0) + '%'}
             sub={`PASS ≥ ${(gate.capability_threshold*100).toFixed(0)}%`} />
        <Kpi label="Safety refusal" value={(s.safety_refusal*100).toFixed(0) + '%'}
             sub={`PASS ≥ ${(gate.safety_refusal_threshold*100).toFixed(0)}%`} />
        <Kpi label="p95 latency" value={s.p95_latency_s.toFixed(1) + ' s'} sub="Informational SLO" />
      </div>

      {/* Visual bars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Progress label="Capability" pct={s.capability_macro*100}
                  passText={`Threshold ≥ ${(gate.capability_threshold*100).toFixed(0)}%`} />
        <Progress label="Safety refusal" pct={s.safety_refusal*100}
                  passText={`Threshold ≥ ${(gate.safety_refusal_threshold*100).toFixed(0)}%`} />
      </div>

      {/* Gate statuses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="card">
          <div className="text-sm text-muted mb-2">Contamination Δ (para invariance)</div>
          <div className="text-lg">
            {s.contamination_delta_avg.toFixed(2)} &nbsp;
            <span className={passContamDelta ? "badge badge-ship" : "badge badge-hold"}>
              {passContamDelta ? "PASS" : "FAIL"} ≤ {gate.contamination_delta_threshold}
            </span>
          </div>
        </div>
        <div className="card">
          <div className="text-sm text-muted mb-2">5-gram overlap (completion vs prompt)</div>
          <div className="text-lg">
            {s.overlap_jaccard5_avg.toFixed(2)} &nbsp;
            <span className={passOverlap ? "badge badge-ship" : "badge badge-hold"}>
              {passOverlap ? "PASS" : "FAIL"} ≤ {gate.overlap_jaccard5_threshold}
            </span>
          </div>
        </div>
      </div>

      {/* Download row */}
      <div className="flex flex-wrap gap-3">
        {downloads.map(d => (
          <a key={d.href} className="btn" href={d.href} download>{d.title}</a>
        ))}
      </div>
    </section>
  );
}
