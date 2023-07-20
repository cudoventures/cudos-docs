# Blockchain Compute

Introduction 

This is the user guide for CUDOS Blockchain Compute’s technical preview. CUDOS Blockchain Compute is an innovative service that allows users to access computing resources via Smart Contract, permissionlessly. For the duration of the technical preview, users are able to call Virtual Machines by interacting directly with the Smart Contract, via CLI, or, if you prefer, via a user interface. 

Getting started

The first thing you’ll need to do is get yourself a Keplr wallet. The guide on how to do so can be found here. 

Once you’ve done that, you’ll need to fund your wallet with CUDOS tokens - here is another guide on how to get them. 


Usage

Via User Interface

Signing In

When first visiting the CUDOS Blockchain Compute homepage, you’ll be greeted by a landing page. This page sets out what we’re seeking to achieve and is also your gateway to the dApp. Take a second to familiarise yourself if you haven’t already. Also, of note is the Survey link at the bottom of the page which must be completed to be eligible for the airdrop. 

In the top right corner, you’ll find a ‘Connect Wallet’ button. Click this and hit ‘Connect Keplr’. 
















A window will then pop up prompting you to add the CudosNetwork chain address to your Keplr Wallet, please accept this. 

With that, you’re all set up and ready to make some machines! 


		Creating a Virtual Machine

Also in the top right corner, you’ll find the menu. To start creating a machine, hit the create button. You’ll be taken to the page below. 



On this page you’ll be met with a variety of options that allow you to configure your machine’s specifications and its running duration as you see fit. 
Each step has an  icon which you can hover over for more information. 

			Creating an SSH Key 

You’ll need to have an SSH key in order to create a virtual machine. If you already have one, you can ignore this. 

For Windows Users - please follow this guide. 
For MacOS and Linux users: 




Open Terminal.
Paste the text below, substituting in your email address.

$ ssh-keygen -t ed25519 -C "your_email@example.com"

This creates a new SSH key, using the provided email as a label.

> Generating public/private ALGORITHM key pair.

When you're prompted to "Enter a file in which to save the key", you can press Enter to accept the default file location. Please note that if you created SSH keys previously, ssh-keygen may ask you to rewrite another key, in which case we recommend creating a custom-named SSH key. To do so, type the default file location and replace id_ssh_keyname with your custom key name.

At the prompt, type a secure passphrase.

> Enter passphrase (empty for no passphrase): [Type a passphrase]
> Enter same passphrase again: [Type passphrase again]

Next you’ll need to add your SSH key to the ssh-agent

Before adding a new SSH key to the ssh-agent to manage your keys, you should have checked for existing SSH keys and generated a new SSH key. When adding your SSH key to the agent, use the default macOS ssh-add command, and not an application installed by macports, homebrew, or some other external source.

Start the ssh-agent in the background.

$ eval "$(ssh-agent -s)"
> Agent pid 59566
	
Depending on your environment, you may need to use a different command. For example, you may need to use root access by running sudo -s -H before starting the ssh-agent, or you may need to use exec ssh-agent bash or exec ssh-agent zsh to run the ssh-agent.

If you're using macOS Sierra 10.12.2 or later, you will need to modify your ~/.ssh/config file to automatically load keys into the ssh-agent and store passphrases in your keychain.

First, check to see if your ~/.ssh/config file exists in the default location.



$ open ~/.ssh/config
> The file /Users/YOU/.ssh/config does not exist.

If the file doesn't exist, create the file.

$ touch ~/.ssh/config

Open your ~/.ssh/config file, then modify the file to contain the following lines. If your SSH key file has a different name or path than the example code, modify the filename or path to match your current setup.

Host *.cudo.org
AddKeysToAgent yes
UseKeychain yes
IdentityFile ~/.ssh/id_ed25519

Add your SSH private key to the ssh-agent and store your passphrase in the keychain. If you created your key with a different name, or if you are adding an existing key that has a different name, replace id_ed25519 in the command with the name of your private key file.

$ ssh-add --apple-use-keychain ~/.ssh/id_ed25519


That’s it, you’re ready to use your SSH key on this step in the Create a Machine process!














Viewing your Machines
On this page you can view all the machines you’ve created. 
There are a few machine states to be aware of: 

Pending - Your machine is starting up 
Running - Your machine has started and is running
Finished - Your machine has run out of tokens and has finished running
Failed - Something went wrong and the machine failed to start

You can also click on your machine’s ID to view a more detailed page about it. Doing so will take you to this page: 


From here you can do a few things. You can stop and restart your machine, as well as destroy it completely which will refund you of any unspent tokens outside of your current billing period. 


	Via Command Line 




Survey / Airdrop 

Something - 
