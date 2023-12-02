import { cast } from '@deepkit/type'
import type { StopStreamBroadcastEvent } from '../dto/stop-stream-broadcast.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class StopStreamBroadcastInstance extends BaseInstance<StopStreamBroadcastEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<StopStreamBroadcastEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise StopStreamBroadcastInstance',
        cause: err,
      })
    }
  }
}
