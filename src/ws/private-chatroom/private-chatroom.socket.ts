import { BaseSocket } from '../socket.base'
import type { ChatroomBaseInstance } from '../chatroom/chatroom-base.instance'
import { PrivateChatroomEvents } from './private-chatroom.events'
// eslint-disable-next-line ts/consistent-type-imports
import { BannedUserAddedInstance, BannedUserDeletedInstance, BannedWordAddedInstance, BannedWordDeletedInstance, EmotesModeActivatedInstance, EmotesModeDeactivatedInstance, FollowersModeActivatedInstance, FollowersModeDeactivatedInstance, SlowModeActivatedInstance, SlowModeDeactivatedInstance, SubscribersModeActivatedInstance, SubscribersModeDeactivatedInstance, UserTimeoutedInstance } from './instance'
import { createInstance } from '@/utils/create-instance'
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
 * Uses the `private-chatroom_${chatroomId}` Pusher channel. Contains events directly related to the chatroom, e.g, banned words, chat modes (slow, follower, etc), etc.
 *
 * Full list of events listed on {@link PrivateChatroomEventEmitters}.
 *
 * @category Sockets
 */
export class PrivateChatroomSocket extends BaseSocket {
  public async listen(chatroomId: string | number) {
    const channel = await this._wsClient.subscribe(`private-chatroom_${chatroomId}`)

    channel.bind_global((eventName: PusherChannelEvents, data: any) => {
      const instanceData: ChatroomBaseInstance = {
        data,
        _client: this._client,
        chatroomId: `${chatroomId}`,
      }

      switch (eventName) {
        case 'BannedWordAdded':
          return this._client.emit(PrivateChatroomEvents.BannedWordAdded, createInstance<BannedWordAddedInstance>(instanceData))

        case 'BannedWordDeleted':
          return this._client.emit(PrivateChatroomEvents.BannedWordDeleted, createInstance<BannedWordDeletedInstance>(instanceData))
        case 'BannedUserAdded':
          return this._client.emit(PrivateChatroomEvents.BannedUserAdded, createInstance<BannedUserAddedInstance>(instanceData))

        case 'BannedUserDeleted':
          return this._client.emit(PrivateChatroomEvents.BannedUserDeleted, createInstance<BannedUserDeletedInstance>(instanceData))

        case 'UserTimeouted':
          return this._client.emit(PrivateChatroomEvents.UserTimedOut, createInstance<UserTimeoutedInstance>(instanceData))

        case 'SlowModeActivated':
          return this._client.emit(PrivateChatroomEvents.SlowModeActivated, createInstance<SlowModeActivatedInstance>(instanceData))

        case 'SlowModeDeactivated':
          return this._client.emit(PrivateChatroomEvents.SlowModeDeactivated, createInstance<SlowModeDeactivatedInstance>(instanceData))

        case 'EmotesModeActivated':
          return this._client.emit(PrivateChatroomEvents.EmotesOnlyModeActivated, createInstance<EmotesModeActivatedInstance>(instanceData))

        case 'EmotesModeDeactivated':
          return this._client.emit(PrivateChatroomEvents.EmotesOnlyModeDeactivated, createInstance<EmotesModeDeactivatedInstance>(instanceData))

        case 'FollowersModeActivated':
          return this._client.emit(PrivateChatroomEvents.FollowersOnlyModeActivated, createInstance<FollowersModeActivatedInstance>(instanceData))

        case 'FollowersModeDeactivated':
          return this._client.emit(PrivateChatroomEvents.FollowersOnlyModeDeactivated, createInstance<FollowersModeDeactivatedInstance>(instanceData))

        case 'SubscribersModeActivated':
          return this._client.emit(PrivateChatroomEvents.SubscribersOnlyModeActivated, createInstance<SubscribersModeActivatedInstance>(instanceData))

        case 'SubscribersModeDeactivated':
          return this._client.emit(PrivateChatroomEvents.SlowModeDeactivated, createInstance<SubscribersModeDeactivatedInstance>(instanceData))

        default:
          return this._client.emit(Events.Core.UnknownEvent, { eventName, data })
      }
    })
  }

  public async disconnect(chatroomId: string | number) {
    await this._wsClient.unsubscribe(`private-chatroom_${chatroomId}`)
  }
}
