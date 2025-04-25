---
title: Ollama 
id: ollama
---


Ollama is a large language model (LLM) inference API server that supports a huge library of open source LLMs. Once the server is running, you can pull any model from the library. It supports Python, JavaScript and the OpenAI Python SDK.

## Get started
To reach the Ollama template page, click click either the small, medium or large instance of Ollama. This will give you some good default settings but you can fully customise your deployment at the next step.

## Customise the deployment
You can just choose an id for your App and deploy it. Or you may want to configure the spec of the machine.

## GPU selection
The model(s) you wish to run will determine the amount of VRAM you will need on your GPU

Ollama supports a list of models available [here](https://ollama.com/library). Here are some example models that can be downloaded:

| Model       | Parameter | Size      |   Download            |
|-------------|-----------|-----------|-----------------------|
| Llama3      | 8B        | 4.7GB     | ollama run gemma3:1b  |
| DeepSeek-R1 | 7B        | 4.7GB     | ollama run deepseek-r1|
| Mistral     | 7B        | 4.1GB     | ollama run mistral    |


> 📌 Note: You should have at least 8 GB of RAM available to run the 7B models, 16 GB to run the 13B models, and 32 GB to run the 33B models. 

## Disk size
The default disk size is set between 100-200GB which should be enough for most users. However, some people often wish to compare the performance of many models so if you plan to download and use multiple models consider increasing your boot disk size.

## Using Ollama
When you deploy the VM you will be shown the VM information and management page. Ollama is preinstalled and running inside a Docker container on the VM.

> 📌 Note: Save your secure token.

### Connect to the VM
Use ssh to connect to the machine:
```bash
ssh root@ip-address
```


You can verify the container is running with:
```bash
docker ps
```
This will list the running containers. Look for one with the image ollama/ollama — this is the Ollama API container. Take note of the name and port. 

Example output:
![cic-ollama-docker](@site/static/img/ollama-docker.png)


### Pull a model (e.g., llama3)
Run this command `docker exec <name> ollama pull <model name>` to download a model:

```bash
docker exec ollama ollama pull llama3
```

### Send a prompt to the API
You can now send requests to Ollama using curl or Python on the VM.

#### Using curl (from within the VM)
```bash
curl http://localhost:11434/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama3",
    "prompt": "Why should I use CUDOS Intercloud?",
    "stream": false
  }'
```

#### Using Python
```python
import requests

url = "http://localhost:11434/api/generate"
payload = {
    "model": "llama3",
    "prompt": "Why should I use CUDOS Intercloud?",
    "stream": False
}

response = requests.post(url, json=payload)
print(response.json()["response"])
```

### Using Ollama with OpenAI API
Ollama also supports and it's OpenAI compatible API.

Note: OpenAI compatibility is experimental and is subject to major adjustments including breaking changes. For fully-featured access to the Ollama API, see the [Ollama Python library](https://github.com/ollama/ollama-python), [JavaScript library](https://github.com/ollama/ollama-js) and [REST API](https://github.com/ollama/ollama/blob/main/docs/api.md).

#### Install the openai sdk:
```
pip install openai
```

Get your IP address from the VM info page and the port and the secure token from the VM creation. 
> 🔐 Secure Token:
This is the unique token that was displayed during the VM creation process.
Please make sure to copy and save it securely at that time.
You will not be able to view it again after the VM is created.

Replace the script below with the right ip address and secure token.

Using python you can write:
```python
ip  = "192.0.0.0"
port = 8080
secure_token = "cudo_8c744hxyo2"
from openai import OpenAI
    
client = OpenAI(
    base_url=f"http://{ip}:{port}/v1/",
    api_key=secure_token,  
    timeout=60
)

list_completion = client.models.list()

print(list_completion.data)
```
See more here: [OpenAI docs](https://github.com/ollama/ollama/blob/main/docs/openai.md).

## 🎓Want to learn more?

You can learn more about this by [joining our Discord](https://discord.com/invite/t397SKqf4u) or [Telegram](https://t.me/cudostelegram).