---
title: Understanding nodes
id: understanding-nodes
---

This section describes the multiple node types on the Cudos network and the Ports used by them.  

|-|**NODE TYPE**|**DESCRIPTION**|
|-|:-----:|:-----:|
|![full-node](@site/static/img/full-node.png)|Full Node| A full node is a node that participates in the network but does not help secure it. |-|Full nodes can be used to store the entire state of a blockchain. |
|![seed-node](@site/static/img/seed-node.png)|Seed Node | A Seed node provides a node with a list of peers which a node can connect to. |
|![validator-node](@site/static/img/validator-node.png)|Validator Node| Validator Nodes participate in the consensus and produce blocks.|
|![sentry-node](@site/static/img/sentry-node.png)|Sentry Node| Sentry nodes are Full Nodes used to isolate Validator nodes from public access.|


## Full nodes

A **Full node** is a node that participates in the network but does not help secure it. Full nodes can be used to store the entire state of a blockchain.

## Seed node

When you first start a node you must provide the address of one or more seed nodes to connect to from the desired network. This allows the node to connect to the rest of the network. By providing a seed node you can populate your address quickly. A **Seed node** is not kept as a peer, it disconnects from your node after it has provided a list of peers.

## Validator cluster 

The **Validator Cluster** is your implementation of **Sentry node architecture**.

It consists of:
1. *Validator node* - one 
2. *Sentry node* - one or many 
3. *Seed node* - one or many

### Validator node
A **Validator node** within a cluster ***only*** connects to a **Sentry node(s)**. It has no other connections. It can be run as a solo node but this is not advised except for test purposes. 

### Seed node

A **Seed node** generates a list of peers to which the **Sentry node** can connect to. The **Seed node** proactively learns about nodes on the external Cudos network by a process of ‘crawling’ whereby it connects to other nodes, learns their address book, then disconnects and repeats the process. The **Seed node** feeds the list of addresses to the **Sentry node(s)**.
    The seed node is a *mandatory requirement* for a **Validator Cluster**. 

### Sentry node

The **Sentry node** is an application layer proxy for the **Validator nodes**. Any communication the **Validator node** has with the outside Cudos network consists of application messages to/from the **Sentry node**. These are then relayed to/from nodes on the Cudos network. 

:::warning

Additional **Validator nodes** in a cluster do not provide redundancy as there is an increased possibility of a double signing event and losing the stake.
:::

:::caution
For security reasons, Cudos nodes are configured to reject connections from multiple peers with the same IP address. **Therefore each public facing node must have its own public IP address.**
:::

## Ports

Nodes use the following tcp ports:
- 1317: API port.
- 9090: gRPC port.
- 26656: P2P port used by transferring internal data between nodes.
- 26657: Tendermint RPC server. Reference: https://docs.tendermint.com/master/rpc/
- 26660: Port for Prometheus monitoring.

**Full/Seed nodes** use the following ports: 26656, 26657, 26660.

**Sentry nodes** use the following ports: 1317, 9090, 26656, 26657, 26660.
