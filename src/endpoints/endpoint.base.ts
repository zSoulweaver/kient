import type { ApiClient } from '@/client/api.client'
import type { Kient } from '@/client/kient'
import { KientUnauthenticated } from '@/utils/unauthenticated.error'

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
