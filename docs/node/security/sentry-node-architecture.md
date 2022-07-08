---
title: Sentry Node Architecture
id: sentry-node-arch
---

The aim of a **Sentry node architecture** is to ensure Validator nodes are not exposed on a public network. Validators are responsible for ensuring that the network can sustain denial of service attacks.

One way to mitigate these risks is for validators to carefully structure their network topology in a sentry node architecture.

There are a number of ways to design a Sentry node architecture and no single way is the 'right' way. The following are guidelines. 

## Back-end

A Validator node should only be accessible over a private network. The Validator does not have a public IP address to provide its services. 

## Front-end

One or more Sentry nodes can be at the 'front-end' and connect to the validator using a private connection. Sentry nodes can communicate with the rest of the network using a normal connection. There are options for Sentry nodes to communicate with each other too. 

* The Sentry node is a full-node
* The Sentry node must be on a separate server from the validator node.
* It can be in an entirely different locale to the validator node
* Multiple Sentry nodes provide greater protection than a single Sentry node. 

This way, the Validator node allows the proxying of all requests to and from it via the Sentry. Additionally, we recommend that the sentry's internet connection is further protected by a provider-managed firewall and DDoS-mitigation service.

## Connect to the network

Setting up a **server**, **node** and **authentication** to join the Cudos Network using our in-built public key infrastructure is mandatory. 

In addition, the use of full nodes when interacting the network is highly recommended. 

## Separation of Validator and Sentry nodes

Discrete physical servers for the **Validator** and **Sentry** are recommended. Using the recommended node minimum hardware specification, the separation of public internet and private internal network can be achieved either through physically separated interfaces, or a VLAN-based configuration.

## Use of VMs

It is technically possible to use a hypervisor on a single physical server, with system VMs for each of the **Validator** and **Sentry** roles. Virtual networking can be used to create the recommended security topology. We do not discourage this approach, but do ***strongly recommend*** a thorough understanding of the potential security and performance considerations prior to implementation.

## Use of additional Sentry nodes

An extension of the **sentry node architecture** optionally sees a **Validator** operator adding additional **Sentry nodes**. 

There is the possibility of a DDoS attack consuming all bandwidth into the single recommended sentry. 

It is possible to add further **Sentries**, optionally across **multiple discrete geographies** with independent internet connections. The private internal network for connection between **Sentries** and the **Validator** would then need to be stretched out to these.

We plan to implement the ability for Cudos Validator Nodes to store a history of previously signed blocks in order to more seamlessly prevent double-signing by adverse or deficient nodes in the Cudos Network. This feature is currently absent in earlier-generation Tendermint blockchains. The final element keeping Cudos Network Validating nodes safe is the Tendermint Core Byzantine Fault Tolerant Proof of Stake consensus algorithm.

