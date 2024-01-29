// eslint-disable-next-line ts/consistent-type-imports
import { BannedWordDeletedEvent } from '../dto/banned-word-deleted.event'
import { ChatroomBaseInstance } from '@/ws/chatroom/chatroom-base.instance'

/**
 * @category Instances
 */
export class BannedWordDeletedInstance extends ChatroomBaseInstance<BannedWordDeletedEvent> { }
