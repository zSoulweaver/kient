import { cast } from '@deepkit/type'
import type { Kient } from 'kient'
// biome-ignore lint/style/useImportType: deepkit/type runtime type information
import { APIResponse } from '../../util/api-response'
// biome-ignore lint/style/useImportType: deepkit/type runtime type information
import { User } from '../../structures/user'

export async function getUsersByIds(kient: Kient, ids?: number[]) {
	const params = new URLSearchParams()
	for (const id of ids || []) {
		params.append('id', id.toString())
	}
	const response = await kient._apiClient.fetch<APIResponse<User[]>>(`/users?${params}`)

	const responseKientInjected = response.data.map((user) => ({
		...user,
		kient,
	}))

	const typedResponse = cast<User[]>(responseKientInjected)
	return typedResponse
}
