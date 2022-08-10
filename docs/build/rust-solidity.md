---
title: Rust vs Solidity
id: rust-solidity
---

TO BE EDITED

First of all, the deploy-execute process consists of 3 steps rather than 2. While Ethereum was built around the concept of many unique contracts, each possibly custom-made for any bilateral agreement, the reality seems to show that writing a bug-free contract is harder than originally thought, and a majority are copies of standard templates like OpenZepellin. With that in mind, and conscious of the overhead of uploading and validating wasm code, we define the following 3 phases of a contract:

Upload Code — Upload some optimized wasm code, no state nor contract address (example Standard ERC20 contract)
Instantiate Contract — Instantiate a code reference with some initial state, creates new address (example set token name, max issuance, etc for my ERC20 token)
Execute Contract — This may support many different calls, but they are all unprivileged usage of a previously instantiated contract, depends on the contract design (example: Send ERC20 token, grant approval to other contract)
Just like Ethereum, contract instantiation and execution is metered and requires gas. Furthermore, both instantiation and execution allow the signer to send some tokens to the contract along with the message. Two key differences are that sending tokens directly to a contract, eg. via SendMsg, while possible, does not trigger any contract code. This is a clear design decision to reduce possible attack vectors. It doesn’t make anything impossible, but requires all execution of the contract to be explicitly requested.

Contract Security
Code correctness is paramount in blockchain smart-contracts. As the source code is public and there is no “admin” to fix things, there must be no bugs in the execution paths that can be exploited to produced undesired (or undefined) behavior. Many teams look to use Turing incomplete languages to perform deeper analysis and remove many classes of bugs. We choose to use a Turing complete language, like Solidity, but with security as a primary goal. This includes limiting possible attack surface, but also very strong in-built unit test capabilities to easily shake out bugs before deployment.

While CosmWasm development has a steeper learning curve than Solidity (it definitely takes more work to get your first sample contract running), it is designed to be more productive for devs with a couple weeks of experience who wish to produce production-ready code. And we hope to have an architecture and tooling to avoid the need for a whole industry of “CosmWasm smart contract auditors”, as it should be easy to just “do the right thing”.

One major class of attacks in Ethereum (and probably the most infamous due to the DAO hack) is reentrancy. CosmWasm was architected to eliminate the possibility of this class of attacks.

Much like Ethereum, we take resource usage seriously. As such, we provide hard limits on memory usage, and gas-based limits on CPU and Storage.

For those who take security very seriously, you can read a longer list of how CosmWasm stacks up against all known Ethereum attack vectors.