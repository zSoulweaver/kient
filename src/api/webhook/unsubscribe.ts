import type { Kient } from 'kient'

export async function unsubscribeFromEvents(kient: Kient, ids: string[]) {
	const params = new URLSearchParams()
	for (const id of ids) {
		params.append('id', id.toString())
	}

	await kient._apiClient.fetch(`/events/subscriptions?${params}`, {
		method: 'DELETE',
	})
}
