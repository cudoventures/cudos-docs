---
title: Build Binary - Go 
id: build-binary-go
---

This guide explains how to install the cudos-noded binary with Go. 

(These instructions are written based on a Google Cloud VM instance running on Ubuntu 20.04 LTS
x86/64, amd64 focal image built on 2022-09-05, supports Shielded VM features.)

## Supported OS

### Go

* Ubuntu 22.04 LTS 

## 00 Install prerequisites

### Install `build-essential`

```shell
root@instance-1:~# sudo apt update
root@instance-1:~# sudo apt install build-essential
```

### Install `Go`

[Go installation instructions](https://go.dev/dl/)

Or using Snap 

```shell
sudo snap install --classic --channel=1.19.1/stable go
```

## 01 Install `cudos-node` binary and make

```shell
root@instance-1:~# git clone https://github.com/CudoVentures/cudos-node.git
root@instance-1:~# cd cudos-node && make install
```

## 02 `cudos-node` Daemon

`cudos-noded` is the CLI tool that enables you to interact with a node on the Cudos Network. 

```shell
root@instance-1:~/cudos-node# cudos-noded version
v1.1.0
```





