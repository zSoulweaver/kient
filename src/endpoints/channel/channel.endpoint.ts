import { BaseEndpoint } from '../endpoint.base'
import { cast } from '@deepkit/type'
import type { GetLeaderboardsResponse } from './dto/get-leaderboards.response'
import type { GetChatroomSettingsResponse } from './dto/get-chatroom-settings.response'
import { GetPollsResponse } from './dto/get-polls.response'
import { ChannelInstance } from './instance/channel.instance'
import { LivestreamInstance } from './instance/livestream.instance'
import { KientApiError } from '../api.error'

export class ChannelEndpoint extends BaseEndpoint {
  public async getChannel(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}` })
    if (response.status !== 200) {
      throw new KientApiError({ name: 'SOMETHING_WENT_WRONG', cause: response })
    }

    const channelInstance = new ChannelInstance(response.body, this._client)
    return channelInstance
  }

  public async getLivestream(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}/livestream` })
    if (response.status !== 200) {
      throw new KientApiError({ name: 'SOMETHING_WENT_WRONG', cause: response })
    }

    const livestreamInstance = new LivestreamInstance((response.body as Record<any, any>).data, this._client)
    return livestreamInstance
  }

  public async getLeaderboards(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}/leaderboards` })
    if (response.status !== 200) {
      throw new KientApiError({ name: 'SOMETHING_WENT_WRONG', cause: response })
    }

    return cast<GetLeaderboardsResponse>(response.body)
  }

  public async getChatroomSettings(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}/chatroom` })
    if (response.status !== 200) {
      throw new KientApiError({ name: 'SOMETHING_WENT_WRONG', cause: response })
    }

    return cast<GetChatroomSettingsResponse>(response.body)
  }

  public async getPoll(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}/polls` })
    if (response.status !== 200) {
      throw new KientApiError({ name: 'SOMETHING_WENT_WRONG', cause: response })
    }

    const deserializedResponse = cast<GetPollsResponse>(response.body)
    if (deserializedResponse.status.error) {
      throw new KientApiError({
        name: 'SOMETHING_WENT_WRONG',
        message: deserializedResponse.status.message,
        code: deserializedResponse.status.code,
        cause: response
      })
    }
    return deserializedResponse
  }
}
