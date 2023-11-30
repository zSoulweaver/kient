import { cast } from '@deepkit/type'
import type { BannedWordAddedEvent } from '../dto/banned-word-added.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class BannedWordAddedInstance extends BaseInstance<BannedWordAddedEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<BannedWordAddedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise BannedWordAddedInstance',
        cause: err,
      })
    }
  }
}
