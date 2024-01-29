import { ChatroomBaseInstance } from '../chatroom-base.instance'
// eslint-disable-next-line ts/consistent-type-imports
import { UserUnbannedEvent } from '../dto/user-unbanned.event'

/**
 * @category Instances
 */
export class UnbannedUserInstance extends ChatroomBaseInstance<UserUnbannedEvent> { }
