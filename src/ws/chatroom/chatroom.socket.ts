import { BaseSocket } from '../socket.base'
import { ChatMessageInstance } from './instance/chat-message.instance'
import { MessageDeletedInstance } from './instance/message-deleted.instance'
import { BannedUserInstance } from './instance/banned-user.instance'
import { UnbannedUserInstance } from './instance/unbanned-user.instance'
import { PinnedMessageInstance } from './instance/pinned-message.instance'
import { SubscriptionInstance } from './instance/subscription.instance'
import { GiftedSubscriptionsInstance } from './instance/gifted-subscriptions.instance'
import { ChatroomUpdatedInstance } from './instance/chatroom-updated.instance'
import { StreamHostInstance } from './instance/stream-host.instance'
import { PollUpdateInstance } from './instance/poll-update.instance'

type ChannelEvents =
  | 'App\\Events\\ChatMessageEvent'
  | 'App\\Events\\MessageDeletedEvent'
  | 'App\\Events\\UserBannedEvent'
  | 'App\\Events\\UserUnbannedEvent'
  | 'App\\Events\\PinnedMessageCreatedEvent'
  | 'App\\Events\\PinnedMessageDeletedEvent'
  | 'App\\Events\\SubscriptionEvent'
  | 'App\\Events\\GiftedSubscriptionsEvent'
  | 'App\\Events\\PollUpdateEvent'
  | 'App\\Events\\PollDeleteEvent'
  | 'App\\Events\\ChatroomUpdatedEvent'
  | 'App\\Events\\ChatroomClearEvent'
  | 'App\\Events\\StreamHostEvent'

export class ChatroomSocket extends BaseSocket {
  public async listen(chatroomId: string | number) {
    const channel = await this._wsClient.subscribe(`chatrooms.${chatroomId}.v2`)

    channel.bind_global((eventName: ChannelEvents, data: any) => {
      switch (eventName) {
        case 'App\\Events\\ChatMessageEvent':
          return this._client.emit('onMessage', new ChatMessageInstance(data, this._client))

        case 'App\\Events\\MessageDeletedEvent':
          return this._client.emit('onMessageDeleted', new MessageDeletedInstance(data, this._client))

        case 'App\\Events\\UserBannedEvent':
          return this._client.emit('onUserBanned', new BannedUserInstance(data, this._client))

        case 'App\\Events\\UserUnbannedEvent':
          return this._client.emit('onUserUnbanned', new UnbannedUserInstance(data, this._client))

        case 'App\\Events\\PinnedMessageCreatedEvent':
          return this._client.emit('onPinnedMessage', new PinnedMessageInstance(data, this._client))

        case 'App\\Events\\PinnedMessageDeletedEvent':
          return this._client.emit('onUnpinMessage')

        case 'App\\Events\\SubscriptionEvent':
          return this._client.emit('onSubscription', new SubscriptionInstance(data, this._client))

        case 'App\\Events\\GiftedSubscriptionsEvent':
          return this._client.emit('onGiftedSubscriptions', new GiftedSubscriptionsInstance(data, this._client))

        case 'App\\Events\\PollUpdateEvent':
          return this._client.emit('onPollUpdate', new PollUpdateInstance(data, this._client))

        case 'App\\Events\\PollDeleteEvent':
          return this._client.emit('onPollDelete')

        case 'App\\Events\\ChatroomUpdatedEvent':
          return this._client.emit('onChatroomUpdate', new ChatroomUpdatedInstance(data, this._client))

        case 'App\\Events\\ChatroomClearEvent':
          return this._client.emit('onChatroomClear')

        case 'App\\Events\\StreamHostEvent':
          return this._client.emit('onHosted', new StreamHostInstance(data, this._client))

        default:
          return this._client.emit('UnknownEvent', { eventName, data })
      }
    })
  }

  public async disconnect(chatroomId: string | number) {
    await this._wsClient.unsubscribe(`chatrooms.${chatroomId}.v2`)
  }
}
