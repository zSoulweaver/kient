import type { Kient } from 'kient'

export class Base {
	protected readonly _kient: Kient

	/** @internal */
	constructor(kient: Kient) {
		this._kient = kient
	}
}
