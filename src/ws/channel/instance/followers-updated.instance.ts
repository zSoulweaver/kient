import { BaseInstance } from '@/utils/instance.base'
import { Kient } from '@/client/kient'
import { cast } from '@deepkit/type'
import { KientError } from '@/client/kient.error'
import { FollowersUpdatedEvent } from '../dto/followers-updated.event'

export class FollowersUpdateInstance extends BaseInstance<FollowersUpdatedEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<FollowersUpdatedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise FollowersUpdateInstance',
        cause: err
      })
    }
  }
}
