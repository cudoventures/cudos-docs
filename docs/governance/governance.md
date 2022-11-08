---
title: Governance
id: governance
---

On-chain governance proposals are used for decentralised decision making on the Cudos Network.

To create a proposal, a **50000 CUDOS** deposit is required. This deposit is returned if your proposal is successfully voted for by token holders.

However, if your vote is unsuccessful, your deposit is **NOT** returned. It's a good idea to share your proposal idea in the [**Cudos Discord**](https://discord.com/invite/cudos) group prior to submitting it to ensure partipation and buy-in.

A proposal can be submitted for a number of changes including an upgrade of the chain, parameters of the chain, a simple text proposal, or any other message type.

**Validator operators** and **token holders** have the right to vote on proposals on a **1 token 1 vote** basis. This includes any stake delegated to them by other CUDOS holders.

:::tip Cudos Dashboard

The [**Cudos Dashboard**](https://dashboard.cudos.org/) is the easiest way to create a proposal. It also allows anyone to easily check any live proposals. By connecting a valid wallet, token holders can create or vote on the outcome of any live proposal.

:::

## Things to know

* **Proposal submission**: Users can submit a proposal with a deposit of 50000 CUDOS. Once the minimum deposit is reached, the proposal enters a 5 day voting period.

* **Vote**: Token holders can vote on proposals that have reached the minimum deposit.

* **Inheritance and penalties**: Delegators can inherit their validator's vote if they don't vote themselves.

* **Claiming deposit**: Users that deposited on proposals can recover their deposits if the proposal was accepted *OR* if the proposal never entered voting period.

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
cudos-noded tx gov vote 12 yes --from dorothy-parker --keyring-backend test
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
