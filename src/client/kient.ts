import { ChannelEndpoint } from '../endpoints/channel/channel.endpoint'
import { ApiClient } from './api-client'

export interface Endpoints {
  channel: ChannelEndpoint
}

/**
 * Entry class for interacting with Kick's API and WebSocket.
 *
 * @class Kient
 */
export class Kient {
  /** @hidden */
  private _apiClient: ApiClient
  /** @hidden */
  private _endpoints: Endpoints

  /** @hidden */
  constructor() { }

  /** @hidden */
  private async init() {
    this._apiClient = await ApiClient.create(this)
    this._endpoints = {
      channel: new ChannelEndpoint(this, this._apiClient),
    }
  }

  /**
   * Creates a new instance of Kient
   *
   * @example
   * ```ts
   * import { Kient } from 'kient'
   *
   * const kient = await Kient.create()
   * ```
   *
   * @static
   * @returns Kient
   */
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
   * const channelBans = await kient.api.channel.getChannel('xqc')
   * ```
   *
   * @readonly
   * @returns Endpoints
   */
  get api() {
    return this._endpoints
  }
}
