import { cast } from '@deepkit/type'
import type { ChatroomUpdatedEvent } from '../dto/chatroom-updated.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

/**
 * @category Instances
 */
export class ChatroomUpdatedInstance extends BaseInstance<ChatroomUpdatedEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<ChatroomUpdatedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise ChatroomUpdatedInstance',
        cause: err,
      })
    }
  }
}
