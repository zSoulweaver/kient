import { ErrorBase } from '@/errors'

/**
 * @category Errors
 */
export class KientIncorrectCredentials extends ErrorBase {
  constructor(options?: ErrorOptions) {
    super('Provided username/email or password is incorrect', options)
  }
}
