import { APIBase } from '../api-base'
import { getChannelsByID } from './get-channels'
import { getUsersByID } from './get-user'

/**
 * Description placeholder
 *
 * @group APIs
 */
export class ChannelAPI extends APIBase {
	/**
	 * Returns an array of channel by an array of user IDs
	 *
	 * @param ids Accepts an array of user IDs that will be queried for
	 */
	getByIds(ids: number[]) {
		return getChannelsByID(this.kient, ids)
	}

	/**
	 * Returns a singular channel by ID
	 *
	 * @param id Accepts a singular user ID that will be queried for
	 */
	async getById(id: number) {
		return (await getChannelsByID(this.kient, [id]))[0]
	}

	/**
	 * Returns the currently authorised user's channel details
	 */
	async getAuthorisedUser() {
		return (await getChannelsByID(this.kient))[0]
	}
}
