import { BaseSocket } from '../socket.base'
import { FollowerAddedInstance } from './instance/follower-added.instance'
import { SubscriptionCreatedInstance } from './instance/subscription-created.instance'
import { SubscriptionGiftedInstance } from './instance/subscription-gifted.instance'
import { SubscriptionRenewedInstance } from './instance/subscription-renewed.instance'

type ChannelEvents =
  | 'SubscriptionGifted'
  | 'SubscriptionCreated'
  | 'SubscriptionRenewed'
  | 'FollowerAdded'
  | 'FollowerDeleted'

export class PrivateChannelSocket extends BaseSocket {
  public async listen(channelId: string | number) {
    const channel = await this._wsClient.subscribe(`private-channel_${channelId}`)

    channel.bind_global((eventName: ChannelEvents, data: any) => {
      switch (eventName) {
        case 'SubscriptionGifted':
          return this._client.emit('onSubscriptionGifted', new SubscriptionGiftedInstance(data, this._client))

        case 'SubscriptionCreated':
          return this._client.emit('onSubscriptionCreated', new SubscriptionCreatedInstance(data, this._client))

        case 'SubscriptionRenewed':
          return this._client.emit('onSubscriptionRenewed', new SubscriptionRenewedInstance(data, this._client))

        case 'FollowerAdded':
          return this._client.emit('onFollowerAdded', new FollowerAddedInstance(data, this._client))

        case 'FollowerDeleted':
          return this._client.emit('onFollowerDeleted', new FollowerAddedInstance(data, this._client))

        default:
          return this._client.emit('UnknownEvent', { eventName, data })
      }
    })
  }

  public async disconnect(channelId: string | number) {
    await this._wsClient.unsubscribe(`private-chatroom_${channelId}`)
  }
}
