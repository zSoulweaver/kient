import { ChatroomEvents } from './chatroom/chatroom.events'

type CoreEvents = {
  wsConnected: []
  wsDisconnected: []
}

export type KientEvents =
  & CoreEvents
  & ChatroomEvents
