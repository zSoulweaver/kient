import { ErrorBase } from '@/utils/error.base'

type ErrorName =
  | 'SOMETHING_WENT_WRONG'

export class KientError extends ErrorBase<ErrorName> { }
