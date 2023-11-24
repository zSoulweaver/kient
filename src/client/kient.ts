import { AuthenticationEndpoint } from '@/endpoints/authentication/authentication.endpoint'
import { ChannelEndpoint } from '@/endpoints/channel/channel.endpoint'
import { ApiClient } from './api.client'
import { Emitter } from 'strict-event-emitter'
import { KientEvents } from '@/ws/ws.events'
import { WsClient } from './ws.client'
import { ChatroomSocket } from '@/ws/chatroom/chatroom.socket'
import { ChatEndpoint } from '@/endpoints/chat/chat.endpoint'

interface Endpoints {
  authentication: AuthenticationEndpoint
  channel: ChannelEndpoint
  chat: ChatEndpoint
}

interface WsHandlers {
  chatroom: ChatroomSocket
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
      chat: new ChatEndpoint(this, this._apiClient)
    }

    this._wsClient = new WsClient(this)
    this._wsHandlers = {
      chatroom: new ChatroomSocket(this, this._wsClient)
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
