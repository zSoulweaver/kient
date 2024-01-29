// eslint-disable-next-line ts/consistent-type-imports
import { EmotesModeDeactivatedEvent } from '../dto/emotes-mode-deactivated.event'
import { ChatroomBaseInstance } from '@/ws/chatroom/chatroom-base.instance'

/**
 * @category Instances
 */
export class EmotesModeDeactivatedInstance extends ChatroomBaseInstance<EmotesModeDeactivatedEvent> { }
