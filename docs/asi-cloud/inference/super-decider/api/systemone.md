---
title: System One endpoint
sidebar_label: POST /v1/systemone
id: systemone
description: Answer one or more typed questions about the content supplied in state.
---

Answer one or more typed questions about the content in `state`. This endpoint uses the System One request format, the same format as TypeSafe's Jev API.

```text
POST https://inference.asicloud.cudos.org/v1/systemone
```

## Headers

| Header | Value |
| --- | --- |
| `Authorization` | `Bearer <ASI_API_KEY>`. Create a key on the [API keys](/docs/asi-cloud/profile/api-keys) page. |
| `Content-Type` | `application/json` |

## Request body

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `model` | string | Yes | `super-decider` |
| `state` | string or JSON | Yes | What the model reads. See [State](../state.md). |
| `questions` | object | Yes | Question id → question. 1 to 64 questions. |
| `images` | array of strings | No | Up to 8 images as base64 data URLs. See [Images](../images.md). |
| `instructions` | string | No | Context that applies to every question, such as a policy. |
| `thinking` | string | No | `"auto"` (default), `"auto_forced"`, `"always"` or `"off"`. See [Thinking](../thinking.md). |
| `thinking_budget` | integer | No | Longest thought in tokens, 16 to 4096. Default 512. |

### Question object

| Field | Type | Applies to | Description |
| --- | --- | --- | --- |
| `type` | string | All | `choice`, `score`, `noul`, `span` or `spans`. |
| `instructions` | string | All | The question, in plain language. |
| `criteria` | object or array | All | **choice**: option name → description or `null`, at least 2 options. **score**: array of levels, lowest first, at least 2. **noul**: optional `{"true": "...", "false": "..."}`. **span**: optional `{"max_tokens": n}`, 1 to 96. **spans**: optional `{"max_tokens": n, "max_items": n}`, `max_items` 1 to 64. |

## Response

| Field | Type | Description |
| --- | --- | --- |
| `answers` | object | Question id → answer. Each answer has a `type` and the fields for that type. |
| `model` | string | The model that answered. |
| `usage` | object | `input_tokens` and `output_tokens`. `output_tokens` includes the thought when the request thinks. |

### Answer fields

| Type | Fields |
| --- | --- |
| `choice` | `choice`, `probabilities` (option → probability), `confidence` |
| `score` | `score` (expected level, from 0), `legend` (index → level), `probabilities` (index → probability), `confidence` |
| `noul` | `noul` (probability of yes) |
| `span` | `found`, `text`, `start`, `end`, `confidence`, `coverage` |
| `spans` | `found`, `items` (each with `text`, `start`, `end`, `confidence`) |

## Example

```bash
curl https://inference.asicloud.cudos.org/v1/systemone \
  -H "Authorization: Bearer $ASI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "super-decider",
    "state": "Order 8812 shipped on Oct 1. The customer writes: \"I want to cancel and get my money back.\" Policy: shipped orders cannot be cancelled; they can be returned within 30 days of delivery for a full refund.",
    "questions": {
      "next_step": {"type": "choice", "instructions": "What should support do next?",
                    "criteria": {"refund_now": "Refund without a return", "start_return": "Start a return", "escalate": "Hand over to a human"}},
      "allowed":   {"type": "noul", "instructions": "Is cancelling this order allowed by the policy?"},
      "urgency":   {"type": "score", "instructions": "How urgent is this ticket?", "criteria": ["low", "medium", "high"]}
    }
  }'
```

```json
{
  "answers": {
    "next_step": {"type": "choice", "choice": "start_return",
                  "probabilities": {"refund_now": 0.02, "start_return": 0.96, "escalate": 0.02}, "confidence": 0.96},
    "allowed":   {"type": "noul", "noul": 0.03},
    "urgency":   {"type": "score", "score": 0.59, "legend": {"0": "low", "1": "medium", "2": "high"},
                  "probabilities": {"0": 0.43, "1": 0.54, "2": 0.02}, "confidence": 0.54}
  },
  "model": "super-decider"
}
```

The response also has `usage` with the token counts. See [Errors and limits](./errors.md) for failure responses.
