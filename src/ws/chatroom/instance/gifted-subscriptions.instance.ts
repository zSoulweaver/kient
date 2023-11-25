import { BaseInstance } from '@/utils/instance.base'
import { Kient } from '@/client/kient'
import { cast } from '@deepkit/type'
import { KientError } from '@/client/kient.error'
import { GiftedSubscriptionsEvent } from '../dto/gifted-subscriptions.event'

export class GiftedSubscriptionsInstance extends BaseInstance<GiftedSubscriptionsEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<GiftedSubscriptionsEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise GiftedSubscriptionsInstance',
        cause: err
      })
    }
  }
}
