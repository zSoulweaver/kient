import { cast } from '@deepkit/type'
import type { GetChannelResponse } from '../dto/get-channel.response'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'

export class ChannelInstance extends BaseInstance<GetChannelResponse> {
  public constructor(data: any, client: Kient) {
    super(cast<GetChannelResponse>(data), client)
  }

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
