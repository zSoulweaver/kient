import { cast } from '@deepkit/type'
import type { Kient } from 'kient'
import { ofetch } from 'ofetch'
// biome-ignore lint/style/useImportType: deepkit/type runtime type information
import { Chatroom } from '../../structures/chatroom'
// biome-ignore lint/style/useImportType: deepkit/type runtime type information
import { CommonAPIResponse, isSuccessResponse } from '../../util/common-api-response'
// biome-ignore lint/style/useImportType: deepkit/type runtime type information
import { ChannelChatroomResponse } from './get-chatroom.response'

export async function getChatroom(kient: Kient, slugOrId: string) {
	const response = await kient._apiClient.fetch<CommonAPIResponse<ChannelChatroomResponse>>(
		`/channels/${slugOrId}/chatroom`,
	)

	const typedResponse = cast<CommonAPIResponse<ChannelChatroomResponse>>(response)
	if (!isSuccessResponse(typedResponse)) {
		throw new Error(`Request failed: ${typedResponse.data}`)
	}

	const chatroom = cast<Chatroom>({ ...typedResponse.data.chatroom, kient })
	return chatroom
}
