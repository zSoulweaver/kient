// biome-ignore lint/style/useImportType: deepkit/type
import { serialize, Group } from '@deepkit/type'
import type { Kient } from '../kient'

/**
 * Data structure of a user
 *
 * @group API Structures
 */
export class User {
	constructor(
		public kient: Kient & Group<'exclude'>,

		public id: string,
		public username: string,
		public is_verified: boolean,
		public profile_picture: string,
	) {}

	toJSON() {
		return serialize<User>(this, { groupsExclude: ['exclude'] })
	}
}
