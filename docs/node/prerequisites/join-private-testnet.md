---
title: Join Private Testnet
id: join-private-testnet
---

This section details the steps to join a **Private Testnet**

NETWORK | ID | URL
-----|------|-----
private testnet| cudos-network |http://localhost:26657

## Red Hat/Fedora OS

* RHEL/CentOS/EL 8
* Fedora 34 & 35

1. Make sure you are in **root** by running the following command:

```shell
sudo -i
```

2. Run the following script to connect to Private Testnet

```shell
dnf install -y yum-utils
yum-config-manager --add-repo http://jenkins.gcp.service.cudo.org/cudos/cudos.repo
yum-config-manager --enable cudos-prtn
dnf install cudos-network-private-testnet
```

3. Confirm connection to Private Testnet

```shell
cudos-noded status 2>&1 | jq -M 
```
:::tip Success!

`"network": "cudos-network"` means you are successfully connected to Private Testnet. 

:::

This step, confirms your installation has succeeded. 

## Ubuntu/Debian 

1. Make sure you are in **root** by running the following command:

```shell
sudo -i
```

2. Run the following scripts to connect to Private Testnet:

    * Set up `apt` repo

    ```shell
    echo 'deb [trusted=yes] http://jenkins.gcp.service.cudo.org/cudos/cudos-prtn/debian stable main' > /etc/apt/sources.list.d/cudos.list
    ```

    * Update the local package list

    ```shell
    apt update
    ```

    * Install network

    ```shell
    apt install cudos-network-private-testnet
    ```

3. Confirm installation

```shell
cudos-noded version
```