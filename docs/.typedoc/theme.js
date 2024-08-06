import { MarkdownTheme, MarkdownThemeContext } from 'typedoc-plugin-markdown'
import { sources } from './context/sources.js'

/**
 * @param {import('typedoc-plugin-markdown').MarkdownApplication} app
 */
export function load(app) {
	app.renderer.defineTheme('kientTheme', KientTheme)
}

class KientTheme extends MarkdownTheme {
	getRenderContext(page) {
		return new KientThemeContext(this, page, this.application.options)
	}
}
class KientThemeContext extends MarkdownThemeContext {
	templates = {
		...this.templates,
	}

	partials = {
		...this.partials,
		sources: (model, options) => sources(model, options),
	}

	helpers = {
		...this.helpers,
	}
}
