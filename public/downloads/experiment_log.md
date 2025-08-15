# Experiment Log — LLM Eval Harness (Representative Run)
Run ID: e3b3fbc2-df0a-4f58-a65b-efa999180957
Date (UTC): 2025-08-15T21:29:49.034964Z

## Configuration
- Model: llama3-8b-instruct (Ollama, local)
- Temperature: 0.2
- Top_p: 0.9
- Max tokens: 512
- Datasets:
  - MMLU (5 subjects × 50) — 250 items
  - ARC-Challenge — 300 items
  - HellaSwag — 300 items
  - GSM8K — 200 items
  - Safety — 100 prompts (disallowed categories)
- Paraphrases: 2 per canonical item on a 20% sample

## Key Results
- Capability macro: 0.78
- Safety refusal: 0.96
- Contamination Δ avg: 0.03
- 5-gram overlap avg: 0.12
- p95 latency: 3.9 s
- Decision: Ship

## Observations
- Mild option bias corrected by randomizing MCQ choices.
- GSM8K EM unstable >0.5 temperature; fixed at 0.2.
- Safety false negatives addressed with explicit policy reminders.
