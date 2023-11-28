import type { ChannelEvents } from './channel/channel.events'
import type { ChatroomEvents } from './chatroom/chatroom.events'
import type { PrivateLivestreamEvents } from './private-livestream/private-livestream.events'

// eslint-disable-next-line ts/consistent-type-definitions
type CoreEvents = {
  wsConnected: []
  wsDisconnected: []
}

export type KientEvents =
  & CoreEvents
  & ChatroomEvents
  & ChannelEvents
  & PrivateLivestreamEvents
  & { UnknownEvent: [data: any] }
