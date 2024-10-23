// biome-ignore lint/style/useImportType: deepkit/type
import { Group, serialize } from '@deepkit/type'
import type { Kient } from '../kient'

/**
 * Data structure of a user's channel
 *
 * @group API Structures
 */
export class Channel {
	/** @internal */
	constructor(
		/** @internal */
		public kient: Kient & Group<'exclude'>,

		public id: string,
		public slug: string,
		public banner_picture: string,
		public description: string,
		public followers_count: number,
	) {}

	toJSON() {
		return serialize<Channel>(this, { groupsExclude: ['exclude'] })
	}
}