import { cast } from '@deepkit/type'
import type { Kient } from '../../kient'
// biome-ignore lint/style/useImportType: deepkit/type
import { Panel } from '../../structures/panel'
// biome-ignore lint/style/useImportType: deepkit/type
import { CommonAPIResponse, isSuccessResponse } from '../../util/common-api-response'
// biome-ignore lint/style/useImportType: deepkit/type
import { ChannelPanelsResponse } from './get-panels.response'

export async function getPanels(kient: Kient, slugOrId: string) {
	const response = await kient._apiClient.fetch<CommonAPIResponse<ChannelPanelsResponse>>(
		`/channels/${slugOrId}/panels`,
	)

	const typedResponse = cast<CommonAPIResponse<ChannelPanelsResponse>>(response)
	if (!isSuccessResponse(typedResponse)) {
		throw new Error(`Request failed: ${typedResponse.data}`)
	}

	const panels = cast<Panel[]>({ ...typedResponse.data.panels, kient })
	return panels
}
