import type { BannedUserAddedInstance } from './instance/banned-user-added.instance'
import type { BannedUserDeletedInstance } from './instance/banned-user-deleted.instance'
import type { BannedWordAddedInstance } from './instance/banned-word-added.instance'
import type { BannedWordDeletedInstance } from './instance/banned-word-deleted.instance'
import type { EmotesModeActivatedInstance } from './instance/emotes-mode-activated.instance'
import type { EmotesModeDeactivatedInstance } from './instance/emotes-mode-deactivated.instance'
import type { FollowersModeActivatedInstance } from './instance/followers-mode-activated.instance'
import type { FollowersModeDeactivatedInstance } from './instance/followers-mode-deactivated.instance'
import type { SlowModeActivatedInstance } from './instance/slow-mode-activated.instance'
import type { SlowModeDeactivatedInstance } from './instance/slow-mode-deactivated.instance'
import type { SubscribersModeActivatedInstance } from './instance/subscribers-mode-activated.event'
import type { SubscribersModeDeactivatedInstance } from './instance/subscribers-mode-deactivated.instance'
import type { UserTimeoutedInstance } from './instance/user-timeouted.instance'

export enum PrivateChatroomEvents {
  BannedWordAdded = 'PRIVATE_CHATROOM_BANNED_WORD_ADDED',
  BannedWordDeleted = 'PRIVATE_CHATROOM_BANNED_WORD_DELETED',
  BannedUserAdded = 'PRIVATE_CHATROOM_BANNED_USER_ADDED',
  BannedUserDeleted = 'PRIVATE_CHATROOM_BANNED_USER_DELETED',
  EmotesOnlyModeActivated = 'PRIVATE_CHATROOM_EMOTES_ONLY_MODE_ACTIVATED',
  EmotesOnlyModeDeactivated = 'PRIVATE_CHATROOM_EMOTES_ONLY_MODE_DEACTIVATED',
  FollowersOnlyModeActivated = 'PRIVATE_CHATROOM_FOLLOWERS_ONLY_MODE_ACTIVATED',
  FollowersOnlyModeDeactivated = 'PRIVATE_CHATROOM_FOLLOWERS_ONLY_MODE_DEACTIVATED',
  SlowModeActivated = 'PRIVATE_CHATROOM_SLOW_MODE_ACTIVATED',
  SlowModeDeactivated = 'PRIVATE_CHATROOM_SLOW_MODE_DEACTIVATED',
  SubscribersOnlyModeActivated = 'PRIVATE_CHATROOM_SUBSCRIBERS_ONLY_MODE_ACTIVATED',
  SubscribersOnlyModeDeactivated = 'PRIVATE_CHATROOM_SUBSCRIBERS_ONLY_MODE_DEACTIVATED',
  UserTimedOut = 'PRIVATE_CHATROOM_USER_TIMED_OUT',
}

// eslint-disable-next-line ts/consistent-type-definitions
export type PrivateChatroomEventEmitters = {
  [PrivateChatroomEvents.BannedWordAdded]: (bannedWordAddedInstance: BannedWordAddedInstance) => void
  [PrivateChatroomEvents.BannedWordDeleted]: (bannedWordDeletedInstance: BannedWordDeletedInstance) => void
  [PrivateChatroomEvents.BannedUserAdded]: (bannedUserAddedInstance: BannedUserAddedInstance) => void
  [PrivateChatroomEvents.BannedUserDeleted]: (bannedUserDeletedInstance: BannedUserDeletedInstance) => void
  [PrivateChatroomEvents.EmotesOnlyModeActivated]: (emotesModeActivatedInstance: EmotesModeActivatedInstance) => void
  [PrivateChatroomEvents.EmotesOnlyModeDeactivated]: (emotesModeDeactivatedInstance: EmotesModeDeactivatedInstance) => void
  [PrivateChatroomEvents.FollowersOnlyModeActivated]: (followersModeActivatedInstance: FollowersModeActivatedInstance) => void
  [PrivateChatroomEvents.FollowersOnlyModeDeactivated]: (followersModeDeactivatedInstance: FollowersModeDeactivatedInstance) => void
  [PrivateChatroomEvents.SlowModeActivated]: (slowModeActivatedInstance: SlowModeActivatedInstance) => void
  [PrivateChatroomEvents.SlowModeDeactivated]: (slowModeDeactivatedInstance: SlowModeDeactivatedInstance) => void
  [PrivateChatroomEvents.SubscribersOnlyModeActivated]: (subscribersModeActivatedInstance: SubscribersModeActivatedInstance) => void
  [PrivateChatroomEvents.SubscribersOnlyModeDeactivated]: (subscribersModeDeactivatedInstance: SubscribersModeDeactivatedInstance) => void
  [PrivateChatroomEvents.UserTimedOut]: (userTimeoutedInstance: UserTimeoutedInstance) => void
}
