import { BaseInstance } from '@/utils/instance.base'
import { Kient } from '@/client/kient'
import { cast } from '@deepkit/type'
import { KientError } from '@/client/kient.error'
import { GiftsLeaderboardUpdatedEvent } from '../dto/gifts-leaderboard-updated.event'

export class GiftsLeaderboardUpdatedInstance extends BaseInstance<GiftsLeaderboardUpdatedEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<GiftsLeaderboardUpdatedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise GiftsLeaderboardUpdatedInstance',
        cause: err
      })
    }
  }
}
