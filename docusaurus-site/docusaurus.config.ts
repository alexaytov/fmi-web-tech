import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import path from 'path';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Import the helper function to get slides data
const { getSlidesForNavbar } = require('./plugins/reveal-slides-plugin.js');

// Get all slides for navbar dropdown
const docsPath = path.join(__dirname, 'docs');
const slides = getSlidesForNavbar(docsPath);

// Generate navbar items for slides dropdown
const slidesDropdownItems = [
  ...slides.map(slide => ({
    label: `${String(slide.lectureNumber).padStart(2, '0')}. ${slide.lectureTitle}`,
    href: `pathname:///slides/${slide.lectureSlug}/`,
  })),
  {
    type: 'html' as const,
    value: '<hr style="margin: 4px 0;">',
  },
  {
    label: 'Всички презентации →',
    to: '/slides',
  },
];

const config: Config = {
  // TODO: Персонализирайте заглавието на вашия курс
  title: 'Университетски Лекции',
  tagline: 'Шаблон за университетски курсове с Docusaurus',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // TODO: Заменете с вашия GitHub Pages URL
  // Set the production url of your site here
  url: 'https://YOUR_USERNAME.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/YOUR_REPO_NAME/',

  // TODO: Заменете с вашето GitHub потребителско име и име на репозитори
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'YOUR_USERNAME', // Usually your GitHub org/user name.
  projectName: 'YOUR_REPO_NAME', // Usually your repo name.

  onBrokenLinks: 'warn', // Changed to warn for reveal.js slides (generated in postBuild)
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true, // Ensures URLs have trailing slashes (needed for slides/topic-name/)

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // TODO: Заменете с вашето GitHub репозитори
          editUrl:
            'https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/tree/main/docusaurus-site/',
          exclude: ['**/slides.md'],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    './plugins/lectures-plugin.js',
    './plugins/reveal-slides-plugin.js',
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      // TODO: Персонализирайте заглавието в navbar
      title: 'Университетски Лекции',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Лекции',
        },
        {
          type: 'dropdown',
          label: 'Презентации',
          position: 'left',
          items: slidesDropdownItems,
        },
        {
          // TODO: Заменете с вашето GitHub репозитори
          href: 'https://github.com/YOUR_USERNAME/YOUR_REPO_NAME',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          // TODO: Персонализирайте линковете в footer
          title: 'Лекции',
          items: [
            {
              label: 'Въведение',
              to: '/docs/getting-started/lecture',
            },
            {
              label: 'Примерна Тема',
              to: '/docs/sample-topic/lecture',
            },
          ],
        },
        {
          title: 'Ресурси',
          items: [
            {
              // TODO: Добавете линкове към вашия университет
              label: 'Университет',
              href: 'https://example.edu',
            },
            {
              label: 'Moodle',
              href: 'https://moodle.example.edu',
            },
          ],
        },
        {
          title: 'Код',
          items: [
            {
              label: 'GitHub',
              // TODO: Заменете с вашето GitHub репозитори
              href: 'https://github.com/YOUR_USERNAME/YOUR_REPO_NAME',
            },
          ],
        },
      ],
      // TODO: Персонализирайте copyright текста
      copyright: `Copyright © ${new Date().getFullYear()} Вашият Университет. Всички права запазени.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
