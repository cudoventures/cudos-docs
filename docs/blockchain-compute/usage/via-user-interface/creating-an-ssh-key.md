---
title: Creating an SSH Key
id: creating-an-ssh-key
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Creating an SSH Key

You’ll need to have an SSH key in order to create a virtual machine. If you already have one, you can ignore this. 

For Windows Users - please follow [this guide](https://www.ssh.com/academy/ssh/putty/windows/puttygen). 

For MacOS and Linux users: 



1. Open Terminal.
2. Paste the text below, substituting in your email address.

<Tabs groupId="operating-systems">
  <TabItem value="mac" label="macOS">
    

    ssh-keygen -t ed25519 -C "your_email@example.com" 

    
  </TabItem>  
  <TabItem value="linux" label="linux">
    

    ssh-keygen -t ed25519 -C "your_email@example.com" 

   
  </TabItem>
</Tabs>

This creates a new SSH key, using the provided email as a label.

```bash 
Generating public/private ALGORITHM key pair. 
``` 

When you're prompted to "Enter a file in which to save the key", you can press Enter to accept the default file location. Please note that if you created SSH keys previously, ssh-keygen may ask you to rewrite another key, in which case we recommend creating a custom-named SSH key. To do so, type the default file location and replace id_ssh_keyname with your custom key name.



3. At the prompt, type a secure passphrase.

```
> Enter passphrase (empty for no passphrase): [Type a passphrase]
> Enter same passphrase again: [Type passphrase again]
```

Next you’ll need to add your SSH key to the ssh-agent

Before adding a new SSH key to the ssh-agent to manage your keys, you should have checked for existing SSH keys and generated a new SSH key. 


4. Start the ssh-agent in the background.

<Tabs groupId="operating-systems">
  <TabItem value="mac" label="macOS">


  When adding your SSH key to the agent, use the default macOS ssh-add command, and not an application installed by macports, homebrew, or some other external source.
    

        eval "$(ssh-agent -s)"
        > Agent pid 59566
    


  </TabItem>  
  <TabItem value="linux" label="linux">

      eval "$(ssh-agent -s)"
      > Agent pid 59566



  </TabItem>
</Tabs>

	

Depending on your environment, you may need to use a different command. For example, you may need to use root access by running `sudo -s -H` before starting the ssh-agent, or you may need to use `exec ssh-agent bash` or `exec ssh-agent zsh` to run the ssh-agent.



5. Adding the SSH key to the ssh-agent


<Tabs groupId="operating-systems">
  <TabItem value="mac" label="macOS">

  If you're using macOS Sierra 10.12.2 or later, you will need to modify your ~/.ssh/config file to automatically load keys into the ssh-agent and store passphrases in your keychain.

  First, check to see if your ~/.ssh/config file exists in the default location.
    

    open ~/.ssh/config
    > The file /Users/YOU/.ssh/config does not exist.

    
  If the file doesn't exist, create the file.


    touch ~/.ssh/config
 

    
  Open your `~/.ssh/config` file, then modify the file to contain the following lines. If your SSH key file has a different name or path than the example code, modify the filename or path to match your current setup.


  
    

    Host *.cudo.org 
    AddKeysToAgent yes
    UseKeychain yes
    IdentityFile ~/.ssh/id_ed25519 

    
  
  Lastly, add your SSH private key to the ssh-agent and store your passphrase in the keychain. If you created your key with a different name, or if you are adding an existing key that has a different name, replace id_ed25519 in the command with the name of your private key file.


  
    

    ssh-add --apple-use-keychain ~/.ssh/id_ed25519 

    
  
  </TabItem>  
  <TabItem value="linux" label="linux">

   Lastly, you will now add the newly created SSH private key to the ssh-agent. Note that you will replace id_ed25519 with your private key file name if you created your key with a custom name.

    


        ssh-add ~/.ssh/id_ed25519 
    


  </TabItem>    
</Tabs>



That’s it, you’re ready to use your SSH key on this step in the Create a Machine process!


![bcc-ssh-key-input](@site/static/img/bcc-ssh-key-input.png)

You can copy your SSH key by opening the hidden `.ssh` directory in the root, and then copying the content of the public key file, the `id_ed25519.pub` file. If you created your key with a custom name this will be the [custom-name].pub file. 

An alternative is to run the following command.

<Tabs groupId="operating-systems">
  <TabItem value="mac" label="macOS">    

      pbcopy < ~/.ssh/id_ed25519.pub
    


  </TabItem>  
  <TabItem value="linux" label="linux">

      cat ~/.ssh/id_ed25519.pub

  This command displays the content of the file into the terminal, you can then copy it to your keyboard for pasting. 

  </TabItem>
</Tabs>
