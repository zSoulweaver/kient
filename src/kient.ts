import defu from 'defu'
import { EventEmitter } from 'tseep'
import { APIClient, type APIClientOptions } from './api.client'
import type { KientEventEmitters } from './events'
import { CategoryAPI } from './api/category'
import { UserAPI } from './api/user'
import { ChannelAPI } from './api/channel'
import { ChatAPI } from './api/chat'
import { MiscAPI } from './api/misc'
import { WebhookAPI } from './api/webhook'
import { WebhookServer } from './webhook.server'
import { WebhookHandler } from './webhook.handler'
import type { WebhookEvent } from './structures/base-event'

type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T

export interface KientOptions {
	apiClient: APIClientOptions
	webhookServer: {
		enable: boolean
	}
}

const defaultKientOptions: KientOptions = {
	apiClient: {
		ofetch: {
			baseURL: 'https://api.kick.com/public/v1',
		},
	},
	webhookServer: {
		enable: true,
	},
}

export class Kient extends EventEmitter<KientEventEmitters> {
	private readonly kientOptions: KientOptions
	private _webhookServer?: WebhookServer
	_webhookHandler: WebhookHandler
	_apiClient: APIClient
	_kickPublicKey?: string

	constructor(options?: DeepPartial<KientOptions>) {
		super()
		this.kientOptions = defu(options as KientOptions, defaultKientOptions)

		if (this.kientOptions.webhookServer.enable) {
			this.createWebhookServer()
		}

		this._apiClient = new APIClient(this, this.kientOptions.apiClient)
		this._webhookHandler = new WebhookHandler(this)
	}

	createWebhookServer() {
		this._webhookServer = new WebhookServer(this)
	}

	async setAuthToken(token: string) {
		this._apiClient.setHeaders({
			Authorization: `Bearer ${token}`,
		})

		this._kickPublicKey = await this.api.misc.getPublicKey()
	}

	get webhookServerFetch() {
		return this._webhookServer?.fetch
	}

	handleWebhookEvent(event: WebhookEvent) {
		this._webhookHandler.handleEvent(event)
	}

	api = {
		misc: new MiscAPI(this),
		category: new CategoryAPI(this),
		user: new UserAPI(this),
		channel: new ChannelAPI(this),
		chat: new ChatAPI(this),
		webhook: new WebhookAPI(this),
	}
}
