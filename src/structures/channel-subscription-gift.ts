import destr from 'destr'
import type { Kient } from '../kient'
import { EventBase, type WebhookEvent } from './base-event'
import { ChatUser, type ChatUserData } from './chat-user'

export interface ChannelSubscriptionGiftEventData {
	broadcaster: ChatUserData
	gifter: ChatUserData
	giftees: ChatUserData[]
	created_at: string
}

export class ChannelSubscriptionGift extends EventBase {
	/**
	 * The user that has been subscribed to
	 */

	broadcaster: ChatUser

	/**
	 * The user that has gifted subscriptions
	 */
	gifter?: ChatUser

	/**
	 * An array of users that received a subscription
	 */
	giftees: ChatUser[]

	/**
	 * The date the user gifted subscriptions
	 */
	createdAt: Date

	/** @internal */
	constructor(kient: Kient, data: WebhookEvent) {
		super(kient, data)

		const eventBody = destr<ChannelSubscriptionGiftEventData>(data.body)

		this.broadcaster = new ChatUser(kient, eventBody.broadcaster)
		if (!eventBody.gifter.is_anonymous) {
			this.gifter = new ChatUser(kient, eventBody.gifter)
		}
		const gifteeInstances = []
		for (const giftee of eventBody.giftees) {
			const gifteeInstance = new ChatUser(kient, giftee)
			gifteeInstances.push(gifteeInstance)
		}
		this.giftees = gifteeInstances
		this.createdAt = new Date(eventBody.created_at)
	}
}
