---
title: Join Mainnet
id: join-mainnet
---

This section details the steps to join **Mainnet**.

NETWORK | ID | URL
-----|------|-----
Mainnet| cudos-1     | https://rpc.cudos.org

## Red Hat/Fedora OS
* RHEL/CentOS/EL 8
* Fedora 34 & 35

1. Make sure you are in `root` by running the following command:

```shell
sudo -i
```

2. Run the following script to connect to Mainnet 

```shell
dnf install -y yum-utils
yum-config-manager --add-repo http://jenkins.gcp.service.cudo.org/cudos/cudos.repo
yum-config-manager --enable cudos-mainnet
dnf install cudos-network-mainnet
```

3. Confirm connection to Mainnet

```shell
cudos-noded status 2>&1 | jq -M 
```
:::tip Success!

`"network": "cudos-1"` means you are successfully connected to Mainnet. 

:::


## Ubuntu/Debian OS
* Ubuntu 20.04
* Debian 10

1. Make sure you are in `root` by running the following command:

```shell
sudo -i
```

2. Run the following scripts to connect to the Mainnet:

  * Set up `apt` repo

    ```shell
    echo 'deb [trusted=yes] http://jenkins.gcp.service.cudo.org/cudos/cudos-mainnet/debian stable main' > /etc/apt/sources.list.d/cudos.list
    ```

* Update the local package list

    ```shell
    apt update
    ```

* Install network and packages

    ```shell
    apt install cudos-network-mainnet cosmovisor cudos-gex cudos-noded cudos-noded-v1.0.0 cudos-p2p-scan
    ```

3. Confirm connection to **Mainnet**

```shell
cudos-noded status 2>&1 | jq -M 
```
:::tip Success!

`"network": "cudos-1"` means you are successfully connected to Mainnet. 

:::