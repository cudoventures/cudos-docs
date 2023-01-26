---
title: Tokenomics
id: tokenomics
---
 
:::tip ✅ Cudos Tokenomics

## The key aim of Cudos network tokenomics is :

***To ensure that network participants are incentivised to work towards the greater good of the network. Specifically, ensuring the security, integrity and longevity of the network.***
:::

Tokenomics draws from game theory models that assume individual rational network participants are always working to maximise their own utility. ***The aim of tokenomics is to ensure that individual utility is best maximised by advancing overall network utility***. 

From this perspective, the **Cudos Network** tackles this challenge in multiple ways. 

### Consensus layer

First, the Cudos network uses **Tendermint** to provide a **consensus layer** and agree the state of the Cudos chain. Tendermint is **Byzantine Fault Tolerant (BFT)** (solves the [Byzantine Generals Problem](https://lamport.azurewebsites.net/pubs/byz.pdf)) enabling consensus to be achieved on the state of the blockchain even if up to ⅓ (~33%) of network machines are bad actors or fail in arbitrary ways.

:::info ䷆ Byzantine Generals Problem 

The **Byzantine Generals Problem** is a scenario illustrating the difficulty in achieving consensus amongst decentralized parties. 

The scenario describes several generals surrounding the city of Byzantium and readying for an attack.

In order to succeed, all the generals must attack at the same time. Therefore, they must agree a time to attack collectively. However, communication channels are insecure and messages may be intercepted by traitorous generals. Of **n** generals there are **m** traitors. The challenge is to find an algorithm that ensures a successfuly coordinated attack. 

Various possibilities are considered and ruled out. In short, Lamport, Shostak, and Pease found that success was only assured when honest generals outnumbered traitors (**m**) by a number greater than **3m + 1** traitors. In other words, coordination or consensus is impossible to achieve if a third or more of the generals are traitors.

:::

## Incentivisation

Second, incentivisation is built in to the tokenomics model to encourage good behaviour. Validators receive rewards in return for securing the network. Token holders can delegate CUDOS tokens to trusted Validators to also share in rewards.

### Understanding rewards

:::success Block rewards?

Block rewards are equal to the sum of ***staking rewards*** and ***tx fees*** for a specific block.

Rewards for a block are only distributed back to Validators and Delegators when the ***next*** block begins. 
:::

:::success Staking rewards?

Staking rewards are additional rewards provided to Validators during the early and mid-stages of the network to support the growth of the Validator ecosystem. They comprise 10% of the total token supply. 

:::

## Terminology 

### Bonding?

The top 100 Validators are referred to as **bonded**.

**Bonding** is the process of locking tokens to the network for a specific period of time.

### Staking?

Staking is the process of locking up CUDOS tokens to the Cudos network. 

### Delegating?

Delegating is the process of locking tokens to one or more Validator nodes.

Self-delegating is the process of locking tokens to your own Validator node.

:::info 

NOTE: In practice, these terms are used interchangeably. 

:::

## Validators

**Validator operators** who secure the network by running **Validator nodes** are required to **Self-delegate** a minimum of **2M CUDOS** in order to make it operational and receive a share of **Block rewards**. Validators can then perform a staking transaction to stake their node to the network. [Read more](docs/node/run-node/stake-node)






Self-delegating ***higher*** amounts of CUDOS tokens has several benefits. 

1. It increases the chances of a Validator node being selected to perform block validation.

2. It increases rewards received in proportion to the overall amount staked on the network.

3. It increases the chances of token holders choosing to delegate to a Validator node that has more 'skin in the game'. A higher self-delegation signifies trust and commitment to the network. 

### Ranking

Validators are ranked according to the amount of tokens that have been delegated to them, including self-delegations. 

At each block, the top 100 validators (who are not jailed) are said to be **bonded** and have the following rights: 

- To propose or sign blocks.
- To earn block rewards.
- To be subject to slashing.






### Staking rewards 

In order to cultivate and grow the Validator ecosystem during the early and mid-stages of the network, Cudos has allocated 15% of funds to ensure that all Validators are rewarded for their contributions to the network. 

Staking rewards occur in a **single pool** and are distributed as follows:  

1. Validators receive a share of rewards based on the total amount of tokens delegated to them in proportion to the total amount staked on the network. 

2. Delegators receive a share of the rewards allocated to their Validator based on the amount of their delegation in proportion to the total amount delegated to that Validator.

:::caution 

Validators and Delegators are required to **actively** claim rewards by sending appropriate transactions to the blockchain.

Even as a Validator, commission is deducted from your rewards. You must explicitly request commission in another transaction by adding the commission flag. 

ADD TRANSACTION. 
:::

3. The **Block proposer** receives a bonus between 3.67% and 5% of the **Total Block Rewards** depending on the number of validators signing that block.

4. The **Community Pool** receives 20% of rewards to distribute to projects that further the aims of the ecosystem in the form of grants. 

### Validator self-delegating


### Jailing/Slashing

Tokens delegated to a bonded validator can be **slashed** due to validator downtime, double signing event or other bad behaviour. 

#### Downtime event

If a validator fails to sign 90%  of blocks within a 19200-block interval (i.e. 17280 blocks), then it is jailed and the following occurs:

1. It becomes not-bonded and begins unbonding
2. It stops signing and proposing blocks
3. It stops earning block rewards
4. Its stake gets slashed by 0.01%

The validator must unjail itself as quickly as possible after an ***enforced 10-minute waiting period***.

#### Double signing event
 
If a validator signs more than one block at the same height then 5% of their tokens are slashed. 
This could be the case if someone duplicates their validator and tries to double their voting power.

#### What happens to slashed tokens?

Slashed tokens are sent to the community pool.

:::warning Slashing
When a validator’s tokens are slashed by a certain percentage, so are its delegators.
:::

#### How to unjail

:::info NOTE

There is a 10-minute waiting period before a validator can unjail itself.

:::

To unjail, the validator must send a transaction from the jailed validator account via the `Cudos-noded CLI`. 

```shell
cudos-noded tx slashing unjail --from mykey [flags]
```

### Unbonding period

If a validator is jailed or leaves the bonded validators set, it enters an **unbonding period**. A validator that has failed to get itself back into the bonded validators set *within 21 days* is said to be **unbonded**.

:::caution 
Slashing can still occur during the unbonding period if there is evidence of bad behaviour during the period when a Validator was bonded.
:::

### Token holder delegating

Anyone holding CUDOS tokens can delegate tokens to one or more **validator nodes** of their choice. Validators and Delegators then share rewards **based on the amounts they have contributed to the pool**.

Validator Operators are free to set their own **commission rate** to charge for delegating. The **commission rate** can change at most by the **max commission change rate** once daily. However, a validator's **commission rate** CANNOT exceed the **maximum commission rate** set when the validator node was first initiated. Commission fees can be viewed under [Validator details in the Cudos Explorer](https://explorer.cudos.org/validators). 

![validator-details](@site/static/img/validator-details.png)

:::tip Validator commission
Validators can collect their commission by connecting their wallet to the Dashboard or use the `--commission` flag in `cudos-noded CLI` in order to withdraw their commission.
:::

### Redelegation

1. A **Delegator** can **redelegate** tokens from **Validator A** to **Validator B** without incurring any penalties or extra waiting times. A redelegation maturation period now follows for 21 days. 

2. Following on from the above example, if a **Delegator** wishes to **redelegate** their tokens from **Validator B** to a hypothetical **Validator C** they must wait *21 days*.

3. You can redelegate in two ways:

- Connecting a wallet to the [**Cudos Dashboard**](https://dashboard.cudos.org/staking) and redelegating funds to a Validator node of their choice. 

- Using `cudos-noded` CLI to redelegate funds. 

### Undelegation

A **Delegator** can choose to **undelegate** their tokens at any time. Tokens can be accessed following the 21 day unbonding period. During the unbonding period, the tokens are in an unbonded state and do not contribute to earning rewards or voting power. 











