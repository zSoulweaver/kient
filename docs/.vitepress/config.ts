import { defineConfig } from 'vitepress'
import typedocSidebar from '../reference/typedoc-sidebar.json'
import typedocEndpointSidebar from '../reference/typedoc-endpoint-sidebar.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Kient',
  description: 'Kick.com Client Library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Endpoints', link: typedocEndpointSidebar[0].link },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
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
