import { ChannelEndpoint } from '../endpoints/channel/channel.endpoint'
import { ApiClient } from './api-client'

export interface Endpoints {
  channel: ChannelEndpoint
}

export class Kient {
  private _apiClient: ApiClient
  private _endpoints: Endpoints

  private async init() {
    this._apiClient = await ApiClient.create(this)
    this._endpoints = {
      channel: new ChannelEndpoint(this, this._apiClient),
    }
  }

  static async create() {
    const kient = new Kient()
    await kient.init()
    return kient
  }

  get api() {
    return this._endpoints
  }
}
