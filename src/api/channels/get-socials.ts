import { cast } from '@deepkit/type'
import type { Kient } from '../../kient'
// biome-ignore lint/style/useImportType: deepkit/type
import { Social } from '../../structures/social'
// biome-ignore lint/style/useImportType: deepkit/type
import { CommonAPIResponse, isSuccessResponse } from '../../util/common-api-response'
// biome-ignore lint/style/useImportType: deepkit/type
import { ChannelSocialsResponse } from './get-socials.response'

export async function getSocials(kient: Kient, slugOrId: string) {
	const response = await kient._apiClient.fetch<CommonAPIResponse<ChannelSocialsResponse>>(
		`/channels/${slugOrId}/socials`,
	)

	const typedResponse = cast<CommonAPIResponse<ChannelSocialsResponse>>(response)
	if (!isSuccessResponse(typedResponse)) {
		throw new Error(`Request failed: ${typedResponse.data}`)
	}

	const socials = cast<Social[]>({ ...typedResponse.data.socials, kient })
	return socials
}
