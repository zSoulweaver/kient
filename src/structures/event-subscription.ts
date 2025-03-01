import type { Kient } from '../kient'
import { flatten, type Flattened } from '../util/flatten'
import { Base } from './base'

/**
 * Data structure of a subscription event
 *
 * @group API Structures
 */
export class EventSubscription extends Base {
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
	constructor(kient: Kient, data: Flattened<EventSubscription>) {
		super(kient)

		this.id = data.id
		this.event = data.event
		this.version = data.version
	}

	unsubscribe() {
		this._kient.api.event.unsubscribe([this.id])
	}

	toJSON() {
		return flatten(this)
	}
}
