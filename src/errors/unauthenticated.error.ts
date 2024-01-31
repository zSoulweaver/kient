import { ErrorBase } from './error.base'

/**
 * @category Errors
 */
export class KientUnauthenticated extends ErrorBase {
  constructor(options?: ErrorOptions) {
    super('You must be logged in to access this endpoint', options)
  }
}
