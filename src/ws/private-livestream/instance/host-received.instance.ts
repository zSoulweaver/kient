import { cast } from '@deepkit/type'
import type { HostReceivedEvent } from '../dto/host-received.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class HostReceivedInstance extends BaseInstance<HostReceivedEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<HostReceivedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise HostReceivedInstance',
        cause: err,
      })
    }
  }
}
