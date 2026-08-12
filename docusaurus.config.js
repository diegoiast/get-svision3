// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SVision3',
  tagline: 'A C++20 GUI toolkit',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://diegoiast.github.io',
  baseUrl: '/get-svision3/',
  organizationName: 'diegoiast',
  projectName: 'get-svision3',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',

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
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/diegoiast/get-svision3/tree/gh-pages/',
          routeBasePath: 'docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/diegoiast/get-svision3/tree/gh-pages/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/hero.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'SVision3',
        logo: {
          alt: 'SVision3 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/diegoiast/svision3',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Tutorial', to: '/docs/tutorial'},
              {label: 'Declarative API', to: '/docs/declarative'},
              {label: 'Widgets & Modules', to: '/docs/widgets'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Blog', to: '/blog'},
              {label: 'GitHub', href: 'https://github.com/diegoiast/svision3'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Diego Iastrubni. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['cpp', 'cmake', 'bash'],
      },
    }),
};

export default config;
