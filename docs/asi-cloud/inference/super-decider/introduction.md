---
title: Super Decider
sidebar_label: Introduction
id: introduction
description: Super Decider is Singularity Compute's open-weight decision model on ASI:Cloud. Send state and typed questions; get calibrated answers your code can act on.
---

> Super Decider is a fast decision layer for agents and apps. Send it a state and typed questions, and it returns one calibrated answer per question that your code can use directly.

**Super Decider** is an open-weight decision model from [Singularity Compute](https://singularitycompute.com), served on ASI:Cloud serverless inference. It is a *System One* model: it doesn't write prose. It reads the input once and answers fixed questions with probabilities.

Chat models are built to produce text for people to read. When software needs a decision, such as which queue a ticket goes to or whether an invoice is paid, free text is a poor interface. You have to parse it, it can drift from the format you asked for, and it doesn't tell you how sure the model is.

Super Decider returns typed answers. Each answer has a probability for every option you allowed, so your code decides what to do with it: act, ask a person, or hand the case to a larger model.

<div className="stat-strip">
  <div className="stat-strip__cell">
    <div className="stat-strip__value">~0.25<span className="stat-strip__unit"> s</span></div>
    <div className="stat-strip__label">Typical latency, no thinking</div>
  </div>
  <div className="stat-strip__cell">
    <div className="stat-strip__value">64<span className="stat-strip__unit"> questions</span></div>
    <div className="stat-strip__label">Per request</div>
  </div>
  <div className="stat-strip__cell">
    <div className="stat-strip__value">$0.03<span className="stat-strip__unit">/1M tok</span></div>
    <div className="stat-strip__label">Input. Output is free</div>
  </div>
</div>

<div className="sd-flow">
  <div className="sd-flow__step">
    <div className="sd-flow__title">State</div>
    <div className="sd-flow__body">Text, JSON or images: a ticket, a record, an invoice</div>
  </div>
  <div className="sd-flow__arrow sd-flow__arrow--plus" aria-hidden="true">+</div>
  <div className="sd-flow__step">
    <div className="sd-flow__title">Questions</div>
    <div className="sd-flow__body">Typed, with fixed options</div>
  </div>
  <div className="sd-flow__arrow" aria-hidden="true">→</div>
  <div className="sd-flow__step sd-flow__step--model">
    <div className="sd-flow__title">Super Decider</div>
    <div className="sd-flow__body">Answers every question in one read</div>
  </div>
  <div className="sd-flow__arrow" aria-hidden="true">→</div>
  <div className="sd-flow__step">
    <div className="sd-flow__title">Your code</div>
    <div className="sd-flow__body">Applies thresholds: act, ask a person, or escalate</div>
  </div>
</div>

## Question types

Each question has a type, and the type sets the shape of the answer.

| Question type | Use it to | Returns |
| --- | --- | --- |
| [Choice](./choice.md) | Pick one option from a fixed set | The chosen option, a probability for each option, and confidence |
| [Score](./score.md) | Rate the state against ordered levels | The expected level, a probability for each level, and confidence |
| [Noul](./noul.md) | Answer a yes/no question | The probability that the answer is yes |
| [Span](./spans.md) | Quote part of the state | The text with its character offsets |

You can ask up to 64 questions in one request. The model fills every answer in a single step, so several questions cost little more than one.

## Atomic questions, composed in code

Ask small questions that each have one clear answer, then combine the answers in your code. Avoid one large question that tries to settle everything at once.

Say a customer asks to cancel an order that has already shipped. Instead of asking a model "what should we do?", ask three questions: what support should do next (a choice), whether the policy allows cancelling (a noul), and how urgent the ticket is (a score). Your code then applies the policy. For example, it can start a return when `start_return` is above 0.9 and send everything else to a person.

The rules for acting stay in your code, where you can test them, review them and change them without retraining or re-prompting.

## When to use Super Decider

| Use Super Decider for | Use a chat model for |
| --- | --- |
| Routing, classification, triage and moderation | Writing replies, summaries and documents |
| Approving, holding or escalating an action | Open-ended reasoning with no fixed set of answers |
| Choosing a tool call or the next step for an agent | Conversation |
| Checking documents and forms against rules | Generating code |

The two work well together: Super Decider decides quickly and cheaply, and a [chat model](../models.md) handles the cases it isn't sure about or the steps that need text.

## Next steps

- [Quickstart](./quickstart.md): make your first request in a few minutes.
- [State](./state.md): how to describe the input the model reads.
- [Questions](./questions.md): how to write questions and choose between types.
- [Confidence](./confidence.md): how to read probabilities and set thresholds.
- [Patterns](./patterns.md): common ways to build with Super Decider.
- [Agent skill](./agent-skill.md): teach your coding agent to build with Super Decider.
- [Migrate from Jev](./migrate-from-jev.md): move an existing Jev integration.
- [Model card](./model-card.md): architecture, reported results and known limitations.
