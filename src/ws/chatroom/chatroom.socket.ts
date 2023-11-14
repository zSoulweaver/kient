import { deserialize } from '@deepkit/type'
import { BaseSocket } from '../socket.base'
import { ChatMessageEvent } from './dto/chat-message.event'

export class ChatroomSocket extends BaseSocket {
  public async listen(chatroomId: string | number) {
    const channel = await this._wsClient.subscribe(`chatrooms.${chatroomId}.v2`)
    channel.bind('App\\Events\\ChatMessageEvent', (data: any) => {
      const chatMessage = deserialize<ChatMessageEvent>(data)
      this._client.emit('onMessage', chatMessage)
    })
  }

  public async disconnect(chatroomId: string | number) {
    await this._wsClient.unsubscribe(`chatrooms.${chatroomId}.v2`)
  }
}
