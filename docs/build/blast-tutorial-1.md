---
title: Create Counter project
id: create-counter
---

This short tutorial creates a simple counter that increments upon request using **Cudos Blast**.

1. Check your in the 'counter project' you created in [Cudos Blast](/docs/build/blast-install-1.md).

```shell
$ pwd
```
2. Open the project in your favourite IDE. (We're using Visual Studio Code on a Macbook for this tutorial)

```shell
$ code .
```

## Explore your project

When you open the project you see something similar to below:

![Project contents](/img/dapp-contents.png)

Let's walk through each section. 

### Workspaces 

Inside the `contracts` folder are `alpha` and `beta` folders.
These are 2 example workspaces to use if one contract depends on another for example.

Let's enter the `alpha` folder.

### `/src` directory

The `/src` directory contains the smart contract source code in different files. 

1. **src/contract.rs** - This contains the main smart contract logic and is where the functions instantiate(), execute() and query() are implemented.

2. **src/state.rs** - This defines how the smart contract state data is represented and how it will be stored.

3. **src/msg.rs** - This is where different types of messages and responses the smart contract can receive and return are defined.

4. **src/error.rs** - This is where the different error types are defined that can be returned by the smart contract.

5. **src/lib.rs** is where any previous modules are exposed and made accessible.

### `/scripts` directory

The `/scripts` directory contains sample scripts 

1. **deploy.js** - This is a sample script to deploy a compiled contract to the blockchain. 

2. **interact.js** - This is a sample script to interact with your deployed contract on the blockchain. 

### `/tests` directory

The `/tests` directory contains sample testing scripts

### `blast.config.js` file

The **blast.config.js** is where connections and contract deployments can be configured. 

### `cargo.toml` file

The **cargo.toml** file must be at the root of the project in order to compile. An **artifacts** folder is generated after compilation. 


### State.rs - This is the starting state

Open `/src/state.rs`

<img src={require('@site/static/img/counter-state.png').default} />

The starting template has the following state:

a singleton struct State containing:

* a 32-bit integer (count)

* an address (owner) a segwit address

In addition, the `derive` attribute is applied to implement some useful traits:

`Serialize`: provides serialization
`Deserialize`: provides deserialization
`Clone`: makes our struct copyable
`Debug`: enables our struct to be printed to string
`PartialEq`: gives us equality comparison
`JsonSchema`: auto-generates a JSON schema for us

### Msg.rs - InstantiateMsg 

Open `/src/msg.rs`

```rust
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct InstantiateMsg {
    pub count: i32,
}
```

This is the message received when an address seeks to instantiate a contract with `MsgInstantiateContract`. 
The message provides the contract with an initial configuration and state.


1. `src/contract.rs` contains the main smart contract logic and is where the functions `instantiate()`, `execute()` and `query()` are implemented.


Now, we understand the contract, let's compile it.