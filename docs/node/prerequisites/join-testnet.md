---
title: Join Testnet
id: join-testnet
---

This section details the steps to join **Testnet**.

NETWORK | ID | URL
-----|------|-----
public testnet| cudos-testnet-public-3 |https://sentry1.gcp-uscentral1.cudos.org:36657/

## Red Hat/Fedora OS
* RHEL/CentOS/EL 8
* Fedora 34 & 35

1. Make sure you are in **root** by running the following command:

```shell
sudo -i
```

2. Run the following script to connect to Testnet 

```shell
dnf install -y yum-utils
yum-config-manager --add-repo http://jenkins.gcp.service.cudo.org/cudos/cudos.repo
yum-config-manager --enable cudos-testnet
dnf install cudos-network-public-testnet
```

3. Confirm `cudos-noded` is present

```shell
cudos-noded version
```


## Ubuntu/Debian OS
* Ubuntu 20.04
* Debian 10

1. Make sure you are in **root** by running the following command:

```shell
sudo -i
```

2. Run the following scripts to connect to the Testnet:

    * Set up `apt` repo

    ```shell
    echo 'deb [trusted=yes] http://jenkins.gcp.service.cudo.org/cudos/cudos-testnet/debian stable main' > /etc/apt/sources.list.d/cudos.list
    ```

    * Update the local package list

    ```shell
    apt update
    ```

    * Install network package and its dependencies

    ```shell
    apt install cudos-network-public-testnet
    ```

3. Confirm `cudos-noded` is present

```shell
cudos-noded version
```
