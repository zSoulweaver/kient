import { BaseSocket } from '../socket.base'
import { BannedUserAddedInstance } from './instance/banned-user-added.instance'
import { BannedUserDeletedInstance } from './instance/banned-user-deleted.instance'
import { BannedWordAddedInstance } from './instance/banned-word-added.instance'
import { BannedWordDeletedInstance } from './instance/banned-word-deleted.instance'
import { EmotesModeActivatedInstance } from './instance/emotes-mode-activated.instance'
import { EmotesModeDeactivatedInstance } from './instance/emotes-mode-deactivated.instance'
import { FollowersModeActivatedInstance } from './instance/followers-mode-activated.instance'
import { FollowersModeDeactivatedInstance } from './instance/followers-mode-deactivated.instance'
import { SlowModeActivatedInstance } from './instance/slow-mode-activated.instance'
import { SlowModeDeactivatedInstance } from './instance/slow-mode-deactivated.instance'
import { SubscribersModeActivatedInstance } from './instance/subscribers-mode-activated.event'
import { SubscribersModeDeactivatedInstance } from './instance/subscribers-mode-deactivated.instance'
import { UserTimeoutedInstance } from './instance/user-timeouted.instance'
import type { PrivateChatroomEvents } from './private-chatroom.events'

type PusherChannelEvents =
  | 'BannedWordAdded'
  | 'BannedWordDeleted'
  | 'BannedUserAdded'
  | 'BannedUserDeleted'
  | 'UserTimeouted'
  | 'MessageDeleted' // Unused?
  | 'SlowModeActivated'
  | 'SlowModeDeactivated'
  | 'EmotesModeActivated'
  | 'EmotesModeDeactivated'
  | 'FollowersModeActivated'
  | 'FollowersModeDeactivated'
  | 'SubscribersModeActivated'
  | 'SubscribersModeDeactivated'
  | 'AllowLinksActivated' // Unused?
  | 'AllowLinksDeactivated' // Unused?

export class PrivateChatroomSocket extends BaseSocket<PrivateChatroomEvents> {
  public async listen(chatroomId: string | number) {
    const channel = await this._wsClient.subscribe(`private-chatroom_${chatroomId}`)

    channel.bind_global((eventName: PusherChannelEvents, data: any) => {
      switch (eventName) {
        case 'BannedWordAdded':
          return this.emit('onBannedWordAdded', new BannedWordAddedInstance(data, this._client))

        case 'BannedWordDeleted':
          return this.emit('onBannedWordDeleted', new BannedWordDeletedInstance(data, this._client))

        case 'BannedUserAdded':
          return this.emit('onBannedUserAdded', new BannedUserAddedInstance(data, this._client))

        case 'BannedUserDeleted':
          return this.emit('onBannedUserDeleted', new BannedUserDeletedInstance(data, this._client))

        case 'UserTimeouted':
          return this.emit('onUserTimeout', new UserTimeoutedInstance(data, this._client))

        case 'SlowModeActivated':
          return this.emit('onSlowModeActivated', new SlowModeActivatedInstance(data, this._client))

        case 'SlowModeDeactivated':
          return this.emit('onSlowModeDeactivated', new SlowModeDeactivatedInstance(data, this._client))

        case 'EmotesModeActivated':
          return this.emit('onEmotesModeActivated', new EmotesModeActivatedInstance(data, this._client))

        case 'EmotesModeDeactivated':
          return this.emit('onEmotesModeDeactivated', new EmotesModeDeactivatedInstance(data, this._client))

        case 'FollowersModeActivated':
          return this.emit('onFollowersModeActivated', new FollowersModeActivatedInstance(data, this._client))

        case 'FollowersModeDeactivated':
          return this.emit('onFollowersModeDeactivated', new FollowersModeDeactivatedInstance(data, this._client))

        case 'SubscribersModeActivated':
          return this.emit('onSubscribersModeActivated', new SubscribersModeActivatedInstance(data, this._client))

        case 'SubscribersModeDeactivated':
          return this.emit('onSubscribersModeDeactivated', new SubscribersModeDeactivatedInstance(data, this._client))

        default:
          return this.emit('UnknownEvent', { eventName, data })
      }
    })
  }

  public async disconnect(chatroomId: string | number) {
    await this._wsClient.unsubscribe(`private-chatroom_${chatroomId}`)
  }
}
