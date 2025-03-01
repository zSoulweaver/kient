import type { Kient } from 'kient'
import { Category } from '../../structures/category'
import type { APIResponse } from '../../util/api-response'

export interface CategoryResponse {
	id: number
	name: string
	thumbnail: string
}

type GetCategoriesResponse = APIResponse<CategoryResponse[]>

export async function getCategoriesByQuery(kient: Kient, query: string) {
	const response = await kient._apiClient.fetch<GetCategoriesResponse>('/categories', {
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
