import type { ChangelogConfig } from 'changelogen'

function getDefaultConfig() {
  return <Partial<ChangelogConfig>>{
    excludeAuthors: [''],
  }
}

export default getDefaultConfig
