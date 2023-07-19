---
title: Build environment (Docker)
id: build-docker
---

This guide explains how to set up your environment in preparation for running CUDOS nodes using [Docker](https://docs.docker.com/engine/install/). 

The `cudos-builders` project contains a set of building scripts for the CUDOS Network. It depends on the `cudos-node` and `cudos-gravity-bridge` projects. 

The `cudos-node` project is the blockchain binary whilst the `cudos-gravity-bridge` allows the transfer of ERC-20 assets between Ethereum and CUDOS. 

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

:::warning
If you have any errors, check `docker --version` and `docker-compose --version` meet prerequisite specifications
:::

```bash

# Navigate to the `CudosBuilders/docker/binary-builder` directory

cd CudosBuilders/docker/binary-builder

# Build the docker image 

docker-compose --env-file binary-builder.arg -f binary-builder.yml -p cudos-binary-builder up --build --detach
```

## 04 Successful image build

You should start to see the docker image building similar to the example below:

```shell
root@docker-test:/var/lib/cudos/CudosBuilders/docker/binary-builder# docker-compose --env-file binary-builder.arg -f binary-builder.yml -p cudos-binary-builder up --build --detach
Creating network "shared-cudos-network" with the default driver
Building binary-builder
Sending build context to Docker daemon    179MB
Step 1/14 : FROM golang:buster as builder
buster: Pulling from library/golang
76dff75df4d9: Pull complete 
3e8c90a1c4bb: Pull complete 
b3662c105080: Pull complete 
ad5dcb7dd592: Pull complete 
5752150a0cf9: Pull complete 
ced6eadc4c5a: Pull complete 
0ffa11a5d094: Pull complete 
Digest: sha256:d84495e2ad12dfeb51dec3c9f170659ebd09db234d6990b3364f877785684a14
Status: Downloaded newer image for golang:buster
 ---> a5bebd3d28cc
Step 2/14 : RUN apt update
```

Upon completion of the 14 steps, you are notified of a successful build as in the example below:

```shell
# Sample extract

Step 13/14 : COPY --from=builder /go/bin/cudos-noded /go/bin/cudos-noded
 ---> 3cf60f6ad233
Step 14/14 : CMD ["sleep", "infinity"]
 ---> Running in a0a606c48277
Removing intermediate container a0a606c48277
 ---> 7ec72cf9e257
Successfully built 7ec72cf9e257
Successfully tagged binary-builder:latest
Creating binary-builder ... done
root@docker-test:/var/lib/cudos/CudosBuilders/docker/binary-builder# 
```



:::success ✅ Nice work!

You have now prepared your node environment and can proceed to build a node. 

:::






