import { BaseInstance } from '@/utils/instance.base'
import { MessageDeletedEvent } from '../dto/message-deleted.event'
import { Kient } from '@/client/kient'
import { cast } from '@deepkit/type'
import { KientError } from '@/client/kient.error'

export class MessageDeletedInstance extends BaseInstance<MessageDeletedEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<MessageDeletedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise MessageDeletedInstance',
        cause: err
      })
    }
  }

  getMessageId() {
    return this.data.message.id
  }
}
