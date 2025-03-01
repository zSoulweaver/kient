import type { Kient } from '../kient'
import { flatten, type Flattened } from '../util/flatten'
import { Base } from './base'

/**
 * Data structure of a user account
 *
 * @group API Structures
 */
export class User extends Base {
	/**
	 * The user's id
	 */
	id: number

	/**
	 * The username of the user
	 */
	username: string

	/**
	 * The user's email address
	 * This will only display if the permissions of the token allow
	 */
	email?: string

	/**
	 * The user's profile picture url
	 */
	profilePicture: string

	/** @internal */
	constructor(kient: Kient, data: Flattened<User>) {
		super(kient)

		this.id = data.id
		this.username = data.username
		this.email = data.email === '' ? undefined : data.email
		this.profilePicture = data.profilePicture
	}

	toJSON() {
		return flatten(this)
	}
}
