import type { Kient } from 'kient'
import type { APIResponse } from '../../util/api-response'
import { SubscriptionEvent, type SubscriptionEventData } from '../../structures/subscription-event'

export async function getEventSubscriptions(kient: Kient) {
	const response =
		await kient._apiClient.fetch<APIResponse<SubscriptionEventData[]>>('/events/subscriptions')

	const subscriptionInstances = []
	for (const subscription of response.data) {
		const subscriptionEvent = new SubscriptionEvent(kient, subscription)
		subscriptionInstances.push(subscriptionEvent)
	}

	return subscriptionInstances
}
