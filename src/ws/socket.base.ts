import { Kient } from '@/client/kient'
import { WsClient } from '@/client/ws.client'

export abstract class BaseSocket {
  protected readonly _client: Kient
  protected readonly _wsClient: WsClient

  constructor(client: Kient, wsClient: WsClient) {
    this._client = client
    this._wsClient = wsClient
  }
}
