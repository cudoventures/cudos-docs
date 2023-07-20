---
title: Run a full node (Docker)
id: full-docker
---

This guide explains how to initialise and start a **Full node** using Docker. A Full node has the addresses of 3 **Seed nodes** pre-configured to allow it to connect to the CUDOS network. 

It follows on from the [build environment instructions](/docs/node/prerequisites/build-docker) which is a prerequisite for this step. 

## Networks

`Testnet`
`Mainnet`


## 01 Run a Full node

:::info

Use `sudo` or change to a `root user`.

:::


```shell
# Change to root

sudo -i

# Navigate to full-node directory

cd /var/lib/cudos/CudosBuilders/docker/full-node
```

## 02 Select network 


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs
  defaultValue="Testnet"
  values={[
    {label: 'Testnet', value: 'Testnet'},
    {label: 'Mainnet', value: 'Mainnet'},
  ]}>

<TabItem value="Testnet">

Follow this guidance for **Testnet**

##  Define environmental variables
 
1. Create a copy of ***full-node.env.example*** and name it ***full-node.client.testnet.public01.env***`

```shell
cp full-node.env.example full-node.client.testnet.public01.env
```

2. Open the file ***full-node.client.testnet.public01.env***. 
 
```shell
$ nano full-node.client.testnet.public01.env
```

This opens a file as below:

### Example .env file

```shell
MONIKER=<TYPE DOWN NODE NAME>
PERSISTENT_PEERS=
SEEDS=

SHOULD_USE_GLOBAL_PEERS=false
SHOULD_USE_STATE_SYNC=false

MONITORING_ENABLED=false

EXTERNAL_ADDRESS=
ADDR_BOOK_STRICT=true
```

Add the following to the file:

```shell
# Set the `"MONIKER"` (your node’s name on the blockchain) attribute to your desired name:

MONIKER=<your-node-moniker>

# Set flags 

SHOULD_USE_GLOBAL_PEERS=true

```

## Initialise full node

Before running the node, initialize the chain and its genesis file as below using the following commands. 

1. Confirm you are in the correct directory as below:

```shell
pwd
/HOME/USER/var/lib/cudos/CudosBuilders/docker/full-node
```

2. Initialise the node

```shell
docker-compose --env-file full-node.client.testnet.public01.arg -f init-full-node.yml -p cudos-init-full-node-client-testnet-public-01 up --build
```

## Example initialisation extract

```shell
Creating cudos-init-full-node-client-testnet-public-01 ... done
Attaching to cudos-init-full-node-client-testnet-public-01
cudos-init-full-node-client-testnet-public-01 | {"app_message":{"admin":{},"auth":{"accounts":[],"params":{"max_memo_characters":"256","sig_verify_cost_ed25519":"590","sig_verify_cost_secp256k1":"1000","tx_sig_limit":"7","tx_size_cost_per_byte":"10"}},"bank":{"balances":[],"denom_metadata":[],"params":{"default_send_enabled":true,"send_enabled":[]},"supply":[]},"capability":{"index":"1","owners":[]},"crisis":{"constant_fee":{"amount":"1000","denom":"stake"}},"cudoMint":{"minter":{"mint_remainder":"0.000000000000000000","norm_time_passed":"0.000000000000000000"},"params":{"blocks_per_day":"17280"}},"distribution":{"delegator_starting_infos":[],"delegator_withdraw_infos":[],"fee_pool":{"community_pool":[]},"outstanding_rewards":[],"params":{"base_proposer_reward":"0.010000000000000000","bonus_proposer_reward":"0.040000000000000000","community_tax":"0.020000000000000000","withdraw_addr_enabled":true},"previous_proposer":"","validator_accumulated_commissions":[],"validator_current_rewards":[],"validator_historical_rewards":[],"validator_slash_events":[]},"evidence":{"evidence":[]},"feegrant":{"allowances":[]},"genutil":{"gen_txs":[]},"gov":{"deposit_params":{"max_deposit_period":"172800s","min_deposit":[{"amount":"10000000","denom":"stake"}]},"deposits":[],"proposals":[],"starting_proposal_id":"1","tally_params":{"quorum":"0.334000000000000000","threshold":"0.500000000000000000","veto_threshold":"0.334000000000000000"},"votes":[],"voting_params":{"voting_period":"172800s"}},"gravity":{"attestations":[],"batch_confirms":[],"batches":[],"delegate_keys":[],"erc20_to_denoms":[],"last_latest_valset_nonce":"0","last_observed_nonce":"0","last_outgoing_batch_id":"0","last_slashed_batched_block":"0","last_slashed_logic_call_block":"0","last_slashed_valset_nonce":"0","last_tx_pool_id":"0","last_un_bonding_block_height":"0","logic_call_confirms":[],"logic_calls":[],"params":{"average_block_time":"5000","average_ethereum_block_time":"15000","bridge_chain_id":"0","bridge_ethereum_address":"0x0000000000000000000000000000000000000000","contract_source_hash":"","gravity_id":"defaultgravityid","minimum_fee_transfer_to_eth":"1","minimum_transfer_to_eth":"5","signed_batches_window":"10000","signed_logic_calls_window":"10000","signed_valsets_window":"10000","slash_fraction_bad_eth_signature":"0.001000000000000000","slash_fraction_batch":"0.001000000000000000","slash_fraction_logic_call":"0.001000000000000000","slash_fraction_valset":"0.001000000000000000","target_batch_timeout":"43200000","unbond_slashing_valsets_window":"10000","valset_reward":{"amount":"0","denom":""}},"static_val_cosmos_addrs":[],"unbatched_transfers":[],"valset_confirms":[],"valsets":[]},"ibc":{"channel_genesis":{"ack_sequences":[],"acknowledgements":[],"channels":[],"commitments":[],"next_channel_sequence":"0","receipts":[],"recv_sequences":[],"send_sequences":[]},"client_genesis":{"clients":[],"clients_consensus":[],"clients_metadata":[],"create_localhost":false,"next_client_sequence":"0","params":{"allowed_clients":["06-solomachine","07-tendermint"]}},"connection_genesis":{"client_connection_paths":[],"connections":[],"next_connection_sequence":"0","params":{"max_expected_time_per_block":"30000000000"}}},"nft":{"collections":[]},"params":null,"slashing":{"missed_blocks":[],"params":{"downtime_jail_duration":"600s","min_signed_per_window":"0.500000000000000000","signed_blocks_window":"100","slash_fraction_double_sign":"0.050000000000000000","slash_fraction_downtime":"0.010000000000000000"},"signing_infos":[]},"staking":{"delegations":[],"exported":false,"last_total_power":"0","last_validator_powers":[],"params":{"bond_denom":"stake","historical_entries":10000,"max_entries":7,"max_validators":100,"unbonding_time":"1814400s"},"redelegations":[],"unbonding_delegations":[],"validators":[]},"transfer":{"denom_traces":[],"params":{"receive_enabled":true,"send_enabled":true},"port_id":"transfer"},"upgrade":{},"wasm":{"codes":[],"contracts":[],"gen_msgs":[],"params":{"code_upload_access":{"address":"","permission":"Everybody"},"instantiate_default_permission":"Everybody","max_wasm_code_size":"1228800"},"sequences":[]}},"chain_id":"test-chain-PmkhWc","gentxs_dir":"","moniker":"Tango","node_id":"28732534ed966d2775e1c2880c5f81014a9e3b05"}
cudos-init-full-node-client-testnet-public-01 | 28732534ed966d2775e1c2880c5f81014a9e3b05
```


## Start your node

```shell
docker-compose --env-file full-node.client.testnet.public01.arg -f start-full-node.yml -p cudos-start-full-node-client-testnet-public-01 up --build --detach
```

:::success ✅ 
You have been successful if you see a newly generated file containing your **node ID**, (string of random alphanumeric characters).

`/var/lib/cudos/CudosData/cudos-data-full-node-client-testnet-public-01/tendermint.nodeid`

:::

</TabItem>
<TabItem value="Mainnet">

Follow this guidance for **Mainnet**

##  Define environmental variables
  
1. Create a copy of ***full-node.env.example***, naming the copy ***full-node.client.mainnet.env***

```shell
cp full-node.env.example full-node.client.mainnet.env
```

2. Open the file ***full-node.client.mainnet.env***
 
```shell
# Set the `"MONIKER"` (your node’s name on the blockchain) attribute to your desired name:

MONIKER=<your-node-moniker>

# Set flags 

SHOULD_USE_GLOBAL_PEERS=true
```

3. **Exit** root mode and **Save** the file.

## Initialise full node

1. Confirm you are in the correct directory as below:

```shell
pwd
/HOME/USER/var/lib/cudos/CudosBuilders/docker/full-node
```

2. Initialise the node

```shell
docker-compose --env-file full-node.client.mainnet.arg -f init-full-node.yml -p cudos-init-full-node-mainnet up --build
```

## Start your node

```shell
docker-compose --env-file full-node.client.mainnet.arg -f start-full-node.yml -p cudos-start-full-node-mainnet up --build --detach
```

:::success ✅ 
You have been successful if you see a newly generated file containing your **node ID**, (string of random alphanumeric characters).

`/var/lib/cudos/CudosData/cudos-start-full-node-mainnet/tendermint.nodeid`

:::

  </TabItem>
</Tabs>

## 03 Check node status

Syncing may take several hours. Refer to [Checking sync status](/docs/node/run-node/check-sync) to verify your node is syncing. 




