// eslint-disable-next-line ts/consistent-type-imports
import { BannedWordAddedEvent } from '../dto/banned-word-added.event'
import { ChatroomBaseInstance } from '@/ws/chatroom/chatroom-base.instance'

/**
 * @category Instances
 */
export class BannedWordAddedInstance extends ChatroomBaseInstance<BannedWordAddedEvent> { }
