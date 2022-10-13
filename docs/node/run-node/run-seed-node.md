---
title: Run seed node
id: run-seed-node
---

:::caution Validator cluster Build

Run a Seed node as part of a Validator cluster Build
:::

This guide explains how to initialise and start a **Seed node** as part of a **Validator cluster**. 

This guide follows on from the **Prerequisites** section and assumes that you have built your environment by following the **Build Environment** instructions for your selected network. 

***It must be on its own machine.***

## Networks

`Testnet`

`Mainnet`

:::tip
Your network was selected at the **Build Environment** stage.
:::

# 00 Prerequisites

1. Check [Hardware requirements](/docs/node/prerequisites/hw-req).
2. Build your environment [Testnet](/docs/node/prerequisites/join-testnet) or [Mainnet](/docs/node/prerequisites/join-mainnet)


<!-- | **Hardware** 	| **Specification**           	|
|------	|-------------------------------	|
| CPU   | At least 4 cores.                |
| RAM  	| 16 GB (Windows), 8 GB (Linux) 	|
| Disk 	| An SSD drive                  	|
| OS | Redhat/Fedora/CentOs/Debian/Ubuntu   |  -->


## 01 Run Seed node initialisation script

Start from **root**. 

You **must** run the script as user `cudos` or you will see error messages. 

```shell
su - cudos
cudos-init-node.sh seed-node
```

## 02 Start the node

:::info cosmovisor

Cosmovisor is used to ensure zero downtime when there are updates and hard forks.

:::

Switch back to **root user** (CTRL + D)

```shell
systemctl enable --now cosmovisor@cudos
```

:::tip KEEP NOTES 

Keep a record of the **Seed node Tendermint ID** and **IP address** in a spreadsheet or equivalent

:::

### Example start node

```shell
root@cudos-node:~# systemctl enable --now cosmovisor@cudos
Created symlink /etc/systemd/system/multi-user.target.wants/cosmovisor@cudos.service → /lib/systemd/system/cosmovisor@.service.
```

## 03 Check node sync status

As **root user** run the following command:

```shell
cudos-noded status 2>&1 | jq -M 
```
:::tip how do i know when my node is synced?
Your node is fully synced when you see: 
`"catching_up: false"` 
and the latest block hash matches the network [Testnet Explorer](https://explorer.testnet.cudos.org) or [Mainnet Explorer](https://explorer.mainnet.cudos.org)
:::

![synced-node](@site/static/img/node-sync.png)

<!-- :::info How to use Cudos Daemon Configuration Tool

If you need to alter individual parameters, run the **Cudos Daemon Configuration tool** `cudos-noded-ctl`. 

`cudos-noded-ctl` must be run as user cudos.

```shell
cudos@node:~# su - cudos
```

```shell
cudos-noded-ctl [-h] <command> [command_options]
```

Below are relevant CTL commands

**BE AWARE: All modifications to `config.toml` must specify contents on a single line, comma separated list. **

```shell
# Define seeds to connect to: 
# "seeds=" variable in config.toml 
# Example: <tendermint ID>@<IP address or hostname>:<Port number>[,<tendermint ID>@<IP address or hostname>:<Port number>

cudos-noded-ctl set seeds "$CUDOS_HOME"/config/seeds.config
```
**Read more information on [`cudos-noded-ctl`](https://github.com/CudoVentures/cudos-noded-packager/blob/main/docs/cudos-noded-ctl.md)**

::: -->

## 04 Stop the node running

```shell
root@cudos-node:~# systemctl disable --now cosmovisor@cudos
Removed /etc/systemd/system/multi-user.target.wants/cosmovisor@cudos.service.
```




