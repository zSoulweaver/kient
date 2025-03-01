import type { Kient } from '../kient'
import { flatten, type Flattened } from '../util/flatten'
import { EventSubscription } from './event-subscription'

type DetailedEventSubscriptionParams = Omit<
	Flattened<DetailedEventSubscription>,
	'createdAt' | 'updatedAt'
> & {
	createdAt: string
	updatedAt: string
}

/**
 * Data structure of a subscription event
 *
 * @group API Structures
 */
export class DetailedEventSubscription extends EventSubscription {
	/**
	 * The subscriptions's associated application ID
	 */
	appId: string

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
	constructor(kient: Kient, data: DetailedEventSubscriptionParams) {
		super(kient, data)

		this.appId = data.appId
		this.userId = data.userId
		this.method = data.method
		this.createdAt = new Date(data.createdAt)
		this.updatedAt = new Date(data.updatedAt)
	}

	unsubscribe() {
		this._kient.api.event.unsubscribe([this.id])
	}

	toJSON() {
		return flatten(this)
	}
}
