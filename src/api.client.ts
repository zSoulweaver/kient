import { ofetch, type $Fetch, type FetchOptions, type ResponseType } from 'ofetch'
import type { Kient } from './kient'

export interface APIClientOptions {
	ofetch?: FetchOptions<ResponseType>
}

export class APIClient {
	private readonly _kient!: Kient
	private readonly apiFetch!: $Fetch

	constructor(kient: Kient, options?: APIClientOptions) {
		this._kient = kient

		this.apiFetch = ofetch.create(options?.ofetch || {})
	}

	get fetch() {
		return this.apiFetch
	}
}
