import { cast } from '@deepkit/type'
import type { SubscriptionRenewedEvent } from '../dto/subscription-renewed.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

/**
 * @category Instances
 */
export class SubscriptionRenewedInstance extends BaseInstance<SubscriptionRenewedEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<SubscriptionRenewedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise SubscriptionRenewedInstance',
        cause: err,
      })
    }
  }
}
