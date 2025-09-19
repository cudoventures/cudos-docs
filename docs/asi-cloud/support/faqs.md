---
title: FAQs
id: faqs
---

# Frequently Asked Questions

### I have a problem I can't figure out. What do I do?
Please reach out to us and ask for help in the [`asi-cloud-support` channel in the CUDOS Discord server](https://discord.com/invite/cudos).

---

## Serverless Inference

### What’s the base API endpoint and how do I authenticate?
Use the ASI Cloud Inference API base URL and include your API key:

```http
POST https://inference.asicloud.cudos.org/v1
Authorization: Bearer <ASI_API_KEY>
Content-Type: application/json
```

---

### How do I get an API key?
Log in to your ASI Cloud dashboard and generate an LLM API key. One key works across all supported models.

---

### Is it OpenAI-compatible?
Yes. The [**Chat Completions**](/docs/asi-cloud/inference/tutorials/chat-completions) API is OpenAI-compatible. You can point your OpenAI client at the ASI base URL and pass your ASI key.

**Node.js example (OpenAI SDK-compatible):**
```js
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.ASI_API_KEY,
  baseURL: "https://inference.asicloud.cudos.org/v1"
});

const resp = await client.chat.completions.create({
  model: "asi1-mini",
  messages: [{ role: "user", content: "Hello!" }]
});
console.log(resp.choices[0].message.content);
```

---

### Do you support streaming responses (token-by-token)?
Yes. Set `stream: true` to receive Server-Sent Events (SSE).

```js
const stream = await client.chat.completions.create({
  model: "asi1-mini",
  messages: [{ role: "user", content: "Write a haiku about clouds." }],
  stream: true
});

for await (const chunk of stream) {
  process.stdout.write(chunk.choices?.[0]?.delta?.content ?? "");
}
```

---

### Can models return structured JSON?
Yes. Use `response_format`.

```json
{
  "model": "asi1-mini",
  "messages": [{ "role": "user", "content": "Return user {name, age} as JSON." }],
  "response_format": { "type": "json_object" }
}
```

You can also provide a `json_schema` to constrain the output.

---

### Which models are available?
A curated set including ASI and popular open-weight instruct models (e.g., Gemma, Qwen, Llama, GLM, Mistral). Check the [Available Models](/docs/asi-cloud/inference/models) table in the docs for the full, current list, context lengths, and capabilities.

---

### Is there a free model to test with?
Yes — **`asi1-mini`** is free to use (funded by ASI). You can also try any model through the built-in chat UI on each model’s page.

---

### How is pricing structured?
Pricing is **per model**, with separate **input** and **output** token rates. See the [pricing table](/docs/asi-cloud/inference/pricing) for the latest amounts.

---

### What’s the maximum context length?
It varies by model. Refer to the [Available Models](/docs/asi-cloud/inference/models) table for the exact context window of each model.

---

### Any best practices for production?
- Keep prompts concise and set a sensible `max_tokens`.  
- Use streaming for better UX and lower latency.  
- Add idempotent retries and request timeouts.  
- Truncate long chat histories and cache system prompts.  
- Track usage, latency, and error rates per model/version.


---

### Quick reference: common endpoints
- **Chat Completions:** `POST /chat/completions`  
- **Base URL:** `https://inference.asicloud.cudos.org/v1`

## Payments

### Is there a minimum top-up?
Typically **$5** (may vary). See [Payments](/docs/asi-cloud/usage/via-user-interface/payments) for current thresholds.

---

### Why is the credit I selected as payment not equal to my new balance?
Because currency prices and fees fluctuate frequently, and the platform credits you a fixed, stable amount after the automated trading and fees.

---

### I've made a payment but my balance has not updated after a few minutes. What should I do?
Please reach out to us the [`asi-cloud-support` channel in the CUDOS Discord server](https://discord.com/invite/cudos) and we will help you.

---

### How do I fund usage? Do I need crypto?
Yes. Connect a supported wallet (e.g., Keplr, MetaMask, ASI wallet) and top up with supported cryptocurrencies from the [Payments](/docs/asi-cloud/usage/via-user-interface/payments) page.

---

### Do you accept bank cards / fiat?
Not currently. Follow announcements for updates on fiat support.

---

### Can I use another wallet provider to connect a blockchain identity?
We currently support Keplr, MetaMask and ASI wallet, but make sure to follow our socials for product updates.

## Infrastructure

### Why can’t I find Windows in the list of images?
Windows is currently not supported due to technical limitations. Make sure you follow our socials for updates on changes and new features.

---

### What’s the command to connect to my VM?
`ssh root@ip-address` where you can copy the `ip-address` from the ASI Cloud interface.

---

### Do I still have to pay even if the VM is powered off?
Yes, because while the VM is not powered on, the resources you have assigned to the VM are reserved for your VM.

---

### Why can’t I create a VM even though I am logged in already?
This issue can result from a multitude of reasons. Join our Discord community for support from our community members and dedicated support members. Ensure you provide them with as much information as possible when describing your issue.

---

### Is there a minimum amount of time I need to rent the VM?
You are billed for the whole first hour of a VM’s life, and while you may stop using and terminating it at any point during that hour, you will not be reimbursed for the remaining time.

---

### How can I access my VM?
You will need a 3rd party tool to access the VM using SSH protocol. This is normally a personal preference, and we advise you to research your options.

---

### Can I modify the VM once it’s deployed?
No, the VM resources cannot be modified after the VM is deployed.

---

### Why am I being charged if my VM is stopped?
When the VM is in a Stopped state, the resources are still reserved for that VM, and you will continue to be charged for it. If you wish not to be charged once you are done using it, destroy the VM.
