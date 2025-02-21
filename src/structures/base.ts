import type { Kient } from 'kient'

export class Base<T> {
	readonly kient: Kient
	readonly raw: T

	constructor(kient: Kient, raw: T) {
		this.kient = kient
		this.raw = raw
	}
}
