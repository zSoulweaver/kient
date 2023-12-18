import { ErrorBase } from '@/utils'

/**
 * @category Errors
 */
export class KientIncorrectCredentials extends ErrorBase {
  constructor(options?: ErrorOptions) {
    super('Provided username/email or password is incorrect', options)
  }
}
