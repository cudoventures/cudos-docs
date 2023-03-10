---
title: Data
id: data
---

# Data

## State

```typescript
type State = "StartRequested" | "Running" | "RestartRequested" |
             "StopRequested" | "Stopped" | "Finished" | "Failed"
```

State | Meaning
--|--
`StartRequested` | The VM has not been created yet, or the owner has requested to start a stopped VM. You can tell if the VM has been created by checking if the `address` is set.
`Running` | The VM is running and is accessible on its address
`RestartRequested` | The owner has requested that a running VM be restarted
`StopRequested` | The owner has requested that a running VM be stopped
`Stopped` | The VM is stopped. This only happens in response to an owner request.
`Finished` | The VM has been deprovisioned. This may happen if the owner requests it, or if the VM runs out of funds.
`Failed` | The VM failed. This may happen for many reasons. More information about exactly what went wrong is available in the VM's `reason` field.

## Region

```typescript
type Region = "na" | "eu" | "ap"
```

Code | Region
--|--
na | North America
eu | Europe
ap | Asia-Pacific

## Machine

```typescript
type Machine = {
  id: string,
  state: State,
  owner?: string,
  region?: Region,
  image_id: string,
  machine_type_id: string,
  ssh_key: string,
  credit: string,
  provider?: string,
  address?: string,
  until?: string,
  reason?: string,
}
```

**id** is the globally unique ID of the VM. VM operations use this to identify the VM to operate on.

**state** is the current state of the VM.

**owner** is the address of the owner of the VM. If not set, the VM is unowned.

**region** is the geographic region the should be created in. If not set, the VM may be created in any region.

**image_id** is the ID of the image used to initialize the VM's virtual disk.

**machine_type_id** is the ID of the machine type which specifies the capacities and capabilities of the VM.

**ssh_key** is the SSH key which will be installed in the VM for remote access.

**credit** is the VM's current credit, in the host network's native denom. For technical reasons, although this is a number, it is represented as a string.

**provider** is the address of the provider of the VM. This is not set initially, and will be set when a provider commits to satisfying the order.

**address** is the IP address of the VM. This is not set initially, and will be set when the provider knows what it is.

**until** is the time of the next billing cycle, measures in in nanoseconds since 1970-01-01 00:00:00 UTC. For technical reasons, although this is a number, it is represented as a string.

## MachineType

```typescript
type MachineType = {
  id: string,
  cpu_count: number,
  gpu_count: number,
  memory_gb: number,
  storage_gb: number,
  acudos_per_hour: string,
  available: bool,
}
```

:::caution
A VM _may_ share its resources with other workloads on the host. Unless explicitly stated otherwise, no particular level of performance or capability are guaranteed for any virtual devices specified in a machine type.
:::

**id** is the globally unique ID of the machine type. This ID is used when ordering a VM.

**cpu_count** is the number of virtual CPUs a VM of this type has.

**gpu_count** is the number of virtual GPUs a VM of this type has.

**memory_gb** is the amount of RAM available for a VM of this type, in gibibytes.

**storage_gb** is the size of a VM of this type's virtual disk, in gigabytes.

**acudos_per_hour** is the price to have a VM of this type in a provisioned state for one hour, in the host network's native coin.

:::caution
Although the field is called `acudos_per_hour`, it is actually measured in the host network's native coin, which may not be acudos.
:::

**available** is whether a VM of this type may potentially available be provisioned. This may be `false` for a machine type which is discontinued, or if it is known that insufficient capacity is available. If this is `true`, it is not guaranteed that the machine type is definitely available, as a VM may fail to provision for reasons outside of our ability to predict.

## Image

```typescript
type Image = {
  id: string,
  name: string,
  distro: string,
  size: number,
}
```

**id** is the globally unique ID of the image type. This ID is used when ordering a VM.

**name** is the name of the image.

**distro** is the name of the software distribution.

**size** is the size of the image in bytes.
