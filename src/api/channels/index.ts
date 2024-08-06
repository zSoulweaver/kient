import { APIBase } from '../api-base'
import { getChannel } from './get-channel'
import { getChatroom } from './get-chatroom'
import { getClips } from './get-clip'
import { getPanels } from './get-panels'
import { getSocials } from './get-socials'

/**
 * Description placeholder
 *
 * @group APIs
 */
export class ChannelsAPI extends APIBase {
	/**
	 * Returns channel and user information of the specified channel
	 *
	 * @param {string} slugOrId Accepts either a channel slug, i.e `slug` or, an id such as `channel_ULID`
	 */
	get(slugOrId: string) {
		return getChannel(this.kient, slugOrId)
	}

	/**
	 * Returns a channel's chatroom details
	 *
	 * @param {string} slugOrId Accepts either a channel slug, i.e `slug` or, an id such as `channel_ULID`
	 */
	chatroom(slugOrId: string) {
		return getChatroom(this.kient, slugOrId)
	}

	/**
	 * Returns up to 20 of a channel's most recent clips over the last 24 hours
	 *
	 * @param {string} slugOrId Accepts either a channel slug, i.e `slug` or, an id such as `channel_ULID`
	 */
	clips(slugOrId: string) {
		return getClips(this.kient, slugOrId)
	}

	/**
	 * Returns a channel's bio/about page panels
	 *
	 * @param {string} slugOrId Accepts either a channel slug, i.e `slug` or, an id such as `channel_ULID`
	 */
	panels(slugOrId: string) {
		return getPanels(this.kient, slugOrId)
	}

	/**
	 * Returns a channel's social media links
	 *
	 * @param {string} slugOrId Accepts either a channel slug, i.e `slug` or, an id such as `channel_ULID`
	 */
	socials(slugOrId: string) {
		return getSocials(this.kient, slugOrId)
	}
}
