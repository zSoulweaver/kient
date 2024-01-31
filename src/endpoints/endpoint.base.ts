import type { ApiClient } from '@/core/api.client'
import type { Kient } from '@/kient'
import { KientUnauthenticated } from '@/errors'

export abstract class BaseEndpoint {
  /** @internal */
  protected readonly _client: Kient
  /** @internal */
  protected readonly _apiClient: ApiClient

  /** @internal */
  public constructor(client: Kient) {
    this._client = client
    this._apiClient = client._apiClient
  }

  /** @internal */
  protected checkAuthenticated() {
    if (!this._client.authenticated)
      throw new KientUnauthenticated()
  }
}
