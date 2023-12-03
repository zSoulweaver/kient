import { cast } from '@deepkit/type'
import type { ChatroomClearEvent } from '../dto/chatroom-clear.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

/**
 * @category Instances
 */
export class ChatroomClearInstance extends BaseInstance<ChatroomClearEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<ChatroomClearEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise ChatroomClearInstance',
        cause: err,
      })
    }
  }
}
