import { cast } from '@deepkit/type'
import type { MatureModeDeactivatedEvent } from '../dto/mature-mode-deactiavted.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class MatureModeDeactivatedInstance extends BaseInstance<MatureModeDeactivatedEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<MatureModeDeactivatedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise MatureModeDeactivatedInstance',
        cause: err,
      })
    }
  }
}
