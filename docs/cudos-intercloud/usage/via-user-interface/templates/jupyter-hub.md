---
title: Jupyter Hub
id: jupyter-hub
---

JupyterHub is a multi-user server for Jupyter notebooks, designed to provide shared access to computational environments for groups, such as data science teams, researchers, and classrooms. It allows multiple users to run and manage their own Jupyter notebook sessions simultaneously on a shared infrastructure. JupyterHub supports authentication, user management, and resource allocation, making it ideal for collaborative and large-scale data science projects. With support for customizable environments, JupyterHub is widely used in education, research, and enterprise AI workflows.

The quick deploy app is based on [The Littlest JupyterHub](https://tljh.jupyter.org/en/latest/index.html#the-littlest-jupyterhub).

## Get started
To reach the Jupyter Hub template page, click click either the small, medium or large instance of Jupyter Hub. This will give you some good default settings but you can fully customise your deployment at the next step.

VM configuration
A GPU is automatically selected by clicking small, medium or large, however you can choose a different GPU or even multiple GPUs for your deployment. The default disk size is set between 100-200GB which should be enough for most users. However, if you have a very large dataset to deploy on the machine you may need to increase the size.

Having a large number of users may require larger system memory and vCPU allocations. [Read this](https://tljh.jupyter.org/en/latest/howto/admin/resource-estimation.html) for more information.

## Using JupyterHub
When you deploy the VM you will be shown the VM information page. Find the public IP address and paste it into your browser using **http** (**https** is not supported) e.g. `http://192.2.3.4`
![jupyterhub-login](@site/static/img/jupyterhub-login.png)

Use the username `admin` and create a password to sign in. The first user to sign in will have an account created for them and become the administrator.

Go to **File > Hub Control Panel** to open the hub control panel. Click **Admin** to show the admin view.
![jupyterhub-admin](@site/static/img/jupyterhub-admin.png)

Click **Add Users** to add a list of users, each username should be on a new line.
![jupyterhub-add-users](@site/static/img/jupyterhub-add-users.png)

Users can now sign in and create their own password.
![jupyterhub-users-list](@site/static/img/jupyterhub-users-list.png)

There are more options for creating accounts and authentication [here](https://tljh.jupyter.org/en/latest/howto/index.html#authentication).

### Installing packages
Conda, pip and apt packages can be install for all users via the terminal, please follow [this guide](https://tljh.jupyter.org/en/latest/howto/user-env/user-environment.html) carefully.

### Adding data and sharing it
You can add data to JupyterHub and share it with your users by following [this guide](https://tljh.jupyter.org/en/latest/howto/content/add-data.html).

## 🎓Want to learn more?

You can learn more about this by [joining our Discord](https://discord.com/invite/t397SKqf4u) or [Telegram](https://t.me/cudostelegram).