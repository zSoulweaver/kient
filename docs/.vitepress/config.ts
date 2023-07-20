import { defineConfig } from 'vitepress'
import typedocSidebar from '../reference/typedoc-sidebar.json'
import typedocEndpointSidebar from '../reference/typedoc-endpoint-sidebar.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Kient',
  description: 'Kick.com Client Library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Endpoints', link: typedocEndpointSidebar[0].link },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'What is Kient?', link: '/introduction/what-is-kient' },
          { text: 'Getting Started', link: '/introduction/getting-started' },
        ],
      },
      {
        text: 'Endpoints',
        items: typedocEndpointSidebar,
      },
      {
        text: 'Reference',
        items: typedocSidebar,
        collapsed: true,
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
