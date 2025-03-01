import destr from 'destr'
import type { Kient } from '../kient'
import { EventBase, type WebhookEvent } from './base-event'
import { ChatUser, type ChatUserData } from './chat-user'
import { flatten } from '../util/flatten'

export interface ChatMessageEventData {
	message_id: string
	broadcaster: ChatUserData
	sender: ChatUserData
	content: string
	emotes: unknown
}

export class ChatMessage extends EventBase {
	/**
	 * The chat messages's ID
	 */
	messageId: string

	/**
	 * The message chatroom's owner's details
	 */
	broadcaster: ChatUser

	/**
	 * The user who sent the chat message
	 */
	sender: ChatUser

	/**
	 * The message content
	 */
	content: string

	/**
	 *  Emotes
	 */
	emotes: unknown

	/** @internal */
	constructor(kient: Kient, data: WebhookEvent) {
		super(kient, data)

		const eventBody = destr<ChatMessageEventData>(data.body)
		this.messageId = eventBody.message_id
		this.broadcaster = new ChatUser(kient, eventBody.broadcaster)
		this.sender = new ChatUser(kient, eventBody.sender)
		this.content = eventBody.content
		this.emotes = eventBody.emotes
	}

	toJSON() {
		return flatten(this)
	}
}
