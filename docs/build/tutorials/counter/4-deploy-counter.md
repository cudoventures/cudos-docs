---
title: Deploy your contract
id: deploy-counter
---

In this section, we're going to upload one of our optimised builds `alpha.wasm` to our local environment.

1. First, check you are in the root of the project.

```shell
pwd
```


2. Run the following command:

```shell
npm install cudos-blast
```


3. Now run the deploy script

```shell
blast run scripts/deploy.js
```


### Example deploy response

```shell
blast run scripts/deploy.js
Contract deployed at: cudos14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9strccpl
```

When the contract is deployed, the `address` of the contract is returned. 

:::tip Copy `address`
Keep a note of this as you will need it to interact with your contract. 
:::
