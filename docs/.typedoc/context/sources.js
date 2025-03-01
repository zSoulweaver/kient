import { ReflectionKind } from 'typedoc'
// import { link } from 'typedoc-plugin-markdown/dist/libs/markdown/link.js'
// import { escapeChars } from 'typedoc-plugin-markdown/dist/libs/utils/escape-chars.js'


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
				const linkHref = `${escapeChars(source.fileName)}:${source.line}`
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

function escapeChars(chars) {
	return chars
		.replace(/>/g, '\\>')
		.replace(/</g, '\\<')
		.replace(/{/g, '\\{')
		.replace(/}/g, '\\}')
		.replace(/_/g, '\\_')
		.replace(/`/g, '\\`')
		.replace(/\|/g, '\\|')
		.replace(/\[/g, '\\[')
		.replace(/\]/g, '\\]')
		.replace(/\*/g, '\\*')
}

/**
 *  The link element
 * @param label The text to display for the link
 * @param url The url to link to
 */
export function link(label, url) {
	return url ? `[${label.trim()}](${url})` : ''
}

