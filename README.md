# Documentation for Cudos Network

This repository contains documentation for Cudos Network, a special purpose network that is part of the Cosmos Ecosystem and built on Tendermint. Here, you'll find high-level and technical information for developers, validators, token holders and community members interested in governance and anyone interested in finding out more about the Cudos Network. 

You are welcome to join the Cudos Community and contribute to the docs and to the Cudos project. 

## About Cudos Docs

Cudos Docs is built using [Docusaurus 2](https://docusaurus.io/), a static website generator.

## How to contribute

- If you're interested in contributing to this repo, feel free to clone the repo, make changes and open a PR.

- Be sure to checkout the `.contributing.md` file before making any changes. (TO BE DONE)

- You can also open an issue.

## Preview changes locally

To preview your changes as you edit the files, you can run a local development server that will serve your website and reflect the latest changes.

```bash

cd my-website
npm run start
```

By default, a browser window opens at http://localhost:3000.

## Search Engine Optimisation (SEO)

1. Check out these resources to help create good titles and descriptions for SEO:

- [Google's recommendation on good titles](https://developers.google.com/search/docs/advanced/appearance/title-link?hl=en)
- [Google's recommendation on good descriptions](https://developers.google.com/search/docs/advanced/appearance/snippet?hl=en)
In general, titles should be between 50 and 60 characters and descriptions should be between 110 and 160 characters.

2. Add SEO guidance to front matter in the markdown file. 

```yaml
---
title: Title for search engines; can be different from the actual heading
description: A short description of this page
image: a thumbnail image to be shown in social media cards
keywords: [keywords, describing, the main topics]
---
```

## Adding Images

Images are stored in `static/img` folder.
Images can be referenced in three different ways: Markdown syntax, CJS require, or ES imports syntax.

1. Markdown Syntax

```
![Active Proposal](@site/static/img/active-proposal.png)
```

2. CommonJS require

```jsx
<img
  src={require('@site/static/img/active-proposal.png').default}
  alt="Active Proposal"
/>
```

3. Import statement

```js
import myImageUrl from '@site/static/img/active-proposal.png';

<img src={myImageUrl} alt="Active Proposal" />;
```

