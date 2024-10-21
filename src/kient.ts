import { EventEmitter } from 'tseep'
import { ApiClient } from './core/api.client'
import { WsClient } from './core/ws.client'
import type { KientEventEmitters } from './kient.events'
import { AuthenticationEndpoint } from '@/endpoints/authentication/authentication.endpoint'
import { ChannelEndpoint } from '@/endpoints/channel/channel.endpoint'
import { ChatroomSocket } from '@/ws/chatroom/chatroom.socket'
import { ChatEndpoint } from '@/endpoints/chat/chat.endpoint'
import { ClipEndpoint } from '@/endpoints/clip/clip.endpoint'
import { ChannelSocket } from '@/ws/channel/channel.socket'
import { PrivateChannelSocket } from '@/ws/private-channel/private-channel.socket'
import { PrivateChatroomSocket } from '@/ws/private-chatroom/private-chatroom.socket'
import { PrivateLivestreamSocket } from '@/ws/private-livestream/private-livestream.socket'

interface Endpoints {
  authentication: AuthenticationEndpoint
  channel: ChannelEndpoint
  chat: ChatEndpoint
  clip: ClipEndpoint
}

interface WsHandlers {
  chatroom: ChatroomSocket
  channel: ChannelSocket
  privateChatroom: PrivateChatroomSocket
  privateChannel: PrivateChannelSocket
  privateLivestream: PrivateLivestreamSocket
}

interface LoginOptions {
  proxy?: string
}

/**
 * Entry class into Kient
 */
export class Kient extends EventEmitter<KientEventEmitters> {
  /** @internal */
  private _endpoints: Endpoints
  /** @internal */
  private _wsHandlers: WsHandlers
  public _apiClient: ApiClient
  public _wsClient: WsClient
  public authenticated = false

  /** @internal */
  private constructor(private options: LoginOptions = {}) {
    super()
  }

  /** @internal */
  private async init(options: LoginOptions) {
    this._apiClient = await ApiClient.create(this)
    this._apiClient.setProxy(options.proxy || '')
    this._endpoints = {
      authentication: new AuthenticationEndpoint(this),
      channel: new ChannelEndpoint(this),
      chat: new ChatEndpoint(this),
      clip: new ClipEndpoint(this),
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

  /**
   * Creates a new instance of Kient
   */
  public static async create(options: LoginOptions = {}) {
    const kient = new Kient(options)
    await kient.init(options)
    return kient
  }

  public get api() {
    return this._endpoints
  }

  public get ws() {
    return this._wsHandlers
  }
}
