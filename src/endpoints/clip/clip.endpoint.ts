import { cast } from '@deepkit/type'
import { BaseEndpoint } from '../endpoint.base'
// eslint-disable-next-line ts/consistent-type-imports
import { DownloadClipResponse } from './dto/download-clip.response'
// eslint-disable-next-line ts/consistent-type-imports
import { GetClipResponse } from './dto/get-clip.response'
import { KientApiError } from '@/errors'

/**
 * @category Endpoints
 */

export class ClipEndpoint extends BaseEndpoint {
  public async getClip(clipId: string) {
    const response = await this._apiClient.callKickApi({
      endpoint: `api/v2/clips/${clipId}`,
      method: 'get',
    })
    if (response.status !== 200)
      throw new KientApiError('Failed to get clip information', { cause: response })

    return cast<GetClipResponse>(response.body)
  }

  public async downloadClip(clipId: string) {
    this.checkAuthenticated()

    const response = await this._apiClient.callKickApi({
      endpoint: `api/v2/clips/${clipId}/download`,
      method: 'get',
    })
    if (response.status !== 200)
      throw new KientApiError('Failed to get clip', { cause: response })

    const body = cast<DownloadClipResponse>(response.body)

    if (!body.url || (Array.isArray(body.url) && body.url.length === 0))
      throw new KientApiError('Clip Not Found', { cause: response })

    return body
  }
}
