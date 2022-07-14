---
title: Build environment (Docker)
id: build-envt
---

This guide explains how to set up your environment in preparation for running Cudos nodes using [Docker](https://docs.docker.com/engine/install/). 

The `cudos-builders` project contains a set of building scripts for the Cudos Network. It depends on the `cudos-node` and `cudos-gravity-bridge` projects. 

The `cudos-node` project is the blockchain binary whilst the `cudos-gravity-bridge` allows the transfer of ERC-20 assets between Ethereum and Cudos. 

## 00 Prerequisites

### System requirements

These system requirements are recommended for usual setup. Spanning a network with a lot of nodes will require more RAM.

| **Hardware** 	| **Specification**           	|
|------	|-------------------------------	|
| CPU   |  At least 2 cores.                |
| RAM  	| 16 GB (Windows), 8 GB (Linux) 	|
| Disk 	| An SSD drive                  	|
|   **Software**  |**Specification**            |
| OS | Linux or Windows with WSL2 enabled.  
| Docker                                                       	|20.10.6+ [Get Docker](https://docs.docker.com/engine/install/) |
| Docker compose                                                   	|1.29+
| Server                             	| Ubuntu 21  
|                                                                        	|

:::info note
Ubuntu 21 is tested

Windows 10 with Ubuntu 20.04 on WSL2 is tested

Older versions of `docker` and `docker-compose` are likely to work too.
:::


## 01 Create a workspace directory 

:::info

Use `sudo` or change to a `root user`.


:::

```bash

# Create a directory called `cudos`.

sudo -i
mkdir /var/lib/cudos

# Move to the directory

cd /var/lib/cudos
```

## 02 Clone `cudos` projects from Github

Clone the latest release of `cudos-node`, `cudos-builders` and `cudos-gravity-bridge` and rename them to their corresponding folders. 

```bash
git clone --branch v1.0.0 https://github.com/CudoVentures/cudos-node.git CudosNode
git clone --branch v1.0.0 https://github.com/CudoVentures/cudos-builders.git CudosBuilders
git clone --branch v1.0.0 https://github.com/CudoVentures/cosmos-gravity-bridge.git CudosGravityBridge

```

## 03 Build docker image



```bash

# Navigate to the `CudosBuilders/docker/binary-builder` directory

cd CudosBuilders/docker/binary-builder

# Build the docker image 

docker-compose --env-file binary-builder.arg -f binary-builder.yml -p cudos-binary-builder up --build --detach
```

:::success ✅ Nice work!

You have now prepared your node environment and can proceed to build a node. 

:::






