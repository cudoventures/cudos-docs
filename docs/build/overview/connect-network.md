---
title: Connect to network 
id: connect-network
---
 
The easiest way to connect to a Cudos environment is to connect to the Cudos Public testnet RPC. 
This way you can deploy a contract and interact with it. 

## 00 Prerequisites

This step assumes you have already built the binary and have cudos-noded CLI running.
If not check out [**Build Binary**](/docs/build/overview/build-binary-go)

### Testnet

| Chain ID               | URL                                            |
| ---                    | ---                                            |
| cudos-testnet-public-3 | http://sentry1.gcp-uscentral1.cudos.org:26657 |

### Mainnet

| Chain ID       | URL                   |
| ---            | ---                   |
|    cudos-1     | https://rpc.cudos.org |


## 01 Connect to Testnet RPC

Run this command in the `cudos-noded` CLI to connect to the Testnet.

```shell
cudos-noded status --node http://sentry1.gcp-uscentral1.cudos.org:26657
```

### Example 

```shell
cudos-noded status --node http://sentry1.gcp-uscentral1.cudos.org:26657
{"NodeInfo":{"protocol_version":{"p2p":"8","block":"11","app":"0"},"id":"cddc2c56c414f480ca9458db5d07820660953dc4","listen_addr":"35.232.27.92:26656","network":"cudos-testnet-public-3","version":"0.34.19","channels":"40202122233038606100","moniker":"cudos-sentry-node-01","other":{"tx_index":"on","rpc_address":"tcp://0.0.0.0:26657"}},"SyncInfo":{"latest_block_hash":"75DDF2F5DDAE725AA24A44E290A109E034A876051C1B793C2B23AE3F7DC4D6EB","latest_app_hash":"D292BB84351D3F7998B8C81E2F239B35EB973763B128A048DC921BB11E868174","latest_block_height":"6127539","latest_block_time":"2022-11-16T15:00:20.743120897Z","earliest_block_hash":"5FE3E88EFE9999C79B8D6271B56EE4349051FCEA290D5A512440B8BEB9662104","earliest_app_hash":"E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855","earliest_block_height":"3603400","earliest_block_time":"2021-08-25T08:21:32.483824849Z","catching_up":false},"ValidatorInfo":{"Address":"77588B190B245C6827EC5C9541C47A51DD15764D","PubKey":{"type":"tendermint/PubKeyEd25519","value":"P2D57QXFV6tgNoGiPohcPG9NmFOXmdoUmM+smA611/M="},"VotingPower":"0"}}
```

:::tip 💡 Connect to other existing nodes

To connect to an existing node, you need an address in the `https://<host>:<port>` format. Choose your own or use the one's below:

## Cudos Testnet nodes

```
https://sentry1.gcp-uscentral1.cudos.org:36657

https://sentry2.gcp-uswest2.cudos.org:36657

https://sentry3.gcp-euwest4.cudos.org:36657
```

## Cudos Mainnet nodes

```
https://rpc.cudos.org

https://mainnet-full-node-01.hosts.cudos.org:36657

https://mainnet-full-node-02.hosts.cudos.org:36657
```
:::

<!-- 



### 🐧 OPTION ONE

Create a single node in a local testnet of just one node. In this environment, you have one account and you are the only validator signing blocks for your private network.

#### 1. Initialise your private testnet

Replace `TESTNET-NAME` with a name of your choosing and assign a name to your node (`NODE-MONIKER`). 

```shell
cudos-noded init --chain-id=<TESTNET-NAME> <NODE-MONIKER>
```

#### 👉🏻 ***Example initialise private testnet*** 

In the example below, the private network is **private** and the node moniker is **penguin**.

```shell
cudos-noded init --chain-id=private penguin
{"app_message":{"admin":{},"auth":{"accounts":[],"params":{"max_memo_characters":"256","sig_verify_cost_ed25519":"590","sig_verify_cost_secp256k1":"1000","tx_sig_limit":"7","tx_size_cost_per_byte":"10"}},"authz":{"authorization":[]},"bank":{"balances":[],"denom_metadata":[],"params":{"default_send_enabled":true,"send_enabled":[]},"supply":[]},"capability":{"index":"1","owners":[]},"crisis":{"constant_fee":{"amount":"1000","denom":"stake"}},"cudoMint":{"minter":{"mint_remainder":"0.000000000000000000","norm_time_passed":"0.000000000000000000"},"params":{"increment_modifier":"17280"}},"distribution":{"delegator_starting_infos":[],"delegator_withdraw_infos":[],"fee_pool":{"community_pool":[]},"outstanding_rewards":[],"params":{"base_proposer_reward":"0.010000000000000000","bonus_proposer_reward":"0.040000000000000000","community_tax":"0.020000000000000000","withdraw_addr_enabled":true},"previous_proposer":"","validator_accumulated_commissions":[],"validator_current_rewards":[],"validator_historical_rewards":[],"validator_slash_events":[]},"evidence":{"evidence":[]},"feegrant":{"allowances":[]},"genutil":{"gen_txs":[]},"gov":{"deposit_params":{"max_deposit_period":"172800s","min_deposit":[{"amount":"10000000","denom":"stake"}]},"deposits":[],"proposals":[],"starting_proposal_id":"1","tally_params":{"quorum":"0.334000000000000000","threshold":"0.500000000000000000","veto_threshold":"0.334000000000000000"},"votes":[],"voting_params":{"voting_period":"172800s"}},"gravity":{"attestations":[],"batch_confirms":[],"batches":[],"delegate_keys":[],"erc20_to_denoms":[],"last_latest_valset_nonce":"0","last_observed_nonce":"0","last_outgoing_batch_id":"0","last_slashed_batched_block":"0","last_slashed_logic_call_block":"0","last_slashed_valset_nonce":"0","last_tx_pool_id":"0","last_un_bonding_block_height":"0","logic_call_confirms":[],"logic_calls":[],"params":{"average_block_time":"5000","average_ethereum_block_time":"15000","bridge_chain_id":"0","bridge_ethereum_address":"0x0000000000000000000000000000000000000000","contract_source_hash":"","gravity_id":"defaultgravityid","minimum_fee_transfer_to_eth":"1","minimum_transfer_to_eth":"5","signed_batches_window":"10000","signed_logic_calls_window":"10000","signed_valsets_window":"10000","slash_fraction_bad_eth_signature":"0.001000000000000000","slash_fraction_batch":"0.001000000000000000","slash_fraction_logic_call":"0.001000000000000000","slash_fraction_valset":"0.001000000000000000","target_batch_timeout":"43200000","unbond_slashing_valsets_window":"10000","valset_reward":{"amount":"0","denom":""}},"static_val_cosmos_addrs":[],"unbatched_transfers":[],"valset_confirms":[],"valsets":[]},"group":{"group_members":[],"group_policies":[],"group_policy_seq":"0","group_seq":"0","groups":[],"proposal_seq":"0","proposals":[],"votes":[]},"ibc":{"channel_genesis":{"ack_sequences":[],"acknowledgements":[],"channels":[],"commitments":[],"next_channel_sequence":"0","receipts":[],"recv_sequences":[],"send_sequences":[]},"client_genesis":{"clients":[],"clients_consensus":[],"clients_metadata":[],"create_localhost":false,"next_client_sequence":"0","params":{"allowed_clients":["06-solomachine","07-tendermint"]}},"connection_genesis":{"client_connection_paths":[],"connections":[],"next_connection_sequence":"0","params":{"max_expected_time_per_block":"30000000000"}}},"nft":{"collections":[]},"params":null,"slashing":{"missed_blocks":[],"params":{"downtime_jail_duration":"600s","min_signed_per_window":"0.500000000000000000","signed_blocks_window":"100","slash_fraction_double_sign":"0.050000000000000000","slash_fraction_downtime":"0.010000000000000000"},"signing_infos":[]},"staking":{"delegations":[],"exported":false,"last_total_power":"0","last_validator_powers":[],"params":{"bond_denom":"stake","historical_entries":10000,"max_entries":7,"max_validators":100,"unbonding_time":"1814400s"},"redelegations":[],"unbonding_delegations":[],"validators":[]},"transfer":{"denom_traces":[],"params":{"receive_enabled":true,"send_enabled":true},"port_id":"transfer"},"upgrade":{},"wasm":{"codes":[],"contracts":[],"gen_msgs":[],"params":{"code_upload_access":{"address":"","permission":"Everybody"},"instantiate_default_permission":"Everybody","max_wasm_code_size":"1228800"},"sequences":[]}},"chain_id":"private","gentxs_dir":"","moniker":"penguin","node_id":"1598559062143f0bfd270ac93b198d156d8cce3b"}
```

#### 2. Generate a Cudos-noded account 

Generate an account with the following command.

Replace ACCOUNT-NAME with your own name. 

```shell
cudos-noded keys add <ACCOUNT-NAME>
```

#### 👉🏻 ***Example create account***

In the example below, the new account-name is `glacier`

```shell
cudos-noded keys add glacier 
Enter keyring passphrase:
Re-enter keyring passphrase: 

- name: glacier
  type: local
  address: cudos1qxmynuw4889z5nhpk2lgphxmjlth6l5zzrddne
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A6/ttuYKVPeqAsg7LG2GHfw2YaTolRxQuZQNNsdCKkjx"}'
  mnemonic: ""


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

rather divide attack excuse catalog obvious lock mechanic fabric replace major amateur laugh sunny future asset city trust amateur lady verify bar drive story
```

#### 3. You can then add this mnemonic to create a new account in a Keplr wallet if you wish. 

<!-- #### 3. Add account to the genesis

Run the following commands to add the new account and set an initial balance:

:::info gentx 

cudos-noded gentx [key_name] [amount] [eth-address] [orchestrator-address] [flags]
:::

```shell
cudos-noded add-genesis-account $(cudos-noded keys show <ACCOUNT-NAME> -a) 1000000000acudos
cudos-noded gentx <ACCOUNT-NAME> 1000000000acudos --chain-id=<TESTNET-NAME>
cudos-noded collect-gentxs
```

#### 👉🏻 ***Example add account to genesis*** 

```shell 
cudos-noded add-genesis-account $(cudos-noded keys show glacier -a) 1000000000acudos
Enter keyring passphrase:
cudos-noded gentx glacier 1000000000acudos cudos1qxmynuw4889z5nhpk2lgphxmjlth6l5zzrddne --chain-id=private 
cudos-noded collect-gentxs
```

 
## 4. Start your private Cudos network

```shell
cudos-noded start 
```

### 🐧 OPTION TWO - Connect to an existing node

1. Navigate to the `config.toml` file

```shell
cd cudos-data/config
nano config.toml
```

2. Scroll down and edit the RPC Server Configuration Options

In the example below, we are using Cudos Testnet.  

```shell

#######################################################
###       RPC Server Configuration Options          ###
#######################################################
[rpc]

# TCP or UNIX socket address for the RPC server to listen on
laddr = "https://sentry1.gcp-uscentral1.cudos.org:36657"
```
Save and exit 

3. Set gas prices in app.toml 

```shell
nano app.toml

###############################################################################
###                           Base Configuration                            ###
###############################################################################

# The minimum gas prices a validator is willing to accept for processing a
# transaction. A transaction's fees must meet the minimum of any denomination
# specified in this config (e.g. 0.25token1;0.0001token2).
minimum-gas-prices = ""
``` -->





