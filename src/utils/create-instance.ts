import type { JSONPartial, NamingStrategy, ReceiveType, SerializationOptions, Serializer } from '@deepkit/type'
import { assert, getSerializeFunction, resolveReceiveType, serializer } from '@deepkit/type'
import type { Kient } from '@/client'
import { KientSomethingWentWrong } from '@/errors'

interface InstanceData<T> {
  data: JSONPartial<T> | unknown
  _client: Kient
}

export function createInstance<T>(data: InstanceData<T>, options?: SerializationOptions, serializerToUse: Serializer = serializer, namingStrategy?: NamingStrategy, type?: ReceiveType<T>): T {
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
