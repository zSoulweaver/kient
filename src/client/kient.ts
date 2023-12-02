import { EventEmitter } from 'tseep'
import { ApiClient } from './api.client'
import { WsClient } from './ws.client'
import { AuthenticationEndpoint } from '@/endpoints/authentication/authentication.endpoint'
import { ChannelEndpoint } from '@/endpoints/channel/channel.endpoint'
import { ChatroomSocket } from '@/ws/chatroom/chatroom.socket'
import { ChatEndpoint } from '@/endpoints/chat/chat.endpoint'
import { ChannelSocket } from '@/ws/channel/channel.socket'
import { PrivateChannelSocket } from '@/ws/private-channel/private-channel.socket'
import { PrivateChatroomSocket } from '@/ws/private-chatroom/private-chatroom.socket'
import { PrivateLivestreamSocket } from '@/ws/private-livestream/private-livestream.socket'
import type { KientEventEmitters } from '@/ws/ws.events'

interface Endpoints {
  authentication: AuthenticationEndpoint
  channel: ChannelEndpoint
  chat: ChatEndpoint
}

interface WsHandlers {
  chatroom: ChatroomSocket
  channel: ChannelSocket
  privateChatroom: PrivateChatroomSocket
  privateChannel: PrivateChannelSocket
  privateLivestream: PrivateLivestreamSocket
}

export class Kient extends EventEmitter<KientEventEmitters> {
  private _endpoints: Endpoints
  private _wsHandlers: WsHandlers
  public _apiClient: ApiClient
  public _wsClient: WsClient
  public authenticated = false

  private constructor() {
    super()
  }

  private async init() {
    this._apiClient = await ApiClient.create(this)
    this._endpoints = {
      authentication: new AuthenticationEndpoint(this),
      channel: new ChannelEndpoint(this),
      chat: new ChatEndpoint(this),
    }

    this._wsClient = new WsClient(this)
    this._wsHandlers = {
      chatroom: new ChatroomSocket(this),
      channel: new ChannelSocket(this),
      privateChatroom: new PrivateChatroomSocket(this),
      privateChannel: new PrivateChannelSocket(this),
      privateLivestream: new PrivateLivestreamSocket(this),
    }
  }

  public static async create() {
    const kient = new Kient()
    await kient.init()
    return kient
  }

  public get api() {
    return this._endpoints
  }

  public get ws() {
    return this._wsHandlers
  }
}
