# Run Reproducibility Log (Hallucination Testing & Mitigation)

- **Model:** Llama 3.1 8B Instruct (Ollama, quantized Q4_K_M)
- **Device:** MacBook Pro (Apple Silicon, 16 GB RAM, macOS)
- **Mode:** Closed-book; local verification against evidence_corpus.csv
- **Hash:** llama-3.1-8b-q4_k_m-20240801
- **Commands:**
  ```bash
  # 1) Generate answers for prompts
  ollama run llama-3.1-8b-instruct < test_prompts_hallu.jsonl > raw_answers.jsonl

  # 2) Extract claims & verify against evidence
  python evaluate_claims.py --answers raw_answers.jsonl --evidence evidence_corpus.csv --out eval_results_hallu.csv

  # 3) Build report
  python make_report.py --results eval_results_hallu.csv --out report_hallu.png
  ```

- **Date:** 2025-08-24 04:04:45
