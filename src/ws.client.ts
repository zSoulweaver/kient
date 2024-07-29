import type { Kient } from 'kient'
import Pusher, { type Channel, type Options } from 'pusher-js'
import { Events } from './events'

interface WSClientOptions {
	pusher: {
		appKey: string
		cluster: string
	}
}

export class WSClient {
	private readonly _kientInstance!: Kient
	private readonly pusher!: Pusher

	constructor(kientInstance: Kient, options: WSClientOptions) {
		this._kientInstance = kientInstance

		const pusherOptions: Options = {
			cluster: options.pusher.cluster,
		}
		this.pusher = new Pusher(options.pusher.appKey, pusherOptions)
		this.pusher.connection.bind('connected', () =>
			this._kientInstance.emit(Events.Core.WebSocketConnected),
		)
		this.pusher.connection.bind('disconnected', () =>
			this._kientInstance.emit(Events.Core.WebSocketDisconnected),
		)
	}

	async subscribe(channel: string) {
		return new Promise<Channel>((resolve, _) => {
			const subscribedChannel = this.pusher.subscribe(channel)
			subscribedChannel.bind(
				'pusher:subscription_error',
				(error: { type: string; error: string; status: number }) => {
					throw new Error(`Unable to subscribe to channel, error: ${error}`)
				},
			)
			subscribedChannel.bind('pusher:subscription_succeeded', () => {
				resolve(subscribedChannel)
			})
		})
	}

	async unsubscribe(channel: string) {
		await this.pusher.unsubscribe(channel)
	}
}
