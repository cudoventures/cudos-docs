---
title: Questions
id: questions
description: The Super Decider question types, the typed answers they return, how to choose between them, and how to ask several at once.
---

A **question** tells Super Decider what to decide about the [state](./state.md). Each question has a type, and the type fixes the shape of the answer, so your code never has to parse free text.

## Anatomy of a question

On the `/v1/systemone` endpoint, `questions` is an object. Each key is the question's id, and the id is also the key of its answer in the response.

```json
"questions": {
  "next_step": {
    "type": "choice",
    "instructions": "What should support do next?",
    "criteria": {
      "refund_now": "Refund without a return",
      "start_return": "Start a return",
      "escalate": "Hand over to a human"
    }
  }
}
```

| Field | Description |
| --- | --- |
| `type` | `choice`, `score`, `noul`, `span` or `spans`. |
| `instructions` | The question, in plain language. |
| `criteria` | The allowed answers. Its shape depends on the type. |

Question ids must be unique within a request and can't be empty or contain `:` or a line break.

## Question types

| Type | Use it to | `criteria` | Answer |
| --- | --- | --- | --- |
| [`choice`](./choice.md) | Pick one option from a fixed set | Object: option name → description, or `null` | `choice`, `probabilities`, `confidence` |
| [`score`](./score.md) | Rate against ordered levels | Array of levels, lowest first | `score`, `legend`, `probabilities`, `confidence` |
| [`noul`](./noul.md) | Answer yes or no | Optional: `{"true": "...", "false": "..."}` | `noul`, the probability of yes |
| [`span`](./spans.md) | Quote one piece of the state | Optional: `{"max_tokens": n}` | `found`, `text`, `start`, `end`, `confidence`, `coverage` |
| [`spans`](./spans.md) | Quote every matching piece | Optional: `{"max_tokens": n, "max_items": n}` | `found`, `items` |

## Choosing a type

- **Is it yes or no?** Use a [noul](./noul.md). "Is this message spam?", "Does the invoice total match?"
- **Do the answers have an order?** Use a [score](./score.md). "How urgent is this?" with `low`, `medium`, `high`. The expected level lets you set thresholds between levels.
- **Are the answers separate categories?** Use a [choice](./choice.md). "Which team owns this ticket?", "Which tool should the agent call?"
- **Do you need the exact words from the input?** Use a [span](./spans.md). "What is the order number?", "Quote the clause that sets the notice period."

Before you reach for a choice with options like `yes`, `no` and `unsure`, consider a noul: its probability already tells you how unsure the model is.

## Ask several questions at once

A request can carry up to **64 questions**. The model fills every answer in one step, so a request with ten questions costs little more than a request with one, and much less than ten requests.

Group the questions you need about one state into one request. You can also add questions you might not need: see [speculative fan-out](./patterns.md#speculative-fan-out).

## Writing good questions

**Ask one thing per question.** "Is the customer angry and asking for a refund?" mixes two decisions. Split it into two nouls.

**Describe the options.** A short description per option, such as `"escalate": "Hand over to a human"`, tells the model where the boundaries are. A bare name is fine when it is unambiguous.

**Leave a way out.** If a case may fit none of the options, add one such as `other` or `escalate`. Otherwise the model must pick the least-wrong option.

**Keep the options in a fixed order.** Answers can shift when the same options are listed in a different order. Define each question once in code and reuse it.

**Put shared context in the state or in top-level `instructions`.** A policy that several questions depend on belongs in the state, or in the request's top-level `instructions` field, not repeated in each question's instructions.

**Name ids for what they mean.** Question ids appear in the prompt, so `refund_eligible` is better than `q3`. Still put the full question in `instructions`.

**Several labels can apply?** Ask one [noul](./noul.md) per label instead of one choice, because a choice always picks exactly one option.

## Chat completions shape

The [chat completions](./api/chat-completions.md) endpoint takes the same questions in a slightly different shape: a `questions` array with an `id` on each question, `options` for a choice and `levels` for a score.

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
