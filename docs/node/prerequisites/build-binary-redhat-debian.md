---
title: Build environment
id: build-redhat-debian
---

## Supported OS

### Red Hat/Fedora 

* RHEL/CentOS/EL 8
* Fedora 34 & 35

### Ubuntu/Debian 

* Ubuntu 20.04
* Debian 10


## Red Hat 

### 00 Prerequisites

1. Make sure you are in root by running the following command:

```shell
sudo -i
```

### 01 Set up desired network 

Run one of the following commands according to your network choice.

### Private Testnet

```shell
dnf install -y yum-utils
yum-config-manager --add-repo http://jenkins.gcp.service.cudo.org/cudos/cudos.repo
yum-config-manager --enable cudos-0.8.0
dnf install cudos-network-private-testnet
```

### Public Testnet

```shell
dnf install -y yum-utils
yum-config-manager --add-repo http://jenkins.gcp.service.cudo.org/cudos/cudos.repo
yum-config-manager --enable cudos-0.9.0
dnf install cudos-network-public-testnet
```

### Mainnet 

```shell
dnf install -y yum-utils
yum-config-manager --add-repo http://jenkins.gcp.service.cudo.org/cudos/cudos.repo
yum-config-manager --enable cudos-1.0.0
dnf install cudos-network-mainnet
```

## Ubuntu/Debian

### 00 Prerequisites

1. Make sure you are in root by running the following command:

```shell
sudo -i
```

<!-- 2. Update the local package list

```shell
root@cudos-node:~# sudo apt-get update
root@cudos-node:~# sudo apt-get install build-essential
``` -->

### 01 Set up desired network

Run the following command according to your network choice.

### Private Testnet

1. Set up `apt` repo

```shell
echo 'deb [trusted=yes] http://jenkins.gcp.service.cudo.org/cudos/0.8.0/debian stable main' > /etc/apt/sources.list.d/cudos.list
```

2. Update the local package list

```shell
apt update
```

3. Install network and packages

```shell
apt install cudos-network-private-testnet cosmovisor cudos-gex cudos-noded cudos-noded-v0.8.0 cudos-noded-v0.9.0 cudos-noded-v1.0.0 cudos-noded-v1.1.0 cudos-p2p-scan
```

### Public Testnet

1. Set up `apt` repo

```shell
echo 'deb [trusted=yes] http://jenkins.gcp.service.cudo.org/cudos/0.9.0/debian stable main' > /etc/apt/sources.list.d/cudos.list
```

2. Update the local package list

```shell
apt update
```

3. Install network package and its dependencies

```shell
apt install cudos-network-public-testnet cosmovisor cudos-gex cudos-noded cudos-noded-v0.9.0 cudos-noded-v1.0.0 cudos-noded-v1.1.0 cudos-p2p-scan
```

### Mainnet

1. Set up `apt` repo

```shell
echo 'deb [trusted=yes] http://jenkins.gcp.service.cudo.org/cudos/1.0.0/debian stable main' > /etc/apt/sources.list.d/cudos.list
```

2. Update the local package list

```shell
apt update
```

3. Install binary and network

```shell
apt install cudos-network-mainnet cosmovisor cudos-gex cudos-noded cudos-noded-v1.0.0 cudos-noded-v1.1.0 cudos-p2p-scan
```


## 02 Use cudos-noded CLI 

This step, confirms your installation has succeeded. 

You can now use cudos-noded CLI to run queries. 

```shell
cudos-noded version

v0.8.0 
```

<!-- 
```shell
root@cudos-node:~# cudos-noded status
{"NodeInfo":{"protocol_version":{"p2p":"8","block":"11","app":"0"},"id":"f3bc1ebea0423b87796d5c620d938a79f7a50c7a","listen_addr":"tcp://0.0.0.0:26656","network":"cudos-testnet-public-3","version":"0.34.19","channels":"40202122233038606100","moniker":"cudos-node","other":{"tx_index":"on","rpc_address":"tcp://127.0.0.1:26657"}},"SyncInfo":{"latest_block_hash":"BC292BAEAA7421168EE55EA1BE2A294AC5B33B37B74B1175A53F6ED741F4D80B","latest_app_hash":"D31FF2A770FDF6603E867477B4F0D46450F50056F4A4D5214D8B1F734A3CE136","latest_block_height":"3605101","latest_block_time":"2022-05-27T15:55:58.140942836Z","earliest_block_hash":"5FE3E88EFE9999C79B8D6271B56EE4349051FCEA290D5A512440B8BEB9662104","earliest_app_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855","earliest_block_height":"3603400","earliest_block_time":"2021-08-25T08:21:32.483824849Z","catching_up":true},"ValidatorInfo":{"Address":"7AC5A70F5F271C6B35F48A51781D23329E58D3DD","PubKey":{"type":"tendermint/PubKeyEd25519","value":"8MECl86K55FL+s63L9wYGAyLXSPHrlHpcnE17rBm4vs="},"VotingPower":"0"}}
```

To check on status, view the explorer. 

```shell
root@cudos-node:~# cudos-noded tendermint show-validator
{"@type":"/cosmos.crypto.ed25519.PubKey","key":"8MECl86K55FL+s63L9wYGAyLXSPHrlHpcnE17rBm4vs="}
root@cudos-node:~# 
``` -->
<!-- 

### Example extract

```shell
...
Setting up cudos-noded (0.9.0-179.el8) ...
  Upgrade: Setting up links
    Refreshing /usr/bin, /lib and /lib64 links
    Setting Cosmovisor link '.cudosd' to 'cudos-data'
    Setting Cosmovisor 'current' link to genesis
    Chowning the home dir
    Reloading systemd config
    Done
Setting up cudos-p2p-scan (0.9.0-179.el8) ...
Setting up cudos-noded-v1.0.0 (1.0.0-179.el8) ...
Setting up cudos-noded-v0.9.0 (0.9.0-179.el8) ...
Setting up cudos-network-public-testnet (0.9.0-179.el8) ...
Upgrade:
``` -->

<!-- ### 02 Check `cudos-node` Daemon

`cudos-noded` is the CLI tool that enables you to interact with a node on the Cudos Network.

```shell
root@instance-1:~/cudos-node# cudos-noded version
v1.1.0
```

:::tip `cudos-noded` versions

`cudos-noded-v0.8.0`

is the binary that is compatible with the historical chain state

`cudos-noded-v0.9.0`

is the binary compatible with the current chain state

`cudos-noded-v1.0.0`

is the binary compatible with the next chain state and is the same as the mainnet state

`cudos-noded-v1.1.0`

is the binary for the final chain state after the step from 0.9.0 -> 1.0.0 and then the step 1.0.0 -> 1.1.0

::: -->

<!-- You are now ready to [Run a full node](/docs/node/run-node/run-full-node-redhat-debian). This is a prerequisite to setting up a validator node. -->





