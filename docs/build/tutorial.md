
## STEP FIVE - Test your contract

1. When you are ready, spin up a node:

```shell
blast node start
```

2. Run tests:

```shell
blast rusttest
```

3. You should see the following result:

```shell
running 3 tests
test contract::tests::increment ... ok
test contract::tests::proper_initialization ... ok
test contract::tests::reset ... ok

test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.03s
```

🚀 Now you are good to proceed with deploying your contract to the Cudos blockchain. 

## STEP SIX - 


## STEP SEVEN - Interact with your contract




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























