// eslint-disable-next-line ts/consistent-type-imports
import { UpdatedLiveStreamEvent } from '../dto/updated-livestream.event'
import { LivestreamBaseInstance } from '@/ws/livestream/livestream-base.instance'

/**
 * @category Instances
 */
export class UpdatedLiveStreamInstance extends LivestreamBaseInstance<UpdatedLiveStreamEvent> { }
