// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const math = require('remark-math');
const katex = require('rehype-katex');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to CUDOS Docs',
  tagline: 'Single source of truth for CUDOS products and services',
  url: 'https://docs.cudos.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
 

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Cudos', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        gtag: {
          trackingID: 'G-ZP80QC1C53',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: ({versionDocsDirPath, docPath}) =>
          `https://github.com/CudoVentures/cudos-docs/tree/main/${versionDocsDirPath}/${docPath}`,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
    // Redocusaurus config
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'docs/build/api/openapi.yaml',
            route: '/api',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          // primaryColor: '#1890ff',
          primaryColor: '#6DD0F1',
        },
      },
    ],
  ],
  
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo-dark.png',
          target: '_self',
          width: 150,
          height: 32,
          className: 'custom-navbar-logo-class',
        },
        items: [
              {
                type: 'doc',
                label: '💻 Node',
                docId: 'node/overview/introduction',
                position: "left",
              },  
              {
                type: 'dropdown',
                label: '⚒️ Build',
                position: "left",
                items: 
                [
                  {
                    type: 'doc',
                    label: '🧳 Resources',
                    docId: 'build/intro',
                  },
                  {
                    label: '🚀 Tutorials',
                    to: 'tutorials',
                    },
                ]
              }, 
              {
                type: 'doc',
                label: '📚 Learn',
                docId: 'learn/introduction/overview',
                position: "left",
               },
               {
                type: 'doc',
                label: '🏦 Governance',
                docId: 'governance/tokens',
                position: "left",
              },            
               {
                type: 'doc',
                label: '☁️ CUDOS Intercloud',
                docId: 'cudos-intercloud/introduction/overview',
                position: "left",
              },            
            ],
      },      
      footer: {
        // style: 'dark',
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'About us',
                href: 'https://www.cudos.org/about/',
              },
              {
                label: 'Careers',
                href: 'https://cudoventures.teamtailor.com/',
              },
              {
                label: 'Blog',
                href: 'https://www.cudos.org/blog/',
              },
              {
                label: 'Terms of Service',
                href: 'https://www.cudos.org/terms-and-conditions/',
              },
            ],
          },
          {
            title: 'Developers',
            items: [
              {
                href: 'https://github.com/CudoVentures',
                label: 'Github',
              },
              {
                label: 'Grant Program',
                href: 'https://cudos.foundation/grants/',
              },
              {
                label: 'Cudo Foundation',
                href: 'https://cudos.foundation/about/',
              },
              {
                label: 'Blog',
                href: 'https://www.cudos.org/about/',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/cudostelegram',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/t397SKqf4u',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/CUDOS_',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/cudos',
              }, 
            ],
          },
        ],
        
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
        additionalLanguages: ['rust'],
      },
    }),
};

module.exports = config;
