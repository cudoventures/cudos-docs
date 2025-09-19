---
title: Structured JSON output tutorial
id: structured-output
---

Most LLMs respond with plain text, but you can force them to reply in JSON using the response_format parameter.
This is useful for apps where you want predictable, structured data instead of free-form text.

## Quick Checklist

Add to the system message: “Only respond in JSON. Do not include extra text.”

Pass `response_format={"type": "json_object"}` (or `json_schema` if you want strict validation).

Always validate the JSON client-side (e.g., json.loads() in Python, Pydantic/Zod schema validation).

### Basic Example (Python)
```
resp = client.chat.completions.create(
  model="google/gemma-3-27b-it",
  response_format={"type": "json_object"},
  messages=[
    {"role": "system", "content": "Only respond in JSON with keys: item and reason."},
    {"role": "user", "content": "Suggest 2 healthy dinner ideas."}
  ]
)

print(resp.choices[0].message.content)  # JSON string
```

### Basic Example (cURL)
```
curl https://llm.c.singularitynet.dev/v1/chat/completions \
  -H "Authorization: Bearer $ASI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "google/gemma-3-27b-it",
    "response_format": {"type": "json_object"},
    "messages": [
      {"role": "system", "content": "Only respond in JSON with keys: city and attraction."},
      {"role": "user", "content": "Give me 2 places to visit in Paris."}
    ]
  }'
```

## Supported Models for Structured Output

The following models in your list can be used with response_format to generate structured JSON:

- google/gemma-3-27b-it
- qwen/qwen3-32b
- meta-llama/llama-3.3-70b-instruct
- z-ai/glm-4.5-air
- openai/gpt-oss-20b (most reliable in strict JSON mode)