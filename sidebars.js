/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  // apiSidebar: {
  //   Guides: [
  //     '[Should-This-Move-To-Down-Stream-API-Folder]-api-docs/introduction',
  //     '[Should-This-Move-To-Down-Stream-API-Folder]-api-docs/authentication',
  //     '[Should-This-Move-To-Down-Stream-API-Folder]-api-docs/pagination',
  //     '[Should-This-Move-To-Down-Stream-API-Folder]-api-docs/rate-limiting',
  //     '[Should-This-Move-To-Down-Stream-API-Folder]-api-docs/sdk',
  //   ],
  //   Resources: [
  //     '[Should-This-Move-To-Down-Stream-API-Folder]-api-docs/account',
  //     '[Should-This-Move-To-Down-Stream-API-Folder]-api-docs/community',
  //   ],
  // },
};

module.exports = sidebars;
