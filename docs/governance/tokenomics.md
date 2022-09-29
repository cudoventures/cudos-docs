---
title: Tokenomics
id: tokenomics
---

Validators and delegators earn block rewards for keeping the blockchain operational and secure.
Block rewards consist of Staking rewards and Transaction fees.

## Staking
The act of staking tokens is called delegating.

A validator needs to self-delegate at least 2M CUDOS.

A delegator is someone who delegates any amount of tokens to one or more validators.

Tokens delegated to a validator, including its self-delegated tokens, are taken out of the delegator’s account and kept in a pool.

The validator and its delegators share the rewards based on the amounts they have contributed to this pool.

A validator can additionally collect a commission fee from its delegators.

At start, a validator defines a commission rate, a max change rate, and a max commission rate.

Then it can change its commission rate once every day by at most its max change rate as long as the commision rate doesn’t become greater than the max commission rate.

Validators are ranked based on the amount of tokens that have been delegated to them, including their self-delegations.

At each block, the top 100 validators who are not jailed are said to be bonded.

If, for any reason, a validator goes outside the bonded validators set, it enters an unbonding period.
A validator that has failed to get itself back into the bonded validators set within 21 days is said to be unbonded.
The number 100 can be updated via a simple governance proposal. – Need testing and verification.

**Only bonded validators can propose or sign blocks.
Only bonded validators can earn block rewards.
Only bonded validators’ tokens are subject to slashing.**

Although the actual act of slashing might occur during the unbonding period.

## Redelegation 

A **delegator** can choose to undelegate their tokens at any time.

A **delegator** can redelegate their tokens from **Validator A** to **Validator B** without any penalties or extra waiting times. 

To redelegate tokens from **Validator B** to **Validator C** you must wait 21 days. 

However, they need to wait for 21 days if they want to further redelegate any amount of tokens from Validator B – irrespective of how much they redelegated to Validator B initially.

A validator can **self-delegate only through the CLI** – explorer v1 doesn’t provide this functionality.

A validator can also have an **additional stake added** to it via the CLI to increase its voter power.

## Block Rewards 

The more tokens staked to your Validator node, the higher the likelihood of being chosen to propose and sign a block. 

* **Block rewards** are calculated after each block, and is equal to the sum of the **staking rewards** and the **tx fees** for that block.

* Staking rewards occur in a single pool. 

* They are distributed as follows:  

    1. Validators are assigned rewards proportional to their
    
    2. Users who have delegated tokens are required to **actively** claim those rewards by sending appropriate txs to the blockchain.

    3. The **block proposer** gets a base bonus as 1% of the block rewards
    * In addition, it gets (4*P)% percent of the block rewards where P=(total power of validators with included precommits / total bonded validator power)
    * This means it gets an additional bonus between 2.67% and 4%
    * This means the block proposer’s bonus is between 3.67% and 5% of the total block rewards.

    4. 20% goes to the community pool
    5. The rest is distributed to all of the bonded validators (including the block proposer) proportional to their voting power, regardless of them signing the block.


(In addition, it gets (4*P)% percent of the block rewards where P=(total power of validators with included precommits / total bonded validator power)
This means it gets an additional bonus between 2.67% and 4%
This means the block proposer’s bonus is between 3.67% and 5% of the total block rewards.)

## Distribution Schedule

**Tx fees** are ideally the main source of revenue for validators and delegators. However, due to the expectation of low early engagement numbers on the Cudos blockchain, we will also provide staking rewards to users.

* We will distribute a total of ~1,5 billion tokens as staking rewards in ~10 years.

* The exact number of tokens is given by the formula 

**f(x) = 1.8 x^2 - 53 x + 358** 

**where *x* is in years and *f(x)* is in millions of CUDOS.**

* Hence the amount to be distributed in a given time interval is obtained by integrating the above function over that interval.

* Due to the assumption that tx fees will eventually be the main source of revenue, staking rewards start high and then decrease quadratically in time.

:::tip Important

Important note: Validators need to use the --commission flag in the CLI in order to withdraw their commission.
:::

## Jailing/Slashing

* Tokens delegated to a bonded validator is slashed if there is evidence of the validator misbehaving.

* This means that when a validator’s tokens are slashed by a certain percentage, so are it delegators’.

* If a validator fails to sign 90% of the blocks within a 19200-block interval (i.e. 17280 blocks), then it is jailed:

    * It becomes not-bonded and begins unbonding
    * It stops signing and proposing blocks
    * It stops earning block rewards
    * It’s stake gets slashed by 0.01%

* The validator needs to unjail itself after at least 600 seconds of being jailed. There is an unjail transaction that can be sent via the CLI from within the Validator account/node. 

```shell
cudos-noded tx slashing unjail --from mykey [flags]
```


For each validator, jailing starts after signed_blocks_window + start_height many blocks.
We have signed_blocks_window = 19200.

This means that the earliest a validator can be jailed is 19200 blocks after they join the network.

Afterwards, they will get jailed as soon as they miss 17280 blocks in any interval of 19200 blocks.

If a validator signs more than one block at the same height, that's also an offence punishable by slashing 5% of their tokens.

This could be the case if someone duplicates their validator and try to double their voting power.

Slashed tokens are sent to the community pool.


## Transactions 

How to view the mempool? Or pending transactions 
If you're a validator you can keep your mempool to yourself when it is your turn to propose a block then you can submit your own transactions. 

If you sync your own node with other nodes then you can view pending transactions.

* Tx fees are calculated based on the **gas_wanted value rather than gas_used**. Therefore users need to be aware of this and should not provide extra gas_wanted values “just in case”.

* We have a min-gas-price parameter set at 0.000005 CUDOS below which txs won’t be accepted into mempools

    This parameter is local to each node on the network, can be changed off-chain, and cannot be queried on-chain.

    Hence we must rely on the community for this implementation to work properly.

* Full-nodes that keep these mempools must have a mechanism to protect themselves from over-usage.

:::warning 
Default `gas-wanted on the CLI is 200,000`. Hence the fee is calculated based on this. Users must be aware of this. Be careful to specify this as what you are prepared to pay. 

Hence most transactions cost 1 CUDOS
:::

* Sometimes the CLI throws the “Error: RPC error -32603 - Internal error: timed out waiting for tx to be included in a block” error. In this case, the tx is most likely successful, and can be found in the Transactions tab on the explorer page.

One workaround is to use the `--broadcast-mode` flag that returns only a tx hash once a tx is submitted.

There was a ticket on making this the default behaviour, but looks like it has been discarded.

Fees on the Keplr extension might be wrong the first time due to some left over data, but this is probably only for the public testnet and NOT for the mainnet.

This can be resolved by deleting the chain and reconnecting.

There might be a need to sign out and back in to Keplr/Explorer.

Each validator can dynamically determine their gas price threshold, and will accept only the txs whose gas prices are above it.

Again, validators are expected to set this value to 0.000005 CUDOS, but we don’t have control over this.






