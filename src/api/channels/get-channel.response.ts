// biome-ignore lint/style/useImportType: deepkit/type
import { JSONObject } from '../../util/json-object.type'

export interface ChannelResponse {
	account: {
		user: JSONObject
		channel: JSONObject
	}
}
