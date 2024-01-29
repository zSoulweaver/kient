// eslint-disable-next-line ts/consistent-type-imports
import { EmotesModeActivatedEvent } from '../dto/emotes-mode-activated.event'
import { ChatroomBaseInstance } from '@/ws/chatroom/chatroom-base.instance'

/**
 * @category Instances
 */
export class EmotesModeActivatedInstance extends ChatroomBaseInstance<EmotesModeActivatedEvent> { }
