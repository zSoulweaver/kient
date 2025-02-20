import type { JSONEntity } from '@deepkit/type'

export type KientObject<T> = JSONEntity<Omit<T, 'kient' | 'toObject' | 'toJSON'>>
