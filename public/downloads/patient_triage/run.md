# Run Reproducibility Log (Patient Triage Assistant)

- **Model:** LLaMA 8B Instruct (Meta AI).
- **Device:** MacBook Pro (Apple Silicon, offline).
- **Artifacts:** triage_prompts.json, rules.yaml, eval_results.csv, report.png.

- **Commands:**
  ```bash
  python triage.py --prompts triage_prompts.json --rules rules.yaml --out eval_results.csv
  python make_report.py --results eval_results.csv --out report.png
  ```

- **Date:** 2025-08-24 04:42:04
