import { ChannelEndpoint } from '../endpoints/channel/channel.endpoint'
import { ApiClient } from './api-client'

/**
 * Entry class for interacting with Kick's API and WebSocket.
 *
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
   * Returns object of available endpoint categories that can be consumed.
   *
   * @Example
   * ```ts
   * const kient = new Kient()
   * const channelBans = await kient.api().channel.getBans('example')
   * ```
   *
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
