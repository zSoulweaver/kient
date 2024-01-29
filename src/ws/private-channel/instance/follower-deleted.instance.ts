// eslint-disable-next-line ts/consistent-type-imports
import { FollowerDeletedEvent } from '../dto/follower-deleted.event'
import { ChannelBaseInstance } from '@/ws/channel/channel-base.instance'

/**
 * @category Instances
 */
export class FollowerDeletedInstance extends ChannelBaseInstance<FollowerDeletedEvent> { }
