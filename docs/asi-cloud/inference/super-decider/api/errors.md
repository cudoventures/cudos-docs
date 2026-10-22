---
title: Limits and errors
id: errors
description: Super Decider request limits and HTTP error responses.
---

## Limits

| Limit | Value |
| --- | --- |
| Tokens per request | 131,072, state and questions together |
| Questions per request | 64 |
| Options per choice | Tested up to 151 |
| Images per request | 8, as base64 data URLs |
| `thinking_budget` | 16 to 4096 tokens |
| Span `max_tokens` | 1 to 96 |
| Spans `max_items` | 1 to 64 |

## Errors

| Status | When | Body |
| --- | --- | --- |
| 400 | `model` is missing | `{"error": "Model name not provided"}` |
| 400 / 422 | Invalid request: unknown `thinking` value, bad question shape, state too long, raw text state on chat completions | `{"error": {"code": ..., "message": "..."}}` |
| 401 | Missing or wrong API key | `{"error": {"code": "authentication_error", "message": ...}}` |
| 429 | Rate limit for your key | Retry after a short wait |

### Reading validation errors

The `message` of a validation error is itself a JSON string. Parse it to get the reason, for example `thinking: one of "off", "auto", "auto_forced", "always"`.

```python
import json

resp = requests.post(url, headers=headers, json=body, timeout=30)
if resp.status_code in (400, 422):
    error = resp.json()["error"]
    if isinstance(error, dict):
        try:
            reason = json.loads(error["message"])
        except (TypeError, ValueError):
            reason = error["message"]
        print("Invalid request:", reason)
```

### Retrying

Retry 429 and 5xx responses with exponential backoff, for example waits of 0.5 s, 1 s and 2 s. Don't retry 400, 401 or 422: fix the request or the key first.

## Getting help

If you think a response is wrong or the service is misbehaving, contact [ASI:Cloud support](/docs/asi-cloud/support/general-support).
