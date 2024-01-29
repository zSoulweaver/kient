// eslint-disable-next-line ts/consistent-type-imports
import { SubscriptionCreatedEvent } from '../dto/subscription-created.event'
import { ChannelBaseInstance } from '@/ws/channel/channel-base.instance'

/**
 * @category Instances
 */
export class SubscriptionCreatedInstance extends ChannelBaseInstance<SubscriptionCreatedEvent> { }
