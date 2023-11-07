import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Kient',
  description: 'A TypeScript-First Client Library for Kick.com',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/what-is-kient' },
      { text: 'Reference', link: '/reference/kient' },
    ],

    sidebar: {
      '/guide': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is Kient?', link: '/guide/what-is-kient' },
            { text: 'Getting Started', link: '/guide/getting-started' },
          ],
        },
      ],
      '/reference': [
        {
          text: 'Reference',
          items: [
            { text: 'Kient', link: '/reference/kient' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
