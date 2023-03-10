---
title: Queries
id: queries
---

# Queries

:::note
The contract supports other queries, but only those documented here are officially supported for use by consumers.
:::

## `machine_type_list`

```typescript
{
  machine_type_list: {}
}
```

Returns an array of the available machine types.

The result is returned as JSON, as an array of [MachineType](data#machinetype) objects.

## `machine_type`

```typescript
{
  machine_type: {
    id: string,
  }
}
```

Returns the machine type with the specified ID.

The result is returned as JSON, as a [MachineType](data#machinetype) object.

## `image_list`

```typescript
{
  image_list: {}
}
```

Returns an array of the available images.

The result is returned as JSON, as an array of [Image](data#image) objects.

## `image`

```typescript
{
  image: {
    id: string,
  }
}
```

Returns the image with the specified ID.

The result is returned as JSON, as an [Image](data#image) object.

## `machine_list`

```typescript
{
  machine_list: {
    owner?: string,
    provider?: string,
  }
}
```

Returns an array of VMs, optionally filtered by owner, provider, or both.

Note that without filtering this returns all VMs.

The result is returned as JSON, as an array of [Machine](data#machine) objects.

## `machine`

```typescript
{
  machine: {
    id: string,
  }
}
```

Returns the VM with the specified ID.

The result is returned as JSON, as a [Machine](data#machine) object.
