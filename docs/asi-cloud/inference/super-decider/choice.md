---
title: Choice
id: choice
description: A Choice question selects one option from a defined set. The answer includes the selected option, a probability for each option, and confidence.
---

A **choice** question picks one option from a set you define. Use it for routing, classification, intent detection and picking an agent's next action.

## Request

`criteria` maps each option's name to a description. Set the description to `null` when the name says enough.

```json
{
  "model": "super-decider",
  "state": "Hi, my card was charged twice for the same order last night. Can you fix it?",
  "questions": {
    "team": {
      "type": "choice",
      "instructions": "Which team should handle this ticket?",
      "criteria": {
        "billing": "Payments, charges, refunds and invoices",
        "shipping": "Delivery, tracking and returns",
        "account": "Login, password and profile changes",
        "other": null
      }
    }
  }
}
```

## Response

```json
{
  "type": "choice",
  "choice": "billing",
  "probabilities": {"billing": 0.97, "shipping": 0.01, "account": 0.01, "other": 0.01},
  "confidence": 0.97
}
```

The values above show the shape of an answer; your results will differ.

| Field | Description |
| --- | --- |
| `choice` | The name of the most likely option. |
| `probabilities` | The probability of each option. They add up to 1. |
| `confidence` | The probability of the chosen option. |

On [chat completions](./api/chat-completions.md), the answer also has a `label` equal to `choice`.

## Using the probabilities

`choice` alone throws away most of what the model tells you. Use the probabilities:

- **Threshold the top option.** Act on its own only when `confidence` is above a level you chose, and send the rest to a person or a larger model.
- **Check the margin.** When the top two options are close, such as 0.48 and 0.45, the case sits on a boundary. That is a good signal to escalate.
- **Sum related options.** If `billing` and `refunds` go to the same team, add their probabilities before you route.

See [Confidence](./confidence.md) for how to set thresholds.

## Many options

A choice can have many options. Singularity Compute has tested up to **151 options** in one question. Large option sets are read in chunks.

With long lists:

- Give every option a short, distinct description.
- Keep the list in the same order on every request.
- For deep hierarchies, such as product categories, consider asking one choice per level and narrowing down in code.

## Tips

- Add an `other` or `escalate` option when some cases may fit none of the others.
- Keep options mutually exclusive. If two can be true at once, ask two [nouls](./noul.md) instead.
- If the options have a natural order, such as severity, use a [score](./score.md).
