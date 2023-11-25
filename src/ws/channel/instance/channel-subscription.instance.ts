import { cast } from '@deepkit/type'
import type { ChannelSubscriptionEvent } from '../dto/channel-subscription.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class ChannelSubscriptionInstance extends BaseInstance<ChannelSubscriptionEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<ChannelSubscriptionEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise ChannelSubscriptionInstance',
        cause: err,
      })
    }
  }
}
