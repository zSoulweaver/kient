import type { Kient } from '../kient'
import { flatten } from '../util/flatten'
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
export class BasicSubscriptionEvent extends Base {
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
		super(kient)

		this.id = data.subscription_id
		this.event = data.name
		this.version = data.version
	}

	unsubscribe() {
		this._kient.api.webhook.unsubscribe([this.id])
	}

	toJSON() {
		return flatten(this)
	}
}
