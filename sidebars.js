const welcomeItems = [
  'welcome',
  'asi-cloud/introduction/overview',
  'asi-cloud/introduction/getting-started',
  'asi-cloud/referral-system',
  'asi-cloud/discounts-and-bonuses',
];

const supportCategory = {
  type: 'category',
  collapsed: true,
  label: 'Support',
  items: [
    'asi-cloud/support/general-support',
    'asi-cloud/support/faqs',
  ],
};

const serverlessInferenceCategory = {
  type: 'category',
  collapsed: false,
  label: 'Serverless Inference',
  items: [
    'asi-cloud/inference/quickstart',
    'asi-cloud/inference/models',
    'asi-cloud/inference/speech',
    {
      type: 'category',
      collapsed: true,
      label: 'Tutorials',
      items: [
        'asi-cloud/inference/tutorials/tutorials-overview',
        'asi-cloud/inference/tutorials/chat-completions',
        'asi-cloud/inference/tutorials/structured-output',
      ],
    },
  ],
};

const deployInfrastructureCategory = {
  type: 'category',
  collapsed: true,
  label: 'Deploy Infrastructure',
  items: [
    'asi-cloud/usage/creating-an-ssh-key',
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
      ],
    },
    'asi-cloud/usage/via-user-interface/private-networks',
    'asi-cloud/usage/interact-via-cli',
  ],
};

const yourAccountCategory = {
  type: 'category',
  collapsed: true,
  label: 'Your Account',
  items: [
    'asi-cloud/profile/profile-overview',
    'asi-cloud/profile/settings',
    'asi-cloud/profile/ssh',
    'asi-cloud/profile/api-keys',
    'asi-cloud/profile/profile-discounts',
    'asi-cloud/profile/messages',
  ],
};

const billingCategory = {
  type: 'category',
  collapsed: true,
  label: 'Billing',
  items: [
    'asi-cloud/usage/via-user-interface/payments',
    'asi-cloud/chains-currencies',
  ],
};

const unifiedSidebar = [
  {
    type: 'category',
    collapsed: false,
    label: 'Welcome',
    items: welcomeItems,
  },
  serverlessInferenceCategory,
  deployInfrastructureCategory,
  yourAccountCategory,
  billingCategory,
  supportCategory,
];

module.exports = {
  welcomeSidebar: unifiedSidebar,
  bccSidebar: unifiedSidebar,
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
};
