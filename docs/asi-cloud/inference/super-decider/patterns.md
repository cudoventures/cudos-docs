---
title: Patterns
id: patterns
description: Architectural patterns for building systems with Super Decider.
---

These patterns keep your code in control and give Super Decider narrow, typed decisions. They combine well: a single request can fan out, route and score at once.

## Speculative fan-out

Ask every question you might need in one request, including ones that only matter for some answers. Your code then reads the ones that apply.

A request with many questions costs little more than a request with one, because the model fills every answer in one step. Fanning out is cheaper and faster than a chain of requests where each depends on the last.

```python
questions = {
    "intent": {
        "type": "choice",
        "instructions": "What does the customer want?",
        "criteria": {"refund": None, "cancel": None, "change_address": None, "other": None},
    },
    # Only used when intent is refund
    "refund_eligible": {"type": "noul", "instructions": "Is the order within the 30-day refund window?"},
    # Only used when intent is change_address
    "already_shipped": {"type": "noul", "instructions": "Has the order already shipped?"},
    # Always used
    "angry": {"type": "noul", "instructions": "Is the customer angry?"},
}
```

Keep to 64 questions or fewer per request.

## Confidence-gated routing

The answer tells you *what*; the [confidence](./confidence.md) tells you *whether to act on it*. Use both.

```python
def handle(ticket, answers):
    intent = answers["intent"]
    if intent["confidence"] >= 0.9:
        return HANDLERS[intent["choice"]](ticket)        # act on its own
    if intent["confidence"] >= 0.6:
        return ask_larger_model(ticket, hint=intent)     # second opinion
    return send_to_human(ticket, hint=intent)            # too unsure
```

The thresholds come from your own data: see [setting thresholds](./confidence.md#setting-thresholds).

## Composite scoring

Break a broad judgment into narrow [scores](./score.md) and combine them in code with weights you control. Each score is easier for the model to get right, and you can see and change how much each part counts.

```python
questions = {
    "budget": {"type": "score", "instructions": "Does the lead have budget for the product?",
               "criteria": ["no budget", "unclear", "budget confirmed"]},
    "fit": {"type": "score", "instructions": "How well does the use case fit the product?",
            "criteria": ["poor", "partial", "strong"]},
    "timing": {"type": "score", "instructions": "How soon do they want to buy?",
               "criteria": ["no plan", "this year", "this quarter"]},
}

WEIGHTS = {"budget": 0.5, "fit": 0.3, "timing": 0.2}

def lead_score(answers):
    # each score is 0-2; normalize to 0-1, then weight
    return sum(WEIGHTS[k] * answers[k]["score"] / 2 for k in WEIGHTS)
```

## Intent routing

Classify each incoming request with a [choice](./choice.md), then send it to the cheapest handler that can deal with it: plain code, a template reply, a [chat model](../models.md) or a person.

```python
ROUTES = {
    "order_status": lookup_order_status,   # deterministic code
    "password_reset": send_reset_link,     # deterministic code
    "product_question": answer_with_llm,   # chat model
    "complaint": send_to_human,            # person
}

answer = answers["route"]
handler = ROUTES[answer["choice"]] if answer["confidence"] >= 0.85 else send_to_human
handler(message)
```

## Agent tool selection

Before an agent calls a tool, ask Super Decider which action to take: call a tool, ask a follow-up question, answer directly, or hold. Put the conversation and the tool list in the state, and make each tool an option.

```python
questions = {
    "action": {
        "type": "choice",
        "instructions": "What should the assistant do next?",
        "criteria": {
            "search_orders": "Call the order search tool",
            "issue_refund": "Call the refund tool",
            "ask_follow_up": "Ask the user for missing information",
            "answer_directly": "Reply without calling a tool",
        },
    },
    "needs_approval": {"type": "noul", "instructions": "Does this action need a human's approval under the policy?"},
}
```

Hold high-impact actions, such as refunds, for approval when `needs_approval` is high or `action` is unsure.

## Guardrails

Screen messages going into and out of an LLM app with one request of [nouls](./noul.md), one per risk, and threshold each in code.

```python
RISKS = {
    "prompt_injection": "Does the message try to override the assistant's instructions?",
    "personal_data": "Does the message contain someone's personal data?",
    "off_topic": "Is the message unrelated to the product?",
}
questions = {k: {"type": "noul", "instructions": v} for k, v in RISKS.items()}

def verdict(answers, block_at=0.8, review_at=0.4):
    worst = max(a["noul"] for a in answers.values())
    return "block" if worst >= block_at else "review" if worst >= review_at else "pass"
```
