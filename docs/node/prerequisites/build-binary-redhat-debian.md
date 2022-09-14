---
title: Build environment
id: build-redhat-debian
---

## Supported OS

### Red Hat 

* RHEL/CentOS/EL 8
* Fedora 34 & 35

### Debian 

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
```
dnf install -y yum-utils
yum-config-manager --add-repo http://jenkins.gcp.service.cudo.org/cudos/cudos.repo
yum-config-manager --enable cudos-0.9.0
dnf install cudos-network-public-testnet
```

### Mainnet 

```
dnf install -y yum-utils
yum-config-manager --add-repo http://jenkins.gcp.service.cudo.org/cudos/cudos.repo
yum-config-manager --enable cudos-1.0.0
dnf install cudos-network-mainnet
```

### 02 Check `cudos-node` Daemon

`cudos-noded` is the CLI tool that enables you to interact with a node on the Cudos Network.

```shell
root@instance-1:~/cudos-node# cudos-noded version
v1.1.0
```

## Debian/Ubuntu

These instructions are written from a Google Cloud VM instance running on **Debian 10**.

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

:::caution

Some packages are cited individually

:::

### Private Testnet

1. Install binary packages
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

1. Configure repository
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

1. Install source packages
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
```

### 02 Check `cudos-node` Daemon

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

:::


