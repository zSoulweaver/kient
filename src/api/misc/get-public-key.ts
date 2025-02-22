import type { Kient } from 'kient'
import type { APIResponse } from '../../util/api-response'
import type { PublicKey } from '../../structures/public-key'

export async function getPublicKey(kient: Kient) {
	const response = await kient._apiClient.fetch<APIResponse<PublicKey>>('/public-key')

	return response.data.public_key
}
