// eslint-disable-next-line ts/consistent-type-imports
import { TitleChangedEvent } from '../dto/title-changed.event'
import { LivestreamBaseInstance } from '@/ws/livestream/livestream-base.instance'

/**
 * @category Instances
 */
export class TitleChangedInstance extends LivestreamBaseInstance<TitleChangedEvent> { }
