import { ApiClient } from '@/client/api.client'
import { Kient } from '@/client/kient'

export abstract class BaseEndpoint {
  protected readonly _client: Kient
  protected readonly _apiClient: ApiClient

  constructor(client: Kient, apiClient: ApiClient) {
    this._client = client
    this._apiClient = apiClient
  }
}
