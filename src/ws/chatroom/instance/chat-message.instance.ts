import { BaseInstance } from '@/utils/instance.base'
import { ChatMessageEvent, ChatterStatus } from '../dto/chat-message.event'
import { Kient } from '@/client/kient'
import { cast } from '@deepkit/type'

export class ChatMessageInstance extends BaseInstance<ChatMessageEvent> {
  constructor(data: any, client: Kient) {
    super(cast<ChatMessageEvent>(data), client)
  }

  chatterIs(chatterStatus: ChatterStatus | string) {
    const badges = this.data.sender.identity.badges
    return badges.filter(x => x.type === chatterStatus).length > 0
  }

  async deleteMessage() {
    return this._client.api.chat.deleteMessage(this.data.chatroom_id, this.data.id)
  }
}
