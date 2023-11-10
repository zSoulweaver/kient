import { AuthenticationEndpoint } from '@/endpoints/authentication/authentication.endpoint'
import { ChannelEndpoint } from '@/endpoints/channel/channel.endpoint'
import { ApiClient } from './api-client'

export interface Endpoints {
  authentication: AuthenticationEndpoint
  channel: ChannelEndpoint
}

export class Kient {
  private _apiClient: ApiClient
  private _endpoints: Endpoints

  private async init() {
    this._apiClient = await ApiClient.create(this)
    this._endpoints = {
      authentication: new AuthenticationEndpoint(this, this._apiClient),
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
