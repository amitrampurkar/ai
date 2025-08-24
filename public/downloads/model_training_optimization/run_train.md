# Run Reproducibility Log (Model Training Optimization)

- **Model:** distil-llm-1.3b (toy dataset).
- **Device:** MacBook Pro M2 Pro (32GB RAM, macOS).
- **Framework:** PyTorch + bitsandbytes quantization.
- **Hash:** distil-llm-1.3b-20240801.

- **Commands:**
  ```bash
  # Run training with fp16
  python train.py --quantization fp16 --batch_size 8

  # Run training with int8
  python train.py --quantization int8 --batch_size 16

  # Run training with int4
  python train.py --quantization int4 --batch_size 32
  ```

- **Date:** 2025-08-24 04:23:00
