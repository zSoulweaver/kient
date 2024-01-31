import { BaseSocket } from '../socket.base'
import { ChannelEvents } from './channel.events'
// eslint-disable-next-line ts/consistent-type-imports
import { ChannelSubscriptionInstance, ChatMoveToSupportedChannelInstance, FollowersUpdateInstance, GiftsLeaderboardUpdatedInstance, LuckyUsersWhoGotGiftSubscriptionsInstance, StopStreamBroadcastInstance, StreamerIsLiveInstance } from './instance'
import type { ChannelBaseInstance } from './channel-base.instance'
import { createInstance } from '@/utils/create-instance'
import { Events } from '@/kient.events'

type PusherChannelEvents =
  | 'App\\Events\\FollowersUpdated'
  | 'App\\Events\\ChannelSubscriptionEvent'
  | 'App\\Events\\LuckyUsersWhoGotGiftSubscriptionsEvent'
  | 'App\\Events\\GiftsLeaderboardUpdated'
  | 'App\\Events\\ChatMoveToSupportedChannelEvent'
  | 'App\\Events\\StreamerIsLive'
  | 'App\\Events\\StopStreamBroadcast'
  | 'App\\Events\\ChannelBannedForceRefresh' // May be unused, not sure

/**
 * Uses the `channel.${channelId}` Pusher channel. Contains events directly related to the channel, e.g, followers, subscriptions, etc.
 *
 * Full list of events listed on {@link ChannelEventEmitters}.
 *
 * @category Sockets
 */
export class ChannelSocket extends BaseSocket {
  public async listen(channelId: string | number) {
    const channel = await this._wsClient.subscribe(`channel.${channelId}`)

    channel.bind_global((eventName: PusherChannelEvents, data: any) => {
      const instanceData: ChannelBaseInstance = {
        data,
        _client: this._client,
        channelId: `${channelId}`,
      }

      switch (eventName) {
        case 'App\\Events\\FollowersUpdated':
          return this._client.emit(ChannelEvents.FollowersUpdate, createInstance<FollowersUpdateInstance>(instanceData))

        case 'App\\Events\\ChannelSubscriptionEvent':
          return this._client.emit(ChannelEvents.Subscription, createInstance<ChannelSubscriptionInstance>(instanceData))

        case 'App\\Events\\LuckyUsersWhoGotGiftSubscriptionsEvent':
          return this._client.emit(ChannelEvents.SubscriptionsGifted, createInstance<LuckyUsersWhoGotGiftSubscriptionsInstance>(instanceData))

        case 'App\\Events\\GiftsLeaderboardUpdated':
          return this._client.emit(ChannelEvents.LeaderboardUpdate, createInstance<GiftsLeaderboardUpdatedInstance>(instanceData))

        case 'App\\Events\\ChatMoveToSupportedChannelEvent':
          return this._client.emit(ChannelEvents.StartHost, createInstance<ChatMoveToSupportedChannelInstance>(instanceData))

        case 'App\\Events\\StreamerIsLive':
          return this._client.emit(ChannelEvents.StartStream, createInstance<StreamerIsLiveInstance>(instanceData))

        case 'App\\Events\\StopStreamBroadcast':
          return this._client.emit(ChannelEvents.StopStream, createInstance<StopStreamBroadcastInstance>(instanceData))

        case 'App\\Events\\ChannelBannedForceRefresh':
          return this._client.emit(ChannelEvents.Banned, channelId)

        default:
          return this._client.emit(Events.Core.UnknownEvent, { eventName, data })
      }
    })
  }

  public async disconnect(channelId: string | number) {
    await this._wsClient.unsubscribe(`channel.${channelId}`)
  }
}
