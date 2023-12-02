import { BaseSocket } from '../socket.base'
import { Events } from '../ws.events'
import { FollowerAddedInstance } from './instance/follower-added.instance'
import { SubscriptionCreatedInstance } from './instance/subscription-created.instance'
import { SubscriptionGiftedInstance } from './instance/subscription-gifted.instance'
import { SubscriptionRenewedInstance } from './instance/subscription-renewed.instance'
import { PrivateChannelEvents } from './private-channel.events'

type PusherChannelEvents =
  | 'SubscriptionGifted'
  | 'SubscriptionCreated'
  | 'SubscriptionRenewed'
  | 'FollowerAdded'
  | 'FollowerDeleted'

export class PrivateChannelSocket extends BaseSocket {
  public async listen(channelId: string | number) {
    const channel = await this._wsClient.subscribe(`private-channel_${channelId}`)

    channel.bind_global((eventName: PusherChannelEvents, data: any) => {
      switch (eventName) {
        case 'SubscriptionCreated':
          return this._client.emit(PrivateChannelEvents.Subscription, new SubscriptionCreatedInstance(data, this._client))

        case 'SubscriptionRenewed':
          return this._client.emit(PrivateChannelEvents.SubscriptionRenewed, new SubscriptionRenewedInstance(data, this._client))

        case 'SubscriptionGifted':
          return this._client.emit(PrivateChannelEvents.SubscriptionsGifted, new SubscriptionGiftedInstance(data, this._client))

        case 'FollowerAdded':
          return this._client.emit(PrivateChannelEvents.FollowerAdded, new FollowerAddedInstance(data, this._client))

        case 'FollowerDeleted':
          return this._client.emit(PrivateChannelEvents.FollowerDeleted, new FollowerAddedInstance(data, this._client))

        default:
          return this._client.emit(Events.Core.UnknownEvent, { eventName, data })
      }
    })
  }

  public async disconnect(channelId: string | number) {
    await this._wsClient.unsubscribe(`private-chatroom_${channelId}`)
  }
}
