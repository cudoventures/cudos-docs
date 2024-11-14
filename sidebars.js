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
        'legacy',
      ],
    },
  ],
  nodeSidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        'node/overview/understanding-nodes',
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
  ],

  buildSidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        'build/overview/setup-rust',
      ]
    },
    {
      type: 'category',
      label: 'Smart Contracts',
      items: [
        'build/smart-contracts/contract-basics',
        'build/smart-contracts/contract-deployment',
        'build/smart-contracts/contract-execution',
        'build/smart-contracts/contract-messages',
        'build/smart-contracts/contract-state',
        'build/smart-contracts/contract-entrypoints',
      ],
    },
  ],

  learnSidebar: [
    {
      type: 'category',
      collapsed: false,
      label: 'Concepts',
      items: [
        'learn/concepts/token-types',
        'learn/concepts/transactions',
        'learn/concepts/cryptography',
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
            'cudos-intercloud/usage/via-user-interface/private-networks',
          ]
        },
        'cudos-intercloud/usage/interact-via-cli',
      ],
    },
    'cudos-intercloud/chains-currencies',
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
