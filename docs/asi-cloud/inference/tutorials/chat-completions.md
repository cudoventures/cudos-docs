---
title: Chat completions tutorial
id: chat-completions
---

# Chat Completions (OpenAI-Compatible) Guide

## Hello World — Single Turn

_This is the simplest possible use case: send one prompt and receive one complete reply. Ideal for FAQs, search, or one-shot reasoning tasks._

**Python**

```python
import os, openai
client = openai.OpenAI(api_key=os.environ["ASI_API_KEY"], base_url="https://inference.asicloud.cudos.org/v1")

resp = client.chat.completions.create(
  model="google/gemma-3-27b-it",
  messages=[{"role":"user","content":"What is the capital of Japan?"}]
)

print(resp.choices[0].message.content)

```

**curl**

```bash
curl https://inference.asicloud.cudos.org/v1/chat/completions \
  -H "Authorization: Bearer $ASI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model":"google/gemma-3-27b-it",
    "messages":[{"role":"user","content":"Tell me a fun fact about cats."}]
  }'


```

---

## Multi-Turn Conversations (History)

_Models do not automatically remember previous queries. To maintain context, you must include the conversation history (both user and assistant messages) in each request. This enables true chatbot-like interactions._

**Python**

```python
resp = client.chat.completions.create(
  model="google/gemma-3-27b-it",
  messages=[
    {"role":"user","content":"What can I do in New York?"},
    {"role":"assistant","content":"You could visit Central Park or Times Square."},
    {"role":"user","content":"That sounds fun! What about in the evening?"}
  ]
)
print(resp.choices[0].message.content)

```

**curl**

```bash
curl https://inference.asicloud.cudos.org/v1/chat/completions \
  -H "Authorization: Bearer $ASI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "google/gemma-3-27b-it",
    "messages": [
      {"role":"user","content":"What can I do in New York?"},
      {"role":"assistant","content":"You could visit Central Park or Times Square."},
      {"role":"user","content":"That sounds fun! What about in the evening?"}
    ]
  }'

```

---

## Steering Behavior via `system`

_The `system` role sets global instructions for the model. Use this to establish a persona, domain expertise, or communication style. For example, you can make the assistant act like a blockchain auditor, a teacher, or a concise technical lead._

```python
resp = client.chat.completions.create(
  model="google/gemma-3-27b-it",
  messages=[
    {"role":"system","content":"You are a friendly travel guide. Keep answers short and practical."},
    {"role":"user","content":"What should I eat in Italy?"}
  ]
)
```

---

## Streaming (SSE / token-by-token)

_Instead of waiting for the full answer, you can receive tokens incrementally as they are generated. This reduces perceived latency and improves UX in chat interfaces or dashboards. The Python SDK and curl both support this._

**Python**

```python
import os, openai
client = openai.OpenAI(api_key=os.environ["ASI_API_KEY"], base_url="https://inference.asicloud.cudos.org/v1")

stream = client.chat.completions.create(
  model="google/gemma-3-27b-it",
  messages=[
    {"role":"system","content":"You are a helpful assistant."},
    {"role":"user","content":"Tell me a story about a dragon."}
  ],
  stream=True,
)

for chunk in stream:
  print(chunk.choices[0].delta.content or "", end="", flush=True)

```

**curl (SSE)**

```bash
curl -N https://inference.asicloud.cudos.org/v1/chat/completions \
  -H "Authorization: Bearer $ASI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model":"google/gemma-3-27b-it",
    "stream": true,
    "messages":[{"role":"user","content":"Write me a short bedtime story."}]
  }'

```

---

## Parameters You’ll Use Often

_The API supports many optional parameters. These are the most practical to know:_

- **model** _(string)_ — the deployed model ID.
    
- **messages** _(array)_ — chat history with roles `system`, `user`, `assistant`.
    
- **stream** _(bool)_ — return output incrementally.
    
- **temperature** _(float)_ — controls creativity/randomness (0 = deterministic, 1 = creative).
    
- **top_p** _(float)_ — probability mass cutoff for sampling (an alternative to temperature).
    
- **max_tokens** _(int)_ — cap response length to avoid runaway generations.

**Example**

```json
{
  "model": "google/gemma-3-27b-it",
  "messages": [{"role":"user","content":"Give me 3 ideas for a birthday gift."}],
  "temperature": 0.7,
  "max_tokens": 200
}
```

## Production Tips

Best practices to keep apps stable and fast.

- Keep prompts simple: short and clear questions usually work best.
- Limit answers: set max_tokens so the model doesn’t produce too much text.
- Retry safely: add retries with short delays for temporary errors.
- Track usage: log tokens used, latency, and error codes.
- Manage history: if conversations are long, keep only the most important parts.
- Use streaming: improves user experience in chat apps.