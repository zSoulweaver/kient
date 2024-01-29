import { BaseInstance } from '@/utils'

export abstract class ChatroomBaseInstance<T = any> extends BaseInstance<T> {
  chatroomId: string
}
