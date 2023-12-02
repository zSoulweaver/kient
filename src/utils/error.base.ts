export class ErrorBase<T extends string> extends Error {
  public name: T
  public message: string
  public code?: number
  public cause?: any

  public constructor(error: { name: T; message?: string; code?: number; cause?: any }) {
    super()
    this.name = error.name
    this.message = error.message ?? ''
    this.code = error.code
    this.cause = error.cause
  }
}
