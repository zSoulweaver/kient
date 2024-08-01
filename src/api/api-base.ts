import type { Kient } from '../kient'

export class APIBase {
	protected readonly kient: Kient

	constructor(kient: Kient) {
		this.kient = kient
	}
}
