// eslint-disable-next-line ts/consistent-type-imports
import { SubscriptionRenewedEvent } from '../dto/subscription-renewed.event'
import { ChannelBaseInstance } from '@/ws/channel/channel-base.instance'

/**
 * @category Instances
 */
export class SubscriptionRenewedInstance extends ChannelBaseInstance<SubscriptionRenewedEvent> { }
