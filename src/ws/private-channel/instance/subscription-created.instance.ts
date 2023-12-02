import { cast } from '@deepkit/type'
import type { SubscriptionCreatedEvent } from '../dto/subscription-created.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class SubscriptionCreatedInstance extends BaseInstance<SubscriptionCreatedEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<SubscriptionCreatedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise SubscriptionCreatedInstance',
        cause: err,
      })
    }
  }
}
