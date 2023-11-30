import type { BannedUserAddedInstance } from './instance/banned-user-added.instance'
import type { BannedUserDeletedInstance } from './instance/banned-user-deleted.instance'
import type { BannedWordAddedInstance } from './instance/banned-word-added.instance'
import type { BannedWordDeletedInstance } from './instance/banned-word-deleted.instance'
import type { EmotesModeActivatedInstance } from './instance/emotes-mode-activated.instance'
import type { EmotesModeDeactivatedInstance } from './instance/emotes-mode-deactivated.instance'
import type { FollowersModeActivatedInstance } from './instance/followers-mode-activated.instance'
import type { SlowModeActivatedInstance } from './instance/slow-mode-activated.instance'
import type { SlowModeDeactivatedInstance } from './instance/slow-mode-deactivated.instance'
import type { SubscribersModeActivatedInstance } from './instance/subscribers-mode-activated.event'
import type { SubscribersModeDeactivatedInstance } from './instance/subscribers-mode-deactivated.instance'
import type { UserTimeoutedInstance } from './instance/user-timeouted.instance'

// eslint-disable-next-line ts/consistent-type-definitions
export type PrivateChatroomEvents = {
  onBannedUserAdded: [bannedUserAddedInstance: BannedUserAddedInstance]
  onBannedUserDeleted: [bannedUserDeletedInstance: BannedUserDeletedInstance]
  onBannedWordAdded: [bannedWordAddedInstance: BannedWordAddedInstance]
  onBannedWordDeleted: [bannedWordDeletedInstance: BannedWordDeletedInstance]
  onEmotesModeActivated: [emotesModeActivatedInstance: EmotesModeActivatedInstance]
  onEmotesModeDeactivated: [emotesModeDeactivatedInstance: EmotesModeDeactivatedInstance]
  onFollowersModeActivated: [followersModeActivatedInstance: FollowersModeActivatedInstance]
  onFollowersModeDeactivated: [followersModeActivatedInstance: FollowersModeActivatedInstance]
  onSlowModeActivated: [slowModeActivatedInstance: SlowModeActivatedInstance]
  onSlowModeDeactivated: [slowModeDeactivatedInstance: SlowModeDeactivatedInstance]
  onSubscribersModeActivated: [subscribersModeActivatedInstance: SubscribersModeActivatedInstance]
  onSubscribersModeDeactivated: [subscribersModeDeactivatedInstance: SubscribersModeDeactivatedInstance]
  onUserTimeout: [userTimeoutedInstance: UserTimeoutedInstance]
}
