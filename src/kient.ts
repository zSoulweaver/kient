import defu from 'defu'
import { EventEmitter } from 'tseep'
import { APIClient, type APIClientOptions } from './api.client'
import { ChannelsAPI } from './api/channels'
import type { KientEventEmitters } from './events'
import { WSClient, type WSClientOptions } from './ws.client'

type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T

export interface KientOptions {
	connectToWebsocket: boolean
	apiClient: APIClientOptions
	wsClient: WSClientOptions
}

const defaultKientOptions: KientOptions = {
	connectToWebsocket: true,
	apiClient: {
		ofetch: {
			baseURL: 'https://api.kick.com/private/v1',
		},
	},
	wsClient: {
		pusher: {
			appKey: '32cbd69e4b950bf97679',
			cluster: 'us2',
		},
	},
}

export class Kient extends EventEmitter<KientEventEmitters> {
	private readonly kientOptions: KientOptions
	_wsClient?: WSClient
	_apiClient: APIClient

	constructor(options?: DeepPartial<KientOptions>) {
		super()
		this.kientOptions = defu(options as KientOptions, defaultKientOptions)

		this.kientOptions.connectToWebsocket ? this.connectWebsocket() : null

		this._apiClient = new APIClient(this, this.kientOptions.apiClient)
	}

	connectWebsocket() {
		this._wsClient = new WSClient(this, this.kientOptions.wsClient)
	}

	api = {
		channel: new ChannelsAPI(this),
	}
}
