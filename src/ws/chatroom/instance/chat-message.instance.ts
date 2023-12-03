import { cast } from '@deepkit/type'
import type { ChatMessageEvent, ChatterStatus } from '../dto/chat-message.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

/**
 * @category Instances
 */
export class ChatMessageInstance extends BaseInstance<ChatMessageEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<ChatMessageEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise ChatMessageInstance',
        cause: err,
      })
    }
  }

  public chatterIs(chatterStatus: typeof ChatterStatus | string) {
    const badges = this.data.sender.identity.badges
    return badges.filter(x => x.type === chatterStatus).length > 0
  }

  public async deleteMessage() {
    return this._client.api.chat.deleteMessage(this.data.chatroom_id, this.data.id)
  }
}
