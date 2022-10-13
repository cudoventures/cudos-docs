---
title: Useful staking CLI Commands
id: staking-cli
---

## query

The query commands allows users to query staking state.

```shell
cudos-noded query staking --help
```

## delegation

The delegation command allows users to query delegations for an individual delegator on an individual validator.

Usage:

```shell
cudos-noded query staking delegation [delegator-addr] [validator-addr] [flags]
```


## delegations
The delegations command allows users to query delegations for an individual delegator on all validators.

Usage:

```shell
cudos-noded query staking delegations [delegator-addr] [flags]
```

## delegations-to
The delegations-to command allows users to query delegations on an individual validator.

Usage:

```shell
cudos-noded query staking delegations-to [validator-addr] [flags]
```


## historical-info
The historical-info command allows users to query historical information at given height.

Usage:

```shell
cudos-noded query staking historical-info [height] [flags]
```

## params
The params command allows users to query values set as staking parameters.

Usage:

```shell
cudos-noded query staking params [flags]
```


## pool
The pool command allows users to query values for amounts stored in the staking pool.

Usage:

```shell
cudos-noded q staking pool [flags]
```

## redelegation
The redelegation command allows users to query a redelegation record based on delegator and a source and destination validator address.

Usage:

```shell
cudos-noded query staking redelegation [delegator-addr] [src-validator-addr] [dst-validator-addr] [flags]
```

## redelegations
The redelegations command allows users to query all redelegation records for an individual delegator.

Usage:

```shell
cudos-noded query staking redelegations [delegator-addr] [flags]
```

## redelegations-from
The redelegations-from command allows users to query delegations that are redelegating from a validator.

Usage:

```shell
cudos-noded query staking redelegations-from [validator-addr] [flags]
```

## unbonding-delegation
The unbonding-delegation command allows users to query unbonding delegations for an individual delegator on an individual validator.

Usage:

```shell
cudos-noded query staking unbonding-delegation [delegator-addr] [validator-addr] [flags]
```

## unbonding-delegations
The unbonding-delegations command allows users to query all unbonding-delegations records for one delegator.

Usage:

```shell
cudos-noded query staking unbonding-delegations [delegator-addr] [flags]
```


## unbonding-delegations-from
The unbonding-delegations-from command allows users to query delegations that are unbonding from a validator.

Usage:

```shell
cudos-noded query staking unbonding-delegations-from [validator-addr] [flags]
```

## validator
The validator command allows users to query details about an individual validator.

Usage:

```shell
cudos-noded query staking validator [validator-addr] [flags]
```

## validators
The validators command allows users to query details about all validators on a network.

Usage:

```shell
cudos-noded query staking validators [flags]
```

## transactions
The tx commands allows users to interact with the staking module.

```shell
cudos-noded tx staking --help
```

## create-validator
The command create-validator allows users to create new validator initialized with a self-delegation to it.

Usage:

```shell
cudos-noded tx staking create-validator [flags]
```

## delegate
The command delegate allows users to delegate liquid tokens to a validator.

Usage:

```shell
cudos-noded tx staking delegate [validator-addr] [amount] [flags]
```

## edit-validator
The command edit-validator allows users to edit an existing validator account.

Usage:

```shell
cudos-noded tx staking edit-validator [flags]
```

```shell
cudos-noded tx staking edit-validator --moniker "new_moniker_name" --website "new_webiste_url" --from mykey
```

## redelegate
The command redelegate allows users to redelegate illiquid tokens from one validator to another.

Usage:

```shell
cudos-noded tx staking redelegate [src-validator-addr] [dst-validator-addr] [amount] [flags]
```

## unbond
The command unbond allows users to unbond shares from a validator.

Usage:

```shell
cudos-noded tx staking unbond [validator-addr] [amount] [flags]
```

```shell
cudos-noded tx staking unbond cudosvaloper1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj 100stake --from mykey
```

## cancel unbond
The command cancel-unbond allow users to cancel the unbonding delegation entry and delegate back to the original validator.

Usage:

```shell
cudos-noded tx staking cancel-unbond [validator-addr] [amount] [creation-height]
```

```shell
cudos-noded tx staking cancel-unbond cudosvaloper1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj 100stake 123123 --from mykey
```
