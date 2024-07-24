import { getChannel } from './api/channels/get-channel'

export default class Kient {
	api = {
		getChannel: (slugOrId: string) => getChannel(this, slugOrId),
	}
}
