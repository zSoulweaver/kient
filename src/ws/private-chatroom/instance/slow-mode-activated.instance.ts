// eslint-disable-next-line ts/consistent-type-imports
import { SlowModeActivatedEvent } from '../dto/slow-mode-activated.event'
import { ChatroomBaseInstance } from '@/ws/chatroom/chatroom-base.instance'

/**
 * @category Instances
 */
export class SlowModeActivatedInstance extends ChatroomBaseInstance<SlowModeActivatedEvent> { }
