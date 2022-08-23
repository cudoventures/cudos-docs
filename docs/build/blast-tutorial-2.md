---
title: Compile & Deploy your Contract
id: blast-tutorial-2
---

Before a Rust contract can be used, it must be compiled into `wasm` bytecode or artefacts that can be stored on chain.

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

## Compile contracts

1. Run the compile command

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



## Spin up a local node

To interact with your contract, spin up a Cudos node with the `blast node` command.

### Starting a local node

Run the following command

```shell
blast node start
```

View the node logging output in current terminal window. To do this use `--log` or `-l`.

```shell
blast node start -l
```

To see how to manage local node accounts go [here](#managing-accounts).

### Stopping a running local node

To stop a running node run

```shell
blast node stop
```

### Checking node status

To check whether any Cudos node is online or offline run

```shell
blast node status
blast node status -n testnet
```

#### Example

```shell
blast node status
Node is online.
Node id: d3ce9ba26e9d826e3f3216d3eed54624ebe1f30d
Network: cudos-network
```

:::NOTE 

`cudos-network` is the local network running on your machine.

:::

## Deploy your contract

In this section, we're going to upload one of our optimised builds `alpha.wasm` to our local environment.

1. First, check you are in the root of the project.

```shell
pwd
```


:::warning BUG TO BE FIXED

2. You have to reinstall `cudos-blast`

```shell
npm install cudos-blast
```

:::

3. Now run the deploy script (This only works for this specific contract)

```shell
blast run scripts/deploy.js
```

### EXAMPLE 

```shell
blast run scripts/deploy.js
Contract deployed at: cudos14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9strccpl
```

When the contract is deployed, the `address` of the contract is returned. 

You need this to interact with your contract. 

## Interact with your contract

1. Open `{project_root}/scripts/interact.js` and add the new contract `address` as follows:

```shell

async function main() {
  const [alice, bob] = await bre.getSigners()
  const contract = await bre.getContractFromAddress
  # Replace the next line with the new contract address
  ('cudos14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9strccpl')
```

2. Now run the script to interact with the deployed smart contract.

```shell
blast run scripts/interact.js
```

You should get a response similar to that below:

### Example

```shell
blast run scripts/interact.js
Initial count: 13
{
  logs: [ { msg_index: 0, log: '', events: [Array] } ],
  height: 14969,
  transactionHash: '5C61E6C9EA7FF2376487508D9F9F4417B655D09EE3DB8B4D39EB4E52B22B88DB',
  gasWanted: 155578,
  gasUsed: 131142
}
Count after increment: 14
```




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

Then you can 


## EXAMPLE

```shell
blast run scripts/interact.js
Initial count: 13
{
  logs: [ { msg_index: 0, log: '', events: [Array] } ],
  height: 14969,
  transactionHash: '5C61E6C9EA7FF2376487508D9F9F4417B655D09EE3DB8B4D39EB4E52B22B88DB',
  gasWanted: 155578,
  gasUsed: 131142
}
Count after increment: 14
```



When running scripts through `blast run` the `bre` object is injected. It provides various useful functions to interact with cudos blockchain network. You can also `require` the `cudos-blast` library to access the same functions and enable your code editor's intellisense.

```js
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

