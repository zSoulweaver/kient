import { BaseInstance } from '@/core/instance.base'

export abstract class LivestreamBaseInstance<T = any> extends BaseInstance<T> {
  livestreamId: string
}
