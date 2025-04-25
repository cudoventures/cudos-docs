---
title: Jupyter Lab 
id: jupyter-lab
---

JupyterLab is an open-source, web-based interactive development environment (IDE) for data science and scientific computing. It allows users to create and manage Jupyter notebooks, which support live code execution, data visualization, and narrative text using Markdown. JupyterLab is widely used in AI and machine learning for tasks such as data exploration, model training, and result visualization. It supports multiple programming languages, including Python, R, and Julia, making it a flexible tool for AI research and development.

The quick deploy app uses the **jupyter/scipy-notebook** image which includes conda, mamba TeX Live, git, vi, nano, tz data, unzip, scipy, scikit-learn, pandas and matplotlib.

## Get started
To reach the Jupyter Lab template page, click click either the small, medium or large instance of Jupyter Lab. This will give you some good default settings but you can fully customise your deployment at the next step.

## Customise the deployment
You can just choose an id for your App and deploy it. Or you may want to configure th spec of the machine.

## GPU selection
A GPU is automatically selected by clicking small, medium or large, however you can choose a different GPU or even multiple GPUs for your deployment.
## Disk size
The default disk size is set between 100-200GB which should be enough for most users. However, if you have a very large dataset to deploy on the machine you may need to increase the size.

## Using Jupyterlab
When you deploy the VM you will be shown the VM information and management page. .

You will need to use the VM IP address from the VM information page to connect to your JupyterLab.

Open your web browser and go to `https://YOUR-VM-IP:8888` specifically use `https://`. The connection is secured but does not have a certificate so to connect you will need to use https:// and then click advanced and bypass the warning.

### Password!
The notebook is password protected with a default password, please change the password at the bottom of the page where is says: Setup a password.

The default password is simply `password`, enter it along with your new password.

![cic-jupyterlab-login](@site/static/img/jupyterlab-login.png)

## Data transfer
There are a few options for moving data in and out of your notebook.

- You can upload datasets to the cloud or download them using a tool like `wget` or `curl` from the command line.
- You can use HuggingFace to store and download your datasets `pip install datasets`.
- JupyterLab has an upload button in the top right of the IDE, you can also download any files by right-clicking them.
- Using a tool like `scp` to copy files from another cloud machine or your local machine, you will need to have SSH keys set up on your VM. 

Any files copied to the VMs `/cudo` directory will appear in the work directory in JupyterLab.

![cic-jupyterlab-dashboard](@site/static/img/jupyterlab-dashboard.png)

## 🎓Want to learn more?

You can learn more about this by [joining our Discord](https://discord.com/invite/t397SKqf4u) or [Telegram](https://t.me/cudostelegram).