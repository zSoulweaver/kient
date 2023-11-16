import { ChatMessageInstance } from './instance/chat-message.instance'

export type ChatroomEvents = {
  onMessage: [chatMessageInstance: ChatMessageInstance]
}
