import { AuthEndpoint } from '../endpoints/auth/auth-endpoint'
import { ChannelEndpoint } from '../endpoints/channel/channel.endpoint'
import { ApiClient } from './api-client'

/**
 * Entry class for interacting with Kick's API and WebSocket.
 *
 * @class Kient
 */
export class Kient {
  /** @hidden */
  private _apiClient: ApiClient

  /**
   * Creates an instance of Kient.
   */
  constructor() { }

  private async init() {
    this._apiClient = await ApiClient.create(this)
  }

  static async create() {
    const kient = new Kient()
    await kient.init()
    return kient
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
      auth: new AuthEndpoint(this, this._apiClient),
      channel: new ChannelEndpoint(this, this._apiClient),
    }
  }
}
