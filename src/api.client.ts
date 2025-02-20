import { type $Fetch, type FetchOptions, type ResponseType, ofetch } from 'ofetch'
import type { Kient } from './kient'

export interface APIClientOptions {
	ofetch?: FetchOptions<ResponseType>
}

/** @internal */
export class APIClient {
	private apiFetch: $Fetch
	private ofetchOptions: FetchOptions<ResponseType>

	constructor(
		public kient: Kient,
		options?: APIClientOptions,
	) {
		this.ofetchOptions = options?.ofetch || {}
		this.apiFetch = ofetch.create(this.ofetchOptions)
	}

	get fetch() {
		return this.apiFetch
	}

	setHeaders(headers: Record<string, string>) {
		this.apiFetch = ofetch.create({
			...this.ofetchOptions,
			headers: {
				...this.ofetchOptions.headers,
				...headers,
			},
		})
	}
}
