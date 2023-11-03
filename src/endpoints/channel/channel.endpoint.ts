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
   * Returns the chatroom bans on specified channel
   *
   * @param {string} channel The channel you want to retreive bans from
   * @returns GetBansResponse
   */
  public async getBans(channel: string) {
    const bans = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}/bans` })
    // const bans = '[{"banned_user":{"id":1244928,"username":"BrittanyCorp"},"banned_by":{"id":2808896,"username":"Soulweaver"},"ban":{"reason":"No reason provided","banned_at":"2023-04-10T05:21:32Z","permanent":true,"expires_at":"0001-01-01T00:00:00Z"}},{"banned_user":{"id":26799,"username":"JaredFPS"},"banned_by":{"id":2808896,"username":"Soulweaver"},"ban":{"reason":"No reason provided","banned_at":"2023-04-10T05:21:27Z","permanent":true,"expires_at":"0001-01-01T00:00:00Z"}},{"banned_user":{"id":421914,"username":"Heelmike"},"banned_by":{"id":2808896,"username":"Soulweaver"},"ban":{"reason":"No reason provided","banned_at":"2023-04-10T05:21:19Z","permanent":true,"expires_at":"0001-01-01T00:00:00Z"}},{"banned_user":{"id":59035,"username":"hayden"},"banned_by":{"id":2982550,"username":"kickerbotdev"},"ban":{"reason":"No reason provided","banned_at":"2023-04-10T05:21:07Z","permanent":true,"expires_at":"0001-01-01T00:00:00Z"}},{"banned_user":{"id":121057,"username":"Social"},"banned_by":{"id":2982550,"username":"kickerbotdev"},"ban":{"reason":"No reason provided","banned_at":"2023-04-10T05:21:04Z","permanent":true,"expires_at":"0001-01-01T00:00:00Z"}},{"banned_user":{"id":93713,"username":"Zee"},"banned_by":{"id":2982550,"username":"kickerbotdev"},"ban":{"reason":"No reason provided","banned_at":"2023-04-10T05:20:56Z","permanent":true,"expires_at":"0001-01-01T00:00:00Z"}},{"banned_user":{"id":78345,"username":"Suspendas"},"banned_by":{"id":2982550,"username":"kickerbotdev"},"ban":{"reason":"No reason provided","banned_at":"2023-04-10T05:20:52Z","permanent":true,"expires_at":"0001-01-01T00:00:00Z"}},{"banned_user":{"id":31101,"username":"duhfero"},"banned_by":{"id":2982550,"username":"kickerbotdev"},"ban":{"reason":"No reason provided","banned_at":"2023-04-10T05:20:46Z","permanent":true,"expires_at":"0001-01-01T00:00:00Z"}},{"banned_user":{"id":1404378,"username":"Jugito"},"banned_by":{"id":2982550,"username":"kickerbotdev"},"ban":{"reason":"No reason provided","banned_at":"2023-04-10T05:20:37Z","permanent":true,"expires_at":"0001-01-01T00:00:00Z"}},{"banned_user":{"id":240480,"username":"trainwreckstv4fake"},"banned_by":{"id":2982550,"username":"kickerbotdev"},"ban":{"reason":"No reason provided","banned_at":"2023-04-10T05:20:32Z","permanent":true,"expires_at":"0001-01-01T00:00:00Z"}},{"banned_user":{"id":1823122,"username":"Destiny"},"banned_by":{"id":2982550,"username":"kickerbotdev"},"ban":{"reason":"No reason provided","banned_at":"2023-04-10T05:20:18Z","permanent":true,"expires_at":"0001-01-01T00:00:00Z"}},{"banned_user":{"id":23980,"username":"test"},"banned_by":{"id":2808896,"username":"Soulweaver"},"ban":{"reason":"test reason","banned_at":"2023-04-10T04:35:23Z","permanent":true,"expires_at":"0001-01-01T00:00:00Z"}}]'
    // return deserialize<GetBansResponse>(JSON.parse(bans.))
    return bans.body
  }

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
