// eslint-disable-next-line ts/consistent-type-imports
import { HostReceivedEvent } from '../dto/host-received.event'
import { LivestreamBaseInstance } from '@/ws/livestream/livestream-base.instance'

/**
 * @category Instances
 */
export class HostReceivedInstance extends LivestreamBaseInstance<HostReceivedEvent> { }
