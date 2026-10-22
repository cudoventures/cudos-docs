---
title: Migrate from Jev
id: migrate-from-jev
description: Move an existing Jev or TypeSafe System One integration to Super Decider on ASI:Cloud.
---

Super Decider accepts the same request format as TypeSafe's System One API, so most Jev integrations move by changing the endpoint, the model name and the key.

## What to change

| Setting | Jev | Super Decider on ASI:Cloud |
| --- | --- | --- |
| Endpoint | `https://api.typesafe.ai/v1/systemone`, or a gateway such as OpenRouter | `https://inference.asicloud.cudos.org/v1/systemone` |
| `model` | `jev-latest`, `jev-1.14.0`, `typesafe/jev-1.13` | `super-decider`. Any other name returns 400. |
| Key | TypeSafe or OpenRouter key | An [ASI:Cloud API key](/docs/asi-cloud/profile/api-keys), as `Authorization: Bearer ...` |

These stay the same: `state`, `questions`, the `noul`, `choice` and `score` types, the shapes of `criteria`, JSON in instructions and criteria, and the answer fields (`noul`, `choice`, `probabilities`, `confidence`, `score`, `legend`).

## Differences to check

| Area | Jev | Super Decider |
| --- | --- | --- |
| Images | An `assets` map referenced from the request, behind an opt-in header | An `images` array of up to 8 base64 data URLs next to `state`, no header. See [Images](./images.md). |
| Box questions | Supported in Jev 1.14 | Not supported. Returns 422. |
| Span questions | Not available | `span` and `spans` copy text from the state with offsets. See [Span](./spans.md). |
| Thinking | No control | Off, automatic or on every question. See [Thinking](./thinking.md). |
| Limits | | 131,072 tokens and up to 64 questions per request. A choice with more than 26 options is read in chunks and is slower. A score can have more than 10 levels. |
| Usage | Includes a `cost` field | `input_tokens` and `output_tokens` only. See the [model catalogue](../models.md) for prices. |
| SDKs | TypeSafe Python and JavaScript SDKs | TypeSafe's SDKs target TypeSafe's endpoint. Call the HTTP API directly, or use an OpenAI client through [chat completions](./api/chat-completions.md). |

## Re-check after switching

Different models are calibrated differently. Re-run your integration's test cases and re-tune your confidence thresholds on your own data before you rely on the old values. See [setting thresholds](./confidence.md#setting-thresholds).

The [agent skill](./agent-skill.md) can make these changes for you. Ask your coding agent to switch the integration to Super Decider.
