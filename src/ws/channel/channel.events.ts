import type { ChannelSubscriptionInstance } from './instance/channel-subscription.instance'
import type { ChatMoveToSupportedChannelInstance } from './instance/chat-move-to-supported-channel.instance'
import type { FollowersUpdateInstance } from './instance/followers-updated.instance'
import type { GiftsLeaderboardUpdatedInstance } from './instance/gift-leaderboard-updated.instance'
import type { LuckyUsersWhoGotGiftSubscriptionsInstance } from './instance/lucky-users-who-got-gift-subscription.instance'
import type { StopStreamBroadcastInstance } from './instance/stop-stream-broadcast.instance'

// eslint-disable-next-line ts/consistent-type-definitions
export type ChannelEvents = {
  onFollowersUpdate: [followersUpdateInstance: FollowersUpdateInstance]
  onChannelSubscription: [channelSubscriptionInstance: ChannelSubscriptionInstance]
  onLuckyUsersWhoGotGiftSubscriptions: [luckyUsersWhoGotGiftSubscriptionsInstance: LuckyUsersWhoGotGiftSubscriptionsInstance]
  onLeaderboardUpdate: [giftsLeaderboardUpdatedInstance: GiftsLeaderboardUpdatedInstance]
  onStartRaid: [chatMoveToSupportedChannelInstance: ChatMoveToSupportedChannelInstance]
  onStopStream: [stopStreamBroadcastInstance: StopStreamBroadcastInstance]
}
