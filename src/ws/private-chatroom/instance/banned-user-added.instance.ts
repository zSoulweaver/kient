import { cast } from '@deepkit/type'
import type { BannedUserAddedEvent } from '../dto/banned-user-added.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class BannedUserAddedInstance extends BaseInstance<BannedUserAddedEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<BannedUserAddedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise BannedUserAddedInstance',
        cause: err,
      })
    }
  }
}
