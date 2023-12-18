import { ErrorBase } from '@/utils'

/**
 * @category Errors
 */
export class KientSomethingWentWrong extends ErrorBase {
  constructor(options?: ErrorOptions) {
    super('Unknown error has occured', options)
  }
}
