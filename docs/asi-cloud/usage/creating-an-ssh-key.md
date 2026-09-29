---
title: Creating an SSH Key
id: creating-an-ssh-key
---

# Creating an SSH Key

You’ll need to have an SSH key in order to create a virtual machine. If you already have one, you can ignore this.

## MacOS and Linux

1. Open Terminal.
2. Paste the text below.

```bash
$ ssh-keygen -t ed25519
```

This creates a new SSH key.

```bash
Generating public/private ALGORITHM key pair.
```

When you're prompted to "Enter a file in which to save the key", you can press Enter to accept the default file location. Please note that if you created SSH keys previously, ssh-keygen may ask you to rewrite another key, in which case we recommend creating a custom-named SSH key. To do so, type the default file location and replace id_ssh_keyname with your custom key name.

Your public key will end up in `.ssh/id_ed25519.pub`.
You will need the contents of this file when you make a VM.

If you want to use the ssh-agent or want further details please visit [this site](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=linux).

## Windows

Windows 10 (build 1809) and later ship with OpenSSH, so you can use the same `ssh-keygen` command from PowerShell or Command Prompt.

1. Open **PowerShell** or **Command Prompt**.
2. Run:

```powershell
ssh-keygen -t ed25519
```

3. When prompted for "Enter a file in which to save the key", press Enter to accept the default location (`C:\Users\<your-username>\.ssh\id_ed25519`). If a key already exists at that path, either overwrite it or specify a custom file name.
4. Optionally enter a passphrase, or press Enter twice to skip.

Your public key will be saved at `C:\Users\<your-username>\.ssh\id_ed25519.pub`. You can print its contents with:

```powershell
type $env:USERPROFILE\.ssh\id_ed25519.pub
```

You will need the contents of this file when you make a VM.

If your version of Windows does not include OpenSSH, install it from **Settings → Apps → Optional features → Add a feature → OpenSSH Client**, or use [PuTTYgen](https://www.ssh.com/academy/ssh/putty/windows/puttygen) as an alternative.