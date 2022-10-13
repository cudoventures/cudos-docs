---
title: Start validator node
id: start-validator-node
---

This guide explains how to start a **Standalone Validator node**. It follows on from [Stake node](/docs/node/run-node/stake-node). 

## 01 Start the node

As **root** user

```shell
systemctl enable --now cosmovisor@cudos
```

### Example start node

```shell
root@testnet:~# systemctl enable --now cosmovisor@cudos
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
 






