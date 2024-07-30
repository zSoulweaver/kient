export interface LoginInput extends Record<string, any> {
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

export interface LoginOptions {
  kickAuthHeader?: string
  proxy?: string
}