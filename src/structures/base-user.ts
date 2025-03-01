import type { Kient } from '../kient'
import { flatten, type Flattened } from '../util/flatten'
import { Base } from './base'

/**
 * Data structure of a user account
 *
 * @group API Structures
 */
export class BaseUser extends Base {
	/**
	 * The user's id
	 */
	id: number

	/**
	 * The username of the user
	 */
	username: string

	/**
	 * The user's profile picture url
	 */
	profilePicture: string

	/** @internal */
	constructor(kient: Kient, data: Flattened<BaseUser>) {
		super(kient)

		this.id = data.id
		this.username = data.username
		this.profilePicture = data.profilePicture
	}

	toJSON() {
		return flatten(this)
	}
}
