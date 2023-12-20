import type { DeclarationReflection, SignatureReflection } from 'typedoc'
import type { MarkdownThemeRenderContext } from 'typedoc-plugin-markdown'
import { escapeChars, link } from './helpers'

export function sources(context: MarkdownThemeRenderContext, reflection: DeclarationReflection | SignatureReflection) {
  const md: string[] = []

  reflection.sources?.forEach((source, index) => {
    if (index === 0) {
      if (source.url) {
        md.push(
          `<span class="source-link">${link(`${escapeChars(source.fileName)}:${source.line}`, source.url)}</span>`,
        )
      } else {
        md.push(`<span class="source-link">${escapeChars(source.fileName)}:${source.line}</span>`)
      }
    }
  })

  return md.join('\n\n')
}
