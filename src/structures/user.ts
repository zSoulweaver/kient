import type { Kient } from '../kient'
import { Base } from './base'

export interface UserData {
	user_id: number
	name: string
	email: string
	profile_picture: string
}

/**
 * Data structure of a user account
 *
 * @group API Structures
 */
export class User extends Base<UserData> {
	/**
	 * The user's id
	 */
	id: number

	/**
	 * The username of the user
	 */
	name: string

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
	constructor(kient: Kient, data: UserData) {
		super(kient, data)

		this.id = data.user_id
		this.name = data.name
		this.email = data.email === '' ? undefined : data.email
		this.profilePicture = data.profile_picture
	}
}
