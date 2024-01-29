// eslint-disable-next-line ts/consistent-type-imports
import { BannedUserAddedEvent } from '../dto/banned-user-added.event'
import { ChatroomBaseInstance } from '@/ws/chatroom/chatroom-base.instance'

/**
 * @category Instances
 */
export class BannedUserAddedInstance extends ChatroomBaseInstance<BannedUserAddedEvent> { }
