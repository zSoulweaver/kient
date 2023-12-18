import { ErrorBase } from '@/utils'

export class KientSomethingWentWrong extends ErrorBase {
  constructor(options?: ErrorOptions) {
    super('Unknown error has occured', options)
  }
}
