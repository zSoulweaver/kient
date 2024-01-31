import { ErrorBase } from '@/errors'

/**
 * @category Errors
 */
export class KientOTPIncorrect extends ErrorBase {
  constructor(options?: ErrorOptions) {
    super('Provided one-time code is incorrect', options)
  }
}
