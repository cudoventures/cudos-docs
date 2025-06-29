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
        'cudos-intercloud/introduction/overview',
        'cudos-intercloud/introduction/getting-started',
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
            'cudos-intercloud/usage/via-user-interface/signing-in',
            'cudos-intercloud/usage/via-user-interface/creating-an-ssh-key',
            'cudos-intercloud/usage/via-user-interface/creating-a-virtual-machine',
            'cudos-intercloud/usage/via-user-interface/viewing-your-machines',
            'cudos-intercloud/usage/via-user-interface/profile',
            'cudos-intercloud/usage/via-user-interface/payments',
            
            
            {
              type: 'category',
              collapsed: false,
              label: 'Templates',
              items: [
                'cudos-intercloud/usage/via-user-interface/templates/templates-overview',
                'cudos-intercloud/usage/via-user-interface/templates/jupyterhub',
                'cudos-intercloud/usage/via-user-interface/templates/jupyterlab',
                'cudos-intercloud/usage/via-user-interface/templates/ollama',
                'cudos-intercloud/usage/via-user-interface/templates/openmanus',
                'cudos-intercloud/usage/via-user-interface/templates/dify',
                'cudos-intercloud/usage/via-user-interface/templates/vllm',
                'cudos-intercloud/usage/via-user-interface/templates/dedicated-inference-vllm',
                'cudos-intercloud/usage/via-user-interface/templates/nexus-os',
              ]
            },
            'cudos-intercloud/usage/via-user-interface/private-networks',
          ]
        },
        'cudos-intercloud/usage/interact-via-cli',
      ],
    },
    'cudos-intercloud/chains-currencies',
    'cudos-intercloud/referral-system',
    'cudos-intercloud/discounts-and-bonuses',
    {
      type: 'category',
      label: 'Support',
      items: [
        'cudos-intercloud/support/general-support',
        'cudos-intercloud/support/faqs',
      ],
    },
  ],
};
