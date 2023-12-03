import { cast } from '@deepkit/type'
import type { PinnedMessageCreatedEvent } from '../dto/pinned-message-created.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

/**
 * @category Instances
 */
export class PinnedMessageInstance extends BaseInstance<PinnedMessageCreatedEvent> {
  public constructor(data: any, client: Kient) {
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

  public getMessage() {
    return this.data.message.content
  }
}
