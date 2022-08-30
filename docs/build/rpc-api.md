---
title: Endpoints
id: rpc-api
---

The **Cudos RPC API** provides direct interaction with the Cudos network.

The following endpoint is available for the Cudos Mainnet:

```shell
https://rpc.cudos.org/
```

## View Block Height

Query the network to get details about the current block height.

### Parameters

`block number` - Specify block number to view 

### Example

```json
$ curl https://rpc.cudos.org/block?height=1
{
  "jsonrpc": "2.0",
  "id": -1,
  "result": {
    "block_id": {
      "hash": "7CE704456BD7686AF2CC3A2D4323A4D764A49F3EDF9178E0BDCAFF900E12F5F2",
      "parts": {
        "total": 1,
        "hash": "D78D9DC7A04FFED7CC8E203A6E24DA14BFF3180734173CAC3831A63A85C60DBE"
      }
    },
    "block": {
      "header": {
        "version": {
          "block": "11"
        },
        "chain_id": "cudos-1",
        "height": "1",
        "time": "2022-06-15T07:48:13.312860749Z",
        "last_block_id": {
          "hash": "",
          "parts": {
            "total": 0,
            "hash": ""
          }
        },
        "last_commit_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
        "data_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
        "validators_hash": "EFA1CBDFA5EEEA52BBDF1AD306141E2D3CCD2E51200532FF81C141F0379A3E25",
        "next_validators_hash": "EFA1CBDFA5EEEA52BBDF1AD306141E2D3CCD2E51200532FF81C141F0379A3E25",
        "consensus_hash": "048091BC7DDC283F77BFBF91D73C44DA58C3DF8A9CBC867405D8B7F3DAADA22F",
        "app_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
        "last_results_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
        "evidence_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
        "proposer_address": "B99F6AC612095807A014758F1BCBBCF0FE22B0A5"
      },
      "data": {
        "txs": []
      },
      "evidence": {
        "evidence": []
      },
      "last_commit": {
        "height": "0",
        "round": 0,
        "block_id": {
          "hash": "",
          "parts": {
            "total": 0,
            "hash": ""
          }
        },
        "signatures": []
      }
    }
  }
  ```

## View Node Status

View node info, pubkey, latest block hash, app hash, block height and time. 

### Parameters

None

### Example

```json
$ curl https://rpc.cudos.org/status?
{
  "jsonrpc": "2.0",
  "id": -1,
  "result": {
    "node_info": {
      "protocol_version": {
        "p2p": "8",
        "block": "11",
        "app": "0"
      },
      "id": "2958b15e9102cb556cc0f1f1bbbfdfc922a16069",
      "listen_addr": "tcp://0.0.0.0:26656",
      "network": "cudos-1",
      "version": "0.34.19",
      "channels": "40202122233038606100",
      "moniker": "mainnet-full-node-01",
      "other": {
        "tx_index": "on",
        "rpc_address": "tcp://0.0.0.0:26657"
      }
    },
    "sync_info": {
      "latest_block_hash": "A8955B7894323A115248335DBAC8C0C7DD499045B3BE78FF9EA0C52BBADE100A",
      "latest_app_hash": "BEFD5B2523E5AAAE7F8A2B84CDA4896C490BADE6A4C4B070BCC28E672FAED88C",
      "latest_block_height": "999306",
      "latest_block_time": "2022-08-25T11:59:01.314661938Z",
      "earliest_block_hash": "7CE704456BD7686AF2CC3A2D4323A4D764A49F3EDF9178E0BDCAFF900E12F5F2",
      "earliest_app_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
      "earliest_block_height": "1",
      "earliest_block_time": "2022-06-15T07:48:13.312860749Z",
      "catching_up": false
    },
    "validator_info": {
      "address": "FD156F7231984AF43C48310A765C071A3ADC53F7",
      "pub_key": {
        "type": "tendermint/PubKeyEd25519",
        "value": "tZUGX+eKGhZDoSwIG1+CplRLj5kv0V1YpHSAhrKFJDw="
      },
      "voting_power": "0"
    }
  }
  ```

