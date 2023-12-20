import type { FollowerAddedInstance } from './instance/follower-added.instance'
import type { FollowerDeletedInstance } from './instance/follower-deleted.instance'
import type { SubscriptionCreatedInstance } from './instance/subscription-created.instance'
import type { SubscriptionGiftedInstance } from './instance/subscription-gifted.instance'
import type { SubscriptionRenewedInstance } from './instance/subscription-renewed.instance'

export const PrivateChannelEvents = {
  Subscription: 'PRIVATE_CHANNEL_SUBSCRIPTION',
  SubscriptionRenewed: 'PRIVATE_CHANNEL_RENEWED',
  SubscriptionsGifted: 'PRIVATE_CHANNEL_SUBSCRIPTIONS_GIFTED',
  FollowerAdded: 'PRIVATE_CHANNEL_FOLLOWED',
  FollowerDeleted: 'PRIVATE_CHANNEL_UNFOLLOWED',
} as const

/**
 * @outline 3
 * @category Emitters
 */
// eslint-disable-next-line ts/consistent-type-definitions
export type PrivateChannelEventEmitters = {
  [PrivateChannelEvents.Subscription]: (subscriptionCreatedInstance: SubscriptionCreatedInstance) => void
  [PrivateChannelEvents.SubscriptionRenewed]: (subscriptionRenewedInstance: SubscriptionRenewedInstance) => void
  [PrivateChannelEvents.SubscriptionsGifted]: (subscriptionGiftedInstance: SubscriptionGiftedInstance) => void
  [PrivateChannelEvents.FollowerAdded]: (followerAddedInstance: FollowerAddedInstance) => void
  [PrivateChannelEvents.FollowerDeleted]: (followerDeletedInstance: FollowerDeletedInstance) => void
}
