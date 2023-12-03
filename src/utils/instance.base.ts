import type { Kient } from '@/client/kient'

export abstract class BaseInstance<T> {
  /** @internal */
  protected _client: Kient
  public data: T

  /** @internal */
  public constructor(data: T, client: Kient) {
    this._client = client
    this.data = data
  }
}
