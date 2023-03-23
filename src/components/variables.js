import React from 'react';
import CodeBlock from '@theme/CodeBlock';

const envVars = {
  RPC_NODE: "https://rpc.cudos.org:443",
  CHAIN_ID: "cudos-1",
  GAS: "auto",
  GAS_PRICES: "5000000000000acudos",
  GAS_ADJUSTMENT: "1.3",
  KEYRING: "os",
  CBC_ADDRESS: "cudos1gn59sajfpqdlzxwmnnl69r7k2rxdt52l0nwwgalaa8nn2h8vrjzss2gz08",
};


const MainnetVarsSh = () => {
  const code =
`# environment variables for mainnet
export RPC_NODE=${envVars.RPC_NODE}
export CHAIN_ID=${envVars.CHAIN_ID}
export GAS=${envVars.GAS}
export GAS_PRICES=${envVars.GAS_PRICES}
export GAS_ADJUSTMENT=${envVars.GAS_ADJUSTMENT}
export KEYRING=${envVars.KEYRING}
# contract address for cudos blockchain compute:
export CBC_ADDRESS=${envVars.CBC_ADDRESS}

# the TX_FLAGS variables combines a number of the above variables
export TX_FLAGS="--node=$RPC_NODE --gas=$GAS --gas-adjustment=$GAS_ADJUSTMENT --gas-prices=$GAS_PRICES --chain-id=$CHAIN_ID --keyring-backend=$KEYRING"
`;
  return (
    <CodeBlock className="language-bash">
      {code}
    </CodeBlock>
  );
}

export default MainnetVarsSh;

