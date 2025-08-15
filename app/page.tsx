import Link from 'next/link'; import MetricTile from '@/components/MetricTile'; import ProjectCard from '@/components/ProjectCard'; import { getProjects, getMetrics } from '@/lib/content';
export default function Home(){ const projects=getProjects(); const m=getMetrics() as any;
  return(<div className="flex flex-col gap-10">
    <section className="flex flex-col gap-5 text-center md:text-left md:flex-row md:items-center md:justify-between"><div className="max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-bold">Foundational LLM PM: I ship models safely and efficiently.</h1>
      <p className="mt-4 text-muted">I operate across data, training, alignment, evals, inference, and governance—with hard numeric gates and clear go/no-go decisions.</p>
      <div className="mt-6 flex gap-4 justify-center md:justify-start"><Link className="btn" href="/projects">View projects →</Link><Link className="btn btn-secondary" href="/resources">Download starter kit</Link></div>
    </div></section>
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricTile label="Safety refusal" value={`≥ ${m.safety_refusal}`} /><MetricTile label="Contamination flags" value={`${m.contamination_flags}`} />
      <MetricTile label="Cost / 1K tokens" value={`$${m.cost_per_1k_tokens}`} /><MetricTile label="p95 latency" value={`${m.p95_latency_seconds}s`} />
    </section>
    <section><h2 className="text-2xl font-semibold mb-4">Featured Projects</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{projects.map(p=><ProjectCard key={p.slug} p={p}/>)}</div></section>
  </div>);
}
