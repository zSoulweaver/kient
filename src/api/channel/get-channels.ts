import type { Kient } from 'kient'
import type { APIResponse } from '../../util/api-response'
import { Channel } from '../../structures/channel'

export interface ChannelResponse {
	banner_picture: string
	broadcaster_user_id: string
	category: {
		id: number
		name: string
		thumbnail: string
	}
	channel_description: string
	slug: string
	stream?: {
		key: string
		url: string
	}
	stream_title: string
}

type GetChannelResponse = APIResponse<ChannelResponse[]>

export async function getChannelsByID(kient: Kient, ids: number[] = []) {
	const params = new URLSearchParams()
	for (const id of ids) {
		params.append('broadcaster_user_id', id.toString())
	}

	const response = await kient._apiClient.fetch<GetChannelResponse>(`/channels?${params}`)

	const channelInstances = []
	for (const channelData of response.data) {
		const channel = new Channel(kient, {
			id: channelData.broadcaster_user_id,
			slug: channelData.slug,
			bannerPicture: channelData.banner_picture,
			channelDescription: channelData.channel_description,
			streamTitle: channelData.stream_title,
			category: channelData.category,
			stream: channelData.stream,
		})
		channelInstances.push(channel)
	}

	return channelInstances
}
