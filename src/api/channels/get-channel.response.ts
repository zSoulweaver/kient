// biome-ignore lint/style/useImportType: deepkit/type
import { Channel } from '../../structures/channel'
// biome-ignore lint/style/useImportType: deepkit/type
import { User } from '../../structures/user'

export interface ChannelResponse {
	account: {
		user: User
		channel: Channel
	}
}
