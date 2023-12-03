import { cast } from '@deepkit/type'
import type { FollowerDeletedEvent } from '../dto/follower-deleted.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

/**
 * @category Instances
 */
export class FollowerDeletedInstance extends BaseInstance<FollowerDeletedEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<FollowerDeletedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise FollowerDeletedInstance',
        cause: err,
      })
    }
  }
}
