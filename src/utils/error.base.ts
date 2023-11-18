export class ErrorBase<T extends string> extends Error {
  name: T
  message: string
  code?: number
  cause?: any

  constructor(error: { name: T, message?: string, code?: number, cause?: any }) {
    super()
    this.name = error.name
    this.message = error.message ?? ''
    this.code = error.code
    this.cause = error.cause
  }
}
