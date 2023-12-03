import * as path from 'node:path'
import * as fs from 'node:fs'

export function load(app) {
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
