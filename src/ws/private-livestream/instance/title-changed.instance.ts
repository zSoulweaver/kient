import { cast } from '@deepkit/type'
import type { TitleChangedEvent } from '../dto/title-changed.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class TitleChangedInstance extends BaseInstance<TitleChangedEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<TitleChangedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise TitleChangedInstance',
        cause: err,
      })
    }
  }
}
