import type { $Fetch, FetchOptions } from 'ofetch'
import { ofetch } from 'ofetch'
import type { Kient } from './kient'

interface CallKickAPI {
  endpoint: string
  options?: FetchOptions
}

export class ApiClient {
  private readonly _client: Kient
  private readonly _apiFetch: $Fetch

  constructor(client: Kient) {
    this._client = client
    this._apiFetch = ofetch.create({
      baseURL: 'https://kick.com',
    })
  }

  callKickApi(params: CallKickAPI) {
    return this._apiFetch(params.endpoint, params.options)
  }
}
