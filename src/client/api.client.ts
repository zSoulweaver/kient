import type { $Fetch } from 'ofetch'
import { ofetch } from 'ofetch'
import type { CycleTLSClient, CycleTLSRequestOptions, CycleTLSResponse } from 'cycletls'
import initCycleTLS from 'cycletls'
import exitHook from 'exit-hook'
import toughCookie from 'tough-cookie'
import type { Kient } from './kient'

// interface CallKickAPI {
//   endpoint: string
//   options?: FetchOptions
// }

interface CallKickAPICycles {
  endpoint: string
  method?: 'head' | 'get' | 'post' | 'put' | 'delete' | 'trace' | 'options' | 'connect' | 'patch'
  options?: CycleTLSRequestOptions
}

export class ApiClient {
  private readonly _client: Kient
  private readonly _apiFetch: $Fetch
  private _cycleClient: CycleTLSClient
  private readonly cookieJar = new toughCookie.CookieJar()
  private bearerToken = ''

  private constructor(client: Kient) {
    this._client = client
    this._apiFetch = ofetch.create({
      baseURL: 'https://kick.com',
    })
  }

  private async init() {
    this._cycleClient = await initCycleTLS()
    exitHook(() => {
      this._cycleClient.exit()
    })
  }

  public static async create(client: Kient) {
    const apiClient = new ApiClient(client)
    await apiClient.init()
    return apiClient
  }

  public async callKickApi(params: CallKickAPICycles) {
    const requestUrl = `https://kick.com/${params.endpoint}`
    const defaultOptions: CycleTLSRequestOptions = {
      ja3: '771,4865-4867-4866-49195-49199-52393-52392-49196-49200-49162-49161-49171-49172-51-57-47-53-10,0-23-65281-10-11-35-16-5-51-43-13-45-28-21,29-23-24-25-256-257,0',
      userAgent: 'KICK/1.0.13 Dalvik/2.1.0(Linux; U; Android 13; Pixel 6 Pro Build / TQ1A.221205.011)',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cookie': await this.cookieJar.getCookieString(requestUrl),
        'Authorization': `Bearer ${this.bearerToken}`,
      },
    }

    const response = await this._cycleClient(requestUrl, { ...defaultOptions, ...params.options }, params.method)
    await this.handleCookies(response, requestUrl)

    return response
    // return this._apiFetch(params.endpoint, params.options)
  }

  public async setBearerToken(token: string) {
    this.bearerToken = token
  }

  private async handleCookies(response: CycleTLSResponse, url: string) {
    if (!response.headers['Set-Cookie'])
      return

    if (Array.isArray(response.headers['Set-Cookie']))
      response.headers['Set-Cookie'].map(async cookieString => await this.cookieJar.setCookie(cookieString, url))
    else
      await this.cookieJar.setCookie(response.headers['Set-Cookie'], url)
  }
}
