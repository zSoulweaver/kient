import { cast } from '@deepkit/type'
import type { GiftsLeaderboardUpdatedEvent } from '../dto/gifts-leaderboard-updated.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

/**
 * @category Instances
 */
export class GiftsLeaderboardUpdatedInstance extends BaseInstance<GiftsLeaderboardUpdatedEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<GiftsLeaderboardUpdatedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise GiftsLeaderboardUpdatedInstance',
        cause: err,
      })
    }
  }
}
