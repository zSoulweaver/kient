import { ErrorBase } from '@/utils'

export class KientInvalidCredentials extends ErrorBase {
  constructor(options?: ErrorOptions) {
    super('Provided login data is invalid', options)
  }
}
