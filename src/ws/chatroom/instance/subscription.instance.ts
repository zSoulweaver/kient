import { cast } from '@deepkit/type'
import type { SubscriptionEvent } from '../dto/subscription.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class SubscriptionInstance extends BaseInstance<SubscriptionEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<SubscriptionEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise SubscriptionInstance',
        cause: err,
      })
    }
  }
}
