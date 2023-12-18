import { ErrorBase } from '@/utils'

/**
 * @category Errors
 */
export class KientOTPIncorrect extends ErrorBase {
  constructor(options?: ErrorOptions) {
    super('Provided one-time code is incorrect', options)
  }
}
