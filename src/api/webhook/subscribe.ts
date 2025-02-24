import type { Kient } from 'kient'
import type { APIResponse } from '../../util/api-response'
import {
	BasicSubscriptionEvent,
	type BasicSubscriptionEventData,
} from '../../structures/basic-subscription-event'

export interface WebhookSubscriptionParams {
	method: 'webhook'
	events: Array<{
		name: string
		version: number
	}>
}

export async function subscribeToEvent(kient: Kient, param: WebhookSubscriptionParams) {
	const response = await kient._apiClient.fetch<APIResponse<BasicSubscriptionEventData[]>>(
		'/events/subscriptions',
		{
			method: 'POST',
			body: param,
		},
	)

	const basicSubscriptionInstances = []
	for (const subscription of response.data) {
		if (subscription.error) {
			throw new Error(subscription.error)
		}
		const basicSubscription = new BasicSubscriptionEvent(kient, subscription)
		basicSubscriptionInstances.push(basicSubscription)
	}

	return basicSubscriptionInstances
}
