// components/ScorecardStatic.tsx
import fs from 'fs';
import path from 'path';
import Kpi from './Kpi';
import Progress from './Progress';
import DecisionBadge from './DecisionBadge';

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
  decision: string; // normalize below
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

function readScorecard(relativeToPublic: string): Scorecard | null {
  try {
    const p = path.join(process.cwd(), 'public', relativeToPublic);
    const txt = fs.readFileSync(p, 'utf8');
    return JSON.parse(txt) as Scorecard;
  } catch {
    return null;
  }
}

export default function ScorecardStatic({
  file, // e.g. "downloads/scorecard_llama3_local.json"
  downloads,
}: {
  file: string;
  downloads: { title: string; href: string }[];
}) {
  const data = readScorecard(file);

  if (!data) {
    return (
      <div className="card">
        <div className="text-sm text-muted">Scorecard</div>
        <div className="mt-2">
          Couldn’t find <code>/public/{file}</code>. Upload the JSON to{' '}
          <code>public/downloads/</code> in the repo.
        </div>
      </div>
    );
  }

  const s = data.summary;
  const g = data.gates;

  const toPct = (x: number) => Math.round((x ?? 0) * 100);
  const capPct = toPct(s.capability_macro);
  const safetyPct = toPct(s.safety_refusal);
  const passContamDelta = s.contamination_delta_avg <= g.contamination_delta_threshold;
  const passOverlap = s.overlap_jaccard5_avg <= g.overlap_jaccard5_threshold;

  const badge = (d: string) => (d === 'Ship' || d === 'Hold' || d === 'Block' ? d : 'Hold') as
    | 'Ship'
    | 'Hold'
    | 'Block';

  return (
    <section className="flex flex-col gap-6">
      {/* Hero */}
      <div className="card">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-sm text-muted">Model</div>
            <div className="text-xl font-semibold">{data.model}</div>
            <div className="text-xs text-muted mt-1">Run: {new Date(data.run_date_utc).toUTCString()}</div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted">Decision</span>
            <DecisionBadge decision={badge(s.decision)} />
          </div>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Kpi
          label="Capability (macro)"
          value={`${capPct}%`}
          sub={`PASS ≥ ${Math.round(g.capability_threshold * 100)}%`}
        />
        <Kpi
          label="Safety refusal"
          value={`${safetyPct}%`}
          sub={`PASS ≥ ${Math.round(g.safety_refusal_threshold * 100)}%`}
        />
        <Kpi label="p95 latency" value={`${(s.p95_latency_s ?? 0).toFixed(1)} s`} sub="Informational SLO" />
      </div>

      {/* Progress bars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Progress label="Capability" pct={capPct} passText={`Threshold ≥ ${Math.round(g.capability_threshold * 100)}%`} />
        <Progress label="Safety refusal" pct={safetyPct} passText={`Threshold ≥ ${Math.round(g.safety_refusal_threshold * 100)}%`} />
      </div>

      {/* Gate statuses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="card">
          <div className="text-sm text-muted mb-2">Contamination Δ (para invariance)</div>
          <div className="text-lg">
            {s.contamination_delta_avg.toFixed(2)}{' '}
            <span className={passContamDelta ? 'badge badge-ship' : 'badge badge-hold'}>
              {passContamDelta ? 'PASS' : 'FAIL'} ≤ {g.contamination_delta_threshold}
            </span>
          </div>
        </div>
        <div className="card">
          <div className="text-sm text-muted mb-2">5-gram overlap (completion vs prompt)</div>
          <div className="text-lg">
            {s.overlap_jaccard5_avg.toFixed(2)}{' '}
            <span className={passOverlap ? 'badge badge-ship' : 'badge badge-hold'}>
              {passOverlap ? 'PASS' : 'FAIL'} ≤ {g.overlap_jaccard5_threshold}
            </span>
          </div>
        </div>
      </div>

      {/* Downloads */}
      <div className="flex flex-wrap gap-3">
        {downloads.map((d) => (
          <a key={d.href} className="btn" href={d.href} download>
            {d.title}
          </a>
        ))}
      </div>
    </section>
  );
}
