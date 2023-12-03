import type { BannedUserInstance } from './instance/banned-user.instance'
import type { ChatMessageInstance } from './instance/chat-message.instance'
import type { ChatroomClearInstance } from './instance/chatroom-clear.instance'
import type { ChatroomUpdatedInstance } from './instance/chatroom-updated.instance'
import type { GiftedSubscriptionsInstance } from './instance/gifted-subscriptions.instance'
import type { MessageDeletedInstance } from './instance/message-deleted.instance'
import type { PinnedMessageInstance } from './instance/pinned-message.instance'
import type { PollUpdateInstance } from './instance/poll-update.instance'
import type { StreamHostInstance } from './instance/stream-host.instance'
import type { SubscriptionInstance } from './instance/subscription.instance'
import type { UnbannedUserInstance } from './instance/unbanned-user.instance'

export const ChatroomEvents = {
  Message: 'CHATROOM_MESSAGE',
  MessageDeleted: 'CHATROOM_MESSAGE_DELETED',
  UserBanned: 'CHATROOM_USER_BANNED',
  UserUnbanned: 'CHATROOM_USER_UNBANNED',
  MessagePinned: 'CHATROOM_MESSAGE_PINNED',
  MessageUnpinned: 'CHATROOM_MESSAGE_UNPINNED',
  Subscription: 'CHATROOM_SUBSCRIPTION',
  SubscriptionsGifted: 'CHATROOM_SUBSCRIPTIONS_GIFTED',
  PollUpdated: 'CHATROOM_POLL_UPDATED',
  PollDeleted: 'CHATROOM_POLL_DELETED',
  SettingsUpdated: 'CHATROOM_SETTINGS_UPDATED',
  ClearChat: 'CHATROOM_CLEAR_CHAT',
  Hosted: 'CHATROOM_HOSTED',
} as const

// eslint-disable-next-line ts/consistent-type-definitions
export type ChatroomEventEmitters = {
  [ChatroomEvents.Message]: (chatMessageInstance: ChatMessageInstance) => void
  [ChatroomEvents.MessageDeleted]: (messageDeletedInstance: MessageDeletedInstance) => void
  [ChatroomEvents.UserBanned]: (bannedUserInstance: BannedUserInstance) => void
  [ChatroomEvents.UserUnbanned]: (unbannedUserInstance: UnbannedUserInstance) => void
  [ChatroomEvents.MessagePinned]: (pinnedMessageInstance: PinnedMessageInstance) => void
  [ChatroomEvents.MessageUnpinned]: (chatroomId: string | number) => void
  [ChatroomEvents.Subscription]: (subscriptionInstance: SubscriptionInstance) => void
  [ChatroomEvents.SubscriptionsGifted]: (giftedSubscriptionsInstance: GiftedSubscriptionsInstance) => void
  [ChatroomEvents.PollUpdated]: (pollInstance: PollUpdateInstance) => void
  [ChatroomEvents.PollDeleted]: (chatroomId: string | number) => void
  [ChatroomEvents.SettingsUpdated]: (chatroomInstance: ChatroomUpdatedInstance) => void
  [ChatroomEvents.ClearChat]: (chatroomClearInstance: ChatroomClearInstance) => void
  [ChatroomEvents.Hosted]: (hostedInstance: StreamHostInstance) => void
}
