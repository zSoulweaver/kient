import { ErrorBase } from '@/utils/error-base'

type ErrorName =
  | 'SOMETHING_WENT_WRONG'
  | '2FA_REQUIRED'
  | 'INCORRECT_CREDENTIALS'
  | 'INVALID_CREDENTIALS'
  | 'INVALID_2FA_CODE'
  | 'UNAUTHENTICATED'


export class KientAuthenticationError extends ErrorBase<ErrorName> { }
