import type { Kient } from '../kient'
import { Base } from './base'

export interface BasicSubscriptionEventData {
	subscription_id: string
	name: string
	version: number
	error: string
}

/**
 * Data structure of a subscription event
 *
 * @group API Structures
 */
export class BasicSubscriptionEvent extends Base<BasicSubscriptionEventData> {
	/**
	 * The subscriptions's ID
	 */
	id: string

	/**
	 * The subscriptions's event name
	 */
	event: string

	/**
	 * The subscriptions's event version number
	 */
	version: number

	/** @internal */
	constructor(kient: Kient, data: BasicSubscriptionEventData) {
		super(kient, data)

		this.id = data.subscription_id
		this.event = data.name
		this.version = data.version
	}

	unsubscribe() {
		this.kient.api.webhook.unsubscribe([this.id])
	}
}
