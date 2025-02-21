import { APIBase } from '../api-base'
import { sendChat, type SendChatParams } from './send-chat'

/**
 * Description placeholder
 *
 * @group APIs
 */
export class ChatAPI extends APIBase {
	/**
	 * Send a chat to a channel and returns the status of the message
	 *
	 * @param query Accepts and object of the message and how if it's being sent from a bot account
	 */
	send(params: SendChatParams) {
		return sendChat(this.kient, params)
	}
}
