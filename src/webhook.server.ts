import { Hono } from 'hono'

import type { Kient } from 'kient'
import { WebhookHandler } from './webhook.handler'

export class WebhookServer {
	private kient: Kient
	private instance: Hono

	constructor(kient: Kient) {
		this.kient = kient
		this.instance = new Hono()
		this.initialiseRoutes()
	}

	private initialiseRoutes() {
		this.instance.post('/webhook', async (c) => {
			if (this.kient._kickPublicKey) {
				const messageId = c.req.header('Kick-Event-Message-Id')
				const signature = c.req.header('Kick-Event-Signature')
				const timestamp = c.req.header('Kick-Event-Message-Timestamp')
				const body = await c.req.text()

				if (!messageId || !timestamp || !body || !signature) {
					console.error('Missing required parameters for signature verification')
					return c.body(null, 400)
				}

				const signatureValid = WebhookHandler.verifySignature({
					publicKey: this.kient._kickPublicKey,
					messageId,
					signature,
					timestamp,
					body,
				})
				if (!signatureValid) {
					return c.body(null, 400)
				}

				const eventType = c.req.header('Kick-Event-Type')
				const eventVersion = c.req.header('Kick-Event-Version')

				if (!eventType || !eventVersion) {
					console.error('Missing required event type or version')
					return c.body(null, 400)
				}

				this.kient.handleWebhookEvent({
					messageId,
					timestamp,
					type: eventType,
					version: eventVersion,
					body,
				})
			} else {
				console.warn('Not handling webhook event as public key is not available')
			}

			return c.body(null, 200)
		})
	}

	get fetch() {
		return this.instance.fetch
	}
}
