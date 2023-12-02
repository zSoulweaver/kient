import { cast } from '@deepkit/type'
import type { MatureModeActivatedEvent } from '../dto/mature-mode-actiavted.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class MatureModeActivatedInstance extends BaseInstance<MatureModeActivatedEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<MatureModeActivatedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise MatureModeActivatedInstance',
        cause: err,
      })
    }
  }
}
