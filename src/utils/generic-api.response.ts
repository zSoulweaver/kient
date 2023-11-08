import { Embedded } from '@deepkit/type'

export interface GenericApiResponse<T> {
  status: {
    error: boolean
    code: number
    message: string
  }
  data: Embedded<T>
}
