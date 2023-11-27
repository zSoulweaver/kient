import { cast } from '@deepkit/type'
import type { StreamerIsLiveEvent } from '../dto/streamer-is-live.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class StreamerIsLiveInstance extends BaseInstance<StreamerIsLiveEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<StreamerIsLiveEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise StreamerIsLiveInstance',
        cause: err,
      })
    }
  }
}
