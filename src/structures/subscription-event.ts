import type { Kient } from '../kient'
import { Base } from './base'

export interface SubscriptionEventData {
	app_id: string
	broadcaster_user_id: number
	created_at: string
	event: string
	id: string
	method: string
	updated_at: string
	version: number
}

/**
 * Data structure of a subscription event
 *
 * @group API Structures
 */
export class SubscriptionEvent extends Base<SubscriptionEventData> {
	/**
	 * The subscriptions's ID
	 */
	id: string

	/**
	 * The subscriptions's associated application ID
	 */
	appId: string

	/**
	 * The subscriptions's event name
	 */
	event: string

	/**
	 * The subscriptions's event version number
	 */
	version: number

	/**
	 * The subscriptions's associated user ID
	 */
	userId: number

	/**
	 * The subscriptions's transit method
	 */
	method: string

	/**
	 * The date the subscription was started
	 */
	createdAt: Date

	/**
	 * The date the subscription was last updated
	 */
	updatedAt: Date

	/** @internal */
	constructor(kient: Kient, data: SubscriptionEventData) {
		super(kient, data)

		this.id = data.id
		this.appId = data.app_id
		this.event = data.event
		this.version = data.version
		this.userId = data.broadcaster_user_id
		this.method = data.method
		this.createdAt = new Date(data.created_at)
		this.updatedAt = new Date(data.updated_at)
	}

	unsubscribe() {
		this.kient.api.webhook.unsubscribe([this.id])
	}
}
