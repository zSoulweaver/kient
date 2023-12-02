import { cast } from '@deepkit/type'
import type { UpdatedLiveStreamEvent } from '../dto/updated-livestream.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class UpdatedLiveStreamInstance extends BaseInstance<UpdatedLiveStreamEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<UpdatedLiveStreamEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise UpdatedLiveStreamInstance',
        cause: err,
      })
    }
  }
}
