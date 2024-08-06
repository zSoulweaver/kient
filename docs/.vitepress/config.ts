import { defineConfig } from 'vitepress'
// @ts-expect-error vite will import json
import typedocSidebar from '../typedoc/typedoc-sidebar.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Kient',
	description: 'Typescript first API wrapper for Kick.com',
	cleanUrls: true,
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Examples', link: '/markdown-examples' },
			{ text: 'API Reference', link: '/typedoc/' },
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
				text: 'API Reference',
				items: typedocSidebar,
			},
		],

		socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
		outline: [2, 3],
	},
})
