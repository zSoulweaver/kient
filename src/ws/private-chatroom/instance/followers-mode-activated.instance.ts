import { cast } from '@deepkit/type'
import type { FollowersModeActivatedEvent } from '../dto/followers-mode-activated.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class FollowersModeActivatedInstance extends BaseInstance<FollowersModeActivatedEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<FollowersModeActivatedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise FollowersModeActivatedInstance',
        cause: err,
      })
    }
  }
}
