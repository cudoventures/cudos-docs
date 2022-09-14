---
title: Run a validator cluster
id: run-validator-cluster
---

This guide explains how to initialise and start a **Validator Cluster**. 

Once the Clustered Node and its associated Seed and Sentry nodes are configured, started and synchronized, the Clustered Node can then be staked as a Clustered Validator.

## Networks

`Testnet`
`Mainnet`

:::tip
Your network was selected at the **Build Binary** stage.
:::

## 00 Prerequisites

This step assumes you have already built your environment and selected a network.
[**Build Environment**](/docs/node/prerequisites/build-redhat-debian). 


## 01 Configure the daemon 

1. Make sure you run as user `Cudos`

Inside the shell run the following command:

```shell
su - cudos
```

2. 

The following script can be run to automatically set up a **Validator Cluster** on the network. 



