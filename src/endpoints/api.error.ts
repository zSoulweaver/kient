import { ErrorBase } from '@/utils/error.base'

type ErrorName =
  | 'SOMETHING_WENT_WRONG'
  | 'UNAUTHENTICATED'

export class KientApiError extends ErrorBase<ErrorName> { }
