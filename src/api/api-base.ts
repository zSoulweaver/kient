import type { Kient } from '../kient'

export class APIBase {
	readonly kient: Kient

	constructor(kient: Kient) {
		this.kient = kient
	}
}
