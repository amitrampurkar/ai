import Link from "next/link";
import Kpi from "@/components/Kpi";

const homeKpis = [
  {
    label: "Safety refusal",
    value: "≥ 0.96",
    hint: "Ship bar",
    info:
      "Model reliably refuses unsafe prompts. This is part of my shipping bar and reflects safety-first criteria.",
  },
  {
    label: "Contamination flags",
    value: "0",
    hint: "Data hygiene",
    info:
      "Checks for training/test leakage (e.g., n-gram overlap, seed matches). Zero flags means no known contamination.",
  },
  {
    label: "Cost / 1K tokens",
    value: "$0.003",
    hint: "Unit economics",
    info:
      "Target spend per 1K tokens for the reference stack. Keeps COGS predictable as we scale usage.",
  },
  {
    label: "p95 latency",
    value: "3.8s",
    hint: "Perf SLO",
    info:
      "95th percentile end-to-end response time. Ensures worst-case UX stays within acceptable bounds at scale.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero */}
      <section>
        <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-100">
          Foundational LLM PM: I ship models safely and efficiently.
        </div>
        <p className="mt-4 text-zinc-400 max-w-3xl">
          I operate across data, training, alignment, evals, inference, and governance—with hard
          numeric gates and clear go/no-go decisions.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <Link
            href="/projects/"
            className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
          >
            View projects
          </Link>
          <Link
            href="/resources/"
            className="inline-flex items-center rounded-full border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-100 hover:bg-zinc-800"
          >
            Download starter kit
          </Link>
        </div>
      </section>

      {/* KPI strip with info icons */}
      <section className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {homeKpis.map((k) => (
            <Kpi key={k.label} {...k} />
          ))}
        </div>
      </section>

      {/* Featured Projects (kept minimal) */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-zinc-100">Featured Projects</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/projects/eval-harness-contamination/"
            className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-5 hover:bg-zinc-800 transition"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="text-zinc-100 font-semibold">LLM Eval Harness &amp; Contamination Defense</div>
              <span className="text-xs px-2 py-1 rounded-full bg-green-300/10 text-green-300 border border-green-400/20">
                Ship
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-400">
              Lightweight harness with safety &amp; contamination gates; production-minded scorecard and ship/hold criteria.
            </p>
            <div className="mt-4 inline-flex items-center rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              Read case study →
            </div>
          </Link>

          <Link
            href="/projects/agent-memory-benchmark/"
            className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-5 hover:bg-zinc-800 transition"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="text-zinc-100 font-semibold">Agent Memory Benchmark</div>
              <span className="text-xs px-2 py-1 rounded-full bg-green-300/10 text-green-300 border border-green-400/20">
                Ship
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-400">
              Episodic + semantic memory improves long-horizon task completion with bounded latency and token overhead.
            </p>
            <div className="mt-4 inline-flex items-center rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              Read case study →
            </div>
          </Link>

          <Link
            href="/projects/sft-dpo-mini/"
            className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-5 hover:bg-zinc-800 transition"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="text-zinc-100 font-semibold">Instruction Tuning (SFT→DPO) Mini</div>
              <span className="text-xs px-2 py-1 rounded-full bg-amber-300/10 text-amber-300 border border-amber-400/20">
                Hold
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-400">
              Measured quality gains against cost; clear stop/continue rule and preference-data roadmap.
            </p>
            <div className="mt-4 inline-flex items-center rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white">
              Read case study →
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
