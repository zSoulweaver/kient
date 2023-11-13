import { ErrorBase } from '@/utils/error.base'

type ErrorName =
  | '2FA_REQUIRED'
  | 'INCORRECT_CREDENTIALS'
  | 'INVALID_CREDENTIALS'
  | 'INVALID_2FA_CODE'


export class KientAuthenticationError extends ErrorBase<ErrorName> { }
