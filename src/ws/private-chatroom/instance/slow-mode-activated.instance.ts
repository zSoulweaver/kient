import { cast } from '@deepkit/type'
import type { SlowModeActivatedEvent } from '../dto/slow-mode-activated.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class SlowModeActivatedInstance extends BaseInstance<SlowModeActivatedEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<SlowModeActivatedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise SlowModeActivatedInstance',
        cause: err,
      })
    }
  }
}
