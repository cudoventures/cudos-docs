---
title: Nexus OS
id: nexus-os
---
The Nexus L1 concentrates the world’s compute power into a single, ultra-high performance, EVM-compatible blockchain. Run a node with ease and start contributing to the next-gen compute network.

## Get started

### Prerequisites
- A Nexus account  
  Sign up [here](https://app.nexus.xyz/).

- Nexus CLI Node ID  
  You can find this by logging into your Nexus account, navigating to the **Nodes** tab, and clicking **“Add CLI Node.”**

- SSH Public Key  
  This is required to access your node. Follow our step-by-step guide to [generate an SSH key](https://docs.cudos.org/docs/cudos-intercloud/usage/via-user-interface/creating-an-ssh-key).
 

To reach the [Nexus OS template](https://intercloud.cudos.org/templates) deployment page, click on the available deployment option. This will give you some good default settings that you can fully customise in the next steps.
![nexus-5](@site/static/img/nexus_5.png)

## Customise the deployment
On the template deployment page, enter your Node ID and select a machine.  
The recommended specification is **2 vCPU and 4 GB RAM** (feel free to select a higher specification).  
**Note:** GPU resources are not utilised by the Nexus CLI, so adding GPU capacity is optional and not required for this deployment.


Add your public SSH key, then click **Confirm and Deploy**.  
![nexus-1](@site/static/img/nexus_1.png)

![nexus-2](@site/static/img/nexus_2.png)

## Deployment Results

After clicking **Confirm and Deploy**, your virtual machine (which runs your Nexus node) will be provisioned.  
Please allow up to **2 minutes** for the process to complete.

Once deployed, you’ll be taken to the VM information page on CUDOS Intercloud.  
You’ll also see your node ID with a **green status** on the Nexus website, indicating it’s running.

![nexus-3](@site/static/img/nexus_3.png)

![nexus-4](@site/static/img/nexus_4.png)

## Troubleshooting and Updates
### Accessing Logs
If your node requires troubleshooting, you'll need to access the logs. Follow these steps:
Use ssh to connect to the machine:
```bash
ssh root@ip-address
```
Check the logs:
```bash
journalctl -u nexus
```

### Updating the Nexus Binary
You may need to manually update the Nexus CLI, here's how:

Use ssh to connect to the machine:
```bash
ssh root@ip-address
```
Download the latest and make it executable:
```bash
wget -O nexus https://github.com/nexus-xyz/nexus-cli/releases/linktothelatestnexusbinaryforlinuxx86 && chmod +x nexus && mv nexus /usr/local/bin/nexus 
```
Restart the Nexus Service:
```bash
systemctl restart nexus
```

### Troubleshooting Support
If you're unsure or need further assistance, join the CUDOS Intercloud [Discord](https://discord.com/invite/cudos) or [Telegram](https://t.me/cudostelegram) and ask for help.  
Be ready to share your logs or any error messages to help the community assist you faster.
