import type { Kient } from 'kient'
import type { APIResponse } from '../../util/api-response'
import { User } from '../../structures/user'

export interface UserResponse {
	user_id: number
	name: string
	email: string
	profile_picture: string
}

type GetUsersResponse = APIResponse<UserResponse[]>

export async function getUsersByID(kient: Kient, ids: number[] = []) {
	const params = new URLSearchParams()
	for (const id of ids) {
		params.append('id', id.toString())
	}

	const response = await kient._apiClient.fetch<GetUsersResponse>(`/users?${params}`)

	const userInstances = []
	for (const userData of response.data) {
		const category = new User(kient, {
			id: userData.user_id,
			username: userData.name,
			email: userData.email,
			profilePicture: userData.profile_picture,
		})
		userInstances.push(category)
	}

	return userInstances
}
