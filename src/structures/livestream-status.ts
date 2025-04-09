import destr from 'destr'
import type { Kient } from '../kient'
import { EventBase, type WebhookEvent } from './base-event'
import { ChatUser, type ChatUserData } from './chat-user'
import { flatten } from '../util/flatten'

export interface LivestreamStatusEventData {
	broadcaster: ChatUserData
	is_live: boolean
	title: string
	started_at: string
	ended_at?: string
}

export class LivestreamStatus extends EventBase {
	/**
	 * The broadcaster's details
	 */
	broadcaster: ChatUser

	/**
	 * The live state of the broadcaster
	 */
	isLive: boolean

	/**
	 * The title of the livestream
	 */
	title: string

	/**
	 * The date the livestream had stated
	 */
	startedAt: Date

	/**
	 * The date the livestream had ended
	 */
	endedDate?: Date

	/** @internal */
	constructor(kient: Kient, data: WebhookEvent) {
		super(kient, data)

		const eventBody = destr<LivestreamStatusEventData>(data.body)

		this.broadcaster = new ChatUser(kient, ChatUser.constructChatUser(eventBody.broadcaster))
		this.isLive = eventBody.is_live
		this.title = eventBody.title
		this.startedAt = new Date(eventBody.started_at)
		if (eventBody.ended_at) {
			this.endedDate = new Date(eventBody.ended_at)
		}
	}

	toJSON() {
		return flatten(this)
	}
}
