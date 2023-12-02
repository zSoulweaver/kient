import { cast } from '@deepkit/type'
import type { FollowerAddedEvent } from '../dto/follower-added.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class FollowerAddedInstance extends BaseInstance<FollowerAddedEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<FollowerAddedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise FollowerAddedInstance',
        cause: err,
      })
    }
  }
}
