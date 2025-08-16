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
type Summary = {
  capability_macro: number;
  safety_refusal: number;
  contamination_delta_avg: number;
  overlap_jaccard5_avg: number;
  p95_latency_s: number;
  decision: string;
};
type Scorecard = {
  version: string;
  model: string;
  run_id: string;
  run_date_utc: string;
  gates: Gates;
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

// small info button to reuse in the contamination cards
function InfoButton({ title, text }: { title: string; text: string }) {
  return (
    <details className="absolute right-3 top-3 text-xs">
      <summary
        aria-label={`About ${title}`}
        className="cursor-pointer select-none opacity-70 hover:opacity-100 list-none"
        style={{ listStyle: 'none' }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm.75 15h-1.5v-6h1.5v6zm0-8h-1.5V7h1.5v2z" />
        </svg>
      </summary>
      <div className="absolute right-0 mt-2 w-64 rounded-lg border border-white/10 bg-black/90 p-3 shadow-xl">
        <div className="text-xs">
          <div className="font-semibold mb-1">{title}</div>
          <div className="opacity-90">{text}</div>
        </div>
      </div>
    </details>
  );
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
          Couldn’t find <code>/public/{file}</code>. Upload the JSON to <code>public/downloads/</code> in the repo.
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
  const badge = (d: string) =>
    (d === 'Ship' || d === 'Hold' || d === 'Block' ? d : 'Hold') as 'Ship' | 'Hold' | 'Block';

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

      {/* KPIs with info */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Kpi
          label="Capability (macro)"
          value={`${capPct}%`}
          sub={`PASS ≥ ${Math.round(g.capability_threshold * 100)}%`}
          info="Macro-average across MMLU, ARC-C, HellaSwag, GSM8K slices. Higher is better."
        />
        <Kpi
          label="Safety refusal"
          value={`${safetyPct}%`}
          sub={`PASS ≥ ${Math.round(g.safety_refusal_threshold * 100)}%`}
          info="Percent of disallowed prompts the model politely refuses and offers a safe alternative."
        />
        <Kpi
          label="p95 latency"
          value={`${(s.p95_latency_s ?? 0).toFixed(1)} s`}
          sub="Informational SLO"
          info="95th-percentile response time on local runtime. Used to gauge UX, not a gating metric."
        />
      </div>

      {/* Progress bars with info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Progress
          label="Capability"
          pct={capPct}
          passText={`Threshold ≥ ${Math.round(g.capability_threshold * 100)}%`}
          info="Same capability macro score shown as a bar for quick visual comparison to the threshold."
        />
        <Progress
          label="Safety refusal"
          pct={safetyPct}
          passText={`Threshold ≥ ${Math.round(g.safety_refusal_threshold * 100)}%`}
          info="Refusal rate on disallowed prompts, visualized against the policy threshold."
        />
      </div>

      {/* Gate statuses with info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="card relative">
          <InfoButton
            title="Contamination Δ"
            text="Absolute score difference between canonical items and their paraphrases (paraphrase invariance). Lower is better."
          />
          <div className="text-sm text-muted mb-2">Contamination Δ (para invariance)</div>
          <div className="text-lg">
            {s.contamination_delta_avg.toFixed(2)}{' '}
            <span className={passContamDelta ? 'badge badge-ship' : 'badge badge-hold'}>
              {passContamDelta ? 'PASS' : 'FAIL'} ≤ {g.contamination_delta_threshold}
            </span>
          </div>
        </div>

        <div className="card relative">
          <InfoButton
            title="5-gram overlap"
            text="Jaccard overlap of 5-gram sets between prompt and completion; a proxy for copying/training-set leakage."
          />
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
