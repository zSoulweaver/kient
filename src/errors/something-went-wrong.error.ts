import { ErrorBase } from './error.base'

/**
 * @category Errors
 */
export class KientSomethingWentWrong extends ErrorBase {
  constructor(options?: ErrorOptions) {
    super('Unknown error has occured', options)
  }
}
