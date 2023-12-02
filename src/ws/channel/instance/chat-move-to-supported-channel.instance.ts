import { cast } from '@deepkit/type'
import type { ChatMoveToSupportedChannelEvent } from '../dto/chat-move-to-supported-channel.event'
import { BaseInstance } from '@/utils/instance.base'
import type { Kient } from '@/client/kient'
import { KientError } from '@/client/kient.error'

export class ChatMoveToSupportedChannelInstance extends BaseInstance<ChatMoveToSupportedChannelEvent> {
  public constructor(data: any, client: Kient) {
    try {
      super(cast<ChatMoveToSupportedChannelEvent>(data), client)
    } catch (err) {
      throw new KientError({
        name: 'SOMETHING_WENT_WRONG',
        message: 'Failed to initialise ChatMoveToSupportedChannelInstance',
        cause: err,
      })
    }
  }
}
