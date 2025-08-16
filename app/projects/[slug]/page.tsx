// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

import DecisionBadge from '@/components/DecisionBadge';
import ScorecardStatic from '@/components/ScorecardStatic';
import { getProject, getProjects } from '@/lib/content';

export async function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

function readProjectMd(slug: string) {
  const p = path.join(process.cwd(), 'content', 'projects', `${slug}.md`);
  if (fs.existsSync(p)) return fs.readFileSync(p, 'utf8');
  return null;
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) return notFound();

  const md = readProjectMd(params.slug);

  const Header = (
    <header className="flex items-start justify-between gap-4 mb-6">
      <h1 className="text-3xl font-bold">{p.title}</h1>
      <DecisionBadge decision={p.decision} />
    </header>
  );

  if (p.slug === 'eval-harness-contamination') {
    const downloads = [
      { title: 'Scorecard (JSON)', href: '/ai/downloads/scorecard_llama3_local.json' },
      { title: 'Run log (MD)', href: '/ai/downloads/experiment_log.md' },
      { title: 'Gate rubric (MD)', href: '/ai/downloads/ship_hold_gates.md' },
    ];

    return (
      <article className="flex flex-col gap-12">
        {/* more gap between sections ↑ */}
        {Header}

        {/* TL;DR card */}
        <section className="card">
          <div className="text-sm text-muted mb-3">TL;DR for recruiters</div>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>
              <strong>Shipped gates</strong> across capability, safety, contamination with a clear <em>Ship</em> decision.
            </li>
            <li>
              <strong>Local model, zero cost</strong>: Llama-3 8B via Ollama; latency measured, results logged.
            </li>
            <li>
              <strong>Paper trail</strong>: machine-readable scorecard + run log (download below).
            </li>
          </ul>
        </section>

        {/* Dashboard */}
        <ScorecardStatic file="downloads/scorecard_llama3_local.json" downloads={downloads} />

        {/* Case-study write-up with added spacing */}
        {md && (
          <div
            className="
              prose prose-invert max-w-none leading-relaxed
              [&>*]:my-6           /* vertical space between direct children */
              [&_h2]:mt-12 [&_h2]:mb-4
              [&_h3]:mt-8  [&_h3]:mb-3
              [&_ul]:my-4  [&_ol]:my-4
              "
            dangerouslySetInnerHTML={{ __html: marked.parse(md) as string }}
          />
        )}
      </article>
    );
  }

  // default layout for other projects
  return (
    <article className="flex flex-col gap-12">
      {Header}
      {md ? (
        <div
          className="
            prose prose-invert max-w-none leading-relaxed
            [&>*]:my-6
            [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:mt-8  [&_h3]:mb-3
            [&_ul]:my-4  [&_ol]:my-4
          "
          dangerouslySetInnerHTML={{ __html: marked.parse(md) as string }}
        />
      ) : (
        <p className="text-muted">No write-up yet.</p>
      )}
    </article>
  );
}
