import type { Application, DeclarationReflection, PageEvent, Reflection, SignatureReflection, SomeType } from 'typedoc'
import { MarkdownTheme, MarkdownThemeRenderContext } from 'typedoc-plugin-markdown'

function backTicks(text: string) {
  return /(\`)/g.test(text) ? text.replace(/`/g, '\\`') : `\`${text}\``
}

export function link(label: string, url: string | null) {
  return url ? `[${label}](${url})` : ''
}

export function escapeChars(str: string) {
  return str
    .replace(/>/g, '\\>')
    .replace(/</g, '\\<')
    .replace(/{/g, '\\{')
    .replace(/_/g, '\\_')
    .replace(/`/g, '\\`')
    .replace(/\|/g, '\\|')
    .replace(/\*/g, '\\*')
}

export function load(app: Application) {
  app.renderer.defineTheme('kient-theme', KientTheme)
}

class KientTheme extends MarkdownTheme {
  override getRenderContext(pageEvent: PageEvent<Reflection>) {
    return new KientRenderContext(pageEvent, this.application.options)
  }
}

class KientRenderContext extends MarkdownThemeRenderContext {
  signatureMemberReturns = (signature: SignatureReflection) => {
    const md: string[] = []

    const typeDeclaration = (signature.type as any)
      ?.declaration as DeclarationReflection

    md.push('::: info Returns')
    md.push(getReturnType(this, typeDeclaration, signature.type))
    md.push(':::')

    return md.join('\n\n')
  }

  sources = (reflection: DeclarationReflection | SignatureReflection) => {
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
}

function getReturnType(
  context: MarkdownThemeRenderContext,
  typeDeclaration?: DeclarationReflection,
  type?: SomeType,
) {
  if (typeDeclaration?.children)
    return backTicks('Object')

  if (typeDeclaration?.signatures)
    return backTicks('Function')

  return type ? context.someType(type, true).replace(/\n/g, ' ') : ''
}
