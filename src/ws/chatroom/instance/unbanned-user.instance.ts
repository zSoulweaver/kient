import { cast } from '@deepkit/type'
import type { UserUnbannedEvent } from '../dto/user-unbanned.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

/**
 * @category Instances
 */
export class UnbannedUserInstance extends BaseInstance<UserUnbannedEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<UserUnbannedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise UnbannedUserInstance',
        cause: err,
      })
    }
  }
}
