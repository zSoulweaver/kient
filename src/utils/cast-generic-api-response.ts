import type { ReceiveType } from '@deepkit/type'
import { assert, cast, getSerializeFunction, resolveReceiveType, serializer } from '@deepkit/type'
// eslint-disable-next-line ts/consistent-type-imports
import { GenericApiResponse } from '@/endpoints'
import { KientSomethingWentWrong } from '@/errors'

export function castGenericAPIResponse<T>(response: any, type?: ReceiveType<T>): GenericApiResponse<T> {
  try {
    const resolvedType = resolveReceiveType(type)
    const apiResponse = cast<GenericApiResponse<T>>(response)

    const fn = getSerializeFunction(resolvedType, serializer.deserializeRegistry)
    const item = fn(apiResponse.data) as T
    assert(item, undefined, type)
    return {
      ...apiResponse,
      data: item,
    }
  } catch (err) {
    throw new KientSomethingWentWrong({ cause: err })
  }
}
