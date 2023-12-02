import { type ChannelEventEmitters, ChannelEvents } from './channel/channel.events'
import type { ChatroomEventEmitters } from './chatroom/chatroom.events'
import { ChatroomEvents } from './chatroom/chatroom.events'
import type { PrivateChannelEventEmitters } from './private-channel/private-channel.events'
import { PrivateChannelEvents } from './private-channel/private-channel.events'
import { type PrivateChatroomEventEmitters, PrivateChatroomEvents } from './private-chatroom/private-chatroom.events'
import type { PrivateLivestreamEventEmitter } from './private-livestream/private-livestream.events'

enum KientEvents {
  WebSocketConnected = 'KIENT_WEBSOCKET_CONNECTED',
  WebSocketDisconnected = 'KIENT_WEBSOCKET_DISCONNECTED',
  UnknownEvent = 'KIENT_UNKNOWN_EVENT',
}

export const Events = {
  Core: KientEvents,
  Channel: ChannelEvents,
  Chatroom: ChatroomEvents,
  PrivateChannel: PrivateChannelEvents,
  PrivateChatroom: PrivateChatroomEvents,
  PrivateLivestream: PrivateChatroomEvents,
}

// eslint-disable-next-line ts/consistent-type-definitions
type CoreEvents = {
  [KientEvents.WebSocketConnected]: () => void
  [KientEvents.WebSocketDisconnected]: () => void
  [KientEvents.UnknownEvent]: (data: any) => void
}

export type KientEventEmitters =
  & CoreEvents
  & ChannelEventEmitters
  & ChatroomEventEmitters
  & PrivateChannelEventEmitters
  & PrivateChatroomEventEmitters
  & PrivateLivestreamEventEmitter
