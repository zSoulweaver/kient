import { KientApiError } from '@/endpoints/api.error'

export class KientUnauthenticated extends KientApiError {
  public constructor(cause?: any) {
    super({
      name: 'UNAUTHENTICATED',
      message: 'You must be logged in to access this endpoint',
      code: 401,
      cause,
    })
  }
}
