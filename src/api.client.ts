import { ofetch, type $Fetch, type FetchOptions, type ResponseType } from 'ofetch'
import type { Kient } from './kient'

export interface APIClientOptions {
	ofetch?: FetchOptions<ResponseType>
}

export class APIClient {
	private readonly apiFetch: $Fetch

	constructor(
		public kient: Kient,
		options?: APIClientOptions,
	) {
		this.apiFetch = ofetch.create(options?.ofetch || {})
	}

	get fetch() {
		return this.apiFetch
	}
}
