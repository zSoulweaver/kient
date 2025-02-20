// biome-ignore lint/style/useImportType: deepkit/type
import { Group, serialize, type JSONEntity } from '@deepkit/type'
import type { Kient } from '../kient'
import type { KientObject } from '../util/kient-object'

/**
 * Data structure of a stream category
 *
 * @group API Structures
 */
export class Category {
	/** @internal */
	constructor(
		/** @internal */
		public kient: Kient & Group<'exclude'>,

		public id: string,
		public name: string,
		public thumbnail: string,
	) {}

	toJSON(): KientObject<Category> {
		return serialize<Category>(this, { groupsExclude: ['exclude'] })
	}
}
