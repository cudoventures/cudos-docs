---
title: VLLM 
id: vllm
---


vLLM is an open-source library designed for efficient and high-throughput serving of large language models (LLMs). It leverages PagedAttention, an optimized memory management technique, to enable faster inference and better memory utilization, making it ideal for serving popular models like LLaMA, Falcon, and GPT variants. vLLM supports both single-GPU and multi-GPU setups, allowing scalable deployment of LLMs with lower latency and higher token generation speed. It is widely used in AI applications for tasks such as text generation, summarization, and chat-based interactions.

## Get started
To reach the VLLM template page, click click either the small, medium or large instance of VLLM. This will give you some good default settings but you can fully customise your deployment at the next step.

> 📌 Note: You will need to enter your HuggingFace model id and your HuggingFace API token. Please be aware that many of the models are gated, you will need to go to the model page and sign an agreement and wait for approval before you can use the model. If you try to use a model without having approval VLLM won't work.

## Model selection
The supported model list is here: [VLLM models](https://docs.vllm.ai/en/latest/models/supported_models.html#list-of-text-only-language-models)
They include these categories:

- Text Generation
- Text Embedding
- Reward Modeling
- Classification
- Sentence Pair Scoring
- Multimodel Text, Image, Video, Audio
- Transcription

## GPU selection

The model(s) you wish to run will determine the amount of VRAM you will need on your GPU.

There is a calculator here: [LLM-Model-VRAM-Calculator](https://huggingface.co/spaces/NyxKrage/LLM-Model-VRAM-Calculator)

## Using VLLM
When you deploy the VM you will be shown the VM information page. For VLLM we can see the following metadata:
```
CUDO_HF_TOKEN   hf_xxxxxxx  
CUDO_MODEL  mistralai/Mistral-7B-v0.1
appId   vllm
port    8000
```

- `CUDO_HF_TOKEN` the HuggingFace token you provided
- `CUDO_MODEL` the HuggingFace model you provided
- `SECURE_TOKEN` the unique token that was displayed during the VM creation process
- `port` the port to connect to your VLLM instance on

Additionally, you will need your VM IP address from the VM information page.

### Open AI API
Use ssh to connect to the machine:
```bash
ssh root@ip-address
```

Now the model is ready, you can use openai python library:
```bash
pip install openai
```

Make sure to replace SECURE_TOKEN and VM-IP-ADDRESS with the data from the previous step.
```python
from openai import OpenAI

client = OpenAI(
    api_key="SECURE_TOKEN",
    base_url="http://VM-IP-ADDRESS:8000/v1",
)

models = client.models.list()
print(f"Available models: {models.data}")
model = models.data[0].id

# Completion API
stream = False
completion = client.completions.create(
    model=model,
    prompt="A robot may not injure a human being",
    echo=False,
    n=2,
    stream=stream,
    logprobs=3
)

print("Completion results:")
if stream:
    for c in completion:
        print(c)
    for c in completion:
        if c.choices:
            print(c.choices[0].text)
else:
    print("Full completion:")
    print(completion)
    for i, choice in enumerate(completion.choices, start=1):
        print(f"Choice {i}:")
        print(choice.text.strip())


See more here: [OpenAI docs](https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html)
```

## 🎓 Want to learn more?

You can learn more about this by [joining our Discord](https://discord.com/invite/cudos) or [Telegram](https://t.me/cudostelegram).