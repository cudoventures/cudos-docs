---
title: Super Decider quickstart
sidebar_label: Quickstart
id: quickstart
description: Make your first Super Decider request on ASI:Cloud and act on the answer.
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

This guide takes you from an API key to acting on your first decision.

## Before you start

You need:

- An ASI:Cloud account. Sign in at [asicloud.cudos.org](https://asicloud.cudos.org).
- An [LLM API key](/docs/asi-cloud/profile/api-keys).
- Balance on your account. See [Payments](/docs/asi-cloud/usage/via-user-interface/payments) to top up by card or crypto.

Save your key in an environment variable:

```bash
export ASI_API_KEY="your-api-key"
```

## 1. Send a request

A request has three parts: the `model`, the `state` the model reads, and the `questions` you want answered. This example is a support ticket about an order that has already shipped.

<Tabs groupId="sd-lang">
<TabItem value="curl" label="cURL">

```bash
curl https://inference.asicloud.cudos.org/v1/systemone \
  -H "Authorization: Bearer $ASI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "super-decider",
    "state": "Order 8812 shipped on Oct 1. The customer writes: \"I want to cancel and get my money back.\" Policy: shipped orders cannot be cancelled; they can be returned within 30 days of delivery for a full refund.",
    "questions": {
      "next_step": {
        "type": "choice",
        "instructions": "What should support do next?",
        "criteria": {
          "refund_now": "Refund without a return",
          "start_return": "Start a return",
          "escalate": "Hand over to a human"
        }
      },
      "allowed": {
        "type": "noul",
        "instructions": "Is cancelling this order allowed by the policy?"
      },
      "urgency": {
        "type": "score",
        "instructions": "How urgent is this ticket?",
        "criteria": ["low", "medium", "high"]
      }
    }
  }'
```

</TabItem>
<TabItem value="python" label="Python">

```python
import os
import requests

resp = requests.post(
    "https://inference.asicloud.cudos.org/v1/systemone",
    headers={"Authorization": f"Bearer {os.environ['ASI_API_KEY']}"},
    json={
        "model": "super-decider",
        "state": (
            "Order 8812 shipped on Oct 1. The customer writes: "
            '"I want to cancel and get my money back." '
            "Policy: shipped orders cannot be cancelled; they can be returned "
            "within 30 days of delivery for a full refund."
        ),
        "questions": {
            "next_step": {
                "type": "choice",
                "instructions": "What should support do next?",
                "criteria": {
                    "refund_now": "Refund without a return",
                    "start_return": "Start a return",
                    "escalate": "Hand over to a human",
                },
            },
            "allowed": {
                "type": "noul",
                "instructions": "Is cancelling this order allowed by the policy?",
            },
            "urgency": {
                "type": "score",
                "instructions": "How urgent is this ticket?",
                "criteria": ["low", "medium", "high"],
            },
        },
    },
    timeout=30,
)
resp.raise_for_status()
answers = resp.json()["answers"]
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

```js
const res = await fetch("https://inference.asicloud.cudos.org/v1/systemone", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.ASI_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "super-decider",
    state:
      'Order 8812 shipped on Oct 1. The customer writes: "I want to cancel and get my money back." ' +
      "Policy: shipped orders cannot be cancelled; they can be returned within 30 days of delivery for a full refund.",
    questions: {
      next_step: {
        type: "choice",
        instructions: "What should support do next?",
        criteria: {
          refund_now: "Refund without a return",
          start_return: "Start a return",
          escalate: "Hand over to a human",
        },
      },
      allowed: {
        type: "noul",
        instructions: "Is cancelling this order allowed by the policy?",
      },
      urgency: {
        type: "score",
        instructions: "How urgent is this ticket?",
        criteria: ["low", "medium", "high"],
      },
    },
  }),
});
const { answers } = await res.json();
```

</TabItem>
</Tabs>

Already using an OpenAI client? Super Decider also accepts [chat completions](./api/chat-completions.md).

## 2. Read the answers

The response has one answer per question, keyed by the question's id:

```json
{
  "answers": {
    "next_step": {
      "type": "choice",
      "choice": "start_return",
      "probabilities": {"refund_now": 0.02, "start_return": 0.96, "escalate": 0.02},
      "confidence": 0.96
    },
    "allowed": {"type": "noul", "noul": 0.03},
    "urgency": {
      "type": "score",
      "score": 0.59,
      "legend": {"0": "low", "1": "medium", "2": "high"},
      "probabilities": {"0": 0.43, "1": 0.54, "2": 0.02},
      "confidence": 0.54
    }
  },
  "model": "super-decider"
}
```

The response also has `usage` with the input and output token counts.

- `next_step`: the model is 96% sure support should start a return.
- `allowed`: the probability that cancelling is allowed is 0.03, so the answer is almost certainly no.
- `urgency`: the expected level is 0.59 on a 0 (low) to 2 (high) scale, between low and medium.

## 3. Act on the answers

The probabilities let your code set the rules. Act on its own when the model is sure, and send everything else to a person:

```python
next_step = answers["next_step"]

if next_step["choice"] == "start_return" and next_step["confidence"] >= 0.9:
    start_return(order_id=8812)
elif answers["urgency"]["score"] >= 1.5:
    page_on_call_agent(order_id=8812)
else:
    send_to_support_queue(order_id=8812)
```

Pick your thresholds by running the model on a set of past cases where you know the right answer. See [Confidence](./confidence.md).

## Next steps

- [State](./state.md): what to put in the state and how to structure it.
- [Questions](./questions.md): write clear questions and choose the right type.
- [Thinking](./thinking.md): turn on a short reasoning step for calculations and multi-step questions.
- [API reference](./api/systemone.md): every request and response field.
