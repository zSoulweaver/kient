import type { ChannelEventEmitters } from '@/ws/channel/channel.events'
import { ChannelEvents } from '@/ws/channel/channel.events'
import type { ChatroomEventEmitters } from '@/ws/chatroom/chatroom.events'
import { ChatroomEvents } from '@/ws/chatroom/chatroom.events'
import type { PrivateChannelEventEmitters } from '@/ws/private-channel/private-channel.events'
import { PrivateChannelEvents } from '@/ws/private-channel/private-channel.events'
import type { PrivateChatroomEventEmitters } from '@/ws/private-chatroom/private-chatroom.events'
import { PrivateChatroomEvents } from '@/ws/private-chatroom/private-chatroom.events'
import type { PrivateLivestreamEventEmitters } from '@/ws/private-livestream/private-livestream.events'
import { PrivateLivestreamEvents } from '@/ws/private-livestream/private-livestream.events'

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
  PrivateLivestream: PrivateLivestreamEvents,
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
  & PrivateLivestreamEventEmitters
