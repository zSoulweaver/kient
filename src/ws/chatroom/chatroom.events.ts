import { ChatMessageEvent } from './dto/chat-message.event'

export type ChatroomEvents = {
  onMessage: [chatMessage: ChatMessageEvent]
}
