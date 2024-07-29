import { APIBase } from '../api-base'
import { getChannel } from './get-channel'

export class ChannelsAPI extends APIBase {
	/**
	 * Returns channel and user information of the specified channel
	 *
	 * @param {string} slugOrId Accepts either a channel slug, i.e `xqc` or, an id such as `channel_ULID`
	 */
	get(slugOrId: string) {
		return getChannel(this.kient, slugOrId)
	}
}
