---
title: Understanding nodes
id: understanding-nodes
---

# Understanding Cudos nodes

You can run five types of nodes on the Cudos Network. 

:::tip
All nodes begin life as a **Full Node**
:::

You can run a **Full Node** alone and then a **Seed Node** to help you find peers to connect with.

To partipate as a **Validator**, you can run a **Validator Cluster** comprised of a **Validator Node, Sentry Node(s)** and **Relay Node(s)**.

|**NODE TYPE**|**DESCRIPTION**|
|:-----:|:-----:|
|Full Node| A full node is a node that participates in the network but does not help secure it. Full nodes can be used to store the entire state of a blockchain. |
|Seed Node | A Seed node provides a node with a list of peers which a node can connect to. |
|Validator Node| Validator Nodes participate in the consensus and produce blocks.|
|Sentry Node| Sentry nodes are Full Nodes used to isolate Validator nodes from public access.|
|Relay Node| A Relay Node is a full node that only make connections to sentry nodes of validators other than the operator of the Relay Node. |

## Ports

Nodes use the following tcp ports:

**Port**| **Usage**
|-----|-----|
|1317| API port, Sentry node |
|9090| gRPC port |
|26656| P2P port used fortransferring internal data between nodes,   Full/Seed nodes     Sentry nodes 
|26657 | [Tendermint RPC server](https://docs.tendermint.com/master/rpc/)   Full/Seed nodes   Sentry nodes |  
|26660 | Port for Prometheus monitoring   Full/Seed nodes   Sentry nodes | 
|1317| API port   Sentry node | 
|9090| gRPC port    Sentry node |  
|26656| P2P port used fortransferring internal data between nodes   Full/Seed nodes     Sentry nodes|  
|26657 | [Tendermint RPC server](https://docs.tendermint.com/master/rpc/)   Full/Seed nodes   Sentry nodes | 
|26660 | Port for Prometheus monitoring   Full/Seed nodes   Sentry nodes  |


## Full nodes

A full node is a node that participates in the network but does not help secure it. Full nodes can be used to store the entire state of a blockchain.

There are two forms of state.

1. ***Blockchain state***
This represents the blocks of a blockchain.

2. ***Application state***
This represents the state that transactions modify. The application stores the knowledge of how a transaction modified the state.

## Seed node

When you first start a node you must provide at least one type of node to be able to connect to the desired network. By providing a seed node you can populate your address quickly. A seed node is not kept as a peer, it disconnects from your node after it has provided a list of peers.

## Validator node cluster 

The Validator Cluster is your implementation of **sentry node architecture**.

It consists of:
1. *Validator node* - at least one
2. *Sentry node* - at least one. 

The cluster can contain many of each node type for high availability and scaling. 

:::caution
For security reasons, Cudos Seed and Sentry nodes are configured to reject connections from multiple peers with the same IP address. **Therefore each seed and sentry must have its own public IP address.**
:::

### Validator nodes

**Validator nodes** participate in the consensus and produce blocks and/or chunks. You can view active Validators on the [Cudos Explorer](https://explorer.cudos.org/validators)

### Sentry node

**Sentry Nodes** protect your validator from being attacked. One of the most common attack vectors is DDOS. Sentry Nodes can mitigate those attacks. This is especially important, since a DDOS attack prevents a validator node from communicating with the rest of the network. This leads to downtime and slashing.

### Relay node

A **Relay Node** is a full node that only make persistent connections to white list IP of sentry nodes of other validators. It runs with `pex` disabled and the firewall on the Relay node blocks all connections from IP addresses not on a white list

### Validator Cluster Nodes


<img src={require('@site/static/img/clusterbasic.png').default} />

A Full Node in a cluster can be configured with one of the following roles: 

**Validator (protected)** 

A validator is protected if the Seed and Sentry nodes are configured to hide its ID from the external Cudos network. Assuming it has the minimum required stake, the validator will assist with consensus activities on the Cudos network; voting on the validity of new blocks, and if chosen, creating new blocks themselves. The validator will also take part in governance decisions. The protected Validator has no direct connections to the outside Cudos network, instead it communicates at the application layer with the Sentry Node which in turn communicates with the Cudos network. If a Seed node is present, it will inform The Validator about other nodes on the Cudos network. 

**Seed node**  A seed node generates a list of peers to which another node can connect, so you can think of a seed node as the first point of contact for a new node joining the network. The seed node proactively learns about nodes on the external Cudos network by a process of ‘crawling’ whereby it connects to other nodes, learns their address book, then disconnects and repeats the process. The seed node is not a mandatory requirement for a Validator Cluster, as the Sentry can locate other nodes on the Cudos network.

**Sentry node**  The Sentry node is an application layer proxy for the validator nodes. Any communication the Validator or Full Node has with the outside Cudos network consists of application messages to/from the Sentry node, which then relays messages to/from nodes on the Cudos network. If a Seed Node is not present, the Sentry will be responsible for informing the validator about nodes on the external Cudos network.


### Sentry node architecture

A variety of node architectures can be explored and multiple distributed Sentry and Relay nodes can be deployed in cloud environments to prevent the possibility of DDoS attacks.

Check out [Sentry Node Architecture reading](https://forum.cosmos.network/t/sentry-node-architecture-overview/454?u=suyu)