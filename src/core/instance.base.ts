import type { Kient } from '@/kient'

export abstract class BaseInstance<T> {
  /** @internal */
  _client: Kient
  data: T
}
