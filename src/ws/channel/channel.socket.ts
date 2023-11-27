import { BaseSocket } from '../socket.base'
import { ChannelSubscriptionInstance } from './instance/channel-subscription.instance'
import { ChatMoveToSupportedChannelInstance } from './instance/chat-move-to-supported-channel.instance'
import { FollowersUpdateInstance } from './instance/followers-updated.instance'
import { GiftsLeaderboardUpdatedInstance } from './instance/gift-leaderboard-updated.instance'
import { LuckyUsersWhoGotGiftSubscriptionsInstance } from './instance/lucky-users-who-got-gift-subscription.instance'
import { StopStreamBroadcastInstance } from './instance/stop-stream-broadcast.instance'
import { StreamerIsLiveInstance } from './instance/streamer-is-live.instance'

type ChannelEvents =
  | 'App\\Events\\FollowersUpdated'
  | 'App\\Events\\ChannelSubscriptionEvent'
  | 'App\\Events\\LuckyUsersWhoGotGiftSubscriptionsEvent'
  | 'App\\Events\\GiftsLeaderboardUpdated'
  | 'App\\Events\\ChatMoveToSupportedChannelEvent'
  | 'App\\Events\\StreamerIsLive'
  | 'App\\Events\\StopStreamBroadcast'
  | 'App\\Events\\ChannelBannedForceRefresh' // May be unused, not sure

export class ChannelSocket extends BaseSocket {
  public async listen(channelId: string | number) {
    const channel = await this._wsClient.subscribe(`channel.${channelId}`)

    channel.bind_global((eventName: ChannelEvents, data: any) => {
      switch (eventName) {
        case 'App\\Events\\FollowersUpdated':
          return this._client.emit('onFollowersUpdate', new FollowersUpdateInstance(data, this._client))

        case 'App\\Events\\ChannelSubscriptionEvent':
          return this._client.emit('onChannelSubscription', new ChannelSubscriptionInstance(data, this._client))

        case 'App\\Events\\LuckyUsersWhoGotGiftSubscriptionsEvent':
          return this._client.emit('onLuckyUsersWhoGotGiftSubscriptions', new LuckyUsersWhoGotGiftSubscriptionsInstance(data, this._client))

        case 'App\\Events\\GiftsLeaderboardUpdated':
          return this._client.emit('onLeaderboardUpdate', new GiftsLeaderboardUpdatedInstance(data, this._client))

        case 'App\\Events\\ChatMoveToSupportedChannelEvent':
          return this._client.emit('onStartHost', new ChatMoveToSupportedChannelInstance(data, this._client))

        case 'App\\Events\\StreamerIsLive':
          return this._client.emit('onStartStream', new StreamerIsLiveInstance(data, this._client))

        case 'App\\Events\\StopStreamBroadcast':
          return this._client.emit('onStopStream', new StopStreamBroadcastInstance(data, this._client))

        case 'App\\Events\\ChannelBannedForceRefresh':
          return this._client.emit('onStreamerBanned')

        default:
          return this._client.emit('UnknownEvent', { eventName, data })
      }
    })
  }

  public async disconnect(channelId: string | number) {
    await this._wsClient.unsubscribe(`channel.${channelId}`)
  }
}
