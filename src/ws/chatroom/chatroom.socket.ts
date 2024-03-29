import { BaseSocket } from '../socket.base'
// eslint-disable-next-line ts/consistent-type-imports
import { BannedUserInstance, ChatMessageInstance, ChatroomClearInstance, ChatroomUpdatedInstance, GiftedSubscriptionsInstance, MessageDeletedInstance, PinnedMessageInstance, PollUpdateInstance, StreamHostInstance, SubscriptionInstance, UnbannedUserInstance } from './instance'
import { ChatroomEvents } from './chatroom.events'
import type { ChatroomBaseInstance } from './chatroom-base.instance'
import { Events } from '@/kient.events'
import { createInstance } from '@/utils/create-instance'

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

/**
 * Uses the `chatrooms.${chatroomId}.v2` Pusher channel. Contains events directly related to the chatroom, e.g, new messages, message deletions, polls, etc.
 *
 * Full list of events listed on {@link ChatroomEventEmitters}.
 *
 * @category Sockets
 */
export class ChatroomSocket extends BaseSocket {
  public async listen(chatroomId: string | number) {
    const channel = await this._wsClient.subscribe(`chatrooms.${chatroomId}.v2`)

    channel.bind_global((eventName: PusherChannelEvents, data: any) => {
      const instanceData: ChatroomBaseInstance = {
        data,
        _client: this._client,
        chatroomId: `${chatroomId}`,
      }

      switch (eventName) {
        case 'App\\Events\\ChatMessageEvent':
          return this._client.emit(ChatroomEvents.Message, createInstance<ChatMessageInstance>(instanceData))

        case 'App\\Events\\MessageDeletedEvent':
          return this._client.emit(ChatroomEvents.MessageDeleted, createInstance<MessageDeletedInstance>(instanceData))

        case 'App\\Events\\UserBannedEvent':
          return this._client.emit(ChatroomEvents.UserBanned, createInstance<BannedUserInstance>(instanceData))

        case 'App\\Events\\UserUnbannedEvent':
          return this._client.emit(ChatroomEvents.UserUnbanned, createInstance<UnbannedUserInstance>(instanceData))

        case 'App\\Events\\PinnedMessageCreatedEvent':
          return this._client.emit(ChatroomEvents.MessagePinned, createInstance<PinnedMessageInstance>(instanceData))

        case 'App\\Events\\PinnedMessageDeletedEvent':
          return this._client.emit(ChatroomEvents.MessageUnpinned, chatroomId)

        case 'App\\Events\\SubscriptionEvent':
          return this._client.emit(ChatroomEvents.Subscription, createInstance<SubscriptionInstance>(instanceData))

        case 'App\\Events\\GiftedSubscriptionsEvent':
          return this._client.emit(ChatroomEvents.SubscriptionsGifted, createInstance<GiftedSubscriptionsInstance>(instanceData))

        case 'App\\Events\\PollUpdateEvent':
          return this._client.emit(ChatroomEvents.PollUpdated, createInstance<PollUpdateInstance>(instanceData))

        case 'App\\Events\\PollDeleteEvent':
          return this._client.emit(ChatroomEvents.PollDeleted, chatroomId)

        case 'App\\Events\\ChatroomUpdatedEvent':
          return this._client.emit(ChatroomEvents.SettingsUpdated, createInstance<ChatroomUpdatedInstance>(instanceData))

        case 'App\\Events\\ChatroomClearEvent':
          return this._client.emit(ChatroomEvents.ClearChat, createInstance<ChatroomClearInstance>(instanceData))

        case 'App\\Events\\StreamHostEvent':
          return this._client.emit(ChatroomEvents.Hosted, createInstance<StreamHostInstance>(instanceData))

        default:
          return this._client.emit(Events.Core.UnknownEvent, { eventName, data })
      }
    })
  }

  public async disconnect(chatroomId: string | number) {
    await this._wsClient.unsubscribe(`chatrooms.${chatroomId}.v2`)
  }
}
