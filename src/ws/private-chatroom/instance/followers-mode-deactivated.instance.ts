import { cast } from '@deepkit/type'
import type { FollowersModeDeactivatedEvent } from '../dto/followers-mode-deactivated.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class FollowersModeDeactivatedInstance extends BaseInstance<FollowersModeDeactivatedEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<FollowersModeDeactivatedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise FollowersModeDeactivatedInstance',
        cause: err,
      })
    }
  }
}
