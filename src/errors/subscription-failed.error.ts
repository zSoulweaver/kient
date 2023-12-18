import { ErrorBase } from '@/utils'

/**
 * @category Errors
 */
export class KientSubscriptionFailed extends ErrorBase {
  constructor(options?: ErrorOptions) {
    super('Failed to subscribe to Pusher channel', options)
  }
}
