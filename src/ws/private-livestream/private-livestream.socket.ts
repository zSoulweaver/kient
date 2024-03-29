import { BaseSocket } from '../socket.base'
import type { LivestreamBaseInstance } from '../livestream/livestream-base.instance'
import { PrivateLivestreamEvents } from './private-livestream.events'
// eslint-disable-next-line ts/consistent-type-imports
import { HostReceivedInstance, MatureModeActivatedInstance, MatureModeDeactivatedInstance, UpdatedLiveStreamInstance } from './instance'
import { createInstance } from '@/utils/create-instance'
import { Events } from '@/kient.events'

// private-livestream events
type PusherChannelEvents =
  | 'HostReceived'
  | 'TitleChanged'
  | 'CategoryChanged' // Unused?
  | 'MatureModeActivated'
  | 'MatureModeDeactivated'

// private-livestream-updated events
type PusherChannelEvents2 =
  | 'App\\Events\\LiveStream\\UpdatedLiveStreamEvent'

/**
 * Uses the `private-livestream_${livestreamId}` & `private-livestream-updated.${livestreamId}` Pusher channels. Contains events directly related to the livestream, e.g, hosts received, title changes, etc.
 *
 * Full list of events listed on {@link PrivateLivestreamEventEmitters}.
 *
 * @category Sockets
 */
export class PrivateLivestreamSocket extends BaseSocket {
  public async listen(livestreamId: string | number) {
    const channel = await this._wsClient.subscribe(`private-livestream_${livestreamId}`)
    const channel2 = await this._wsClient.subscribe(`private-livestream-updated.${livestreamId}`)

    channel.bind_global((eventName: PusherChannelEvents, data: any) => {
      const instanceData: LivestreamBaseInstance = {
        data,
        _client: this._client,
        livestreamId: `${livestreamId}`,
      }

      switch (eventName) {
        case 'HostReceived':
          return this._client.emit(PrivateLivestreamEvents.HostReceived, createInstance<HostReceivedInstance>(instanceData))

        case 'MatureModeActivated':
          return this._client.emit(PrivateLivestreamEvents.MatureModeActivated, createInstance<MatureModeActivatedInstance>(instanceData))

        case 'MatureModeDeactivated':
          return this._client.emit(PrivateLivestreamEvents.MatureModeDeactivated, createInstance<MatureModeDeactivatedInstance>(instanceData))

        default:
          return this._client.emit(Events.Core.UnknownEvent, { eventName, data })
      }
    })

    channel2.bind_global((eventName: PusherChannelEvents2, data: any) => {
      const instanceData: LivestreamBaseInstance = {
        data,
        _client: this._client,
        livestreamId: `${livestreamId}`,
      }

      switch (eventName) {
        case 'App\\Events\\LiveStream\\UpdatedLiveStreamEvent':
          return this._client.emit(PrivateLivestreamEvents.LivestreamInformationUpdated, createInstance<UpdatedLiveStreamInstance>(instanceData))

        default:
          return this._client.emit(Events.Core.UnknownEvent, { eventName, data })
      }
    })
  }

  public async disconnect(livestreamId: string | number) {
    await this._wsClient.unsubscribe(`private-livestream_${livestreamId}`)
    await this._wsClient.unsubscribe(`private-livestream-updated.${livestreamId}`)
  }
}
