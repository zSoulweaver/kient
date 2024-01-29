import { ChatroomBaseInstance } from '../chatroom-base.instance'
// eslint-disable-next-line ts/consistent-type-imports
import { MessageDeletedEvent } from '../dto/message-deleted.event'

/**
 * @category Instances
 */
export class MessageDeletedInstance extends ChatroomBaseInstance<MessageDeletedEvent> {
  public getMessageId() {
    return this.data.message.id
  }
}
