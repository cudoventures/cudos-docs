---
title: How to...
id: how-to
---

### Claim rewards

In order to claim pending rewards with your validator, simply

1. Open your **Keplr wallet** and click the **Claim** button

2. Approve the transaction and wait for it to be processed.

### Change your Validator fee

In order to change your Validator's fee, 

1. Start your Docker shell

2. Execute the following command:

Set desired `commission-rate`.

```json
cudos-noded tx staking edit-validator \
--from=validator \
--chain-id=$CHAIN_ID \
--commission-rate="0.50" \
--keyring-backend="os" \
--gas-prices="5000000000000acudos" \
--gas-adjustment 1.3 \
-y
```

### Check Validator fee

You can check your current Validator's fee by running

```bash
cudos-noded q staking validators > validatorsInfo.txt
```
View the `commission-rate` for your Validator.

### Get the validator’s operator address

If you want to find your validator’s operator address, run the command:

```bash
cudos-noded q staking validators | grep -B13 -A9 "$MONIKER" | grep operator_address
```
### Add stake to my Validator

1. Connect your Validator's wallet to the Cudos Explorer and navigate to your Validator's page in the explorer

2. Click **DELEGATE** and introduce the amount you wish to stake in order to increase your Validator's share

3. Click **Next** and approve the transaction in Keplr to increase your Validator's stake.

### Move part of my stake from my Validator to a different Validator

1. Connect your Validator's wallet to the Cudos Explorer and navigate to your Validator's page in the explorer

2. Click **REDELEGATE** and select the new Validator to receive staked tokens.

### Remove stake from my Validator

:::caution
* There is a **21-day unbonding period** between token **undelegation** and tokens being available in your wallet.

* A Validator needs to ensure a minimum amount of 2,000,000 CUDOS staked to perform on the Mainnet). 
:::

