import projectsData from "@/content/projects.json"; import metricsData from "@/content/metrics.json"; import siteData from "@/content/site.json";
export type Project={slug:string;title:string;summary:string;pillars:string[];metrics?:Record<string,number>;decision:'Ship'|'Hold'|'Block'};
export function getProjects():Project[]{return (projectsData as any).projects as Project[]}
export function getProject(slug:string){return getProjects().find(p=>p.slug===slug)}
export function getMetrics(){return metricsData as any} export function getSite(){return siteData as any}
