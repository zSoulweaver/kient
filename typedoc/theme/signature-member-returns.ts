import type { DeclarationReflection, SignatureReflection } from 'typedoc'
import type { MarkdownThemeRenderContext } from 'typedoc-plugin-markdown'
import { getReturnType } from './helpers'

export function signatureMemberReturns(context: MarkdownThemeRenderContext, signature: SignatureReflection) {
  const md: string[] = []

  const typeDeclaration = (signature.type as any)
    ?.declaration as DeclarationReflection

  md.push('::: info Returns')
  md.push(getReturnType(context, typeDeclaration, signature.type))
  md.push(':::')

  return md.join('\n\n')
}
