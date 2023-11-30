import type { FollowerAddedInstance } from './instance/follower-added.instance'
import type { FollowerDeletedInstance } from './instance/follower-deleted.instance'
import type { SubscriptionCreatedInstance } from './instance/subscription-created.instance'
import type { SubscriptionGiftedInstance } from './instance/subscription-gifted.instance'
import type { SubscriptionRenewedInstance } from './instance/subscription-renewed.instance'

// eslint-disable-next-line ts/consistent-type-definitions
export type PrivateChannelEvents = {
  onSubscriptionGifted: [subscriptionGiftedInstance: SubscriptionGiftedInstance]
  onSubscriptionCreated: [subscriptionCreatedInstance: SubscriptionCreatedInstance]
  onSubscriptionRenewed: [subscriptionRenewedInstance: SubscriptionRenewedInstance]
  onFollowerAdded: [followerAddedInstance: FollowerAddedInstance]
  onFollowerDeleted: [followerDeletedInstance: FollowerDeletedInstance]
}
