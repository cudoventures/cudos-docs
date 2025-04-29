---
title: OpenManus 
id: open-manus
---

OpenManus is an open-source AI agent designed to connect large language models (LLMs) with external tools, such as web browsers, to autonomously carry out complex tasks. With the ability to iterate, reason, and adapt, OpenManus enhances the capabilities of LLMs by enabling them to think critically, gather real-time information, and execute multi-step operations with precision.

This deployment bundles open manus with a local LLM and an image to text model.

## Get started
To reach the OpenManus template page, click click either the small, medium or large instance of OpenManus. This will give you some good default settings but you can fully customise your deployment at the next step.

## Customise the deployment
You can just choose an id for your App and deploy it. Or you may want to configure the specifications of the machine.

## GPU selection
A GPU is automatically selected to fit the LLM on. There shouldn't be any need to change it unless you wish to change the LLM.

## Disk size
The default disk size is set to 100GB which should be enough for most users. However, if you want to download large amounts of data or install further tools / libraries you may need to increase this.

## Using OpenManus
To access OpenManus you will need to use the VM IP address from the VM information page. 

### Connect to the VM
Use ssh to connect to the machine:
```bash
ssh root@ip-address
```

### Wait for OpenManus to Finish Setting Up
OpenManus will take time to start running and download the required models, a file called ~/openmanus-is-ready will appear when OpenManus has finished installing. You can either run ls every minute or so manually to find out when it is ready; or you can run the following command to automatically watch for it every 3 seconds: 

```
watch -n 3 ls
```

Once you see openmanus-is-ready appear, press Ctrl+C to stop watching.

### Launch OpenManus
Navigate to the directory and run the main.py file.
```bash
cd OpenManus
python main.py
```
Enter your prompt to proceed with using OpenManus.

## 🎓 Want to learn more?

You can learn more about this by [joining our Discord](https://discord.com/invite/cudos) or [Telegram](https://t.me/cudostelegram).