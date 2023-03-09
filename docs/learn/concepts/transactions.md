---
title: Transactions & Queries
id: transactions
---

A **Transaction** is any action that changes the state of the Cudos blockchain. 

Each computational operation that creates, stores or updates data is a transaction and incurs a gas fee. 

Transactions include:
* messages
* fees
* signature from a key

A transaction can be initiated with a wallet or `cudos-noded CLI`. It must be signed by the creator of the transaction. 

The transaction is added to a block by a Validator and broadcast.

## Execute transaction

Use cudos-noded CLI to send tokens from one account to another:

Insert the relevant `addresses` and `chain_id`. 

:::info 
You may want to cap the maximum gas that can be consumed by the transaction via the `--gas` flag. If you pass `--gas=auto`, the gas supply will be automatically estimated before executing the transaction
:::

### Example execute transaction

```shell
cudos-noded tx bank send <sender_key_name_or_address> <recipient_address> 10acudos \
  --chain-id=<chain_id> --gas=auto
```

## Query transaction

A **Query** is a transaction that does not change the state of the blockchain as it simply reads data without changing it.

The following transaction queries are available on cudos-noded CLI

|command| description|
|---|---|
|tx    |  Query for a transaction by hash, "addr/seq" combination or comma-separated signatures in a committed block|
|txs    | Query for paginated transactions that match a set of events|
|upgrade   |   Querying commands for the upgrade module|
|wasm    | Querying commands for the wasm module|

```shell
Flags:
    --height int      Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help            help for tx
      --node string     <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string   Output format (text|json) (default "text")
      --type string     The type to be used when querying tx, can be one of "hash", "acc_seq", "signature" (default "hash")

Global Flags:
    --chain-id string     The network chain ID
    --home string         directory for config and data (default "/Users/adiamond/projects/run-node/cudos-node/cudos-data")
    --log_format string   The logging format (json|plain) (default "plain")
    --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
    --trace               print out full stack trace on errors
```



Transaction queries must be in the following format:

cudos-noded query tx --type=[hash|acc_seq|signature] [hash|acc_seq|signature] [flags]

### Example query transaction

In the example below, the following data has been used:

`type` = **hash**
`hash` = **2CC4F15A23122F209B9209EAD1D7C37B84ADF5E37BE78234386FBDBB8AD3C788**
`flag` = **--node https://rpc.testnet.cudos.org:443**

```shell
cudos-noded query tx --type=hash 2CC4F15A23122F209B9209EAD1D7C37B84ADF5E37BE78234386FBDBB8AD3C788 --node https://rpc.testnet.cudos.org:443
code: 0
codespace: ""
data: 0A260A242F636F736D7761736D2E7761736D2E76312E4D736745786563757465436F6E7472616374
events:
- attributes:
  - index: true
    key: Z3JhbnRlcg==
    value: Y3Vkb3MxZ2VudWR6cHZxZTJ0OWs2NHh3dWV1YTM1YThrZnZsM2ZjNnVjNjI=
  - index: true
    key: Z3JhbnRlZQ==
    value: Y3Vkb3MxcmNwZmhzbDU4NmxmODI4NDZhZTV5ZWNrZjZmdXFncDJtMHRqYzc=
  type: use_feegrant
- attributes:
  - index: true
    key: Z3JhbnRlcg==
    value: Y3Vkb3MxZ2VudWR6cHZxZTJ0OWs2NHh3dWV1YTM1YThrZnZsM2ZjNnVjNjI=
  - index: true
    key: Z3JhbnRlZQ==
    value: Y3Vkb3MxcmNwZmhzbDU4NmxmODI4NDZhZTV5ZWNrZjZmdXFncDJtMHRqYzc=
  type: set_feegrant
- attributes:
  - index: true
    key: c3BlbmRlcg==
    value: Y3Vkb3MxZ2VudWR6cHZxZTJ0OWs2NHh3dWV1YTM1YThrZnZsM2ZjNnVjNjI=
  - index: true
    key: YW1vdW50
    value: NzMwNzgwMDAwMDAwMDAwMDAwYWN1ZG9z
  type: coin_spent
- attributes:
  - index: true
    key: cmVjZWl2ZXI=
    value: Y3Vkb3MxN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWwzZzJsNGc=
  - index: true
    key: YW1vdW50
    value: NzMwNzgwMDAwMDAwMDAwMDAwYWN1ZG9z
  type: coin_received
- attributes:
  - index: true
    key: cmVjaXBpZW50
    value: Y3Vkb3MxN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWwzZzJsNGc=
  - index: true
    key: c2VuZGVy
    value: Y3Vkb3MxZ2VudWR6cHZxZTJ0OWs2NHh3dWV1YTM1YThrZnZsM2ZjNnVjNjI=
  - index: true
    key: YW1vdW50
    value: NzMwNzgwMDAwMDAwMDAwMDAwYWN1ZG9z
  type: transfer
- attributes:
  - index: true
    key: c2VuZGVy
    value: Y3Vkb3MxZ2VudWR6cHZxZTJ0OWs2NHh3dWV1YTM1YThrZnZsM2ZjNnVjNjI=
  type: message
- attributes:
  - index: true
    key: ZmVl
    value: NzMwNzgwMDAwMDAwMDAwMDAwYWN1ZG9z
  type: tx
- attributes:
  - index: true
    key: YWNjX3NlcQ==
    value: Y3Vkb3MxcmNwZmhzbDU4NmxmODI4NDZhZTV5ZWNrZjZmdXFncDJtMHRqYzcvOTc0OA==
  type: tx
- attributes:
  - index: true
    key: c2lnbmF0dXJl
    value: T1BSdExhOUtUV3Zpai9EbDM3Z3VNdkJ0Tjd0cHY4S2ZxT0ZwYW9IWXU3RW9oOWh1OUd6a3BjN2ZBbU9BK2ljUGt2WmpyWXFsOWI3d3oxWFlXdkZiU2c9PQ==
  type: tx
- attributes:
  - index: true
    key: YWN0aW9u
    value: L2Nvc213YXNtLndhc20udjEuTXNnRXhlY3V0ZUNvbnRyYWN0
  type: message
- attributes:
  - index: true
    key: bW9kdWxl
    value: d2FzbQ==
  - index: true
    key: c2VuZGVy
    value: Y3Vkb3MxcmNwZmhzbDU4NmxmODI4NDZhZTV5ZWNrZjZmdXFncDJtMHRqYzc=
  type: message
- attributes:
  - index: true
    key: X2NvbnRyYWN0X2FkZHJlc3M=
    value: Y3Vkb3MxMmh3YXRkdnhhOXNreWo1MnJnMG54MHN0ZWhtMnYzN2ZtZWF0ejlweXRscWVyZnl2NHlkcXE0bjk0NQ==
  type: execute
gas_used: "135340"
gas_wanted: "146156"
height: "6142768"
info: ""
logs:
- events:
  - attributes:
    - key: _contract_address
      value: cudos12hwatdvxa9skyj52rg0nx0stehm2v37fmeatz9pytlqerfyv4ydqq4n945
    type: execute
  - attributes:
    - key: action
      value: /cosmwasm.wasm.v1.MsgExecuteContract
    - key: module
      value: wasm
    - key: sender
      value: cudos1rcpfhsl586lf82846ae5yeckf6fuqgp2m0tjc7
    type: message
  log: ""
  msg_index: 0
raw_log: '[{"events":[{"type":"execute","attributes":[{"key":"_contract_address","value":"cudos12hwatdvxa9skyj52rg0nx0stehm2v37fmeatz9pytlqerfyv4ydqq4n945"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmwasm.wasm.v1.MsgExecuteContract"},{"key":"module","value":"wasm"},{"key":"sender","value":"cudos1rcpfhsl586lf82846ae5yeckf6fuqgp2m0tjc7"}]}]}]'
timestamp: "2022-11-17T16:00:29Z"
tx:
  '@type': /cosmos.tx.v1beta1.Tx
  auth_info:
    fee:
      amount:
      - amount: "730780000000000000"
        denom: acudos
      gas_limit: "146156"
      granter: cudos1genudzpvqe2t9k64xwueua35a8kfvl3fc6uc62
      payer: ""
    signer_infos:
    - mode_info:
        single:
          mode: SIGN_MODE_DIRECT
      public_key:
        '@type': /cosmos.crypto.secp256k1.PubKey
        key: A8Emj+TTYhATr9Bv6/xYCE2ujqyM2Nh79ENnysQrfPpO
      sequence: "9748"
  body:
    extension_options: []
    memo: ""
    messages:
    - '@type': /cosmwasm.wasm.v1.MsgExecuteContract
      contract: cudos12hwatdvxa9skyj52rg0nx0stehm2v37fmeatz9pytlqerfyv4ydqq4n945
      funds: []
      msg:
        update_exchange_rate:
          rate: "0.002960600300000000"
      sender: cudos1rcpfhsl586lf82846ae5yeckf6fuqgp2m0tjc7
    non_critical_extension_options: []
    timeout_height: "0"
  signatures:
  - OPRtLa9KTWvij/Dl37guMvBtN7tpv8KfqOFpaoHYu7Eoh9hu9Gzkpc7fAmOA+icPkvZjrYql9b7wz1XYWvFbSg==
txhash: 2CC4F15A23122F209B9209EAD1D7C37B84ADF5E37BE78234386FBDBB8AD3C788
```