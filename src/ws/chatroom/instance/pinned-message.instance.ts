import { cast } from '@deepkit/type'
import type { PinnedMessageCreatedEvent } from '../dto/pinned-message-created.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class PinnedMessageInstance extends BaseInstance<PinnedMessageCreatedEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<PinnedMessageCreatedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise PinnedMessageInstance',
        cause: err,
      })
    }
  }

  getMessage() {
    return this.data.message.content
  }
}
