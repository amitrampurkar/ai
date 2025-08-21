import Link from 'next/link';
import DecisionBadge from './DecisionBadge';

export type Project = {
  slug: string;
  title: string;
  summary: string;
  pillars: string[];
  metrics?: Record<string, number>;
  decision: 'Ship' | 'Hold' | 'Block';
};

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="card h-full flex flex-col gap-3">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold">{p.title}</h3>
        <DecisionBadge decision={p.decision} />
      </div>

      <p className="text-muted">{p.summary}</p>
      <div className="text-sm text-muted">Pillars: {p.pillars.join(', ')}</div>

      {/* Bottom-left CTA, content-width, with spacing above */}
      <div className="mt-auto pt-4 self-start">
        <Link className="btn" href={`/projects/${p.slug}`}>
          Read case study →
        </Link>
      </div>
    </div>
  );
}
