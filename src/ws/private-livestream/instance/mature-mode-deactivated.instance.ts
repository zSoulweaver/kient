// eslint-disable-next-line ts/consistent-type-imports
import { MatureModeDeactivatedEvent } from '../dto/mature-mode-deactiavted.event'
import { LivestreamBaseInstance } from '@/ws/livestream/livestream-base.instance'

/**
 * @category Instances
 */
export class MatureModeDeactivatedInstance extends LivestreamBaseInstance<MatureModeDeactivatedEvent> { }
