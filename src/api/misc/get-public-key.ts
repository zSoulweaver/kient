import type { Kient } from 'kient'
import type { APIResponse } from '../../util/api-response'

type GetPublicKeyResponse = APIResponse<{ public_key: string }>

export async function getPublicKey(kient: Kient) {
	const response = await kient._apiClient.fetch<GetPublicKeyResponse>('/public-key')

	return response.data.public_key
}
