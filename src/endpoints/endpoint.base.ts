import { ApiClient } from '@/client/api.client'
import { Kient } from '@/client/kient'
import { KientUnauthenticated } from '@/utils/unauthenticated.error'

export abstract class BaseEndpoint {
  protected readonly _client: Kient
  protected readonly _apiClient: ApiClient

  constructor(client: Kient, apiClient: ApiClient) {
    this._client = client
    this._apiClient = apiClient
  }

  protected checkAuthenticated() {
    if (!this._client.authenticated) {
      throw new KientUnauthenticated()
    }
  }
}
