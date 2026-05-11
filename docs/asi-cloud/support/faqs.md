---
title: FAQs
id: faqs
---

# Frequently Asked Questions

## I have a problem I can't figure out. What do I do?

Please reach out to us and ask for help in the `asi-cloud-support` channel in the [CUDOS Discord server](https://discord.com/invite/cudos).

---

## Serverless Inference

### What's the base API endpoint and how do I authenticate?

Use the ASI:Cloud Inference API base URL and include your API key:

```http
POST https://inference.asicloud.cudos.org/v1
Authorization: Bearer <ASI_API_KEY>
Content-Type: application/json
```

### How do I get an API key?

Log in to your ASI:Cloud dashboard and generate an LLM API key from the Models page or the **Manage API keys** dialog. One key works across all supported models.

### Is it OpenAI-compatible?

Yes. The Chat Completions API is OpenAI-compatible. You can point your OpenAI client at the ASI base URL and pass your ASI key.

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

### Which models are available?

A curated set including ASI's own model and popular open-weight instruct and reasoning models — for example `asi1-mini`, **Gemma 3 / Gemma 4** (Google), **gpt-oss-20b / gpt-oss-120b** (OpenAI), **Hermes 4 70B** (Nous Research), **Qwen**, **Llama**, **GLM** and **Mistral** variants. The full list with context lengths is available directly in the [ASI:Cloud inference dashboard](https://asicloud.cudos.org/inference).

### Is there a free model to test with?

Yes — `asi1-mini` is free to use (funded by ASI). You can also try any model through the built-in chat UI on each model's page.

### How is pricing structured?

Pricing is per model, with separate input and output token rates. Current prices are shown directly in the [ASI:Cloud inference dashboard](https://asicloud.cudos.org/inference).

### What's the maximum context length?

It varies by model — current top-end models on the platform expose context windows in the **128k–222k token** range. Check the model selector in the [inference dashboard](https://asicloud.cudos.org/inference) for the exact context window of each model.

### Any best practices for production?

- Keep prompts concise and set a sensible `max_tokens`.
- Use streaming for better UX and lower latency.
- Add idempotent retries and request timeouts.
- Truncate long chat histories and cache system prompts.
- Track usage, latency, and error rates per model/version.

### Quick reference: common endpoints

- **Chat Completions**: `POST /chat/completions`
- **Base URL**: `https://inference.asicloud.cudos.org/v1`

---

## Speech

### Can I transcribe audio with ASI:Cloud?

Yes. Open **Serverless Inference → Speech** in the dashboard. Upload an audio file (or record one in the browser) and click **Generate transcript**. Limits: max 50 MB, 20 minutes, 16 kHz, English.

### Is there a text-to-speech option?

Yes — switch to the **Synthesise** tab on the Speech page. The **History** tab lists your previous transcription and synthesis jobs.

---

## Account & login

### How do I sign in?

You can sign up and sign in with any of: **Google**, **Discord**, **MetaMask**, **ASI Wallet**, **Keplr**, **WalletConnect**, or **email + password**. No KYC is required.

### Can I link more than one login method to my account?

Yes. Open **Settings → My Login methods → Connect a new log in method** and pick a provider. The new method works alongside the existing one — both will sign you in to the same account.

### I don't see a Password Change section in Settings. Why?

If you signed up with a wallet, Google or Discord, your account doesn't have a password configured. To enable password sign-in, add an email login method first via **Settings → My Login methods → Connect a new log in method**.

---

## Payments

### Do you accept bank cards / fiat?

Yes. **Card** payments are processed via **Stripe** on the Add funds page. You can also pay with cryptocurrency on multiple chains.

### How do I fund usage? Do I need crypto?

No, crypto is no longer required. You can fund your account with:

- **Card** (Stripe) — minimum $10.00.
- **Crypto** — FET on Fetch.ai mainnet; USDT/USDC on Ethereum, Polygon and Osmosis; OSMO on Osmosis; minimum varies by token (e.g. $5 for FET).

For crypto payments, you don't need to link a wallet to your account — just approve the top-up from a browser-extension wallet (e.g. MetaMask) or via WalletConnect at checkout. See [Managing Payments → CRYPTO](../usage/via-user-interface/payments#crypto) for the full flow.

### Is there a minimum top-up?

Yes:

- **Card**: $10.00 minimum.
- **Crypto**: typically **$5.00**, though it varies by token. The platform will show the minimum for whatever you select.

See [Managing Payments](../usage/via-user-interface/payments) for the current thresholds.

### Why is the credit I selected as payment not equal to my new balance?

Because crypto prices and network fees fluctuate frequently between when you initiate a transfer and when it lands on-chain. The platform credits you a stable USD amount after automated conversion and fees. For card payments, if you select a non-USD presentation currency at Stripe checkout, an additional **4% conversion fee** is applied.

### I've made a payment but my balance has not updated after a few minutes. What should I do?

Please reach out to us in the `asi-cloud-support` channel in the [CUDOS Discord server](https://discord.com/invite/cudos) and we will help you.

### Can I use another wallet provider to connect a blockchain identity?

For sign-in we support **MetaMask, ASI Wallet, Keplr** and **WalletConnect**. For crypto top-ups we currently support **MetaMask** (EVM chains) and **WalletConnect**, with Keplr-style wallets on Cosmos chains. Follow our socials for product updates.

### Where can I find a receipt for a payment I've made?

Open the **Payment history** tab on the Payments page, click any completed transaction, and use **Download Receipt (PDF)**. The receipt includes the transaction hash and a link to the public block explorer for crypto payments. Note that the receipt is an automated payment receipt — it is not a tax document or a formal invoice.

### Can my account be topped up automatically when it runs low?

Yes. When paying by card, tick **Enable auto-top up** on the Add funds form to keep your machines and inference running without manual top-ups. You can change auto-top-up settings later.

---

## Infrastructure

### Why can't I find Windows in the list of images?

Windows is currently not supported due to technical limitations. Available distributions include Ubuntu, Fedora, Debian, CentOS and a number of GPU-focused images with Docker and NVIDIA drivers preinstalled. Follow our socials for updates on changes and new features.

### What's the command to connect to my VM?

`ssh root@ip-address`, where you can copy the IP address from the ASI:Cloud interface.

### Do I still have to pay even if the VM is powered off?

Yes — while the VM exists, the resources assigned to it are reserved for you, even if the OS is powered off. To stop being billed, **destroy** the VM rather than just stopping it.

### Why can't I create a VM even though I am logged in already?

This issue can result from a number of reasons (insufficient balance, missing wallet connection for the chosen payment method, region capacity, etc.). Join our [Discord community](https://discord.com/invite/cudos) for help and provide as much detail as possible when describing the issue.

### Is there a minimum amount of time I need to rent the VM?

Virtual machines are metered **hourly**. The hourly rate begins as soon as the machine is provisioned and stops when you destroy it.

:::note
The **Duration Type** and **Duration** controls in the payment step do **not** change the billing rate — VMs are always billed hourly. Those controls are an estimator that lets you size your top-up correctly (e.g. picking *Monthly × 1* funds you for ~one month of continuous runtime).
:::

### How can I access my VM?

You will need a 3rd-party SSH client to connect to the VM. The choice is normally a personal preference, and we advise you to research your options.

### Can I modify the VM once it's deployed?

No, the VM resources cannot be modified after the VM is deployed. Destroy the VM and create a new one with the desired configuration.

### Why am I being charged if my VM is stopped?

When the VM is in a *Stopped* state the resources are still reserved for that VM, and you will continue to be charged for it. If you wish not to be charged once you are done using it, **destroy** the VM.

