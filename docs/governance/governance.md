---
title: Governance
id: governance
---

Governance proposals are used for decision making on the Cudos Network.

To create a proposal, a 50000 CUDOS deposit is required. This deposit is returned if your proposal is successfully voted for by token holders. However, is NOT returned if the vote is unsuccessful. It's a good idea to share your proposal idea in the [Cudos Discord](https://discord.com/invite/cudos) group prior to submitting it.  

A proposal can be submitted for a number of changes including an upgrade of the chain, a change of the parameters of the chain, a simple text proposal, or any other message type.

Validators and token holders have the right to vote on proposals on a 1 token 1 vote basis. This includes any stake delegated to them by other CUDOS holders. 

The [Cudos Dashboard](https://dashboard.cudos.org/) allows anyone to easily check any live proposals. By connecting a valid wallet, token holders can create or vote on the outcome of any live proposal.

## How to create a draft proposal



1. Use `cudos-noded` CLI to submit a proposal. 

```shell
cudos-noded tx gov draft-proposal
```

2. You are presented with the following options:

```shell
Use the arrow keys to navigate: ↓ ↑ → ← 
? Select proposal type: 
  ▸ text
    community-pool-spend
    software-upgrade
    cancel-software-upgrade
    other
```

3. Select text to outline key **metadata** for your proposal in json format. 

:::info vote options
Voters can choose between **Yes**, **No**, **NoWithVeto** and **Abstain**. 

**NoWithVeto** allows the voter to cast a No vote, but also to veto the proposal. 

If a proposal is vetoed, it is automatically rejected and the deposit burned. 

**Abstain** allows the voter to abstain from voting. 

With a majority of Yes the proposal pass and its messages are executed. Abstain is different from not voting at all, as voting contributes to reaching the quorum.

:::


```shell
✔ text
✔ Enter proposal title: My Proposal
✔ Enter proposal authors: Maya Angelou
✔ Enter proposal summary: Increase validator set to 800
✔ Enter proposal details: This proposal seeks to...
✔ Enter proposal proposal forum url: https://example.org/proposal/1
✔ Enter proposal vote option context: YES: XX, NO: YX, ABSTAIN: XY, NO_WITH_VETO: YY
```

4. Enter the proposal deposit

```shell
✔ Enter proposal deposit: 50000stake
Your draft proposal has successfully been generated.
Proposals should contain off-chain metadata, please upload the metadata JSON to IPFS.
Then, replace the generated metadata field with the IPFS CID.
```

5. The `draft-proposal` command generates two files:

* **draft_metadata.json** - This contains the information you just entered. It should be pinned on IPFS.

* **draft_proposal.json** - Replace the metadata field with the IPFS url. 

```json
{
  "metadata": "ipfs://CID",
  "deposit": "50000stake"
}
```

## How to submit the proposal on chain

1. Use the following example to construct your request.

```shell

cudos-noded tx gov submit-proposal draft_proposal.json --from maya --keyring-backend test
```

2. A transaction hash confirms successful submittal.

```shell
cudos-noded query tx D8F1123412345256ED9C9
```

## How to view proposals 

To view a specific proposal on `cudos-noded`, you need the **proposal ID**  

```shell 
cudos-noded query gov proposal <ID>
```

To view all proposals run the following command:

```shell
cudos-noded q gov proposals
```

## How to vote on a proposal 

1. You can only vote on a proposal that has met it's minimum proposal deposit.

Check if a proposal has met the minimum deposit

```shell 
cudos-noded query gov params --output json | jq .deposit_params.min_deposit
```

2. Vote for the proposal using its ID

The example below has a proposal ID of `12` and an account user `dorothy-parker`

```shell
$ cudos-noded tx gov vote 12 yes --from dorothy-parker --keyring-backend test 
```

:::info Voting period
There is a **14 day voting period** before votes are determined. 
:::

## How to view the voting outcome

Use the same command for viewing proposals to view the voting outcome. 

## How to query your account balance as the proposal author

If your proposal has been successful, you can see if your deposit has been returned by running the following command: 

In the following example, the author is `maya` 

```shell
cudos-noded query bank balances $maya 
```












* **Proposal submission**: Users can submit a proposal with a deposit. Once the minimum deposit is reached, the proposal enters voting period.

* **Vote**: Participants can vote on proposals that have reached the minimum deposit.

* **Inheritance and penalties**: Delegators inherit their validator's vote if they don't vote themselves.

* **Claiming deposit**: Users that deposited on proposals can recover their deposits if the proposal was accepted *OR* if the proposal never entered voting period.

The governance module inherited from CosmosSDK currently supports:

- Proposal submission: Users can submit proposals with a deposit. Once the minimum deposit is reached, proposal enters voting period
- Voting: Participants can vote on proposals that reached MinDeposit
- Inheritance and penalties: Delegators inherit their validator's vote if they don't vote themselves.
- Claiming deposit: Users that deposited on proposals can recover their deposits if the proposal was accepted OR if the proposal never entered voting period.

Please visit the [Proposals page](https://explorer.cudos.org/proposals) to find out more on active proposals.

For full guides on how this all works, please read [the latest CosmosSDK docs](https://docs.cosmos.network/master/modules/gov/#contents)

**CUDOS** token holders can participate in network governance and vote on active proposals to shape the network's future.

Creating a governance proposal takes place on [Cudos Dashboard](https://dashboard.cudos.org/).

The steps involved in creating a governance proposal are as follows:

## Prerequisites

* A Keplr wallet with 100,000 CUDOS tokens plus transaction fees. 

## How to write a Governance proposal

When drafting a new proposal, you may want to consider using the [Proposal Template](proposal-template) for guidance. 

## 1. Initiate a proposal

1. On the [Cudos Dashboard](https://dashboard.cudos.org/) connect your wallet.

2. Create a transaction with the title of your proposal and sign it with your Keplr wallet. 

## 2. Create a proposal

you need 100 CUDOS tokens in your Keplr Wallet.

To create the proposal, you will need to connect the Keplr wallet to your Cudos Explorer

If you don’t have a Cudos wallet set up already, you will need to create one using Keplr wallet Extension and the Cudos Explorer. You need the Keplr wallet to sign the transactions before the proposal is accepted.

Once you are connected to the network, you will need to take the following steps:
1. Create a new proposal: On the Cudos explorer, there is a proposal tab on the left sidebar menu. Click on it to open the proposal page. Click on the create proposal button and fill in the details about the proposal. Click on the Next button to confirm the transactions via the Keplr wallet.

2. Deposit Cudos tokens into the proposal: Remember that the Cudos proposal needs to have tokens backing it before it can be voted for. Click on the proposals tab as you did previously but this time, you will see an active proposal because you created one and the status will be Deposit Period. Click on the deposit button to add the Cudos tokens to back the proposal. Again, click on the Next button to confirm the transaction on the Keplr wallet.

3. Voting on a proposal: On the proposal tab, using the Cudos explorer, there is a voting butting that has a voting period status. Click on the vote button close to the deposit one and cast the vote by confirming using the Keplr wallet. Once the token is deducted, it will show on the cast votes for the proposal as shown below


When the voting period ends, the community can determine if the proposal will pass or not and how community members voted will also become evident.





