import type { Kient } from 'kient'
import type { APIResponse } from '../../util/api-response'
import { User, type UserData } from '../../structures/user'

export async function getUsersByID(kient: Kient, ids: number[] = []) {
	const params = new URLSearchParams()
	for (const id of ids) {
		params.append('id', id.toString())
	}

	const response = await kient._apiClient.fetch<APIResponse<UserData[]>>(`/users?${params}`)

	const userInstances = []
	for (const userData of response.data) {
		const category = new User(kient, userData)
		userInstances.push(category)
	}

	return userInstances
}
