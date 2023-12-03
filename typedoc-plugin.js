import * as path from 'node:path'
import * as fs from 'node:fs'
import { FrontmatterEvent } from 'typedoc-plugin-frontmatter'
import { PageEvent } from 'typedoc'

export function load(app) {
  const outlines = []

  app.renderer.on(
    FrontmatterEvent.PREPARE_FRONTMATTER,
    (event) => {
      if (event.frontmatter.outline) {
        outlines.push(event.page.model.url)
        if (event.frontmatter.outline !== 'deep')
          event.frontmatter.outline = JSON.parse(event.frontmatter.outline)
      }
    },
  )

  app.renderer.on(PageEvent.END, (page) => {
    if (page.contents && outlines.includes(page.model.url) && page.contents.includes('## Outline')) {
      const startIndex = page.contents.indexOf('## Outline')
      const nextHeadingIndex = page.contents.indexOf('##', startIndex + 1)

      page.contents = nextHeadingIndex !== -1
        ? page.contents.substring(0, startIndex) + page.contents.substring(nextHeadingIndex)
        : page.contents.substring(0, startIndex)
    }
  })

  app.renderer.postRenderAsyncJobs.push(
    (output) => {
      const outDir = app.options.getValue('out')
      const sourceDir = app.options.getValue('docsRoot')
      const basePath = path.relative(sourceDir, outDir)
      const sidebarPath = path.resolve(outDir, 'typedoc-sidebar.json')

      const sidebar = output.navigation.map(item => getNavigationItem(item, basePath))

      fs.writeFileSync(sidebarPath, JSON.stringify(sidebar))
    },
  )
}

function getNavigationItem(navigationItem, basePath) {
  const item = {
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
