// eslint-disable-next-line ts/consistent-type-imports
import { BannedUserDeletedEvent } from '../dto/banned-user-deleted.event'
import { ChatroomBaseInstance } from '@/ws/chatroom/chatroom-base.instance'

/**
 * @category Instances
 */
export class BannedUserDeletedInstance extends ChatroomBaseInstance<BannedUserDeletedEvent> { }
