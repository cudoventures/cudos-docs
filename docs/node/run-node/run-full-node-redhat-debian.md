---
title: Run a full node
id: run-full-node-redhat-debian
---

This guide explains how to initialise and start a **Full Node**. 

It follows on from the prerequisites section and assumes that you have built your environment by following the [**Build Environment**](/docs/node/prerequisites/build-redhat-debian). 

A Full node has the addresses of 3 **Seed nodes** pre-configured to allow it to connect to the Cudos network. 

## Networks

`Private Testnet`
`Testnet`
`Mainnet`

:::tip
Your network was selected at the **Build Environment** stage.
:::

<!-- 
| **Hardware** 	| **Specification**           	|
|------	|-------------------------------	|
| CPU   | At least 2 cores.                |
| RAM  	| 16 GB (Windows), 8 GB (Linux) 	|
| Disk 	| An SSD drive                  	|
| OS | Redhat/Fedora/CentOs/Debian/Ubuntu   | -->




## 01 Configure a full node

This step allows you to set up parameters to run a full node.

:::info How to use Cudos Daemon Configuration Tool

`cudos-noded-ctl` must be run as user cudos.

```shell
root@debian:~# su - cudos
```

```shell
cudos-noded-ctl [-h] <command> [command_options]
```

Below are all available **full node** CTL commands

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


The following script can be run to automatically configure a **Full Node** and the **Seed Nodes** to connect with on the network you selected at the Build Environment stage.

The script can only be run a fresh node, prior to starting `cudos-noded`. If there are any existing `.toml` files, the initialisation script will not run.

This script must be run BEFORE starting the node for the first time.  

:::info

## Full node initialisation script

1. This script configures `config.toml` and `app.toml` for a `full-node` by default.

2. You **must** run the script as user `cudos` or you will see error messages. 
:::

```shell
su - cudos
```

```shell
$ cudos-init-node.sh
```

## 02 Run a full node using cosmovisor

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

## 02 Check node sync status

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

## 03 Stop the node running

```shell
root@cudos-node:~# systemctl disable --now cosmovisor@cudos
Removed /etc/systemd/system/multi-user.target.wants/cosmovisor@cudos.service.
```



