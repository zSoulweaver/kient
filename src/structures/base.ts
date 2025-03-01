import type { Kient } from 'kient'

export class Base {
	readonly _kient: Kient

	constructor(kient: Kient) {
		this._kient = kient
	}
}
