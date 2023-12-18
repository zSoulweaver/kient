import { ErrorBase } from '@/utils'

export class KientIncorrectCredentials extends ErrorBase {
  constructor(options?: ErrorOptions) {
    super('Provided username/email or password is incorrect', options)
  }
}
