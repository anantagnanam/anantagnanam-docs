import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ananta Gnanam — Explore the Solar System',
  tagline: 'Knowledge is Infinite.',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  // Production URL
  url: 'https://docs.anantagnanam.com',
  baseUrl: '/',

  // GitHub Pages deployment config
  organizationName: 'anantagnanam', // Usually your GitHub org/user name.
  projectName: 'anantagnanam-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onDuplicateRoutes: 'warn',

  // Markdown behavior — configured via the v4-ready hooks API.
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Link "Edit this page" to the source file on GitHub — a great way
          // to demonstrate version-controlled content authoring.
          editUrl: 'https://github.com/anantagnanam/anantagnanam-docs/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
        },
        // The real Ananta Gnanam blog lives at https://blog.anantagnanam.com
        // so the built-in blog is disabled here.
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: [],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Social / OpenGraph card
    image: 'img/social-card.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'demo-notice',
      content:
        'A <strong>public demo</strong> — see how MDX + GitHub Pages power this learning site → <a href="/demo/how-mdx-works">How This Demo Works</a>',
      backgroundColor: '#0b1220',
      textColor: '#f2e6c9',
      isCloseable: true,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },
    navbar: {
      title: 'Ananta Gnanam',
      logo: {
        alt: 'Ananta Gnanam',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/solar-system/journey-begins', label: 'Explore', position: 'left'},
        {to: '/activities/quiz', label: 'Activities', position: 'left'},
        {to: '/demo/how-mdx-works', label: 'How This Demo Works', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {href: 'https://anantagnanam.com', label: 'Main Website', position: 'right'},
        {href: 'https://blog.anantagnanam.com', label: 'Blog', position: 'right'},
        {href: 'https://github.com/anantagnanam', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Ananta Gnanam',
        src: 'img/logo.svg',
        href: 'https://anantagnanam.com',
        height: 40,
      },
      links: [
        {
          title: 'Explore the Solar System',
          items: [
            {label: 'The Journey Begins', to: '/solar-system/journey-begins'},
            {label: 'Meet the Sun', to: '/solar-system/sun'},
            {label: 'Our Home — Earth', to: '/solar-system/earth'},
            {label: 'Mars — The Red Planet', to: '/solar-system/mars'},
            {label: 'Beyond Neptune', to: '/solar-system/beyond-neptune'},
          ],
        },
        {
          title: 'Activities',
          items: [
            {label: 'Solar System Quiz', to: '/activities/quiz'},
            {label: 'Did You Know?', to: '/activities/did-you-know'},
            {label: 'Compare the Planets', to: '/activities/compare-planets'},
          ],
        },
        {
          title: 'About This Demo',
          items: [
            {label: 'How MDX Powers This Experience', to: '/demo/how-mdx-works'},
            {label: 'Content Authoring Example', to: '/demo/content-authoring'},
            {label: 'Why GitHub Pages Can Be Useful', to: '/demo/github-pages'},
            {label: 'About', to: '/about'},
          ],
        },
        {
          title: 'Ananta Gnanam',
          items: [
            {label: 'Main Website', href: 'https://anantagnanam.com'},
            {label: 'Blog', href: 'https://blog.anantagnanam.com'},
            {label: 'GitHub', href: 'https://github.com/anantagnanam'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ananta Gnanam · Built with Docusaurus · MDX · GitHub Pages`,
    },
    metadata: [
      {
        name: 'description',
        content:
          'Explore the Solar System through stories, interactive lessons, and curiosity-driven learning with Ananta Gnanam.',
      },
      {name: 'keywords', content: 'Ananta Gnanam, solar system, learning, MDX, Docusaurus, GitHub Pages'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'robots', content: 'index, follow'},
    ],
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
