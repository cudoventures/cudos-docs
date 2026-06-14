// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes: prismThemes} = require("prism-react-renderer");
const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.dracula;

module.exports = async function createConfig() {
  const {default: math} = await import("remark-math");
  const {default: katex} = await import("rehype-katex");

  /** @type {import('@docusaurus/types').Config} */
  const config = {
  title: "Welcome to CUDOS Docs",
  tagline: "Single source of truth for CUDOS products and services",
  url: "https://docs.cudos.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  favicon: "img/favicon.ico",
  clientModules: [require.resolve("./src/clientModules/gtagNoop.js")],
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Cudos", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        gtag: {
          trackingID: "G-ZP80QC1C53",
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/CudoVentures/cudos-docs/tree/main/${versionDocsDirPath}/${docPath}`,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
      },
      navbar: {
        logo: {
          alt: "Site Logo",
          src: "img/ASICloudLogo.svg",
          srcDark: "img/ASICloudLogo-dark.svg",
          target: "_self",
          width: 150,
          height: 32,
          className: "custom-navbar-logo-class",
        },
        items: [
          {
            type: "doc",
            label: "📖 Tutorials",
            docId: "asi-cloud/inference/tutorials/tutorials-overview",
            position: "left",
          },
          {
            type: "doc",
            label: "📊 Ecosystem Statistics",
            docId: "stats",
            position: "left",
          },
          {
            type: "doc",
            docId: "asi-merge/asi-merge-intro",
            position: "left",
            html: '<img src="/img/cudos.svg" alt="Icon" style="height: 20px; margin-right: 8px; vertical-align: middle;" />CUDOS Merger',
          },
        ],
      },
      footer: {
        // style: 'dark',
        copyright: "ASI Alliance Member",
        links: [
          {
            title: "Company",
            items: [
              {
                label: "About us",
                href: "https://www.cudos.org/about/",
              },
              {
                label: "Blog",
                href: "https://www.cudos.org/blog/",
              },
              {
                label: "Terms of Service",
                href: "https://www.cudos.org/terms-and-conditions/",
              },
            ],
          },
          {
            title: "Developers",
            items: [
              {
                href: "https://github.com/CudoVentures",
                label: "Github",
              },
              {
                label: "Blog",
                href: "https://www.cudos.org/about/",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/cudostelegram",
              },
              {
                label: "Discord",
                href: "https://discord.com/invite/t397SKqf4u",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/CUDOS_",
              },
              {
                label: "Medium",
                href: "https://medium.com/cudos",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["rust"],
      },
    }),
  };

  return config;
};
