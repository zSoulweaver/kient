import { ErrorBase } from '@/utils/error-base'

type ErrorName =
  | 'SUBSCRIPTION_FAILED'

export class KientWsError extends ErrorBase<ErrorName> { }
