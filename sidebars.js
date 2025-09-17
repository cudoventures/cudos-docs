module.exports = {
  welcomeSidebar: [
    {
      type: 'category',
      label: 'Welcome',
      items: [
        'welcome',
        {
          type: 'category',
          collapsed: false,
          label: 'ASI Alliance Merger',
          items: [
            'asi-merge/asi-merge-intro',
            'asi-merge/swap-details',
            'asi-merge/migrate-tokens',
            'asi-merge/manage-native-fet',
            'asi-merge/asi-merger-cex',
            'asi-merge/asi-merge-stats',
            'asi-merge/final-cudos-data',
          ]
        },
        'stats'
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
    'asi-cloud/models',
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
            'asi-cloud/usage/via-user-interface/signing-in',
            'asi-cloud/usage/via-user-interface/creating-an-ssh-key',
            'asi-cloud/usage/via-user-interface/creating-a-virtual-machine',
            'asi-cloud/usage/via-user-interface/viewing-your-machines',
            'asi-cloud/usage/via-user-interface/profile',
            'asi-cloud/usage/via-user-interface/payments',
            
            
            {
              type: 'category',
              collapsed: false,
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
    'asi-cloud/chains-currencies',
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
