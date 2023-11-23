import { BaseInstance } from '@/utils/instance.base'
import { GetChannelResponse } from '../dto/get-channel.response'
import { Kient } from '@/client/kient'
import { cast } from '@deepkit/type'

export class ChannelInstance extends BaseInstance<GetChannelResponse> {
  constructor(data: any, client: Kient) {

    if (data.livestream && Array.isArray(data.livestream.categories)) {
      if (data.livestream.categories.length > 0 &&
          typeof data.livestream.categories[0].description !== 'string') {
        data.livestream.categories[0].description = 'Default category description';
      }
    }

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
