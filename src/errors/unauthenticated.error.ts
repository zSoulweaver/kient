import { ErrorBase } from '@/utils'

export class KientUnauthenticated extends ErrorBase {
  constructor(options?: ErrorOptions) {
    super('You must be logged in to access this endpoint', options)
  }
}
