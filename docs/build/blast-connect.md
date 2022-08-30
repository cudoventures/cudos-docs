---
title: Connect to local node
id: blast-connect
---

Test your contract on a **local** node before deploying on **testnet** or **mainnet**.

To interact with your contract, spin up a Cudos node with the `blast node` command.

Use Blast to connect to a new local CUDOS node and view events in the terminal as follows:

## Start a local Cudos node

To start a new local Cudos node, run the following command:

```shell
blast node start
```

To run a new local Cudos node with logging output, run the following command: 

```shell
blast node start -l
```

### Example node start (extract)

```
blast node start -l
Creating network "config_default" with the default driver
Creating volume "config_cudos_data" with default driver
Building cudos-node
[+] Building 17.3s (4/8)                                                        
 => [internal] load build definition from cudos-node.dockerfile            0.0s
 => => transferring dockerfile: 477B                                       0.0s
 => [internal] load .dockerignore                                          0.0s
 => => transferring context: 2B                                            0.0s
 => [internal] load metadata for docker.io/cudos/binary:1.0.0              2.2s
 => [internal] load build context                                          0.0s
 => => transferring context: 19.38kB                                       0.0s
 => [1/4] FROM docker.io/cudos/binary:1.0.0@sha256:a7dc03a7d9c1dd439b1b9  15.0s
 => => resolve docker.io/cudos/binary:1.0.0@sha256:a7dc03a7d9c1dd439b1b9e  0.0s
 => => sha256:812a0ce890d3a0cdf74ce718a579051a1ec67b0e6a4 7.44kB / 7.44kB  0.0s
 => => sha256:982cba7e471c6d3ce96014cf58b2e4e115a525e6 50.44MB / 50.44MB  12.0s
 => => sha256:a7dc03a7d9c1dd439b1b9e28c30dc4d492f7364b404 2.85kB / 2.85kB  0.0s
 => => sha256:8b047e8f2e47bdf998a952572ae5e9d64edf8e29b 10.00MB / 10.00MB  3.7s
 => => sha256:b02d86f59850f3e13d394072350625a8526b912af24 7.86MB / 7.86MB  3.1s
 => => sha256:478cfe935c2fb922eb2a95131ad8a2f1e6ff472b 29.36MB / 51.84MB  15.0s
 => => sha256:c6620b71e668a15f45550b2839dac072191472b3 25.17MB / 68.80MB  15.0s
 => => sha256:20678a99ee2fa97fa8ead13573d38bd30

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
Creating cudos_blast_node ... done
Cudos Blast local node is ready
Local accounts information file created
```

::: 

## Stop a running local Cudos node

Run the following command:

```shell
blast node stop
```

## Checking node status

To check whether any Cudos node is online or offline run

```bash
blast node status
```

### Example node status

```shell
blast node status
Node is online.
Node id: d3ce9ba26e9d826e3f3216d3eed54624ebe1f30d
Network: cudos-network
```


:::note 

`cudos-network` is the local network running on your machine.

:::






