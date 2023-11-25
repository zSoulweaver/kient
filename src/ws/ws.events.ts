import type { ChannelEvents } from './channel/channel.events'
import type { ChatroomEvents } from './chatroom/chatroom.events'

// eslint-disable-next-line ts/consistent-type-definitions
type CoreEvents = {
  wsConnected: []
  wsDisconnected: []
}

export type KientEvents =
  & CoreEvents
  & ChatroomEvents
  & ChannelEvents
  & { UnknownEvent: [data: any] }
