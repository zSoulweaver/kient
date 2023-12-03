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
import { PrivateChatroomEvents } from './private-chatroom.events'
import { Events } from '@/client/kient.events'

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

/**
 * @category Sockets
 */
export class PrivateChatroomSocket extends BaseSocket {
  public async listen(chatroomId: string | number) {
    const channel = await this._wsClient.subscribe(`private-chatroom_${chatroomId}`)

    channel.bind_global((eventName: PusherChannelEvents, data: any) => {
      switch (eventName) {
        case 'BannedWordAdded':
          return this._client.emit(PrivateChatroomEvents.BannedWordAdded, new BannedWordAddedInstance(data, this._client))

        case 'BannedWordDeleted':
          return this._client.emit(PrivateChatroomEvents.BannedWordDeleted, new BannedWordDeletedInstance(data, this._client))

        case 'BannedUserAdded':
          return this._client.emit(PrivateChatroomEvents.BannedUserAdded, new BannedUserAddedInstance(data, this._client))

        case 'BannedUserDeleted':
          return this._client.emit(PrivateChatroomEvents.BannedUserDeleted, new BannedUserDeletedInstance(data, this._client))

        case 'UserTimeouted':
          return this._client.emit(PrivateChatroomEvents.UserTimedOut, new UserTimeoutedInstance(data, this._client))

        case 'SlowModeActivated':
          return this._client.emit(PrivateChatroomEvents.SlowModeActivated, new SlowModeActivatedInstance(data, this._client))

        case 'SlowModeDeactivated':
          return this._client.emit(PrivateChatroomEvents.SlowModeDeactivated, new SlowModeDeactivatedInstance(data, this._client))

        case 'EmotesModeActivated':
          return this._client.emit(PrivateChatroomEvents.EmotesOnlyModeActivated, new EmotesModeActivatedInstance(data, this._client))

        case 'EmotesModeDeactivated':
          return this._client.emit(PrivateChatroomEvents.EmotesOnlyModeDeactivated, new EmotesModeDeactivatedInstance(data, this._client))

        case 'FollowersModeActivated':
          return this._client.emit(PrivateChatroomEvents.FollowersOnlyModeActivated, new FollowersModeActivatedInstance(data, this._client))

        case 'FollowersModeDeactivated':
          return this._client.emit(PrivateChatroomEvents.FollowersOnlyModeDeactivated, new FollowersModeDeactivatedInstance(data, this._client))

        case 'SubscribersModeActivated':
          return this._client.emit(PrivateChatroomEvents.SubscribersOnlyModeActivated, new SubscribersModeActivatedInstance(data, this._client))

        case 'SubscribersModeDeactivated':
          return this._client.emit(PrivateChatroomEvents.SlowModeDeactivated, new SubscribersModeDeactivatedInstance(data, this._client))

        default:
          return this._client.emit(Events.Core.UnknownEvent, { eventName, data })
      }
    })
  }

  public async disconnect(chatroomId: string | number) {
    await this._wsClient.unsubscribe(`private-chatroom_${chatroomId}`)
  }
}
