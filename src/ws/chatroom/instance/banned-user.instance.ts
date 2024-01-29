import { ChatroomBaseInstance } from '../chatroom-base.instance'
// eslint-disable-next-line ts/consistent-type-imports
import { UserBannedEvent } from '../dto/user-banned.event'

/**
 * @category Instances
 */
export class BannedUserInstance extends ChatroomBaseInstance<UserBannedEvent> {
  isPermanent() {
    return !this.data.expires_at
  }
}
