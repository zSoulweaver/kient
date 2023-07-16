import { deserialize } from '@deepkit/type'
import { ApiEndpoint } from '../../client/api-endpoint'
import type { GetBansResponse } from './dto/get-bans.response'

/**
 * API methods for dealing with channels.
 * @endpoint
 * @class ChannelEndpoint
 */
export class ChannelEndpoint extends ApiEndpoint {
  /**
   * Returns the chatroom bans on specified channel
   *
   * @version API v2
   * @param {string} channel The channel you want to retreive bans from
   * @returns GetBansResponse
   */
  public async getBans(channel: string) {
    const bans = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}/bans` })
    return deserialize<GetBansResponse>(JSON.parse(bans))
  }
}
