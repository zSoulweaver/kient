import { cast } from '@deepkit/type'
import type { BannedWordDeletedEvent } from '../dto/banned-word-deleted.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class BannedWordDeletedInstance extends BaseInstance<BannedWordDeletedEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<BannedWordDeletedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise BannedWordDeletedInstance',
        cause: err,
      })
    }
  }
}
