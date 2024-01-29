import { ChannelBaseInstance } from '../channel-base.instance'
// eslint-disable-next-line ts/consistent-type-imports
import { FollowersUpdatedEvent } from '../dto/followers-updated.event'

/**
 * @category Instances
 */
export class FollowersUpdateInstance extends ChannelBaseInstance<FollowersUpdatedEvent> { }
