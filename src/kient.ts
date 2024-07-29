import defu from 'defu'
import { WSClient } from './ws.client'
import { EventEmitter } from 'tseep'
import type { KientEventEmitters } from './events'
import { ChannelsAPI } from './api/channels'

type DeepRequired<T> = {
	[P in keyof T]-?: DeepRequired<NonNullable<T[P]>>
}

export interface KientOptions {
	connectToWebsocket?: boolean
	pusher?: {
		appKey?: string
		cluster?: string
	}
}

const defaultKientOptions: DeepRequired<KientOptions> = {
	connectToWebsocket: true,
	pusher: {
		appKey: '32cbd69e4b950bf97679',
		cluster: 'us2',
	},
}

export class Kient extends EventEmitter<KientEventEmitters> {
	private readonly kientOptions!: DeepRequired<KientOptions>
	private wsClient?: WSClient

	constructor(options?: KientOptions) {
		super()
		this.kientOptions = defu(options, defaultKientOptions)

		this.kientOptions.connectToWebsocket ? this.connectWebsocket() : null
	}

	connectWebsocket() {
		this.wsClient = new WSClient(this, {
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
