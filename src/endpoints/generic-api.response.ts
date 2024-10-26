export interface GenericApiResponse<T> {
  status: {
    error: boolean
    code: number
    message: string
  }
  data?: T
}
