import { cast } from '@deepkit/type'
import type { MessageDeletedEvent } from '../dto/message-deleted.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class MessageDeletedInstance extends BaseInstance<MessageDeletedEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<MessageDeletedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise MessageDeletedInstance',
        cause: err,
      })
    }
  }

  public getMessageId() {
    return this.data.message.id
  }
}
