import { BaseInstance } from '@/core/instance.base'

export abstract class ChannelBaseInstance<T = any> extends BaseInstance<T> {
  channelId: string
}
