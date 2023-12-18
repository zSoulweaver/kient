export class ErrorBase extends Error {
  public constructor(message = '', options?: ErrorOptions) {
    super(message, options)

    Object.setPrototypeOf(this, new.target.prototype)
    Error.captureStackTrace?.(this, new.target.constructor)
  }

  get name() {
    return this.constructor.name
  }
}
