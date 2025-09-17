module.exports = {
    welcomeSidebar: [
    {
      type: 'category',
      label: 'Welcome',
      items: [
        'welcome',
        'asi-cloud/introduction/getting-started',
        'asi-cloud/pricing',
        'asi-cloud/referral-system',
        'asi-cloud/discounts-and-bonuses',
        {
          type: 'category',
          label: 'Support',
          items: [
            'asi-cloud/support/general-support',
            'asi-cloud/support/faqs',
          ],
        },
      ],
    },
  ],
  mergerSidebar: [
    {
      type: 'category',
      label: 'ASI Alliance Merger',
      items: [
        'asi-merge/asi-merge-intro',
        'asi-merge/swap-details',
        'asi-merge/migrate-tokens',
        'asi-merge/manage-native-fet',
        'asi-merge/asi-merger-cex',
        'asi-merge/asi-merge-stats',
        'asi-merge/final-cudos-data',
      ],
    },
  ],
  bccSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'asi-cloud/introduction/overview',
        'asi-cloud/introduction/getting-started',
      ],
    },
    'asi-cloud/pricing',
    {
      type: 'category',
      collapsed: false,
      label: 'Serverless Inference',
      items: [
        'asi-cloud/usage/interact-via-cli',
      ],
    },
        {
      type: 'category',
      collapsed: true,
      label: 'Deploy Infrastructure',
      items: [
        'asi-cloud/usage/creating-an-ssh-key',
        {
          type: 'category',
          collapsed: true,
          label: 'Via User Interface',
          items: [
            'asi-cloud/usage/via-user-interface/creating-a-virtual-machine',
            'asi-cloud/usage/via-user-interface/viewing-your-machines',
            {
              type: 'category',
              collapsed: true,
              label: 'Templates',
              items: [
                'asi-cloud/usage/via-user-interface/templates/templates-overview',
                'asi-cloud/usage/via-user-interface/templates/jupyterhub',
                'asi-cloud/usage/via-user-interface/templates/jupyterlab',
                'asi-cloud/usage/via-user-interface/templates/ollama',
                'asi-cloud/usage/via-user-interface/templates/openmanus',
                'asi-cloud/usage/via-user-interface/templates/dify',
                'asi-cloud/usage/via-user-interface/templates/vllm',
                'asi-cloud/usage/via-user-interface/templates/dedicated-inference-vllm',
                'asi-cloud/usage/via-user-interface/templates/nexus-os',
              ]
            },
            'asi-cloud/usage/via-user-interface/private-networks',
          ]
        },
        'asi-cloud/usage/interact-via-cli',
      ],
    },
    {
      type: 'category',
      collapsed: true,
      label: 'Your Account',
      items: [
            'asi-cloud/usage/via-user-interface/payments',
            'asi-cloud/chains-currencies',
      ],
    },
    {
      type: 'category',
      collapsed: true,
      label: 'Managing Payments',
      items: [
            'asi-cloud/usage/via-user-interface/payments',
            'asi-cloud/chains-currencies',
      ],
    },
    'asi-cloud/models',
    'asi-cloud/referral-system',
    'asi-cloud/discounts-and-bonuses',
    {
      type: 'category',
      label: 'Support',
      items: [
        'asi-cloud/support/general-support',
        'asi-cloud/support/faqs',
      ],
    },
  ],
};
