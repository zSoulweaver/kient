import { cast } from '@deepkit/type'
import type { EmotesModeActivatedEvent } from '../dto/emotes-mode-activated.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

/**
 * @category Instances
 */
export class EmotesModeActivatedInstance extends BaseInstance<EmotesModeActivatedEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<EmotesModeActivatedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise EmotesModeActivatedInstance',
        cause: err,
      })
    }
  }
}
