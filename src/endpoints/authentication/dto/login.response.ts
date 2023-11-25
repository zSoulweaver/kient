export interface LoginResponse {
  '2fa_required'?: boolean
  otp_required?: boolean
  token?: string
}

export interface LoginErrorResponse {
  message: string
}
