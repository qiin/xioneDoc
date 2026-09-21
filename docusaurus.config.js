// @ts-check
// See: https://docusaurus.io/docs/api/docusaurus-config
import {themes as prismThemes} from 'prism-react-renderer';

/**
 * ============================================================================
 * TODO before going live — search this file for "TODO" and fill these in:
 *   1. `url` / `baseUrl`      — the real domain/path this site is served at
 *   2. `organizationName` / `projectName` — only matter if you use
 *      `npm run deploy` (GitHub Pages); harmless placeholders otherwise
 *   3. navbar `logo.src`      — swap static/img/logo.svg for your own mark
 *   4. footer links + GitHub navbar link — point at your real repo, or
 *      delete the items if the repo stays private
 * ============================================================================
 */

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XiOne 文档',
  tagline: 'AI API 网关的部署、渠道接入与支付配置指南',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  // TODO: replace with your real domain (e.g. https://docs.your-domain.com)
  url: 'https://docs.example.com',
  baseUrl: '/',

  organizationName: 'your-org', // TODO
  projectName: 'xione-docs', // TODO

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // TODO: point at your own repo, or delete `editUrl` to remove the
          // "Edit this page" link entirely.
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: ['@easyops-cn/docusaurus-search-local'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'XiOne',
        logo: {
          alt: 'XiOne Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: '文档',
          },
          {
            // TODO: point back at your actual product site
            href: 'https://your-domain.example',
            label: '返回主站',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {label: '快速开始', to: '/docs/getting-started/intro'},
              {label: '部署方式', to: '/docs/deployment/docker'},
              {label: '支付网关', to: '/docs/payments/overview'},
            ],
          },
          {
            title: '更多',
            items: [
              // TODO: replace with your real repo, or remove this block
              {label: 'GitHub', href: 'https://github.com/your-org/your-repo'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} XiOne. 本文档站点使用 Docusaurus 构建。`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),

};

export default config;
