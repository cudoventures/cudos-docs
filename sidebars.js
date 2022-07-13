module.exports = {
  nodeSidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        'node/introduction',
        'node/understanding-nodes'
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
          items: ['node/run-node/validator-node-1',
          'node/run-node/validator-node-2'],
        },
        'node/run-node/check-sync',
      ],
    },
  ],
};