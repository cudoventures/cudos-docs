---
title: Validator mechanics
id: validator-mechanics
---

The current maximum number of Validators is 100. We are actively recruiting Validators to the Cudos network. Increasing the number of Validators increases decentralisation, security and integrity of the network.  

You can view current Validators on the [**Cudos Mainnet explorer**](https://explorer.cudos.org/).
Validators are ranked based on the amount of tokens delegated to them including self-delegations.

## Increasing self-delegated or delegated stake

Increasing the amount of CUDOS staked to a node increases its **Voting Power**. Increasing Voting Power increases the likelihood of being selected by the consensus process to propose blocks and hence **earn the most rewards**.

A Validator can collect a `commission fee` from its Delegators. The parameters for this can be set when a staking transaction is performed at Step 6 above and using `cudos-noded`.

## Block proposer selection

* Every **Validator** has a proposer priority as an integer.

* At creation, every Validator has a priority of 0.

* Proposer priority is increased by voting power.

* Validators are ordered according to priority.

**At the start of a new block, the Validator with the highest priority is selected as the block proposer.**

* That Validator’s priority is then **decreased** by the **total voting power of the network** meaning that the total priority for it has returned to 0. 

* If a Validator cannot successfully propose and commit a block, the validator with the next highest priority proposes a block.

:::note Important
The Validator that ends up proposing the block does not necessarily end up with their priority returned to 0. 

The Validator with the highest priority at the start of a new block has their priority returned to 0.
:::  

* When a Validator leaves, its priority is distributed evenly among all the remaining validators so that the total priority is still ~0.

* When a new validator is added, it is given an initial priority of:

*** -1.125*(total voting power, including the new validator) = -K***

**K** is then distributed evenly among all of the validators, including the new one, so that the total priority is 0.


## Block rewards

* Block rewards are calculated after a block is produced. They are equal to the sum of the **staking rewards** and the **tx fees** for that block.

* Staking rewards occur in a single pool. 

* They are distributed as follows:  

    1. Validators - who are assigned rewards proportional to their stake.
    
    2. Delegators - who are required to **actively** claim those rewards by sending appropriate transactions to the blockchain.

    3. The **block proposer** gets a base bonus as 1% of the block rewards
    * In addition, it gets (4*P)% percent of the block rewards where P=(total power of validators with included precommits / total bonded validator power)
    * This means it gets an additional bonus between 2.67% and 4%
    * This means the block proposer’s bonus is between 3.67% and 5% of the total block rewards.

    4. 20% goes to the community pool

    5. The rest is distributed to **all** of the bonded **Validators** (including the **block proposer**) proportional to their voting power.

## Slashing and penalties

A slashing event occurs if two **Validator nodes** sign the same block with the same key (double signing) or if the Validator becomes unavailable. A Validator's staked CUDOS (including CUDOS of users that delegated to them) can then be slashed. 

Other penalties depends on the severity of the violation.

* Tokens delegated to a bonded validator are slashed if there is evidence of the Validator misbehaving.

* If a Validator’s tokens are slashed by a certain percentage, so are those who have Delegated to that node. 

## Jailing

* If a validator fails to sign 90% of the blocks within a 19200-block interval (i.e. 17280 blocks), then it is jailed. Tokens are slashed immediately at that point. (This equates to approximately 336 hours depending on the current block time in the network)

    * It becomes not-bonded and begins unbonding

    * It stops signing and proposing blocks

    * It stops earning block rewards

    * It’s stake gets slashed by 0.01%

## Unjailing

* The Validator needs to unjail itself after at least 600 seconds of being jailed. There is an unjail transaction that can be sent via `cudos-noded` from within the Validator account/node. 

```shell
cudos-noded tx slashing unjail --from mykey [flags]
```
For example:

```shell
cudos-noded tx slashing unjail --chain-id="$CHAIN_ID" --from="$VALIDATOR_ADDRESS" --keyring-backend "os"
```

**CHAIN_ID="cudos-testnet-public-3"**

A Validator is jailed if they miss 90% of the blocks in any interval of 19200 blocks. 

A good Cudos validator needs to aim for 99.99% uptime and <0.01% missed blocks.
 
:::tip Reliability

To ensure maximum uptime and availability
1. Validators should ensure they always run a correct version of the software.
2. Validators should implement a Sentry Node Architecture with several geographically distributed sentries.
:::

## Validator states

After a Validator is setup and officially added to the Cudos Network with a `create-validator` transaction, it can be in the following states:

- `in validator set`: Validator is in the active set and participates in consensus. Validator is earning rewards and can be slashed for misbehaviour.
- `jailed`: Validator misbehaved and is in jail, i.e. outside of the validator set. If the jailing is due to being offline for too long, the validator can send an `unjail` transaction in order to re-enter the validator set. If the jailing is due to double signing, the validator cannot unjail.
- `unbonding`: If the Validator is no longer `in validator set` it enters an unbonding period. It remains in this state for up to 21 days. Slashing can still occur during this period. 
- `unbonded`: If the Validator is not `in validator set`for 21 days or more it is unbonded. It cannot sign blocks or be slashed, and does not earn any rewards. However, It is still possible to delegate to this validator. Un-delegating from an unbonded validator is immediate.

## Bonded Validators 

Only bonded Validators can do the following: 

* propose or sign blocks

* earn block rewards 

* be subject to slashing



