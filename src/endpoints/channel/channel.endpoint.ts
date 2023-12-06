import { BaseEndpoint } from '../endpoint.base'
import { KientApiError } from '../api.error'
// eslint-disable-next-line ts/consistent-type-imports
import { ChannelInstance, ChatroomSettingsInstance, LeaderboardInstance, LivestreamInstance, PollInstance } from './instance'
import { createInstance } from '@/utils/create-instance'

/**
 * @category Endpoints
 */
export class ChannelEndpoint extends BaseEndpoint {
  public async getChannel(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}` })
    if (response.status !== 200)
      throw new KientApiError({ name: 'SOMETHING_WENT_WRONG', cause: response })

    const channelInstance = createInstance<ChannelInstance>({
      data: response.body,
      _client: this._client,
    })
    return channelInstance
  }

  public async getLivestream(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}/livestream` })
    if (response.status !== 200)
      throw new KientApiError({ name: 'SOMETHING_WENT_WRONG', cause: response })

    const livestreamInstance = createInstance<LivestreamInstance>({
      data: (response.body as Record<any, any>).data,
      _client: this._client,
    })
    return livestreamInstance
  }

  public async getLeaderboards(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}/leaderboards` })
    if (response.status !== 200)
      throw new KientApiError({ name: 'SOMETHING_WENT_WRONG', cause: response })

    const leaderboardInstance = createInstance<LeaderboardInstance>({
      data: response.body,
      _client: this._client,
    })
    return leaderboardInstance
  }

  public async getChatroomSettings(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}/chatroom` })
    if (response.status !== 200)
      throw new KientApiError({ name: 'SOMETHING_WENT_WRONG', cause: response })

    const chatroomSettingsInstance = createInstance<ChatroomSettingsInstance>({
      data: response.body,
      _client: this._client,
    })
    return chatroomSettingsInstance
  }

  public async getPoll(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}/polls` })
    if (response.status !== 200)
      throw new KientApiError({ name: 'SOMETHING_WENT_WRONG', cause: response })

    const pollInstance = createInstance<PollInstance>({
      data: response.body,
      _client: this._client,
    })
    if (pollInstance.data.status.error) {
      throw new KientApiError({
        name: 'SOMETHING_WENT_WRONG',
        message: pollInstance.data.status.message,
        code: pollInstance.data.status.code,
        cause: response,
      })
    }
    return pollInstance
  }
}
