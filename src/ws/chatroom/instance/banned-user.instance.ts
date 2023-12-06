// eslint-disable-next-line ts/consistent-type-imports
import { UserBannedEvent } from '../dto/user-banned.event'
import { BaseInstance } from '@/utils/instance.base'

/**
 * @category Instances
 */
export class BannedUserInstance extends BaseInstance<UserBannedEvent> { }
