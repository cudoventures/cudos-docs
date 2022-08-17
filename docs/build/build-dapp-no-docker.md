---
title: Build a dapp (without docker)
id: dapp-no-docker
---

In this guide, we are going to build a domain name service application to purchase domain names, and map values to those names and transfer domain names. 

You will learn:

* How to set up your environment for smart contract development and testing

* The basic structure and execution model for smart contracts

* The local build, upload, and testing process

* How to create a dApp

## Requirements

* Go (Install Go and set Go Path)
* Basic understanding of Rust


<!-- First get the RPC endpoints and API endpoints
- Install Cudos noded locally
- Download localcudos -->

## STEP ONE - Environment Setup


### Build and start binaries

We're now going to use the Cudos binary - `cudos-noded` to set up our environment. 

1. Clone the Cudos node directory

```shell
git clone https://github.com/CudoVentures/cudos-node.git


```

2. Build the binary

```shell
# Change into the Cudos node directory
cd cudos-node

# Build the binary
make

# Run 
cudos-noded
```

3. You should see the following:

```shell
Cudos Node App

Usage:
  cudos-noded [command]

Available Commands:
  add-genesis-account      Add a genesis account to genesis.json
  add-wasm-genesis-message Wasm genesis subcommands
  collect-gentxs           Collect genesis txs and output a genesis.json file
  debug                    Tool for helping with debugging your application
  eth_keys                 Manage your application's ethereum keys
  export                   Export state to JSON
  gentx                    Generate a genesis tx carrying a self delegation, oracle key delegation and orchestrator key delegation
  help                     Help about any command
  init                     Initialize private validator, p2p, genesis, and application configuration files
  keys                     Manage your application's keys
  migrate                  Migrate genesis to a specified target version
  query                    Querying subcommands
  rollback                 rollback cosmos-sdk and tendermint state by one height
  start                    Run the full node
  status                   Query remote node for status
  tendermint               Tendermint subcommands
  tx                       Transactions subcommands
  unsafe-reset-all         Resets the blockchain database, removes address book files, and resets data/priv_validator_state.json to the genesis state
  validate-genesis         validates the genesis file at the default location or at the location passed as an arg
  version                  Print the application binary version information

Flags:
  -h, --help                help for cudos-noded
      --home string         directory for config and data (default "/Users/adiamond/cudos-data")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors

Use "cudos-noded [command] --help" for more information about a command.
```

:::caution 
`cudos-noded` should be copied to `$HOME/go/bin` by default. If you have any problems check your `PATH` and make sure it includes `$HOME/go/bin`.
:::

## STEP TWO - Connect to local or testnet

You need an environment to run contracts. You can either run your node locally or connect to an existing network. For easy testing, the Cudos Public testnet is live. You can use the testnet to deploy and run your contracts.

### Localhost

| Chain ID      | URL                    |
| ---           | ---                    |
| cudos-network | http://localhost:26657 |

### Testnet

| Chain ID               | URL                                            |
| ---                    | ---                                            |
| cudos-testnet-public-3 | http://sentry1.gcp-uscentral1.cudos.org:26657 |

### Mainnet

| Chain ID       | URL                   |
| ---            | ---                   |
|    cudos-1     | https://rpc.cudos.org |

### Remote Access

When choosing to remote access a Full Node and cudosnoded, you need a Full Node running on your local machine.

## How to run a full node on your local machine

1. Choose a custom moniker for your node and initialise. 

```shell
cudos-noded init <custom-moniker>
```

:::info 
The `init` command creates the `~/.cudos-noded` directory with subfolders `config` and `data`. 

In the `/config` directory, the most important files for configuration are `app.toml` and `config.toml`.
:::


### Example - initialise a node

```shell
cudos-noded init salsa-node

# Example result

{"app_message":{"admin":{},"auth":{"accounts":[],"params":{"max_memo_characters":"256","sig_verify_cost_ed25519":"590","sig_verify_cost_secp256k1":"1000","tx_sig_limit":"7","tx_size_cost_per_byte":"10"}},"bank":{"balances":[],"denom_metadata":[],"params":{"default_send_enabled":true,"send_enabled":[]},"supply":[]},"capability":{"index":"1","owners":[]},"crisis":{"constant_fee":{"amount":"1000","denom":"stake"}},"cudoMint":{"minter":{"mint_remainder":"0.000000000000000000","norm_time_passed":"0.000000000000000000"},"params":{"blocks_per_day":"17280"}},"distribution":{"delegator_starting_infos":[],"delegator_withdraw_infos":[],"fee_pool":{"community_pool":[]},"outstanding_rewards":[],"params":{"base_proposer_reward":"0.010000000000000000","bonus_proposer_reward":"0.040000000000000000","community_tax":"0.020000000000000000","withdraw_addr_enabled":true},"previous_proposer":"","validator_accumulated_commissions":[],"validator_current_rewards":[],"validator_historical_rewards":[],"validator_slash_events":[]},"evidence":{"evidence":[]},"feegrant":{"allowances":[]},"genutil":{"gen_txs":[]},"gov":{"deposit_params":{"max_deposit_period":"172800s","min_deposit":[{"amount":"10000000","denom":"stake"}]},"deposits":[],"proposals":[],"starting_proposal_id":"1","tally_params":{"quorum":"0.334000000000000000","threshold":"0.500000000000000000","veto_threshold":"0.334000000000000000"},"votes":[],"voting_params":{"voting_period":"172800s"}},"gravity":{"attestations":[],"batch_confirms":[],"batches":[],"delegate_keys":[],"erc20_to_denoms":[],"last_latest_valset_nonce":"0","last_observed_nonce":"0","last_outgoing_batch_id":"0","last_slashed_batched_block":"0","last_slashed_logic_call_block":"0","last_slashed_valset_nonce":"0","last_tx_pool_id":"0","last_un_bonding_block_height":"0","logic_call_confirms":[],"logic_calls":[],"params":{"average_block_time":"5000","average_ethereum_block_time":"15000","bridge_chain_id":"0","bridge_ethereum_address":"0x0000000000000000000000000000000000000000","contract_source_hash":"","gravity_id":"defaultgravityid","minimum_fee_transfer_to_eth":"1","minimum_transfer_to_eth":"5","signed_batches_window":"10000","signed_logic_calls_window":"10000","signed_valsets_window":"10000","slash_fraction_bad_eth_signature":"0.001000000000000000","slash_fraction_batch":"0.001000000000000000","slash_fraction_logic_call":"0.001000000000000000","slash_fraction_valset":"0.001000000000000000","target_batch_timeout":"43200000","unbond_slashing_valsets_window":"10000","valset_reward":{"amount":"0","denom":""}},"static_val_cosmos_addrs":[],"unbatched_transfers":[],"valset_confirms":[],"valsets":[]},"ibc":{"channel_genesis":{"ack_sequences":[],"acknowledgements":[],"channels":[],"commitments":[],"next_channel_sequence":"0","receipts":[],"recv_sequences":[],"send_sequences":[]},"client_genesis":{"clients":[],"clients_consensus":[],"clients_metadata":[],"create_localhost":false,"next_client_sequence":"0","params":{"allowed_clients":["06-solomachine","07-tendermint"]}},"connection_genesis":{"client_connection_paths":[],"connections":[],"next_connection_sequence":"0","params":{"max_expected_time_per_block":"30000000000"}}},"nft":{"collections":[]},"params":null,"slashing":{"missed_blocks":[],"params":{"downtime_jail_duration":"600s","min_signed_per_window":"0.500000000000000000","signed_blocks_window":"100","slash_fraction_double_sign":"0.050000000000000000","slash_fraction_downtime":"0.010000000000000000"},"signing_infos":[]},"staking":{"delegations":[],"exported":false,"last_total_power":"0","last_validator_powers":[],"params":{"bond_denom":"stake","historical_entries":10000,"max_entries":7,"max_validators":100,"unbonding_time":"1814400s"},"redelegations":[],"unbonding_delegations":[],"validators":[]},"transfer":{"denom_traces":[],"params":{"receive_enabled":true,"send_enabled":true},"port_id":"transfer"},"upgrade":{},"wasm":{"codes":[],"contracts":[],"gen_msgs":[],"params":{"code_upload_access":{"address":"","permission":"Everybody"},"instantiate_default_permission":"Everybody","max_wasm_code_size":"1228800"},"sequences":[]}},"chain_id":"test-chain-J5YFnx","gentxs_dir":"","moniker":"salsa-node","node_id":"d52195b0879329547f29644434ca34df8375735e"}
```




```shell
cudos-noded init cudos-node --cudos-testnet-public-3=cudos-node
```



cudos-noded is the tool that enables you to interact with the node that runs on the Cudos network.

To set up Cudos on a local machine and connect to an existing full node, use the following command:

$ NODE="<node_ip>"
$ CHAIN_ID="cudos-testnet-public-3"
$ KEYRING="os"

$ TXFLAGS="--node $NODE --chain-id $CHAIN_ID --gas auto --gas-adjustment 1.3 --gas-prices 5000000000000acudos--keyring-backend $KEYRING -y"

$ alias CUDOS_NODED='docker exec -it binary-builder cudos-noded'
Where:

NODE should refer to the IP address of your sentry or full/validator node that is running on the Cudos public testnet (see public node list here).
CHAIN_ID is the blockchain network ID, here it is the public testnet ID.
KEYRING uses the operating system's default credentials store (os) to handle keys storage operations securely. The keyring holds the private/public keypairs used to interact with a node and it will request a password each time it is accessed.
TXFLAGS is used as a shorthand for common transaction flags.
CUDOS_NODED is an alias for cudos-noded in binary-builder.


## STEP ONE - Set up account and wallet

Here's how to create an account and wallet on the Cudos network.

1. Create an account using your preferred name e.g. **Tangolover**

```shell
cudos-noded keys add INSERT_DESIRED_NAME --keyring-backend "os"
```

### Example 

```shell

- name: Tangolover
  type: local
  address: cudos1lw5v56a57shmmw0dx9gyasdj7hnghfdq8kfzf8
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"Ajn+YJi/EF9da3TM0GLSe9xnBLYLW67RmAabQ3h6XhM6"}'
  mnemonic: ""


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

survey mnemonic words words words words
```

If you have any problems, ensure you have `GO PATH` set. This also needs updating for a new terminal.

2. Keep a note of `address` as this is your wallet address. You will need this later. 

## STEP TWO - Set up the Back-end 

Next, we're going to work with an example contract from the CosmWasm Contract examples repository which has the ***Domain Name Service*** application inside.

### Clone the CosmWasm examples repo 

1. Start by cloning the cosmwasm contract examples repository.

```shell
git clone https://github.com/InterWasm/cw-contracts.git
cd cw-contracts
git checkout main
cd contracts/nameservice
```

2. Open the ***nameservice*** folder alone in your favourite code editor. (We are using Visual Studio Code) and navigate to ***contracts > nameservice***

:::warning
Make sure you only open the ***nameservice*** contract in VSCode. This is because `cargo.toml` must be always be at the root of the folder for the project to compile.
:::

![cosm wasm examples](/img/nameservice.png)

3. View the `cargo.toml` file 

This is the dependency manager for the project. 

![cargo.toml](/img/cargotoml.png)

4. Open the src folder to view the smart contract code.

## STEP THREE - Exploring the code

Let's take a look at the code here so we can understand what is going on. 

### Msg.rs
1. Open **msg.rs** 

```rust
pub struct InstantiateMsg {
    pub purchase_price: Option<Coin>,
    pub transfer_price: Option<Coin>,
}
```

`InstantiateMsg` creates the initial state using the data inside. It sets the purchase price and transfer price.

```rust
pub enum ExecuteMsg {
    Register { name: String },
    Transfer { name: String, to: String },
```

`ExecuteMsg` is the core logic of how the smart contract is executed. This is an enumeration. Execute message can be a register or transfer.

```rust
pub enum QueryMsg {
    // ResolveAddress returns the current address that the name resolves to
    ResolveRecord { name: String },
    Config {},
}
```

`QueryMsg` requests the current state data from the smart contract. It is called to return the current address a name resolves to. 

### Contract.rs

```rust
pub fn instantiate(
    deps: DepsMut,
    _env: Env,
    _info: MessageInfo,
    msg: InstantiateMsg,
) -> Result<Response, StdError> {
    let config_state = Config {
        purchase_price: msg.purchase_price,
        transfer_price: msg.transfer_price,
    };

    config(deps.storage).save(&config_state)?;

    Ok(Response::default())
}
```
This is the instantiation logic.
It is mainly standard. 
It accepts 
dependencies
environment e.g. block information, contract address and block height. 
info - message info

So first it creates a purchase and it saves the state in a bucket as specified in the state configuration  `state.rs`.

Here there are different configurations for storage, read etc. 

```rust
pub fn config(storage: &mut dyn Storage) -> Singleton<Config> {
    singleton(storage, CONFIG_KEY)
}

pub fn config_read(storage: &dyn Storage) -> ReadonlySingleton<Config> {
    singleton_read(storage, CONFIG_KEY)
}
```

The resolver is the data structure that holds the name cells. 

### ExecuteMsg

```rust
#[cfg_attr(not(feature = "library"), entry_point)]
pub fn execute(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: ExecuteMsg,
) -> Result<Response, ContractError> {
    match msg {
        ExecuteMsg::Register { name } => execute_register(deps, env, info, name),
        ExecuteMsg::Transfer { name, to } => execute_transfer(deps, env, info, name, to),
    }
}
```
This code has two functions if the register is received it is routed to `execute_register`. Or if the transfer is received it is routed to `execute_transfer`.

### execute_register

```rust
pub fn execute_register(
    deps: DepsMut,
    _env: Env,
    info: MessageInfo,
    name: String,
) -> Result<Response, ContractError> {
    // we only need to check here - at point of registration
    validate_name(&name)?;
    let config_state = config(deps.storage).load()?;
    assert_sent_sufficient_coin(&info.funds, config_state.purchase_price)?;

    let key = name.as_bytes();
    let record = NameRecord { owner: info.sender };

    if (resolver(deps.storage).may_load(key)?).is_some() {
        // name is already taken
        return Err(ContractError::NameTaken { name });
    }
```
At this point, the name is validated. If it doesn't match a contract error is returned.
Then it checks that sufficient funds have been sent to perform the purchase.
The name record is set and put into a bucket. 

### execute_transfer
basically the same

### queryMsg

```rust
pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {
    match msg {
        QueryMsg::ResolveRecord { name } => query_resolver(deps, env, name),
        QueryMsg::Config {} => to_binary(&config_read(deps.storage).load()?),
    }
}
```

Here the Query function is a structured way to access the bucket data.
First it routes.

```rust
fn query_resolver(deps: Deps, _env: Env, name: String) -> StdResult<Binary> {
    let key = name.as_bytes();

    let address = match resolver_read(deps.storage).may_load(key)? {
        Some(record) => Some(String::from(&record.owner)),
        None => None,
    };
    let resp = ResolveRecordResponse { address };

    to_binary(&resp)
}
```

Then it queries the data store buckets.
If the data is found, it returns the record address. If not, it returns none. 

## STEP FOUR Compile the code

Now let's compile the code to create ***artifacts*** that we can upload to the Cudos chain.

:::tip 
We could use `cargo wasm` but using [rust-optimizer](https://github.com/CosmWasm/rust-optimizer) minimises the binary size to reduce costs for deployment as well as fees for every interaction. 
Rust optimizer is a docker build with a locked set of dependencies. 
:::

1. Make sure you are inside the ***nameservice*** folder (not ***cw-contracts***) and run the following command:

```shell

docker run --rm -v "$(pwd)":/code \
  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
  cosmwasm/rust-optimizer:0.12.6
```

2. Now run `ls` to view the newly created artifacts folder. 

:::note M1 result

Done using M1 Rust optimizer
:::

```shell
ls

Cargo.lock	NOTICE		examples	schema
Cargo.toml	README.md	helpers.ts	src
LICENSE		artifacts	rustfmt.toml	target

cd artifacts
checksums.txt			cw_nameservice-aarch64.wasm
checksums_intermediate.txt
```

Open the newly created `artifacts` folder.


:::caution Mac M1 machines
There is a rust-optimizer-arm64 docker builder image for the Apple M1 chip. Arm images are released to ease development and testing on Mac M1 machines. The native Arm version produces different `wasm` artifacts than the Intel version. For release / production use, only contracts built with the Intel optimizers must be used.

```docker
docker run --rm -v "$(pwd)":/code \
  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
  cosmwasm/rust-optimizer-arm64:0.12.4
  ```
:::

:::warning Error messages
```
error: could not find `Cargo.toml` in `/code` or any parent directory. Make sure you are inside the `nameservice` directory alone. 
```
:::

## STEP FIVE Deploy the code 

Now we have the `wasm` binary ready, let's deploy it to the testnet.

1. Make sure you have your wallet address from earlier. It should look similar to the example below:

```address: cudos1lw5v56a57shmmw0dx9gyasdj7hnghfdq8kfzf8```

2. Send a request for CUDOS Testnet tokens in Cudos Discord providing your wallet address.

3. 

 




Upload the wasm binary on the blockchain: `
RES=$(cudos-noded tx wasm store artifacts/cudos_name_service_app-aarch64.wasm --from <account-name> --node http://sentry1.gcp-uscentral1.cudos.org:26657 --chain-id cudos-testnet-public-3 --gas auto --gas-prices 5000000000000acudos --gas-adjustment 1.8 --keyring-backend os -y)
`

2. Get the code ID from the previous command: `
CODE_ID=$( echo $RES | jq -r '.logs[0].events[-1].attributes[-1].value' | tee /dev/tty )
`

3. Instantiate the smart contract on the blockchain: `
INIT = '{}'
cudos-noded tx wasm instantiate $CODE_ID "$INIT" --from <account-name> --label "cudos name service app" --node http://sentry1.gcp-uscentral1.cudos.org:26657 --chain-id cudos-testnet-public-3 --gas auto --gas-prices 5000000000000acudos --gas-adjustment 1.8 --keyring-backend os -y
`

4. Get the contract address: `CONTRACT=$(cudos-noded query wasm list-contract-by-code $CODE_ID --node http://sentry1.gcp-uscentral1.cudos.org:26657 --output json | jq -r '.contracts[-1]' | tee /dev/tty | tail -1 | tr -d '\r')`

5. Execute a smart contract interaction on the blockchain: `cudos-noded tx wasm execute $CONTRACT "$EXEC" --from <account-name> --node http://sentry1.gcp-uscentral1.cudos.org:26657 --chain-id cudos-testnet-public-3 --gas auto --gas-prices 5000000000000acudos --gas-adjustment 1.8 --keyring-backend os -y`























