import { cast } from '@deepkit/type'
import type { UserTimeoutedEvent } from '../dto/user-timeouted.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

/**
 * @category Instances
 */
export class UserTimeoutedInstance extends BaseInstance<UserTimeoutedEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<UserTimeoutedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise UserTimeoutedInstance',
        cause: err,
      })
    }
  }
}
