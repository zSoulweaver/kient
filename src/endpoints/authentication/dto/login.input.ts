export interface LoginInput {
  email: string
  password: string
  one_time_password?: string | number
  isMobileRequest: boolean
}

export interface LoginCredentials {
  email: string
  password: string
  otc?: number | string
}
