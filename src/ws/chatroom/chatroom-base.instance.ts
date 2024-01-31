import { BaseInstance } from '@/core/instance.base'

export abstract class ChatroomBaseInstance<T = any> extends BaseInstance<T> {
  chatroomId: string
}
