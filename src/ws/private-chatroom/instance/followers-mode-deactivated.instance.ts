// eslint-disable-next-line ts/consistent-type-imports
import { FollowersModeDeactivatedEvent } from '../dto/followers-mode-deactivated.event'
import { ChatroomBaseInstance } from '@/ws/chatroom/chatroom-base.instance'

/**
 * @category Instances
 */
export class FollowersModeDeactivatedInstance extends ChatroomBaseInstance<FollowersModeDeactivatedEvent> { }
