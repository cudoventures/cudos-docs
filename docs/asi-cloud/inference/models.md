---
title: Models
id: models
description: Compare available ASI:Cloud inference models, token pricing, parameter sizes, and context windows.
---

Compare the models available for serverless inference on **ASI:Cloud**. Open the [model catalogue](https://asicloud.cudos.org/inference/models) to select a model, try it in chat, or view its API examples.

## Chat models

Prices are in **USD per 1 million tokens**, with input and output billed separately. Context windows are measured in tokens. **B** means billion parameters.

| Model | Parameters (catalogue) | Context window | Input / 1M tokens | Output / 1M tokens |
| --- | ---: | ---: | ---: | ---: |
| asi1-mini | - | 128,000 | Free | Free |
| DeepSeek V4 Flash 0731 | 300B | 1,048,576 | $0.14 | $0.28 |
| Gemma 4 26B A4B | 26B | 262,144 | $0.13 | $0.40 |
| Gemma 4 31B | 31B | 262,144 | $0.14 | $0.40 |
| gpt-oss-120b | 120B | 131,072 | $0.15 | $0.60 |
| gpt-oss-20b | 20B | 131,072 | $0.03 | $0.13 |
| MiniMax M3 | 440B | 524,300 | $0.30 | $1.20 |
| Qwen3.8 27B | 27B | 262,144 | $0.45 | $3.20 |

## Embedding models

Use the API model string to select an embedding model. Context lengths are measured in tokens.

| Organization | Model | API model string | Context length |
| --- | --- | --- | ---: |
| WhereIsAI | UAE-Large-V1 | `WhereIsAI/UAE-Large-V1` | 512 |
| BAAI | bge-base-en-v1.5 | `BAAI/bge-base-en-v1.5` | 512 |

## Start using a model

Follow the [inference quickstart](./quickstart.md) to set up an API key and make your first request. The model catalogue provides the model identifier and code examples for each model.
