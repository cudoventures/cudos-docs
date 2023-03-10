module.exports = {
  nodeSidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        'node/overview/introduction',
        'node/overview/understanding-nodes',
        'node/overview/validating',
        'node/overview/delegators',
        'node/overview/validator-mechanics',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'node/security/key-management',
        'node/security/keys',
        'node/security/sentry-node-arch'
      ],
    },
    {
      type: 'category',
      label: 'Prerequisites',
      items: [
        'node/prerequisites/hw-req',
        {
          type: 'category',
          label: 'Build Environment',
          items: ['node/prerequisites/join-private-testnet', 'node/prerequisites/join-testnet', 'node/prerequisites/join-mainnet',],
        },
        'node/prerequisites/stake-req'
      ],
    },
    {
      type: 'category',
      label: 'Run a node',
      items: [
        'node/run-node/run-full-node',
        {
          type: 'category',
          label: 'Run a validator node',
          items: ['node/run-node/prepare-node-for-validating', 'node/run-node/stake-node', 'node/run-node/start-validator-node'],
        },
        'node/run-node/run-seed-node',
        'node/run-node/run-sentry-node',
        'node/run-node/run-validator-cluster',
        'node/run-node/check-sync',
      ],
    },
    'node/run-node/staking-cli',
    'node/run-node/monitoring',
  ],

  buildSidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        'build/intro',
        'build/overview/setup-rust',
        'build/overview/build-binary-go',
        'build/overview/connect-network',
      ]
    },
    {
      type: 'category',
      label: 'Smart Contracts',
      items: [
        'build/smart-contracts/contract-basics',
        'build/smart-contracts/contract-execution',
        'build/smart-contracts/contract-messages',
        'build/smart-contracts/contract-state',
        'build/smart-contracts/contract-entrypoints',
      ],
    },

    {
      type: 'category',
      label: 'Tools',
      items: [
        {
          type: 'link',
          label: 'RPC API',
          href: '/api/',
        },
        'build/tools/install-blast',
        'build/tools/cli',
      ]
    },
  ],

  learnSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'learn/introduction/overview',
      ],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Concepts',
      items: [
        'learn/concepts/account',
        'learn/concepts/wallet',
        'learn/concepts/token-types',
        'learn/concepts/transactions',
        'learn/concepts/gas',
        'learn/concepts/cryptography',
      ],
    },
  ],
  bccSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'blockchain-compute/introduction/overview',
        'blockchain-compute/introduction/getting-started',
        'blockchain-compute/introduction/airdrop',
      ],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Usage',
      items: [
        
        {
          type: 'category',
          collapsed: false,
          label: 'Via User Interface',
          items: [
            'blockchain-compute/usage/via-user-interface/signing-in',
            'blockchain-compute/usage/via-user-interface/creating-an-ssh-key',
            'blockchain-compute/usage/via-user-interface/creating-a-virtual-machine',
            'blockchain-compute/usage/via-user-interface/viewing-your-machines',
          ]
        },
        {
          type: 'category',
          collapsed: false,
          label: 'Via Command Line',
          items: [
            'blockchain-compute/usage/via-command-line/introduction',
            'blockchain-compute/usage/via-command-line/preparations',
            'blockchain-compute/usage/via-command-line/queries',
            'blockchain-compute/usage/via-command-line/messages',
            'blockchain-compute/usage/via-command-line/data',
            
          ]
        },
      ],
    },
  ],

  governanceSidebar: [
    {
      type: 'category',
      label: 'Tokens & Governance',
      items: [
        'governance/tokens',
        'governance/get-tokens/get-tokens',
        'governance/governance',
        'governance/tokenomics',
      ],
    },
  ],

  pollTutorialSidebar: [
    {
      type: 'category',
      label: 'Simple Poll',
      items: [
        'build/tutorials/simple-poll/build-poll', 'build/tutorials/simple-poll/modify-state', 'build/tutorials/simple-poll/modify-schema', 'build/tutorials/simple-poll/modify-contract', 'build/tutorials/simple-poll/modify-executemsg', 'build/tutorials/simple-poll/execute', 'build/tutorials/simple-poll/querymsg', 'build/tutorials/simple-poll/query',
      ]
    }

  ],

  counterTutorialSidebar: [
    {
      type: 'category',
      label: 'Counter',
      items: [
        'build/tutorials/counter/create-counter', 'build/tutorials/counter/compile-contract', 'build/tutorials/counter/connect-node', 'build/tutorials/counter/deploy-counter', 'build/tutorials/counter/interact-counter'
      ],
    },
  ],

  messagingTutorialSidebar: [
    {
      type: 'category',
      label: 'MessagingdApp',
      items: ['build/tutorials/messaging/create-messaging', 'build/tutorials/messaging/compile-messaging', 'build/tutorials/messaging/connect-messaging-node', 'build/tutorials/messaging/deploy-messaging'],
    },
  ],
};
