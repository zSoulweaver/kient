import type { NamingStrategy, ReceiveType, SerializationOptions, Serializer } from '@deepkit/type'
import { assert, getSerializeFunction, resolveReceiveType, serializer } from '@deepkit/type'
import { KientSomethingWentWrong } from '@/errors'

type ClassProperties<C> = {
  [K in keyof C as C[K] extends Function ? never : K]: C[K]
}

export function createInstance<T>(data: ClassProperties<T>, options?: SerializationOptions, serializerToUse: Serializer = serializer, namingStrategy?: NamingStrategy, type?: ReceiveType<T>): T {
  const resolvedType = resolveReceiveType(type)
  try {
    const fn = getSerializeFunction(resolvedType, serializerToUse.deserializeRegistry, namingStrategy)
    const item = fn(data, options) as T
    assert(item, undefined, type)
    return item
  } catch (err) {
    throw new KientSomethingWentWrong({ cause: err })
  }
}
