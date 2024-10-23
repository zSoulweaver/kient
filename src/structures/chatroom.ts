// biome-ignore lint/style/useImportType: deepkit/type
import { Group, serialize } from '@deepkit/type'
import type { Kient } from '../kient'

/**
 * Data structure of a channel's chatroom
 *
 * @group API Structures
 */
export class Chatroom {
	/** @internal */
	constructor(
		/** @internal */
		public kient: Kient & Group<'exclude'>,

		public id: string,
		public channel_id: string,
	) {}

	toJSON() {
		return serialize<Chatroom>(this, { groupsExclude: ['exclude'] })
	}
}
