// biome-ignore lint/style/useImportType: deepkit/type
import { serialize, Group } from '@deepkit/type'
import type { Kient } from '../kient'

/**
 * Data structure of a directory
 *
 * @group API Structures
 */
export class Directory {
	/** @internal */
	constructor(
		/** @internal */
		public kient: Kient & Group<'exclude'>,

		public id: string,
		public name: string,
		public slug: string,
		public image_url?: string,
	) {}

	toJSON() {
		return serialize<Directory>(this, { groupsExclude: ['exclude'] })
	}
}
