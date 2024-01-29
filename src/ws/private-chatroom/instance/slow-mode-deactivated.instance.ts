// eslint-disable-next-line ts/consistent-type-imports
import { SlowModeDeactivatedEvent } from '../dto/slow-mode-deactivated.event'
import { ChatroomBaseInstance } from '@/ws/chatroom/chatroom-base.instance'

/**
 * @category Instances
 */
export class SlowModeDeactivatedInstance extends ChatroomBaseInstance<SlowModeDeactivatedEvent> { }
