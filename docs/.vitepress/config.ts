import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Kient',
  description: 'A TypeScript-First Client Library for Kick.com',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
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
        {
          text: 'Essentials',
          items: [
            { text: 'Response Instances', link: '/guide/response-instance' },
            { text: 'Authentication', link: '/guide/authentication' }
          ]
        }
      ],
      '/reference': [
        {
          text: 'Instances',
          items: [
            { text: 'ChannelInstance', link: '/reference/channel-instance' },
            { text: 'LivestreamInstance', link: '/reference/livestream-instance' }
          ]
        },
        {
          text: 'Reference',
          items: [
            { text: 'Kient', link: '/reference/kient' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zSoulweaver/kient' },
    ],
  },
})
