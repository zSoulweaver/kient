import { ErrorBase } from '@/errors'

/**
 * @category Errors
 */
export class KientInvalidCredentials extends ErrorBase {
  constructor(options?: ErrorOptions) {
    super('Provided login data is invalid', options)
  }
}
