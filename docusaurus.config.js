// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Collab.Land Developer Portal',
  tagline: 'Empower collaborations for tokenized communities',
  url: 'https://dev.collab.land',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Abridged', // Usually your GitHub org/user name.
  projectName: 'CollabLand', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/abridged/collabland-dev/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/abridged/collabland-dev/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // debug: Boolean(process.env.DEBUG || process.env.CI),
        specs: [
          {
            spec: 'https://api.collab.land/openapi.yaml',
            route: '/apis/',
          },
        ],
        theme: {
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  plugins: [
    [
      'content-docs',
      {
        id: 'proposals',
        path: 'proposals',
        routeBasePath: 'proposals',
        sidebarPath: require.resolve('./sidebars-proposals.js'),
        // ... other options
      },
    ],
    [
      'content-docs',
      {
        id: 'add-a-non-evm-chain',
        path: 'add-a-non-evm-chain',
        routeBasePath: 'add-a-non-evm-chain',
        sidebarPath: require.resolve('./sidebars-add-a-non-evm-chain.js'),
        // ... other options
      }
    ],
    [
      'content-docs',
      {
        id: 'add-a-non-evm-wallet',
        path: 'add-a-non-evm-wallet',
        routeBasePath: 'add-a-non-evm-wallet',
        sidebarPath: require.resolve('./sidebars-add-a-non-evm-wallet.js'),
        // ... other options
      }
    ],
    [
      'content-docs',
      {
        id: 'add-a-platform',
        path: 'add-a-platform',
        routeBasePath: 'add-a-platform',
        sidebarPath: require.resolve('./sidebars-add-a-platform.js'),
        // ... other options
      }
    ],
    [
      'content-docs',
      {
        id: 'add-a-slash-command',
        path: 'add-a-slash-command',
        routeBasePath: 'add-a-slash-command',
        sidebarPath: require.resolve('./sidebars-add-a-slash-command.js'),
        // ... other options
      }
    ],
    [
      'content-docs',
      {
        id: 'add-an-evm-chain',
        path: 'add-an-evm-chain',
        routeBasePath: 'add-an-evm-chain',
        sidebarPath: require.resolve('./sidebars-add-an-evm-chain.js'),
        // ... other options
      }
    ],
    [
      'content-docs',
      {
        id: 'add-an-evm-wallet',
        path: 'add-an-evm-wallet',
        routeBasePath: 'add-an-evm-wallet',
        sidebarPath: require.resolve('./sidebars-add-an-evm-wallet.js'),
        // ... other options
      }
    ],
    [
      'content-docs',
      {
        id: 'use-the-apis',
        path: 'use-the-apis',
        routeBasePath: 'use-the-apis',
        sidebarPath: require.resolve('./sidebars-use-the-apis.js'),
        // ... other options
      }
    ],
    [
      'content-docs',
      {
        id: 'use-the-sdk',
        path: 'use-the-sdk',
        routeBasePath: 'use-the-sdk',
        sidebarPath: require.resolve('./sidebars-use-the-sdk.js'),
        // ... other options
      }
    ],
    [
      'content-docs',
      {
        id: 'doc-personas',
        path: 'doc-personas',
        routeBasePath: 'doc-personas',
        sidebarPath: require.resolve('./sidebars-doc-personas.js'),
        // ... other options
      }
    ],


  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Collab.Land Developer Center',
        logo: {
          alt: 'Collab.Land',
          src: 'img/logo1.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/add-an-evm-chain/introduction',
            label: 'New EVM Chains',
            activeBaseRegex: `/add-an-evm-chain/`,
            position: 'left',
          },
          {
            to: '/add-an-evm-wallet/introduction',
            label: 'New EVM Wallets',
            activeBaseRegex: `/add-an-evm-wallet/`,
            position: 'left',
          },
          {
            to: '/add-a-slash-command/introduction',
            label: 'New Slash Command',
            activeBaseRegex: `/add-a-slash-command/`,
            position: 'left',
          },
          {
            to: '/add-a-platform/introduction',
            label: 'New Platforms',
            activeBaseRegex: `/add-a-platform/`,
            position: 'left',
          },
          {
            to: '/add-a-non-evm-chain/introduction',
            label: 'New Non-EVM Chains',
            activeBaseRegex: `/add-a-non-evm-chain/`,
            position: 'left',
          },
          {
            to: '/add-a-non-evm-wallet/introduction',
            label: 'New Non-EVM Wallets',
            activeBaseRegex: `/add-a-non-evm-wallet/`,
            position: 'left',
          },
          {
            to: '/use-the-sdk/introduction',
            label: 'Use The SDK',
            activeBaseRegex: `/use-the-sdk/`,
            position: 'left',
          },
          {
            to: '/use-the-apis/introduction',
            label: 'Use The APIs',
            activeBaseRegex: `/use-the-apis/`,
            position: 'left',
          },
          {
            to: '/doc-personas/introduction',
            label: 'Doc Personas',
            activeBaseRegex: `/doc-personas/`,
            position: 'left',
          },
          // {
          //   to: '/proposals/intro',
          //   label: 'Proposals',
          //   activeBaseRegex: `/proposals/`,
          //   position: 'left',
          // },
          // {
          //   to: 'apis/',
          //   activeBasePath: 'apis',
          //   label: 'APIs',
          //   position: 'left',
          // },
          // {to: '/blog', label: 'Engineering Blog', position: 'left'},
          // {
          //   href: 'https://github.com/abridged',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorials',
                to: '/docs/intro',
              },
              {
                label: 'API docs',
                to: '/apis',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Support',
                href: 'https://collabland.freshdesk.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Collab_Land_',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/abridged',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Abridged, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
