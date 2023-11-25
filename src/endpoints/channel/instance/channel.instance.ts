import { cast } from '@deepkit/type'
import type { GetChannelResponse } from '../dto/get-channel.response'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'

export class ChannelInstance extends BaseInstance<GetChannelResponse> {
  constructor(data: any, client: Kient) {
    super(cast<GetChannelResponse>(data), client)
  }

  getChatroom() {
    return this.data.chatroom
  }

  async connectToChatroom() {
    return this._client.ws.chatroom.listen(this.data.chatroom.id)
  }

  async getLivestream() {
    return this._client.api.channel.getLivestream(this.data.slug)
  }

  async getLeaderboard() {
    return this._client.api.channel.getLeaderboards(this.data.slug)
  }

  async getPoll() {
    return this._client.api.channel.getPoll(this.data.slug)
  }
}
