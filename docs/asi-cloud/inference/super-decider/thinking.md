---
title: Thinking
id: thinking
description: Control Super Decider's short reasoning step for calculations and multi-step questions.
---

Super Decider can write a short thought before it answers. Thinking raises accuracy on questions that need a calculation or several steps, such as "Is the invoice fully paid?" when the payments have to be added up. On plain classification it doesn't help.

The thought itself isn't returned. You only get the answers.

## Modes

Set `thinking` in the request body:

| Value | Behavior |
| --- | --- |
| `"auto"` | **Default.** The model thinks only on questions it is unsure of. Skipped when the service is busy. |
| `"auto_forced"` | Like `auto`, but never skipped under load. |
| `"always"` | The model thinks before every question. |
| `"off"` | No thinking. Fastest. |

Set `thinking_budget` to limit the length of the thought, from 16 to 4096 tokens. The default is 512.

## Cost

| | Without thinking | With thinking |
| --- | --- | --- |
| Latency | About 0.25 s per request | About 0.5 to 2 s more per request |
| Tokens | Answers only | `output_tokens` includes the thought |

See the [model catalogue](../models.md) for token prices.

## Example

```bash
curl https://inference.asicloud.cudos.org/v1/systemone \
  -H "Authorization: Bearer $ASI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "super-decider",
    "thinking": "always",
    "state": "Invoice total 1,240 EUR. The customer paid 2 x 400 EUR and 1 x 340 EUR.",
    "questions": {
      "paid": {"type": "noul", "instructions": "Is the invoice fully paid?"},
      "next_step": {
        "type": "choice",
        "instructions": "What should accounts receivable do next?",
        "criteria": {
          "close": "Mark as paid and close",
          "remind": "Send a reminder for the remaining amount",
          "escalate": "Hand over to collections"
        }
      }
    }
  }'
```

```json
{
  "model": "super-decider",
  "answers": {
    "paid": {"type": "noul", "noul": 0.02},
    "next_step": {
      "type": "choice",
      "choice": "remind",
      "probabilities": {"close": 0.01, "remind": 0.97, "escalate": 0.01},
      "confidence": 0.97
    }
  },
  "usage": {"input_tokens": 394, "output_tokens": 240}
}
```

In Singularity Compute's test of this request, `"thinking": "off"` answered in 0.27 s instead of 0.72 s, but less surely: `paid` 0.20 and `remind` 0.80.

## When to use each mode

- **`off`** for high-volume classification, routing and moderation, where latency matters and the questions don't need steps.
- **`auto`** as a general default. You pay for thinking only on the questions where the model is unsure.
- **`auto_forced`** when you want `auto` and need its accuracy to hold at busy times.
- **`always`** for dates, money, counting and rules with several conditions.

Even with thinking, compute values in code where you can. It is faster, cheaper and exact.

:::note
Requests with [images](./images.md) never think, whatever `thinking` is set to.
:::
