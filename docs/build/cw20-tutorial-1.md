---
title: Create CW-20 Token project
id: coin-tutorial
---


1. Create a projects directory

```shell
mkdir projects
cd projects[](http://localhost:3000/)
```

2. Let's create a new directory and initialise a Blast project for our new coin. Let's call it 'Kula' after the Trobriand Islanders exchange system. 

```shell
mkdir Kula
cd Kula
blast init

# Example response

Success! Sample project initialized in /Users/ad/projects/Kula
```

3. Now let's remove the sample `contracts` and `scripts` folder from the blast project. So we can add new contracts and corresponding scripts.

```
rm -rf contracts/ scripts/
```

4. Now, in the `projects` directory, let's clone some helpful templates from cosmwasm

```shell
cd projects
git clone https://github.com/CosmWasm/cw-plus.git
```

5. From `projects` let's copy everything inside `cw-plus` into our `Kula` project. 

```shell
projects ad$ cp -r cw-plus/* Kula
cd Kula
blast compile
```

6. An artifacts folder is generated with all the compiled contracts.

Our Kula contract is 

```shell
cw20_ics20.wasm
```

Now let's test our contract on a local node. 

## Spin up a local node

Test your contract on a local node before deploying on testnet or mainnet.

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

### Example

```shell
blast node status
Node is online.
Node id: d3ce9ba26e9d826e3f3216d3eed54624ebe1f30d
Network: cudos-network
```

:::note 

`cudos-network` is the local network running on your machine.

:::

Now let's deploy our contract. 

## Deploy

You are issued with a large amount of CUDOS tokens. 
Let's test our contract by deploying to our local node.

1. Open `deploy.js`

2. Modify `deploy.js` as follows:

```js
const bre = require('cudos-blast')

async function main() {
  const [alice] = await bre.getSigners()
  const contract = await bre.getContractFactory('cw20_ics20')

const MSG_INIT = {
      default_timeout: 0,
      gov_contract: "an address, perhaps of alice", 
      allowlist: [],
      default_gas_limit: 1000000
    }
 
  await contract.deploy(MSG_INIT, 'Kula', { signer: alice })
  console.log(`Contract deployed at: ${contract.getAddress()}`)
}

module.exports = { main: main }
```

Signers is referring to a default account. There are 10 default accounts. One of which is Alice.

If you run `blast keys ls` Alice is account1.

Now from const MSG_INIT remove COUNT13.

3. Amend `deploy.js`

- Create a local-accounts.json at the root of the folder.

- Add a wallet address with CUDOS tokens here:

The `Alice` account has `account1` that is a sample account on the Testnet.

```shell
{
    "account1": {
        "address": "cudos1yvtuaadhfhxf8ke7zm902z4rj382a8ayymq32s",
        "mnemonic": "ordinary witness such toddler tag mouse helmet perfect venue eyebrow upgrade rabbit"
    }
}
```

- Copy the account address and insert in `gov_contract` section "an address, perhaps of alice".

```js
const bre = require('cudos-blast')

async function main() {
  const [alice] = await bre.getSigners()
  const contract = await bre.getContractFactory('cw20_ics20')

const MSG_INIT = {
      default_timeout: 0,
      gov_contract: "an address, perhaps of alice", 
      allowlist: [],
      default_gas_limit: 1000000
    }
 
  await contract.deploy(MSG_INIT, 'Kula', { signer: alice })
  console.log(`Contract deployed at: ${contract.getAddress()}`)
}

module.exports = { main: main }
```

Now run the Deploy script

```shell
blast run scripts/deploy.js
Contract deployed at: cudos1qg5ega6dykkxc307y25pecuufrjkxkaggkkxh7nad0vhyhtuhw3syg2g9f
```

An `address` is returned where the contract is deployed. 

## Interact 

 This is an IBC Enabled contract that allows us to send CW20 tokens from one chain over the standard ICS20 protocol to the bank module of another chain. In short, it let's us send our custom CW20 tokens with IBC and use them just like native tokens on other chains.

 We can send tokens to other Cosmos chains. 










Ensure you are in the `Kula` folder.

Navigate to the newly created `artifacts` folder. 

```shell
#Deploy the contract to the testnet
RES=$(cudos-noded tx wasm store artifacts/cw_to_do_list.wasm --from wallet --node https://rpc.malaga-420.cosmwasm.com:443 --chain-id malaga-420 --gas-prices 0.25umlg --gas auto --gas-adjustment 1.3 -y --output json -b block)

#Get the Code Id
echo $RES | jq -r '.logs[0].events[-1].attributes[0].value'

```

```shell
RES=$(cudos-noded tx wasm store artifacts/cudos_name_service_app-aarch64.wasm --from <account-name> --node http://sentry1.gcp-uscentral1.cudos.org:26657 --chain-id cudos-testnet-public-3 --gas auto --gas-prices 5000000000000acudos --gas-adjustment 1.8 --keyring-backend os -y)
```


```shell
cudos-noded tx wasm store artifacts/my_first_contract-aarch64.wasm --from test1 --chain-id=localterra --gas=auto --fees=100000uluna --broadcast-mode=block
```

Check blast.config.js is configured to the Testnet

```shell
module.exports.config = {
  addressPrefix: 'cudos',
  gasPrice: '250acudos',
  rustOptimizerVersion: '0.12.6',

  // optional parameners
  additionalAccounts: 0,
  customAccountBalances: 1000000000000000000,
  networks: {
    testnet: 'https://sentry1.gcp-uscentral1.cudos.org:26657'
  }
}
```







