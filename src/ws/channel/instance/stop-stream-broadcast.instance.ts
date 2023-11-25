import { BaseInstance } from '@/utils/instance.base'
import { Kient } from '@/client/kient'
import { cast } from '@deepkit/type'
import { KientError } from '@/client/kient.error'
import { StopStreamBroadcastEvent } from '../dto/stop-stream-broadcast.event'

export class StopStreamBroadcastInstance extends BaseInstance<StopStreamBroadcastEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<StopStreamBroadcastEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise StopStreamBroadcastInstance',
        cause: err
      })
    }
  }
}
