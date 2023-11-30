import { cast } from '@deepkit/type'
import type { EmotesModeDeactivatedEvent } from '../dto/emotes-mode-deactivated.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class EmotesModeDeactivatedInstance extends BaseInstance<EmotesModeDeactivatedEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<EmotesModeDeactivatedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise EmotesModeDeactivatedInstance',
        cause: err,
      })
    }
  }
}
