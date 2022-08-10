---
title: Create project
id: blast-init
---

This section explains how to create a dApp. It assumes that you have installed Cudos Blast globally. 

1. Create a new folder for your project 

```bash
mkdir myCudosDapp
cd myCudosDapp
```

2. Add Blast to your project

# Initialise a blast project

blast init
Success! Sample project initialized in /Users/username/projects/myCudosDapp
```

:::note 
You can also specify the full directory of the project using optional parameter `--dir` or `-d`

```bash
blast init --dir /Your/Location/Here
```
:::

2. Open your project in your favourite IDE. (We're using Visual Studio Code on a Mac for this tutorial)

## Explore your project

When you open the project you see something similar to below:

![Project contents](/img/dapp-contents.png)

Let's walk through each section. 

### contracts

Inside the `contracts` folder

The `/src` directory contains the smart contract source code in different files.

1. `src/contract.rs` contains the main smart contract logic and is where the functions `instantiate()`, `execute()` and `query()` are implemented.

```rust


**contracts** - Sample contracts. Add more as desired.

**scripts** - Sample scripts to deploy a contract and interact with it.

**tests** - Test your contracts

**blast.config.js** - Config for connections and contract deployments

**cargo.toml** - Edit this file to add more contracts to compile. Contracts are compiled in alphabetical order using [rust-optimizer](https://github.com/CosmWasm/rust-optimizer). An **artifacts** folder is generated after compilation. 

**jsconfig.json** - Deployed code and contract references


:::successDone
## 🎉 Nice work! 

Your project is now ready to work with the Cudos blockchain. It contains sample smart contracts and scripts to deploy or interact. 

:::


  
> Also, all `blast` commands are designed to be executed from the project root directory.