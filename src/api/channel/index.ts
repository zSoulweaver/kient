import { APIBase } from '../api-base'
import { getChannelsByID, getChannelsBySlugs } from './get-channels'

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
	 * Returns an array of channel by an array of channel slugs
	 *
	 * @param slugs Accepts an array of channel slugs that will be queried for
	 */
	getBySlugs(slugs: string[]) {
		return getChannelsBySlugs(this.kient, slugs)
	}

	/**
	 * Returns a singular channel by slug
	 *
	 * @param slug Accepts a singular channel slug that will be queried for
	 */
	async getBySlug(slug: string) {
		return (await getChannelsBySlugs(this.kient, [slug]))[0]
	}

	/**
	 * Returns the currently authorised user's channel details
	 */
	async getAuthorisedUser() {
		return (await getChannelsByID(this.kient))[0]
	}
}
