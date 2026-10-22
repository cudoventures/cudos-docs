---
title: Score
id: score
description: A Score question rates the state against ordered levels. The answer includes the expected level, a probability for each level, and confidence.
---

A **score** question rates the state on a scale you define. Use it when the answers have an order: urgency, severity, quality, sentiment or risk.

## Request

`criteria` is an array of levels, from lowest to highest. Each level is a string, so it can be a single word or a short description.

```json
{
  "model": "super-decider",
  "state": "Order 8812 shipped on Oct 1. The customer writes: \"I want to cancel and get my money back.\"",
  "questions": {
    "urgency": {
      "type": "score",
      "instructions": "How urgent is this ticket?",
      "criteria": ["low", "medium", "high"]
    }
  }
}
```

## Response

```json
{
  "type": "score",
  "score": 0.59,
  "legend": {"0": "low", "1": "medium", "2": "high"},
  "probabilities": {"0": 0.43, "1": 0.54, "2": 0.02},
  "confidence": 0.54
}
```

| Field | Description |
| --- | --- |
| `score` | The expected level: each level's index weighted by its probability. Levels are numbered from 0. |
| `legend` | Maps each level's index to its name. |
| `probabilities` | The probability of each level, keyed by index. |
| `confidence` | The probability of the most likely level. |

On [chat completions](./api/chat-completions.md), the answer also has a `label`: the name of the most likely level.

## Expected level vs most likely level

`score` and the most likely level can tell different stories. In the example, `medium` is the most likely level at 0.54, but `low` has 0.43, so the expected level is 0.59: closer to low than to medium.

- Use `score` when you want a number to sort by or a threshold between levels, such as "escalate when urgency is above 1.5".
- Use the probabilities when one level matters on its own, such as "page someone when P(high) is above 0.3".

## Writing levels

- **Order them lowest first.** The index is the level's place in the array.
- **Make the steps even.** Levels such as `none`, `minor`, `major`, `critical` work better than `fine`, `bad`, `very bad`.
- **Describe them when the names are vague.** For example, `"low: can wait a week"` and `"high: customer is blocked now"` instead of just `low` and `high`.

## Combining scores

Break a broad judgment, such as "how good is this lead?", into several narrow scores and combine them in code with weights you control. See [composite scoring](./patterns.md#composite-scoring).
