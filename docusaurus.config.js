// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require('dotenv').config();
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Collab.Land Documentation',
  tagline:
    'Extend the limits of Collab.Land by contributing apps to the marketplace. Build with the Collab.Land API to create your own custom experiences.',
  url: 'https://dev.collab.land',
  baseUrl: '/',
  onBrokenLinks: 'warn',
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
  scripts: [
    {
      src: 'https://widget.kapa.ai/kapa-widget.bundle.js',
      'data-website-id': '7d20e0b5-97d8-4081-94c5-62ecf4a19bdc',
      'data-project-name': 'Collab.Land',
      'data-project-color': '#9B9EFF',
      'data-project-logo':
        'https://pbs.twimg.com/profile_images/1598394761005727760/5_QGhWNT_400x400.png',
      async: true,
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/abridged/collabland-dev/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/abridged/collabland-dev/tree/master/',
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
    // [
    //   'content-docs',
    //   {
    //     id: 'proposals',
    //     path: 'proposals',
    //     routeBasePath: 'proposals',
    //     sidebarPath: require.resolve('./sidebars-proposals.js'),
    //     // ... other options
    //   },
    // ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-TT8PTWXCK5',
        anonymizeIP: true,
      },
    ],
    [
      'content-docs',
      {
        id: 'help-docs',
        path: 'help-docs',
        routeBasePath: 'help-docs',
        sidebarPath: require.resolve('./sidebars-help-docs.js'),
        // ... other options
      },
    ],
    // [
    //   'content-docs',
    //   {
    //     id: 'tutorials',
    //     path: 'tutorials',
    //     routeBasePath: 'tutorials',
    //     sidebarPath: require.resolve('./sidebars-tutorials.js'),
    //     // ... other options
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Collab.Land Documentation',
        logo: {
          alt: 'Collab.Land',
          src: 'img/logo1.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Developers',
          },
          {
            to: '/help-docs/intro',
            label: 'Members & Admins',
            activeBaseRegex: `/help-docs/`,
            position: 'left',
          },
          {
            to: '/blog',
            label: 'Blog',
            activeBaseRegex: `/blog/`,
            position: 'left',
          },
        ],
      },
      // algolia: {
      //   apiKey: process.env.API_KEY,
      //   indexName: 'collabland',
      //   appId: process.env.APPLICATION_ID,
      //   contextualSearch: true,
      //   // Optional: Algolia search parameters
      //   searchParameters: {},
      // },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorials',
                to: '/docs/tutorials',
              },
              {
                label: 'API docs',
                to: '/docs/downstream-integrations',
              },
              {
                label: 'Contribute',
                to: '/docs/contribute',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/Collab_Land_',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/collabland',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/abridged',
              },
              {
                label: 'Get Support',
                href: 'https://collabland.freshdesk.com/support/tickets/new',
              },
              {
                label: 'Contact Team',
                href: 'https://docs.collab.land/help-docs/FAQ/contact-team',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Abridged, Inc.`,
      },
      prism: {
        theme: darkCodeTheme,
        additionalLanguages: ['solidity'],
      },
    }),
};

module.exports = config;
