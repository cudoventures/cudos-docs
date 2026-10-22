---
title: Super Decider model card
sidebar_label: Model card
id: model-card
description: Super Decider's architecture, pricing, reported results and known limitations.
---

## Overview

| Property | Value |
| --- | --- |
| Developer | [Singularity Compute](https://singularitycompute.com) |
| API model string | `super-decider` |
| Base model | `google/diffusiongemma-26B-A4B-it`, a discrete-diffusion mixture-of-experts model |
| Parameters | 26B total, 4B active |
| Weights | NVFP4 (experts in 4-bit), an 18 GB checkpoint |
| Context window | 131,072 tokens |
| Input | Text, JSON, up to 8 images |
| Output | Typed answers: choice, score, noul, span |
| Languages | English |
| License | Apache-2.0 |
| Weights download | [Hugging Face](https://huggingface.co/Singularity-Compute/super-decider) |
| Serving runtime | [GitHub](https://github.com/Singularity-Compute/super-decider) |

## Pricing on ASI:Cloud

| Input / 1M tokens | Output / 1M tokens |
| ---: | ---: |
| $0.03 | Free |

See the [model catalogue](../models.md) to compare with other models.

## How it works

- **Fine-tuned for decisions.** DiffusionGemma 26B-A4B is fine-tuned on permissively licensed and synthetic decision data, then merged into NVIDIA's NVFP4 checkpoint.
- **One-step reads.** The model fills all answer slots of a request in one denoising step, so several questions cost little more than one.
- **Reads each question both ways.** The prompt block of each question is read in both directions, not only left to right. The model was trained this way, and the serving runtime applies the same attention.
- **Adaptive thinking.** When the model is unsure of an answer, it can write a short thought and read the answer again. See [Thinking](./thinking.md).

No benchmark test items were used for training.

## Reported results

Singularity Compute reports these results for Super Decider, which costs **$0.03 per 1M input tokens** on ASI:Cloud, with output free:

- **85.6** on NVIDIA's When2Call, a benchmark of when an agent should call a tool.
- **94.5%** accuracy checking documents of up to 16k tokens.
- **+2 points** on DecisionBench with thinking turned on.
- Ahead of TypeSafe's Jev on When2Call and PhishNChips.
- Ahead of Cloudflare's Clef on When2Call and PhishNChips, and 1.6 points behind it on BFCL tool selection.
- About **0.3 s** per request over the public internet.

For comparison, the larger chat models that Singularity Compute prices against on its product page (Gemma 4 31B, gpt-oss-120b, MiniMax M3 and Qwen3.8 27B) cost \$0.14 to \$0.45 per 1M input tokens on ASI:Cloud, plus \$0.40 to \$3.20 per 1M output tokens. See the [model catalogue](../models.md).

These are the developer's figures. Measure the model on your own data before you rely on it.

## Known limitations

- **Sensitive to input order.** Answers can change when the input changes in ways that keep its meaning, such as the order of JSON keys or of a question's options. Build requests the same way every time.
- **Multi-step arithmetic.** The model is sometimes confidently wrong on multi-step date and money calculations. [Thinking](./thinking.md) on every question fixes part of these; doing the arithmetic in code avoids them.
- **English-centric.** The training data is mostly English.
- **Images.** The model wasn't fine-tuned on images. It reads them through its base model's vision path, and image requests only think with `"thinking": "always"`.

## Links

- [Model weights on Hugging Face](https://huggingface.co/Singularity-Compute/super-decider)
- [Serving runtime and API notes on GitHub](https://github.com/Singularity-Compute/super-decider)
- [Super Decider product page](https://singularitycompute.com/super-decider)
