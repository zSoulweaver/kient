import { BaseInstance } from '@/utils/instance.base'
import { Kient } from '@/client/kient'
import { cast } from '@deepkit/type'
import { KientError } from '@/client/kient.error'
import { UserUnbannedEvent } from '../dto/user-unbanned.event'

export class UnbannedUserInstance extends BaseInstance<UserUnbannedEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<UserUnbannedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise UnbannedUserInstance',
        cause: err
      })
    }
  }
}
