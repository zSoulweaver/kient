import { defineConfig } from 'vitepress'
import typedocSidebar from '../typedoc/typedoc-sidebar.json'

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
      { text: 'TypeDoc', link: '/typedoc/' },
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
            { text: 'Authentication', link: '/guide/authentication' },
            { text: 'Events', link: '/guide/events' },
          ],
        },
      ],
      '/reference': [
        {
          text: 'Endpoints',
          items: [
            { text: 'Authentication', link: '/reference/authentication-endpoint' },
            { text: 'Channels', link: '/reference/channel-endpoint' },
            { text: 'Chat', link: '/reference/chat-endpoint' },
            { text: 'Clips', link: '/reference/clip-endpoint' },
          ],
        },
        {
          text: 'Sockets',
          items: [
            { text: 'Chatroom', link: '/reference/socket/chatroom' },
            { text: 'Channel', link: '/reference/socket/channel' },
            { text: 'Private Channel', link: '/reference/socket/private-channel' },
            { text: 'Private Chatroom', link: '/reference/socket/private-chatroom' },
            { text: 'Private Livestream', link: '/reference/socket/private-livestream' },
          ],
        },
        {
          text: 'Instances',
          items: [
            { text: 'Channel', link: '/reference/channel-instance' },
            { text: 'Livestream', link: '/reference/livestream-instance' },
            { text: 'Chat Message', link: '/reference/chat-message-instance' },
          ],
        },
        {
          text: 'Reference',
          items: [
            { text: 'Kient', link: '/reference/kient' },
          ],
        },
      ],
      '/typedoc': typedocSidebar,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zSoulweaver/kient' },
    ],
  },
})
