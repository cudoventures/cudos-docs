---
title: Create your own token
id: coin-tutorial
---


1. Create a projects directory

```shell
mkdir projects
cd projects
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

2. Now, in the `projects` directory, let's clone some helpful templates from cosmwasm

```shell
cd projects
git clone https://github.com/CosmWasm/cw-plus.git
```

3. From `projects` let's copy everything inside `cw-plus` into our `Kula` project. 

```shell
projects ad$ cp -r cw-plus/* Kula
cd Kula
blast compile
```

## Setting the environment

From the Kula project

```shell
blast node status

# Example response

Node is online.
Node id: d3ce9ba26e9d826e3f3216d3eed54624ebe1f30d
Network: cudos-network
```

:::caution

cudos-network is the local network on your machine
:::


## Deploy

You are issued with a large amount of CUDOS tokens. 
Let's test our contract by deploying to our local node.

Open deploy.js

## Deploy.js

Signers is referring to a default account. There are 10 default accounts. One of which is Alice.

If you run `blast keys ls` Alice is account1.

Now from const MSG_INIT remove COUNT13.















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







