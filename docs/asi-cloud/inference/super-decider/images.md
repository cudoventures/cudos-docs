---
title: Images
id: images
description: Send images such as invoices, receipts, screenshots and scanned forms to Super Decider.
---

Super Decider can read images along with the state: invoices, receipts, screenshots, scanned forms. Ask the same typed questions as with text.

## Limits

| Limit | Value |
| --- | --- |
| Images per request | Up to 8 |
| Format | Base64 data URLs inside the JSON body, such as `data:image/png;base64,...` |
| Multipart uploads | Not supported |
| HTTP(S) image links | Untested |
| Thinking | Only with `"thinking": "always"` |

:::note
Super Decider wasn't fine-tuned on images. It reads them through its base model's vision path. Test it on your own documents before you rely on it, and check the [known limitations](./model-card.md#known-limitations).
:::

The first image request after the model restarts can take about 5 seconds while it warms up.

## On `/v1/systemone`

Put an `images` array next to `state`. The state can describe where the images come from.

```python
import base64
import json
import os
import requests

with open("invoice.png", "rb") as f:
    img = base64.b64encode(f.read()).decode()

body = {
    "model": "super-decider",
    "state": "Scanned document from the accounts payable inbox.",
    "images": [f"data:image/png;base64,{img}"],
    "questions": {
        "doc_type": {
            "type": "choice",
            "instructions": "What kind of document is this?",
            "criteria": {
                "invoice": "An invoice",
                "receipt": "A store receipt",
                "contract": "A contract",
                "other": "Something else",
            },
        },
        "total_ok": {
            "type": "noul",
            "instructions": "Does the TOTAL equal the subtotal plus tax?",
        },
        "vendor": {
            "type": "choice",
            "instructions": "Who issued the document?",
            "criteria": {
                "acme": "ACME Office Supplies",
                "northwind": "Northwind Ltd",
                "unknown": "Not shown",
            },
        },
    },
}

r = requests.post(
    "https://inference.asicloud.cudos.org/v1/systemone",
    headers={"Authorization": f"Bearer {os.environ['ASI_API_KEY']}"},
    json=body,
    timeout=60,
)
print(json.dumps(r.json()["answers"], indent=2))
```

On Singularity Compute's [sample invoice](https://github.com/Singularity-Compute/super-decider/blob/main/docs/invoice-demo.png), the model answers `invoice` (0.95), `total_ok` 0.93 and `acme` (0.95).

## On chat completions

Put the images in the `user` message as `image_url` parts. You can add a `text` part with extra context.

```python
import json
import os
from openai import OpenAI

client = OpenAI(
    base_url="https://inference.asicloud.cudos.org/v1",
    api_key=os.environ["ASI_API_KEY"],
)

r = client.chat.completions.create(
    model="super-decider",
    messages=[
        {"role": "system", "content": json.dumps({"questions": [
            {"id": "doc_type", "type": "choice", "instructions": "What kind of document is this?",
             "options": [{"name": "invoice"}, {"name": "receipt"}, {"name": "contract"}, {"name": "other"}]},
            {"id": "total_ok", "type": "noul", "instructions": "Does the TOTAL equal the subtotal plus tax?"},
            {"id": "amount_band", "type": "score", "instructions": "How large is the invoice total?",
             "levels": ["under $100", "$100-$1,000", "over $1,000"]},
        ]})},
        {"role": "user", "content": [
            {"type": "image_url", "image_url": {"url": f"data:image/png;base64,{img}"}},
            {"type": "text", "text": "Scanned document from the accounts payable inbox."},
        ]},
    ],
)
answers = json.loads(r.choices[0].message.content)["answers"]
```

## Tips

- Send images at a resolution where the text is readable. Crop away margins and unrelated content.
- The automatic [thinking](./thinking.md) modes don't apply to image requests. When a check depends on a calculation, such as a total, set `"thinking": "always"`, or extract the numbers with questions and do the arithmetic in code.
- Keep a person in the loop for low-confidence answers, especially for payments.
