import Link from 'next/link'; import DecisionBadge from './DecisionBadge';
export type Project={slug:string;title:string;summary:string;pillars:string[];metrics?:Record<string,number>;decision:'Ship'|'Hold'|'Block'};
export default function ProjectCard({p}:{p:Project}){
  return(<div className="card flex flex-col gap-3">
    <div className="flex items-start justify-between gap-4"><h3 className="text-xl font-semibold">{p.title}</h3><DecisionBadge decision={p.decision}/></div>
    <p className="text-muted">{p.summary}</p><div className="text-sm text-muted">Pillars: {p.pillars.join(', ')}</div>
    <div><Link className="btn" href={`/projects/${p.slug}`}>Read case study →</Link></div></div>);
}
