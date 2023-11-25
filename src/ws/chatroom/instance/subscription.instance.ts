import { BaseInstance } from '@/utils/instance.base'
import { Kient } from '@/client/kient'
import { cast } from '@deepkit/type'
import { KientError } from '@/client/kient.error'
import { SubscriptionEvent } from '../dto/subscription.event'

export class SubscriptionInstance extends BaseInstance<SubscriptionEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<SubscriptionEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise SubscriptionInstance',
        cause: err
      })
    }
  }
}
