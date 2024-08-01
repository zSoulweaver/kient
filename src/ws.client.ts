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
	private readonly pusher: Pusher

	constructor(
		public kientInstance: Kient,
		options: WSClientOptions,
	) {
		const pusherOptions: Options = {
			cluster: options.pusher.cluster,
		}
		this.pusher = new Pusher(options.pusher.appKey, pusherOptions)
		this.pusher.connection.bind('connected', () =>
			this.kientInstance.emit(Events.Core.WebSocketConnected),
		)
		this.pusher.connection.bind('disconnected', () =>
			this.kientInstance.emit(Events.Core.WebSocketDisconnected),
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
