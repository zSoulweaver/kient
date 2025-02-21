import type { Kient } from 'kient'
import { Category, type CategoryData } from '../../structures/category'
import type { APIResponse } from '../../util/api-response'

export async function getCategoriesByQuery(kient: Kient, query: string) {
	const response = await kient._apiClient.fetch<APIResponse<CategoryData[]>>('/categories', {
		query: {
			q: query,
		},
	})

	const categoryInstances = []
	for (const categoryData of response.data) {
		const category = new Category(kient, categoryData)
		categoryInstances.push(category)
	}

	return categoryInstances
}
