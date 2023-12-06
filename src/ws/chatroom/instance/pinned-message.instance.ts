// eslint-disable-next-line ts/consistent-type-imports
import { PinnedMessageCreatedEvent } from '../dto/pinned-message-created.event'
import { BaseInstance } from '@/utils/instance.base'

/**
 * @category Instances
 */
export class PinnedMessageInstance extends BaseInstance<PinnedMessageCreatedEvent> {
  public getMessage() {
    return this.data.message.content
  }
}
