import { BaseSocket } from '../socket.base'
import { Events } from '../ws.events'
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
import { ChatroomEvents } from './chatroom.events'
import { ChatroomClearInstance } from './instance/chatroom-clear.instance'

type PusherChannelEvents =
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

    channel.bind_global((eventName: PusherChannelEvents, data: any) => {
      switch (eventName) {
        case 'App\\Events\\ChatMessageEvent':
          return this._client.emit(ChatroomEvents.Message, new ChatMessageInstance(data, this._client))

        case 'App\\Events\\MessageDeletedEvent':
          return this._client.emit(ChatroomEvents.MessageDeleted, new MessageDeletedInstance(data, this._client))

        case 'App\\Events\\UserBannedEvent':
          return this._client.emit(ChatroomEvents.UserBanned, new BannedUserInstance(data, this._client))

        case 'App\\Events\\UserUnbannedEvent':
          return this._client.emit(ChatroomEvents.UserUnbanned, new UnbannedUserInstance(data, this._client))

        case 'App\\Events\\PinnedMessageCreatedEvent':
          return this._client.emit(ChatroomEvents.MessagePinned, new PinnedMessageInstance(data, this._client))

        case 'App\\Events\\PinnedMessageDeletedEvent':
          return this._client.emit(ChatroomEvents.MessageUnpinned, chatroomId)

        case 'App\\Events\\SubscriptionEvent':
          return this._client.emit(ChatroomEvents.Subscription, new SubscriptionInstance(data, this._client))

        case 'App\\Events\\GiftedSubscriptionsEvent':
          return this._client.emit(ChatroomEvents.SubscriptionsGifted, new GiftedSubscriptionsInstance(data, this._client))

        case 'App\\Events\\PollUpdateEvent':
          return this._client.emit(ChatroomEvents.PollUpdated, new PollUpdateInstance(data, this._client))

        case 'App\\Events\\PollDeleteEvent':
          return this._client.emit(ChatroomEvents.PollDeleted, chatroomId)

        case 'App\\Events\\ChatroomUpdatedEvent':
          return this._client.emit(ChatroomEvents.SettingsUpdated, new ChatroomUpdatedInstance(data, this._client))

        case 'App\\Events\\ChatroomClearEvent':
          return this._client.emit(ChatroomEvents.ClearChat, new ChatroomClearInstance(data, this._client))

        case 'App\\Events\\StreamHostEvent':
          return this._client.emit(ChatroomEvents.Hosted, new StreamHostInstance(data, this._client))

        default:
          return this._client.emit(Events.Core.UnknownEvent, { eventName, data })
      }
    })
  }

  public async disconnect(chatroomId: string | number) {
    await this._wsClient.unsubscribe(`chatrooms.${chatroomId}.v2`)
  }
}
