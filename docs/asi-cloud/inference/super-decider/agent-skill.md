---
title: Agent skill
id: agent-skill
description: Install Singularity Compute's Super Decider skill so coding agents such as Claude Code, Codex, Cursor and Gemini CLI know how to build with the model.
---

Singularity Compute publishes a **Super Decider skill** for coding agents. With it installed, an agent such as Claude Code, Codex, Cursor or Gemini CLI knows when a feature needs a decision instead of generated text, how to write the questions, how to read the probabilities in code and how to call the API.

The skill works offline. It bundles:

- An API reference and a question-design guide.
- Patterns such as routing, confidence gating, guardrails, reranking, extraction and agent tool gating.
- Ten runnable Python examples.
- A guide to moving an existing Jev integration to Super Decider.
- Two scripts: `check_request.py` to validate a request body, and `decide.py` to send one.

Source: [Singularity-Compute/skills](https://github.com/Singularity-Compute/skills) on GitHub, Apache-2.0.

## Install

### Claude Code

Install it as a plugin:

```bash
claude plugin marketplace add Singularity-Compute/skills
```

```bash
claude plugin install super-decider@singularity-compute
```

### Codex, Cursor, Gemini CLI and other agents

Install it with [skills.sh](https://skills.sh) and pick your agent when prompted:

```bash
npx skills add Singularity-Compute/skills --skill super-decider
```

Add `-g` to install it for all projects.

### Manually

Copy the [`skills/super-decider/`](https://github.com/Singularity-Compute/skills/tree/main/skills/super-decider) folder into your agent's skills folder, for example `~/.claude/skills/super-decider/`.

## Point it at ASI:Cloud

The skill's examples and scripts read the API key from `API_KEY`, and the server address from `SUPER_DECIDER_URL`. By default they call Singularity Compute's own endpoint. To use ASI:Cloud, set both:

```bash
export API_KEY="your-asi-cloud-api-key"
export SUPER_DECIDER_URL="https://inference.asicloud.cudos.org"
```

Create the key on the [API keys](/docs/asi-cloud/profile/api-keys) page. The scripts add `/v1/systemone` to the address themselves.

When you ask the agent to write code, tell it to use the ASI:Cloud endpoint, `https://inference.asicloud.cudos.org/v1`, so the code it writes doesn't use the skill's default address.

## Use it

Ask your agent for a feature in plain language. For example:

> Use Super Decider to route incoming support tickets by team, with human review when it is unsure. Call it at https://inference.asicloud.cudos.org/v1.

> Add a guardrail that checks every message to and from our chatbot for prompt injection and personal data.

> We call Jev to classify leads. Switch the integration to Super Decider.

The agent loads the skill when the task matches. In Claude Code you can also call it directly with `/super-decider:super-decider`.

## Examples in the skill

| Example | Pattern |
| --- | --- |
| `route_tickets.py` | Routing, with speculative follow-up questions and a confidence gate to human review |
| `guardrails.py` | Screening LLM input and output: one yes/no per hazard, then block, review or pass in code |
| `rerank.py` | Reranking retrieved passages with one score each, plus an "is it answerable" check |
| `extract_values.py` | Copying values out of text with span questions, then validating them in code |
| `verify_claims.py` | Checking claims or citations against a source, with thinking on |
| `composite_score.py` | Scoring a lead on several dimensions and weighting them in code |
| `agent_tool_gate.py` | Deciding whether an agent's tool call runs, asks the user first, or is refused |
| `model_router.py` | Sending each request to the cheapest LLM that can handle it |
| `multilabel_moderation.py` | Labels that can apply together: one yes/no per label |
| `thinking_cascade.py` | A fast pass for everything, then a second pass with thinking only for unsure items |

Run one from the skill folder with `python3 examples/<name>.py`, after setting the environment variables above.

## Related

- [Migrate from Jev](./migrate-from-jev.md): the changes the skill makes when it moves a Jev integration.
- [Patterns](./patterns.md): the same patterns, explained in these docs.
