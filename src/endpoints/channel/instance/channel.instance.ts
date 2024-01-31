// eslint-disable-next-line ts/consistent-type-imports
import { GetChannelResponse } from '../dto/get-channel.response'
import { BaseInstance } from '@/core/instance.base'

/**
 * @category Instances
 */
export class ChannelInstance extends BaseInstance<GetChannelResponse> {
  public getChatroom() {
    return this.data.chatroom
  }

  public async connectToChatroom() {
    return this._client.ws.chatroom.listen(this.data.chatroom.id)
  }

  public async getLivestream() {
    return this._client.api.channel.getLivestream(this.data.slug)
  }

  public async getLeaderboard() {
    return this._client.api.channel.getLeaderboards(this.data.slug)
  }

  public async getPoll() {
    return this._client.api.channel.getPoll(this.data.slug)
  }
}
