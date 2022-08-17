---
title: Create Counter project
id: blast-init
---

This short tutorial walks you through setting up your project and creating a simple counter that increments upon request.

It assumes that you have installed **Cudos Blast** globally. 

1. Create a new folder for the project and initialise Blast.

```bash
mkdir myCudosDapp
cd myCudosDapp
blast init
Success! Sample project initialized in /Users/username/projects/myCudosDapp
```

:::note To specify where Blast should initialise

Use the parameter `--dir` or `-d` to specify where Blast should initialise.

```bash
blast init --dir /Your/Location/Here
```
:::

2. Open your project in your favourite IDE. (We're using Visual Studio Code on a Macbook for this tutorial)

## Explore your project

When you open the project you see something similar to below:

![Project contents](/img/dapp-contents.png)

Let's walk through each section. 

### contracts

Inside the `contracts` folder are `alpha` and `beta` folders.
These are 2 example workspaces to use if one contract depends on another for example.

Let's enter the `alpha` folder.

The `/src` directory contains the smart contract source code in different files. 


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




**contracts** - Sample contracts. Add more as desired.

**scripts** - Sample scripts to deploy a contract and interact with it.

**tests** - Test your contracts

**blast.config.js** - Config for connections and contract deployments

**cargo.toml** - Edit this file to add more contracts to compile. Contracts are compiled in alphabetical order using [rust-optimizer](https://github.com/CosmWasm/rust-optimizer). An **artifacts** folder is generated after compilation. 

**jsconfig.json** - Deployed code and contract references


Now, we understand the contract, let's compile it.