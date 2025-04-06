import type { Kient } from 'kient'
import type { APIResponse } from '../../util/api-response'
import { EventSubscription } from '../../structures/event-subscription'

export interface EventSubscriptionParams {
	method: 'webhook'
	broadcaster_user_id?: number
	events: Array<{
		name: string
		version: number
	}>
}

export interface EventSubscriptionResponse {
	subscription_id: string
	name: string
	version: number
	error: string
}

type SubscribeEventResponse = APIResponse<EventSubscriptionResponse[]>

export async function subscribeToEvent(kient: Kient, param: EventSubscriptionParams) {
	const response = await kient._apiClient.fetch<SubscribeEventResponse>('/events/subscriptions', {
		method: 'POST',
		body: param,
	})

	const basicSubscriptionInstances = []
	for (const subscription of response.data) {
		if (subscription.error) {
			throw new Error(subscription.error)
		}
		const basicSubscription = new EventSubscription(kient, {
			id: subscription.subscription_id,
			event: subscription.name,
			version: subscription.version,
		})
		basicSubscriptionInstances.push(basicSubscription)
	}

	return basicSubscriptionInstances
}
