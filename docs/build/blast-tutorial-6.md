---
title: Deploy contract to testnet
id: deploy-testnet-mainnet
---

Now we know our contract is working as expected, let's deploy it to the **Testnet** for further testing.

The **Testnet** is virtually identical to the Mainnet environment. Deploying to **Testnet** has the following advantages:

1. Other people can test and interact with your contract.

2. The environment is virtually identical to mainnet.

3. You can view transactions on the testnet block explorer [Cudos Testnet Explorer](https://explorer.testnet.cudos.org/)

## 01 Get CUDOS Testnet tokens

To deploy to the **Testnet** requires **CUDOS Testnet** tokens. 

You can request these from the [Cudos Faucet](https://explorer-v1.testnet.cudos.org/faucet)

You can also request CUDOS Testnet Tokens in the [Cudos Discord](https://discord.com/channels/593796681103966208/889819968600965160). 

## 02 Create a `private-accounts.json` file

This file should be at the root of your project.

For example:

```shell
myCudosDapp user$ ls
Cargo.lock              contracts               package-lock.json       scripts
Cargo.toml              jsconfig.json           package.json            target
artifacts               local-accounts.json     private-accounts.json   tests
blast.config.js         node_modules            schema
```

The `private-accounts.json `file should contain your `account name`, `wallet address` and `mnemonic`.

### Example private-accounts.json

```json
{
    "account1": {
        "address": "cudos1yvtuaadhfhxf8ke7zm902z4rj382a8ayymq32s",
        "mnemonic": "ordinary witness such toddler tag mouse helmet perfect venue eyebrow upgrade rabbit"
    },
```

## 03 Run the deploy script to Testnet 

```shell
blast run scripts/deploy.js --network testnet
Contract deployed at: cudos13uyrv6780s8enrfhfsvqcy984r5tu5wa3wvak3sspsaav4v3qxps0k0spz
```

## 04 Confirm the contract has been deployed

Check out the **Transactions** tab on the [Testnet Explorer](https://explorer.testnet.cudos.org/transactions)

Select the top two transactions and scroll down to view the **Messages** for each transaction. 

### - Message to confirm contract instantiated.

Instantiate Contract

cudos1yvtuaadhfhxf8ke7zm902z4rj382a8ayymq32s initiated contract with code ID 48

![instantiated](@site/static/img/instantiated.png)


### - Message to confirm the contract has been deployed.

Store Code

cudos1yvtuaadhfhxf8ke7zm902z4rj382a8ayymq32s stored code

![deployed](@site/static/img/deployed.png)
















