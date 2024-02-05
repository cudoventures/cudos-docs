---
title: Stake node
id: stake-node
---

This guide explains how to stake funds to your node. 
At the end of this guide your staked node is converted to a **Validator node** and is listed on the **Testnet Explorer** or **Mainnet Explorer**. 

## 00 Prerequisites

* You should have already prepared your node for validating. [see ***Prepare node***](docs/node/run-node/prepare-node-for-validating)

* You should have:
    + 2M CUDOS tokens for your stake
    + Additional 100 CUDOS for transaction fees
    + Additional CUDOS reserve funds in case of being jailed and/or slashed

:::info Network & Chain ID 

**Network** and **Chain ID** are used interchangeably.

### Testnet: cudos-testnet-public-3
### Mainnet: cudos-1
:::


## 01 Run `create-validator` transaction

This step performs a transaction from a specified wallet to a chosen node and converts it to a Validator node. 

:::info what are acudos?
**acudos** are the smallest unit of **CUDOS**

1 CUDOS = 1 x 10^18 acudos

1 CUDOS = 1,000,000,000,000,000,000 acudos 
:::

02 Use the example below to configure and run the `create-validator` command using your own parameters.

You will need to enter your keyring passphrase 

THIS EXAMPLE WORKS: 

from - this is the name of the wallet used. 

```shell
cudos-noded tx staking create-validator --amount="2000000000000000000000000acudos" \
    --from="tango" \
    --pubkey=$(cudos-noded tendermint show-validator) \
    --moniker="apollo-validator" \
    --chain-id="cudos-testnet-public-3" \
    --commission-rate="0.10" \
    --commission-max-rate="0.20" \
    --commission-max-change-rate="0.01" \
    --min-self-delegation="2000000000000000000000000" \
    --gas="auto" \
    --gas-prices="5000000000000acudos" \
    --gas-adjustment="1.80" \
    --keyring-backend="os" \
    -y
```

## Example output

```shell 
Enter keyring passphrase:
gas estimate: 299665
{"height":"5601878","txhash":"03A4783A30E1CDA26A222025808AC16C18E2035FCF0BD78FA390A4BEF37A1CC0","codespace":"","code":0,"data":"0A2C0A2A2F636F736D6F732E7374616B696E672E763162657461312E4D736743726561746556616C696461746F72","raw_log":"[{\"events\":[{\"type\":\"coin_received\",\"attributes\":[{\"key\":\"receiver\",\"value\":\"cudos1tygms3xhhs3yv487phx3dw4a95jn7t7lq2up3k\"},{\"key\":\"amount\",\"value\":\"2000000000000000000000000acudos\"}]},{\"type\":\"coin_spent\",\"attributes\":[{\"key\":\"spender\",\"value\":\"cudos1ayq6mrlk5neyuugv7u0wt2tn8zf7e6dx2jyevh\"},{\"key\":\"amount\",\"value\":\"2000000000000000000000000acudos\"}]},{\"type\":\"create_validator\",\"attributes\":[{\"key\":\"validator\",\"value\":\"cudosvaloper1ayq6mrlk5neyuugv7u0wt2tn8zf7e6dxhp2cd2\"},{\"key\":\"amount\",\"value\":\"2000000000000000000000000acudos\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/cosmos.staking.v1beta1.MsgCreateValidator\"},{\"key\":\"module\",\"value\":\"staking\"},{\"key\":\"sender\",\"value\":\"cudos1ayq6mrlk5neyuugv7u0wt2tn8zf7e6dx2jyevh\"}]}]}]","logs":[{"msg_index":0,"log":"","events":[{"type":"coin_received","attributes":[{"key":"receiver","value":"cudos1tygms3xhhs3yv487phx3dw4a95jn7t7lq2up3k"},{"key":"amount","value":"2000000000000000000000000acudos"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"cudos1ayq6mrlk5neyuugv7u0wt2tn8zf7e6dx2jyevh"},{"key":"amount","value":"2000000000000000000000000acudos"}]},{"type":"create_validator","attributes":[{"key":"validator","value":"cudosvaloper1ayq6mrlk5neyuugv7u0wt2tn8zf7e6dxhp2cd2"},{"key":"amount","value":"2000000000000000000000000acudos"}]},{"type":"message","attributes":[{"key":"action","value":"/cosmos.staking.v1beta1.MsgCreateValidator"},{"key":"module","value":"staking"},{"key":"sender","value":"cudos1ayq6mrlk5neyuugv7u0wt2tn8zf7e6dx2jyevh"}]}]}],"info":"","gas_wanted":"299665","gas_used":"178486","tx":null,"timestamp":"","events":[{"type":"coin_spent","attributes":[{"key":"c3BlbmRlcg==","value":"Y3Vkb3MxYXlxNm1ybGs1bmV5dXVndjd1MHd0MnRuOHpmN2U2ZHgyanlldmg=","index":true},{"key":"YW1vdW50","value":"MTQ5ODMyNTAwMDAwMDAwMDAwMGFjdWRvcw==","index":true}]},{"type":"coin_received","attributes":[{"key":"cmVjZWl2ZXI=","value":"Y3Vkb3MxN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWwzZzJsNGc=","index":true},{"key":"YW1vdW50","value":"MTQ5ODMyNTAwMDAwMDAwMDAwMGFjdWRvcw==","index":true}]},{"type":"transfer","attributes":[{"key":"cmVjaXBpZW50","value":"Y3Vkb3MxN3hwZnZha20yYW1nOTYyeWxzNmY4NHoza2VsbDhjNWwzZzJsNGc=","index":true},{"key":"c2VuZGVy","value":"Y3Vkb3MxYXlxNm1ybGs1bmV5dXVndjd1MHd0MnRuOHpmN2U2ZHgyanlldmg=","index":true},{"key":"YW1vdW50","value":"MTQ5ODMyNTAwMDAwMDAwMDAwMGFjdWRvcw==","index":true}]},{"type":"message","attributes":[{"key":"c2VuZGVy","value":"Y3Vkb3MxYXlxNm1ybGs1bmV5dXVndjd1MHd0MnRuOHpmN2U2ZHgyanlldmg=","index":true}]},{"type":"tx","attributes":[{"key":"ZmVl","value":"MTQ5ODMyNTAwMDAwMDAwMDAwMGFjdWRvcw==","index":true}]},{"type":"tx","attributes":[{"key":"YWNjX3NlcQ==","value":"Y3Vkb3MxYXlxNm1ybGs1bmV5dXVndjd1MHd0MnRuOHpmN2U2ZHgyanlldmgvMA==","index":true}]},{"type":"tx","attributes":[{"key":"c2lnbmF0dXJl","value":"Y252Y01kMFloSDd3QnhSdTE5a0N3K2NsMTczV3RzNUJUclVrTDFHZDl4dDlkQlRrTUFBSFlCNUhtOTlmMkwwM3liSDBmdHNWL1ZlUmFnTTRxT2cxdVE9PQ==","index":true}]},{"type":"message","attributes":[{"key":"YWN0aW9u","value":"L2Nvc21vcy5zdGFraW5nLnYxYmV0YTEuTXNnQ3JlYXRlVmFsaWRhdG9y","index":true}]},{"type":"coin_spent","attributes":[{"key":"c3BlbmRlcg==","value":"Y3Vkb3MxYXlxNm1ybGs1bmV5dXVndjd1MHd0MnRuOHpmN2U2ZHgyanlldmg=","index":true},{"key":"YW1vdW50","value":"MjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGFjdWRvcw==","index":true}]},{"type":"coin_received","attributes":[{"key":"cmVjZWl2ZXI=","value":"Y3Vkb3MxdHlnbXMzeGhoczN5djQ4N3BoeDNkdzRhOTVqbjd0N2xxMnVwM2s=","index":true},{"key":"YW1vdW50","value":"MjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGFjdWRvcw==","index":true}]},{"type":"create_validator","attributes":[{"key":"dmFsaWRhdG9y","value":"Y3Vkb3N2YWxvcGVyMWF5cTZtcmxrNW5leXV1Z3Y3dTB3dDJ0bjh6ZjdlNmR4aHAyY2Qy","index":true},{"key":"YW1vdW50","value":"MjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGFjdWRvcw==","index":true}]},{"type":"message","attributes":[{"key":"bW9kdWxl","value":"c3Rha2luZw==","index":true},{"key":"c2VuZGVy","value":"Y3Vkb3MxYXlxNm1ybGs1bmV5dXVndjd1MHd0MnRuOHpmN2U2ZHgyanlldmg=","index":true}]}]}
```

## 02 Validator created

Visit Explorer and you will see your validator name.



### Parameters

**`--from `**

This is the `new_wallet_keyname` or `existing_wallet_keyname` added to your keyring.

**`--pubkey`** 

***Be sure to insert the full command.***

This is the validator's Protobuf JSON encoded public key. 

**`--moniker`** 

You can assign a name for your Validator node. This is the name that will appear in the CUDOS Explorer and be available for others to delegate CUDOS to.  

**`--chain-id`** 

See above.

**`--commission-rate`** 

This is the commission fee charged to **delegators**. 
This can change once every day up to its `commission-max-change-rate` and without exceeding the `commission-max-rate`.

**`--commission-max-rate`**

The maximum commission rate that your validator can charge.

**`--commission-max-change-rate`**

The maximum daily increase of the validator commission. % point change over the `commission-rate`.

**`--min-self-delegation`**

This is the minimum amount of CUDOS the validator requires to have bonded at all time. i.e. 2M CUDOS. If your validator node's self-delegated stake falls below this limit, it may be jailed and kicked out of the active validator set.

**`--gas-auto`**

gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically (default 200000)
If you set `--gas=auto`, the gas fee is automatically estimated before executing the transaction.

**`--gas-prices`**

Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)
This is the amount to charge for transactions. 

**`--gas-adjustment`**

This is the adjustment factor to be multiplied against the estimate returned by the tx simulation.


## 02 Enter your keyring passphrase

Authenticate and authorize the transaction by entering your **keyring passphrase**.

:::success

Success is indicated by the an output as above. 

Wait a few minutes, then checkout [the Validators tab in Explorer](https://explorer.cudos.org/validators). You should see your MONIKER in the list of validators.

Congratulations 🎉 you have successfully staked on your validator, and it is now operational.

:::

