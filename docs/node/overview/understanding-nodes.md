---
title: Understanding nodes
id: understanding-nodes
---

# Understanding Cudos nodes

You can run five types of nodes on the Cudos Network. 

You can run a **Full Node** alone and then a **Seed Node** to help you find peers to connect with.

To partipate as a **Validator**, you can run a **Validator Cluster** comprised of a **Validator Node, Sentry Node(s)** and **Seed Node**.

|-|**NODE TYPE**|**DESCRIPTION**|
|-|:-----:|:-----:|
|![full-node](@site/static/img/full-node.png)|Full Node| A full node is a node that participates in the network but does not help secure it. |-|Full nodes can be used to store the entire state of a blockchain. |
|![seed-node](@site/static/img/seed-node.png)|Seed Node | A Seed node provides a node with a list of peers which a node can connect to. |
|![validator-node](@site/static/img/validator-node.png)|Validator Node| Validator Nodes participate in the consensus and produce blocks.|
|![sentry-node](@site/static/img/sentry-node.png)|Sentry Node| Sentry nodes are Full Nodes used to isolate Validator nodes from public access.|


## Full nodes

A full node is a node that participates in the network but does not help secure it. Full nodes can be used to store the entire state of a blockchain.

There are two forms of state.

1. ***Blockchain state***
This represents the blocks of a blockchain.

2. ***Application state***
This represents the state that transactions modify. The application stores the knowledge of how a transaction modified the state.

## Seed node

When you first start a node you must provide the address of one or more seed nodes to connect to from the desired network. This allows the node to connect to the rest of the network. By providing a seed node you can populate your address quickly. A seed node is not kept as a peer, it disconnects from your node after it has provided a list of peers.

## Validator node cluster 

The Validator Cluster is your implementation of **sentry node architecture**.

It consists of:
1. *Validator node* - one
2. *Sentry node* - one or many 
3. *Seed node* - one or many

The cluster can contain many of each node type for high availability and scaling.

:::warning

Additional Validator nodes in a cluster do not provide redundancy as there is an increased possibility of a double signing event and losing the stake.
:::

:::caution
For security reasons, Cudos nodes are configured to reject connections from multiple peers with the same IP address. **Therefore each public facing node must have its own public IP address.**
:::

### Validator node

**Validator nodes** participate in the consensus protocol and produce blocks. You can view active Validators on the [Cudos Explorer](https://explorer.cudos.org/validators)

### Sentry node

Multiple **Sentry Nodes** provide protection against your validator from being attacked. One of the most common attack vectors is DDOS. Sentry Nodes can mitigate those attacks. This is especially important, since a DDOS attack prevents a validator node from communicating with the rest of the network. This leads to downtime and slashing.

### Validator Cluster Nodes

A **Validator Cluster node** comprises the following:

1. A **Validator node** in a cluster is programmed to only connect to nodes in its address book. If an outside address is introduced it will connect to it. A **Validator node** within in a cluster is hard coded to connect only to the **Sentry node** or **Sentry nodes** guarding it. 

    Assuming it has the minimum required stake and is in the active Validator list, the validator will assist with consensus activities on the Cudos network; voting on the validity of new blocks, and if chosen, proposing new blocks themselves. The validator will also take part in governance decisions. The Validator in a cluster has no direct connections to the outside Cudos network. 

2. A **Seed node** generates a list of peers to which another node can connect. A **Seed node** is the first point of contact for a new node joining the network. The **Seed node** proactively learns about nodes on the external Cudos network by a process of ‘crawling’ whereby it connects to other nodes, learns their address book, then disconnects and repeats the process. The seed node is a *mandatory requirement* for a **Validator Cluster**. 

    The **Seed node** feeds the list of addresses to the **Sentry node**.

3. The **Sentry node** is an application layer proxy for the **Validator nodes**. Any communication the **Validator node** has with the outside Cudos network consists of application messages to/from the **Sentry node**. These are then relayed to/from nodes on the Cudos network. 

### Sentry node architecture

A variety of node architectures can be explored and multiple distributed Sentry and Relay nodes can be deployed in cloud environments to prevent the possibility of DDoS attacks.

[Further reading on Sentry Node Architecture](https://forum.cosmos.network/t/sentry-node-architecture-overview/454?u=suyu)