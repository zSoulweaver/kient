import { cast } from '@deepkit/type'
import type { LuckyUsersWhoGotGiftSubscriptionsEvent } from '../dto/lucky-users-who-got-gift-subscription.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class LuckyUsersWhoGotGiftSubscriptionsInstance extends BaseInstance<LuckyUsersWhoGotGiftSubscriptionsEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<LuckyUsersWhoGotGiftSubscriptionsEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise LuckyUsersWhoGotGiftSubscriptionsInstance',
        cause: err,
      })
    }
  }
}
