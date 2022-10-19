---
title: Build Binary - Go 
id: build-binary-go
---

This guide explains how to install the `cudos-noded` binary and run a node on the Cudos mainnet with Go. 

(These instructions are written based on a Google Cloud VM instance running on Ubuntu 20.04 LTS
x86/64, amd64 focal image built on 2022-09-05, supports Shielded VM features.)

## Supported OS

### Go

* Ubuntu 20.04 LTS 

## 00 Install prerequisites

### Install `build-essential`

Run as normal user.

```shell
sudo apt update
sudo apt install build-essential
```

### Install git

```shell
sudo apt-get update
sudo apt-get install git-all
git version
```

### Install Go

[**Go installation instructions**](https://go.dev/dl/)

Or using **Snap** 

```shell
sudo snap install --classic --channel=latest/stable go
echo 'PATH=$PATH:~/go/bin' >> ~/.bashrc
source ~/.bashrc
```

## 01 Install `cudos-node` binary and make

```shell
git clone https://github.com/CudoVentures/cudos-node.git
cd cudos-node && make install
```

## 02 `cudos-node` Daemon

`cudos-noded` is the CLI tool that enables you to interact with a node on the Cudos Network. 

```shell
cudos-noded version
current version
```





