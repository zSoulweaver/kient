import { cast } from '@deepkit/type'
import type Kient from 'Kient'
import { ofetch } from 'ofetch'
// biome-ignore lint/style/useImportType: CommonAPIResponse used for deepkit/type runtime type information
import { CommonAPIResponse, isSuccessResponse } from '../../util/common-api-response'
// biome-ignore lint/style/useImportType: CommonAPIResponse used for deepkit/type runtime type information
import { ChannelResponse } from './get-channel.response'

export async function getChannel(kient: Kient, slugOrId: string) {
	const response = await ofetch<CommonAPIResponse<ChannelResponse>>(
		`https://api.kick.com/private/v1/channels/${slugOrId}`,
	)

	const typedResponse = cast<CommonAPIResponse<ChannelResponse>>(response)
	if (!isSuccessResponse(typedResponse)) {
		throw new Error(`Request failed: ${typedResponse.data}`)
	}
	return typedResponse
}
