---
title: State
id: state
description: What state is, how to structure it, and how to give Super Decider the context it needs.
---

The **state** is everything Super Decider reads before it answers: a support ticket, a database record, a chat history, a contract, a scanned invoice. Questions are asked *about* the state.

The model only knows what is in the state and in the questions. If an answer depends on a policy, a date or a customer's history, put it in the state.

## Formats

The state can be:

- **Text**: a plain string.
- **JSON**: any JSON value. Use objects to keep fields apart, such as `ticket`, `customer` and `policy`.
- **Images**: up to 8 images sent alongside the state. See [Images](./images.md).

```json
{
  "model": "super-decider",
  "state": {
    "ticket": "I was charged twice for my March subscription.",
    "customer": {"plan": "Pro", "tenure_months": 26, "open_tickets": 0},
    "policy": "Duplicate charges are refunded automatically within 7 days."
  },
  "questions": {
    "intent": {
      "type": "choice",
      "instructions": "What is the customer asking for?",
      "criteria": {"refund": null, "cancel": null, "technical_help": null, "other": null}
    }
  }
}
```

:::note Chat completions
On the [chat completions](./api/chat-completions.md) endpoint the state goes in the `user` message and must be JSON-encoded, even a plain string. In Python, wrap it with `json.dumps(state)`. Raw text returns a 400 error.
:::

## Size

A request can hold up to **131,072 tokens**, state and questions together. A state that is too long returns a 400 error with the reason.

Input tokens are billed, so trim the state to what the questions need. A shorter state is also faster.

## Writing good state

**Include the facts the decision depends on.** If the answer turns on a refund window, state the window and the delivery date. Don't assume the model knows your rules.

**Label each part.** With JSON, field names such as `policy`, `customer_message` and `order` tell the model what each part is. With text, use short headings or prefixes such as `Policy:`.

**Keep the same structure from request to request.** Answers can shift when the input changes in ways that keep its meaning, such as the order of JSON keys. Build the state the same way every time, for example with a fixed function that writes keys in a fixed order.

**Write in English.** The model's training data is English-centric.

**Do the arithmetic in code where you can.** The model is sometimes confidently wrong on multi-step date and money calculations. Compute values such as "days since delivery" or "amount outstanding" before you send the state. When you can't, turn on [thinking](./thinking.md).

## State and span questions

[Span](./spans.md) answers point back into the state with character offsets. When the state is a string, offsets count from its start. When the state is JSON, offsets count into its `text` field, so put the text you want quoted from in a field named `text`.

## Next steps

- [Questions](./questions.md): ask about the state.
- [Images](./images.md): send images with the state.
