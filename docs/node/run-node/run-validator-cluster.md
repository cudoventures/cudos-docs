---
title: Run a validator cluster
id: run-validator-cluster
---

This guide explains how to configure and start a **Validator Cluster**.

A **Validator Cluster** (or **Clustered Node**) is a **Validator** node surrounded by at least one **Seed** and **Sentry** node.
 
Once this is completed, it can be staked. 

:::info what is cudos-noded-CTL
`cudos-noded-ctl` adds usability to configuration by creating a single file for a single configuration parameter.
:::

PUT THIS NEXT BIT LATER

:::info note
If a **Validator Cluster** is left to the default peer configuration it stalls without connecting. As soon as another node contacts it, the synchronisation process begins.
:::

## Networks

`Testnet`
`Mainnet`

:::tip
Your network was selected at the **Build Environment** stage.
:::

:::info Cudos-noded commands

```shell
cudos-noded tendermint
Tendermint subcommands

Usage:
  cudos-noded tendermint [command]

Available Commands:
  reset-state      Remove all the data and WAL
  show-address     Shows this node's tendermint validator consensus address
  show-node-id     Show this node's ID
  show-validator   Show this node's tendermint validator info
  unsafe-reset-all (unsafe) Remove all the data and WAL, reset this node's validator to genesis state
  version          Print tendermint libraries' version

Flags:
  -h, --help   help for tendermint

Global Flags:
      --home string         directory for config and data (default "/var/lib/cudos/cudos-data")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors
```
:::

## 00 Prerequisites

1. This step assumes you have already built your environment and selected a network.
See the **Build Environment** instructions for your selected network. 

2. You have already built and synchronised the required **Seed node(s)** and **Sentry node(s)** to be added to your cluster. 

3. Get a spreadsheet ready with names of your nodes, Internal IPs, External IPs and Tendermint-node IDs

:::warning Sentry node architecture

**A Validator node must only connect to one or more Sentry node(s)**

:::

## Validator node configuration 

The following values can be configured using **cudos-noded-ctl**. 

|Config Parameter | Value |
|-------|------|
|`pex` | `false` |
|`persistent_peers` | list of **Sentry nodes** |
|`private_peer_ids` | - |
|`addr_book_strict` | `false` |


### 01 Get Sentry node Tendermint ID

1. Open a terminal for your **Sentry node**.

2. As root user, run the following command:

```shell
cudos-noded tendermint show-node-id
```

3. Keep a note of the **Sentry node ID** in your spreadsheet.

### Example show-node-id

```shell
root@testnet-sentry-node:~# cudos-noded tendermint show-node-id
87d9f4b123456789abc08d6846b6076
```
4. Get the **IP address** of the Sentry node.




<!-- 
## Get Seed node Tendermint ID

1. Open a terminal for your **Seed node**.

2. As root user, run the following command:

```shell
cudos-noded tendermint show-node-id
```

3. Keep a note of the seed node ID in your spreadsheet.

### Example show-node-id

```shell
root@testnet-seed-node-01:~# cudos-noded tendermint show-node-id
87d9f4b98bd5c10286e7b187a4cc08d6846b6076
```
## Get the IP address of the Seed node 
 -->

### 02 Login to Validator Cluster 

1. Login as **root** user then switch user to **Cudos**

Inside the shell run the following command:

```shell
su - cudos
```

2. The following script can be run to automatically set up a **Validator Cluster** on the network. 

```shell
cudos-init-node.sh clustered-node
```

3. Configure connection to existing **Sentry node**

- As user Cudos (su - cudos)

- Run

```shell 
cudos-noded-ctl set persistent_peers persistent-peers.config
```

cudos-noded-ctl set seeds "$CUDOS_HOME"/config/seeds.config

- navigate to `persistent-peers.config`.

```shell
root@testnet-validator-clustered-01:~/cudos-data# su - cudos
cudos@testnet-validator-clustered-01:~$ ls
cudos-data
cudos@testnet-validator-clustered-01:~$ cd cudos=data
-bash: cd: cudos=data: No such file or directory
cudos@testnet-validator-clustered-01:~$ cd cudos-data
cudos@testnet-validator-clustered-01:~/cudos-data$ ls
config  cosmovisor  data  wasm
cudos@testnet-validator-clustered-01:~/cudos-data$ cd config
cudos@testnet-validator-clustered-01:~/cudos-data/config$ ls
addrbook.json  node_key.json            seeds.config
app.toml       persistent-peers.config  state-sync-rpc-servers.config
config.toml    priv_validator_key.json  unconditional-peers.config
genesis.json   private-peers.config
```

4. Edit persistent-peers.config

```shell
nano persistent-peers.config
```

5. Add new **Sentry node(s)** config at the beginning of the line:

```shell
 <tendermint ID>@<IP address or hostname>:<Port number>,<tendermint ID>@<IP address or hostname>:<Port number>
```

### Example Sentry node config

```shell
4d12abcdefghij123456519d462f0@34.136.0.236:26657
```

## 03 Check settings 

```shell
cat config.toml

# Comma separated list of nodes to keep persistent connections to
persistent_peers = "4d12abcdefghij123456519d462f0@34.136.0.236:26657"
```




- Run cudos-noded-ctl set seeds "$CUDOS_HOME"/config/seeds.config

```shell
cudos@testnet-validator-clustered-01:~$ ls
cudos-data
cudos@testnet-validator-clustered-01:~$ cd cudos-data
cudos@testnet-validator-clustered-01:~/cudos-data$ ls
config  cosmovisor  data  wasm
cudos@testnet-validator-clustered-01:~/cudos-data$ ls config
addrbook.json  node_key.json            seeds.config
app.toml       persistent-peers.config  state-sync-rpc-servers.config
config.toml    priv_validator_key.json  unconditional-peers.config
genesis.json   private-peers.config
```

4. Edit seeds.config

```shell
nano seeds.config
```

Add new seed config at the beginning of the line:

```shell
 <tendermint ID>@<IP address or hostname>:<Port number>[,<tendermint ID>@<IP address or hostname>:<Port number>
```

### Example seed.config 

```shell
87d9f4b98bda1b1c1d1e1d6846b6076@34.68.4.230:26656,X86a2f5d72a1b2c3d2e2f123450bd3f@34.67.137.129:26656,a48e90ce5bda1b1c1d1e1d4f034880c2f2041@34.102.114.30:26656,f93e129bda1b1c1d1e1d76ae96af325dd@34.141.129.16:26656
```

cudos-noded-ctl set persistent_peers "$CUDOS_HOME"/config/persistent-peers.config
cudos@testnet-validator-clustered-01:~/cudos-data/config$ cat config.toml | grep persistent

(finds the line filtered by persisten)
### Cudos Daemon Configuration tool

If you need to alter individual parameters, run `cudos-noded-ctl`. 

:::info How to use Cudos Daemon Configuration Tool

`cudos-noded-ctl` must be run as user cudos.

```shell
root@debian:~# su - cudos
```

```shell
cudos-noded-ctl [-h] <command> [command_options]
```

Below are all available CTL commands

BE AWARE: All modifications to `config.toml` must specify contents on a single line, comma separated list. 

```shell
# Define seeds to connect to: 
# "seeds=" variable in config.toml 
# Example: <tendermint ID>@<IP address or hostname>:<Port number>[,<tendermint ID>@<IP address or hostname>:<Port number>

cudos-noded-ctl set seeds "$CUDOS_HOME"/config/seeds.config

# Define a list of nodes to keep persistent connections to:
# persistent_peers = variable in config.toml with the the contents of <filename>

cudos-noded-ctl set persistent_peers "$CUDOS_HOME"/config/persistent-peers.config

# Define peerIDs to be kept private (without gossiping)
# private_peer_ids - variable in config.toml with contents of <filename>

cudos-noded-ctl set private_peers "$CUDOS_HOME"/config/private-peers.config

# Define peerIDs to which a connection will be (re)established ignoring any existing limits
cudos-noded-ctl set unconditional_peers "$CUDOS_HOME"/config/unconditional-peers.config

# Define peer exchange reactor (Boolean)

cudos-noded-ctl set pex true

# Activate unsafe RPC commands like /dial_seeds and /unsafe_flush_mempool (Boolean)

cudos-noded-ctl set unsafe true

# Activate Prometheus metrics served under /metrics on PrometheusListenAddr (Boolean)
cudos-noded-ctl set prometheus true

# Active seed mode (boolean)

cudos-noded-ctl set seed_mode false

# Define gas prices

cudos-noded-ctl set minimum-gas-prices "5000000000000acudos"
```

**Read more information on [`cudos-noded-ctl`](https://github.com/CudoVentures/cudos-noded-packager/blob/main/docs/cudos-noded-ctl.md)**

:::

## 02 

Ensure that each node in the **Validator Cluster** has started and has synchronised. 
Follow the instructions [**here**](/docs/node/run-node/stake-node.md) to stake the **Validator node** in the Cluster. 

## 03 Run the staked Validator node in the cluster using cosmovisor

It is recommended to use cosmovisor to run your node. 

`cosmovisor` monitors the governance module for incoming chain upgrade proposals. If it sees a proposal that gets approved, it can automatically download the new binary, stop the current binary, switch from the old binary to the new one and restart the node with the new binary.

It automates chain upgrades to virtually zero downtime. 

```shell
root@cudos-node:~# systemctl enable --now cosmovisor@cudos
```

Enable and start the service with Cosmovisor.

```shell
cudos@testnet:~# systemctl enable --now cosmovisor@cudos
Created symlink /etc/systemd/system/multi-user.target.wants/cosmovisor@cudos.service → /lib/systemd/system/cosmovisor@.service.
```

## 04 Stop the node running

```shell
root@cudos-node:~# systemctl disable --now cosmovisor@cudos
Removed /etc/systemd/system/multi-user.target.wants/cosmovisor@cudos.service.
```








