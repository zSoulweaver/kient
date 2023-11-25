import { BaseInstance } from '@/utils/instance.base'
import { Kient } from '@/client/kient'
import { cast } from '@deepkit/type'
import { KientError } from '@/client/kient.error'
import { StreamHostEvent } from '../dto/stream-host.event'

export class StreamHostInstance extends BaseInstance<StreamHostEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<StreamHostEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise StreamHostInstance',
        cause: err
      })
    }
  }
}
