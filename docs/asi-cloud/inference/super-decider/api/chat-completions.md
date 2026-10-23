---
title: Chat completions endpoint
sidebar_label: POST /v1/chat/completions
id: chat-completions
description: Use Super Decider from an OpenAI-compatible client.
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

Super Decider also answers through the OpenAI-compatible chat completions endpoint, so you can call it from an existing OpenAI client. It makes the same decisions as [`/v1/systemone`](./systemone.md); only the request shape differs.

```text
POST https://inference.asicloud.cudos.org/v1/chat/completions
```

## Messages

Send **exactly two messages**:

| Role | Content |
| --- | --- |
| `system` | The question schema, as a JSON string. |
| `user` | The state, as a JSON string. A plain string must be JSON-encoded too, for example with `json.dumps`. Raw text returns 400. For images, see [below](#images). |

### Question schema

```json
{"questions": [
  {"id": "next_step", "type": "choice", "instructions": "What should support do next?",
   "options": [{"name": "refund_now", "description": "Refund without a return"},
               {"name": "start_return", "description": "Start a return"},
               {"name": "escalate", "description": "Hand over to a human"}]},
  {"id": "allowed", "type": "noul", "instructions": "Is cancelling this order allowed by the policy?"},
  {"id": "urgency", "type": "score", "instructions": "How urgent is this ticket?",
   "levels": ["low", "medium", "high"]}
]}
```

Compared with `/v1/systemone`:

- `questions` is an array, and each question carries its own `id`.
- A choice lists its options in `options`, each with a `name` and an optional `description`.
- A score lists its levels in `levels`.
- A span puts `max_tokens` and `max_items` directly on the question.
- The request's `thinking` field is ignored. Control thinking with schema keys: `"adaptive": false` for no thought, or `"think": 512` for a thought of up to 512 tokens on every question. See [Thinking](../thinking.md#on-chat-completions).

```json
{"think": 512, "questions": [...]}
```

## Example

<Tabs groupId="sd-lang">
<TabItem value="python" label="Python">

```python
import json
import os
from openai import OpenAI

client = OpenAI(
    base_url="https://inference.asicloud.cudos.org/v1",
    api_key=os.environ["ASI_API_KEY"],
)

schema = {"questions": [
    {"id": "next_step", "type": "choice", "instructions": "What should support do next?",
     "options": [{"name": "refund_now", "description": "Refund without a return"},
                 {"name": "start_return", "description": "Start a return"},
                 {"name": "escalate", "description": "Hand over to a human"}]},
    {"id": "allowed", "type": "noul", "instructions": "Is cancelling this order allowed by the policy?"},
    {"id": "urgency", "type": "score", "instructions": "How urgent is this ticket?",
     "levels": ["low", "medium", "high"]},
]}
state = (
    "Order 8812 shipped on Oct 1. The customer writes: "
    '"I want to cancel and get my money back." '
    "Policy: shipped orders cannot be cancelled; they can be returned "
    "within 30 days of delivery for a full refund."
)

r = client.chat.completions.create(
    model="super-decider",
    messages=[
        {"role": "system", "content": json.dumps(schema)},
        {"role": "user", "content": json.dumps(state)},
    ],
)
answers = json.loads(r.choices[0].message.content)["answers"]
```

</TabItem>
<TabItem value="curl" label="cURL">

```bash
curl https://inference.asicloud.cudos.org/v1/chat/completions \
  -H "Authorization: Bearer $ASI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "super-decider",
    "messages": [
      {"role": "system", "content": "{\"questions\": [{\"id\": \"allowed\", \"type\": \"noul\", \"instructions\": \"Is cancelling this order allowed by the policy?\"}]}"},
      {"role": "user", "content": "\"Order 8812 shipped on Oct 1. Policy: shipped orders cannot be cancelled.\""}
    ]
  }'
```

Note the escaped quotes: both message contents are JSON strings, and the state is a JSON-encoded string inside them.

</TabItem>
</Tabs>

## Response

`choices[0].message.content` is compact JSON with the answers only. Each answer has the same fields as on `/v1/systemone`, plus a ready `label`:

```json
{"answers": {
  "next_step": {"type": "choice", "choice": "start_return", "probabilities": {...}, "confidence": 0.96, "label": "start_return"},
  "allowed": {"type": "noul", "noul": 0.04, "label": "no", "confidence": 0.96, "probabilities": {"yes": 0.04, "no": 0.96}},
  "urgency": {"type": "score", "score": 0.66, "legend": {...}, "probabilities": {...}, "confidence": 0.61, "label": "medium"}
}}
```

`probabilities` and `legend` are shortened to `{...}` here; they have the same shape as on `/v1/systemone`.

| Type | `label` |
| --- | --- |
| `choice` | The chosen option. |
| `score` | The most likely level. |
| `noul` | `yes` when `noul` is at least 0.5, otherwise `no`. Noul answers also carry `confidence` and `probabilities` here. |

The response's `usage` has the token counts. `completion_tokens` includes the thought when the request thinks.

## Images

Put images in the `user` message as a list of `image_url` parts, with an optional `text` part for context:

```python
{"role": "user", "content": [
    {"type": "image_url", "image_url": {"url": f"data:image/png;base64,{img}"}},
    {"type": "text", "text": "Scanned document from the accounts payable inbox."},
]}
```

See [Images](../images.md) for limits and a full example.
