import * as path from 'node:path'
import * as fs from 'node:fs'
import { FrontmatterEvent } from 'typedoc-plugin-frontmatter'
import { PageEvent } from 'typedoc'

export function load(app) {
  const endpoints = []
  const endpointData = []

  app.renderer.on(
    FrontmatterEvent.PREPARE_FRONTMATTER,
    (event) => {
      if (event.frontmatter.endpoint === 0) {
        endpoints.push(event.page.model.url)
        const endpointChilden = event.page.model.children
        const endpointMethods = endpointChilden
          .filter(x => x.kind === 2048)
          .map(({ escapedName: name, anchor }) => ({ name, anchor }))
        endpointData.push({
          url: event.page.model.url,
          endpoints: endpointMethods,
        })
      }
    },
  )

  app.renderer.on(PageEvent.END, (page) => {
    if (page.contents && endpoints.includes(page.model.url)) {
      page.contents = page.contents.replace(/^## Endpoint.*$/gm, '')
    }
  })

  app.renderer.postRenderAsyncJobs.push(
    (output) => {
      const outDir = app.options.getValue('out')
      const sourceDir = app.options.getValue('docsRoot')
      const basePath = path.relative(sourceDir, outDir)
      const sidebarPath = path.resolve(outDir, 'typedoc-sidebar.json')
      const endpointSidebarPath = path.resolve(outDir, 'typedoc-endpoint-sidebar.json')

      const endpointPages = output.navigation.filter(x => endpoints.includes(x.url))
      console.log(output.navigation)
      console.log(endpoints)
      console.log(endpointData)
      const endpointSidebar = endpointPages.map(item => getNavigationItem(item, basePath, endpointData))

      const sidebarPages = output.navigation.filter(x => !endpoints.includes(x.url))
      const sidebar = sidebarPages.map(item => getNavigationItem(item, basePath))

      fs.writeFileSync(endpointSidebarPath, JSON.stringify(endpointSidebar))
      // fs.writeFileSync(sidebarPath, JSON.stringify(sidebar))
    },
  )
}

function getNavigationItem(navigationItem, basePath, endpointData = undefined) {
  const { url, title } = navigationItem
  const data = endpointData?.find(x => x.url === url)

  const items = data?.endpoints.map(({ name: text, anchor }) => ({ text, link: url ? `/${basePath}/${url}#${anchor}` : null }))
  const collapsed = !!data

  return {
    text: title,
    link: url ? `/${basePath}/${url}` : null,
    ...(collapsed && { collapsed }),
    ...(items && items.length > 0 && { items }),
  }
}
