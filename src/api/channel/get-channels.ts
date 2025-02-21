import type { Kient } from 'kient'
import type { APIResponse } from '../../util/api-response'
import { Channel, type ChannelData } from '../../structures/channel'

export async function getChannelsByID(kient: Kient, ids: number[] = []) {
	const params = new URLSearchParams()
	for (const id of ids) {
		params.append('broadcaster_user_id', id.toString())
	}

	const response = await kient._apiClient.fetch<APIResponse<ChannelData[]>>(`/channels?${params}`)

	const channelInstances = []
	for (const channelData of response.data) {
		const channel = new Channel(kient, channelData)
		channelInstances.push(channel)
	}

	return channelInstances
}
