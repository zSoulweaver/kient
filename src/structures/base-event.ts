import type { Kient } from '../kient'
import { Base } from './base'

export interface WebhookEvent {
	messageId: string
	timestamp: string
	type: string
	version: string
	body: string
}

export class EventBase extends Base<WebhookEvent> {
	/**
	 * The information relating the received event
	 */
	webhookEvent: {
		/**
		 * The event's message id
		 */
		messageId: string

		/**
		 * The event's timestamp
		 */
		timestamp: Date
	}

	/** @internal */
	constructor(kient: Kient, data: WebhookEvent) {
		super(kient, data)

		this.webhookEvent = {
			messageId: data.messageId,
			timestamp: new Date(data.timestamp),
		}
	}
}
