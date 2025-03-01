import type { Kient } from 'kient'
import type { APIResponse } from '../../util/api-response'
import { DetailedEventSubscription } from '../../structures/detailed-event-subscription'

export interface EventSubscriptionResponse {
	app_id: string
	broadcaster_user_id: number
	created_at: string
	event: string
	id: string
	method: string
	updated_at: string
	version: number
}

type GetEventSubscriptionsResponse = APIResponse<EventSubscriptionResponse[]>

export async function getEventSubscriptions(kient: Kient) {
	const response =
		await kient._apiClient.fetch<GetEventSubscriptionsResponse>('/events/subscriptions')

	const subscriptionInstances = []
	for (const subscription of response.data) {
		const subscriptionEvent = new DetailedEventSubscription(kient, {
			id: subscription.id,
			event: subscription.event,
			version: subscription.version,
			appId: subscription.app_id,
			userId: subscription.broadcaster_user_id,
			method: subscription.method,
			createdAt: subscription.created_at,
			updatedAt: subscription.updated_at,
		})
		subscriptionInstances.push(subscriptionEvent)
	}

	return subscriptionInstances
}
