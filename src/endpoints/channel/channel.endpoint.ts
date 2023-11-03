import { deserialize } from '@deepkit/type'
import { ApiEndpoint } from '../../client/api-endpoint'
import type { GetChannelResponse } from './dto/get-channel.response'

/**
 * API methods for dealing with channels.
 * @endpoint
 * @class ChannelEndpoint
 */
export class ChannelEndpoint extends ApiEndpoint {
  /**
   * Returns the channel object for V2 api
   *
   * @param {string} channel The channel you want to retreive information for
   * @returns GetChannelResponse
   */
  public async getChannelV2(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}` })
    return deserialize<GetChannelResponse>(response.body)
  }
}
