import { BaseInstance } from '@/utils/instance.base'
import { Kient } from '@/client/kient'
import { cast } from '@deepkit/type'
import { KientError } from '@/client/kient.error'
import { ChatroomUpdatedEvent } from '../dto/chatroom-updated.event'

export class ChatroomUpdatedInstance extends BaseInstance<ChatroomUpdatedEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<ChatroomUpdatedEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise ChatroomUpdatedInstance',
        cause: err
      })
    }
  }
}
