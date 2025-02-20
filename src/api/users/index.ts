import { APIBase } from '../api-base'
import { getUsersByIds } from './get-users'

/**
 * Description placeholder
 *
 * @group APIs
 */
export class UsersAPI extends APIBase {
	/**
	 * Returns an array of users by an array of IDs
	 *
	 * @param {number[]} ids Accepts an user IDs that will be queried for
	 */
	getByIds(ids: number[]) {
		return getUsersByIds(this.kient, ids)
	}

	/**
	 * Returns a singular user by ID
	 *
	 * @param {number} id Accepts a user ID that will be queried for
	 */
	async getById(id: number) {
		return (await getUsersByIds(this.kient, [id]))[0]
	}

	/**
	 * Returns the currently authorised user's details
	 */
	async getAuthorisedUser() {
		return (await getUsersByIds(this.kient))[0]
	}
}
