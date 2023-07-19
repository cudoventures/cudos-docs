---
title: Node sync status
id: check-sync
---

:::tip ☕️ Node Sync Rate

Based on this GCP VM (e2-standard-4 4vCPU, 16 GB memory, 610 GB SSD, Ubuntu 20.04 LTS), a 
test node will sync at approximately 13 blocks per second. If there are a million blocks, it will take approximately 21 hours per million blocks to catch up.

To get a live estimation: 
- Check the increase in block height over a 30s period on your node and divide by 30 [blocks/sec].

- Check the difference in height on the explorer compared to the node, to find the number of blocks needed to catch up [qty of blocks]

[qty of blocks] / [blocks/sec] = time remaining in seconds
/3600 for time in hours

:::


## Checking sync status

You can check the status of your node sync by running the following command:
As **root user**

```shell
cudos-noded status 2>&1 | jq -M 
```
:::tip how do i know when my node is synced?
Your node is fully synced when you see: 
`"catching_up: false"` 
and the latest `"block height"` matches the network [Testnet Explorer](https://explorer.testnet.cudos.org) or [Mainnet Explorer](https://explorer.mainnet.cudos.org)
:::

![synced-node](@site/static/img/node-sync.png)

## Example Sync Status Check

```js
{
  "NodeInfo": {
    "protocol_version": {
      "p2p": "8",
      "block": "11",
      "app": "0"
    },
    "id": "396bebbb5d2617randomef3d0e4608a0bcf1",
    "listen_addr": "tcp://0.0.0.0:26656",
    "network": "cudos-1",
    "version": "0.34.19",
    "channels": "40202122233038606100",
    "moniker": "MY_MONIKER",
    "other": {
      "tx_index": "on",
      "rpc_address": "tcp://127.0.0.1:26657"
    }
  },
  "SyncInfo": {
    "latest_block_hash": "80FB74856A0EDC26C857F1B70C8BEE9F0C2B9DAFDF8604B1AC4CEEF4443BBC2A",
    "latest_app_hash": "F799F33B884B3CA0E38A82F4054C02F537CA538AD60F9314214D139EE59E71D4",
    "latest_block_height": "326283",
    "latest_block_time": "2022-07-08T14:48:31.165851742Z",
    "earliest_block_hash": "7CE704456BD7686AF2CC3A2D4323A4D764A49F3EDF9178E0BDCAFF900E12F5F2",
    "earliest_app_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
    "earliest_block_height": "1",
    "earliest_block_time": "2022-06-15T07:48:13.312860749Z",
    "catching_up": false
  },
  "ValidatorInfo": {
    "Address": "FD8D6DE4BARANDOMDBC90DDD",
    "PubKey": {
      "type": "tendermint/PubKeyEd25519",
      "value": "s3FbRANDOMCHARACTERSDk4K3YDM="
    },
    "VotingPower": "0"
  }
}
```
### Fully synced

In the above example,`"catching_up": false` and `"latest_block_time"` is a few seconds before current time. This indicates that the node is fully up to date. We can also compare the `"latest_block_height": "326283"` with the [CUDOS explorer](https://explorer.cudos.org/) for confirmation. 



### Syncing in progress

If your node is still syncing: `latest_block_height` and `latest_block_time` are incrementing and you can see `"catching_up": true`.

### Not Syncing

If `"latest_block_height": "0"`, your node is not syncing. Try to add another seed (refer to Manually adding new seeds)






