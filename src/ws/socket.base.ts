import type { Kient } from '@/kient'
import type { WsClient } from '@/core/ws.client'

export abstract class BaseSocket {
  /** @internal */
  protected readonly _client: Kient
  /** @internal */
  protected readonly _wsClient: WsClient

  /** @internal */
  public constructor(client: Kient) {
    this._client = client
    this._wsClient = client._wsClient
  }
}
