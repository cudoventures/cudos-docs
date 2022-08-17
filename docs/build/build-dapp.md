---
title: Build a dApp Tutorial
id: simple-dapp
---

In this guide, we are going to build a domain name service application to purchase domain names, and map values to those names and transfer domain names. 

You will learn:

* How to set up your environment for smart contract development and testing

* The basic structure and execution model for smart contracts

* The local build, upload, and testing process

* How to create a dApp

## Requirements

* Docker
* Basic understanding of Rust


<!-- First get the RPC endpoints and API endpoints
- Install Cudos noded locally
- Download localcudos -->

## STEP ONE - Environment Setup

You need an environment to run contracts. You can either run your node locally or connect to an existing network. For easy testing, the Cudos Public testnet is live. You can use the testnet to deploy and run your contracts.

### Localhost

| Chain ID      | URL                    |
| ---           | ---                    |
| cudos-network | http://localhost:26657 |

### Testnet

| Chain ID               | URL                                            |
| ---                    | ---                                            |
| cudos-testnet-public-2 | https://sentry1.gcp-uscentral1.cudos.org:36657 |

### Mainnet

| Chain ID       | URL                   |
| ---            | ---                   |
|    cudos-1     | https://rpc.cudos.org |

### Build and start binaries

:::warning

You won't be able to do this on a M1 Mac
:::

We're now going to use a docker image containing the `Cudos Binary` to set up our environment. 

1. Create a directory to use as your workspace

```shell
mkdir ~/cudos
cd ~/cudos
```

2. Clone the latest releases from the [***CudosNode***](https://github.com/CudoVentures/cudos-node), [***CudosBuilders***](https://github.com/CudoVentures/cudos-builders) and [***CudosGravityBridge***](https://github.com/CudoVentures/cosmos-gravity-bridge) repositories and name them with the same titles.


```shell
git clone --depth 1 --branch v0.4.0 https://github.com/CudoVentures/cudos-node.git CudosNode
git clone --depth 1 --branch v0.3.3  https://github.com/CudoVentures/cudos-builders.git CudosBuilders
git clone --depth 1 --branch v0.4.0 https://github.com/CudoVentures/cosmos-gravity-bridge.git CudosGravityBridge
```

3. Navigate to the directory _CudosBuilders/docker/binary-builder_ directory

4. Build and start the binaries by running this command:

```shell
sudo docker-compose --env-file binary-builder.arg -f binary-builder.yml -p cudos-binary-builder up --build --detach
```

To restart a built docker image, run the following command:

```shell
sudo docker-compose --env-file binary-builder.arg -f binary-builder.yml -p cudos-binary-builder up
```

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

```docker

docker run --rm -v "$(pwd)":/code \
  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
  cosmwasm/rust-optimizer:0.12.6
```

2. Open the newly created `artifacts` folder.

![artifacts]


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

1. Check that ***binary-builder*** is running in a container with the following command:

```shell
docker ps --format '{{.Names}}'

# Expected result

binary-builder
```

2. Copy the compiled contract to the ***binary-builder*** container: 

The docker cp command assumes container paths are relative to the container's / (root) directory.

docker cp *src-path* *container*:*dest-path* 

```shell

docker cp cw-contracts/contracts/nameservice/artifacts/cw_nameservice.wasm binary-builder:/usr/cudos
```

3. Verify that the file is present

```shell
docker exec -it binary-builder ls

# Expected result
cw_nameservice.wasm
```

4. This creates an account called ***owner***

```shell
alias CUDOS_NODED='docker exec -it binary-builder cudos-noded'
CUDOS_NODED keys add owner --keyring-backend "os"
```

























