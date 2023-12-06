// eslint-disable-next-line ts/consistent-type-imports
import { MessageDeletedEvent } from '../dto/message-deleted.event'
import { BaseInstance } from '@/utils/instance.base'

/**
 * @category Instances
 */
export class MessageDeletedInstance extends BaseInstance<MessageDeletedEvent> {
  public getMessageId() {
    return this.data.message.id
  }
}
