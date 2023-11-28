import { BaseSocket } from '../socket.base'
import { HostReceivedInstance } from './instance/host-received.instance'
import { MatureModeActivatedInstance } from './instance/mature-mode-activated.instance'
import { MatureModeDeactivatedInstance } from './instance/mature-mode-deactivated.instance'
import { UpdatedLiveStreamInstance } from './instance/updated-livestream.instance'

// private-livestream events
type ChannelEvents =
  | 'HostReceived'
  | 'TitleChanged'
  | 'CategoryChanged' // Unused?
  | 'MatureModeActivated'
  | 'MatureModeDeactivated'

// private-livestream-updated events
type ChannelEvents2 =
  | 'App\\Events\\LiveStream\\UpdatedLiveStreamEvent'

export class PrivateLivestreamSocket extends BaseSocket {
  public async listen(livestreamId: string | number) {
    const channel = await this._wsClient.subscribe(`private-livestream_${livestreamId}`)
    const channel2 = await this._wsClient.subscribe(`private-livestream-updated.${livestreamId}`)

    channel.bind_global((eventName: ChannelEvents, data: any) => {
      switch (eventName) {
        case 'HostReceived':
          return this._client.emit('onHostReceived', new HostReceivedInstance(data, this._client))

        case 'MatureModeActivated':
          return this._client.emit('onMatureModeActivated', new MatureModeActivatedInstance(data, this._client))

        case 'MatureModeDeactivated':
          return this._client.emit('onMatureModeDeactivated', new MatureModeDeactivatedInstance(data, this._client))

        default:
          return this._client.emit('UnknownEvent', { eventName, data })
      }
    })

    channel2.bind_global((eventName: ChannelEvents2, data: any) => {
      switch (eventName) {
        case 'App\\Events\\LiveStream\\UpdatedLiveStreamEvent':
          return this._client.emit('onLivestreamInformationUpdate', new UpdatedLiveStreamInstance(data, this._client))

        default:
          return this._client.emit('UnknownEvent', { eventName, data })
      }
    })
  }

  public async disconnect(livestreamId: string | number) {
    await this._wsClient.unsubscribe(`private-livestream_${livestreamId}`)
    await this._wsClient.unsubscribe(`private-livestream-updated.${livestreamId}`)
  }
}
