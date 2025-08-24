# Run Reproducibility Log (Crypto Fraud Detection & Portfolio Assistant)

- **Modules:** Fraud Detector and Portfolio Assistant.
- **Device:** MacBook Pro (Apple Silicon, offline).
- **Artifacts:** fraud_rules.yaml, phishing_urls.json, wallet_txns.csv, fraud_results.csv, portfolio_summary.csv, report.png.

- **Commands:**
  ```bash
  python detect_fraud.py --txns wallet_txns.csv --rules fraud_rules.yaml --out fraud_results.csv
  python summarize_portfolio.py --txns wallet_txns.csv --out portfolio_summary.csv
  python make_report.py --fraud fraud_results.csv --portfolio portfolio_summary.csv --out report.png
  ```

- **Date:** 2025-08-24 04:35:40
