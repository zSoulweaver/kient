import type { Kient } from '@/client/kient'
import type { WsClient } from '@/client/ws.client'

export abstract class BaseSocket {
  protected readonly _client: Kient
  protected readonly _wsClient: WsClient

  constructor(client: Kient) {
    this._client = client
    this._wsClient = client._wsClient
  }
}
