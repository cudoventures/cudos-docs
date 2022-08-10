---
title: Build a dApp Tutorial
id: simple-dapp
---

First get the RPC endpoints and API endpoints

1. Clone the cosmwasm examples repo 

Using CosmWasm’s default template contract as an example, this tutorial walks through the necessary steps to go from an idea to execution.

In this guide, you will learn:

* How to set up your environment for smart contract development and testing

* The basic structure and execution model for smart contracts

* The local build, upload, and testing process

Use a name source contract

I will show the components and the helpers.ts 

set up the chain id etc. 

* Instantiate a new contract 


In this tutorial we are going to be working with `nameservice`. This is a domain name service application to buy names and map values to those names. You can also transfer domain names. It is a cosmwasm contract example. 

## Back end

API Endpoints 

1. Start by cloning the cosmwasm contract examples repository which has the name service application inside.

```shell
$ git clone https://github.com/InterWasm/cw-contracts.git

cd cw-contracts
```

2. Open the folder in your favourite code editor. (We are using Visual Studio Code) and navigate to ***contracts > nameservice***

![cosm wasm examples](/img/nameservice.png)

3. View the `cargo.toml` file 

This is the dependency manager for the project. 

![cargo.toml](/img/cargotoml.png)

4. Open the src folder to view the smart contract code.

- Open the msg.rs 

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
This is the instatiation logic.
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

## ExecuteMsg

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

## QueryMsg

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

# Add a new record

## State.rs
Inside `state.rs`

add *pub_metadata* as a string. 

```rust
pub struct NameRecord {
    pub owner: Addr,
    pub_metadata: String,
}
```

## Contract.rs

Inside `contract.rs` add *metadata* under `execute_register` here:

```rust
pub fn execute_register(
    deps: DepsMut,
    _env: Env,
    info: MessageInfo,
    name: String,
    metadata: String,
```

and *metadata* here:

```rust
    let key = name.as_bytes();
    let record = NameRecord { owner: info.sender };
    metadata,

    if (resolver(deps.storage).may_load(key)?).is_some() {
        // name is already taken
        return Err(ContractError::NameTaken { name });
```

## Msg.rs

Inside msg.rs locate ExecuteMsg and add *metadata*

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    Register { name: String, metadata: String },
    Transfer { name: String, to: String },
}
```
Now return to **contract.rs** and add *metadata* under the execute function as below:

```rust
pub fn execute(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: ExecuteMsg,
) -> Result<Response, ContractError> {
    match msg {
        ExecuteMsg::Register { name } => execute_register(deps, env, info, name, metadata),
        ExecuteMsg::Transfer { name, to } => execute_transfer(deps, env, info, name, to),
    }
}














