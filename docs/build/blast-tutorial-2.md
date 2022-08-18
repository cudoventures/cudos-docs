---
title: Compile & Deploy your Contract
id: blast-tutorial-2
---

Before a Rust contract can be used, it must be compiled into `wasm` bytecode that can be stored on chain.

**Cudos Blast** makes compilation easy with a single command.

:::tip Rust optimiser
Cudos Blast uses Rust Optimiser under the hood to compile contracts ready for deployment.
:::

1. First, let's make sure we are at the project root with only one `Cargo.toml` file.

```shell
myCudosDapp username$ ls
Cargo.lock		jsconfig.json		scripts
Cargo.toml		local-accounts.json	target
blast.config.js		package.json		tests
contracts		schema
```

2. Run the compile command

```shell
blast compile

# Example response extract

Compiling contracts at: "/Users/ad/projects/myCudosDapp/contracts" with 0.12.6 version
Unable to find image 'cosmwasm/workspace-optimizer:0.12.6' locally
0.12.6: Pulling from cosmwasm/workspace-optimizer
df9b9388f04a: Already exists 
2113a6fa04a6: Already exists 
...
Building artifacts in workspace ...
Found workspace member entries: ["contracts/*"]
Package directories: ["contracts/alpha", "contracts/beta"]
Contracts to be built: ["contracts/alpha", "contracts/beta"]
Building "contracts/alpha" ...
 Downloading crates ...
  Downloaded base16ct v0.1.1
  Downloaded sec1 v0.2.1
...
Non-cacheable reasons:
crate-type                           13
-                                     4

Cache location                  Local disk: "/root/.cache/sccache"
Cache size                           14 MiB
Max cache size                       10 GiB
done
```

3. A new artifacts folder is created containing `alpha.wasm` and `beta.wasm`.

Now we are ready to deploy the artifacts.

## Deploy

In this section, we're going to upload one of our optimised builds `alpha.wasm` to our local environment.

1. First, check you are in the the current working directory.

```shell
pwd
```

2. ## Interacting with a Cudos node

You can interact with a local [`Cudos node`](https://github.com/CudoVentures/cudos-node) with `blast node` command.

### Starting a local node

To start a fresh local Cudos node run

```bash
blast node start
```

or you can show the node logging output in current terminal window. To do this use `--log` or `-l`.

```bash
blast node start -l
```

To see how to manage local node accounts go [here](#managing-accounts).

### Stopping a running local node

To stop a running node run

```bash
blast node stop
```

### Checking node status

To check whether any Cudos node is online or offline run

```bash
blast node status
blast node status -n testnet
```

More information about connecting to a non-local Cudos node [here](#network).

---
## Deploying smart contracts, interacting with them and running custom script files

You can use the supplied `{project_root}/scripts/deploy.js` to deploy a sample smart contract.

```bash
async function main () {
  // functions such as 'getSigners' and 'getContractFactory' are available in global context
  const [alice, bob] = await bre.getSigners()

  // get contract object of 'alpha' contract in 'contracts/alpha'
  const contract = await bre.getContractFactory('alpha')

  // define instantiate message for the contract
  // in this message you can set called function and its parameters
  const MSG_INIT = { count: 13 }

  // deploying the contract with bob as a signer (default signer would be alice)
  const deploy = await contract.deploy(MSG_INIT, 'alpha', { signer: bob })

  // get useful info such as contractAddress from deploy transaction
  const contractAddress = deploy.instantiateTx.contractAddress

  // printing contract address so it can be copied and used in other scripts such as interact.js
  console.log(`Contract deployed at: ${contractAddress}`)
}
// ...
```

Deploy the contract by running the script:

```bash
blast run scripts/deploy.js
```

When the contract is deployed, its address will be printed. Then you can edit `{project_root}/scripts/interact.js` with the new address

```bash
async function main() {
  const [alice, bob] = await bre.getSigners()

  // replace the address with the new one from your deployed smart contract
  const contract = await bre.getContractFromAddress('cudos1uul3yzm2lgskp3dxpj0zg558hppxk6pt8t00qe')
// ...
```

and run the script to interact with the deployed smart contract.

```bash
blast run scripts/interact.js
```

When running scripts through `blast run` the `bre` object in injected. It provides various useful functions to interact with cudos blockchain network. You can also `require` the `cudos-blast` library to access the same functions and enable your code editor's intellisense.

```bash
const bre = require('cudos-blast')
```

You are free to use these sample files as templates or create your own custom `.js` scripts. You can specify your own script file path. 

```bash
blast run scripts/myCustomScript.js
blast run newFolder/anotherScripts/myCustomScript.js
```

```
cudos-noded tx wasm store artifacts/my_first_contract.wasm --from test1 --chain-id=localterra --gas=auto --fees=100000uluna --broadcast-mode=block












Before the smart contract can be utilized, an instance of the smart contract must be present with a smart contract address.

