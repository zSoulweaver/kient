import type { ApiClient } from './api-client'
import type { Kient } from './kient'

/**
 * @hidden
 */
export class ApiEndpoint {
  /** @hidden */
  protected readonly _client: Kient
  /** @hidden */
  protected readonly _apiClient: ApiClient

  /**
   * @hidden
   */
  constructor(client: Kient, apiClient: ApiClient) {
    this._client = client
    this._apiClient = apiClient
  }
}
