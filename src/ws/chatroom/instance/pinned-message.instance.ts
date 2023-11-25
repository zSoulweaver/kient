import { BaseInstance } from '@/utils/instance.base'
import { Kient } from '@/client/kient'
import { cast } from '@deepkit/type'
import { KientError } from '@/client/kient.error'
import { PinnedMessageCreatedEvent } from '../dto/pinned-message-created.event'

export class PinnedMessageInstance extends BaseInstance<PinnedMessageCreatedEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<PinnedMessageCreatedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise PinnedMessageInstance',
        cause: err
      })
    }
  }

  getMessage() {
    return this.data.message.content
  }
}
