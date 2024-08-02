import { APIBase } from '../api-base'
import { getChannel } from './get-channel'
import { getClips } from './get-clip'

/**
 * Description placeholder
 *
 * @group APIs
 */
export class ChannelsAPI extends APIBase {
	/**
	 * Returns channel and user information of the specified channel
	 *
	 * @param {string} slugOrId Accepts either a channel slug, i.e `xqc` or, an id such as `channel_ULID`
	 */
	get(slugOrId: string) {
		return getChannel(this.kient, slugOrId)
	}

	clips(slugOrId: string) {
		return getClips(this.kient, slugOrId)
	}
}
