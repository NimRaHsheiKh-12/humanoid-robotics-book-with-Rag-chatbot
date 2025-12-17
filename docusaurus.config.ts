import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Agentic AI and Humanoid Robotics',
  tagline: 'Not Just a Book — A Glimpse into the Future',

  future: { v4: true },

  url: 'https://NimRaHsheiKh-12.github.io',
  baseUrl: '/humanoid-robotics-book-with-Rag-chatbot/',

  organizationName: 'NimRaHsheiKh-12',
  projectName: 'humanoid-robotics-book-with-Rag-chatbot',

  trailingSlash: true,
  onBrokenLinks: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl:
            'https://github.com/NimRaHsheiKh-12/humanoid-robotics-book-with-Rag-chatbot/edit/master/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Digital Soul',
      items: [
        {
          type: 'doc',
          docId: 'textbook',
          position: 'left',
          label: 'Textbook',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/NimRaHsheiKh-12/humanoid-robotics-book-with-Rag-chatbot',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}.`,
    },
    colorMode: { respectPrefersColorScheme: true },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
