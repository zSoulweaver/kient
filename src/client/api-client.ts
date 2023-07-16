import type { $Fetch } from 'ofetch'
import { ofetch } from 'ofetch'
import type { Kient } from './kient'

/**
  * @hidden
 */
export class ApiClient {
  private readonly _client: Kient
  private readonly _apiFetch: $Fetch

  constructor(client: Kient) {
    this._client = client
    this._apiFetch = ofetch.create({
      baseURL: 'https://kick.com',
    })
  }

  callKickApi(params: { endpoint: string }) {
    return this._apiFetch(params.endpoint)
  }
}
