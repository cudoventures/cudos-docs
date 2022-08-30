---
title: Install Cudos Node Binary
id: binary
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

## 02 Spin up your node

Enable and start the service

```shell
root@cudos-node:~# systemctl enable --now cosmovisor@cudos
Created symlink /etc/systemd/system/multi-user.target.wants/cosmovisor@cudos.service → /lib/systemd/system/cosmovisor@.service.
```

## 03 Check node sync status

```shell
root@cudos-node:~# cudos-noded status
```

### Example check node sync status

```shell 
root@cudos-node:~# cudos-noded status
{"NodeInfo":{"protocol_version":{"p2p":"8","block":"11","app":"0"},"id":"f3bc1ebea0423b87796d5c620d938a79f7a50c7a","listen_addr":"tcp://0.0.0.0:26656","network":"cudos-testnet-public-3","version":"0.34.19","channels":"40202122233038606100","moniker":"cudos-node","other":{"tx_index":"on","rpc_address":"tcp://127.0.0.1:26657"}},"SyncInfo":{"latest_block_hash":"BC292BAEAA7421168EE55EA1BE2A294AC5B33B37B74B1175A53F6ED741F4D80B","latest_app_hash":"D31FF2A770FDF6603E867477B4F0D46450F50056F4A4D5214D8B1F734A3CE136","latest_block_height":"3605101","latest_block_time":"2022-05-27T15:55:58.140942836Z","earliest_block_hash":"5FE3E88EFE9999C79B8D6271B56EE4349051FCEA290D5A512440B8BEB9662104","earliest_app_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855","earliest_block_height":"3603400","earliest_block_time":"2021-08-25T08:21:32.483824849Z","catching_up":true},"ValidatorInfo":{"Address":"7AC5A70F5F271C6B35F48A51781D23329E58D3DD","PubKey":{"type":"tendermint/PubKeyEd25519","value":"8MECl86K55FL+s63L9wYGAyLXSPHrlHpcnE17rBm4vs="},"VotingPower":"0"}}
root@cudos-node:~# 
```

:::warning

Be Aware: It will take time for the node to sync

:::

## 04 Stop the node running

```shell
root@cudos-node:~# systemctl disable --now cosmovisor@cudos
Removed /etc/systemd/system/multi-user.target.wants/cosmovisor@cudos.service.
```
