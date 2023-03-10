---
title: Messages
id: messages
---

# Messages

:::note
The contract supports other messages, but only those documented here are officially supported for use by consumers.
:::

## `order_machine`

```typescript
{
  order_machine: {
    id: string
    image_id: string
    machine_type_id: string
    ssh_key: string
    region?: "eu" | "na" | "ap"
  }
}
```

Posts a request to start a VM.

`id` must be globally unique - it is an error to reuse an id.

`image_id` specifies an OS image. A copy of the image is used as the VM's boot disk. The available images can be queried using `image_list`.

`machine_type_id` specifies a VM type. The available types can be queried using `machine_type_list`.

`ssh_key` specifies an SSH key. An SSH key is required and is the officially supported method for logging in to the VM. For technical reasons, smartcard SSH keys are not supported.

`region` specifies an optional region code. If given, the VM will be created in this region. If not, the VM may be created in any region.

Coins sent with the request will be credited to the VM. Only the coin denom specified for the network you are using may be sent.

You _should_ send enough coins with the request to fund the VM for at least one minute, or the VM will fail to start up.

The VM starts in the `StartRequested` state.

:::tip
If you don't send enough funds, the order will not be rejected immediately, but will fail when processed by a provider.
:::

## `disown_machine`

```typescript
{
  disown_machine: {
    id: string
  }
}
```

Disown a VM.

This message is rejected if sent with coins. The sender must own the machine.

When you disown a VM, any remaining credit is refunded to the account sending the message, and it is set as unowned. If it is running, the provider will stop it soon - typically within seconds.

:::tip
If you want to be sure the VM has stopped, you must monitor the VM status until it changes to Finished or Failed.
:::

:::warning
Because you no longer own the VM, you cannot perform any other operations on it.
:::

## `fund_machine`

```typescript
{
  fund_machine: {
    id: string
  }
}
```

Adds credit to a machine.

The machine must have an owner, and the message must be sent with coins of the denom specified for the network.

You may add any amount of credit.

:::warning
The machine owner owns the credit, regardless of who sent it. If the credit is refunded, it will be refunded to the machine owner.
:::

## `transfer_machine`

```typescript
{
  transfer_machine: {
    id: string
    new_owner: string,
  }
}
```

Change the owner of a VM.

This message is rejected if sent with coins. The sender must be the current owner of the VM.

The `new_owner` becomes the owner of the VM.

:::warning
No credit is refunded. The new owner owns any credit remaining on the machine.
:::

## `request_machine_restart`

```typescript
{
  request_machine_restart: {
    id: string
  }
}
```

Requests a VM restart.

This message is rejected if sent with coins. The sender must be the current owner of the VM.

If the VM state is currently `Running`, it changes to `RestartRequested`. Otherwise, the message fails.

The VM's provider should respond by restarting the VM and, using the `resolve_machine_restart` message, change the state to `Running`.

The provider should not change the state until _after_ the restart has actually happened.

:::warning
Restarting a VM may result in data loss.
:::

## `request_machine_stop`

```typescript
{
  request_machine_stop: {
    id: string
  }
}
```

Requests a VM stop.

This message is rejected if sent with coins. The sender must be the current owner of the VM.

If the VM state is currently `Running`, it changes to `StopRequested`. Otherwise, the message fails.

The VM's provider should respond by stopping the VM and, using the `resolve_machine_stop` message, change the state to `Stopped`.

The provider should not change the state until _after_ the stop has actually happened.

:::warning
Stopping a VM may result in data loss.
:::

## `request_machine_start`

```typescript
{
  request_machine_start: {
    id: string
  }
}
```

Requests a VM stop.

This message is rejected if sent with coins. The sender must be the current owner of the VM.

If the VM state is currently `Stopped`, it changes to `StartRequested`. Otherwise, the message fails.

The VM's provider should respond by starting the VM and, using the `resolve_machine_start` message, change the state to `Running`.

The provider should not change the state until _after_ the start has actually happened.
