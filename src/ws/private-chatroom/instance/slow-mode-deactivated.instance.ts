import { cast } from '@deepkit/type'
import type { SlowModeDeactivatedEvent } from '../dto/slow-mode-deactivated.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

/**
 * @category Instances
 */
export class SlowModeDeactivatedInstance extends BaseInstance<SlowModeDeactivatedEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<SlowModeDeactivatedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise SlowModeDeactivatedInstance',
        cause: err,
      })
    }
  }
}
