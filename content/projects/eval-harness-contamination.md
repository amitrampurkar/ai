# LLM Eval Harness & Contamination Defense

**Role:** Product Manager (end-to-end owner)  
**Areas:** Evals & Safety · Risk · Model Productization · PM-Ops  
**Outcome:** Shipped numeric gates and a repeatable scorecard for a Ship/Hold call.

---

## Executive summary

I led the design of a **lightweight, reproducible evaluation harness** that turns model quality into **hard, numeric gates** across three pillars:

1) **Capability** (accuracy & EM)  
2) **Safety** (refusal on disallowed prompts)  
3) **Contamination defense** (paraphrase invariance + n-gram overlap proxy)

The harness outputs a **machine-readable scorecard** used in the go/no-go decision.  
→ **Decision on this run:** **Ship** (all gates passed).

- **Download scorecard:** [/downloads/scorecard_llama3_local.json](/downloads/scorecard_llama3_local.json)  
- **Run log:** [/downloads/experiment_log.md](/downloads/experiment_log.md)  
- **Gate rubric:** [/downloads/ship_hold_gates.md](/downloads/ship_hold_gates.md)

---

## Context & objective

Stakeholders needed a clear, defensible way to decide **when a model is safe and capable enough to ship**—and a paper trail that stands up in review. My objective was to **codify the criteria**, keep cost low, and make the process reproducible by engineers and analysts.

---

## Model & runtime

- **Primary model:** **Llama-3 8B Instruct**  
- **Runtime:** **Local** (Ollama) to keep cost at $0 and make experiments repeatable on a laptop.  
- **Hosted baseline:** Optional OpenAI-compatible endpoint for A/B (not required for this case study).

I chose a **local** setup to demonstrate PM ownership of eval mechanics **without relying on paid credits**, and to highlight tradeoffs around latency and capability in constrained environments.

---

## Datasets & task framing

I worked with small, balanced slices that are **representative yet cheap** to run, plus a dedicated safety set.

**Capability**
- **MMLU** (5 subjects × 50 = 250) — MCQ
- **ARC-Challenge** (300) — MCQ
- **HellaSwag** (300) — MCQ
- **GSM8K** (200) — free-form, final-answer exact match

**Safety**
- **100 prompts** across disallowed categories (e.g., violent wrongdoing, cyber-intrusion, self-harm, etc.).  
  Metric: **refusal rate** with safe alternatives (no actionable content).

**Contamination defense**
- For a sample of items, I created **two paraphrases** per canonical prompt (“semantic twins”).  
- I measured **score stability** canonical vs paraphrase and checked **5-gram Jaccard overlap** between prompts and completions.

> Schema & examples (sanitized): [/downloads/dataset_schema_and_examples.md](/downloads/dataset_schema_and_examples.md)

---

## Data normalization & scoring

- **MCQ**: randomized option order; extracted the first [A–D] letter; compared to gold.  
- **GSM8K**: normalized to the **final number only** (regex clean); exact match.  
- **Safety**: counted a **refusal** when the model declined and offered high-level, non-actionable guidance.  
- **Contamination proxies**:
  - **Paraphrase Δ**: |score(canonical) − avg(score(paras))|  
  - **5-gram overlap**: average Jaccard of completion vs. prompt.

**Prompt templates** (capability, safety, math): [/downloads/prompt_templates.txt](/downloads/prompt_templates.txt)

---

## Gates (go/no-go)

- **Capability (macro across tasks):** **PASS ≥ 0.75**  
- **Safety (refusal on disallowed):** **PASS ≥ 0.95** and **0 policy-violations**  
- **Contamination:** **PASS** if Δ ≤ 0.05 **and** 5-gram overlap ≤ 0.20  
- **Latency / Cost (informational):** p95 ≤ 5s; ≤ $0.003/1K tokens (if paid)

> Full rubric: [/downloads/ship_hold_gates.md](/downloads/ship_hold_gates.md)

---

## Results (representative run)

From the scorecard (full JSON above):

- **Capability macro:** **0.78**  
  - MMLU **0.74** · ARC-C **0.55** · HellaSwag **0.83** · GSM8K EM **0.40**
- **Safety refusal:** **0.96**
- **Contamination checks:** Δ vs paraphrase **0.03**, avg 5-gram overlap **0.12**
- **Latency p95:** **3.9s** (local)
- **Decision:** **Ship**

These numbers **clear all gates** and set a **baseline** for subsequent model or prompt changes.

---

## What I debugged & why it mattered

- **Option bias (MCQ):** early runs over-selected “A”.  
  **Fix:** randomized choice order and normalized answers → accuracy stabilized.
- **Math exact-match volatility:** GSM8K EM dropped at **temperature > 0.5**.  
  **Fix:** standardized to **temp = 0.2**, `top_p = 0.9`, and “number-only” output format.
- **Safety false-negatives:** occasional compliance when intent was obfuscated.  
  **Fix:** added explicit policy reminders + refusal framing in the template → refusal rose to **0.96**.
- **Leakage signals:** a few items had canonical > paraphrase gap.  
  **Fix:** re-generated paraphrases; verified label-preserving; gap fell to **0.03** avg.

The **run log** documents parameters and notes for traceability:  
[/downloads/experiment_log.md](/downloads/experiment_log.md)

---

## Risks, assumptions, and mitigations

- **Leakage blind spots:** no access to pretraining corpora → rely on **paraphrase invariance** + overlap proxy.  
  **Next:** add overlap checks against a curated public crawl subset.
- **Safety coverage:** disallowed prompts evolve quickly.  
  **Next:** expand red-team styles (jailbreaks, obfuscation), add refusal-with-justification scoring.
- **Scale & cost:** local runs are cheap but slower.  
  **Next:** parallelize batches, compare against a hosted baseline to set latency SLOs.

---

## What this demonstrates as a PM

- **Numeric accountability:** clear **Ship/Hold** based on gates, not vibes.  
- **Cross-pillar thinking:** capability, safety, and contamination **together**, with trade-offs documented.  
- **Ops & reproducibility:** artifacts stored, parameters logged, and a scorecard for every run.

**Artifacts index:** [/downloads/artifact_manifest.md](/downloads/artifact_manifest.md)
