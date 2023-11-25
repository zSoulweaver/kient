import { Emitter } from 'strict-event-emitter'
import { ApiClient } from './api.client'
import { WsClient } from './ws.client'
import { AuthenticationEndpoint } from '@/endpoints/authentication/authentication.endpoint'
import { ChannelEndpoint } from '@/endpoints/channel/channel.endpoint'
import type { KientEvents } from '@/ws/ws.events'
import { ChatroomSocket } from '@/ws/chatroom/chatroom.socket'
import { ChatEndpoint } from '@/endpoints/chat/chat.endpoint'
import { ChannelSocket } from '@/ws/channel/channel.socket'

interface Endpoints {
  authentication: AuthenticationEndpoint
  channel: ChannelEndpoint
  chat: ChatEndpoint
}

interface WsHandlers {
  chatroom: ChatroomSocket
  channel: ChannelSocket
}

export class Kient extends Emitter<KientEvents> {
  private _apiClient: ApiClient
  private _endpoints: Endpoints
  private _wsClient: WsClient
  private _wsHandlers: WsHandlers
  public authenticated = false

  private async init() {
    this._apiClient = await ApiClient.create(this)
    this._endpoints = {
      authentication: new AuthenticationEndpoint(this, this._apiClient),
      channel: new ChannelEndpoint(this, this._apiClient),
      chat: new ChatEndpoint(this, this._apiClient),
    }

    this._wsClient = new WsClient(this)
    this._wsHandlers = {
      chatroom: new ChatroomSocket(this, this._wsClient),
      channel: new ChannelSocket(this, this._wsClient),
    }
  }

  static async create() {
    const kient = new Kient()
    await kient.init()
    return kient
  }

  get api() {
    return this._endpoints
  }

  get ws() {
    return this._wsHandlers
  }
}
