import { cast } from '@deepkit/type'
import type { Kient } from 'kient'
import { ofetch } from 'ofetch'
// biome-ignore lint/style/useImportType: deepkit/type runtime type information
import { Clip } from '../../structures/clip'
// biome-ignore lint/style/useImportType: deepkit/type runtime type information
import { CommonAPIResponse, isSuccessResponse } from '../../util/common-api-response'
// biome-ignore lint/style/useImportType: deepkit/type runtime type information
import { ChannelClipsResponse } from './get-clip.response'

export async function getClips(kient: Kient, slugOrId: string) {
	const response = await kient._apiClient.fetch<CommonAPIResponse<ChannelClipsResponse>>(
		`/channels/${slugOrId}/clips`,
	)

	const typedResponse = cast<CommonAPIResponse<ChannelClipsResponse>>(response)
	if (!isSuccessResponse(typedResponse)) {
		throw new Error(`Request failed: ${typedResponse.data}`)
	}

	const clips = typedResponse.data.clips.map((clip) => {
		return cast<Clip>({ ...clip, kient })
	})
	return clips
}
