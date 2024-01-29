// eslint-disable-next-line ts/consistent-type-imports
import { UserTimeoutedEvent } from '../dto/user-timeouted.event'
import { ChatroomBaseInstance } from '@/ws/chatroom/chatroom-base.instance'

/**
 * @category Instances
 */
export class UserTimeoutedInstance extends ChatroomBaseInstance<UserTimeoutedEvent> { }
