import { APIBase } from '../api-base'
import { getEventSubscriptions } from './get-events'
import { subscribeToEvent, type EventSubscriptionParams } from './subscribe'
import { unsubscribeFromEvents } from './unsubscribe'
/**
 * Description placeholder
 *
 * @group APIs
 */
export class EventAPI extends APIBase {
	/**
	 * Returns an array of events that are currently subscribed to
	 */
	getSubscriptions() {
		return getEventSubscriptions(this.kient)
	}

	/**
	 * Subscribes to a specific event and returns details about subscription
	 */
	subscribe(params: EventSubscriptionParams) {
		return subscribeToEvent(this.kient, params)
	}

	/**
	 * Unsubscribes to an array of subscription IDs
	 */
	unsubscribe(ids: string[]) {
		return unsubscribeFromEvents(this.kient, ids)
	}
}
