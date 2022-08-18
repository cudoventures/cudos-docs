---
title: Create your own token
id: coin-tutorial
---


1. Create a projects directory

```shell
mkdir projects
cd projects
```

2. Let's create a new directory and initialise a Blast project for our new coin. Let's call it 'Kula' after the Trobriand Islanders exchange system. 

```shell
mkdir Kula
cd Kula
blast init

# Example response

Success! Sample project initialized in /Users/ad/projects/Kula
```

3. Now let's remove the sample contracts folder from the blast project. So we can add new contracts.

```
rm -rf contracts/
```

2. Now, in the `projects` directory, let's clone some helpful templates from cosmwasm

```shell
cd projects
git clone https://github.com/CosmWasm/cw-plus.git
```

3. Inside your `projects` dLet's copy everything in `cw-plus` into our Kula project. 

```shell
cp -r cw-plus/* ../Kula
blast compile


```shell
blast init --dir /projects/Kula
```

4. 





