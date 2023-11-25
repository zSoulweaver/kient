import { BaseInstance } from '@/utils/instance.base'
import { Kient } from '@/client/kient'
import { cast } from '@deepkit/type'
import { KientError } from '@/client/kient.error'
import { LuckyUsersWhoGotGiftSubscriptionsEvent } from '../dto/lucky-users-who-got-gift-subscription.event'

export class LuckyUsersWhoGotGiftSubscriptionsInstance extends BaseInstance<LuckyUsersWhoGotGiftSubscriptionsEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<LuckyUsersWhoGotGiftSubscriptionsEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise LuckyUsersWhoGotGiftSubscriptionsInstance',
        cause: err
      })
    }
  }
}
