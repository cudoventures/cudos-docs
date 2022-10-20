---
title: Build Binary 
id: build-binary-go
---

This guide explains how to install the `cudos-noded` binary. 

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

### Example

```shell
user@node-go-01:~$ cd cudos-node && make install
--> Installing cudos-noded
```

## 02 `cudos-node` daemon

`cudos-noded` provides the Command Line Interface and node daemon to interact with the Cudos blockchain.
Check that it has successfully installed.

```shell
cudos-noded version --long
```

:::info 🎉 Success
Successful installation is indicated by the presence of `cudos-noded` - The Cudos Node Daemon. 

### Example

```shell
user@node-go-01:~$ cudos-noded version --long
name: cudos-node
server_name: cudos-noded
version: v1.1.0.1
commit: ed5a355b592ea93ce0cd35f2ef778a8cf18343a7
build_tags: ""
go: go version go1.18.5 linux/amd64
build_deps:
```




