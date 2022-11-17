---
title: Interact with your contract
id: interact-counter
---

Here's how to interact with your contract using the `interact.js` script provided. 

1. Open `{project_root}/scripts/interact.js` and add the new contract `address` as follows:

```shell

async function main() {
  const [alice, bob] = await bre.getSigners()
  const contract = await bre.getContractFromAddress
  # Replace the next line with the new contract address
  ('cudos14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9strccpl')
```

2. Now run the script to interact with the deployed smart contract.

```shell
blast run scripts/interact.js
```

You should get a response similar to that below:

### Example interact response 1

```shell
blast run scripts/interact.js
Initial count: 13
{
  logs: [ { msg_index: 0, log: '', events: [Array] } ],
  height: 14969,
  transactionHash: '5C61E6C9EA7FF2376487508D9F9F4417B655D09EE3DB8B4D39EB4E52B22B88DB',
  gasWanted: 155578,
  gasUsed: 131142
}
Count after increment: 14
```

The following information is returned:
`height` of the latest block on the Cudos network.
`transactionHash`: 


Each time your run the interact.js script, the count increments. 

### Example interact response 2

```shell
$ blast run scripts/interact.js
Initial count: 14
{
  logs: [ { msg_index: 0, log: '', events: [Array] } ],
  height: 46053,
  transactionHash: '7F36A5FD55AB28A3FBE4BF91A90E80FF522BB81DC577ED360714DD9FDDBC1E29',
  gasWanted: 146990,
  gasUsed: 124933
}
Count after increment: 15
```
