# Run Reproducibility Log (Care Navigation & Clinical Documentation)

- **Agents:** Care Navigation Agent (triage + referral) and Clinical Documentation Agent (SOAP note drafting).
- **Device:** MacBook Pro (Apple Silicon, offline).
- **Artifacts:** care_prompts.json, note_schema.yaml, orchestrator.py, eval_results.csv, report.png.

- **Commands:**
  ```bash
  python orchestrator.py
  python evaluate.py --prompts care_prompts.json --schema note_schema.yaml --out eval_results.csv
  python make_report.py --results eval_results.csv --out report.png
  ```

- **Date:** 2025-08-24 04:29:08
