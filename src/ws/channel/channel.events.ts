import { ChannelSubscriptionInstance } from './instance/channel-subscription.instance'
import { ChatMoveToSupportedChannelInstance } from './instance/chat-move-to-supported-channel.instance'
import { FollowersUpdateInstance } from './instance/followers-updated.instance'
import { GiftsLeaderboardUpdatedInstance } from './instance/gift-leaderboard-updated.instance'
import { LuckyUsersWhoGotGiftSubscriptionsInstance } from './instance/lucky-users-who-got-gift-subscription.instance'
import { StopStreamBroadcastInstance } from './instance/stop-stream-broadcast.instance'

export type ChannelEvents = {
  onFollowersUpdate: [followersUpdateInstance: FollowersUpdateInstance]
  onChannelSubscription: [channelSubscriptionInstance: ChannelSubscriptionInstance]
  onLuckyUsersWhoGotGiftSubscriptions: [luckyUsersWhoGotGiftSubscriptionsInstance: LuckyUsersWhoGotGiftSubscriptionsInstance]
  onLeaderboardUpdate: [giftsLeaderboardUpdatedInstance: GiftsLeaderboardUpdatedInstance]
  onStartRaid: [chatMoveToSupportedChannelInstance: ChatMoveToSupportedChannelInstance]
  onStopStream: [stopStreamBroadcastInstance: StopStreamBroadcastInstance]
}
