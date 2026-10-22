---
title: Confidence
id: confidence
description: How Super Decider reports certainty, how confidence relates to probability, and how to use it to control your system.
---

Every Super Decider answer tells you how sure the model is. That is what lets your code decide when to act on its own and when to hand off.

## Probability and confidence

- **Probabilities** are the model's spread over the allowed answers. A choice has one per option, a score one per level, and a noul has the probability of yes.
- **Confidence** is the probability of the answer the model picked.

| Question type | Probabilities | Confidence |
| --- | --- | --- |
| Choice | `probabilities`: one per option | Probability of `choice` |
| Score | `probabilities`: one per level | Probability of the most likely level |
| Noul | `noul`: the probability of yes | On chat completions, the probability of `label` (the larger of P(yes) and P(no)) |
| Span | Not returned | The weakest probability along the quoted text |

## What calibrated means

Super Decider is trained to be *calibrated*: when it gives an answer a probability of 0.9, it should be right about 90% of the time. This is what makes thresholds meaningful. A threshold of 0.95 should leave fewer errors than a threshold of 0.8, at the cost of acting on fewer cases.

Calibration is measured over many cases, not one. Check it on your own data before you rely on it: see [Setting thresholds](#setting-thresholds).

## Confidence-gated actions

The most common pattern uses two thresholds: act above the high one, reject below the low one, and send the rest to a person or a larger model.

```python
def route(answer, act_at=0.9):
    if answer["confidence"] >= act_at:
        return "auto"
    return "review"

answer = answers["next_step"]
if route(answer) == "auto":
    run_action(answer["choice"])
else:
    queue_for_review(ticket, suggestion=answer["choice"], probabilities=answer["probabilities"])
```

Pass the probabilities on to the reviewer or the fallback model. "The model thinks `start_return` at 0.6 or `escalate` at 0.35" is more useful than a bare case.

## Other signals

- **Margin.** The gap between the top two options. A small margin means the case sits on a boundary between them.
- **Grouped probability.** Add up the probabilities of options that lead to the same action before you threshold.
- **Agreement across questions.** If a choice says `refund_now` but a noul says the refund isn't allowed, the answers disagree. Send the case for review.

## Setting thresholds

1. Collect a few hundred past cases where you know the right answer.
2. Run them through Super Decider with the questions you plan to use.
3. For each candidate threshold, measure two things: how many cases are above it (coverage), and how many of those are right (accuracy).
4. Pick the threshold that gives the accuracy you need with the most coverage.

Repeat this when you change a question's wording, its options or the shape of the state. Those changes can move the probabilities.

## When confidence is high but wrong

Calibration is a property of many answers, not a guarantee for each one. The model is sometimes confidently wrong on multi-step date and money calculations. For those, compute values in code, or turn on [thinking](./thinking.md). See the [known limitations](./model-card.md#known-limitations).
