import * as path from 'node:path'
import * as fs from 'node:fs'
import { FrontmatterEvent } from 'typedoc-plugin-frontmatter'
import type { Application, DeclarationReflection } from 'typedoc'
import { PageEvent } from 'typedoc'
import type { MarkdownRendererEvent, NavigationItem } from 'typedoc-plugin-markdown'

export function load(app: Application) {
  const outlines: string[] = []

  app.renderer.on(
    FrontmatterEvent.PREPARE_FRONTMATTER,
    (event: FrontmatterEvent) => {
      if (event.frontmatter.outline) {
        outlines.push(event.page.model.url!)
        if (event.frontmatter.outline !== 'deep')
          event.frontmatter.outline = JSON.parse(event.frontmatter.outline)
      }
    },
  )

  app.renderer.on(PageEvent.END, (page: PageEvent<DeclarationReflection>) => {
    if (page.contents && outlines.includes(page.model.url!) && page.contents.includes('## Outline')) {
      const startIndex = page.contents.indexOf('## Outline')
      const nextHeadingIndex = page.contents.indexOf('##', startIndex + 1)

      page.contents = nextHeadingIndex !== -1
        ? page.contents.substring(0, startIndex) + page.contents.substring(nextHeadingIndex)
        : page.contents.substring(0, startIndex)
    }
  })

  app.renderer.postRenderAsyncJobs.push(
    // @ts-expect-error typedoc-plugin-markdown is present
    async (output: MarkdownRendererEvent) => {
      const outDir = app.options.getValue('out')
      const sourceDir = app.options.getValue('docsRoot') as string
      const basePath = path.relative(sourceDir, outDir)
      const sidebarPath = path.resolve(outDir, 'typedoc-sidebar.json')

      const sidebar = output.navigation.map(item => getNavigationItem(item, basePath))

      fs.writeFileSync(sidebarPath, JSON.stringify(sidebar))
    },
  )
}

function getNavigationItem(navigationItem: NavigationItem, basePath: string) {
  const item: any = {
    text: navigationItem.title,
    ...(Boolean(navigationItem.url) && {
      link: `/${basePath}/${navigationItem.url}`,
    }),
    collapsed: true,
    items: navigationItem.children?.map((group) => {
      return getNavigationItem(group, basePath)
    }),
  }
  if (!navigationItem.children)
    delete item.collapsed

  return item
}
