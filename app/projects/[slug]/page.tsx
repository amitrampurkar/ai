import {notFound} from 'next/navigation'; import DecisionBadge from '@/components/DecisionBadge'; import {getProject,getProjects} from '@/lib/content';
export async function generateStaticParams(){return getProjects().map(p=>({slug:p.slug}))}
export default function ProjectDetail({params}:{params:{slug:string}}){ const p=getProject(params.slug); if(!p)return notFound();
  return(<article className="flex flex-col gap-6">
    <header className="flex items-start justify-between gap-4"><h1 className="text-3xl font-bold">{p.title}</h1><DecisionBadge decision={p.decision}/></header>
    <p className="text-muted">{p.summary}</p>
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">{p.metrics&&Object.entries(p.metrics).map(([k,v])=>(<div key={k} className="card"><div className="text-muted text-sm">{k.replace(/_/g,' ')}</div><div className="text-2xl font-bold">{String(v)}</div></div>))}</section>
    <section className="card"><h2 className="text-xl font-semibold mb-2">Gates & Decision</h2><ul className="list-disc pl-6 text-muted"><li>Numeric thresholds for capability, safety refusal, and contamination.</li><li>Ship/Hold call based on gates; rollback plan if SLOs breach.</li></ul></section>
    <section className="card"><h2 className="text-xl font-semibold mb-2">What I’d Do with 10× Resources</h2><p className="text-muted">Next bets: stronger evals, higher-quality preference data, scaling memory with latency caps.</p></section>
  </article>);
}
