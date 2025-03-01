import type { Kient } from '../kient'
import { Base } from './base'

export interface WebhookEvent {
	messageId: string
	subscriptionId: string
	timestamp: string
	type: string
	version: string
	body: string
}

export class EventBase extends Base {
	/**
	 * The information relating the received event
	 */
	kickEvent: {
		/**
		 * The event's message id
		 */
		messageId: string

		/**
		 * The subscription ID associated with the event
		 */
		subscriptionId: string

		/**
		 * The event's timestamp
		 */
		timestamp: Date
	}

	/** @internal */
	constructor(kient: Kient, data: WebhookEvent) {
		super(kient)

		this.kickEvent = {
			messageId: data.messageId,
			timestamp: new Date(data.timestamp),
			subscriptionId: data.subscriptionId,
		}
	}

	/**
	 * The unsubscribes the client from this subscription type using the associated subscription ID in the event
	 */
	unsubscribe() {
		this._kient.api.event.unsubscribe([this.kickEvent.subscriptionId])
	}
}
