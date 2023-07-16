import { ChannelEndpoint } from '../endpoints/channel/channel.endpoint'
import { ApiClient } from './api-client'

/**
 * @class Kient
 */
export class Kient {
  /** @hidden */
  private readonly _apiClient: ApiClient

  /**
   * Creates an instance of Kient.
   */
  constructor() {
    this._apiClient = new ApiClient(this)
  }

  /**
   * @readonly
   */
  api() {
    return {
      channel: new ChannelEndpoint(this, this._apiClient),
      test: new ChannelEndpoint(this, this._apiClient),
      user: new ChannelEndpoint(this, this._apiClient),
    }
  }
}
