// eslint-disable-next-line ts/consistent-type-imports
import { ChatMessageEvent, ChatterStatus } from '../dto/chat-message.event'
import { BaseInstance } from '@/utils/instance.base'
/**
 * @category Instances
 */
export class ChatMessageInstance extends BaseInstance<ChatMessageEvent> {
  public chatterIs(chatterStatus: typeof ChatterStatus | string) {
    const badges = this.data.sender.identity.badges
    return badges.filter(x => x.type === chatterStatus).length > 0
  }

  public async deleteMessage() {
    return this._client.api.chat.deleteMessage(this.data.chatroom_id, this.data.id)
  }
}
