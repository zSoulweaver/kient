import { cast } from '@deepkit/type'
import type { BannedUserDeletedEvent } from '../dto/banned-user-deleted.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class BannedUserDeletedInstance extends BaseInstance<BannedUserDeletedEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<BannedUserDeletedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise BannedUserDeletedInstance',
        cause: err,
      })
    }
  }
}
