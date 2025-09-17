---
title: Dedicated Inference VLLM 
id: dedicated-inference-vllm
---

## Setup

The LLMs are served using a vLLM Open AI server, so they come with an Open AI compatible API. An example is shown below.

**After launching a model you may have to wait up to 30 minutes for the API to become live!**

To call the model from python you will need:

- Your SECURE_TOKEN
- The Model ID

![dedicated](@site/static/img/dedicated.png)

Copy the SECURE_TOKEN value and add it to the example below.

### Quick Reference

| Model                     | App Option   | Model ID                   |
|---------------------------|--------------|-----------------------------------------------|
| DeepSeek-R1 | 14b/24GB GPU | RedHatAI/DeepSeek-R1-Distill-Qwen-14B-quantized.w4a16  |
| DeepSeek-R1 | 32b/48GB GPU | RedHatAI/DeepSeek-R1-Distill-Qwen-32B-quantized.w4a16  |
| DeepSeek-R1 | 70b/80GB GPU | RedHatAI/DeepSeek-R1-Distill-Llama-70B-quantized.w4a16 |
| Llama 3.3 70b | w4a16/48GB GPU | RedHatAI/Llama-3.3-70B-Instruct-quantized.w4a16 |
| Llama 3.3 70b | w4a16/80GB GPU | RedHatAI/Llama-3.3-70B-Instruct-quantized.w4a16 |
| Llama 3.3 70b | FP8/94GB GPU | RedHatAI/Llama-3.3-70B-Instruct-FP8-dynamic |
| Llama 3.1 405b | 3xA100 80GB| RedHatAI/Meta-Llama-3.1-405B-Instruct-quantized.w4a16 |
| Llama 3.1 405b | 4xH100 NVL 94GB| RedHatAI/Meta-Llama-3.1-405B-Instruct-quantized.w4a16 |
| Llama 3.1 405b | 4xH100 SXM 80GB| RedHatAI/Meta-Llama-3.1-405B-Instruct-quantized.w4a16 |

### Python example

Make sure you know your VM IP address, HuggingFace model ID and SECURE_TOKEN.

```python
from openai import OpenAI
client = OpenAI(
    base_url="http://VM-IP-ADDRESS:8000/v1",
    api_key="SECURE_TOKEN",
)

completion = client.chat.completions.create(
  model="MODEL_ID",
  messages=[
    {"role": "user", "content": "How big is the universe?"},
  ]
)

print(completion.choices[0].message)
```

[Read more about the vLLM Open AI API spec here](https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html)

## DeepSeek-R1 on vLLM

These options use a quantized version of **deepseek-ai/DeepSeek-R1**

### 14b/24GB GPU

This option runs on a single 24GB GPU using a 14B model: **RedHatAI/DeepSeek-R1-Distill-Qwen-14B-quantized.w4a16**

### 32b/48GB GPU

This option runs on a single 48GB GPU using a 32B model: **RedHatAI/DeepSeek-R1-Distill-Qwen-32B-quantized.w4a16**

### 70b/80GB GPU

This option runs on a single 24GB GPU using a 14B model: **RedHatAI/DeepSeek-R1-Distill-Llama-70B-quantized.w4a16**

## Llama 3.3 70b on VLLM

These options use a quantized version of **meta-llama/Llama-3.3-70B-Instruct**

### w4a16/48GB GPU

This option runs on a single 48GB GPU using a 70B model quantized at w4a16: **RedHatAI/Llama-3.3-70B-Instruct-quantized.w4a16**

### w4a16/80GB GPU

This option runs the same model as the previous option but on an H100 SXM. It provides much lower latency and more concurrent requests: **RedHatAI/Llama-3.3-70B-Instruct-quantized.w4a16**

### FP8/94GB GPU

This option runs the same model as the previous option but on an H100 NVL PCIE, it uses FP8 quantization which preserves more of the model's original detail and accuracy, leading to better predictions or outputs: **RedHatAI/Llama-3.3-70B-Instruct-FP8-dynamic**

## Llama 3.1 405b on vLLM

These options use a quantized version of **meta-llama/Llama-3.1-405B-Instruct**.

### 3xA100 80GB

This option runs on three 80GB A100s, this is the lowest cost way to run 405b. Uses model id:  **RedHatAI/Meta-Llama-3.1-405B-Instruct-quantized.w4a16**

### 4xH100 NVL 94GB

If you need to serve more concurrent requests this provides the best low-cost option using H100 NVL PCIe: Uses model id: **RedHatAI/Meta-Llama-3.1-405B-Instruct-quantized.w4a16**

### 4xH100 SXM 80GB

If you need the lowest latency and high concurrent requests choose this option. Uses model id: **RedHatAI/Meta-Llama-3.1-405B-Instruct-quantized.w4a16**

## 🎓 Want to learn more?

You can learn more about this by [joining our Discord](https://discord.com/invite/cudos) or [Telegram](https://t.me/cudostelegram).
