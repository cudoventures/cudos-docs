---
title: Gas and fees
id: gas
---

## Gas and Fees

Any transaction that changes the state of the network charges you a gas fee. See [**transactions**](/docs/learn/concepts/transactions)

This fee is used to incentivise and reward validators and delegators for keeping the network infrastructure secure.

Gas fees are proportional to the number of computational operations in a transaction. They are designed to reflect the amount of 'effort'. Fortunately gas fees on Cudos are extremely low. 

:::tip Queries
Queries do not incur fees as these simply read the state of the blockchain
:::

Use `cudos-noded CLI` with several flags to determine fees:

`--gas` refers to how much gas, which represents computational resources, Tx consumes. Gas is dependent on the transaction and is not precisely calculated until execution, but can be estimated by providing auto as the value for `--gas`.

`--gas-adjustment` (optional) can be used to scale gas up in order to avoid underestimating. For example, users can specify their gas adjustment as 1.5 to use 1.5 times the estimated gas.

`--gas-prices` specifies how much the user is willing to pay per unit of gas, which can be one or multiple denominations of tokens. For example, `--gas-prices=0.025acudos`, 0.025upho means the user is willing to pay 0.025acudos AND 0.025upho per unit of gas.

`--fees` specifies how much in fees the user is willing to pay in total.

`--timeout-height` specifies a block timeout height to prevent the tx from being committed past a certain height.

The ultimate value of the fees paid is equal to the ***gas multiplied by the gas prices***. 

***fees = (gas * gasPrices)***. 

Fees can be calculated using gas prices and vice versa.

:::caution

Validators can decide whether or not to include a transaction in their block by comparing the given or calculated `gas-prices` to their local `min-gas-prices`. The transaction is rejected if its `gas-prices ` are not high enough, so users are incentivized to pay more.
:::

### Example

Use cudos-noded CLI to generate a transaction sending 1000acudos from a `senderAddress` to a `recipientAddress`. 

The command specifies how much gas they are willing to pay: an automatic estimate scaled up by 1.5 times, with a gas price of 0.025uatom per unit gas.

```shell
cudos-noded tx send <recipientAddress> 1000acudos --from <senderAddress> --gas auto --gas-adjustment 1.5 --gas-prices 0.025acudos
```