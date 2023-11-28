import type { ApiClient } from '@/client/api.client'
import type { Kient } from '@/client/kient'
import { KientUnauthenticated } from '@/utils/unauthenticated.error'

export abstract class BaseEndpoint {
  protected readonly _client: Kient
  protected readonly _apiClient: ApiClient

  constructor(client: Kient) {
    this._client = client
    this._apiClient = client._apiClient
  }

  protected checkAuthenticated() {
    if (!this._client.authenticated)
      throw new KientUnauthenticated()
  }
}
