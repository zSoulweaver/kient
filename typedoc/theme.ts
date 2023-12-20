import type { Application, DeclarationReflection, PageEvent, Reflection, SignatureReflection, SomeType } from 'typedoc'
import { MarkdownTheme, MarkdownThemeRenderContext } from 'typedoc-plugin-markdown'
import { signatureMemberReturns } from './theme/signature-member-returns'
import { sources } from './theme/sources'
import { propertiesTable } from './theme/properties-table'

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
    return signatureMemberReturns(this, signature)
  }

  sources = (reflection: DeclarationReflection | SignatureReflection) => {
    return sources(this, reflection)
  }

  propertiesTable = (props: DeclarationReflection[]) => {
    return propertiesTable(this, props)
  }
}
