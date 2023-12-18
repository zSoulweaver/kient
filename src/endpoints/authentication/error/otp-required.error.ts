import { ErrorBase } from '@/utils'

type OTPType = 'email' | 'authenticator'

export class KientOTPRequired extends ErrorBase {
  type: OTPType

  constructor(type: OTPType, options?: ErrorOptions) {
    if (type === 'email')
      super('Login requires one time code from email', options)

    if (type === 'authenticator')
      super('Login requires authenticator app token', options)
  }
}
