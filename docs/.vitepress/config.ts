import { defineConfig } from 'vitepress'
import typedocSidebar from '../typedoc/typedoc-sidebar.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Kient',
	description: "Typescript API wrapper for Kick's API",
	cleanUrls: true,
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/what-is-kient' },
			{ text: 'API Reference', link: '/typedoc/' },
		],

		sidebar: {
			'/guide': [
				{
					text: 'Introduction',
					items: [{ text: 'What is Kient?', link: '/guide/what-is-kient' }],
				},
			],
			'/typedoc': typedocSidebar,
		},

		socialLinks: [{ icon: 'github', link: 'https://github.com/zSoulweaver/kient' }],
		outline: [2, 3],
	},
})
