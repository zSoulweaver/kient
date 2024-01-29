// eslint-disable-next-line ts/consistent-type-imports
import { FollowersModeActivatedEvent } from '../dto/followers-mode-activated.event'
import { ChatroomBaseInstance } from '@/ws/chatroom/chatroom-base.instance'

/**
 * @category Instances
 */
export class FollowersModeActivatedInstance extends ChatroomBaseInstance<FollowersModeActivatedEvent> { }
