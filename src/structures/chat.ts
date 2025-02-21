import type { Kient } from '../kient'
import { Base } from './base'

export interface ChatData {
	is_sent: boolean
	message_id: string
}

/**
 * Data structure of a chat message
 *
 * @group API Structures
 */
export class Chat extends Base<ChatData> {
	/**
	 * The id of the sent message
	 */
	id: string

	/**
	 *  A boolean indicating if the message has been sent
	 */
	isSent: boolean

	/** @internal */
	constructor(kient: Kient, data: ChatData) {
		super(kient, data)

		this.id = data.message_id
		this.isSent = data.is_sent
	}
}
