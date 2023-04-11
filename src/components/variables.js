import React from 'react';
import CodeBlock from '@theme/CodeBlock';

const docVars = {
  RPC_NODE: "https://rpc.cudos.org:443",
  CHAIN_ID: "cudos-1",
  GAS: "auto",
  GAS_PRICES: "5000000000000acudos",
  GAS_ADJUSTMENT: "1.3",
  KEYRING: "os",
  CBC_ADDRESS: "cudos1gn59sajfpqdlzxwmnnl69r7k2rxdt52l0nwwgalaa8nn2h8vrjzss2gz08",

  RPC_NODE_TN: "https://rpc.testnet.cudos.org:443",
  CHAIN_ID_TN: "cudos-testnet-public-3",
  GAS_TN: "auto",
  GAS_PRICES_TN: "5000000000000acudos",
  GAS_ADJUSTMENT_TN: "1.3",
  KEYRING_TN: "os",
};


export const MainnetVarsSh = () => {
  const code =
    `# environment variables for mainnet
export RPC_NODE=${docVars.RPC_NODE}
export CHAIN_ID=${docVars.CHAIN_ID}
export GAS=${docVars.GAS}
export GAS_PRICES=${docVars.GAS_PRICES}
export GAS_ADJUSTMENT=${docVars.GAS_ADJUSTMENT}
export KEYRING=${docVars.KEYRING}
# contract address for cudos blockchain compute:
export CBC_ADDRESS=${docVars.CBC_ADDRESS}

# the TX_FLAGS variables combines a number of the above variables
export TX_FLAGS="--node=$RPC_NODE --gas=$GAS --gas-adjustment=$GAS_ADJUSTMENT --gas-prices=$GAS_PRICES --chain-id=$CHAIN_ID --keyring-backend=$KEYRING"
`;
  return (
    <CodeBlock className="language-bash">
      {code}
    </CodeBlock>
  );
}

export const TestnetVarsSh = () => {
  const code =
    `# environment variables for testnet
export RPC_NODE_TN=${docVars.RPC_NODE_TN}
export CHAIN_ID_TN=${docVars.CHAIN_ID_TN}
export GAS_TN=${docVars.GAS_TN}
export GAS_PRICES_TN=${docVars.GAS_PRICES_TN}
export GAS_ADJUSTMENT_TN=${docVars.GAS_ADJUSTMENT_TN}
export KEYRING_TN=${docVars.KEYRING_TN}

# the TX_FLAGS variables combines a number of the above variables
export TX_FLAGS_TN="--node=$RPC_NODE_TN --gas=$GAS_TN --gas-adjustment=$GAS_ADJUSTMENT_TN --gas-prices=$GAS_PRICES_TN --chain-id=$CHAIN_ID_TN --keyring-backend=$KEYRING_TN"
`;
  return (
    <CodeBlock className="language-bash">
      {code}
    </CodeBlock>
  );
}

export const VarsSh = () => {
  const code =
    `# environment variables for testnet
export RPC_NODE_TN=${docVars.RPC_NODE_TN}
export CHAIN_ID_TN=${docVars.CHAIN_ID_TN}
export GAS_TN=${docVars.GAS_TN}
export GAS_PRICES_TN=${docVars.GAS_PRICES_TN}
export GAS_ADJUSTMENT_TN=${docVars.GAS_ADJUSTMENT_TN}
export KEYRING_TN=${docVars.KEYRING_TN}

# environment variables for mainnet
export RPC_NODE=${docVars.RPC_NODE}
export CHAIN_ID=${docVars.CHAIN_ID}
export GAS=${docVars.GAS}
export GAS_PRICES=${docVars.GAS_PRICES}
export GAS_ADJUSTMENT=${docVars.GAS_ADJUSTMENT}
export KEYRING=${docVars.KEYRING}
# contract address for cudos blockchain compute:
export CBC_ADDRESS=${docVars.CBC_ADDRESS}

# the TX_FLAGS variables combines a number of the above variables
export TX_FLAGS_TN="--node=$RPC_NODE_TN --gas=$GAS_TN --gas-adjustment=$GAS_ADJUSTMENT_TN --gas-prices=$GAS_PRICES_TN --chain-id=$CHAIN_ID_TN --keyring-backend=$KEYRING_TN"
export TX_FLAGS="--node=$RPC_NODE --gas=$GAS --gas-adjustment=$GAS_ADJUSTMENT --gas-prices=$GAS_PRICES --chain-id=$CHAIN_ID --keyring-backend=$KEYRING"
`;
  return (
    <CodeBlock className="language-bash">
      {code}
    </CodeBlock>
  );
}