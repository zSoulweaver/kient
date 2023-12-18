import { BaseEndpoint } from '../endpoint.base'
// eslint-disable-next-line ts/consistent-type-imports
import { ChannelInstance, ChatroomSettingsInstance, LeaderboardInstance, LivestreamInstance, PollInstance } from './instance'
import { KientApiError } from '@/errors'
import { createInstance } from '@/utils/create-instance'

/**
 * @category Endpoints
 */
export class ChannelEndpoint extends BaseEndpoint {
  public async getChannel(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}` })
    if (response.status !== 200)
      throw new KientApiError('Failed to get channel information', { cause: response })

    const channelInstance = createInstance<ChannelInstance>({
      data: response.body,
      _client: this._client,
    })
    return channelInstance
  }

  public async getLivestream(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}/livestream` })
    if (response.status !== 200)
      throw new KientApiError('Failed to get channel livestream', { cause: response })

    const livestreamInstance = createInstance<LivestreamInstance>({
      data: (response.body as Record<any, any>).data,
      _client: this._client,
    })
    return livestreamInstance
  }

  public async getLeaderboards(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}/leaderboards` })
    if (response.status !== 200)
      throw new KientApiError('Failed to get channel leaderboards', { cause: response })

    const leaderboardInstance = createInstance<LeaderboardInstance>({
      data: response.body,
      _client: this._client,
    })
    return leaderboardInstance
  }

  public async getChatroomSettings(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}/chatroom` })
    if (response.status !== 200)
      throw new KientApiError('Failed to get channel chatroom settings', { cause: response })

    const chatroomSettingsInstance = createInstance<ChatroomSettingsInstance>({
      data: response.body,
      _client: this._client,
    })
    return chatroomSettingsInstance
  }

  public async getPoll(channel: string) {
    const response = await this._apiClient.callKickApi({ endpoint: `api/v2/channels/${channel}/polls` })
    if (response.status !== 200)
      throw new KientApiError('Failed to get channel\'s current poll', { cause: response })

    const pollInstance = createInstance<PollInstance>({
      data: response.body,
      _client: this._client,
    })
    if (pollInstance.data.status.error)
      throw new KientApiError(pollInstance.data.status, { cause: response })

    return pollInstance
  }
}
