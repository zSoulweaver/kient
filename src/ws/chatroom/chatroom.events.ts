import type { BannedUserInstance } from './instance/banned-user.instance'
import type { ChatMessageInstance } from './instance/chat-message.instance'
import type { ChatroomUpdatedInstance } from './instance/chatroom-updated.instance'
import type { GiftedSubscriptionsInstance } from './instance/gifted-subscriptions.instance'
import type { MessageDeletedInstance } from './instance/message-deleted.instance'
import type { PinnedMessageInstance } from './instance/pinned-message.instance'
import type { PollUpdateInstance } from './instance/poll-update.instance'
import type { StreamHostInstance } from './instance/stream-host.instance'
import type { SubscriptionInstance } from './instance/subscription.instance'
import type { UnbannedUserInstance } from './instance/unbanned-user.instance'

// eslint-disable-next-line ts/consistent-type-definitions
export type ChatroomEvents = {
  onMessage: [chatMessageInstance: ChatMessageInstance]
  onMessageDeleted: [messageDeletedInstance: MessageDeletedInstance]
  onUserBanned: [bannedUserInstance: BannedUserInstance]
  onUserUnbanned: [unbannedUserInstance: UnbannedUserInstance]
  onPinnedMessage: [pinnedMessageInstance: PinnedMessageInstance]
  onUnpinMessage: []
  onSubscription: [subscriptionInstance: SubscriptionInstance]
  onGiftedSubscriptions: [giftedSubscriptionsInstance: GiftedSubscriptionsInstance]
  onPollUpdate: [pollInstance: PollUpdateInstance]
  onPollDelete: []
  onChatroomUpdate: [chatroomInstance: ChatroomUpdatedInstance]
  onChatroomClear: []
  onHosted: [hostedInstance: StreamHostInstance]
}
