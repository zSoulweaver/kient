// biome-ignore lint/style/useImportType: deepkit/type
import { serialize, Group } from '@deepkit/type'
import type { Kient } from '../kient'
// biome-ignore lint/style/useImportType: deepkit/type
import { Directory } from './directory'

export class Category {
	constructor(
		public kient: Kient & Group<'exclude'>,

		public id: string,
		public name: string,
		public slug: string,
		public tags: string[],
		public image_url: string,
		public directory: Directory,
		public viewers_count?: number,
	) {
		this.directory.kient = this.kient
	}

	toJSON() {
		return serialize<Category>(this, { groupsExclude: ['exclude'] })
	}
}
