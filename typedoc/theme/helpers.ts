import { type DeclarationReflection, ReflectionKind, type SomeType } from 'typedoc'
import type { MarkdownThemeRenderContext } from 'typedoc-plugin-markdown'

export function backTicks(text: string) {
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

export const strikeThrough = (content: string) => `~~${content}~~`

export function table(headers: string[], rows: string[][]) {
  return `\n| ${headers.join(' | ')} |\n| ${headers
    .map(() => ':------')
    .join(' | ')} |\n${rows.map(row => `| ${row.join(' | ')} |\n`).join('')}`
}

export function stripLineBreaks(str: string, includeHTML = true) {
  return str
    .replace(/\n(?=(?:[^`]*`[^`]*`)*[^`]*$)/gi, includeHTML ? '<br />' : ' ')
    .replace(/\`\`\`ts/g, '`')
    .replace(/\`\`\`/g, '`')
    .replace(/\n/g, ' ')
}

export function formatTableDescriptionCol(str: string) {
  return str.replace(/\|/g, '\\|')
}

export function getReturnType(
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

export function getModifier(reflection: DeclarationReflection) {
  if (reflection.flags.isAbstract)
    return 'abstract'

  if (reflection.flags.isPrivate)
    return 'private'

  if (reflection.flags.isReadonly)
    return 'readonly'

  if (reflection.flags.isStatic)
    return 'static'

  if (reflection.getSignature)
    return 'get'

  if (reflection.setSignature)
    return 'set'

  return null
}

export function flattenDeclarations(
  props: DeclarationReflection[],
  includeSignatures = false,
) {
  const flattenDeclarations = (current: DeclarationReflection) => {
    return (current.type as any)?.declaration?.children?.reduce(
      (acc: DeclarationReflection[], child: DeclarationReflection) => {
        const childObj = {
          ...child,
          name: `${current.name}.${child.name}`,
        } as DeclarationReflection
        // eslint-disable-next-line ts/no-use-before-define
        return parseDeclarations(childObj, acc)
      },
      [],
    )
  }

  const parseDeclarations = (
    current: DeclarationReflection,
    acc: DeclarationReflection[],
  ) => {
    const shouldFlatten = (current.type as any)?.declaration?.children
    const isAccessor = current.kind === ReflectionKind.Accessor

    if (includeSignatures) {
      if (isAccessor) {
        const accessors: any[] = []
        if (current.getSignature) {
          accessors.push({
            ...current,
            name: `get ${current.name}`,
            type: current.getSignature.type,
            comment: current.getSignature?.comment,
          })
        }
        if (current.setSignature) {
          accessors.push({
            ...current,
            name: `set ${current.name}`,
            type: current.setSignature.type,
            comment: current.setSignature?.comment,
          })
        }
        return [...acc, ...accessors]
      }

      if (current.signatures?.length) {
        const signatures = current.signatures.map((signature) => {
          return {
            ...current,
            name: signature.name,
            type: signature.type,
            comment: signature.comment,
          }
        })
        return [...acc, ...signatures]
      }
    }

    return shouldFlatten
      ? [...acc, current, ...flattenDeclarations(current)]
      : [...acc, current]
  }

  return props.reduce(
    (acc: DeclarationReflection[], current: DeclarationReflection) => parseDeclarations(current, acc),
    [],
  )
}

export function getDeclarationType(declaration: DeclarationReflection) {
  if (declaration.signatures)
    return declaration.signatures[0].type

  if (declaration.getSignature)
    return declaration.getSignature.type

  if (declaration.setSignature)
    return declaration.setSignature.type

  return declaration.type
}
