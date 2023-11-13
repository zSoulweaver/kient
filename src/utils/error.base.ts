export class ErrorBase<T extends string> extends Error {
  name: T
  message: string
  cause?: any

  constructor(error: { name: T, message?: string, cause?: any }) {
    super()
    this.name = error.name
    this.message = error.message ?? ''
    this.cause = error.cause
  }
}
