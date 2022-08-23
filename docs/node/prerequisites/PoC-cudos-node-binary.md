---
title: Install Cudos Node Binary
id: binary
---

:::warning

# Work in Progress

:::


## Supported OS

## Choose one of the following: 

* Ubuntu 20.04
* Debian 10
* CentOS 8

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

## 01 Set up testnet

1. Run the following command:

```shell
root@cudos-node:~# apt install cudos-network-public-testnet
```

2. Spin up a full node on the testnet

```shell
root@cudos-node:~# systemctl enable --now cosmovisor@cudos
Created symlink /etc/systemd/system/multi-user.target.wants/cosmovisor@cudos.service → /lib/systemd/system/cosmovisor@.service.
```

:::warning

Be Aware: It will take time for the node to sync

:::

3. To stop the node running

```shell
root@cudos-node:~# systemctl disable --now cosmovisor@cudos
Removed /etc/systemd/system/multi-user.target.wants/cosmovisor@cudos.service.
```

### Example

```shell
root@cudos-node:~# sudo -u cudos cudos-init-node.sh full-node
renamed '/var/lib/cudos/cudos-data/config/genesis.json' -> '/var/lib/cudos/cudos-data/config/genesis.json-4937'
renamed '/var/lib/cudos/cudos-data/config/genesis.json-4937' -> '/var/lib/cudos/cudos-data/config/genesis.json'
```



```shell
root@cudos-node:~# apt update
root@cudos-node:~# apt install cudos-network-public-testnet
```

```shell
root@cudos-node:~# git clone https://github.com/CudoVentures/cudos-noded-packager
Cloning into 'cudos-noded-packager'...
remote: Enumerating objects: 1001, done.
remote: Counting objects: 100% (1001/1001), done.
remote: Compressing objects: 100% (327/327), done.
remote: Total 1001 (delta 693), reused 970 (delta 667), pack-reused 0
Receiving objects: 100% (1001/1001), 78.10 MiB | 27.56 MiB/s, done.
Resolving deltas: 100% (693/693), done.
```

```shell
root@cudos-node:~# cd cudos-noded-packager
root@cudos-node:~/cudos-noded-packager# echo 'deb [trusted=yes] http://jenkins.gcp.service.cudo.org/cudos/0.9.0/debian stable main' > /etc/apt/sources.list.d/cudos.list
root@cudos-node:~/cudos-noded-packager# apt update
```

```shell
cudos-noded-ctl  [-h] <command> [command_options]
```

## 02 Install the Network Pack 

Install the **Network Pack** for your desired Cudos blockchain network. This configures the underlying network. 

The Network Pack contains the `genesis.json` file and the `initial seed` and `RPC endpoints` to connect your node to the network. 

The packages used to install the different networks are:

1. `cudos-network-mainnet`
2. `cudos-network-public-testnet`
3. `cudos-network-private-testnet`

:::info
All packs have the same filename to ensure that a host can only be on one Cudos network at a time.

:::

### Go


### Red Hat (RHEL, CentOS & Fedora)

The following example is for `Cudos Mainnet`

```shell
dnf install -y yum-utils
yum-config-manager --add-repo http://jenkins.gcp.service.cudo.org/cudos/cudos.repo
yum-config-manager --enable cudos-0.9.0
dnf install cudos-network-public-testnet
```

### Debian and Ubuntu

The following example is for `Cudos Mainnet`

```
echo 'deb [trusted=yes] http://jenkins.gcp.service.cudo.org/cudos/0.9.0/debian stable main' > /etc/apt/sources.list.d/cudos.list
apt update
apt install cudos-network-public-testnet
```

## 03 Configure the daemon

It is assumed that you are working on an Ubuntu LTS release. 

:::

The Cudos Node is a binary created directly from the original Cudos repositories. This guide explains how to install a Cudos node daemon using binary packages on a Linux system. 

:::caution

The Cudos node is currently only supported on x86_64 Linux systems
:::






### Red Hat (RHEL, CentOS & Fedora)

The following example is for `Cudos Mainnet`

```bash
dnf install -y yum-utils
yum-config-manager --add-repo http://jenkins.gcp.service.cudo.org/cudos/cudos.repo
yum-config-manager --enable cudos-1.0.0
dnf install cudos-network-mainnet
```

### Debian and Ubuntu

The following example is for `Cudos Mainnet`

```
echo 'deb [trusted=yes] http://jenkins.gcp.service.cudo.org/cudos/1.0.0/debian stable main' > /etc/apt/sources.list.d/cudos.list
apt update
apt install cudos-network-mainnet
```

## 03 Configure the daemon

Connecting to the network is done directy in the `config.toml` and `app.toml` files by `cudos-noded-ctl`. 

### Initialise a full node

Start the `cudos-noded service` on a newly installed node without any `.toml` configuration files and the initialisation script runs a full-node configuration.

```bash
cudos-init-node.sh
```

### Initialise a validator cluster

Build a Cluster node to use Seed and Sentry nodes. 

```bash
cudos-init-node.sh clustered-node
```



### Use the Cudos Node Daemon CLI 

This tool is designed to simplify managing the **cudos-noded daemon**, **configuration files** and **database**. 

::: info General Syntax for Usage

```
cudos-noded-ctl  [-h] <command> [command_options]
```
:::

1. Connect to seed

```
cudos-noded-ctl set seeds "$CUDOS_HOME"/config/seeds.config
```



1. Clone
2. Compile Binary
3. Initialise working directory
4. Replace config.json
5. Get data backup
6. Run node