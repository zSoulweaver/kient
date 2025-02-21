import { APIBase } from '../api-base'
import { getUsersByID } from './get-user'

/**
 * Description placeholder
 *
 * @group APIs
 */
export class UserAPI extends APIBase {
	/**
	 * Returns an array of users by an array of IDs
	 *
	 * @param ids Accepts an array of user IDs that will be queried for
	 */
	getByIds(ids: number[]) {
		return getUsersByID(this.kient, ids)
	}

	/**
	 * Returns a singular user by ID
	 *
	 * @param id Accepts a singular user ID that will be queried for
	 */
	async getById(id: number) {
		return (await getUsersByID(this.kient, [id]))[0]
	}

	/**
	 * Returns the currently authorised user's details
	 */
	async getAuthorisedUser() {
		return (await getUsersByID(this.kient))[0]
	}
}
