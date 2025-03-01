import type { Kient } from '../kient'
import { flatten, type Flattened } from '../util/flatten'
import { Base } from './base'
import { BaseUser } from './base-user'

/**
 * Data structure of a user account
 *
 * @group API Structures
 */
export class User extends BaseUser {
	/**
	 * The user's email address
	 * This will only display if the permissions of the token allow
	 */
	email?: string

	/** @internal */
	constructor(kient: Kient, data: Flattened<User>) {
		super(kient, data)

		this.email = data.email === '' ? undefined : data.email
	}

	toJSON() {
		return flatten(this)
	}
}
