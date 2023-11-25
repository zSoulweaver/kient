import { BannedUserInstance } from './instance/banned-user.instance'
import { ChatMessageInstance } from './instance/chat-message.instance'
import { ChatroomUpdatedInstance } from './instance/chatroom-updated.instance'
import { GiftedSubscriptionsInstance } from './instance/gifted-subscriptions.instance'
import { MessageDeletedInstance } from './instance/message-deleted.instance'
import { PinnedMessageInstance } from './instance/pinned-message.instance'
import { PollUpdateInstance } from './instance/poll-update.instance'
import { StreamHostInstance } from './instance/stream-host.instance'
import { SubscriptionInstance } from './instance/subscription.instance'
import { UnbannedUserInstance } from './instance/unbanned-user.instance'

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
  onChatroomUpdate: [chatroomInstance: ChatroomUpdatedInstance]
  onChatroomClear: []
  onHosted: [hostedInstance: StreamHostInstance]
}
