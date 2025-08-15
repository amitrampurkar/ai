import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import DecisionBadge from '@/components/DecisionBadge';
import { getProject, getProjects } from '@/lib/content';

export async function generateStaticParams() {
  return getProjects().map(p => ({ slug: p.slug }));
}

function readProjectMd(slug: string) {
  const p = path.join(process.cwd(), 'content', 'projects', `${slug}.md`);
  if (fs.existsSync(p)) {
    return fs.readFileSync(p, 'utf8');
  }
  return null;
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) return notFound();

  const md = readProjectMd(params.slug);

  return (
    <article className="flex flex-col gap-6">
      <header className="flex items-start justify-between gap-4">
        <h1 className="text-3xl font-bold">{p.title}</h1>
        <DecisionBadge decision={p.decision} />
      </header>

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
