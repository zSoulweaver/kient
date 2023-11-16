import { BaseSocket } from '../socket.base'
import { ChatMessageInstance } from './instance/chat-message.instance'

export class ChatroomSocket extends BaseSocket {
  public async listen(chatroomId: string | number) {
    const channel = await this._wsClient.subscribe(`chatrooms.${chatroomId}.v2`)
    channel.bind('App\\Events\\ChatMessageEvent', (data: Record<string, any>) => {
      const chatMessageInstance = new ChatMessageInstance(data, this._client)
      this._client.emit('onMessage', chatMessageInstance)
    })
  }

  public async disconnect(chatroomId: string | number) {
    await this._wsClient.unsubscribe(`chatrooms.${chatroomId}.v2`)
  }
}
