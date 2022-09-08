---
title: Install Binary - Redhat/Debian
id: build-redhat-debian
---

## Supported OS

### Red Hat 

* RHEL/CentOS/EL 8
* Fedora 34 & 35

### Debian 

* Ubuntu 20.04
* Debian 10

These instructions are written from a Google Cloud VM instance running on Debian 10.

## 00 Install prerequisites

1. Make sure you are in root by running the following command:

```shell
sudo -i
```

2. Inside the shell:

```shell
root@cudos-node:~# echo 'deb [trusted=yes] http://jenkins.gcp.service.cudo.org/cudos/1.0.0/debian stable main' > /etc/apt/sources.list.d/cudos.list
```

3. Inside the shell:

```shell
root@cudos-node:~# apt update
```

## 01 Set up desired network

Run the following command according to your network choice.

:::caution

Some packages are cited individually

:::

```shell
# Private Testnet
root@cudos-node:~# apt install cudos-network-private-testnet cosmovisor cudos-gex cudos-noded cudos-noded-v0.8.0 cudos-noded-v0.9.0 cudos-noded-v1.0.0 cudos-noded-v1.1.0 cudos-p2p-scan
```

```shell
# Public Testnet
root@cudos-node:~# apt install cudos-network-public-testnet cosmovisor cudos-gex cudos-noded cudos-noded-v0.8.0 cudos-noded-v0.9.0 cudos-noded-v1.0.0 cudos-noded-v1.1.0 cudos-p2p-scan
```

```shell
# Mainnet
root@cudos-node:~# apt install cudos-network-cudos-network-mainnet cosmovisor cudos-gex cudos-noded cudos-noded-v0.8.0 cudos-noded-v0.9.0 cudos-noded-v1.0.0 cudos-noded-v1.1.0 cudos-p2p-scan
```

## 02 Check `cudos-node` Daemon

cudos-noded is the CLI tool that enables you to interact with a node on the Cudos Network.

```shell
root@instance-1:~/cudos-node# cudos-noded version
v1.1.0
```
