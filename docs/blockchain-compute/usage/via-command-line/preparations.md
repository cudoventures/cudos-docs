---
title: Preparations
id: preparations
---

# Preparations

## Requirements

To be a consumer, you only need access to the Cudos blockchain, an SSH key, and some CUDOS tokens.

:::info
If you simply want to purchase a VM, and would prefer to use a UI, you can use the [website](https://compute.cudos.org).

This documentation is only needed if you want to create your own integration with the contract, or just want to learn how the system works.
:::

## Contract Addresses

The Cudos Blockchain Compute contract has different addresses on different networks.

Network | Address | Denom
---|---|---
Cudos Mainnet |`cudos1gn59sajfpqdlzxwmnnl69r7k2rxdt52l0nwwgalaa8nn2h8vrjzss2gz08` | CUDOS

### Setting Up

You will need to have the `cudos-noded` CLI installed which you can install from [here](https://github.com/CudoVentures/cudos-node) with `make`. (It will need GoLang and GCC installed.)

`cudos-noded` can be used to set up your own full node to make interactions with the chain from, or you can use `cudos-noded` to interact via another node using RPC.

You will notice we use *a lot* of environment variables for all the flags of the CLI to keep things structured and avoid repetition.

```console
# environment variables for mainnet
export RPC_NODE="https://rpc.cudos.org:443"
export CHAIN_ID=cudos-1
export GAS=auto
export GAS_PRICES=5000000000000acudos
export GAS_ADJUSTMENT=1.3
export KEYRING=os
export CONTRACT_ADDRESS=cudos1gn59sajfpqdlzxwmnnl69r7k2rxdt52l0nwwgalaa8nn2h8vrjzss2gz08

# the TX_FLAGS variables combines a number of the above variables
export TX_FLAGS="--node=$RPC_NODE --gas=$GAS --gas-adjustment=$GAS_ADJUSTMENT --gas-prices=$GAS_PRICES --chain-id=$CHAIN_ID --keyring-backend=$KEYRING"
```

:::info
It can be helpful to store this in a `vars.sh` file and then to run:

```console
source vars.sh
```

:::

### Create a wallet address and add it to the CLI instance

Create a Cudos wallet address if you haven't already by following the instructions [here](../../../learn/concepts/wallets/keplr-create.md), then add your mnemonic to your `cudos-noded` instance to make transactions on the chain with your private key:

```console
cudos-noded keys add <your-wallet-name> --keyring-backend $KEYRING --recover
```

This will ask you to type your BIP-39 mnemonic phrase which will be secured using your operating system keyring which you set with the flag.

We now add this wallet to an environment variable as well, we call it `$OWNER`:

```console
OWNER=$( cudos-noded keys show -a <your-wallet-name> --keyring-backend "$KEYRING" | tee /dev/tty | tail -1 | tr -d '\r' )
```

:::warning Stay Safe
As always, keep your mnemonic phrase safe and secret.
:::
> Your wallet will Cudos tokens to pay for gas fees, and the costs associated with accessing services on Blockchain Compute. You will need to them purchase on an exchange and either transfer to your address or [bridge](https://bridge.cudos.org/) from the Ethereum ERC-20 version of the token once in your Ethereum wallet. Feel free to message in the [Cudos Discord](https://discord.gg/cudos/) if you need assistance.
[This guide](../../../governance/get-tokens/get-tokens.md) is also helpful. 

### Structuring Commands

The following pages of these docs all show the JSON payload that will be sent as part of the commands starting with `cudos-noded`.

We will look at two main commands, `query` and `execute`. Querying doesn't cost any gas fees, similar to Ethereum. Execute commands will cost gas fees.

For the JSON payloads, we want to set them as environment variables as well so that they are easy to add to the commands, [`jquery`](https://github.com/jquery/jquery) is helpful here for structuring our JSON payloads.

Taking the first example from [the Queries section](queries.md), where the JSON payload is:

```json
{
  machine_type_list: {}
}
```

We can place this in an environment variable called `JSON` using `jquery`:

```console
JSON=$( jq -n '{ "machine_type_list":{}}' | tee /dev/tty )
```

Now to run a `cudos-noded` command with the payload:

1. For queries:

    ```console
    cudos-noded query wasm contract-state smart $CONTRACT_ADDRESS "$JSON" --node $RPC_NODE
    ```

2. For execute:

    ```console
    cudos-noded tx wasm execute --from $OWNER $CONTRACT_ADDRESS $JSON $TX_FLAGS
    ```

These will be the two structures of commands you will use throughout the rest of the process via the CLI. Good Luck!
