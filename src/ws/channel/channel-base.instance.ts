import { BaseInstance } from '@/utils'

export abstract class ChannelBaseInstance<T = any> extends BaseInstance<T> {
  channelId: string
}
