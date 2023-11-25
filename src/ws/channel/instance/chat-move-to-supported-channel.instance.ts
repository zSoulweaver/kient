import { BaseInstance } from '@/utils/instance.base'
import { Kient } from '@/client/kient'
import { cast } from '@deepkit/type'
import { KientError } from '@/client/kient.error'
import { ChatMoveToSupportedChannelEvent } from '../dto/chat-move-to-supported-channel.event'

export class ChatMoveToSupportedChannelInstance extends BaseInstance<ChatMoveToSupportedChannelEvent> {
  constructor(data: any, client: Kient) {
    try {
      super(cast<ChatMoveToSupportedChannelEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise ChatMoveToSupportedChannelInstance',
        cause: err
      })
    }
  }
}
