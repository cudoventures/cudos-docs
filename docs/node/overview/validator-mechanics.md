---
title: Validator mechanics
id: validator-mechanics
---

## Increasing self-delegated or delegated stake

Increasing the amount of tokens staked to a node increases its **Voting Power**. Increasing Voting Power increases the likelihood of being selected by the consensus process to propose blocks and hence **earn the most rewards**.

A Validator can collect a `commission fee` from its Delegators.

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

A slashing event occurs if two **Validator nodes** sign the same block with the same key (double signing) or if the Validator becomes unavailable. A Validator's staked tokens (including tokens of users that delegated to them) can then be slashed. 

Other penalties depends on the severity of the violation.

* Tokens delegated to a bonded validator are slashed if there is evidence of the Validator misbehaving.

* If a Validator’s tokens are slashed by a certain percentage, so are those who have Delegated to that node. 

## Jailing

* If a validator fails to sign enough the blocks within a predefined block interval, then it is jailed. Tokens are slashed immediately at that point. 

    * It becomes not-bonded and begins unbonding

    * It stops signing and proposing blocks

    * It stops earning block rewards

    * It’s stake gets slashed

## Unjailing

* The Validator needs to unjail itself after being jailed. There is an unjail transaction that can be sent via `fetchd` from within the Validator account/node. 

```shell
fetchd tx slashing unjail --from mykey [flags]
```
 
:::tip Reliability

To ensure maximum uptime and availability
1. Validators should ensure they always run a correct version of the software.
2. Validators should implement a Sentry Node Architecture with several geographically distributed sentries.
:::

## Validator states

After a Validator is setup and officially added to a Cosmos chain with a `create-validator` transaction, it can be in the following states:

- `in validator set`: Validator is in the active set and participates in consensus. Validator is earning rewards and can be slashed for misbehaviour.
- `jailed`: Validator misbehaved and is in jail, i.e. outside of the validator set. If the jailing is due to being offline for too long, the validator can send an `unjail` transaction in order to re-enter the validator set. If the jailing is due to double signing, the validator cannot unjail.
- `unbonding`: If the Validator is no longer `in validator set` it enters an unbonding period. It remains in this state for up to usually 21 days. Slashing can still occur during this period. 
- `unbonded`: If the Validator is not `in validator set`for usually 21 days or more it is unbonded. It cannot sign blocks or be slashed, and does not earn any rewards. However, It is still possible to delegate to this validator. Un-delegating from an unbonded validator is immediate.

## Bonded Validators 

Only bonded Validators can do the following: 

* propose or sign blocks

* earn block rewards 

* be subject to slashing



