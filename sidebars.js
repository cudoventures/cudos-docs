module.exports = {
  nodeSidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        'node/overview/introduction',
        'node/overview/understanding-nodes'
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'node/security/key-management',
        'node/security/sentry-node-arch'
      ],
    },
    {
      type: 'category',
      label: 'Prerequisites',
      items: [
        'node/prerequisites/hw-req',
        'node/prerequisites/build-envt',
        'node/prerequisites/stake-req'
      ],
    },
    {
      type: 'category',
      label: 'Run a node',
      items: [
        'node/run-node/full-node',
        {
          type: 'category',
          label: 'Run a validator node',
          items: ['node/run-node/validator-node-1','node/run-node/validator-node-2', 'node/run-node/how-to'],
        },
        'node/run-node/check-sync',
      ],
    },
  ],

  buildSidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        'build/intro',
        'build/setup-rust'
      ],
    },
    {
      type: 'category',
      label: 'Smart Contracts',
      items: [
        'build/contract-basics',
      ],
    },
    {
      type: 'category',
      label: 'Build dApp',
      items: [
        'build/dapp-structure',
        'build/simple-dapp',
        'build/dapp-no-docker'
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      items: [
        'build/install-blast',
        'build/blast-init'
      ],
    },
  ],

  governanceSidebar: [
    {
      type: 'category',
      label: 'Tokens & Governance',
      items: [
        'governance/tokens',
        'governance/governance',
        'governance/buy-tokens',
      ],
    },
  ]
};
