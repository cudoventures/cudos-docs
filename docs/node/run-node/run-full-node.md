---
title: Run a full node
id: run-full-node
---

This guide explains how to initialise and start a **Full Node**. 

It follows on from the prerequisites section and assumes that you have built your environment by following the **Build Environment** instructions for your selected network. 

On Testnet and Mainnet, a Full node has the addresses of 3 **Seed nodes** pre-configured to allow it to connect to the Cudos network. 

## Networks

`Private Testnet`
`Testnet`
`Mainnet`

:::tip
Your network was selected at the **Build Environment** stage.
:::

## 00 Prerequisites

1. Check Hardware requirements.
2. Build your environment. 


<!-- | **Hardware** 	| **Specification**           	|
|------	|-------------------------------	|
| CPU   | At least 4 cores.                |
| RAM  	| 16 GB (Windows), 8 GB (Linux) 	|
| Disk 	| 610 GB SSD drive                  	|
| OS | Redhat/Fedora/CentOs/Debian/Ubuntu   |  -->

:::caution 
The script can only be run on a fresh node, prior to starting `cudos-noded`. If there are any existing `.toml` files, the initialisation script will not run.

This script must be run **BEFORE** starting the node for the first time.
:::  

## 01 Run Full node initialisation script

You **must** run the script as user `cudos` or you will see error messages. This script configures `config.toml` and `app.toml` for a `full-node` by default.

```shell
su - cudos
```

```shell
cudos-init-node.sh
```

## 02 Start the node

:::info cosmovisor

Cosmovisor is used to ensure zero downtime when there are updates and hard forks.

:::


Switch back to **root user** (CTRL + D)

```shell
systemctl enable --now cosmovisor@cudos
```

### Example start node

```shell
root@cudos-node:~# systemctl enable --now cosmovisor@cudos
Created symlink /etc/systemd/system/multi-user.target.wants/cosmovisor@cudos.service → /lib/systemd/system/cosmovisor@.service.
```

## 03 Check node sync status

As **root user**

```shell
cudos-noded status 2>&1 | jq -M 
```
:::tip how do i know when my node is synced?
Your node is fully synced when you see: 
`"catching_up: false"` 
and the latest block hash matches the network [Testnet Explorer](https://explorer.testnet.cudos.org) or [Mainnet Explorer](https://explorer.mainnet.cudos.org)
:::

![synced node](@site/static/img/node-sync.png)

### Example check node sync status

```shell 
root@cudos-node:~# cudos-noded status 2>&1 | jq -M 
{
  "NodeInfo": {
    "protocol_version": {
      "p2p": "8",
      "block": "11",
      "app": "0"
    },
    "id": "16da5b1a2f3a23387ab24d51d1ff2bb613883ed2",
    "listen_addr": "tcp://0.0.0.0:26656",
    "network": "cudos-testnet-public-3",
    "version": "0.34.19",
    "channels": "40202122233038606100",
    "moniker": "testnet-validator-01",
    "other": {
      "tx_index": "on",
      "rpc_address": "tcp://127.0.0.1:26657"
    }
  },
  "SyncInfo": {
    "latest_block_hash": "7EE32946AD3697017C7DF4F0077306C69FC033D6785093F1ABCC10072E13D04B",
    "latest_app_hash": "815DE61E2FC1DBB3EC5C1F57562BA9996D6C6EC56F8433B4D074FBB9CB018403",
    "latest_block_height": "5218823",
    "latest_block_time": "2022-09-15T08:59:27.948277937Z",
    "earliest_block_hash": "5FE3E88EFE9999C79B8D6271B56EE4349051FCEA290D5A512440B8BEB9662104",
    "earliest_app_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
    "earliest_block_height": "3603400",
    "earliest_block_time": "2021-08-25T08:21:32.483824849Z",
    "catching_up": true
  },
  "ValidatorInfo": {
    "Address": "D76F3EAAA340F06B402AB71725E087B793466789",
    "PubKey": {
      "type": "tendermint/PubKeyEd25519",
      "value": "VBSW/jtiXEO+dDVxq65gS2t7C1cUvqX0KWk5DBDPPrI="
    },
    "VotingPower": "0"
  }
}
```

:::warning

Be Aware: It will take time for the node to sync.

:::

## 04 Stop and disable the node

```shell
systemctl disable --now cosmovisor@cudos
```

### Example stop and disable the node

```shell
root@cudos-node:~# systemctl disable --now cosmovisor@cudos
Removed /etc/systemd/system/multi-user.target.wants/cosmovisor@cudos.service.
```

## Additional configuration of a full node

This step allows you to set up parameters to run a **Full node**.

The following script can be run to automatically configure a **Full node** and the **Seed nodes** to connect with on the network you selected at the Build Environment stage.


:::info How to use Cudos Daemon Configuration Tool

`cudos-noded-ctl` must be run as user cudos.

```shell
su - cudos
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







