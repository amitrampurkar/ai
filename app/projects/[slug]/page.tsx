import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import DecisionBadge from '@/components/DecisionBadge';
import { getProject, getProjects } from '@/lib/content';
import dynamic from 'next/dynamic';

const ScorecardClient = dynamic(() => import('@/components/ScorecardClient'), { ssr: false });

export async function generateStaticParams() {
  return getProjects().map(p => ({ slug: p.slug }));
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

  // Add a nicer header everywhere
  const Header = (
    <header className="flex items-start justify-between gap-4 mb-4">
      <h1 className="text-3xl font-bold">{p.title}</h1>
      <DecisionBadge decision={p.decision} />
    </header>
  );

  // For this specific project, show the visual scorecard + downloads
  if (p.slug === 'eval-harness-contamination') {
    const downloads = [
      { title: 'Scorecard (JSON)', href: '/downloads/scorecard_llama3_local.json' },
      { title: 'Run log (MD)', href: '/downloads/experiment_log.md' },
      { title: 'Gate rubric (MD)', href: '/downloads/ship_hold_gates.md' }
    ];

    return (
      <article className="flex flex-col gap-8">
        {Header}

        {/* HR-friendly TL;DR card */}
        <section className="card">
          <div className="text-sm text-muted mb-2">TL;DR for recruiters</div>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li><strong>Shipped gates</strong> across capability, safety, contamination with a clear <em>Ship</em> decision.</li>
            <li><strong>Local model, zero cost</strong>: Llama-3 8B Instruct via Ollama; latency measured, results logged.</li>
            <li><strong>Paper trail</strong>: machine-readable scorecard + run log (download below).</li>
          </ul>
        </section>

        {/* Visual dashboard from scorecard JSON */}
        <ScorecardClient
          jsonUrl="/downloads/scorecard_llama3_local.json"
          downloads={downloads}
        />

        {/* Full write-up (for hiring managers) */}
        {md && (
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: marked.parse(md) as string }}
          />
        )}
      </article>
    );
  }

  // Other projects: fall back to the markdown or summary
  return (
    <article className="flex flex-col gap-6">
      {Header}
      {md ? (
        <div
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: marked.parse(md) as string }}
        />
      ) : (
        <>
          <p className="text-muted">{p.summary}</p>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {p.metrics && Object.entries(p.metrics).map(([k, v]) => (
              <div key={k} className="card">
                <div className="text-muted text-sm">{k.replace(/_/g, ' ')}</div>
                <div className="text-2xl font-bold">{String(v)}</div>
              </div>
            ))}
          </section>
        </>
      )}
    </article>
  );
}
