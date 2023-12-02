import { cast } from '@deepkit/type'
import type { SubscribersModeDeactivatedEvent } from '../dto/subscribers-mode-deactivated.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class SubscribersModeDeactivatedInstance extends BaseInstance<SubscribersModeDeactivatedEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<SubscribersModeDeactivatedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise SubscribersModeDeactivatedInstance',
        cause: err,
      })
    }
  }
}
