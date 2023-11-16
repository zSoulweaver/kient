import { BaseEndpoint } from '../endpoint.base'
import { deserialize } from '@deepkit/type'
import type { GetChannelResponse } from './dto/get-channel.response'
import type { GetLivestreamResponse } from './dto/get-livestream.response'
import type { GetLeaderboardsResponse } from './dto/get-leaderboards.response'
import type { GetChatroomSettingsResponse } from './dto/get-chatroom-settings.response'
import { GetPollsResponse } from './dto/get-polls.response'
import { ChannelInstance } from './instance/channel.instance'
import { LivestreamInstance } from './instance/livestream.instance'

export class ChannelEndpoint extends BaseEndpoint {
  public async getChannel(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}` })
    const channelInstance = new ChannelInstance(response.body, this._client)
    return channelInstance
  }

  public async getLivestream(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}/livestream` })
    const livestreamInstance = new LivestreamInstance((response.body as Record<any, any>).data, this._client)
    return livestreamInstance
  }

  public async getLeaderboards(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}/leaderboards` })
    return deserialize<GetLeaderboardsResponse>(response.body)
  }

  public async getChatroomSettings(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}/chatroom` })
    return deserialize<GetChatroomSettingsResponse>(response.body)
  }

  public async getPoll(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}/polls` })
    return deserialize<GetPollsResponse>(response.body)
  }
}
