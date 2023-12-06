import { BaseSocket } from '../socket.base'
import { PrivateChannelEvents } from './private-channel.events'
// eslint-disable-next-line ts/consistent-type-imports
import { FollowerAddedInstance, SubscriptionCreatedInstance, SubscriptionGiftedInstance, SubscriptionRenewedInstance } from './instance'
import { createInstance } from '@/utils/create-instance'
import { Events } from '@/client/kient.events'

type PusherChannelEvents =
  | 'SubscriptionGifted'
  | 'SubscriptionCreated'
  | 'SubscriptionRenewed'
  | 'FollowerAdded'
  | 'FollowerDeleted'

/**
 * @category Sockets
 */
export class PrivateChannelSocket extends BaseSocket {
  public async listen(channelId: string | number) {
    const channel = await this._wsClient.subscribe(`private-channel_${channelId}`)

    channel.bind_global((eventName: PusherChannelEvents, data: any) => {
      switch (eventName) {
        case 'SubscriptionCreated':
          return this._client.emit(PrivateChannelEvents.Subscription, createInstance<SubscriptionCreatedInstance>({ data, _client: this._client }))

        case 'SubscriptionRenewed':
          return this._client.emit(PrivateChannelEvents.SubscriptionRenewed, createInstance<SubscriptionRenewedInstance>({ data, _client: this._client }))

        case 'SubscriptionGifted':
          return this._client.emit(PrivateChannelEvents.SubscriptionsGifted, createInstance<SubscriptionGiftedInstance>({ data, _client: this._client }))

        case 'FollowerAdded':
          return this._client.emit(PrivateChannelEvents.FollowerAdded, createInstance<FollowerAddedInstance>({ data, _client: this._client }))

        case 'FollowerDeleted':
          return this._client.emit(PrivateChannelEvents.FollowerDeleted, createInstance<FollowerAddedInstance>({ data, _client: this._client }))

        default:
          return this._client.emit(Events.Core.UnknownEvent, { eventName, data })
      }
    })
  }

  public async disconnect(channelId: string | number) {
    await this._wsClient.unsubscribe(`private-chatroom_${channelId}`)
  }
}
