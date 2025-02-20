import { cast } from '@deepkit/type'
import type { Kient } from 'kient'
// biome-ignore lint/style/useImportType: deepkit/type runtime type information
import { APIResponse } from '../../util/api-response'
// biome-ignore lint/style/useImportType: deepkit/type runtime type information
import { Category } from '../../structures/category'

export async function getCategoriesByQuery(kient: Kient, query: string) {
	const response = await kient._apiClient.fetch<APIResponse<Category[]>>('/categories', {
		query: {
			q: query,
		},
	})

	const typedResponse = cast<APIResponse<Category[]>>(response)

	console.log(response)

	return typedResponse.data
}
