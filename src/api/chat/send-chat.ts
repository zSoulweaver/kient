import type { Kient } from 'kient'
import type { APIResponse } from '../../util/api-response'
import { Chat, type ChatData } from '../../structures/chat'

interface SendBotChatParams {
	message: string
	type: 'bot'
}

interface SendUserChatParams {
	message: string
	type: 'user'
	/**
	 * The target channel's user ID to send the message to
	 */
	userId: number
}

export type SendChatParams = SendUserChatParams | SendBotChatParams

export async function sendChat(kient: Kient, params: SendChatParams) {
	const requestParams: {
		content: string
		type: 'user' | 'bot'
		broadcaster_user_id?: number
	} = {
		content: params.message,
		type: params.type,
	}

	if (params.type === 'user') {
		requestParams.broadcaster_user_id = params.userId
	}

	const response = await kient._apiClient.fetch<APIResponse<ChatData>>('/chat', {
		method: 'POST',
		body: JSON.stringify(requestParams),
	})

	const chat = new Chat(kient, response.data)
	return chat
}
