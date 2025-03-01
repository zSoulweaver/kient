import destr from 'destr'
import type { Kient } from '../kient'
import { EventBase, type WebhookEvent } from './base-event'
import { ChatUser, type ChatUserData } from './chat-user'
import { flatten } from '../util/flatten'

export interface ChannelSubscriptionEventData {
	broadcaster: ChatUserData
	subscriber: ChatUserData
	duration: number
	created_at: string
}

export class ChannelSubscription extends EventBase {
	/**
	 * The user that has been subscribed to
	 */

	broadcaster: ChatUser

	/**
	 * The user that has followed the broadcaster
	 */
	subscriber: ChatUser

	/**
	 * How many months they subscribed for consecutively
	 */
	duration: number

	/**
	 * The date the user had subscribed to the channel
	 */
	createdAt: Date

	/** @internal */
	constructor(kient: Kient, data: WebhookEvent) {
		super(kient, data)

		const eventBody = destr<ChannelSubscriptionEventData>(data.body)

		this.broadcaster = new ChatUser(kient, ChatUser.constructChatUser(eventBody.broadcaster))
		this.subscriber = new ChatUser(kient, ChatUser.constructChatUser(eventBody.subscriber))
		this.duration = eventBody.duration
		this.createdAt = new Date(eventBody.created_at)
	}

	toJSON() {
		return flatten(this)
	}
}
