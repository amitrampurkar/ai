'use client';

import { useEffect, useState } from 'react';
import Kpi from './Kpi';
import Progress from './Progress';
import DecisionBadge from './DecisionBadge';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || ''; // <-- add

type Scorecard = { /* unchanged */ };

export default function ScorecardClient({
  jsonUrl,
  downloads
}: {
  jsonUrl: string;
  downloads: { title: string; href: string }[];
}) {
  const [data, setData] = useState<Scorecard | null>(null);
  const [error, setError] = useState<string | null>(null);

  const resolvedJson = (BASE + jsonUrl).replace(/\/{2,}/g, '/'); // <-- add

  useEffect(() => {
    fetch(resolvedJson)
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(setData)
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
  const passContamDelta = s.contamination_delta_avg <= gate.contamination_delta_threshold;
  const passOverlap = s.overlap_jaccard5_avg <= gate.overlap_jaccard5_threshold;

  return (
    <section className="flex flex-col gap-6">
      {/* hero + KPIs unchanged ... */}

      {/* Download row */}
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
