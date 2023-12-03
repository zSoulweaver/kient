import { cast } from '@deepkit/type'
import type { SubscriptionGiftedEvent } from '../dto/subscription-gifted.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

/**
 * @category Instances
 */
export class SubscriptionGiftedInstance extends BaseInstance<SubscriptionGiftedEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<SubscriptionGiftedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise SubscriptionGiftedInstance',
        cause: err,
      })
    }
  }
}
