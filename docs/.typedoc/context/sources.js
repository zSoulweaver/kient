import { ReflectionKind } from 'typedoc'
import { heading, link } from 'typedoc-plugin-markdown/dist/libs/markdown/index.js'
import { escapeChars } from 'typedoc-plugin-markdown/dist/libs/utils/index.js'

/**
 * @param {import('typedoc').SignatureReflection} model
 */
export function sources(model) {
	const md = []

	model.sources?.forEach((source, index) => {
		if (index === 0) {
			if (source.url) {
				const linkHref = link(`${escapeChars(source.fileName)}:${source.line}`, source.url)
				if (model.kind === ReflectionKind.Property) {
					md.push(linkHref)
				} else {
					md.push(`<span class="source-link">${linkHref}</span>`)
				}
			} else {
				const linkHref = `escapeChars(source.fileName)}:${source.line}`
				if (model.kind === ReflectionKind.Property) {
					md.push(linkHref)
				} else {
					md.push(`<span class="source-link">${linkHref}</span>`)
				}
			}
		}
	})
	return md.join('\n\n')
}
