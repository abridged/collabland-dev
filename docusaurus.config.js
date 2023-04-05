// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require('dotenv').config();
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Collab.Land Documentation',
  tagline:
    'Extend the limits of Collab.Land by contributing apps to the marketplace. Build with the Collab.Land API to create your own custom experiences.',
  url: 'https://dev.collab.land',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Abridged", // Usually your GitHub org/user name.
  projectName: "CollabLand", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/abridged/collabland-dev/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/abridged/collabland-dev/tree/master/',

        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
    [
      "redocusaurus",
      {
        // debug: Boolean(process.env.DEBUG || process.env.CI),
        specs: [
          {
            spec: "https://api.collab.land/openapi.yaml",
            route: "/apis/",
          },
        ],
        theme: {
          primaryColor: "#1890ff",
        },
      },
    ],
  ],

  plugins: [
    [
      "content-docs",
      {
        id: "proposals",
        path: "proposals",
        routeBasePath: "proposals",
        sidebarPath: require.resolve("./sidebars-proposals.js"),
        // ... other options
      },
    ],
    [
      "content-docs",
      {
        id: "tutorials",
        path: "tutorials",
        routeBasePath: "tutorials",
        sidebarPath: require.resolve("./sidebars-tutorials.js"),
        // ... other options
      },
    ],
  ],
  // themes: ["@docusaurus/theme-search-algolia"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      navbar: {
        title: "Collab.Land Documentation",
        logo: {
          alt: "Collab.Land",
          src: "img/logo1.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            to: "/tutorials/introduction",
            label: "Tutorials",
            activeBaseRegex: `/tutorials/`,
            position: "left",
          },
          // {
          //   to: '/internal-docs/introduction',
          //   label: 'Internal Docs',
          //   activeBaseRegex: `/internal-docs/`,
          //   position: 'left',
          // },
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
      algolia: {
        apiKey: process.env.API_KEY,
        indexName: 'collabland',
        appId: process.env.APPLICATION_ID,
        contextualSearch: true,
        // Optional: Algolia search parameters
        searchParameters: {},

        //... other Algolia params
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorials",
                to: "/docs/intro",
              },
              {
                label: "API docs",
                to: "/apis",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Support",
                href: "https://collabland.freshdesk.com/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Collab_Land_",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/abridged",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Abridged, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: "TVKR0A2115",

      //   // Public API key: it is safe to commit it
      //   apiKey: "777320452e70344bf0ee62ccd2de1012",

      //   indexName: "dev_collabland",

      //   // Optional: see doc section below
      //   contextualSearch: true,

      //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //   externalUrlRegex: "external\\.com|domain\\.com",

      //   // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      //   replaceSearchResultPathname: {
      //     from: "/docs/", // or as RegExp: /\/docs\//
      //     to: "/",
      //   },

      //   // Optional: Algolia search parameters
      //   searchParameters: {},

      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: "search",

      //   //... other Algolia params
      // },
    }),
};

module.exports = config;
