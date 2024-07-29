import { cast } from '@deepkit/type'
import type Kient from 'Kient'
import { ofetch } from 'ofetch'
// biome-ignore lint/style/useImportType: deepkit/type runtime type information
import { CommonAPIResponse, isSuccessResponse } from '../../util/common-api-response'
// biome-ignore lint/style/useImportType: deepkit/type runtime type information
import { ChannelResponse } from './get-channel.response'
// biome-ignore lint/style/useImportType: deepkit/type runtime type information
import { Channel } from '../../structures/channel'
// biome-ignore lint/style/useImportType: deepkit/type runtime type information
import { User } from '../../structures/user'

export async function getChannel(kient: Kient, slugOrId: string) {
	const response = await ofetch<CommonAPIResponse<ChannelResponse>>(
		`https://api.kick.com/private/v1/channels/${slugOrId}`,
	)

	const typedResponse = cast<CommonAPIResponse<ChannelResponse>>(response)
	if (!isSuccessResponse(typedResponse)) {
		throw new Error(`Request failed: ${typedResponse.data}`)
	}

	const channel = cast<Channel>({ ...typedResponse.data.account.channel, kient })
	const user = cast<User>({ ...typedResponse.data.account.user, kient })
	return {
		channel: channel,
		user: user,
	}
}
