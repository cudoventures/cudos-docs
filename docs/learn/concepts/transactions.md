---
title: Transactions & Queries
id: transactions
---

A **Transaction** is any action that changes the state of the ASI Alliance blockchain. 

Each computational operation that creates, stores or updates data is a transaction and incurs a gas fee. 

Transactions include:
* messages
* fees
* signature from a key

A transaction can be initiated with a wallet or `fetchd CLI`. It must be signed by the creator of the transaction. 

The transaction is added to a block by a Validator and broadcast.

## Execute transaction

Use fetchd CLI to send tokens from one account to another:

Insert the relevant `addresses` and `chain_id`. 

:::info 
You may want to cap the maximum gas that can be consumed by the transaction via the `--gas` flag. If you pass `--gas=auto`, the gas supply will be automatically estimated before executing the transaction
:::

### Example execute transaction

```shell
fetchd tx bank send <sender_key_name_or_address> <recipient_address> 10afetchd \
  --chain-id=<chain_id> --gas=auto
```

## Query transaction

A **Query** is a transaction that does not change the state of the blockchain as it simply reads data without changing it.

The following transaction queries are available on fetchd CLI

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
    --home string         directory for config and data
    --log_format string   The logging format (json|plain) (default "plain")
    --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
    --trace               print out full stack trace on errors
```



Transaction queries must be in the following format:

fetchd query tx --type=[hash|acc_seq|signature] [hash|acc_seq|signature] [flags]