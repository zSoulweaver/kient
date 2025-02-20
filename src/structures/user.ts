// biome-ignore lint/style/useImportType: deepkit/type
import { Group, serialize, MapName } from '@deepkit/type'
import type { Kient } from '../kient'
import type { KientObject } from '../util/kient-object'

/**
 * Data structure of a user
 *
 * @group API Structures
 */
export class User {
	/** @internal */
	constructor(
		/** @internal */
		public kient: Kient & Group<'exclude'>,

		public id: string & MapName<'user_id'>,
		public name: string,
		public email: string,
		public profilePicture: string & MapName<'profile_picture'>,
	) {}

	toJSON(): KientObject<User> {
		return serialize<User>(this, { groupsExclude: ['exclude'] })
	}
}
