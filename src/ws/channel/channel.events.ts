import type { ChannelSubscriptionInstance } from './instance/channel-subscription.instance'
import type { ChatMoveToSupportedChannelInstance } from './instance/chat-move-to-supported-channel.instance'
import type { FollowersUpdateInstance } from './instance/followers-updated.instance'
import type { GiftsLeaderboardUpdatedInstance } from './instance/gift-leaderboard-updated.instance'
import type { LuckyUsersWhoGotGiftSubscriptionsInstance } from './instance/lucky-users-who-got-gift-subscription.instance'
import type { StopStreamBroadcastInstance } from './instance/stop-stream-broadcast.instance'
import type { StreamerIsLiveInstance } from './instance/streamer-is-live.instance'

export const ChannelEvents = {
  FollowersUpdate: 'CHANNEL_FOLLOWERS_UPDATE',
  Subscription: 'CHANNEL_SUBSCRIPTION',
  SubscriptionsGifted: 'CHANNEL_SUBSCRIPTIONS_GIFTED',
  LeaderboardUpdate: 'CHANNEL_LEADERBOARD_UPDATE',
  StartHost: 'CHANNEL_START_HOST',
  StartStream: 'CHANNEL_START_STREAM',
  StopStream: 'CHANNEL_STOP_STREAM',
  Banned: 'CHANNEL_BANNED',
} as const

// eslint-disable-next-line ts/consistent-type-definitions
export type ChannelEventEmitters = {
  [ChannelEvents.FollowersUpdate]: (followersUpdateInstance: FollowersUpdateInstance) => void
  [ChannelEvents.Subscription]: (channelSubscriptionInstance: ChannelSubscriptionInstance) => void
  [ChannelEvents.SubscriptionsGifted]: (luckyUsersWhoGotGiftSubscriptionsInstance: LuckyUsersWhoGotGiftSubscriptionsInstance) => void
  [ChannelEvents.LeaderboardUpdate]: (giftsLeaderboardUpdatedInstance: GiftsLeaderboardUpdatedInstance) => void
  [ChannelEvents.StartHost]: (chatMoveToSupportedChannelInstance: ChatMoveToSupportedChannelInstance) => void
  [ChannelEvents.StartStream]: (streamerIsLiveInstance: StreamerIsLiveInstance) => void
  [ChannelEvents.StopStream]: (stopStreamBroadcastInstance: StopStreamBroadcastInstance) => void
  [ChannelEvents.Banned]: (channelId: string | number) => void
}
