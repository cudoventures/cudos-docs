---
title: Span
id: spans
description: Span and spans questions quote pieces of the state verbatim, with character offsets.
---

A **span** question returns a piece of the state, word for word. Use it to pull out values such as an order number, an email address or a contract clause. A span is always a substring of the state, so the model can't make up a value that isn't there.

There are two types:

- `span`: the single best piece of text.
- `spans`: every piece that matches.

## Request

For span questions, `criteria` is optional and holds limits on the answer.

```json
{
  "model": "super-decider",
  "state": "Hi, this is about order 8812. You can reach me at jane@example.com or jane.work@example.com.",
  "questions": {
    "order_id": {
      "type": "span",
      "instructions": "What is the order number?"
    },
    "emails": {
      "type": "spans",
      "instructions": "Every email address in the message",
      "criteria": {"max_items": 5}
    }
  }
}
```

| `criteria` field | Applies to | Description |
| --- | --- | --- |
| `max_tokens` | `span`, `spans` | Longest piece to return, in tokens. 1 to 96. Defaults to 24 for `span` and 64 for `spans`. |
| `max_items` | `spans` | Most pieces to return. 1 to 64. Defaults to 16. |

On [chat completions](./api/chat-completions.md), put `max_tokens` and `max_items` directly on the question instead.

## Response

The values below show the shape of the answers; your results will differ.

```json
{
  "order_id": {
    "type": "span",
    "found": true,
    "text": "8812",
    "start": 24,
    "end": 28,
    "confidence": 0.97,
    "coverage": 0.99
  },
  "emails": {
    "type": "spans",
    "found": true,
    "items": [
      {"text": "jane@example.com", "start": 50, "end": 66, "confidence": 0.95},
      {"text": "jane.work@example.com", "start": 70, "end": 91, "confidence": 0.93}
    ]
  }
}
```

| Field | Description |
| --- | --- |
| `found` | Whether the model found a matching piece. |
| `text` | The piece of the state. |
| `start`, `end` | Character offsets of the piece in the state. |
| `confidence` | How sure the model is of the piece. It is the weakest probability along the piece. |
| `coverage` | `span` only. How much of the model's prediction fell on text that exists in the state. |
| `items` | `spans` only. Each piece found, with its `text`, `start`, `end` and `confidence`. |

The response may also include extra diagnostic fields. Your code can ignore them.

## Offsets

When the state is a string, `start` and `end` count characters from its start. When the state is JSON, they count into its `text` field. To quote from JSON state, put the text in a field named `text`:

```json
"state": {"text": "Termination: either party may end this agreement with 30 days' written notice.", "source": "contract.pdf"}
```

## Tips

- Check `found` before using `text`. If the value isn't in the state, `found` is `false`.
- Normalize values in code. A span returns `jane@EXAMPLE.com` exactly as written; lower-case it yourself.
- To check a value as well as extract it, pair the span with a [noul](./noul.md) in the same request, such as "Is the order number in the format of eight digits?"
