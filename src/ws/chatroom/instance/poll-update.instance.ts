import { cast } from '@deepkit/type'
import type { PollUpdateEvent } from '../dto/poll-update.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class PollUpdateInstance extends BaseInstance<PollUpdateEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<PollUpdateEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise PollUpdateInstance',
        cause: err,
      })
    }
  }
}
