import type { Channel, Options } from 'pusher-js'
import Pusher from 'pusher-js'
import type { Kient } from './kient'
import { KientWsError } from '@/ws/ws.error'

export class WsClient {
  private readonly _client: Kient
  private readonly PUSHER_APP_KEY = 'eb1d5f283081a78b932c'
  private readonly pusher: Pusher

  constructor(client: Kient) {
    this._client = client

    const pusherOptions: Options = {
      cluster: 'us2',
    }
    this.pusher = new Pusher(this.PUSHER_APP_KEY, pusherOptions)
    this.pusher.connection.bind('connected', () => this._client.emit('wsConnected'))
    this.pusher.connection.bind('disconnected', () => this._client.emit('wsDisconnected'))
  }

  public async subscribe(channel: string) {
    return new Promise<Channel>((resolve, _) => {
      const subscribedChannel = this.pusher.subscribe(channel)
      subscribedChannel.bind('pusher:subscription_error', (error: any) => {
        throw new KientWsError({
          name: 'SUBSCRIPTION_FAILED',
          message: error,
        })
      })
      subscribedChannel.bind('pusher:subscription_succeeded', () => {
        resolve(subscribedChannel)
      })
    })
  }

  public async unsubscribe(channel: string) {
    await this.pusher.unsubscribe(channel)
  }
}
