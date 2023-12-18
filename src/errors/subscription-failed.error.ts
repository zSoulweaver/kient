import { ErrorBase } from '@/utils'

export class KientSubscriptionFailed extends ErrorBase {
  constructor(options?: ErrorOptions) {
    super('Failed to subscribe to Pusher channel', options)
  }
}
