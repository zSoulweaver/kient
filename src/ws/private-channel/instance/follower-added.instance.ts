// eslint-disable-next-line ts/consistent-type-imports
import { FollowerAddedEvent } from '../dto/follower-added.event'
import { ChannelBaseInstance } from '@/ws/channel/channel-base.instance'

/**
 * @category Instances
 */
export class FollowerAddedInstance extends ChannelBaseInstance<FollowerAddedEvent> { }
