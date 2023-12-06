// eslint-disable-next-line ts/consistent-type-imports
import { UserUnbannedEvent } from '../dto/user-unbanned.event'
import { BaseInstance } from '@/utils/instance.base'

/**
 * @category Instances
 */
export class UnbannedUserInstance extends BaseInstance<UserUnbannedEvent> { }
