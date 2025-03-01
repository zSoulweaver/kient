import destr from 'destr'
import type { Kient } from '../kient'
import { EventBase, type WebhookEvent } from './base-event'
import { ChatUser, type ChatUserData } from './chat-user'
import { flatten } from '../util/flatten'

export interface ChannelFollowEventData {
	broadcaster: ChatUserData
	follower: ChatUserData
}

export class ChannelFollow extends EventBase {
	/**
	 * The channel that has been followed
	 */
	broadcaster: ChatUser

	/**
	 * The user who followed the channel
	 */
	follower: ChatUser

	/** @internal */
	constructor(kient: Kient, data: WebhookEvent) {
		super(kient, data)

		const eventBody = destr<ChannelFollowEventData>(data.body)

		this.broadcaster = new ChatUser(kient, ChatUser.constructChatUser(eventBody.broadcaster))
		this.follower = new ChatUser(kient, ChatUser.constructChatUser(eventBody.follower))
	}

	toJSON() {
		return flatten(this)
	}
}
