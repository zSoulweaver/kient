import { BaseSocket } from '../socket.base'
import type { ChannelBaseInstance } from '../channel/channel-base.instance'
import { PrivateChannelEvents } from './private-channel.events'
// eslint-disable-next-line ts/consistent-type-imports
import { FollowerAddedInstance, SubscriptionCreatedInstance, SubscriptionGiftedInstance, SubscriptionRenewedInstance } from './instance'
import { createInstance } from '@/utils/create-instance'
import { Events } from '@/kient.events'

type PusherChannelEvents =
  | 'SubscriptionGifted'
  | 'SubscriptionCreated'
  | 'SubscriptionRenewed'
  | 'FollowerAdded'
  | 'FollowerDeleted'

/**
 * Uses the `private-channel_${channelId}` Pusher channel. Contains events directly related to the channel, e.g, subscriptions, subscription renewals, followers, etc.
 *
 * Full list of events listed on {@link PrivateChannelEventEmitters}.
 *
 * @category Sockets
 */
export class PrivateChannelSocket extends BaseSocket {
  public async listen(channelId: string | number) {
    const channel = await this._wsClient.subscribe(`private-channel_${channelId}`)

    channel.bind_global((eventName: PusherChannelEvents, data: any) => {
      const instanceData: ChannelBaseInstance = {
        data,
        _client: this._client,
        channelId: `${channelId}`,
      }

      switch (eventName) {
        case 'SubscriptionCreated':
          return this._client.emit(PrivateChannelEvents.Subscription, createInstance<SubscriptionCreatedInstance>(instanceData))

        case 'SubscriptionRenewed':
          return this._client.emit(PrivateChannelEvents.SubscriptionRenewed, createInstance<SubscriptionRenewedInstance>(instanceData))

        case 'SubscriptionGifted':
          return this._client.emit(PrivateChannelEvents.SubscriptionsGifted, createInstance<SubscriptionGiftedInstance>(instanceData))

        case 'FollowerAdded':
          return this._client.emit(PrivateChannelEvents.FollowerAdded, createInstance<FollowerAddedInstance>(instanceData))

        case 'FollowerDeleted':
          return this._client.emit(PrivateChannelEvents.FollowerDeleted, createInstance<FollowerAddedInstance>(instanceData))

        default:
          return this._client.emit(Events.Core.UnknownEvent, { eventName, data })
      }
    })
  }

  public async disconnect(channelId: string | number) {
    await this._wsClient.unsubscribe(`private-chatroom_${channelId}`)
  }
}
