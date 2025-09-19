---
title: Quickstart
id: quickstart
---

To start your inference journey with ASI Cloud first you will need to:
- Log into the platform.
- Generate an [LLM API key](/docs/asi-cloud/profile/api-keys).
- Ensure you have balance.
  - To add balance, first you need to make sure you have connected a blockchain wallet in the [identities page](/docs/asi-cloud/profile/identities).
  - After that, you can use that wallet to fund your account using cryptocurrency from the [payments page](/docs/asi-cloud/usage/via-user-interface/payments).
  - There's a free model -- `asi1-mini` -- funded by ASI.

## Base URL and Authentication

- **Base URL**: https://inference.asicloud.cudos.org/v1
- **Auth**: HTTP header `Authorization: Bearer <ASI_API_KEY>`
- **Content-Type**: `application/json`

## Code Examples

Each model card has code examples in Python, curl, Javascript, Go, Rust and Julia.

![model-code](@site/static/img/model-code.png)

## Testing Models

Models can be tested for free in a chat interface  that can be found in any of the model cards.

![model-chat](@site/static/img/asic-chat.png)