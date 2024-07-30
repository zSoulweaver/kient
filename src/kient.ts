import defu from 'defu'
import { WSClient } from './ws.client'
import { EventEmitter } from 'tseep'
import type { KientEventEmitters } from './events'
import { ChannelsAPI } from './api/channels'
import { APIClient, type APIClientOptions } from './api.client'

type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T

export interface KientOptions {
	connectToWebsocket: boolean
	pusher: {
		appKey: string
		cluster: string
	}
	apiClient: APIClientOptions
}

const defaultKientOptions: KientOptions = {
	connectToWebsocket: true,
	pusher: {
		appKey: '32cbd69e4b950bf97679',
		cluster: 'us2',
	},
	apiClient: {
		ofetch: {
			baseURL: 'https://api.kick.com/private/v1',
		},
	},
}

export class Kient extends EventEmitter<KientEventEmitters> {
	private readonly kientOptions!: KientOptions
	_wsClient?: WSClient
	_apiClient!: APIClient

	constructor(options?: DeepPartial<KientOptions>) {
		super()
		this.kientOptions = defu(options as KientOptions, defaultKientOptions)

		this.kientOptions.connectToWebsocket ? this.connectWebsocket() : null

		this._apiClient = new APIClient(this, this.kientOptions.apiClient)
	}

	connectWebsocket() {
		this._wsClient = new WSClient(this, {
			pusher: {
				appKey: this.kientOptions.pusher.appKey,
				cluster: this.kientOptions.pusher.cluster,
			},
		})
	}

	api = {
		channel: new ChannelsAPI(this),
	}
}
