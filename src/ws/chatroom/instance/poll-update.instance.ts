import { BaseInstance } from '@/utils/instance.base'
import { Kient } from '@/client/kient'
import { cast } from '@deepkit/type'
import { KientError } from '@/client/kient.error'
import { PollUpdateEvent } from '../dto/poll-update.event'

export class PollUpdateInstance extends BaseInstance<PollUpdateEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<PollUpdateEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise PollUpdateInstance',
        cause: err
      })
    }
  }
}
