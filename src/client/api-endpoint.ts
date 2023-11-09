import type { ApiClient } from './api-client'
import type { Kient } from './kient'

export abstract class ApiEndpoint {
  protected readonly _client: Kient
  protected readonly _apiClient: ApiClient

  constructor(client: Kient, apiClient: ApiClient) {
    this._client = client
    this._apiClient = apiClient
  }
}
