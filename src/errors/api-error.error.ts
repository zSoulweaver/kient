import { ErrorBase } from './error.base'

/**
 * @category Errors
 */
export class KientApiError extends ErrorBase {
  constructor(message: string | Record<string, any>, options?: ErrorOptions) {
    super(`Error has occured whilst calling Kick's API: ${message}`, options)
  }
}
