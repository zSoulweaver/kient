import type { ChangelogConfig } from 'changelogen'
import { resolve } from 'path'
import { cwd } from 'process'

function getDefaultConfig() {
  return <Partial<ChangelogConfig>>{
    excludeAuthors: ['']
  }
}

export default getDefaultConfig
