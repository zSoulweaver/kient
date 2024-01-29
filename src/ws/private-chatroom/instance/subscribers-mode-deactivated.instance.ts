// eslint-disable-next-line ts/consistent-type-imports
import { SubscribersModeDeactivatedEvent } from '../dto/subscribers-mode-deactivated.event'
import { ChatroomBaseInstance } from '@/ws/chatroom/chatroom-base.instance'

/**
 * @category Instances
 */
export class SubscribersModeDeactivatedInstance extends ChatroomBaseInstance<SubscribersModeDeactivatedEvent> { }
