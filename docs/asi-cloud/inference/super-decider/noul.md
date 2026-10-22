---
title: Noul
id: noul
description: A Noul question asks Super Decider a yes/no question and returns the probability that the answer is yes.
---

A **noul** is a yes/no question. The answer is a single number: the probability that the answer is yes. Use it for checks, flags and gates, such as "Is this message spam?", "Does the invoice total match?" or "Is this action allowed by the policy?"

## Request

`instructions` holds the question. `criteria` is optional: use it to say what counts as yes and what counts as no.

```json
{
  "model": "super-decider",
  "state": "Order 8812 shipped on Oct 1. Policy: shipped orders cannot be cancelled; they can be returned within 30 days of delivery.",
  "questions": {
    "allowed": {
      "type": "noul",
      "instructions": "Is cancelling this order allowed by the policy?"
    },
    "sensitive": {
      "type": "noul",
      "instructions": "Does the message contain personal data?",
      "criteria": {
        "true": "It includes a name with an address, phone number, card number or ID number",
        "false": "It only includes order numbers or product names"
      }
    }
  }
}
```

## Response

On `/v1/systemone`:

```json
{"type": "noul", "noul": 0.03}
```

| Field | Description |
| --- | --- |
| `noul` | The probability that the answer is yes, from 0 to 1. |

On [chat completions](./api/chat-completions.md), the answer has more fields:

```json
{"type": "noul", "noul": 0.04, "label": "no", "confidence": 0.96, "probabilities": {"yes": 0.04, "no": 0.96}}
```

`label` is `yes` when `noul` is at least 0.5 and `no` otherwise. `confidence` is the probability of the label.

## Using the probability

A noul's value is both the answer and how sure the model is. Pick thresholds for each side:

```python
p = answers["sensitive"]["noul"]

if p >= 0.9:
    redact_and_store(ticket)
elif p <= 0.1:
    store(ticket)
else:
    send_for_review(ticket)
```

Where the thresholds go depends on what a mistake costs. If missing personal data is expensive, set the low threshold close to 0 and review more tickets.

## Tips

- Phrase the question so that yes and no are both clear. "Is the invoice fully paid?" is better than "What about the payment?"
- Ask one thing at a time. Split "Is this urgent and from a VIP?" into two nouls.
- When yes or no isn't enough, use a [choice](./choice.md) or a [score](./score.md).
