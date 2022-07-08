---
title: Install Cudos Node Binary
id: install-binary
---

:::warning

# Work in Progress

:::


The Cudos Node is a binary created directly from the original Cudos repositories. This guide explains how to install a Cudos node daemon using binary packages on a Linux system. 

:::caution

The Cudos node is currently only supported on x86_64 Linux systems
:::

## 01 Clone the repository

```
git clone https://github.com/CudoVentures/cudos-noded-packager
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