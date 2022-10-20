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
        'build/setup-rust',
        'build/build-binary-go',
        'build/set-up-envt',
      ]
    },
    {
      type: 'category',
      label: 'Smart Contracts',
      items: [
        'build/contract-basics',
        'build/contract-execution',
        'build/messages',
        'build/state',
        'build/entry-points',
      ],
    },
    {
      type: 'category',
      label: 'Build dApp',
      items: [
        'build/dapp-structure',
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
              }
             ]
    },
    {
      type: 'category',
      label: 'Counter Tutorial',
      items: [
        'build/create-counter',
        'build/blast-tutorial-2',
        'build/blast-connect',
        'build/deploy-counter',
        'build/interact-counter',
        'build/deploy-testnet-mainnet',
      ],
    },
  ],

  learnSidebar: [
          {
            type: 'category',
            label: 'Introduction',
            items: [
              'learn/introduction/overview'
            ],
          },
          {
            type: 'category',
            label: 'Concepts',
            items: [
             'learn/concepts/account',
              'learn/concepts/wallet'
            ],
          },
      ],

  governanceSidebar: [
    {
      type: 'category',
      label: 'Tokens & Governance',
      items: [
        'governance/tokens',
        'governance/buy-tokens',
        'governance/governance',
      ],
    },
  ],
};
