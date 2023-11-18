import { KientApiError } from '@/endpoints/api.error'
import { ErrorBase } from './error.base'

export class KientUnauthenticated extends KientApiError {
  constructor(cause?: any) {
    super({
      name: 'UNAUTHENTICATED',
      message: 'You must be logged in to access this endpoint',
      code: 401,
      cause
    })
  }
}
