import type { Channel, ChannelAuthorizationCallback, Options } from 'pusher-js'
import Pusher from 'pusher-js'
import type { ChannelAuthorizationRequestParams } from 'pusher-js/types/src/core/auth/options'
import type { Kient } from '../kient'
import { Events } from '../kient.events'
import { KientSubscriptionFailed } from '@/errors'

export class WsClient {
  private readonly _client: Kient
  private readonly PUSHER_APP_KEY = '32cbd69e4b950bf97679'
  private readonly pusher: Pusher

  public constructor(client: Kient) {
    this._client = client

    const pusherOptions: Options = {
      cluster: 'us2',
      channelAuthorization: {
        transport: 'ajax',
        endpoint: 'broadcasting/auth',
        customHandler: (params, callback) => this.handlePusherAuthentication(params, callback),
      },
    }
    this.pusher = new Pusher(this.PUSHER_APP_KEY, pusherOptions)
    this.pusher.connection.bind('connected', () => this._client.emit(Events.Core.WebSocketConnected))
    this.pusher.connection.bind('disconnected', () => this._client.emit(Events.Core.WebSocketDisconnected))
  }

  public async subscribe(channel: string) {
    return new Promise<Channel>((resolve, _) => {
      const subscribedChannel = this.pusher.subscribe(channel)
      subscribedChannel.bind('pusher:subscription_error', (error: { type: string; error: string; status: number }) => {
        throw new KientSubscriptionFailed({ cause: error })
      })
      subscribedChannel.bind('pusher:subscription_succeeded', () => {
        resolve(subscribedChannel)
      })
    })
  }

  public async unsubscribe(channel: string) {
    await this.pusher.unsubscribe(channel)
  }

  private handlePusherAuthentication(params: ChannelAuthorizationRequestParams, callback: ChannelAuthorizationCallback) {
    this._client.api.authentication.pusherAuthenticate(params)
      .then((response) => {
        callback(null, { auth: response.auth })
      })
      .catch((err) => {
        callback(err, null)
      })
  }
}
