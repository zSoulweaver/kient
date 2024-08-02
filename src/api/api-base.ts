import type { Kient } from '../kient'

/** @internal */
export class APIBase {
	protected readonly kient: Kient

	constructor(kient: Kient) {
		this.kient = kient
	}
}
