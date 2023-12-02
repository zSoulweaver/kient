import type { EventMap } from 'strict-event-emitter'
import { Emitter } from 'strict-event-emitter'
import type { GenericKientEvents } from './ws.events'
import type { Kient } from '@/client/kient'
import type { WsClient } from '@/client/ws.client'

export abstract class BaseSocket<T extends EventMap> extends Emitter<T & GenericKientEvents> {
  protected readonly _client: Kient
  protected readonly _wsClient: WsClient

  constructor(client: Kient) {
    super()
    this._client = client
    this._wsClient = client._wsClient
  }
}
