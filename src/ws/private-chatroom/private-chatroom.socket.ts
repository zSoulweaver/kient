import { BaseSocket } from '../socket.base'

type ChannelEvents =
  | 'BannedWordAdded'
  | 'BannedWordDeleted'
  | 'BannedUserAdded'
  | 'BannedUserDeleted'
  | 'UserTimeouted'
  | 'MessageDeleted'
  | 'SlowModeActivated'
  | 'SlowModeDeactivated'
  | 'EmotesModeActivated'
  | 'EmotesModeDeactivated'
  | 'FollowersModeActivated'
  | 'FollowersModeDeactivated'
  | 'SubscribersModeActivated'
  | 'SubscribersModeDeactivated'
  | 'AllowLinksActivated'
  | 'AllowLinksDeactivated'

export class PrivateChatroomSocket extends BaseSocket {
  public async listen(chatroomId: string | number) {
    const channel = await this._wsClient.subscribe(`private-chatroom_${chatroomId}`)

    channel.bind_global((eventName: ChannelEvents, data: any) => {
      switch (eventName) {
        default:
          return this._client.emit('UnknownEvent', { eventName, data })
      }
    })
  }

  public async disconnect(chatroomId: string | number) {
    await this._wsClient.unsubscribe(`private-chatroom_${chatroomId}`)
  }
}
