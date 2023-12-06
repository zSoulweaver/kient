import type { Kient } from '@/client/kient'

export abstract class BaseInstance<T> {
  /** @internal */
  _client: Kient
  data: T
}
