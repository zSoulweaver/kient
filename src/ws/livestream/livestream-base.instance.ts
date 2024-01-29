import { BaseInstance } from '@/utils'

export abstract class LivestreamBaseInstance<T = any> extends BaseInstance<T> {
  livestreamId: string
}
