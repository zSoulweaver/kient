import { ChatroomBaseInstance } from '../chatroom-base.instance'
// eslint-disable-next-line ts/consistent-type-imports
import { PinnedMessageCreatedEvent } from '../dto/pinned-message-created.event'

/**
 * @category Instances
 */
export class PinnedMessageInstance extends ChatroomBaseInstance<PinnedMessageCreatedEvent> {
  public getMessage() {
    return this.data.message.content
  }
}
