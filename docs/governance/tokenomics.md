---
title: Tokenomics
id: tokenomics
---
 
:::tip ✅ Cudos Tokenomics

## The key aim of Cudos network tokenomics is :

***To ensure that network participants are incentivised to work towards the greater good of the network. Specifically,ensuring the security, integrity and longevity of the network.***
:::

Tokenomics draws from game theory models that assume individual rational network participants are always working to maximise their own utility. ***The aim of tokenomics is to ensure that individual utility is best maximised by advancing overall network utility***. 

From this perspective, the **Cudos Network** tackles this challenge in multiple ways. 

### Consensus layer

First, the Cudos network uses **Tendermint** to provide a **consensus layer** and agree the state of the Cudos chain. Tendermint is **Byzantine Fault Tolerance (BFT)** (solves the [Byzantine Generals Problem](https://lamport.azurewebsites.net/pubs/byz.pdf)) enabling consensus to be achieved on the state of the blockchain even if up to ⅓ (~33%) of network machines are bad actors or fail in arbitrary ways.

:::info ䷆ Byzantine Generals Problem 

The **Byzantine Generals Problem** is a scenario illustrating the difficulty in achieving consensus amongst decentralized parties. 

The scenario describes several generals surrounding the city of Byzantium and readying for an attack.

In order to succeed, all the generals must attack at the same time. Therefore, they must agree a time to attack collectively. However, communication channels are insecure and messages may be intercepted by traitorous generals. Of **n** generals there are **m** traitors. The challenge is to find an algorithm that ensures a successfuly coordinated attack. 

Various possibilities are considered and ruled out. In short, Lamport, Shostak, and Pease found that success was only assured when honest generals outnumbered traitors (**m**) by a number greater than **3m + 1** traitors. In other words, coordination or consensus is impossible to achieve if a third or more of the generals are traitors.

:::

### Incentivisation

Second, incentivisation is built in to the tokenomics model to encourage good behaviour. **Validator operators** who secure the network by running a **Validator node** are required to **stake or self-delegate** a minimum of **2M CUDOS** in return for network rewards. Staking or self-delegating higher amounts increases the chances of that Validator being selected to perform block validation as well as increasing their rewards (as a proportion of the overall amount staked on the network). 

Validators and Delegators earn block rewards for keeping the blockchain operational and secure.
**Block rewards** consist of **Staking** rewards and **Transaction fees**.


### Validator self-staking

:::info Terminology

**Staking** tokens is also referred to as **delegating**.

:::

A **Validator Operator** must **self-delegate** at least 2M CUDOS to a node for it to be operational. They can increase their chances of attracting delegations from token holders by running a highly reliable node with excellent uptime. This in turn increases their chances of being selected to issue a block. 

Validators are ranked according to the amount of tokens that have been delegated to them, including self-delegations. 

At each block, the top 100 validators (who are not jailed) are said to be **bonded** and have the following rights: 

- To propose or sign blocks.
- To earn block rewards.
- To be subject to slashing.

### Jailing/Slashing

Tokens delegated to a bonded validator can be **slashed** due to validator downtime, double signing event or other bad behaviour. 

#### Downtime event

If a validator fails to sign 90%  of blocks within a 19200-block interval (i.e. 17280 blocks), then it is jailed and the following occurs:

    1. It becomes not-bonded and begins unbonding
    2. It stops signing and proposing blocks
    3. It stops earning block rewards
    4. Its stake gets slashed by 0.01%

The validator must unjail itself as quickly as possible after being jailed. 

#### Double signing event
 
If a validator signs more than one block at the same height then 5% of their tokens are slashed. 
This could be the case if someone duplicates their validator and tries to double their voting power.

#### What happens to slashed tokens?

Slashed tokens are sent to the community pool.

:::warning Slashing
When a validator’s tokens are slashed by a certain percentage, so are its delegators.
:::

#### How to unjail

To unjail, the validator must send a transaction from the jailed validator account via the `Cudos-noded CLI`. 

```shell
cudos-noded tx slashing unjail --from mykey [flags]
```

### Unbonding period

If a validator is jailed or leaves the bonded validators set, it enters an **unbonding period**. A validator that has failed to get itself back into the bonded validators set *within 21 days* is said to be **unbonded**.

:::caution 
Slashing can still occur during the unbonding period.
:::

### Token holder staking

Anyone holding CUDOS tokens can delegate or stake their tokens to one or more **validator nodes** of their choice. Validators and Stakers then share rewards **based on the amounts they have contributed to the pool**.

Validator Operators can set their own Commission to charge Stakers.**Commission rates** can change *once every day* however, the **Maximum Commission Rate** cannot be exceeded. Commission fees can be viewed under [Validator details in the Cudos Explorer](https://explorer.cudos.org/validators). 

![validator-details](@site/static/img/validator-details.png)

## Redelegation of tokens

A **staker/delegator** can choose to **undelegate** their tokens at any time. 

A **staker/delegator** can **redelegate** their tokens from **Validator A** to **Validator B** without any penalties or extra waiting times. However, they need to wait for 21 days if they want to further redelegate any amount of tokens from Validator B.

To redelegate tokens from **Validator B** to **Validator C** there is a *21 day waiting period*.

A **validator** can only **self-delegate through `cudos-noded CLI`**

A **validator** can also add **additional stake** to it via the `cudos-noded CLI` to increase its voter power.

## Block Rewards 

The more tokens staked to a **Validator node**, the higher the likelihood of it being chosen to propose and sign a block. 

* **Block rewards** are calculated after a block is issued. 

:::info Block rewards

*Block rewards* =  *staking rewards* + *tx fees* 
:::

* Staking rewards occur in a **single pool** and are distributed as follows:  

    1. Validators are assigned rewards proportional to their 
    
    2. Users who have delegated tokens are required to **actively** claim those rewards by sending appropriate txs to the blockchain.

    3. The **block proposer** gets a base bonus as 1% of the block rewards
    * In addition, it gets (4*P)% percent of the block rewards where P=(total power of validators with included precommits / total bonded validator power)
    * This means it gets an additional bonus between 2.67% and 4%
    * This means the block proposer’s bonus is between 3.67% and 5% of the total block rewards.

    4. 20% goes to the community pool.

    5. The rest is distributed to all of the bonded validators (including the block proposer) proportional to their voting power, regardless of them signing the block.


## Distribution Schedule

**Tx fees** should be the main source of revenue for **validators** and **delegators**. However, due to the expectation of low early engagement numbers on the **Cudos network**, additional rewards are provided to users. 

* A total of ~1,5 billion CUDOS tokens will be distributed as staking rewards in 10 years. The exact number of tokens is given by the formula 

**f(x) = 1.8 x^2 - 53 x + 358** 

**where *x* is in years and *f(x)* is in millions of CUDOS.**

* Hence the amount to be distributed in any given time interval is obtained by integrating the above function over that interval.

* Due to the assumption that tx fees will eventually be the main source of revenue, staking rewards start high and then decrease quadratically in time.

:::tip Validator commission

Important note: Validators need to use the `--commission` flag in `cudos-noded CLI` in order to withdraw their commission.
:::








